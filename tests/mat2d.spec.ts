import { expect, describe, it, beforeEach } from 'vitest';
import "./test-utils"
import { Mat2d } from "../src/Mat2d"

describe("Mat2d", function() {
  describe("constructor", () => {
    it("should return an identity Mat2d if called with no arguments", () => {
      expect(new Mat2d()).toBeVec(
        1, 0,
        0, 1,
        0, 0)
    });

    it("should return Mat2d(m0, m1, ...m5) if called with (m0, m1, ...m5)", () => {
      expect(new Mat2d(
        1, 2,
        3, 4,
        5, 6)).toBeVec(
          1, 2,
          3, 4,
          5, 6);
    });

    it("should return Mat2d(x, x, x, ...) if called with (x)", () => {
      expect(new Mat2d(1)).toBeVec(
        1, 1,
        1, 1,
        1, 1);
    });

    it("should return Mat2d(m0, m1, ...m8) if called with ([m0, m1, ...m8])", () => {
      expect(new Mat2d([
        1, 2,
        3, 4,
        5, 6])).toBeVec(
        1, 2,
        3, 4,
        5, 6);
    });

    it("should return Mat2d(m0, m1, ...m8) if called with (Mat2d(m0, m1, ...m9))", () => {
      let v = new Mat2d(
        1, 2,
        3, 4,
        5, 6);
      expect(new Mat2d(v)).toBeVec(v);
    });

    it("should return Mat2d(m0, m1, ...m8) if called with (Float32Array([m0, m1, ...m8]))", () => {
      let arr = new Float32Array([
        1, 2,
        3, 4,
        5, 6]);
      expect(new Mat2d(arr)).toBeVec(arr);
    });
  });

  describe("static", () => {
    let out, matA, matB, oldA, oldB, identity, result;

    beforeEach(function() {
        matA = new Float32Array([1, 2,
                3, 4,
                5, 6]);

        oldA = new Float32Array([1, 2,
                3, 4,
                5, 6]);

        matB = new Float32Array([7, 8,
                9, 10,
                11, 12]);

        oldB = new Float32Array([7, 8,
                9, 10,
                11, 12]);

        out =  new Float32Array([0, 0,
                0, 0,
                0, 0]);

        identity = new Float32Array([1, 0,
                    0, 1,
                    0, 0]);
    });

    describe("create", function() {
        beforeEach(function() { result = Mat2d.create(); });
        it("should return a 6 element array initialized to a 2x3 identity matrix", function() { expect(result).toBeVec(identity); });
    });

    describe("clone", function() {
        beforeEach(function() { result = Mat2d.clone(matA); });
        it("should return a 6 element array initialized to the values in matA", function() { expect(result).toBeVec(matA); });
    });

    describe("copy", function() {
        beforeEach(function() { result = Mat2d.copy(out, matA); });
        it("should place values into out", function() { expect(out).toBeVec(matA); });
        it("should return out", function() { expect(result).toBe(out); });
    });

    describe("identity", function() {
        beforeEach(function() { result = Mat2d.identity(out); });
        it("should place values into out", function() { expect(result).toBeVec(identity); });
        it("should return out", function() { expect(result).toBe(out); });
    });

    describe("invert", function() {
        describe("with a separate output matrix", function() {
            beforeEach(function() { result = Mat2d.invert(out, matA); });

            it("should place values into out", function() { expect(out).toBeVec( -2, 1, 1.5, -0.5, 1, -2 ); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeVec(oldA); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = Mat2d.invert(matA, matA); });

            it("should place values into matA", function() { expect(matA).toBeVec( -2, 1, 1.5, -0.5, 1, -2 ); });
            it("should return matA", function() { expect(result).toBe(matA); });
        });
    });

    describe("determinant", function() {
        beforeEach(function() { result = Mat2d.determinant(matA); });

        it("should return the determinant", function() { expect(result).toEqual(-2); });
    });

    describe("multiply", function() {
        it("should have an alias called 'mul'", function() { expect(Mat2d.mul).toEqual(Mat2d.multiply); });

        describe("with a separate output matrix", function() {
            beforeEach(function() { result = Mat2d.multiply(out, matA, matB); });

            it("should place values into out", function() { expect(out).toBeVec(31, 46, 39, 58, 52, 76); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeVec(oldA); });
            it("should not modify matB", function() { expect(matB).toBeVec(oldB); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = Mat2d.multiply(matA, matA, matB); });

            it("should place values into matA", function() { expect(matA).toBeVec(31, 46, 39, 58, 52, 76); });
            it("should return matA", function() { expect(result).toBe(matA); });
            it("should not modify matB", function() { expect(matB).toBeVec(oldB); });
        });

        describe("when matB is the output matrix", function() {
            beforeEach(function() { result = Mat2d.multiply(matB, matA, matB); });

            it("should place values into matB", function() { expect(matB).toBeVec(31, 46, 39, 58, 52, 76); });
            it("should return matB", function() { expect(result).toBe(matB); });
            it("should not modify matA", function() { expect(matA).toBeVec(oldA); });
        });
    });

    describe("rotate", function() {
        describe("with a separate output matrix", function() {
            beforeEach(function() { result = Mat2d.rotate(out, matA, Math.PI * 0.5); });

            it("should place values into out", function() { expect(out).toBeVec(3, 4, -1, -2, 5, 6); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeVec(oldA); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = Mat2d.rotate(matA, matA, Math.PI * 0.5); });

            it("should place values into matA", function() { expect(matA).toBeVec(3, 4, -1, -2, 5, 6); });
            it("should return matA", function() { expect(result).toBe(matA); });
        });
    });

    describe("scale", function() {
        let vecA;
        beforeEach(function() { vecA = [2, 3]; });

        describe("with a separate output matrix", function() {
            beforeEach(function() { result = Mat2d.scale(out, matA, vecA); });

            it("should place values into out", function() { expect(out).toBeVec(2, 4, 9, 12, 5, 6); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeVec(oldA); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = Mat2d.scale(matA, matA, vecA); });

            it("should place values into matA", function() { expect(matA).toBeVec(2, 4, 9, 12, 5, 6); });
            it("should return matA", function() { expect(result).toBe(matA); });
        });
    });

    describe("translate", function() {
        let vecA;
        beforeEach(function() { vecA = [2, 3]; });

        describe("with a separate output matrix", function() {
            beforeEach(function() { result = Mat2d.translate(out, matA, vecA); });

            it("should place values into out", function() { expect(out).toBeVec(1, 2, 3, 4, 16, 22); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeVec(oldA); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = Mat2d.translate(matA, matA, vecA); });

            it("should place values into matA", function() { expect(matA).toBeVec(1, 2, 3, 4, 16, 22); });
            it("should return matA", function() { expect(result).toBe(matA); });
        });
    });

    describe("str", function() {
        beforeEach(function() { result = Mat2d.str(matA); });

        it("should return a string representation of the matrix", function() { expect(result).toEqual("Mat2d(1, 2, 3, 4, 5, 6)"); });
    });

   describe("frob", function() {
        beforeEach(function() { result = Mat2d.frob(matA); });
        it("should return the Frobenius Norm of the matrix", function() { expect(result).toEqual( Math.sqrt(Math.pow(1, 2) + Math.pow(2, 2) + Math.pow(3, 2) + Math.pow(4, 2) + Math.pow(5, 2) + Math.pow(6, 2) + 1)); });
   });

    describe("add", function() {
        describe("with a separate output matrix", function() {
            beforeEach(function() { result = Mat2d.add(out, matA, matB); });

            it("should place values into out", function() { expect(out).toBeVec(8, 10, 12, 14, 16, 18); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeVec(oldA); });
            it("should not modify matB", function() { expect(matB).toBeVec(oldB); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = Mat2d.add(matA, matA, matB); });

            it("should place values into matA", function() { expect(matA).toBeVec(8, 10, 12, 14, 16, 18); });
            it("should return matA", function() { expect(result).toBe(matA); });
            it("should not modify matB", function() { expect(matB).toBeVec(oldB); });
        });

        describe("when matB is the output matrix", function() {
            beforeEach(function() { result = Mat2d.add(matB, matA, matB); });

            it("should place values into matB", function() { expect(matB).toBeVec(8, 10, 12, 14, 16, 18); });
            it("should return matB", function() { expect(result).toBe(matB); });
            it("should not modify matA", function() { expect(matA).toBeVec(oldA); });
        });
    });

    describe("subtract", function() {
        it("should have an alias called 'sub'", function() { expect(Mat2d.sub).toEqual(Mat2d.subtract); });

        describe("with a separate output matrix", function() {
            beforeEach(function() { result = Mat2d.subtract(out, matA, matB); });

            it("should place values into out", function() { expect(out).toBeVec(-6, -6, -6, -6, -6, -6); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeVec(oldA); });
            it("should not modify matB", function() { expect(matB).toBeVec(oldB); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = Mat2d.subtract(matA, matA, matB); });

            it("should place values into matA", function() { expect(matA).toBeVec(-6, -6, -6, -6, -6, -6); });
            it("should return matA", function() { expect(result).toBe(matA); });
            it("should not modify matB", function() { expect(matB).toBeVec(oldB); });
        });

        describe("when matB is the output matrix", function() {
            beforeEach(function() { result = Mat2d.subtract(matB, matA, matB); });

            it("should place values into matB", function() { expect(matB).toBeVec(-6, -6, -6, -6, -6, -6); });
            it("should return matB", function() { expect(result).toBe(matB); });
            it("should not modify matA", function() { expect(matA).toBeVec(oldA); });
        });
    });

    describe("fromValues", function() {
        beforeEach(function() { result = Mat2d.fromValues(1, 2, 3, 4, 5, 6); });
        it("should return a 6 element array initialized to the values passed", function() { expect(result).toBeVec(1, 2, 3, 4, 5, 6); });
    });

    describe("set", function() {
        beforeEach(function() { result = Mat2d.set(out, 1, 2, 3, 4, 5, 6); });
        it("should place values into out", function() { expect(out).toBeVec(1, 2, 3, 4, 5, 6); });
        it("should return out", function() { expect(result).toBe(out); });
    });

    describe("multiplyScalar", function() {
        describe("with a separate output matrix", function() {
            beforeEach(function() { result = Mat2d.multiplyScalar(out, matA, 2); });

            it("should place values into out", function() { expect(out).toBeVec(2, 4, 6, 8, 10, 12); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeVec(1, 2, 3, 4, 5, 6); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = Mat2d.multiplyScalar(matA, matA, 2); });

            it("should place values into matA", function() { expect(matA).toBeVec(2, 4, 6, 8, 10, 12); });
            it("should return matA", function() { expect(result).toBe(matA); });
        });
    });

    describe("multiplyScalarAndAdd", function() {
        describe("with a separate output matrix", function() {
            beforeEach(function() { result = Mat2d.multiplyScalarAndAdd(out, matA, matB, 0.5); });

            it("should place values into out", function() { expect(out).toBeVec(4.5, 6, 7.5, 9, 10.5, 12); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeVec(1, 2, 3, 4, 5, 6); });
            it("should not modify matB", function() { expect(matB).toBeVec(7, 8, 9, 10, 11, 12); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = Mat2d.multiplyScalarAndAdd(matA, matA, matB, 0.5); });

            it("should place values into matA", function() { expect(matA).toBeVec(4.5, 6, 7.5, 9, 10.5, 12); });
            it("should return matA", function() { expect(result).toBe(matA); });
            it("should not modify matB", function() { expect(matB).toBeVec(7, 8, 9, 10, 11, 12); });
        });

        describe("when matB is the output matrix", function() {
            beforeEach(function() { result = Mat2d.multiplyScalarAndAdd(matB, matA, matB, 0.5); });

            it("should place values into matB", function() { expect(matB).toBeVec(4.5, 6, 7.5, 9, 10.5, 12); });
            it("should return matB", function() { expect(result).toBe(matB); });
            it("should not modify matA", function() { expect(matA).toBeVec(1, 2, 3, 4, 5, 6); });
        });
    });

    describe("exactEquals", function() {
        let matC, r0, r1;
        beforeEach(function() {
            matA = [0, 1, 2, 3, 4, 5];
            matB = [0, 1, 2, 3, 4, 5];
            matC = [1, 2, 3, 4, 5, 6];
            r0 = Mat2d.exactEquals(matA, matB);
            r1 = Mat2d.exactEquals(matA, matC);
        });

        it("should return true for identical matrices", function() { expect(r0).toBe(true); });
        it("should return false for different matrices", function() { expect(r1).toBe(false); });
        it("should not modify matA", function() { expect(matA).toBeVec(0, 1, 2, 3, 4, 5); });
        it("should not modify matB", function() { expect(matB).toBeVec(0, 1, 2, 3, 4, 5); });
    });

    describe("equals", function() {
        let matC, matD, r0, r1, r2;
        beforeEach(function() {
            matA = [0, 1, 2, 3, 4, 5];
            matB = [0, 1, 2, 3, 4, 5];
            matC = [1, 2, 3, 4, 5, 6];
            matD = [1e-16, 1, 2, 3, 4, 5];
            r0 = Mat2d.equals(matA, matB);
            r1 = Mat2d.equals(matA, matC);
            r2 = Mat2d.equals(matA, matD);
        });
        it("should return true for identical matrices", function() { expect(r0).toBe(true); });
        it("should return false for different matrices", function() { expect(r1).toBe(false); });
        it("should return true for close but not identical matrices", function() { expect(r2).toBe(true); });
        it("should not modify matA", function() { expect(matA).toBeVec(0, 1, 2, 3, 4, 5); });
        it("should not modify matB", function() { expect(matB).toBeVec(0, 1, 2, 3, 4, 5); });
    });
  });
});