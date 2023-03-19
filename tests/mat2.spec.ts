import { expect, describe, it, beforeEach } from 'vitest';
import "./test-utils"
import { Mat2 } from "../src/mat2"
import { Vec2 } from "../src/vec2"

describe("Mat2", function() {
  describe("constructor", () => {
    it("should return an identity Mat2 if called with no arguments", () => {
      expect(new Mat2()).toBeVec(
        1, 0,
        0, 1)
    });

    it("should return Mat2(m0, m1, ...m8) if called with (m0, m1, ...m8)", () => {
      expect(new Mat2(
        1, 2,
        3, 4)).toBeVec(
          1, 2,
          3, 4);
    });

    it("should return Mat2(x, x, x, ...) if called with (x)", () => {
      expect(new Mat2(1)).toBeVec(
        1, 1,
        1, 1);
    });

    it("should return Mat2(m0, m1, ...m8) if called with ([m0, m1, ...m8])", () => {
      expect(new Mat2([
        1, 2,
        3, 4])).toBeVec(
        1, 2,
        3, 4);
    });

    it("should return Mat2(m0, m1, ...m8) if called with (Mat4(m0, m1, ...m9))", () => {
      let v = new Mat2(
        1, 2,
        3, 4);
      expect(new Mat2(v)).toBeVec(v);
    });

    it("should return Mat2(m0, m1, ...m8) if called with (Float32Array([m0, m1, ...m8]))", () => {
      let arr = new Float32Array([
        1, 2,
        3, 4]);
      expect(new Mat2(arr)).toBeVec(arr);
    });
  });

  describe("static", () => {
    let out, matA, matB, identity, result;

    beforeEach(function() {
        matA = new Float32Array([1, 2,
                3, 4]);

        matB = new Float32Array([5, 6,
                7, 8]);

        out =  new Float32Array([0, 0,
                0, 0]);

        identity = new Float32Array([1, 0,
                    0, 1]);
    });

    describe("create", function() {
        beforeEach(function() { result = Mat2.create(); });
        it("should return a 4 element array initialized to a 2x2 identity matrix", function() { expect(result).toBeVec(identity); });
    });

    describe("clone", function() {
        beforeEach(function() { result = Mat2.clone(matA); });
        it("should return a 4 element array initialized to the values in matA", function() { expect(result).toBeVec(matA); });
    });

    describe("copy", function() {
        beforeEach(function() { result = Mat2.copy(out, matA); });
        it("should place values into out", function() { expect(out).toBeVec(matA); });
        it("should return out", function() { expect(result).toBe(out); });
    });

    describe("identity", function() {
        beforeEach(function() { result = Mat2.identity(out); });
        it("should place values into out", function() { expect(result).toBeVec(identity); });
        it("should return out", function() { expect(result).toBe(out); });
    });

    describe("transpose", function() {
        describe("with a separate output matrix", function() {
            beforeEach(function() { result = Mat2.transpose(out, matA); });

            it("should place values into out", function() { expect(out).toBeVec(1, 3, 2, 4); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeVec(1, 2, 3, 4); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = Mat2.transpose(matA, matA); });

            it("should place values into matA", function() { expect(matA).toBeVec(1, 3, 2, 4); });
            it("should return matA", function() { expect(result).toBe(matA); });
        });
    });

    describe("invert", function() {
        describe("with a separate output matrix", function() {
            beforeEach(function() { result = Mat2.invert(out, matA); });

            it("should place values into out", function() { expect(out).toBeVec(-2, 1, 1.5, -0.5); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeVec(1, 2, 3, 4); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = Mat2.invert(matA, matA); });

            it("should place values into matA", function() { expect(matA).toBeVec(-2, 1, 1.5, -0.5); });
            it("should return matA", function() { expect(result).toBe(matA); });
        });
    });

    describe("adjoint", function() {
        describe("with a separate output matrix", function() {
            beforeEach(function() { result = Mat2.adjoint(out, matA); });

            it("should place values into out", function() { expect(out).toBeVec(4, -2, -3, 1); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeVec(1, 2, 3, 4); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = Mat2.adjoint(matA, matA); });

            it("should place values into matA", function() { expect(matA).toBeVec(4, -2, -3, 1); });
            it("should return matA", function() { expect(result).toBe(matA); });
        });
    });

    describe("determinant", function() {
        beforeEach(function() { result = Mat2.determinant(matA); });

        it("should return the determinant", function() { expect(result).toEqual(-2); });
    });

    describe("multiply", function() {
        it("should have an alias called 'mul'", function() { expect(Mat2.mul).toEqual(Mat2.multiply); });

        describe("with a separate output matrix", function() {
            beforeEach(function() { result = Mat2.multiply(out, matA, matB); });

            it("should place values into out", function() { expect(out).toBeVec(23, 34, 31, 46); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeVec(1, 2, 3, 4); });
            it("should not modify matB", function() { expect(matB).toBeVec(5, 6, 7, 8); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = Mat2.multiply(matA, matA, matB); });

            it("should place values into matA", function() { expect(matA).toBeVec(23, 34, 31, 46); });
            it("should return matA", function() { expect(result).toBe(matA); });
            it("should not modify matB", function() { expect(matB).toBeVec(5, 6, 7, 8); });
        });

        describe("when matB is the output matrix", function() {
            beforeEach(function() { result = Mat2.multiply(matB, matA, matB); });

            it("should place values into matB", function() { expect(matB).toBeVec(23, 34, 31, 46); });
            it("should return matB", function() { expect(result).toBe(matB); });
            it("should not modify matA", function() { expect(matA).toBeVec(1, 2, 3, 4); });
        });
    });

    describe("rotate", function() {
        describe("with a separate output matrix", function() {
            beforeEach(function() { result = Mat2.rotate(out, matA, Math.PI * 0.5); });

            it("should place values into out", function() { expect(out).toBeVec(3, 4, -1, -2); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeVec(1, 2, 3, 4); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = Mat2.rotate(matA, matA, Math.PI * 0.5); });

            it("should place values into matA", function() { expect(matA).toBeVec(3, 4, -1, -2); });
            it("should return matA", function() { expect(result).toBe(matA); });
        });
    });

    describe("scale", function() {
        let vecA;
        beforeEach(function() { vecA = [2, 3]; });

        describe("with a separate output matrix", function() {
            beforeEach(function() { result = Mat2.scale(out, matA, vecA); });

            it("should place values into out", function() { expect(out).toBeVec(2, 4, 9, 12); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeVec(1, 2, 3, 4); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = Mat2.scale(matA, matA, vecA); });

            it("should place values into matA", function() { expect(matA).toBeVec(2, 4, 9, 12); });
            it("should return matA", function() { expect(result).toBe(matA); });
        });
    });

    describe("str", function() {
        beforeEach(function() { result = Mat2.str(matA); });

        it("should return a string representation of the matrix", function() { expect(result).toEqual("Mat2(1, 2, 3, 4)"); });
    });

   describe("frob", function() {
        beforeEach(function() { result = Mat2.frob(matA); });
        it("should return the Frobenius Norm of the matrix", function() { expect(result).toEqual( Math.sqrt(Math.pow(1, 2) + Math.pow(2, 2) + Math.pow(3, 2) + Math.pow(4, 2))); });
   });

   describe("LDU", function() {
        let L, D, U, L_result, D_result, U_result;
        beforeEach(function() {
            L = Mat2.create();
            D = Mat2.create();
            U = Mat2.create();
            result = Mat2.LDU(L, D, U, [4,3,6,3]);
            L_result = Mat2.create(); L_result[2] = 1.5;
            D_result = Mat2.create();
            U_result = Mat2.create();
            U_result[0] = 4; U_result[1] = 3; U_result[3] = -1.5;
        });
        it("should return a lower triangular, a diagonal and an upper triangular matrix", function() {
            expect(result[0]).toBeVec(L_result);
            expect(result[1]).toBeVec(D_result);
            expect(result[2]).toBeVec(U_result);
        });
   });

    describe("add", function() {
        describe("with a separate output matrix", function() {
            beforeEach(function() { result = Mat2.add(out, matA, matB); });

            it("should place values into out", function() { expect(out).toBeVec(6, 8, 10, 12); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeVec(1, 2, 3, 4); });
            it("should not modify matB", function() { expect(matB).toBeVec(5, 6, 7, 8); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = Mat2.add(matA, matA, matB); });

            it("should place values into matA", function() { expect(matA).toBeVec(6, 8, 10, 12); });
            it("should return matA", function() { expect(result).toBe(matA); });
            it("should not modify matB", function() { expect(matB).toBeVec(5, 6, 7, 8); });
        });

        describe("when matB is the output matrix", function() {
            beforeEach(function() { result = Mat2.add(matB, matA, matB); });

            it("should place values into matB", function() { expect(matB).toBeVec(6, 8, 10, 12); });
            it("should return matB", function() { expect(result).toBe(matB); });
            it("should not modify matA", function() { expect(matA).toBeVec(1, 2, 3, 4); });
        });
    });

    describe("subtract", function() {
        it("should have an alias called 'sub'", function() { expect(Mat2.sub).toEqual(Mat2.subtract); });

        describe("with a separate output matrix", function() {
            beforeEach(function() { result = Mat2.subtract(out, matA, matB); });

            it("should place values into out", function() { expect(out).toBeVec(-4, -4, -4, -4); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeVec(1, 2, 3, 4); });
            it("should not modify matB", function() { expect(matB).toBeVec(5, 6, 7, 8); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = Mat2.subtract(matA, matA, matB); });

            it("should place values into matA", function() { expect(matA).toBeVec(-4, -4, -4, -4); });
            it("should return matA", function() { expect(result).toBe(matA); });
            it("should not modify matB", function() { expect(matB).toBeVec(5, 6, 7, 8); });
        });

        describe("when matB is the output matrix", function() {
            beforeEach(function() { result = Mat2.subtract(matB, matA, matB); });

            it("should place values into matB", function() { expect(matB).toBeVec(-4, -4, -4, -4); });
            it("should return matB", function() { expect(result).toBe(matB); });
            it("should not modify matA", function() { expect(matA).toBeVec(1, 2, 3, 4); });
        });
    });

    describe("fromValues", function() {
        beforeEach(function() { result = Mat2.fromValues(1, 2, 3, 4); });
        it("should return a 4 element array initialized to the values passed", function() { expect(result).toBeVec(1, 2, 3, 4); });
    });

    describe("set", function() {
        beforeEach(function() { result = Mat2.set(out, 1, 2, 3, 4); });
        it("should place values into out", function() { expect(out).toBeVec(1, 2, 3, 4); });
        it("should return out", function() { expect(result).toBe(out); });
    });

    describe("multiplyScalar", function() {
        describe("with a separate output matrix", function() {
            beforeEach(function() { result = Mat2.multiplyScalar(out, matA, 2); });

            it("should place values into out", function() { expect(out).toBeVec(2, 4, 6, 8); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeVec(1, 2, 3, 4); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = Mat2.multiplyScalar(matA, matA, 2); });

            it("should place values into matA", function() { expect(matA).toBeVec(2, 4, 6, 8); });
            it("should return matA", function() { expect(result).toBe(matA); });
        });
    });

    describe("multiplyScalarAndAdd", function() {
        describe("with a separate output matrix", function() {
            beforeEach(function() { result = Mat2.multiplyScalarAndAdd(out, matA, matB, 0.5); });

            it("should place values into out", function() { expect(out).toBeVec(3.5, 5, 6.5, 8); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeVec(1, 2, 3, 4); });
            it("should not modify matB", function() { expect(matB).toBeVec(5, 6, 7, 8); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = Mat2.multiplyScalarAndAdd(matA, matA, matB, 0.5); });

            it("should place values into matA", function() { expect(matA).toBeVec(3.5, 5, 6.5, 8); });
            it("should return matA", function() { expect(result).toBe(matA); });
            it("should not modify matB", function() { expect(matB).toBeVec(5, 6, 7, 8); });
        });

        describe("when matB is the output matrix", function() {
            beforeEach(function() { result = Mat2.multiplyScalarAndAdd(matB, matA, matB, 0.5); });

            it("should place values into matB", function() { expect(matB).toBeVec(3.5, 5, 6.5, 8); });
            it("should return matB", function() { expect(result).toBe(matB); });
            it("should not modify matA", function() { expect(matA).toBeVec(1, 2, 3, 4); });
        });
    });

    describe("exactEquals", function() {
        let matC, r0, r1, r2;
        beforeEach(function() {
            matA = [0, 1, 2, 3];
            matB = [0, 1, 2, 3];
            matC = [1, 2, 3, 4];
            r0 = Mat2.exactEquals(matA, matB);
            r1 = Mat2.exactEquals(matA, matC);
        });
        it("should return true for identical matrices", function() { expect(r0).toBe(true); });
        it("should return false for different matrices", function() { expect(r1).toBe(false); });
        it("should not modify matA", function() { expect(matA).toBeVec(0, 1, 2, 3); });
        it("should not modify matB", function() { expect(matB).toBeVec(0, 1, 2, 3); });
    });

    describe("equals", function() {
        let matC, matD, r0, r1, r2;
        beforeEach(function() {
            matA = [0, 1, 2, 3];
            matB = [0, 1, 2, 3];
            matC = [1, 2, 3, 4];
            matD = [1e-16, 1, 2, 3];
            r0 = Mat2.equals(matA, matB);
            r1 = Mat2.equals(matA, matC);
            r2 = Mat2.equals(matA, matD);
        });
        it("should return true for identical matrices", function() { expect(r0).toBe(true); });
        it("should return false for different matrices", function() { expect(r1).toBe(false); });
        it("should return true for close but not identical matrices", function() { expect(r2).toBe(true); });
        it("should not modify matA", function() { expect(matA).toBeVec(0, 1, 2, 3); });
        it("should not modify matB", function() { expect(matB).toBeVec(0, 1, 2, 3); });
    });
  });
});