import { expect, describe, it, beforeEach } from 'vitest';
import { Quat2, Quat2Like } from "../src/quat2"
import "./test-utils"
import { Vec3, Vec3Like } from '../src/vec3';
import { Quat, QuatLike } from '../src/quat';
import { Mat4 } from '../src/mat4';

describe("Quat2", () => {
  describe("constructor", () => {
    it("should return Quat2(0, 0, 0, 1, 0, 0, 0, 0) if called with no arguments", () => {
      expect(new Quat2()).toBeVec(0, 0, 0, 1, 0, 0, 0, 0);
    });

    it("should return Quat(x, y, z, w, x2, y2, z2, w2) if called with (x, y, z, w, x2, y2, z2, w2)", () => {
      expect(new Quat2(1, 2, 3, 4, 5, 6, 7, 8)).toBeVec(1, 2, 3, 4, 5, 6, 7, 8);
      expect(new Quat2(-3, 4.4, -5.6, 7.8, 9.0, -10.11, 12.13, -14.15)).toBeVec(-3, 4.4, -5.6, 7.8, 9.0, -10.11, 12.13, -14.15);
    });

    it("should return Quat(x, x, x, x, x, x, x, x) if called with (x)", () => {
      expect(new Quat2(1)).toBeVec(1, 1, 1, 1, 1, 1, 1, 1);
      expect(new Quat2(-2.3)).toBeVec(-2.3, -2.3, -2.3, -2.3, -2.3, -2.3, -2.3, -2.3);
    });

    it("should return Quat(x, y, z, w) if called with ([x, y, z, w])", () => {
      expect(new Quat2([1, 2, 3, 4, 5, 6, 7, 8])).toBeVec(1, 2, 3, 4, 5, 6, 7, 8);
      expect(new Quat2([-3, 4.4, -5.6, 7.8, 9.0, -10.11, 12.13, -14.15])).toBeVec(-3, 4.4, -5.6, 7.8, 9.0, -10.11, 12.13, -14.15);
    });

    it("should return Quat(x, y, z, w, x2, y2, z2, w2) if called with (Quat(x, y, z, w, x2, y2, z2, w2))", () => {
      let v = new Quat2(1, 2, 3, 4, 5, 6, 7, 8);
      expect(new Quat2(v)).toBeVec(v);
    });

    it("should return Quat(x, y, z, w, x2, y2, z2, w2) if called with (Float32Array([x, y, z, w, x2, y2, z2, w2]))", () => {
      let arr = new Float32Array([1.2, 3.4, 5.6, 7.8, 9.10, 11.12, 13.14, 15.16]);
      expect(new Quat2(arr)).toBeVec(arr);
    });
  });

  describe("static", () => {
    let out: Quat2;
    let outVec: Vec3;
    let quat2A: Quat2Like;
    let quat2B: Quat2Like;
    let result: any;
    let resultVec: Vec3Like;
    let outQuat: QuatLike;
    let vec: Vec3Like;

    beforeEach(function() {
        quat2A = new Quat2(1, 2, 3, 4, 2, 5, 6, -2);
        quat2B = new Quat2(5, 6, 7, 8, 9, 8, 6, -4);
        out = new Quat2();
        outVec = new Vec3();
        outQuat = new Quat();
        vec = new Vec3(1, 1, -1);
    });

    describe("translate", function() {
        let matrixA = Mat4.create(), matOut = Mat4.create(), quatOut = Quat2.create();
        beforeEach(function() {
              //quat2A only seems to work when created using this function?
              quat2B = Quat2.fromRotationTranslation(quat2A, [1,2,3,4], [-5, 4, 10]);
              Quat2.normalize(quat2A, quat2A);
              Mat4.fromQuat2(matrixA, quat2A);
        });

        describe("with a separate output quaternion", function() {
            beforeEach(function() {
                    result = Quat2.translate(out, quat2A, vec);
                    //Same thing with a matrix
                    Mat4.translate(matOut, matrixA, vec);
                    Quat2.fromMat4(quatOut, matOut);
                });

            it("should place values into out", function() { expect(out).toBeQuat2(quatOut); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quat2A", function() { expect(quat2A).toBeQuat2(quat2B); });
            it("should not modify vec", function() { expect(vec).toBeVec(1,1,-1); });
        });

        describe("when quat2A is the output quaternion", function() {
            beforeEach(function() {
                    result = Quat2.translate(quat2A, quat2A, vec);
                    //Same thing with a matrix
                    Mat4.translate(matOut, matrixA, vec);
                    Quat2.fromMat4(quatOut, matOut);
                });

            it("should place values into quat2A", function() { expect(quat2A).toBeQuat2(quatOut); });
            it("should return quat2A", function() { expect(result).toBe(quat2A); });
        });
    });

    describe("rotateAroundAxis", function() {
        let matrixA = new Mat4();
        let matOut = new Mat4();
        let ax: Vec3Like = [1,4,2];
        beforeEach(function() {
              //quat2A only seems to work when created using this function?
              Quat2.fromRotationTranslation(quat2A, [1,2,3,4], [-5, 4, 10]);
              Quat2.normalize(quat2A, quat2A);
              Mat4.fromQuat2(matrixA, quat2A);
            });


        describe("with a separate output quaternion", function() {
            beforeEach(function() {
                    result = Quat2.rotateAroundAxis(out, quat2A, ax, 5);

                    //Same thing with a matrix
                    Mat4.rotate(matOut, matrixA, 5, ax);
                    Quat2.fromMat4(quat2B, matOut);
                });

            it("should place values into out", function() { expect(out).toBeQuat2(quat2B); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quat2A", function() { expect(quat2A).toBeQuat2(
                0.18257418583505536, 0.3651483716701107, 0.5477225575051661, 0.7302967433402214,
                -2.556038601690775, 3.742770809618635, 2.37346441585572, -3.0124740662784135
            ); });
            it("should not modify ax", function() { expect(ax).toBeVec(1, 4, 2); });
        });

        describe("when quat2A is the output quaternion", function() {
            beforeEach(function() {
                    result = Quat2.rotateAroundAxis(quat2A, quat2A, ax, 5);
                    //Same thing with a matrix

                    Mat4.rotate(matOut, matrixA, 5, ax);
                    Quat2.fromMat4(quat2B, matOut);
                });

            it("should place values into quat2A", function() { expect(quat2A).toBeQuat2(quat2B); });
            it("should return quat2A", function() { expect(result).toBe(quat2A); });
            it("should not modify ax", function() { expect(ax).toBeVec(1, 4, 2); });
        });
    });

    describe("rotateByQuatAppend", function() {
        let correctResult = Quat2.create();
        let rotationQuat = Quat2.create();
        beforeEach(function() {
            rotationQuat[0] = 2;
            rotationQuat[1] = 5;
            rotationQuat[2] = 2;
            rotationQuat[3] = -10;
            Quat2.multiply(correctResult, quat2A, rotationQuat);
        })
        describe("with a separate output quaternion", function() {
            beforeEach(function() {
                result = Quat2.rotateByQuatAppend(out, quat2A, [2, 5, 2, -10]);
            });

            it("should place values into out", function() { expect(out).toBeQuat2(correctResult); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quat2A", function() { expect(quat2A).toBeQuat2(1, 2, 3, 4, 2, 5, 6, -2); });
            it("should not modify the rotation quaternion", function() { expect(rotationQuat).toBeQuat2(2,5,2,-10,0,0,0,0); });
        });

        describe("when quat2A is the output quaternion", function() {
            beforeEach(function() { result = Quat2.rotateByQuatAppend(quat2A, quat2A, [2, 5, 2, -10]); });

            it("should place values into quat2A", function() { expect(quat2A).toBeQuat2(correctResult); });
            it("should return quat2A", function() { expect(result).toBe(quat2A); });
            it("should not modify the rotation quaternion", function() { expect(rotationQuat).toBeQuat2(2,5,2,-10,0,0,0,0); });
        });
    });

    describe("rotateByQuatPrepend", function() {
        let correctResult = Quat2.create();
        let rotationQuat = Quat2.create();
        beforeEach(function() {
            rotationQuat[0] = 2;
            rotationQuat[1] = 5;
            rotationQuat[2] = 2;
            rotationQuat[3] = -10;
            Quat2.multiply(correctResult, rotationQuat, quat2A);
        })
        describe("with a separate output quaternion", function() {
            beforeEach(function() {
                result = Quat2.rotateByQuatPrepend(out, Quat2.getReal(outQuat, rotationQuat), quat2A);
            });

            it("should place values into out", function() { expect(out).toBeQuat2(correctResult); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quat2A", function() { expect(quat2A).toBeQuat2(1, 2, 3, 4, 2, 5, 6, -2); });
            it("should not modify the rotation quaternion", function() { expect(rotationQuat).toBeQuat2(2,5,2,-10,0,0,0,0); });
        });

        describe("when quat2A is the output quaternion", function() {
            beforeEach(function() { result = Quat2.rotateByQuatPrepend(quat2A, Quat2.getReal(outQuat, rotationQuat), quat2A); });

            it("should place values into quat2A", function() { expect(quat2A).toBeQuat2(correctResult); });
            it("should return quat2A", function() { expect(result).toBe(quat2A); });
            it("should not modify the rotation quaternion", function() { expect(rotationQuat).toBeQuat2(2,5,2,-10,0,0,0,0); });
        });
    });

    describe("rotateX", function() {
        let matrixA = Mat4.create(), matOut = Mat4.create(), quatOut = Quat2.create();
        beforeEach(function() {
              //quat2A only seems to work when created using this function?
              quat2B = Quat2.fromRotationTranslation(quat2A, [1,2,3,4], [-5, 4, 10]) as Quat2;
              Quat2.normalize(quat2A, quat2A);
              Mat4.fromQuat2(matrixA, quat2A);
            });
        describe("with a separate output quaternion", function() {
            beforeEach(function() {
                    result = Quat2.rotateX(out, quat2A, 5);
                    //Same thing with a matrix
                    Mat4.rotateX(matOut, matrixA, 5);
                    Quat2.fromMat4(quatOut, matOut);
                });

            it("should place values into out", function() { expect(out).toBeQuat2(quatOut); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quat2A", function() { expect(quat2A).toBeQuat2(quat2B); });
        });

        describe("when quat2A is the output quaternion", function() {
            beforeEach(function() {
                    result = Quat2.rotateX(quat2A, quat2A, 5);
                    //Same thing with a matrix
                    Mat4.rotateX(matOut, matrixA, 5);
                    Quat2.fromMat4(quatOut, matOut);
                });

            it("should place values into quat2A", function() { expect(quat2A).toBeQuat2(quatOut); });
            it("should return quat2A", function() { expect(result).toBe(quat2A); });
        });
    });

    describe("rotateY", function() {
        let matrixA = Mat4.create(), matOut = Mat4.create(), quatOut = Quat2.create();
        beforeEach(function() {
              //quat2A only seems to work when created using this function?
              quat2B = Quat2.fromRotationTranslation(quat2A, [1,2,3,4], [5, 4, -10]) as Quat2;
              Quat2.normalize(quat2A, quat2A);
              Mat4.fromQuat2(matrixA, quat2A);
            });

        describe("with a separate output quaternion", function() {
            beforeEach(function() {
                    result = Quat2.rotateY(out, quat2A, -2);
                    //Same thing with a matrix
                    Mat4.rotateY(matOut, matrixA, -2);
                    Quat2.fromMat4(quatOut, matOut);
                });

            it("should place values into out", function() { expect(out).toBeQuat2(quatOut); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quat2A", function() { expect(quat2A).toBeQuat2(quat2B); });
        });

        describe("when quat2A is the output quaternion", function() {
            beforeEach(function() {
                    result = Quat2.rotateY(quat2A, quat2A, -2);
                    //Same thing with a matrix
                    Mat4.rotateY(matOut, matrixA, -2);
                    Quat2.fromMat4(quatOut, matOut);
                });

            it("should place values into quat2A", function() { expect(quat2A).toBeQuat2(quatOut); });
            it("should return quat2A", function() { expect(result).toBe(quat2A); });
        });
    });

    describe("rotateZ", function() {
        let matrixA = Mat4.create(), matOut = Mat4.create(), quatOut = Quat2.create();
        beforeEach(function() {
              //quat2A only seems to work when created using this function?
              quat2B = Quat2.fromRotationTranslation(quat2A, [1,0,3,-4], [0, -4, -10]) as Quat2;
              Quat2.normalize(quat2A, quat2A);
              Mat4.fromQuat2(matrixA, quat2A);
            });
        describe("with a separate output quaternion", function() {
            beforeEach(function() {
                    result = Quat2.rotateZ(out, quat2A, 1);
                    //Same thing with a matrix
                    Mat4.rotateZ(matOut, matrixA, 1);
                    Quat2.fromMat4(quatOut, matOut);
                });

            it("should place values into out", function() { expect(out).toBeQuat2(quatOut); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quat2A", function() { expect(quat2A).toBeQuat2(quat2B); });
        });

        describe("when quat2A is the output quaternion", function() {
            beforeEach(function() {
                    result = Quat2.rotateZ(quat2A, quat2A, 1);
                    //Same thing with a matrix
                    Mat4.rotateZ(matOut, matrixA, 1);
                    Quat2.fromMat4(quatOut, matOut);
                });

            it("should place values into quat2A", function() { expect(quat2A).toBeQuat2(quatOut); });
            it("should return quat2A", function() { expect(result).toBe(quat2A); });
        });
    });

    describe("from/toMat4", function() {
        let matRes = Mat4.create(), matOut = Mat4.create();
        let rotationQuat = Quat.create();
        describe("quat to matrix and back", function() {
            beforeEach(function() {
                Quat.normalize(rotationQuat, [1,2,3,4]);

                Quat2.fromRotationTranslation(quat2A, rotationQuat, [1,-5,3]);
                matRes = Mat4.fromQuat2(matOut, quat2A) as Mat4;

                result = Quat2.fromMat4(out, matRes);
            });

            it("should return out", function() { expect(result).toBe(out); });
            it("should return matOut", function() { expect(matRes).toBe(matOut); });
            it("should not modify quat2A", function() { expect(quat2A).toBeQuat2(0.18257418, 0.36514836, 0.54772257, 0.73029673,  -1.5518806, -1.82574184, 1.73445473, 0 ); });

            it("should be equal to the starting dual quat", function() {
                expect(quat2A).toBeQuat2(result);
            });

        });
    });

    describe("create", function() {
        beforeEach(function() { result = Quat2.create(); });
        it("should return 2 4 element arrays initialized to an identity dual quaternion", function() { expect(result).toBeQuat2(0, 0, 0, 1, 0, 0, 0, 0); });
    });

    describe("clone", function() {
        beforeEach(function() { result = Quat2.clone(quat2A); });
        it("should return 2 4 element arrays initialized to the values in quat2A", function() { expect(result).toBeQuat2(quat2A); });
    });

    describe("fromValues", function() {
        beforeEach(function() { result = Quat2.fromValues(1, 2, 3, 4, 5, 7, 8, -2); });
        it("should return 2 4 element arrays initialized to the values passedd to the values passed", function() {
            expect(result).toBeQuat2(1, 2, 3, 4, 5, 7, 8, -2);
        });
    });

    describe("copy", function() {
        beforeEach(function() { result = Quat2.copy(out, quat2A); });
        it("should place values into out", function() { expect(out).toBeQuat2(1, 2, 3, 4, 2, 5, 6, -2); });
        it("should return out", function() { expect(result).toBe(out); });
    });

    describe("set", function() {
        beforeEach(function() { result = Quat2.set(out, 1, 2, 3, 4, 2, 5, 6, -2); });
        it("should place values into out", function() { expect(out).toBeQuat2(1, 2, 3, 4, 2, 5, 6, -2); });
        it("should return out", function() { expect(result).toBe(out); });
    });

    describe("identity", function() {
        beforeEach(function() { result = Quat2.identity(out); });
        it("should place values into out", function() { expect(result).toBeQuat2(0, 0, 0, 1, 0, 0, 0, 0); });
        it("should return out", function() { expect(result).toBe(out); });
    });

    describe("add", function() {
        describe("with a separate output dual quaternion", function() {
            beforeEach(function() { result = Quat2.add(out, quat2A, quat2B); });

            it("should place values into out", function() { expect(out).toBeQuat2(6, 8, 10, 12, 11, 13, 12, -6); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quat2A", function() { expect(quat2A).toBeQuat2(1, 2, 3, 4, 2, 5, 6, -2); });
            it("should not modify quat2B", function() { expect(quat2B).toBeQuat2(5, 6, 7, 8, 9, 8, 6, -4); });
        });

        describe("when quat2A is the output dual quaternion", function() {
            beforeEach(function() { result = Quat2.add(quat2A, quat2A, quat2B); });

            it("should place values into quat2A", function() { expect(quat2A).toBeQuat2(6, 8, 10, 12, 11, 13, 12, -6); });
            it("should return quat2A", function() { expect(result).toBe(quat2A); });
            it("should not modify quat2B", function() { expect(quat2B).toBeQuat2(5, 6, 7, 8, 9, 8, 6, -4)});
        });

        describe("when quat2B is the output dual quaternion", function() {
            beforeEach(function() { result = Quat2.add(quat2B, quat2A, quat2B); });

            it("should place values into quat2B", function() { expect(quat2B).toBeQuat2(6, 8, 10, 12, 11, 13, 12, -6); });
            it("should return quat2B", function() { expect(result).toBe(quat2B); });
            it("should not modify quat2A", function() { expect(quat2A).toBeQuat2(1, 2, 3, 4, 2, 5, 6, -2); });
        });
    });

    describe("multiply", function() {
        it("should have an alias called 'mul'", function() { expect(Quat2.mul).toEqual(Quat2.multiply); });

        describe("with a separate output quaternion", function() {
            beforeEach(function() { result = Quat2.multiply(out, quat2A, quat2B); });

            it("should place values into out", function() { expect(out).toBeQuat2(24, 48, 48, -6,  25, 89, 23, -157); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quat2A", function() { expect(quat2A).toBeQuat2(1, 2, 3, 4, 2, 5, 6, -2); });
            it("should not modify quat2B", function() { expect(quat2B).toBeQuat2(5, 6, 7, 8, 9, 8, 6, -4); });
        });

        describe("when quat2A is the output quaternion", function() {
            beforeEach(function() { result = Quat2.multiply(quat2A, quat2A, quat2B); });

            it("should place values into quat2A", function() { expect(quat2A).toBeQuat2(24, 48, 48, -6,  25, 89, 23, -157 ); });
            it("should return quat2A", function() { expect(result).toBe(quat2A); });
            it("should not modify quat2B", function() { expect(quat2B).toBeQuat2(5, 6, 7, 8, 9, 8, 6, -4); });
        });

        describe("when quat2B is the output quaternion", function() {
            beforeEach(function() { result = Quat2.multiply(quat2B, quat2A, quat2B); });

            it("should place values into quat2B", function() { expect(quat2B).toBeQuat2(24, 48, 48, -6,  25, 89, 23, -157); });
            it("should return quat2B", function() { expect(result).toBe(quat2B); });
            it("should not modify quat2A", function() { expect(quat2A).toBeQuat2(1, 2, 3, 4, 2, 5, 6, -2); });
        });

        describe("same as matrix multiplication", function() {
            let matrixA = Mat4.create(), matrixB = Mat4.create();
            let matOut = Mat4.create(), quatOut = Quat2.create();
           beforeEach(function() {
              //quat2A and quat2B only seem to work when created using this function?
              Quat2.fromRotationTranslation(quat2A, [1,2,3,4], [-5, 4, 10]);
              Quat2.normalize(quat2A, quat2A);
              Mat4.fromQuat2(matrixA, quat2A);

              Quat2.fromRotationTranslation(quat2B, [5, 6, 7, 8], [9, 8, 6]);
              Quat2.normalize(quat2B, quat2B);
              Mat4.fromQuat2(matrixB, quat2B);

            });
            it("the matrices should be equal to the dual quaternions", function() {
                let testQuat = Quat2.create();
                Quat2.fromMat4(testQuat, matrixA);
                expect(testQuat).toBeQuat2(...quat2A);

                Quat2.fromMat4(testQuat, matrixB);
                expect(testQuat).toBeQuat2(...quat2B);
            });

            it("should be equal to the matrix multiplication", function() {
                Quat2.multiply(out, quat2A, quat2B);
                Mat4.mul(matOut, matrixA, matrixB);
                Quat2.fromMat4(quatOut, matOut);
                expect(out).toBeQuat2(quatOut);
            });

        });
    });

    describe("scale", function() {
        describe("with a separate output dual quaternion", function() {
            beforeEach(function() { result = Quat2.scale(out, quat2A, 2); });
            it("should place values into out", function() { expect(out).toBeQuat2(2, 4, 6, 8, 4, 10, 12, -4); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quat2A", function() { expect(quat2A).toBeQuat2(1, 2, 3, 4, 2, 5, 6, -2); });
        });

        describe("when quat2A is the output dual quaternion", function() {
            beforeEach(function() { result = Quat2.scale(quat2A, quat2A, 2); });

            it("should place values into quat2A", function() { expect(quat2A).toBeQuat2(2, 4, 6, 8, 4, 10, 12, -4); });
            it("should return quat2A", function() { expect(result).toBe(quat2A); });
        });
    });

    describe("length", function() {
        it("should have an alias called 'len'", function() { expect(Quat2.len).toEqual(Quat2.length); });

        beforeEach(function() { result = Quat2.length(quat2A); });

        it("should return the length", function() { expect(result).toBeCloseTo(5.477225); });
    });

    describe("squaredLength", function() {
        it("should have an alias called 'sqrLen'", function() { expect(Quat2.sqrLen).toEqual(Quat2.squaredLength); });

        beforeEach(function() { result = Quat2.squaredLength(quat2A); });

        it("should return the squared length", function() { expect(result).toBeCloseTo(30); });
    });

    describe("fromRotation", function() {
        beforeEach(function() { result = Quat2.fromRotation(out, [1, 2, 3, 4]); });
        it("should place values into out", function() { expect(out).toBeQuat2(1, 2, 3, 4, 0, 0, 0, 0); });
        it("should return out", function() { expect(result).toBe(out); });
        it("should not modify the quaternion", function() { expect(quat2A).toBeQuat2(1, 2, 3, 4, 2, 5, 6, -2); });
    });

    describe("fromTranslation", function(){
        beforeEach(function() { vec = [1, 2, 3]; result = Quat2.fromTranslation(out, vec); });
        it("should place values into out", function() { expect(out).toBeQuat2(0, 0, 0, 1, 0.5, 1, 1.5, 0); });
        it("should return out", function() { expect(result).toBe(out); });
        it("should not modify the vector", function() { expect(vec).toBeVec(1, 2, 3); });
    });

    describe("fromRotationTranslation", function() {
        beforeEach(function() {
            vec = [1, 2, 3];
            result = Quat2.fromRotationTranslation(out, [1, 2, 3, 4], vec);
        });
        it("should place values into out", function() { expect(out).toBeQuat2(1, 2, 3, 4,  2, 4, 6, -7); });
        it("should return out", function() { expect(result).toBe(out); });
        it("should not modify the quaternion", function() { expect(Quat2.getReal(outQuat, quat2A)).toBeVec(1, 2, 3, 4); });
        it("should not modify the vector", function() { expect(vec).toBeVec(1, 2, 3); });
        it("should have a translation that can be retrieved with getTranslation", function() {
            let t: Vec3Like = [0, 0, 0];
            Quat2.normalize(out, out);
            Quat2.getTranslation(t, out);

            expect(t).toBeVec(1, 2, 3);
        });
    });

    describe("fromRotationTranslationValues", function() {
        beforeEach(function() { result = Quat2.fromRotationTranslationValues(1,2,3,4, 1,2,3); });
        it("should return the correct result", function() { expect(result).toBeQuat2(1, 2, 3, 4,  2, 4, 6, -7); });
        it("should have a translation that can be retrieved with getTranslation", function() {
            let t: Vec3Like = [0, 0, 0];
            Quat2.normalize(result, result);
            Quat2.getTranslation(t, result);
            expect(t).toBeVec(1, 2, 3);
        });
    });

    describe("getTranslation", function() {
        describe("without a real part", function() {
           beforeEach(function() {
               Quat2.fromTranslation(out, [1,2,3]);
               resultVec = Quat2.getTranslation(outVec, out);
           });
           describe("not normalized", function() {
                    it("should return the same translation value", function() { expect(outVec).toBeVec(1, 2, 3); });
                    it("should return out", function() { expect(outVec).toBe(resultVec); });
               });
           describe("normalized", function() {
                it("should return the same translation value", function() {
                    Quat2.normalize(outVec, outVec);
                    expect(outVec).toBeVec(1, 2, 3);
                });
           });
        });
        describe("with a real part", function() {
            beforeEach(function() {
                Quat2.fromRotationTranslation(out, [2, 4, 6, 2], [1, 2, 3]);
                resultVec = Quat2.getTranslation(outVec, out);
            });
            describe("not normalized", function() {
                    it("should not return the same translation value", function() { expect(outVec).not.toBeVec(1, 2, 3); });
                    it("should return out", function() { expect(outVec).toBe(resultVec); });
               });
            describe("normalized", function() {
                it("should return the same translation value", function() {
                    Quat2.normalize(out, out);
                    Quat2.getTranslation(outVec, out);
                    expect(outVec).toBeVec(1, 2, 3);
                });
           });
        });
    });

    describe("normalize", function() {
        describe("when it is normalizing quat2A", function() {
            beforeEach(function() {
                quat2A = [1, 2, 3, 4, 2, 5, 6, -2];
                Quat2.normalize(out, quat2A);
            });
            it("both parts should have been normalized", function() { expect(out).toBeQuat2(1/5.4772255, 2/5.4772255, 3/5.4772255, 4/5.4772255, 0.231260, 0.6450954, 0.693781,-0.9006993); });
        });

        beforeEach(function() { quat2A = [5, 0, 0, 0, 0, 0, 0, 0]; });

        describe("with a separate output quaternion", function() {
            beforeEach(function() { result = Quat2.normalize(out, quat2A); });

            it("should place values into out", function() { expect(out).toBeQuat2(1, 0, 0, 0, 0, 0, 0, 0); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quat2A", function() { expect(quat2A).toBeQuat2(5, 0, 0, 0, 0, 0, 0, 0); });
        });

        describe("when quat2A is the output quaternion", function() {
            beforeEach(function() { result = Quat2.normalize(quat2A, quat2A); });

            it("should place values into quat2A", function() { expect(quat2A).toBeQuat2(1, 0, 0, 0, 0, 0, 0, 0); });
            it("should return quat2A", function() { expect(result).toBe(quat2A); });
        });

        describe("when it contains a translation", function() {
            beforeEach(function() {
                Quat2.set(out, 5, 0, 0, 0, 1, 2, 3, 5);
                Quat2.normalize(out, out);
            });
            it("both parts should have been normalized", function() { expect(out).toBeQuat2(1, 0, 0, 0, 0, 0.4, 0.6, 1); });
        });
    });

    describe("lerp", function() {
        describe("with a separate output quaternion", function() {
            beforeEach(function() { result = Quat2.lerp(out, quat2A, quat2B, 0.7); });

            it("should place values into out", function() { expect(out).toBeQuat2(3.8, 4.8, 5.8, 6.8, 6.9, 7.1, 6.0, -3.4); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quat2A", function() { expect(quat2A).toBeQuat2(1, 2, 3, 4, 2, 5, 6, -2); });
            it("should not modify quat2B", function() { expect(quat2B).toBeQuat2(5, 6, 7, 8, 9, 8, 6, -4); });
        });

        describe("when quat2A is the output quaternion", function() {
            beforeEach(function() { result = Quat2.lerp(quat2A, quat2A, quat2B, 0.5); });

            it("should place values into quat2A", function() { expect(quat2A).toBeQuat2(3, 4, 5, 6,5.5, 6.5, 6, -3); });
            it("should return quat2A", function() { expect(result).toBe(quat2A); });
            it("should not modify quat2B", function() { expect(quat2B).toBeQuat2(5, 6, 7, 8, 9, 8, 6, -4); });
        });

        describe("when quat2B is the output quaternion", function() {
            beforeEach(function() { result = Quat2.lerp(quat2B, quat2A, quat2B, 0.5); });

            it("should place values into quat2B", function() { expect(quat2B).toBeQuat2(3, 4, 5, 6,5.5, 6.5, 6, -3); });
            it("should return quat2B", function() { expect(result).toBe(quat2B); });
            it("should not modify quat2A", function() { expect(quat2A).toBeQuat2(1, 2, 3, 4, 2, 5, 6, -2); });
        });

        describe("shortest path", function() {
            beforeEach(function() { result = Quat2.lerp(out, [1, 2, 3, -4, 2, 5, 6, -2], [5, -6, 7, 8, 9, 8, 6, -4], 0.4); });
            it("should pick the shorter path", function() { expect(out).toBeQuat2( -1.4, 3.6, -1, -5.6, -2.4, -0.2, 1.2, 0.4 ); });
        });
    });

    describe("dot", function() {
        describe("with a separate output dual quaternion", function() {
            beforeEach(function() { result = Quat2.dot(quat2A, quat2B); });
            it("should return the dot product", function() { expect(result).toBe(70); });
            it("should not modify quat2A", function() { expect(quat2A).toBeQuat2(1, 2, 3, 4, 2, 5, 6, -2); });
            it("should not modify quat2B", function() { expect(quat2B).toBeQuat2(5, 6, 7, 8, 9, 8, 6, -4); });
        });
    });

    describe("invert", function() {
        describe("with a separate output dual quaternion", function() {
            beforeEach(function() { result = Quat2.invert(out, quat2A); });

            it("should place values into out", function() { expect(out).toBeQuat2(-0.0333333333, -0.06666666666, -0.1, 0.13333333333, -2/30, -5/30, -6/30, -2/30); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quat2A", function() { expect(quat2A).toBeQuat2(1, 2, 3, 4, 2, 5, 6, -2); });
            it("the real part should be equal to a inverted quaternion", function() {
                Quat.invert(outQuat, [1, 2, 3, 4]);

                expect(Quat2.getReal(outQuat, out)).toBeVec(...outQuat);
            });
        });

        describe("when quat2A is the output quaternion", function() {
            beforeEach(function() { result = Quat2.invert(quat2A, quat2A); });

            it("should place values into quat2A", function() { expect(quat2A).toBeVec(-0.0333333333, -0.06666666666, -0.1, 0.13333333333, -2/30, -5/30, -6/30, -2/30); });
            it("should return quat2A", function() { expect(result).toBe(quat2A); });

        });
    });

    describe("get real/dual", function() {
        describe("get real", function() {
            beforeEach(function() { result = Quat2.getReal(outQuat, quat2A); });

            it("should place values into out", function() { expect(outQuat).toBeVec(1, 2, 3, 4); });
            it("should return out", function() { expect(result).toBe(outQuat); });
            it("should not modify quat2A", function() { expect(quat2A).toBeQuat2(1, 2, 3, 4, 2, 5, 6, -2); });
        });

        describe("get dual", function() {
            beforeEach(function() { result = Quat2.getDual(outQuat, quat2A); });

            it("should place values into out", function() { expect(outQuat).toBeVec(2, 5, 6, -2); });
            it("should return out", function() { expect(result).toBe(outQuat); });
            it("should not modify quat2A", function() { expect(quat2A).toBeQuat2(1, 2, 3, 4, 2, 5, 6, -2); });
        });
    });

    describe("set real/dual", function() {
        describe("set real", function() {
            beforeEach(function() {
                outQuat = [4, 6, 8, -100];
                result = Quat2.setReal(quat2A, outQuat);
            });

            it("should place values into out", function() { expect(quat2A).toBeQuat2(4, 6, 8, -100, 2, 5, 6, -2); });
            it("should return out", function() { expect(result).toBe(quat2A); });
            it("should not modify outQuat", function() { expect(outQuat).toBeVec(4, 6, 8, -100); });
        });

        describe("set dual", function() {
            beforeEach(function() {
                outQuat = [4.3, 6, 8, -100];
                result = Quat2.setDual(quat2A, outQuat);
            });

            it("should place values into out", function() { expect(quat2A).toBeQuat2(1, 2, 3, 4, 4.3, 6, 8, -100); });
            it("should return out", function() { expect(result).toBe(quat2A); });
            it("should not modify outQuat", function() { expect(outQuat).toBeVec(4.3, 6, 8, -100); });
        });
    });

    describe("conjugate", function() {
        describe("with a separate output dual quaternion", function() {
            beforeEach(function() { result = Quat2.conjugate(out, quat2A); });

            it("should place values into out", function() { expect(out).toBeQuat2(-1, -2, -3, 4, -2, -5, -6, -2); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quat2A", function() { expect(quat2A).toBeQuat2(1, 2, 3, 4, 2, 5, 6, -2); });
        });

        describe("when quat2A is the output dual quaternion", function() {
            beforeEach(function() { result = Quat2.conjugate(quat2A, quat2A); });

            it("should place values into quat2A", function() { expect(quat2A).toBeQuat2(-1, -2, -3, 4, -2, -5, -6, -2); });
            it("should return quat2A", function() { expect(result).toBe(quat2A); });
        });
    });

    describe("str", function() {
        beforeEach(function() { result = Quat2.str(quat2A); });

        it("should return a string representation of the quaternion", function() { expect(result).toEqual("Quat2(1, 2, 3, 4, 2, 5, 6, -2)"); });
    });

    describe("exactEquals", function() {
        let quat2C, r0, r1;
        beforeEach(function() {
            quat2A = [0, 1, 2, 3, 4, 5, 6, 7];
            quat2B = [0, 1, 2, 3, 4, 5, 6, 7];
            quat2C = [1, 2, 3, 4, 5, 6, 7, 8];
            r0 = Quat2.exactEquals(quat2A, quat2B);
            r1 = Quat2.exactEquals(quat2A, quat2C);
        });

        it("should return true for identical quaternions", function() { expect(r0).toBe(true); });
        it("should return false for different quaternions", function() { expect(r1).toBe(false); });
        it("should not modify quat2A", function() { expect(quat2A).toBeVec(0, 1, 2, 3, 4, 5, 6, 7); });
        it("should not modify quat2B", function() { expect(quat2B).toBeVec(0, 1, 2, 3, 4, 5, 6, 7); });
    });

    describe("equals", function() {
        let quat2C, quat2D, r0, r1, r2;
        beforeEach(function() {
            quat2A = [0, 1, 2, 3, 4, 5, 6, 7];
            quat2B = [0, 1, 2, 3, 4, 5, 6, 7];
            quat2C = [1, 2, 3, 4, 5, 6, 7, 8];
            quat2D = [1e-16, 1, 2, 3, 4, 5, 6, 7];
            r0 = Quat2.equals(quat2A, quat2B);
            r1 = Quat2.equals(quat2A, quat2C);
            r2 = Quat2.equals(quat2A, quat2D);
        });
        it("should return true for identical dual quaternions", function() { expect(r0).toBe(true); });
        it("should return false for different dual quaternions", function() { expect(r1).toBe(false); });
        it("should return true for close but not identical quaternions", function() { expect(r2).toBe(true); });
        it("should not modify quat2A", function() { expect(quat2A).toBeVec(0, 1, 2, 3, 4, 5, 6, 7); });
        it("should not modify quat2B", function() { expect(quat2B).toBeVec(0, 1, 2, 3, 4, 5, 6, 7); });
    });
  });
});