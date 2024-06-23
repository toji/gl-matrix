import { expect, describe, it, beforeEach } from 'vitest';

import { Mat2 } from '#gl-matrix/f64';

import type { FloatArray, Mat2Like, Vec2Like } from '#gl-matrix/types';

describe('Mat2', () => {
  describe('constructor', () => {
    it('should return an identity Mat2 if called with no arguments', () => {
      expect(new Mat2()).toBeVec(
        1, 0,
        0, 1);
    });

    it('should return Mat2(m0, m1, ...m8) if called with (m0, m1, ...m8)', () => {
      expect(new Mat2(
        1, 2,
        3, 4)).toBeVec(
        1, 2,
        3, 4);
    });

    it('should return Mat2(x, x, x, ...) if called with (x)', () => {
      expect(new Mat2(1)).toBeVec(
        1, 1,
        1, 1);
    });

    it('should return Mat2(m0, m1, ...m8) if called with ([m0, m1, ...m8])', () => {
      expect(new Mat2([
        1, 2,
        3, 4])).toBeVec(
        1, 2,
        3, 4);
    });

    it('should return Mat2(m0, m1, ...m8) if called with (Mat4(m0, m1, ...m9))', () => {
      const v = new Mat2(
        1, 2,
        3, 4);
      expect(new Mat2(v)).toBeVec(v);
    });

    it('should return Mat2(m0, m1, ...m8) if called with (Float64Array([m0, m1, ...m8]))', () => {
      const arr = new Float64Array([
        1, 2,
        3, 4]);
      expect(new Mat2(arr)).toBeVec(arr);
    });
  });

  describe('static', () => {
    let out: Mat2Like, matA: Mat2Like, matB: Mat2Like, identity: Mat2Like,
      result: [Mat2Like, Readonly<Mat2Like>, Mat2Like] | FloatArray | Mat2Like | null | number | string;

    beforeEach(() => {
      matA = new Float64Array([1, 2, 3, 4]);
      matB = new Float64Array([5, 6, 7, 8]);
      out = new Float64Array([0, 0, 0, 0]);
      identity = new Float64Array([1, 0, 0, 1]);
    });

    describe('create', () => {
      beforeEach(() => { result = Mat2.create(); });

      it('should return a 4 element array initialized to a 2x2 identity matrix',
        () => expect(result).toBeVec(identity));
    });

    describe('clone', () => {
      beforeEach(() => { result = Mat2.clone(matA); });

      it('should return a 4 element array initialized to the values in matA', () => expect(result).toBeVec(matA));
    });

    describe('copy', () => {
      beforeEach(() => { result = Mat2.copy(out, matA); });

      it('should place values into out', () => expect(out).toBeVec(matA));
      it('should return out', () => expect(result).toBe(out));
    });

    describe('identity', () => {
      beforeEach(() => { result = Mat2.identity(out); });

      it('should place values into out', () => expect(result).toBeVec(identity));
      it('should return out', () => expect(result).toBe(out));
    });

    describe('transpose', () => {
      describe('with a separate output matrix', () => {
        beforeEach(() => { result = Mat2.transpose(out, matA); });

        it('should place values into out', () => expect(out).toBeVec(1, 3, 2, 4));
        it('should return out', () => expect(result).toBe(out));
        it('should not modify matA', () => expect(matA).toBeVec(1, 2, 3, 4));
      });

      describe('when matA is the output matrix', () => {
        beforeEach(() => { result = Mat2.transpose(matA, matA); });

        it('should place values into matA', () => expect(matA).toBeVec(1, 3, 2, 4));
        it('should return matA', () => expect(result).toBe(matA));
      });
    });

    describe('invert', () => {
      describe('with a separate output matrix', () => {
        beforeEach(() => { result = Mat2.invert(out, matA); });

        it('should place values into out', () => expect(out).toBeVec(-2, 1, 1.5, -0.5));
        it('should return out', () => expect(result).toBe(out));
        it('should not modify matA', () => expect(matA).toBeVec(1, 2, 3, 4));
      });

      describe('when matA is the output matrix', () => {
        beforeEach(() => { result = Mat2.invert(matA, matA); });

        it('should place values into matA', () => expect(matA).toBeVec(-2, 1, 1.5, -0.5));
        it('should return matA', () => expect(result).toBe(matA));
      });
    });

    describe('adjoint', () => {
      describe('with a separate output matrix', () => {
        beforeEach(() => { result = Mat2.adjoint(out, matA); });

        it('should place values into out', () => expect(out).toBeVec(4, -2, -3, 1));
        it('should return out', () => expect(result).toBe(out));
        it('should not modify matA', () => expect(matA).toBeVec(1, 2, 3, 4));
      });

      describe('when matA is the output matrix', () => {
        beforeEach(() => { result = Mat2.adjoint(matA, matA); });

        it('should place values into matA', () => expect(matA).toBeVec(4, -2, -3, 1));
        it('should return matA', () => expect(result).toBe(matA));
      });
    });

    describe('determinant', () => {
      beforeEach(() => { result = Mat2.determinant(matA); });

      it('should return the determinant', () => expect(result).toEqual(-2));
    });

    describe('multiply', () => {
      it('should have an alias called `mul`', () => expect(Mat2.mul).toEqual(Mat2.multiply));

      describe('with a separate output matrix', () => {
        beforeEach(() => { result = Mat2.multiply(out, matA, matB); });

        it('should place values into out', () => expect(out).toBeVec(23, 34, 31, 46));
        it('should return out', () => expect(result).toBe(out));
        it('should not modify matA', () => expect(matA).toBeVec(1, 2, 3, 4));
        it('should not modify matB', () => expect(matB).toBeVec(5, 6, 7, 8));
      });

      describe('when matA is the output matrix', () => {
        beforeEach(() => { result = Mat2.multiply(matA, matA, matB); });

        it('should place values into matA', () => expect(matA).toBeVec(23, 34, 31, 46));
        it('should return matA', () => expect(result).toBe(matA));
        it('should not modify matB', () => expect(matB).toBeVec(5, 6, 7, 8));
      });

      describe('when matB is the output matrix', () => {
        beforeEach(() => { result = Mat2.multiply(matB, matA, matB); });

        it('should place values into matB', () => expect(matB).toBeVec(23, 34, 31, 46));
        it('should return matB', () => expect(result).toBe(matB));
        it('should not modify matA', () => expect(matA).toBeVec(1, 2, 3, 4));
      });
    });

    describe('rotate', () => {
      describe('with a separate output matrix', () => {
        beforeEach(() => { result = Mat2.rotate(out, matA, Math.PI * 0.5); });

        it('should place values into out', () => expect(out).toBeVec(3, 4, -1, -2));
        it('should return out', () => expect(result).toBe(out));
        it('should not modify matA', () => expect(matA).toBeVec(1, 2, 3, 4));
      });

      describe('when matA is the output matrix', () => {
        beforeEach(() => { result = Mat2.rotate(matA, matA, Math.PI * 0.5); });

        it('should place values into matA', () => expect(matA).toBeVec(3, 4, -1, -2));
        it('should return matA', () => expect(result).toBe(matA));
      });
    });

    describe('scale', () => {
      let vecA: Vec2Like;

      beforeEach(() => { vecA = [2, 3]; });

      describe('with a separate output matrix', () => {
        beforeEach(() => { result = Mat2.scale(out, matA, vecA); });

        it('should place values into out', () => expect(out).toBeVec(2, 4, 9, 12));
        it('should return out', () => expect(result).toBe(out));
        it('should not modify matA', () => expect(matA).toBeVec(1, 2, 3, 4));
      });

      describe('when matA is the output matrix', () => {
        beforeEach(() => { result = Mat2.scale(matA, matA, vecA); });

        it('should place values into matA', () => expect(matA).toBeVec(2, 4, 9, 12));
        it('should return matA', () => expect(result).toBe(matA));
      });
    });

    describe('str', () => {
      beforeEach(() => { result = Mat2.str(matA); });

      it('should return a string representation of the matrix', () => expect(result).toEqual('Mat2(1, 2, 3, 4)'));
    });

    describe('frob', () => {
      beforeEach(() => { result = Mat2.frob(matA); });
      it('should return the Frobenius Norm of the matrix',
        () => expect(result).toEqual(Math.sqrt(Math.pow(1, 2) + Math.pow(2, 2) + Math.pow(3, 2) + Math.pow(4, 2))));
    });

    describe('LDU', () => {
      let L: Mat2, D: Mat2, U: Mat2, L_result: Mat2, D_result: Mat2, U_result: Mat2;

      beforeEach(() => {
        L = Mat2.create();
        D = Mat2.create();
        U = Mat2.create();
        result = Mat2.LDU(L, D, U, [4, 3, 6, 3]);
        L_result = Mat2.create(); L_result[2] = 1.5;
        D_result = Mat2.create();
        U_result = Mat2.create();
        U_result[0] = 4; U_result[1] = 3; U_result[3] = -1.5;
      });

      it('should return a lower triangular, a diagonal and an upper triangular matrix', () => {
        // @ts-expect-error Not null
        expect(result[0]).toBeVec(L_result);
        // @ts-expect-error Not null
        expect(result[1]).toBeVec(D_result);
        // @ts-expect-error Not null
        expect(result[2]).toBeVec(U_result);
      });
    });

    describe('add', () => {
      describe('with a separate output matrix', () => {
        beforeEach(() => { result = Mat2.add(out, matA, matB); });

        it('should place values into out', () => expect(out).toBeVec(6, 8, 10, 12));
        it('should return out', () => expect(result).toBe(out));
        it('should not modify matA', () => expect(matA).toBeVec(1, 2, 3, 4));
        it('should not modify matB', () => expect(matB).toBeVec(5, 6, 7, 8));
      });

      describe('when matA is the output matrix', () => {
        beforeEach(() => { result = Mat2.add(matA, matA, matB); });

        it('should place values into matA', () => expect(matA).toBeVec(6, 8, 10, 12));
        it('should return matA', () => expect(result).toBe(matA));
        it('should not modify matB', () => expect(matB).toBeVec(5, 6, 7, 8));
      });

      describe('when matB is the output matrix', () => {
        beforeEach(() => { result = Mat2.add(matB, matA, matB); });

        it('should place values into matB', () => expect(matB).toBeVec(6, 8, 10, 12));
        it('should return matB', () => expect(result).toBe(matB));
        it('should not modify matA', () => expect(matA).toBeVec(1, 2, 3, 4));
      });
    });

    describe('subtract', () => {
      it('should have an alias called `sub`', () => expect(Mat2.sub).toEqual(Mat2.subtract));

      describe('with a separate output matrix', () => {
        beforeEach(() => { result = Mat2.subtract(out, matA, matB); });

        it('should place values into out', () => expect(out).toBeVec(-4, -4, -4, -4));
        it('should return out', () => expect(result).toBe(out));
        it('should not modify matA', () => expect(matA).toBeVec(1, 2, 3, 4));
        it('should not modify matB', () => expect(matB).toBeVec(5, 6, 7, 8));
      });

      describe('when matA is the output matrix', () => {
        beforeEach(() => { result = Mat2.subtract(matA, matA, matB); });

        it('should place values into matA', () => expect(matA).toBeVec(-4, -4, -4, -4));
        it('should return matA', () => expect(result).toBe(matA));
        it('should not modify matB', () => expect(matB).toBeVec(5, 6, 7, 8));
      });

      describe('when matB is the output matrix', () => {
        beforeEach(() => { result = Mat2.subtract(matB, matA, matB); });

        it('should place values into matB', () => expect(matB).toBeVec(-4, -4, -4, -4));
        it('should return matB', () => expect(result).toBe(matB));
        it('should not modify matA', () => expect(matA).toBeVec(1, 2, 3, 4));
      });
    });

    describe('fromValues', () => {
      beforeEach(() => { result = Mat2.fromValues(1, 2, 3, 4); });

      it('should return a 4 element array initialized to the values passed', () => expect(result).toBeVec(1, 2, 3, 4));
    });

    describe('set', () => {
      beforeEach(() => { result = Mat2.set(out, 1, 2, 3, 4); });

      it('should place values into out', () => expect(out).toBeVec(1, 2, 3, 4));
      it('should return out', () => expect(result).toBe(out));
    });

    describe('multiplyScalar', () => {
      describe('with a separate output matrix', () => {
        beforeEach(() => { result = Mat2.multiplyScalar(out, matA, 2); });

        it('should place values into out', () => expect(out).toBeVec(2, 4, 6, 8));
        it('should return out', () => expect(result).toBe(out));
        it('should not modify matA', () => expect(matA).toBeVec(1, 2, 3, 4));
      });

      describe('when matA is the output matrix', () => {
        beforeEach(() => { result = Mat2.multiplyScalar(matA, matA, 2); });

        it('should place values into matA', () => expect(matA).toBeVec(2, 4, 6, 8));
        it('should return matA', () => expect(result).toBe(matA));
      });
    });

    describe('multiplyScalarAndAdd', () => {
      describe('with a separate output matrix', () => {
        beforeEach(() => { result = Mat2.multiplyScalarAndAdd(out, matA, matB, 0.5); });

        it('should place values into out', () => expect(out).toBeVec(3.5, 5, 6.5, 8));
        it('should return out', () => expect(result).toBe(out));
        it('should not modify matA', () => expect(matA).toBeVec(1, 2, 3, 4));
        it('should not modify matB', () => expect(matB).toBeVec(5, 6, 7, 8));
      });

      describe('when matA is the output matrix', () => {
        beforeEach(() => { result = Mat2.multiplyScalarAndAdd(matA, matA, matB, 0.5); });

        it('should place values into matA', () => expect(matA).toBeVec(3.5, 5, 6.5, 8));
        it('should return matA', () => expect(result).toBe(matA));
        it('should not modify matB', () => expect(matB).toBeVec(5, 6, 7, 8));
      });

      describe('when matB is the output matrix', () => {
        beforeEach(() => { result = Mat2.multiplyScalarAndAdd(matB, matA, matB, 0.5); });

        it('should place values into matB', () => expect(matB).toBeVec(3.5, 5, 6.5, 8));
        it('should return matB', () => expect(result).toBe(matB));
        it('should not modify matA', () => expect(matA).toBeVec(1, 2, 3, 4));
      });
    });

    describe('exactEquals', () => {
      let matC: Mat2Like, r0: boolean, r1: boolean;

      beforeEach(() => {
        matA = [0, 1, 2, 3];
        matB = [0, 1, 2, 3];
        matC = [1, 2, 3, 4];
        r0 = Mat2.exactEquals(matA, matB);
        r1 = Mat2.exactEquals(matA, matC);
      });

      it('should return true for identical matrices', () => expect(r0).toBe(true));
      it('should return false for different matrices', () => expect(r1).toBe(false));
      it('should not modify matA', () => expect(matA).toBeVec(0, 1, 2, 3));
      it('should not modify matB', () => expect(matB).toBeVec(0, 1, 2, 3));
    });

    describe('equals', () => {
      let matC: Mat2Like, matD: Mat2Like, r0: boolean, r1: boolean, r2: boolean;

      beforeEach(() => {
        matA = [0, 1, 2, 3];
        matB = [0, 1, 2, 3];
        matC = [1, 2, 3, 4];
        matD = [1e-16, 1, 2, 3];
        r0 = Mat2.equals(matA, matB);
        r1 = Mat2.equals(matA, matC);
        r2 = Mat2.equals(matA, matD);
      });

      it('should return true for identical matrices', () => expect(r0).toBe(true));
      it('should return false for different matrices', () => expect(r1).toBe(false));
      it('should return true for close but not identical matrices', () => expect(r2).toBe(true));
      it('should not modify matA', () => expect(matA).toBeVec(0, 1, 2, 3));
      it('should not modify matB', () => expect(matB).toBeVec(0, 1, 2, 3));
    });
  });
});
