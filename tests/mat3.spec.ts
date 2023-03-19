import { expect, describe, it, beforeEach } from 'vitest';
import "./test-utils"
import { Mat3 } from "../src/mat3"
import { Mat4 } from "../src/mat4"
import { Vec3 } from "../src/vec3"

describe("Mat3", function() {
  describe("constructor", () => {
    it("should return an identity Mat3 if called with no arguments", () => {
      expect(new Mat3()).toBeVec(
        1, 0, 0,
        0, 1, 0,
        0, 0, 1)
    });

    it("should return Mat3(m0, m1, ...m8) if called with (m0, m1, ...m8)", () => {
      expect(new Mat3(
        1, 2, 3,
        4, 5, 6,
        7, 8, 9)).toBeVec(
        1, 2, 3,
        4, 5, 6,
        7, 8, 9);
    });

    it("should return Mat3(x, x, x, ...) if called with (x)", () => {
      expect(new Mat3(1)).toBeVec(
        1, 1, 1,
        1, 1, 1,
        1, 1, 1);
    });

    it("should return Mat3(m0, m1, ...m8) if called with ([m0, m1, ...m8])", () => {
      expect(new Mat3([
        1, 2, 3,
        4, 5, 6,
        7, 8, 9])).toBeVec(
        1, 2, 3,
        4, 5, 6,
        7, 8, 9);
    });

    it("should return Mat3(m0, m1, ...m8) if called with (Mat3(m0, m1, ...m9))", () => {
      let v = new Mat3(
        1, 2, 3,
        4, 5, 6,
        7, 8, 9);
      expect(new Mat3(v)).toBeVec(v);
    });

    it("should return Mat3(m0, m1, ...m8) if called with (Float32Array([m0, m1, ...m8]))", () => {
      let arr = new Float32Array([
        1, 2, 3,
        4, 5, 6,
        7, 8, 9]);
      expect(new Mat3(arr)).toBeVec(arr);
    });
  });

  describe("static", () => {
    let out, matA, matB, identity, result;

    beforeEach(function() {
        matA = new Float32Array([1, 0, 0,
                0, 1, 0,
                1, 2, 1]);

        matB = new Float32Array([1, 0, 0,
                0, 1, 0,
                3, 4, 1]);

        out =  new Float32Array([0, 0, 0,
                0, 0, 0,
                0, 0, 0]);

        identity = new Float32Array([1, 0, 0,
                    0, 1, 0,
                    0, 0, 1]);
    });

    describe("normalFromMat4", function() {
        beforeEach(function() {
            matA = new Float32Array([1, 0, 0, 0,
                    0, 1, 0, 0,
                    0, 0, 1, 0,
                    0, 0, 0, 1]);
            result = Mat3.normalFromMat4(out, matA);
        });

        it("should return out", function() { expect(result).toBe(out); });

        describe("with translation and rotation", function() {
            beforeEach(function() {
                Mat4.translate(matA, matA, [2, 4, 6]);
                Mat4.rotateX(matA, matA, Math.PI / 2);

                result = Mat3.normalFromMat4(out, matA);
            });

            it("should give rotated matrix", function() {
                expect(result).toBeVec(1, 0, 0,
                                       0, 0, 1,
                                       0,-1, 0);
            });

            describe("and scale", function() {
                beforeEach(function() {
                    Mat4.scale(matA, matA, [2, 3, 4]);

                    result = Mat3.normalFromMat4(out, matA);
                });

                it("should give rotated matrix", function() {
                    expect(result).toBeVec(0.5, 0,    0,
                                                 0,   0,    0.333333,
                                                 0,  -0.25, 0);
                });
            });
        });
    });

    describe("fromQuat", function() {
        let q;

        beforeEach(function() {
            q = [ 0, -0.7071067811865475, 0, 0.7071067811865475 ];
            result = Mat3.fromQuat(out, q);
        });

        it("should return out", function() { expect(result).toBe(out); });

        it("should rotate a vector the same as the original quat", function() {
            let vecOut = new Vec3();
            Vec3.transformQuat(vecOut, [0,0,-1], q);
            expect(Vec3.transformMat3([0, 0, 0], [0,0,-1], out)).toBeVec(vecOut);
        });

        it("should rotate a vector by PI/2 radians", function() {
            expect(Vec3.transformMat3([0, 0, 0], [0,0,-1], out)).toBeVec(1,0,0);
        });
    });

    describe("fromMat4", function() {
        beforeEach(function() {
            result = Mat3.fromMat4(out, [ 1, 2, 3, 4,
                                          5, 6, 7, 8,
                                          9,10,11,12,
                                         13,14,15,16]); });

        it("should return out", function() { expect(result).toBe(out); });

        it("should calculate proper Mat3", function() {
            expect(out).toBeVec( 1, 2, 3,
                                       5, 6, 7,
                                       9,10,11);
        });
    });

    describe("scale", function() {
        beforeEach(function() { result = Mat3.scale(out, matA, [2,2]); });
        it("should return out", function() { expect(result).toBe(out); });
        it('should place proper values in out', function() {
            expect(out).toBeVec( 2, 0, 0,
                                       0, 2, 0,
                                       1, 2, 1 );
        });
    });

    describe("create", function() {
        beforeEach(function() { result = Mat3.create(); });
        it("should return a 9 element array initialized to a 3x3 identity matrix", function() { expect(result).toBeVec(identity); });
    });

    describe("clone", function() {
        beforeEach(function() { result = Mat3.clone(matA); });
        it("should return a 9 element array initialized to the values in matA", function() { expect(result).toBeVec(matA); });
    });

    describe("copy", function() {
        beforeEach(function() { result = Mat3.copy(out, matA); });
        it("should place values into out", function() { expect(out).toBeVec(matA); });
        it("should return out", function() { expect(result).toBe(out); });
    });

    describe("identity", function() {
        beforeEach(function() { result = Mat3.identity(out); });
        it("should place values into out", function() { expect(result).toBeVec(identity); });
        it("should return out", function() { expect(result).toBe(out); });
    });

    describe("transpose", function() {
        describe("with a separate output matrix", function() {
            beforeEach(function() { result = Mat3.transpose(out, matA); });

            it("should place values into out", function() {
                expect(out).toBeVec(
                    1, 0, 1,
                    0, 1, 2,
                    0, 0, 1
                );
            });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() {
                expect(matA).toBeVec(
                    1, 0, 0,
                    0, 1, 0,
                    1, 2, 1
                );
            });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = Mat3.transpose(matA, matA); });

            it("should place values into matA", function() {
                expect(matA).toBeVec(
                    1, 0, 1,
                    0, 1, 2,
                    0, 0, 1
                );
            });
            it("should return matA", function() { expect(result).toBe(matA); });
        });
    });

    describe("invert", function() {
        describe("with a separate output matrix", function() {
            beforeEach(function() { result = Mat3.invert(out, matA); });

            it("should place values into out", function() {
                expect(out).toBeVec(
                    1, 0, 0,
                    0, 1, 0,
                    -1, -2, 1
                );
            });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() {
                expect(matA).toBeVec(
                    1, 0, 0,
                    0, 1, 0,
                    1, 2, 1
                );
            });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = Mat3.invert(matA, matA); });

            it("should place values into matA", function() {
                expect(matA).toBeVec(
                    1, 0, 0,
                    0, 1, 0,
                    -1, -2, 1
                );
            });
            it("should return matA", function() { expect(result).toBe(matA); });
        });
    });

    describe("adjoint", function() {
        describe("with a separate output matrix", function() {
            beforeEach(function() { result = Mat3.adjoint(out, matA); });

            it("should place values into out", function() {
                expect(out).toBeVec(
                    1, 0, 0,
                    0, 1, 0,
                    -1, -2, 1
                );
            });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() {
                expect(matA).toBeVec(
                    1, 0, 0,
                    0, 1, 0,
                    1, 2, 1
                );
            });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = Mat3.adjoint(matA, matA); });

            it("should place values into matA", function() {
                expect(matA).toBeVec(
                    1, 0, 0,
                    0, 1, 0,
                    -1, -2, 1
                );
            });
            it("should return matA", function() { expect(result).toBe(matA); });
        });
    });

    describe("determinant", function() {
        beforeEach(function() { result = Mat3.determinant(matA); });

        it("should return the determinant", function() { expect(result).toEqual(1); });
    });

    describe("multiply", function() {
        it("should have an alias called 'mul'", function() { expect(Mat3.mul).toEqual(Mat3.multiply); });

        describe("with a separate output matrix", function() {
            beforeEach(function() { result = Mat3.multiply(out, matA, matB); });

            it("should place values into out", function() {
                expect(out).toBeVec(
                    1, 0, 0,
                    0, 1, 0,
                    4, 6, 1
                );
            });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() {
                expect(matA).toBeVec(
                    1, 0, 0,
                    0, 1, 0,
                    1, 2, 1
                );
            });
            it("should not modify matB", function() {
                expect(matB).toBeVec(
                    1, 0, 0,
                    0, 1, 0,
                    3, 4, 1
                );
            });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = Mat3.multiply(matA, matA, matB); });

            it("should place values into matA", function() {
                expect(matA).toBeVec(
                    1, 0, 0,
                    0, 1, 0,
                    4, 6, 1
                );
            });
            it("should return matA", function() { expect(result).toBe(matA); });
            it("should not modify matB", function() {
                expect(matB).toBeVec(
                    1, 0, 0,
                    0, 1, 0,
                    3, 4, 1
                );
            });
        });

        describe("when matB is the output matrix", function() {
            beforeEach(function() { result = Mat3.multiply(matB, matA, matB); });

            it("should place values into matB", function() {
                expect(matB).toBeVec(
                    1, 0, 0,
                    0, 1, 0,
                    4, 6, 1
                );
            });
            it("should return matB", function() { expect(result).toBe(matB); });
            it("should not modify matA", function() {
                expect(matA).toBeVec(
                    1, 0, 0,
                    0, 1, 0,
                    1, 2, 1
                );
            });
        });
    });

    describe("str", function() {
        beforeEach(function() { result = Mat3.str(matA); });

        it("should return a string representation of the matrix", function() { expect(result).toEqual("Mat3(1, 0, 0, 0, 1, 0, 1, 2, 1)"); });
    });

   describe("frob", function() {
        beforeEach(function() { result = Mat3.frob(matA); });
        it("should return the Frobenius Norm of the matrix", function() { expect(result).toEqual( Math.sqrt(Math.pow(1, 2) + Math.pow(0, 2) + Math.pow(0, 2) + Math.pow(0, 2) + Math.pow(1, 2) + Math.pow(0, 2) + Math.pow(1, 2) + Math.pow(2, 2) + Math.pow(1, 2))); });
   });

    describe("add", function() {
        beforeEach(function() {
            matA = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            matB = [10, 11, 12, 13, 14, 15, 16, 17, 18];
        });
        describe("with a separate output matrix", function() {
            beforeEach(function() {
                result = Mat3.add(out, matA, matB);
            });

            it("should place values into out", function() { expect(out).toBeVec(11, 13, 15, 17, 19, 21, 23, 25, 27); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeVec(1, 2, 3, 4, 5, 6, 7, 8, 9); });
            it("should not modify matB", function() { expect(matB).toBeVec(10, 11, 12, 13, 14, 15, 16, 17, 18); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = Mat3.add(matA, matA, matB); });

            it("should place values into matA", function() { expect(matA).toBeVec(11, 13, 15, 17, 19, 21, 23, 25, 27); });
            it("should return matA", function() { expect(result).toBe(matA); });
            it("should not modify matB", function() { expect(matB).toBeVec(10, 11, 12, 13, 14, 15, 16, 17, 18); });
        });

        describe("when matB is the output matrix", function() {
            beforeEach(function() { result = Mat3.add(matB, matA, matB); });

            it("should place values into matB", function() { expect(matB).toBeVec(11, 13, 15, 17, 19, 21, 23, 25, 27); });
            it("should return matB", function() { expect(result).toBe(matB); });
            it("should not modify matA", function() { expect(matA).toBeVec(1, 2, 3, 4, 5, 6, 7, 8, 9); });
        });
    });

    describe("subtract", function() {
        beforeEach(function() {
            matA = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            matB = [10, 11, 12, 13, 14, 15, 16, 17, 18];
        });
        it("should have an alias called 'sub'", function() { expect(Mat3.sub).toEqual(Mat3.subtract); });

        describe("with a separate output matrix", function() {
            beforeEach(function() { result = Mat3.subtract(out, matA, matB); });

            it("should place values into out", function() { expect(out).toBeVec(-9, -9, -9, -9, -9, -9, -9, -9, -9); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeVec(1, 2, 3, 4, 5, 6, 7, 8, 9); });
            it("should not modify matB", function() { expect(matB).toBeVec(10, 11, 12, 13, 14, 15, 16, 17, 18); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = Mat3.subtract(matA, matA, matB); });

            it("should place values into matA", function() { expect(matA).toBeVec(-9, -9, -9, -9, -9, -9, -9, -9, -9); });
            it("should return matA", function() { expect(result).toBe(matA); });
            it("should not modify matB", function() { expect(matB).toBeVec(10, 11, 12, 13, 14, 15, 16, 17, 18); });
        });

        describe("when matB is the output matrix", function() {
            beforeEach(function() { result = Mat3.subtract(matB, matA, matB); });

            it("should place values into matB", function() { expect(matB).toBeVec(-9, -9, -9, -9, -9, -9, -9, -9, -9); });
            it("should return matB", function() { expect(result).toBe(matB); });
            it("should not modify matA", function() { expect(matA).toBeVec(1, 2, 3, 4, 5, 6, 7, 8, 9); });
        });
    });

    describe("fromValues", function() {
        beforeEach(function() { result = Mat3.fromValues(1, 2, 3, 4, 5, 6, 7, 8, 9); });
        it("should return a 9 element array initialized to the values passed", function() { expect(result).toBeVec(1, 2, 3, 4, 5, 6, 7, 8, 9); });
    });

    describe("set", function() {
        beforeEach(function() { result = Mat3.set(out, 1, 2, 3, 4, 5, 6, 7, 8, 9); });
        it("should place values into out", function() { expect(out).toBeVec(1, 2, 3, 4, 5, 6, 7, 8, 9); });
        it("should return out", function() { expect(result).toBe(out); });
    });

    describe("multiplyScalar", function() {
        beforeEach(function() {
            matA = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        });
        describe("with a separate output matrix", function() {
            beforeEach(function() { result = Mat3.multiplyScalar(out, matA, 2); });

            it("should place values into out", function() { expect(out).toBeVec(2, 4, 6, 8, 10, 12, 14, 16, 18); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeVec(1, 2, 3, 4, 5, 6, 7, 8, 9); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = Mat3.multiplyScalar(matA, matA, 2); });

            it("should place values into matA", function() { expect(matA).toBeVec(2, 4, 6, 8, 10, 12, 14, 16, 18); });
            it("should return matA", function() { expect(result).toBe(matA); });
        });
    });

    describe("multiplyScalarAndAdd", function() {
        beforeEach(function() {
            matA = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            matB = [10, 11, 12, 13, 14, 15, 16, 17, 18];
        });
        describe("with a separate output matrix", function() {
            beforeEach(function() { result = Mat3.multiplyScalarAndAdd(out, matA, matB, 0.5); });

            it("should place values into out", function() { expect(out).toBeVec(6, 7.5, 9, 10.5, 12, 13.5, 15, 16.5, 18); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeVec(1, 2, 3, 4, 5, 6, 7, 8, 9); });
            it("should not modify matB", function() { expect(matB).toBeVec(10, 11, 12, 13, 14, 15, 16, 17, 18); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = Mat3.multiplyScalarAndAdd(matA, matA, matB, 0.5); });

            it("should place values into matA", function() { expect(matA).toBeVec(6, 7.5, 9, 10.5, 12, 13.5, 15, 16.5, 18); });
            it("should return matA", function() { expect(result).toBe(matA); });
            it("should not modify matB", function() { expect(matB).toBeVec(10, 11, 12, 13, 14, 15, 16, 17, 18); });
        });

        describe("when matB is the output matrix", function() {
            beforeEach(function() { result = Mat3.multiplyScalarAndAdd(matB, matA, matB, 0.5); });

            it("should place values into matB", function() { expect(matB).toBeVec(6, 7.5, 9, 10.5, 12, 13.5, 15, 16.5, 18); });
            it("should return matB", function() { expect(result).toBe(matB); });
            it("should not modify matA", function() { expect(matA).toBeVec(1, 2, 3, 4, 5, 6, 7, 8, 9); });
        });
    });

    describe("projection", function() {
        beforeEach(function() {
            result = Mat3.projection(out, 100.0, 200.0);
        });

        it("should return out", function() { expect(result).toBe(out); });

        it("should give projection matrix", function() {
            expect(result).toBeVec(0.02,     0, 0,
                                            0, -0.01, 0,
                                           -1,     1, 1);
        });
    });

    describe("exactEquals", function() {
        let matC, r0, r1;
        beforeEach(function() {
            matA = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            matB = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            matC = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            r0 = Mat3.exactEquals(matA, matB);
            r1 = Mat3.exactEquals(matA, matC);
        });

        it("should return true for identical matrices", function() { expect(r0).toBe(true); });
        it("should return false for different matrices", function() { expect(r1).toBe(false); });
        it("should not modify matA", function() { expect(matA).toBeVec(0, 1, 2, 3, 4, 5, 6, 7, 8); });
        it("should not modify matB", function() { expect(matB).toBeVec(0, 1, 2, 3, 4, 5, 6, 7, 8); });
    });

    describe("equals", function() {
        let matC, matD, r0, r1, r2;
        beforeEach(function() {
            matA = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            matB = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            matC = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            matD = [1e-16, 1, 2, 3, 4, 5, 6, 7, 8];
            r0 = Mat3.equals(matA, matB);
            r1 = Mat3.equals(matA, matC);
            r2 = Mat3.equals(matA, matD);
        });
        it("should return true for identical matrices", function() { expect(r0).toBe(true); });
        it("should return false for different matrices", function() { expect(r1).toBe(false); });
        it("should return true for close but not identical matrices", function() { expect(r2).toBe(true); });
        it("should not modify matA", function() { expect(matA).toBeVec(0, 1, 2, 3, 4, 5, 6, 7, 8); });
        it("should not modify matB", function() { expect(matB).toBeVec(0, 1, 2, 3, 4, 5, 6, 7, 8); });
    });
  });
});