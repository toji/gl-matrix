import { expect, describe, it, beforeEach } from 'vitest';
import { Quat, QuatLike } from "../src/quat"
import { Vec3, Vec3Like } from "../src/vec3"
import "./test-utils"

describe("Quat", () => {
  describe("constructor", () => {
    it("should return Quat(0, 0, 0, 1) if called with no arguments", () => {
      expect(new Quat()).toBeVec(0, 0, 0, 1);
    });

    it("should return Quat(x, y, z, w) if called with (x, y, z, w)", () => {
      expect(new Quat(1, 2, 3, 4)).toBeVec(1, 2, 3, 4);
      expect(new Quat(-3, 4.4, -5.6, 7.8)).toBeVec(-3, 4.4, -5.6, 7.8);
    });

    it("should return Quat(x, x, x, x) if called with (x)", () => {
      expect(new Quat(1)).toBeVec(1, 1, 1, 1);
      expect(new Quat(-2.3)).toBeVec(-2.3, -2.3, -2.3, -2.3);
    });

    it("should return Quat(x, y, z, w) if called with ([x, y, z, w])", () => {
      expect(new Quat([1, 2, 3, 4])).toBeVec(1, 2, 3, 4);
      expect(new Quat([-3, 4.4, -5.6, 7.8])).toBeVec(-3, 4.4, -5.6, 7.8);
    });

    it("should return Quat(x, y, z, w) if called with (Quat(x, y, z, w))", () => {
      let v = new Quat(3.4, 5.6, 7.8, 9);
      expect(new Quat(v)).toBeVec(v);
    });

    it("should return Quat(x, y, z, w) if called with (Float32Array([x, y, z, w]))", () => {
      let arr = new Float32Array([1.2, 3.4, 5.6, 7.8]);
      expect(new Quat(arr)).toBeVec(arr);
    });
  });

  describe("static", () => {
    let out: Quat
    let quatA: Quat;
    let quatB: Quat;
    let result: any;
    let vec: Vec3Like;

    const id = new Quat(0, 0, 0, 1);
    const deg90 = Math.PI / 2;

    beforeEach(() => {
      quatA = new Quat(1, 2, 3, 4);
      quatB = new Quat(5, 6, 7, 8);
      out = new Quat(0, 0, 0, 0);
      vec = [1, 1, -1];
    });

    describe("slerp", () => {
      describe("the normal case", () => {
        beforeEach(() => {
          result = Quat.slerp(out, [0, 0, 0, 1], [0, 1, 0, 0], 0.5);
        });

        it("should return out", () => { expect(result).toBe(out); });
        it("should calculate proper quat", () => {
          expect(result).toBeVec(0, 0.707106, 0, 0.707106);
        });
      });

      describe("where a == b", () => {
        beforeEach(() => {
          result = Quat.slerp(out, [0, 0, 0, 1], [0, 0, 0, 1], 0.5);
        });

        it("should return out", () => { expect(result).toBe(out); });
        it("should calculate proper quat", () => {
          expect(result).toBeVec(0, 0, 0, 1);
        });
      });

      describe("where theta == 180deg", () => {
        beforeEach(() => {
          Quat.rotateX(quatA, [1,0,0,0], Math.PI); // 180 deg
          result = Quat.slerp(out, [1,0,0,0], quatA, 1);
        });

        it("should calculate proper quat", () => {
          expect(result).toBeVec(0,0,0,-1);
        });
      });

      describe("where a == -b", () => {
        beforeEach(() => {
          result = Quat.slerp(out, [1, 0, 0, 0], [-1, 0, 0, 0], 0.5);
        });

        it("should return out", () => { expect(result).toBe(out); });
        it("should calculate proper quat", () => {
          expect(result).toBeVec(1, 0, 0, 0);
        });
      });
    });

    describe("pow", () => {
      describe("identity quat", () => {
        beforeEach(() => {
          result = Quat.pow(out, id, 2.1 /* random number */);
        });

        it("should return out", () => { expect(result).toBe(out); });
        it("should be the identity", () => {
          expect(result).toBeVec(id);
        });
      });

      describe("power of one", () => {
        beforeEach(() => {
          Quat.normalize(quatA, quatA);

          result = Quat.pow(out, quatA, 1);
        });

        it("should be the identity", () => {
        expect(result).toBeVec(quatA);
        });
        it("should be normalized", () => {
        expect(Quat.length(result)).toBeCloseTo(1);
        });
      });

      describe("squared", () => {
        beforeEach(() => {
          Quat.normalize(quatA, quatA);

          result = Quat.pow(out, quatA, 2);
        });

        it("should be the square", () => {
          let reference = Quat.multiply(Quat.create(), quatA, quatA);
          expect(result).toBeVec(reference);
        });
        it("should be normalized", () => {
        expect(Quat.length(result)).toBeCloseTo(1);
        });
      });

      describe("conjugate", () => {
        beforeEach(() => {
          Quat.normalize(quatA, quatA);

          result = Quat.pow(out, quatA, -1);
        });

        it("should be the conjugate", () => {
          let reference = Quat.conjugate(Quat.create(), quatA);
          expect(result).toBeVec(reference);
        });
        it("should be normalized", () => {
        expect(Quat.length(result)).toBeCloseTo(1);
        });
      });

      describe("reversible", () => {
        beforeEach(() => {
          Quat.normalize(quatA, quatA);

          let b = 2.1; // random number
          result = Quat.pow(out, quatA, b);
          result = Quat.pow(out, result, 1/b);
        });

        it("should be reverted", () => {
          expect(result).toBeVec(quatA);
        });
        it("should be normalized", () => {
        expect(Quat.length(result)).toBeCloseTo(1);
        });
      });
    });

    describe("rotateX", () => {
      beforeEach(() => {
        result = Quat.rotateX(out, id, deg90);
      });

      it("should return out", () => { expect(result).toBe(out); });
      it("should transform vec accordingly", () => {
        Vec3.transformQuat(vec, [0,0,-1], out);
        expect(vec).toBeVec(0, 1, 0);
      });
    });

    describe("rotateY", () => {
      beforeEach(() => {
        result = Quat.rotateY(out, id, deg90);
      });

      it("should return out", () => { expect(result).toBe(out); });
      it("should transform vec accordingly", () => {
        Vec3.transformQuat(vec, [0,0,-1], out);
        expect(vec).toBeVec(-1, 0, 0);
      });
    });

    describe("rotateZ", () => {
      beforeEach(() => {
        result = Quat.rotateZ(out, id, deg90);
      });

      it("should return out", () => { expect(result).toBe(out); });
      it("should transform vec accordingly", () => {
        Vec3.transformQuat(vec, [0,1,0], out);
        expect(vec).toBeVec(-1, 0, 0);
      });
    });

    /*describe("fromMat3", () => {
      let matr;

      describe("legacy", () => {
        beforeEach(() => {
          matr = [ 1, 0,  0,
              0, 0, -1,
              0, 1,  0 ];
          result = Quat.fromMat3(out, matr);
        });

        it("should set dest to the correct value", () => {
          expect(result).toBeVec(-0.707106, 0, 0, 0.707106);
        });
      });

      describe("where trace > 0", () => {
        beforeEach(() => {
          matr = [ 1, 0,  0,
              0, 0, -1,
              0, 1,  0 ];
          result = Quat.fromMat3(out, matr);
        });

        it("should return out", () => { expect(result).toBe(out); });

        it("should produce the correct transformation", () => {
          expect(Vec3.transformQuat([], [0,1,0], out)).toBeVec(0,0,-1);
        });
      });

      describe("from a normal matrix looking 'backward'", () => {
        beforeEach(() => {
          matr = mat3.create();
          mat3.transpose(matr, mat3.invert(matr, mat3.fromMat4(matr, mat4.lookAt(mat4.create(), [0, 0, 0], [0, 0, 1], [0, 1, 0]))));
          result = Quat.fromMat3(out, matr);
        });

        it("should return out", () => { expect(result).toBe(out); });

        it("should produce the same transformation as the given matrix", () => {
          expect(Vec3.transformQuat([], [3,2,-1], Quat.normalize(out, out))).toBeEqualish(Vec3.transformMat3([], [3,2,-1], matr));
        });
      });

      describe("from a normal matrix looking 'left' and 'upside down'", () => {
        beforeEach(() => {
          matr = mat3.create();
          mat3.transpose(matr, mat3.invert(matr, mat3.fromMat4(matr, mat4.lookAt(mat4.create(), [0, 0, 0], [-1, 0, 0], [0, -1, 0]))));
          result = Quat.fromMat3(out, matr);
        });

        it("should return out", () => { expect(result).toBe(out); });

        it("should produce the same transformation as the given matrix", () => {
          expect(Vec3.transformQuat([], [3,2,-1], Quat.normalize(out, out))).toBeEqualish(Vec3.transformMat3([], [3,2,-1], matr));
        });
      });

      describe("from a normal matrix looking 'upside down'", () => {
        beforeEach(() => {
          matr = mat3.create();
          mat3.transpose(matr, mat3.invert(matr, mat3.fromMat4(matr, mat4.lookAt(mat4.create(), [0, 0, 0], [0, 0, -1], [0, -1, 0]))));
          result = Quat.fromMat3(out, matr);
        });

        it("should return out", () => { expect(result).toBe(out); });

        it("should produce the same transformation as the given matrix", () => {
          expect(Vec3.transformQuat([], [3,2,-1], Quat.normalize(out, out))).toBeEqualish(Vec3.transformMat3([], [3,2,-1], matr));
        });
      });
    });*/

    describe("fromEuler", () => {
      describe("legacy", () => {
        beforeEach(() => {
          result = Quat.fromEuler(out, -90, 0, 0);
        });

        it("should set dest to the correct value", () => {
          expect(result).toBeVec(-0.707106, 0, 0, 0.707106);
        });
      });

      describe("where trace > 0", () => {
        beforeEach(() => {
          result = Quat.fromEuler(out, -90, 0, 0);
        });

        it("should return out", () => { expect(result).toBe(out); });

        it("should produce the correct transformation", () => {
          expect(Vec3.transformQuat([], [0,1,0], out)).toBeVec(0,0,-1);
        });
      });
    });

    /*describe("setAxes", () => {
      let r;
      beforeEach(() => { r = Vec3.create(); });

      describe("looking left", () => {
        let view, up, right;
        beforeEach(() => {
          view = [-1, 0, 0];
          up   = [ 0, 1, 0];
          right= [ 0, 0,-1];
          result = Quat.setAxes([], view, right, up);
        });

        it("should transform local view into world left", () => {
          r = Vec3.transformQuat([], [0,0,-1], result);
          expect(r).toBeVec(1, 0, 0);
        });

        it("should transform local right into world front", () => {
          r = Vec3.transformQuat([], [1,0,0], result);
          expect(r).toBeVec(0, 0, 1);
        });
      });

      describe("given opengl defaults", () => {
        let view, up, right;
        beforeEach(() => {
          view = [0, 0, -1];
          up   = [0, 1,  0];
          right= [1, 0,  0];
          result = Quat.setAxes(out, view, right, up);
        });

        it("should return out", () => {
          expect(result).toBe(out);
        });

        it("should produce identity", () => {
          expect(out).toBeVec(0, 0, 0, 1);
        });
      });

      describe("legacy example", () => {
        let view, up, right;
        beforeEach(() => {
          right= [1,  0, 0];
          up   = [0,  0, 1];
          view = [0, -1, 0];
          result = Quat.setAxes(out, view, right, up);
        });

        xit("should set correct quat4 values", () => {
          expect(result).toBeVec(0.707106, 0, 0, 0.707106);
        });
      });
    });*/

    describe("rotationTo", () => {
      let r;
      beforeEach(() => { r = Vec3.create(); });

      describe("at right angle", () => {
        beforeEach(() => {
          result = Quat.rotationTo(out, [0, 1, 0], [1, 0, 0]);
        });

        it("should return out", () => { expect(result).toBe(out); });

        it("should calculate proper quaternion", () => {
          expect(out).toBeVec(0, 0, -0.707106, 0.707106);
        });
      });

      describe("when vectors are parallel", () => {
        beforeEach(() => {
          result = Quat.rotationTo(out, [0, 1, 0], [0, 1, 0]);
        });

        it("should return out", () => { expect(result).toBe(out); });

        it("multiplying A should produce B", () => {
          expect(Vec3.transformQuat(r, [0, 1, 0], out)).toBeVec(0, 1, 0);
        });
      });

      describe("when vectors are opposed X", () => {
        beforeEach(() => {
          result = Quat.rotationTo(out, [1, 0, 0], [-1, 0, 0]);
        });

        it("should return out", () => { expect(result).toBe(out); });

        it("multiplying A should produce B", () => {
          expect(Vec3.transformQuat(r, [1, 0, 0], out)).toBeVec(-1, 0, 0);
        });
      });

      describe("when vectors are opposed Y", () => {
        beforeEach(() => {
          result = Quat.rotationTo(out, [0, 1, 0], [0, -1, 0]);
        });

        it("should return out", () => { expect(result).toBe(out); });

        it("multiplying A should produce B", () => {
          expect(Vec3.transformQuat(r, [0, 1, 0], out)).toBeVec(0, -1, 0);
        });
      });

      describe("when vectors are opposed Z", () => {
        beforeEach(() => {
          result = Quat.rotationTo(out, [0, 0, 1], [0, 0, -1]);
        });

        it("should return out", () => { expect(result).toBe(out); });

        it("multiplying A should produce B", () => {
          expect(Vec3.transformQuat(r, [0, 0, 1], out)).toBeVec(0, 0, -1);
        });
      });
    });

    describe("create", () => {
      beforeEach(() => { result = Quat.create(); });
      it("should return a 4 element array initialized to an identity quaternion", () => { expect(result).toBeVec(0, 0, 0, 1); });
    });

    describe("clone", () => {
      beforeEach(() => { result = Quat.clone(quatA); });
      it("should return a 4 element array initialized to the values in quatA", () => { expect(result).toBeVec(quatA); });
    });

    describe("fromValues", () => {
      beforeEach(() => { result = Quat.fromValues(1, 2, 3, 4); });
      it("should return a 4 element array initialized to the values passed", () => { expect(result).toBeVec(1, 2, 3, 4); });
    });

    describe("copy", () => {
      beforeEach(() => { result = Quat.copy(out, quatA); });
      it("should place values into out", () => { expect(out).toBeVec(1, 2, 3, 4); });
      it("should return out", () => { expect(result).toBe(out); });
    });

    describe("set", () => {
      beforeEach(() => { result = Quat.set(out, 1, 2, 3, 4); });
      it("should place values into out", () => { expect(out).toBeVec(1, 2, 3, 4); });
      it("should return out", () => { expect(result).toBe(out); });
    });

    describe("identity", () => {
      beforeEach(() => { result = Quat.identity(out); });
      it("should place values into out", () => { expect(result).toBeVec(0, 0, 0, 1); });
      it("should return out", () => { expect(result).toBe(out); });
    });

    describe("setAxisAngle", () => {
      beforeEach(() => { result = Quat.setAxisAngle(out, [1, 0, 0], Math.PI * 0.5); });
      it("should place values into out", () => { expect(result).toBeVec(0.707106, 0, 0, 0.707106); });
      it("should return out", () => { expect(result).toBe(out); });
    });

    describe("getAxisAngle", () => {
      let angle: number;
      describe("for a quaternion representing no rotation", () => {
        beforeEach(() => { result = Quat.setAxisAngle(out, [0, 1, 0], 0.0); angle = Quat.getAxisAngle(vec, out); });
        it("should return a multiple of 2*PI as the angle component", () => { expect(angle % (Math.PI * 2.0)).toBeCloseTo(0.0); });
      });

      describe("for a simple rotation about X axis", () => {
        beforeEach(() => { result = Quat.setAxisAngle(out, [1, 0, 0], 0.7778); angle = Quat.getAxisAngle(vec, out); });
        it("should return the same provided angle", () => { expect(angle).toBeCloseTo(0.7778); });
        it("should return the X axis as the angle", () => { expect(vec).toBeVec(1, 0, 0); });
      });

      describe("for a simple rotation about Y axis", () => {
        beforeEach(() => { result = Quat.setAxisAngle(out, [0, 1, 0], 0.879546); angle = Quat.getAxisAngle(vec, out); });
        it("should return the same provided angle", () => { expect(angle).toBeCloseTo(0.879546); });
        it("should return the X axis as the angle", () => { expect(vec).toBeVec(0, 1, 0); });
      });

      describe("for a simple rotation about Z axis", () => {
        beforeEach(() => { result = Quat.setAxisAngle(out, [0, 0, 1], 0.123456); angle = Quat.getAxisAngle(vec, out); });
        it("should return the same provided angle", () => { expect(angle).toBeCloseTo(0.123456); });
        it("should return the X axis as the angle", () => { expect(vec).toBeVec(0, 0, 1); });
      });

      describe("for a slightly irregular axis and right angle", () => {
        beforeEach(() => { result = Quat.setAxisAngle(out, [0.707106, 0, 0.707106], Math.PI * 0.5); angle = Quat.getAxisAngle(vec, out); });
        it("should place values into vec", () => { expect(vec).toBeVec(0.707106, 0, 0.707106); });
        it("should return a numeric angle", () => { expect(angle).toBeCloseTo(Math.PI * 0.5); });
      });

      describe("for a very irregular axis and negative input angle", () => {
        beforeEach(() => {
          quatA = Quat.setAxisAngle(quatA, [0.65538555, 0.49153915, 0.57346237], 8.8888);
          angle = Quat.getAxisAngle(vec, quatA);
          quatB = Quat.setAxisAngle(quatB, vec, angle);
        });
        it("should return an angle between 0 and 2*PI", () => { expect(angle).toBeGreaterThan(0.0); expect(angle).toBeLessThan(Math.PI * 2.0); });
        it("should create the same quaternion from axis and angle extracted", () => { expect(quatA).toBeVec(quatB); });
      });
    });

    describe("getAngle", () => {
      describe("from itself", () => {
        beforeEach(() => {
          Quat.normalize(quatA, quatA);
        });

        it("should be zero", () => {
          expect(Quat.getAngle(quatA, quatA)).toBeCloseTo(0);
        });
      });

      describe("from rotated", () => {
        beforeEach(() => {
          Quat.normalize(quatA, quatA);
          Quat.rotateX(quatB, quatA, Math.PI / 4);
        });

        it("should be 45 degrees", () => {
          expect(Quat.getAngle(quatA, quatB)).toBeCloseTo(Math.PI / 4);
        });
      });

      describe("compare with axisAngle", () => {
        beforeEach(() => {
          Quat.normalize(quatA, quatA);
          Quat.normalize(quatB, quatB);
        });

        it("should be equalish", () => {
          // compute reference value as axisAngle of quatA^{-1} * quatB
          let quatAInv = Quat.conjugate(Quat.create(), quatA);
          let quatAB = Quat.multiply(quatAInv, quatAInv, quatB);
          let dummy = Vec3.create();
          let reference = Quat.getAxisAngle(dummy, quatAB);

          expect(Quat.getAngle(quatA, quatB)).toBeCloseTo(reference);
        });
      });
    });

    describe("add", () => {
      describe("with a separate output quaternion", () => {
        beforeEach(() => { result = Quat.add(out, quatA, quatB); });

        it("should place values into out", () => { expect(out).toBeVec(6, 8, 10, 12); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify quatA", () => { expect(quatA).toBeVec(1, 2, 3, 4); });
        it("should not modify quatB", () => { expect(quatB).toBeVec(5, 6, 7, 8); });
      });

      describe("when quatA is the output quaternion", () => {
        beforeEach(() => { result = Quat.add(quatA, quatA, quatB); });

        it("should place values into quatA", () => { expect(quatA).toBeVec(6, 8, 10, 12); });
        it("should return quatA", () => { expect(result).toBe(quatA); });
        it("should not modify quatB", () => { expect(quatB).toBeVec(5, 6, 7, 8); });
      });

      describe("when quatB is the output quaternion", () => {
        beforeEach(() => { result = Quat.add(quatB, quatA, quatB); });

        it("should place values into quatB", () => { expect(quatB).toBeVec(6, 8, 10, 12); });
        it("should return quatB", () => { expect(result).toBe(quatB); });
        it("should not modify quatA", () => { expect(quatA).toBeVec(1, 2, 3, 4); });
      });
    });

    describe("multiply", () => {
      it("should have an alias called 'mul'", () => { expect(Quat.mul).toEqual(Quat.multiply); });

      describe("with a separate output quaternion", () => {
        beforeEach(() => { result = Quat.multiply(out, quatA, quatB); });

        it("should place values into out", () => { expect(out).toBeVec(24, 48, 48, -6); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify quatA", () => { expect(quatA).toBeVec(1, 2, 3, 4); });
        it("should not modify quatB", () => { expect(quatB).toBeVec(5, 6, 7, 8); });
      });

      describe("when quatA is the output quaternion", () => {
        beforeEach(() => { result = Quat.multiply(quatA, quatA, quatB); });

        it("should place values into quatA", () => { expect(quatA).toBeVec(24, 48, 48, -6); });
        it("should return quatA", () => { expect(result).toBe(quatA); });
        it("should not modify quatB", () => { expect(quatB).toBeVec(5, 6, 7, 8); });
      });

      describe("when quatB is the output quaternion", () => {
        beforeEach(() => { result = Quat.multiply(quatB, quatA, quatB); });

        it("should place values into quatB", () => { expect(quatB).toBeVec(24, 48, 48, -6); });
        it("should return quatB", () => { expect(result).toBe(quatB); });
        it("should not modify quatA", () => { expect(quatA).toBeVec(1, 2, 3, 4); });
      });
    });

    describe("scale", () => {
      describe("with a separate output quaternion", () => {
        beforeEach(() => { result = Quat.scale(out, quatA, 2); });

        it("should place values into out", () => { expect(out).toBeVec(2, 4, 6, 8); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify quatA", () => { expect(quatA).toBeVec(1, 2, 3, 4); });
      });

      describe("when quatA is the output quaternion", () => {
        beforeEach(() => { result = Quat.scale(quatA, quatA, 2); });

        it("should place values into quatA", () => { expect(quatA).toBeVec(2, 4, 6, 8); });
        it("should return quatA", () => { expect(result).toBe(quatA); });
      });
    });

    describe("length", () => {
      it("should have an alias called 'len'", () => { expect(Quat.len).toEqual(Quat.length); });

      beforeEach(() => { result = Quat.len(quatA); });

      it("should return the length", () => { expect(result).toBeCloseTo(5.477225); });
    });

    describe("squaredLength", () => {
      it("should have an alias called 'sqrLen'", () => { expect(Quat.sqrLen).toEqual(Quat.squaredLength); });

      beforeEach(() => { result = Quat.squaredLength(quatA); });

      it("should return the squared length", () => { expect(result).toEqual(30); });
    });

    describe("normalize", () => {
      beforeEach(() => { quatA = [5, 0, 0, 0]; });

      describe("with a separate output quaternion", () => {
        beforeEach(() => { result = Quat.normalize(out, quatA); });

        it("should place values into out", () => { expect(out).toBeVec(1, 0, 0, 0); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify quatA", () => { expect(quatA).toBeVec(5, 0, 0, 0); });
      });

      describe("when quatA is the output quaternion", () => {
        beforeEach(() => { result = Quat.normalize(quatA, quatA); });

        it("should place values into quatA", () => { expect(quatA).toBeVec(1, 0, 0, 0); });
        it("should return quatA", () => { expect(result).toBe(quatA); });
      });
    });

    describe("lerp", () => {
      describe("with a separate output quaternion", () => {
        beforeEach(() => { result = Quat.lerp(out, quatA, quatB, 0.5); });

        it("should place values into out", () => { expect(out).toBeVec(3, 4, 5, 6); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify quatA", () => { expect(quatA).toBeVec(1, 2, 3, 4); });
        it("should not modify quatB", () => { expect(quatB).toBeVec(5, 6, 7, 8); });
      });

      describe("when quatA is the output quaternion", () => {
        beforeEach(() => { result = Quat.lerp(quatA, quatA, quatB, 0.5); });

        it("should place values into quatA", () => { expect(quatA).toBeVec(3, 4, 5, 6); });
        it("should return quatA", () => { expect(result).toBe(quatA); });
        it("should not modify quatB", () => { expect(quatB).toBeVec(5, 6, 7, 8); });
      });

      describe("when quatB is the output quaternion", () => {
        beforeEach(() => { result = Quat.lerp(quatB, quatA, quatB, 0.5); });

        it("should place values into quatB", () => { expect(quatB).toBeVec(3, 4, 5, 6); });
        it("should return quatB", () => { expect(result).toBe(quatB); });
        it("should not modify quatA", () => { expect(quatA).toBeVec(1, 2, 3, 4); });
      });
    });

    describe("slerp", () => {
      describe("with a separate output quaternion", () => {
        beforeEach(() => { result = Quat.slerp(out, quatA, quatB, 0.5); });

        it("should place values into out", () => { expect(out).toBeVec(3, 4, 5, 6); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify quatA", () => { expect(quatA).toBeVec(1, 2, 3, 4); });
        it("should not modify quatB", () => { expect(quatB).toBeVec(5, 6, 7, 8); });
      });

      describe("when quatA is the output quaternion", () => {
        beforeEach(() => { result = Quat.slerp(quatA, quatA, quatB, 0.5); });

        it("should place values into quatA", () => { expect(quatA).toBeVec(3, 4, 5, 6); });
        it("should return quatA", () => { expect(result).toBe(quatA); });
        it("should not modify quatB", () => { expect(quatB).toBeVec(5, 6, 7, 8); });
      });

      describe("when quatB is the output quaternion", () => {
        beforeEach(() => { result = Quat.slerp(quatB, quatA, quatB, 0.5); });

        it("should place values into quatB", () => { expect(quatB).toBeVec(3, 4, 5, 6); });
        it("should return quatB", () => { expect(result).toBe(quatB); });
        it("should not modify quatA", () => { expect(quatA).toBeVec(1, 2, 3, 4); });
      });
    });

    /*describe("random", () => {
      beforeEach(() => { result = Quat.random(out); });

      it("should result in a normalized quaternion", () => {
        let copy = Quat.clone(out);
        expect(Quat.normalize(out, out)).toBeVec(copy);
      });
      it("should return out", () => { expect(result).toBe(out); });
    });*/

    describe("invert", () => {
      describe("with a separate output quaternion", () => {
        beforeEach(() => { result = Quat.invert(out, quatA); });

        it("should place values into out", () => { expect(out).toBeVec(-0.033333, -0.066666, -0.1, 0.133333); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify quatA", () => { expect(quatA).toBeVec(1, 2, 3, 4); });
      });

      describe("when quatA is the output quaternion", () => {
        beforeEach(() => { result = Quat.invert(quatA, quatA); });

        it("should place values into quatA", () => { expect(quatA).toBeVec(-0.033333, -0.066666, -0.1, 0.133333); });
        it("should return quatA", () => { expect(result).toBe(quatA); });
      });
    });

    describe("conjugate", () => {
      describe("with a separate output quaternion", () => {
        beforeEach(() => { result = Quat.conjugate(out, quatA); });

        it("should place values into out", () => { expect(out).toBeVec(-1, -2, -3, 4); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify quatA", () => { expect(quatA).toBeVec(1, 2, 3, 4); });
      });

      describe("when quatA is the output quaternion", () => {
        beforeEach(() => { result = Quat.conjugate(quatA, quatA); });

        it("should place values into quatA", () => { expect(quatA).toBeVec(-1, -2, -3, 4); });
        it("should return quatA", () => { expect(result).toBe(quatA); });
      });
    });

    describe("str", () => {
      beforeEach(() => { result = Quat.str(quatA); });

      it("should return a string representation of the quaternion", () => { expect(result).toEqual("Quat(1, 2, 3, 4)"); });
    });

    describe("exactEquals", () => {
      let quatC, r0, r1;
      beforeEach(() => {
        quatA = [0, 1, 2, 3];
        quatB = [0, 1, 2, 3];
        quatC = [1, 2, 3, 4];
        r0 = Quat.exactEquals(quatA, quatB);
        r1 = Quat.exactEquals(quatA, quatC);
      });

      it("should return true for identical quaternions", () => { expect(r0).toBe(true); });
      it("should return false for different quaternions", () => { expect(r1).toBe(false); });
      it("should not modify quatA", () => { expect(quatA).toBeVec(0, 1, 2, 3); });
      it("should not modify quatB", () => { expect(quatB).toBeVec(0, 1, 2, 3); });
    });

    describe("equals", () => {
      let quatC, quatD, r0, r1, r2;
      beforeEach(() => {
        quatA = [0, 1, 2, 3];
        quatB = [0, 1, 2, 3];
        quatC = [1, 2, 3, 4];
        quatD = [1e-16, 1, 2, 3];
        r0 = Quat.equals(quatA, quatB);
        r1 = Quat.equals(quatA, quatC);
        r2 = Quat.equals(quatA, quatD);
      });
      it("should return true for identical quaternions", () => { expect(r0).toBe(true); });
      it("should return false for different quaternions", () => { expect(r1).toBe(false); });
      it("should return true for close but not identical quaternions", () => { expect(r2).toBe(true); });
      it("should not modify quatA", () => { expect(quatA).toBeVec(0, 1, 2, 3); });
      it("should not modify quatB", () => { expect(quatB).toBeVec(0, 1, 2, 3); });
    });
  });
});