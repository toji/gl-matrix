import { expect, describe, it, beforeEach } from 'vitest';

import { Mat4, Quat, Quat2, Vec3 } from '#gl-matrix';

import type { QuatLike, Quat2Like, Vec3Like, Vec4Like } from '#gl-matrix/types';

describe('Quat2', () => {
  describe('constructor', () => {
    it('should return Quat2(0, 0, 0, 1, 0, 0, 0, 0) if called with no arguments', () => {
      expect(new Quat2()).toBeVec(0, 0, 0, 1, 0, 0, 0, 0);
    });

    it('should return Quat(x, y, z, w, x2, y2, z2, w2) if called with (x, y, z, w, x2, y2, z2, w2)', () => {
      expect(new Quat2(1, 2, 3, 4, 5, 6, 7, 8)).toBeVec(1, 2, 3, 4, 5, 6, 7, 8);
      expect(new Quat2(-3, 4.4, -5.6, 7.8, 9.0, -10.11, 12.13, -14.15)).toBeVec(
        -3, 4.4, -5.6, 7.8, 9.0, -10.11, 12.13, -14.15);
    });

    it('should return Quat(x, x, x, x, x, x, x, x) if called with (x)', () => {
      expect(new Quat2(1)).toBeVec(1, 1, 1, 1, 1, 1, 1, 1);
      expect(new Quat2(-2.3)).toBeVec(-2.3, -2.3, -2.3, -2.3, -2.3, -2.3, -2.3, -2.3);
    });

    it('should return Quat(x, y, z, w) if called with ([x, y, z, w])', () => {
      expect(new Quat2([1, 2, 3, 4, 5, 6, 7, 8])).toBeVec(1, 2, 3, 4, 5, 6, 7, 8);
      expect(new Quat2([-3, 4.4, -5.6, 7.8, 9.0, -10.11, 12.13, -14.15])).toBeVec(
        -3, 4.4, -5.6, 7.8, 9.0, -10.11, 12.13, -14.15);
    });

    it('should return Quat(x, y, z, w, x2, y2, z2, w2) if called with (Quat(x, y, z, w, x2, y2, z2, w2))', () => {
      const v = new Quat2(1, 2, 3, 4, 5, 6, 7, 8);
      expect(new Quat2(v)).toBeVec(v);
    });

    it('should return Quat(x, y, z, w, x2, y2, z2, w2) if called with (Float32Array([x, y, z, w, x2, y2, z2, w2]))',
      () => {
        const arr = new Float32Array([1.2, 3.4, 5.6, 7.8, 9.10, 11.12, 13.14, 15.16]);
        expect(new Quat2(arr)).toBeVec(arr);
      });
  });

  describe('static', () => {
    let out: Quat2;
    let outVec: Vec3;
    let quat2A: Quat2Like;
    let quat2B: Quat2Like;
    let result: Vec4Like | Quat2Like | number | string;
    let resultVec: Vec3Like;
    let outQuat: QuatLike;
    let vec: Vec3Like;

    beforeEach(() => {
      quat2A = new Quat2(1, 2, 3, 4, 2, 5, 6, -2);
      quat2B = new Quat2(5, 6, 7, 8, 9, 8, 6, -4);
      out = new Quat2();
      outVec = new Vec3();
      outQuat = new Quat();
      vec = new Vec3(1, 1, -1);
    });

    describe('translate', () => {
      const matrixA = Mat4.create(), matOut = Mat4.create(), quatOut = Quat2.create();

      beforeEach(() => {
        // quat2A only seems to work when created using this function?
        quat2B = Quat2.fromRotationTranslation(quat2A, [1, 2, 3, 4], [-5, 4, 10]);
        Quat2.normalize(quat2A, quat2A);
        Mat4.fromQuat2(matrixA, quat2A);
      });

      describe('with a separate output quaternion', () => {
        beforeEach(() => {
          result = Quat2.translate(out, quat2A, vec);
          // Same thing with a matrix
          Mat4.translate(matOut, matrixA, vec);
          Quat2.fromMat4(quatOut, matOut);
        });

        it('should place values into out', () => expect(out).toBeQuat2(quatOut));
        it('should return out', () => expect(result).toBe(out));
        it('should not modify quat2A', () => expect(quat2A).toBeQuat2(quat2B));
        it('should not modify vec', () => expect(vec).toBeVec(1, 1, -1));
      });

      describe('when quat2A is the output quaternion', () => {
        beforeEach(() => {
          result = Quat2.translate(quat2A, quat2A, vec);
          // Same thing with a matrix
          Mat4.translate(matOut, matrixA, vec);
          Quat2.fromMat4(quatOut, matOut);
        });

        it('should place values into quat2A', () => expect(quat2A).toBeQuat2(quatOut));
        it('should return quat2A', () => expect(result).toBe(quat2A));
      });
    });

    describe('rotateAroundAxis', () => {
      const matrixA = new Mat4();
      const matOut = new Mat4();
      const ax: Vec3Like = [1, 4, 2];

      beforeEach(() => {
        // quat2A only seems to work when created using this function?
        Quat2.fromRotationTranslation(quat2A, [1, 2, 3, 4], [-5, 4, 10]);
        Quat2.normalize(quat2A, quat2A);
        Mat4.fromQuat2(matrixA, quat2A);
      });

      describe('with a separate output quaternion', () => {
        beforeEach(() => {
          result = Quat2.rotateAroundAxis(out, quat2A, ax, 5);

          // Same thing with a matrix
          Mat4.rotate(matOut, matrixA, 5, ax);
          Quat2.fromMat4(quat2B, matOut);
        });

        it('should place values into out', () => expect(out).toBeQuat2(quat2B));
        it('should return out', () => expect(result).toBe(out));
        it('should not modify quat2A', () => expect(quat2A).toBeQuat2(
          0.18257418583505536, 0.3651483716701107, 0.5477225575051661, 0.7302967433402214,
          -2.556038601690775, 3.742770809618635, 2.37346441585572, -3.0124740662784135
        ));
        it('should not modify ax', () => expect(ax).toBeVec(1, 4, 2));
      });

      describe('when quat2A is the output quaternion', () => {
        beforeEach(() => {
          result = Quat2.rotateAroundAxis(quat2A, quat2A, ax, 5);
          // Same thing with a matrix

          Mat4.rotate(matOut, matrixA, 5, ax);
          Quat2.fromMat4(quat2B, matOut);
        });

        it('should place values into quat2A', () => expect(quat2A).toBeQuat2(quat2B));
        it('should return quat2A', () => expect(result).toBe(quat2A));
        it('should not modify ax', () => expect(ax).toBeVec(1, 4, 2));
      });
    });

    describe('rotateByQuatAppend', () => {
      const correctResult = Quat2.create();
      const rotationQuat = Quat2.create();

      beforeEach(() => {
        rotationQuat[0] = 2;
        rotationQuat[1] = 5;
        rotationQuat[2] = 2;
        rotationQuat[3] = -10;
        Quat2.multiply(correctResult, quat2A, rotationQuat);
      });

      describe('with a separate output quaternion', () => {
        beforeEach(() => { result = Quat2.rotateByQuatAppend(out, quat2A, [2, 5, 2, -10]); });

        it('should place values into out', () => expect(out).toBeQuat2(correctResult));
        it('should return out', () => expect(result).toBe(out));
        it('should not modify quat2A', () => expect(quat2A).toBeQuat2(1, 2, 3, 4, 2, 5, 6, -2));
        it('should not modify the rotation quaternion', () => expect(rotationQuat).toBeQuat2(2, 5, 2, -10, 0, 0, 0, 0));
      });

      describe('when quat2A is the output quaternion', () => {
        beforeEach(() => { result = Quat2.rotateByQuatAppend(quat2A, quat2A, [2, 5, 2, -10]); });

        it('should place values into quat2A', () => expect(quat2A).toBeQuat2(correctResult));
        it('should return quat2A', () => expect(result).toBe(quat2A));
        it('should not modify the rotation quaternion', () => expect(rotationQuat).toBeQuat2(2, 5, 2, -10, 0, 0, 0, 0));
      });
    });

    describe('rotateByQuatPrepend', () => {
      const correctResult = Quat2.create();
      const rotationQuat = Quat2.create();

      beforeEach(() => {
        rotationQuat[0] = 2;
        rotationQuat[1] = 5;
        rotationQuat[2] = 2;
        rotationQuat[3] = -10;
        Quat2.multiply(correctResult, rotationQuat, quat2A);
      });

      describe('with a separate output quaternion', () => {
        beforeEach(() => { result = Quat2.rotateByQuatPrepend(out, Quat2.getReal(outQuat, rotationQuat), quat2A); });

        it('should place values into out', () => expect(out).toBeQuat2(correctResult));
        it('should return out', () => expect(result).toBe(out));
        it('should not modify quat2A', () => expect(quat2A).toBeQuat2(1, 2, 3, 4, 2, 5, 6, -2));
        it('should not modify the rotation quaternion', () => expect(rotationQuat).toBeQuat2(2, 5, 2, -10, 0, 0, 0, 0));
      });

      describe('when quat2A is the output quaternion', () => {
        beforeEach(() => { result = Quat2.rotateByQuatPrepend(quat2A, Quat2.getReal(outQuat, rotationQuat), quat2A); });

        it('should place values into quat2A', () => expect(quat2A).toBeQuat2(correctResult));
        it('should return quat2A', () => expect(result).toBe(quat2A));
        it('should not modify the rotation quaternion', () => expect(rotationQuat).toBeQuat2(2, 5, 2, -10, 0, 0, 0, 0));
      });
    });

    describe('rotateX', () => {
      const matrixA = Mat4.create(), matOut = Mat4.create(), quatOut = Quat2.create();

      beforeEach(() => {
        // quat2A only seems to work when created using this function?
        quat2B = Quat2.fromRotationTranslation(quat2A, [1, 2, 3, 4], [-5, 4, 10]) as Quat2;
        Quat2.normalize(quat2A, quat2A);
        Mat4.fromQuat2(matrixA, quat2A);
      });

      describe('with a separate output quaternion', () => {
        beforeEach(() => {
          result = Quat2.rotateX(out, quat2A, 5);
          // Same thing with a matrix
          Mat4.rotateX(matOut, matrixA, 5);
          Quat2.fromMat4(quatOut, matOut);
        });

        it('should place values into out', () => expect(out).toBeQuat2(quatOut));
        it('should return out', () => expect(result).toBe(out));
        it('should not modify quat2A', () => expect(quat2A).toBeQuat2(quat2B));
      });

      describe('when quat2A is the output quaternion', () => {
        beforeEach(() => {
          result = Quat2.rotateX(quat2A, quat2A, 5);
          // Same thing with a matrix
          Mat4.rotateX(matOut, matrixA, 5);
          Quat2.fromMat4(quatOut, matOut);
        });

        it('should place values into quat2A', () => expect(quat2A).toBeQuat2(quatOut));
        it('should return quat2A', () => expect(result).toBe(quat2A));
      });
    });

    describe('rotateY', () => {
      const matrixA = Mat4.create(), matOut = Mat4.create(), quatOut = Quat2.create();

      beforeEach(() => {
        // quat2A only seems to work when created using this function?
        quat2B = Quat2.fromRotationTranslation(quat2A, [1, 2, 3, 4], [5, 4, -10]) as Quat2;
        Quat2.normalize(quat2A, quat2A);
        Mat4.fromQuat2(matrixA, quat2A);
      });

      describe('with a separate output quaternion', () => {
        beforeEach(() => {
          result = Quat2.rotateY(out, quat2A, -2);
          // Same thing with a matrix
          Mat4.rotateY(matOut, matrixA, -2);
          Quat2.fromMat4(quatOut, matOut);
        });

        it('should place values into out', () => expect(out).toBeQuat2(quatOut));
        it('should return out', () => expect(result).toBe(out));
        it('should not modify quat2A', () => expect(quat2A).toBeQuat2(quat2B));
      });

      describe('when quat2A is the output quaternion', () => {
        beforeEach(() => {
          result = Quat2.rotateY(quat2A, quat2A, -2);
          // Same thing with a matrix
          Mat4.rotateY(matOut, matrixA, -2);
          Quat2.fromMat4(quatOut, matOut);
        });

        it('should place values into quat2A', () => expect(quat2A).toBeQuat2(quatOut));
        it('should return quat2A', () => expect(result).toBe(quat2A));
      });
    });

    describe('rotateZ', () => {
      const matrixA = Mat4.create(), matOut = Mat4.create(), quatOut = Quat2.create();

      beforeEach(() => {
        // quat2A only seems to work when created using this function?
        quat2B = Quat2.fromRotationTranslation(quat2A, [1, 0, 3, -4], [0, -4, -10]) as Quat2;
        Quat2.normalize(quat2A, quat2A);
        Mat4.fromQuat2(matrixA, quat2A);
      });

      describe('with a separate output quaternion', () => {
        beforeEach(() => {
          result = Quat2.rotateZ(out, quat2A, 1);
          // Same thing with a matrix
          Mat4.rotateZ(matOut, matrixA, 1);
          Quat2.fromMat4(quatOut, matOut);
        });

        it('should place values into out', () => expect(out).toBeQuat2(quatOut));
        it('should return out', () => expect(result).toBe(out));
        it('should not modify quat2A', () => expect(quat2A).toBeQuat2(quat2B));
      });

      describe('when quat2A is the output quaternion', () => {
        beforeEach(() => {
          result = Quat2.rotateZ(quat2A, quat2A, 1);
          // Same thing with a matrix
          Mat4.rotateZ(matOut, matrixA, 1);
          Quat2.fromMat4(quatOut, matOut);
        });

        it('should place values into quat2A', () => expect(quat2A).toBeQuat2(quatOut));
        it('should return quat2A', () => expect(result).toBe(quat2A));
      });
    });

    describe('from/toMat4', () => {
      let matRes = Mat4.create();
      const matOut = Mat4.create();
      const rotationQuat = Quat.create();

      describe('quat to matrix and back', () => {
        beforeEach(() => {
          Quat.normalize(rotationQuat, [1, 2, 3, 4]);

          Quat2.fromRotationTranslation(quat2A, rotationQuat, [1, -5, 3]);
          matRes = Mat4.fromQuat2(matOut, quat2A) as Mat4;

          result = Quat2.fromMat4(out, matRes);
        });

        it('should return out', () => expect(result).toBe(out));
        it('should return matOut', () => expect(matRes).toBe(matOut));
        it('should not modify quat2A', () => expect(quat2A).toBeQuat2(0.18257418, 0.36514836, 0.54772257, 0.73029673,
          -1.5518806, -1.82574184, 1.73445473, 0));
        it('should be equal to the starting dual quat', () => expect(quat2A).toBeQuat2(result as Quat2Like));
      });
    });

    describe('create', () => {
      beforeEach(() => { result = Quat2.create(); });

      it('should return 2 4 element arrays initialized to an identity dual quaternion',
        () => expect(result).toBeQuat2(0, 0, 0, 1, 0, 0, 0, 0));
    });

    describe('clone', () => {
      beforeEach(() => { result = Quat2.clone(quat2A); });

      it('should return 2 4 element arrays initialized to the values in quat2A',
        () => expect(result).toBeQuat2(quat2A));
    });

    describe('fromValues', () => {
      beforeEach(() => { result = Quat2.fromValues(1, 2, 3, 4, 5, 7, 8, -2); });

      it('should return 2 4 element arrays initialized to the values passedd to the values passed',
        () => expect(result).toBeQuat2(1, 2, 3, 4, 5, 7, 8, -2));
    });

    describe('copy', () => {
      beforeEach(() => { result = Quat2.copy(out, quat2A); });

      it('should place values into out', () => expect(out).toBeQuat2(1, 2, 3, 4, 2, 5, 6, -2));
      it('should return out', () => expect(result).toBe(out));
    });

    describe('set', () => {
      beforeEach(() => { result = Quat2.set(out, 1, 2, 3, 4, 2, 5, 6, -2); });

      it('should place values into out', () => expect(out).toBeQuat2(1, 2, 3, 4, 2, 5, 6, -2));
      it('should return out', () => expect(result).toBe(out));
    });

    describe('identity', () => {
      beforeEach(() => { result = Quat2.identity(out); });

      it('should place values into out', () => expect(result).toBeQuat2(0, 0, 0, 1, 0, 0, 0, 0));
      it('should return out', () => expect(result).toBe(out));
    });

    describe('add', () => {
      describe('with a separate output dual quaternion', () => {
        beforeEach(() => { result = Quat2.add(out, quat2A, quat2B); });

        it('should place values into out', () => expect(out).toBeQuat2(6, 8, 10, 12, 11, 13, 12, -6));
        it('should return out', () => expect(result).toBe(out));
        it('should not modify quat2A', () => expect(quat2A).toBeQuat2(1, 2, 3, 4, 2, 5, 6, -2));
        it('should not modify quat2B', () => expect(quat2B).toBeQuat2(5, 6, 7, 8, 9, 8, 6, -4));
      });

      describe('when quat2A is the output dual quaternion', () => {
        beforeEach(() => { result = Quat2.add(quat2A, quat2A, quat2B); });

        it('should place values into quat2A', () => expect(quat2A).toBeQuat2(6, 8, 10, 12, 11, 13, 12, -6));
        it('should return quat2A', () => expect(result).toBe(quat2A));
        it('should not modify quat2B', () => expect(quat2B).toBeQuat2(5, 6, 7, 8, 9, 8, 6, -4));
      });

      describe('when quat2B is the output dual quaternion', () => {
        beforeEach(() => { result = Quat2.add(quat2B, quat2A, quat2B); });

        it('should place values into quat2B', () => expect(quat2B).toBeQuat2(6, 8, 10, 12, 11, 13, 12, -6));
        it('should return quat2B', () => expect(result).toBe(quat2B));
        it('should not modify quat2A', () => expect(quat2A).toBeQuat2(1, 2, 3, 4, 2, 5, 6, -2));
      });
    });

    describe('multiply', () => {
      it('should have an alias called `mul`', () => expect(Quat2.mul).toEqual(Quat2.multiply));

      describe('with a separate output quaternion', () => {
        beforeEach(() => { result = Quat2.multiply(out, quat2A, quat2B); });

        it('should place values into out', () => expect(out).toBeQuat2(24, 48, 48, -6,  25, 89, 23, -157));
        it('should return out', () => expect(result).toBe(out));
        it('should not modify quat2A', () => expect(quat2A).toBeQuat2(1, 2, 3, 4, 2, 5, 6, -2));
        it('should not modify quat2B', () => expect(quat2B).toBeQuat2(5, 6, 7, 8, 9, 8, 6, -4));
      });

      describe('when quat2A is the output quaternion', () => {
        beforeEach(() => { result = Quat2.multiply(quat2A, quat2A, quat2B); });

        it('should place values into quat2A', () => expect(quat2A).toBeQuat2(24, 48, 48, -6,  25, 89, 23, -157));
        it('should return quat2A', () => expect(result).toBe(quat2A));
        it('should not modify quat2B', () => expect(quat2B).toBeQuat2(5, 6, 7, 8, 9, 8, 6, -4));
      });

      describe('when quat2B is the output quaternion', () => {
        beforeEach(() => { result = Quat2.multiply(quat2B, quat2A, quat2B); });

        it('should place values into quat2B', () => expect(quat2B).toBeQuat2(24, 48, 48, -6,  25, 89, 23, -157));
        it('should return quat2B', () => expect(result).toBe(quat2B));
        it('should not modify quat2A', () => expect(quat2A).toBeQuat2(1, 2, 3, 4, 2, 5, 6, -2));
      });

      describe('same as matrix multiplication', () => {
        const matrixA = Mat4.create(), matrixB = Mat4.create();
        const matOut = Mat4.create(), quatOut = Quat2.create();

        beforeEach(() => {
          // quat2A and quat2B only seem to work when created using this function?
          Quat2.fromRotationTranslation(quat2A, [1, 2, 3, 4], [-5, 4, 10]);
          Quat2.normalize(quat2A, quat2A);
          Mat4.fromQuat2(matrixA, quat2A);

          Quat2.fromRotationTranslation(quat2B, [5, 6, 7, 8], [9, 8, 6]);
          Quat2.normalize(quat2B, quat2B);
          Mat4.fromQuat2(matrixB, quat2B);
        });

        it('the matrices should be equal to the dual quaternions', () => {
          const testQuat = Quat2.create();
          Quat2.fromMat4(testQuat, matrixA);
          expect(testQuat).toBeQuat2(...quat2A);

          Quat2.fromMat4(testQuat, matrixB);
          expect(testQuat).toBeQuat2(...quat2B);
        });

        it('should be equal to the matrix multiplication', () => {
          Quat2.multiply(out, quat2A, quat2B);
          Mat4.mul(matOut, matrixA, matrixB);
          Quat2.fromMat4(quatOut, matOut);
          expect(out).toBeQuat2(quatOut);
        });
      });
    });

    describe('scale', () => {
      describe('with a separate output dual quaternion', () => {
        beforeEach(() => { result = Quat2.scale(out, quat2A, 2); });

        it('should place values into out', () => expect(out).toBeQuat2(2, 4, 6, 8, 4, 10, 12, -4));
        it('should return out', () => expect(result).toBe(out));
        it('should not modify quat2A', () => expect(quat2A).toBeQuat2(1, 2, 3, 4, 2, 5, 6, -2));
      });

      describe('when quat2A is the output dual quaternion', () => {
        beforeEach(() => { result = Quat2.scale(quat2A, quat2A, 2); });

        it('should place values into quat2A', () => expect(quat2A).toBeQuat2(2, 4, 6, 8, 4, 10, 12, -4));
        it('should return quat2A', () => expect(result).toBe(quat2A));
      });
    });

    describe('length', () => {
      beforeEach(() => { result = Quat2.length(quat2A); });

      it('should have an alias called `len`', () => expect(Quat2.len).toEqual(Quat2.length));
      it('should return the length', () => expect(result).toBeCloseTo(5.477225));
    });

    describe('squaredLength', () => {
      beforeEach(() => { result = Quat2.squaredLength(quat2A); });

      it('should have an alias called `sqrLen`', () => expect(Quat2.sqrLen).toEqual(Quat2.squaredLength));
      it('should return the squared length', () => expect(result).toBeCloseTo(30));
    });

    describe('fromRotation', () => {
      beforeEach(() => { result = Quat2.fromRotation(out, [1, 2, 3, 4]); });

      it('should place values into out', () => expect(out).toBeQuat2(1, 2, 3, 4, 0, 0, 0, 0));
      it('should return out', () => expect(result).toBe(out));
      it('should not modify the quaternion', () => expect(quat2A).toBeQuat2(1, 2, 3, 4, 2, 5, 6, -2));
    });

    describe('fromTranslation', () => {
      beforeEach(() => { vec = [1, 2, 3]; result = Quat2.fromTranslation(out, vec); });

      it('should place values into out', () => expect(out).toBeQuat2(0, 0, 0, 1, 0.5, 1, 1.5, 0));
      it('should return out', () => expect(result).toBe(out));
      it('should not modify the vector', () => expect(vec).toBeVec(1, 2, 3));
    });

    describe('fromRotationTranslation', () => {
      beforeEach(() => {
        vec = [1, 2, 3];
        result = Quat2.fromRotationTranslation(out, [1, 2, 3, 4], vec);
      });

      it('should place values into out', () => expect(out).toBeQuat2(1, 2, 3, 4,  2, 4, 6, -7));
      it('should return out', () => expect(result).toBe(out));
      it('should not modify the quaternion', () => expect(Quat2.getReal(outQuat, quat2A)).toBeVec(1, 2, 3, 4));
      it('should not modify the vector', () => expect(vec).toBeVec(1, 2, 3));
      it('should have a translation that can be retrieved with getTranslation', () => {
        const t: Vec3Like = [0, 0, 0];
        Quat2.normalize(out, out);
        Quat2.getTranslation(t, out);

        expect(t).toBeVec(1, 2, 3);
      });
    });

    describe('fromRotationTranslationValues', () => {
      beforeEach(() => { result = Quat2.fromRotationTranslationValues(1, 2, 3, 4, 1, 2, 3); });

      it('should return the correct result', () => expect(result).toBeQuat2(1, 2, 3, 4,  2, 4, 6, -7));
      it('should have a translation that can be retrieved with getTranslation', () => {
        const t: Vec3Like = [0, 0, 0];

        Quat2.normalize(result as Quat2Like, result as Quat2Like);
        Quat2.getTranslation(t, result as Quat2Like);
        expect(t).toBeVec(1, 2, 3);
      });
    });

    describe('getTranslation', () => {
      describe('without a real part', () => {
        beforeEach(() => {
          Quat2.fromTranslation(out, [1, 2, 3]);
          resultVec = Quat2.getTranslation(outVec, out);
        });

        describe('not normalized', () => {
          it('should return the same translation value', () => expect(outVec).toBeVec(1, 2, 3));
          it('should return out', () => expect(outVec).toBe(resultVec));
        });

        describe('normalized', () => {
          it('should return the same translation value', () => {
            Quat2.normalize(outVec, outVec);
            expect(outVec).toBeVec(1, 2, 3);
          });
        });
      });

      describe('with a real part', () => {
        beforeEach(() => {
          Quat2.fromRotationTranslation(out, [2, 4, 6, 2], [1, 2, 3]);
          resultVec = Quat2.getTranslation(outVec, out);
        });

        describe('not normalized', () => {
          it('should not return the same translation value', () => expect(outVec).not.toBeVec(1, 2, 3));
          it('should return out', () => expect(outVec).toBe(resultVec));
        });

        describe('normalized', () => {
          it('should return the same translation value', () => {
            Quat2.normalize(out, out);
            Quat2.getTranslation(outVec, out);
            expect(outVec).toBeVec(1, 2, 3);
          });
        });
      });
    });

    describe('normalize', () => {
      describe('when it is normalizing quat2A', () => {
        beforeEach(() => {
          quat2A = [1, 2, 3, 4, 2, 5, 6, -2];
          Quat2.normalize(out, quat2A);
        });

        it('both parts should have been normalized', () => expect(out).toBeQuat2(1 / 5.4772255, 2 / 5.4772255,
          3 / 5.4772255, 4 / 5.4772255, 0.231260, 0.6450954, 0.693781, -0.9006993));
      });

      beforeEach(() => { quat2A = [5, 0, 0, 0, 0, 0, 0, 0]; });

      describe('with a separate output quaternion', () => {
        beforeEach(() => { result = Quat2.normalize(out, quat2A); });

        it('should place values into out', () => expect(out).toBeQuat2(1, 0, 0, 0, 0, 0, 0, 0));
        it('should return out', () => expect(result).toBe(out));
        it('should not modify quat2A', () => expect(quat2A).toBeQuat2(5, 0, 0, 0, 0, 0, 0, 0));
      });

      describe('when quat2A is the output quaternion', () => {
        beforeEach(() => { result = Quat2.normalize(quat2A, quat2A); });

        it('should place values into quat2A', () => expect(quat2A).toBeQuat2(1, 0, 0, 0, 0, 0, 0, 0));
        it('should return quat2A', () => expect(result).toBe(quat2A));
      });

      describe('when it contains a translation', () => {
        beforeEach(() => {
          Quat2.set(out, 5, 0, 0, 0, 1, 2, 3, 5);
          Quat2.normalize(out, out);
        });

        it('both parts should have been normalized', () => expect(out).toBeQuat2(1, 0, 0, 0, 0, 0.4, 0.6, 1));
      });
    });

    describe('lerp', () => {
      describe('with a separate output quaternion', () => {
        beforeEach(() => { result = Quat2.lerp(out, quat2A, quat2B, 0.7); });

        it('should place values into out', () => expect(out).toBeQuat2(3.8, 4.8, 5.8, 6.8, 6.9, 7.1, 6.0, -3.4));
        it('should return out', () => expect(result).toBe(out));
        it('should not modify quat2A', () => expect(quat2A).toBeQuat2(1, 2, 3, 4, 2, 5, 6, -2));
        it('should not modify quat2B', () => expect(quat2B).toBeQuat2(5, 6, 7, 8, 9, 8, 6, -4));
      });

      describe('when quat2A is the output quaternion', () => {
        beforeEach(() => { result = Quat2.lerp(quat2A, quat2A, quat2B, 0.5); });

        it('should place values into quat2A', () => expect(quat2A).toBeQuat2(3, 4, 5, 6, 5.5, 6.5, 6, -3));
        it('should return quat2A', () => expect(result).toBe(quat2A));
        it('should not modify quat2B', () => expect(quat2B).toBeQuat2(5, 6, 7, 8, 9, 8, 6, -4));
      });

      describe('when quat2B is the output quaternion', () => {
        beforeEach(() => { result = Quat2.lerp(quat2B, quat2A, quat2B, 0.5); });

        it('should place values into quat2B', () => expect(quat2B).toBeQuat2(3, 4, 5, 6, 5.5, 6.5, 6, -3));
        it('should return quat2B', () => expect(result).toBe(quat2B));
        it('should not modify quat2A', () => expect(quat2A).toBeQuat2(1, 2, 3, 4, 2, 5, 6, -2));
      });

      describe('shortest path', () => {
        beforeEach(() => { result = Quat2.lerp(out, [1, 2, 3, -4, 2, 5, 6, -2], [5, -6, 7, 8, 9, 8, 6, -4], 0.4); });

        it('should pick the shorter path', () => expect(out).toBeQuat2(-1.4, 3.6, -1, -5.6, -2.4, -0.2, 1.2, 0.4));
      });
    });

    describe('dot', () => {
      describe('with a separate output dual quaternion', () => {
        beforeEach(() => { result = Quat2.dot(quat2A, quat2B); });

        it('should return the dot product', () => expect(result).toBe(70));
        it('should not modify quat2A', () => expect(quat2A).toBeQuat2(1, 2, 3, 4, 2, 5, 6, -2));
        it('should not modify quat2B', () => expect(quat2B).toBeQuat2(5, 6, 7, 8, 9, 8, 6, -4));
      });
    });

    describe('invert', () => {
      describe('with a separate output dual quaternion', () => {
        beforeEach(() => { result = Quat2.invert(out, quat2A); });

        it('should place values into out', () => expect(out).toBeQuat2(
          -0.0333333333, -0.06666666666, -0.1, 0.13333333333, -2 / 30, -5 / 30, -6 / 30, -2 / 30));
        it('should return out', () => expect(result).toBe(out));
        it('should not modify quat2A', () => expect(quat2A).toBeQuat2(1, 2, 3, 4, 2, 5, 6, -2));
        it('the real part should be equal to a inverted quaternion', () => {
          Quat.invert(outQuat, [1, 2, 3, 4]);
          expect(Quat2.getReal(outQuat, out)).toBeVec(...outQuat);
        });
      });

      describe('when quat2A is the output quaternion', () => {
        beforeEach(() => { result = Quat2.invert(quat2A, quat2A); });

        it('should place values into quat2A', () => expect(quat2A).toBeVec(
          -0.0333333333, -0.06666666666, -0.1, 0.13333333333, -2 / 30, -5 / 30, -6 / 30, -2 / 30));
        it('should return quat2A', () => expect(result).toBe(quat2A));
      });
    });

    describe('get real/dual', () => {
      describe('get real', () => {
        beforeEach(() => { result = Quat2.getReal(outQuat, quat2A); });

        it('should place values into out', () => expect(outQuat).toBeVec(1, 2, 3, 4));
        it('should return out', () => expect(result).toBe(outQuat));
        it('should not modify quat2A', () => expect(quat2A).toBeQuat2(1, 2, 3, 4, 2, 5, 6, -2));
      });

      describe('get dual', () => {
        beforeEach(() => { result = Quat2.getDual(outQuat, quat2A); });

        it('should place values into out', () => expect(outQuat).toBeVec(2, 5, 6, -2));
        it('should return out', () => expect(result).toBe(outQuat));
        it('should not modify quat2A', () => expect(quat2A).toBeQuat2(1, 2, 3, 4, 2, 5, 6, -2));
      });
    });

    describe('set real/dual', () => {
      describe('set real', () => {
        beforeEach(() => {
          outQuat = [4, 6, 8, -100];
          result = Quat2.setReal(quat2A, outQuat);
        });

        it('should place values into out', () => expect(quat2A).toBeQuat2(4, 6, 8, -100, 2, 5, 6, -2));
        it('should return out', () => expect(result).toBe(quat2A));
        it('should not modify outQuat', () => expect(outQuat).toBeVec(4, 6, 8, -100));
      });

      describe('set dual', () => {
        beforeEach(() => {
          outQuat = [4.3, 6, 8, -100];
          result = Quat2.setDual(quat2A, outQuat);
        });

        it('should place values into out', () => expect(quat2A).toBeQuat2(1, 2, 3, 4, 4.3, 6, 8, -100));
        it('should return out', () => expect(result).toBe(quat2A));
        it('should not modify outQuat', () => expect(outQuat).toBeVec(4.3, 6, 8, -100));
      });
    });

    describe('conjugate', () => {
      describe('with a separate output dual quaternion', () => {
        beforeEach(() => { result = Quat2.conjugate(out, quat2A); });

        it('should place values into out', () => expect(out).toBeQuat2(-1, -2, -3, 4, -2, -5, -6, -2));
        it('should return out', () => expect(result).toBe(out));
        it('should not modify quat2A', () => expect(quat2A).toBeQuat2(1, 2, 3, 4, 2, 5, 6, -2));
      });

      describe('when quat2A is the output dual quaternion', () => {
        beforeEach(() => { result = Quat2.conjugate(quat2A, quat2A); });

        it('should place values into quat2A', () => expect(quat2A).toBeQuat2(-1, -2, -3, 4, -2, -5, -6, -2));
        it('should return quat2A', () => expect(result).toBe(quat2A));
      });
    });

    describe('str', () => {
      beforeEach(() => { result = Quat2.str(quat2A); });

      it('should return a string representation of the quaternion',
        () => expect(result).toEqual('Quat2(1, 2, 3, 4, 2, 5, 6, -2)'));
    });

    describe('exactEquals', () => {
      let quat2C: Quat2Like, r0: boolean, r1: boolean;

      beforeEach(() => {
        quat2A = [0, 1, 2, 3, 4, 5, 6, 7];
        quat2B = [0, 1, 2, 3, 4, 5, 6, 7];
        quat2C = [1, 2, 3, 4, 5, 6, 7, 8];
        r0 = Quat2.exactEquals(quat2A, quat2B);
        r1 = Quat2.exactEquals(quat2A, quat2C);
      });

      it('should return true for identical quaternions', () => expect(r0).toBe(true));
      it('should return false for different quaternions', () => expect(r1).toBe(false));
      it('should not modify quat2A', () => expect(quat2A).toBeVec(0, 1, 2, 3, 4, 5, 6, 7));
      it('should not modify quat2B', () => expect(quat2B).toBeVec(0, 1, 2, 3, 4, 5, 6, 7));
    });

    describe('equals', () => {
      let quat2C: Quat2Like, quat2D: Quat2Like, r0: boolean, r1: boolean, r2: boolean;

      beforeEach(() => {
        quat2A = [0, 1, 2, 3, 4, 5, 6, 7];
        quat2B = [0, 1, 2, 3, 4, 5, 6, 7];
        quat2C = [1, 2, 3, 4, 5, 6, 7, 8];
        quat2D = [1e-16, 1, 2, 3, 4, 5, 6, 7];
        r0 = Quat2.equals(quat2A, quat2B);
        r1 = Quat2.equals(quat2A, quat2C);
        r2 = Quat2.equals(quat2A, quat2D);
      });

      it('should return true for identical dual quaternions', () => expect(r0).toBe(true));
      it('should return false for different dual quaternions', () => expect(r1).toBe(false));
      it('should return true for close but not identical quaternions', () => expect(r2).toBe(true));
      it('should not modify quat2A', () => expect(quat2A).toBeVec(0, 1, 2, 3, 4, 5, 6, 7));
      it('should not modify quat2B', () => expect(quat2B).toBeVec(0, 1, 2, 3, 4, 5, 6, 7));
    });
  });
});
