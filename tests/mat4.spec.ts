import { expect, describe, it, beforeEach } from 'vitest';
import "./test-utils"
import { Mat4, Mat4Like } from "../src/mat4"
import { Vec3, Vec3Like } from "../src/vec3"
import { Quat } from "../src/quat"

describe("Mat4", () => {
  describe("constructor", () => {
    it("should return an identity Mat4 if called with no arguments", () => {
      expect(new Mat4()).toBeVec(
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1);
    });

    it("should return Mat4(m0, m1, ...m15) if called with (m0, m1, ...m15)", () => {
      expect(new Mat4(
        1, 2, 3, 4,
        5, 6, 7, 8,
        9, 10, 11, 12,
        13, 14, 15, 16)).toBeVec(
        1, 2, 3, 4,
        5, 6, 7, 8,
        9, 10, 11, 12,
        13, 14, 15, 16);
    });

    it("should return Mat4(x, x, x) if called with (x)", () => {
      expect(new Mat4(1)).toBeVec(
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1);
    });

    it("should return Mat4(m0, m1, ...m15) if called with ([m0, m1, ...m15])", () => {
      expect(new Mat4([
        1, 2, 3, 4,
        5, 6, 7, 8,
        9, 10, 11, 12,
        13, 14, 15, 16])).toBeVec(
        1, 2, 3, 4,
        5, 6, 7, 8,
        9, 10, 11, 12,
        13, 14, 15, 16);
    });

    it("should return Mat4(m0, m1, ...m15) if called with (Mat4(m0, m1, ...m15))", () => {
      let v = new Mat4(
        1, 2, 3, 4,
        5, 6, 7, 8,
        9, 10, 11, 12,
        13, 14, 15, 16);
      expect(new Mat4(v)).toBeVec(v);
    });

    it("should return Mat4(m0, m1, ...m15) if called with (Float32Array([m0, m1, ...m15]))", () => {
      let arr = new Float32Array([
        1, 2, 3, 4,
        5, 6, 7, 8,
        9, 10, 11, 12,
        13, 14, 15, 16]);
      expect(new Mat4(arr)).toBeVec(arr);
    });
  });

  describe("static", () => {
    let out, matA, matB, identity, result;

    beforeEach(() => {
      // Attempting to portray a semi-realistic transform matrix
      matA = new Float32Array([1, 0, 0, 0,
                   0, 1, 0, 0,
                   0, 0, 1, 0,
                   1, 2, 3, 1]);

      matB = new Float32Array([1, 0, 0, 0,
                   0, 1, 0, 0,
                   0, 0, 1, 0,
                   4, 5, 6, 1]);

      out = new Float32Array([0, 0, 0, 0,
                  0, 0, 0, 0,
                  0, 0, 0, 0,
                  0, 0, 0, 0]);

      identity = new Float32Array([1, 0, 0, 0,
                     0, 1, 0, 0,
                     0, 0, 1, 0,
                     0, 0, 0, 1]);
    });

    describe("create", () => {
      beforeEach(() => { result = Mat4.create(); });
      it("should return a 16 element array initialized to a 4x4 identity matrix", () => { expect(result).toBeVec(identity); });
    });

    describe("clone", () => {
      beforeEach(() => { result = Mat4.clone(matA); });
      it("should return a 16 element array initialized to the values in matA", () => { expect(result).toBeVec(matA); });
    });

    describe("copy", () => {
      beforeEach(() => { result = Mat4.copy(out, matA); });
      it("should place values into out", () => { expect(out).toBeVec(matA); });
      it("should return out", () => { expect(result).toBe(out); });
    });

    describe("identity", () => {
      beforeEach(() => { result = Mat4.identity(out); });
      it("should place values into out", () => { expect(result).toBeVec(identity); });
      it("should return out", () => { expect(result).toBe(out); });
    });

    describe("transpose", () => {
      describe("with a separate output matrix", () => {
        beforeEach(() => { result = Mat4.transpose(out, matA); });

        it("should place values into out", () => {
          expect(out).toBeVec(
            1, 0, 0, 1,
            0, 1, 0, 2,
            0, 0, 1, 3,
            0, 0, 0, 1
          );
        });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify matA", () => {
          expect(matA).toBeVec(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            1, 2, 3, 1
          );
        });
      });

      describe("when matA is the output matrix", () => {
        beforeEach(() => { result = Mat4.transpose(matA, matA); });

        it("should place values into matA", () => {
          expect(matA).toBeVec(
            1, 0, 0, 1,
            0, 1, 0, 2,
            0, 0, 1, 3,
            0, 0, 0, 1
          );
        });
        it("should return matA", () => { expect(result).toBe(matA); });
      });
    });

    describe("invert", () => {
      describe("with a separate output matrix", () => {
        beforeEach(() => { result = Mat4.invert(out, matA); });

        it("should place values into out", () => {
          expect(out).toBeVec(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            -1, -2, -3, 1
          );
        });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify matA", () => {
          expect(matA).toBeVec(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            1, 2, 3, 1
          );
        });
      });

      describe("when matA is the output matrix", () => {
        beforeEach(() => { result = Mat4.invert(matA, matA); });

        it("should place values into matA", () => {
          expect(matA).toBeVec(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            -1, -2, -3, 1
          );
        });
        it("should return matA", () => { expect(result).toBe(matA); });
      });
    });

    describe("adjoint", () => {
      describe("with a separate output matrix", () => {
        beforeEach(() => { result = Mat4.adjoint(out, matA); });

        it("should place values into out", () => {
          expect(out).toBeVec(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            -1, -2, -3, 1
          );
        });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify matA", () => {
          expect(matA).toBeVec(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            1, 2, 3, 1
          );
        });
      });

      describe("when matA is the output matrix", () => {
        beforeEach(() => { result = Mat4.adjoint(matA, matA); });

        it("should place values into matA", () => {
          expect(matA).toBeVec(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            -1, -2, -3, 1
          );
        });
        it("should return matA", () => { expect(result).toBe(matA); });
      });
    });

    describe("determinant", () => {
      beforeEach(() => { result = Mat4.determinant(matA); });

      it("should return the determinant", () => { expect(result).toEqual(1); });
    });

    describe("multiply", () => {
      it("should have an alias called 'mul'", () => { expect(Mat4.mul).toEqual(Mat4.multiply); });

      describe("with a separate output matrix", () => {
        beforeEach(() => { result = Mat4.multiply(out, matA, matB); });

        it("should place values into out", () => {
          expect(out).toBeVec(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            5, 7, 9, 1
          );
        });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify matA", () => {
          expect(matA).toBeVec(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            1, 2, 3, 1
          );
        });
        it("should not modify matB", () => {
          expect(matB).toBeVec(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            4, 5, 6, 1
          );
        });
      });

      describe("when matA is the output matrix", () => {
        beforeEach(() => { result = Mat4.multiply(matA, matA, matB); });

        it("should place values into matA", () => {
          expect(matA).toBeVec(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            5, 7, 9, 1
          );
        });
        it("should return matA", () => { expect(result).toBe(matA); });
        it("should not modify matB", () => {
          expect(matB).toBeVec(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            4, 5, 6, 1
          );
        });
      });

      describe("when matB is the output matrix", () => {
        beforeEach(() => { result = Mat4.multiply(matB, matA, matB); });

        it("should place values into matB", () => {
          expect(matB).toBeVec(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            5, 7, 9, 1
          );
        });
        it("should return matB", () => { expect(result).toBe(matB); });
        it("should not modify matA", () => {
          expect(matA).toBeVec(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            1, 2, 3, 1
          );
        });
      });
    });

    describe("translate", () => {
      describe("with a separate output matrix", () => {
        beforeEach(() => { result = Mat4.translate(out, matA, [4, 5, 6]); });

        it("should place values into out", () => {
          expect(out).toBeVec(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            5, 7, 9, 1
          );
        });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify matA", () => {
          expect(matA).toBeVec(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            1, 2, 3, 1
          );
        });
      });

      describe("when matA is the output matrix", () => {
        beforeEach(() => { result = Mat4.translate(matA, matA, [4, 5, 6]); });

        it("should place values into matA", () => {
          expect(matA).toBeVec(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            5, 7, 9, 1
          );
        });
        it("should return matA", () => { expect(result).toBe(matA); });
      });
    });

    describe("scale", () => {
      describe("with a separate output matrix", () => {
        beforeEach(() => { result = Mat4.scale(out, matA, [4, 5, 6]); });

        it("should place values into out", () => {
          expect(out).toBeVec(
            4, 0, 0, 0,
            0, 5, 0, 0,
            0, 0, 6, 0,
            1, 2, 3, 1
          );
        });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify matA", () => {
          expect(matA).toBeVec(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            1, 2, 3, 1
          );
        });
      });

      describe("when matA is the output matrix", () => {
        beforeEach(() => { result = Mat4.scale(matA, matA, [4, 5, 6]); });

        it("should place values into matA", () => {
          expect(matA).toBeVec(
            4, 0, 0, 0,
            0, 5, 0, 0,
            0, 0, 6, 0,
            1, 2, 3, 1
          );
        });
        it("should return matA", () => { expect(result).toBe(matA); });
      });
    });

    describe("rotate", () => {
      let rad = Math.PI * 0.5;
      let axis: Vec3Like = [1, 0, 0];

      describe("with a separate output matrix", () => {
        beforeEach(() => { result = Mat4.rotate(out, matA, rad, axis); });

        it("should place values into out", () => {
          expect(out).toBeVec(
            1, 0, 0, 0,
            0, Math.cos(rad), Math.sin(rad), 0,
            0, -Math.sin(rad), Math.cos(rad), 0,
            1, 2, 3, 1
          );
        });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify matA", () => {
          expect(matA).toBeVec(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            1, 2, 3, 1
          );
        });
      });

      describe("when matA is the output matrix", () => {
        beforeEach(() => { result = Mat4.rotate(matA, matA, rad, axis); });

        it("should place values into matA", () => {
          expect(matA).toBeVec(
            1, 0, 0, 0,
            0, Math.cos(rad), Math.sin(rad), 0,
            0, -Math.sin(rad), Math.cos(rad), 0,
            1, 2, 3, 1
          );
        });
        it("should return matA", () => { expect(result).toBe(matA); });
      });
    });

    describe("rotateX", () => {
      let rad = Math.PI * 0.5;

      describe("with a separate output matrix", () => {
        beforeEach(() => { result = Mat4.rotateX(out, matA, rad); });

        it("should place values into out", () => {
          expect(out).toBeVec(
            1, 0, 0, 0,
            0, Math.cos(rad), Math.sin(rad), 0,
            0, -Math.sin(rad), Math.cos(rad), 0,
            1, 2, 3, 1
          );
        });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify matA", () => {
          expect(matA).toBeVec(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            1, 2, 3, 1
          );
        });
      });

      describe("when matA is the output matrix", () => {
        beforeEach(() => { result = Mat4.rotateX(matA, matA, rad); });

        it("should place values into matA", () => {
          expect(matA).toBeVec(
            1, 0, 0, 0,
            0, Math.cos(rad), Math.sin(rad), 0,
            0, -Math.sin(rad), Math.cos(rad), 0,
            1, 2, 3, 1
          );
        });
        it("should return matA", () => { expect(result).toBe(matA); });
      });
    });

    describe("rotateY", () => {
      let rad = Math.PI * 0.5;

      describe("with a separate output matrix", () => {
        beforeEach(() => { result = Mat4.rotateY(out, matA, rad); });

        it("should place values into out", () => {
          expect(out).toBeVec(
            Math.cos(rad), 0, -Math.sin(rad), 0,
            0, 1, 0, 0,
            Math.sin(rad), 0, Math.cos(rad), 0,
            1, 2, 3, 1
          );
        });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify matA", () => {
          expect(matA).toBeVec(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            1, 2, 3, 1
          );
        });
      });

      describe("when matA is the output matrix", () => {
        beforeEach(() => { result = Mat4.rotateY(matA, matA, rad); });

        it("should place values into matA", () => {
          expect(matA).toBeVec(
            Math.cos(rad), 0, -Math.sin(rad), 0,
            0, 1, 0, 0,
            Math.sin(rad), 0, Math.cos(rad), 0,
            1, 2, 3, 1
          );
        });
        it("should return matA", () => { expect(result).toBe(matA); });
      });
    });

    describe("rotateZ", () => {
      let rad = Math.PI * 0.5;

      describe("with a separate output matrix", () => {
        beforeEach(() => { result = Mat4.rotateZ(out, matA, rad); });

        it("should place values into out", () => {
          expect(out).toBeVec(
            Math.cos(rad), Math.sin(rad), 0, 0,
            -Math.sin(rad), Math.cos(rad), 0, 0,
            0, 0, 1, 0,
            1, 2, 3, 1
          );
        });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify matA", () => {
          expect(matA).toBeVec(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            1, 2, 3, 1
          );
        });
      });

      describe("when matA is the output matrix", () => {
        beforeEach(() => { result = Mat4.rotateZ(matA, matA, rad); });

        it("should place values into matA", () => {
          expect(matA).toBeVec(
            Math.cos(rad), Math.sin(rad), 0, 0,
            -Math.sin(rad), Math.cos(rad), 0, 0,
            0, 0, 1, 0,
            1, 2, 3, 1
          );
        });
        it("should return matA", () => { expect(result).toBe(matA); });
      });
    });

    // TODO: fromRotationTranslation

    describe("getTranslation", () => {
      describe("from the identity matrix", () => {
        beforeEach(() => {
          result = Vec3.fromValues(1, 2, 3);
          out = Vec3.fromValues(1, 2, 3);
          result = Mat4.getTranslation(out, identity);
        });
        it("should place result both in result and out", () => { expect(result).toBe(out); });
        it("should return the zero vector", () => { expect(result).toBeVec(0, 0, 0); });
      });

      describe("from a translation-only matrix", () => {
        beforeEach(() => {
          result = new Vec3(1, 2, 3);
          out = new Vec3(1, 2, 3);
          result = Mat4.getTranslation(out, matB);
        });
        it("should return translation vector", () => { expect(out).toBeVec(4, 5, 6); });
      });

      describe("from a translation and rotation matrix", () => {
        beforeEach(() => {
          let q = new Quat();
          let v = new Vec3(5, 6, 7);
          Quat.setAxisAngle(q, [0.26726124, 0.534522474, 0.8017837], 0.55);
          Mat4.fromRotationTranslation(out, q, v);

          result = new Vec3();
          Mat4.getTranslation(result, out);
        });
        it("should keep the same translation vector, regardless of rotation", () => {
          expect(result).toBeVec(5, 6, 7);
        });
      });
    });

    describe("getScaling", () => {
      describe("from the identity matrix", () => {
        beforeEach(() => {
          result = new Vec3(1, 2, 3);
          out = new Vec3(1, 2, 3);
          result = Mat4.getScaling(out, identity);
        });
        it("should place result both in result and out", () => { expect(result).toBe(out); });
        it("should return the identity vector", () => { expect(result).toBeVec(1, 1, 1); });
      });

      describe("from a scale-only matrix", () => {
        beforeEach(() => {
          let v = new Vec3(4, 5, 6);
          result = new Vec3(1, 2, 3)
          out = new Vec3(1, 2, 3);
          Mat4.fromScaling(matA, v);
          result = Mat4.getScaling(out, matA);
        });
        it("should return translation vector", () => { expect(out).toBeVec(4, 5, 6); });
      });

      describe("from a translation and rotation matrix", () => {
        beforeEach(() => {
          let q = Quat.create();
          let v = Vec3.fromValues(5, 6, 7);
          q = Quat.setAxisAngle(q, [1, 0, 0], 0.5);
          Mat4.fromRotationTranslation(out, q, v);

          result = Vec3.fromValues(1, 2, 3);
          Mat4.getScaling(result, out);
        })
        it("should return the identity vector", () => { expect(result).toBeVec(1, 1, 1); });
      });

      describe("from a translation, rotation and scale matrix", () => {
        beforeEach(() => {
          let q = Quat.create();
          let t = Vec3.fromValues(1, 2, 3);
          let s = Vec3.fromValues(5, 6, 7);
          q = Quat.setAxisAngle(q, [0, 1, 0], 0.7);
          Mat4.fromRotationTranslationScale(out, q, t, s);
          result = Vec3.fromValues(5, 6, 7);
          Mat4.getScaling(result, out);
        })
        it("should return the same scaling factor when created", () => { expect(result).toBeVec(5, 6, 7); });
      });

    });

    describe("getRotation", () => {
      describe("from the identity matrix", () => {
        beforeEach(() => {
          result = Quat.fromValues(1, 2, 3, 4);
          out = Quat.fromValues(1, 2, 3, 4);
          result = Mat4.getRotation(out, identity);
        });
        it("should place result both in result and out", () => { expect(result).toBe(out); });
        it("should return the unit quaternion", () => {
          let unitQuat = Quat.create();
          Quat.identity(unitQuat);
          expect(result).toBeVec(unitQuat);
        });
      });

      describe("from a translation-only matrix", () => {
        beforeEach(() => {
          result = Quat.fromValues(1, 2, 3, 4);
          out = Quat.fromValues(1, 2, 3, 4);
          result = Mat4.getRotation(out, matB);
        });
        it("should return the unit quaternion", () => {
          let unitQuat = Quat.create();
          Quat.identity(unitQuat);
          expect(result).toBeVec(unitQuat);
        });
      });

      describe("from a translation and rotation matrix", () => {
        it("should keep the same rotation as when created", () => {
          let q = Quat.create();
          let outVec = Vec3.fromValues(5, 6, 7);
          let testVec = Vec3.fromValues(1, 5, 2);
          let ang = 0.78972;

          Vec3.normalize(testVec, testVec);
          q = Quat.setAxisAngle(q, testVec, ang);
          Mat4.fromRotationTranslation(out, q, outVec);

          result = Quat.fromValues(2, 3, 4, 6);
          Mat4.getRotation(result, out);
          let outaxis = Vec3.create();
          let outangle = Quat.getAxisAngle(outaxis, result);

          expect(outaxis).toBeVec(testVec);
          expect(outangle).toBeCloseTo(ang);
        });
      });
    });

    describe("frustum", () => {
      beforeEach(() => { result = Mat4.frustum(out, -1, 1, -1, 1, -1, 1); });
      it("should place values into out", () => { expect(result).toBeVec(
          -1, 0, 0, 0,
          0, -1, 0, 0,
          0, 0, 0, -1,
          0, 0, 1, 0
        );
      });
      it("should return out", () => { expect(result).toBe(out); });
    });

    describe("perspective", () => {
      let fovy = Math.PI * 0.5;
      beforeEach(() => { result = Mat4.perspective(out, fovy, 1, 0, 1); });
      it("should place values into out", () => { expect(result).toBeVec(
          1, 0, 0, 0,
          0, 1, 0, 0,
          0, 0, -1, -1,
          0, 0, 0, 0
        );
      });
      it("should return out", () => { expect(result).toBe(out); });

      describe("with nonzero near, 45deg fovy, and realistic aspect ratio", () => {
        beforeEach(() => { result = Mat4.perspective(out, 45 * Math.PI / 180.0, 640/480, 0.1, 200); });
        it("should calculate correct matrix", () => { expect(result).toBeVec(
          1.81066, 0, 0, 0,
          0, 2.414213, 0, 0,
          0, 0, -1.001, -1,
          0, 0, -0.2001, 0
        ); });
      });

      describe("with no far plane, 45deg fovy, and realistic aspect ratio", () => {
        beforeEach(() => { result = Mat4.perspective(out, 45 * Math.PI / 180.0, 640/480, 0.1); });
        it("should calculate correct matrix", () => { expect(result).toBeVec(
          1.81066, 0, 0, 0,
          0, 2.414213, 0, 0,
          0, 0, -1, -1,
          0, 0, -0.2, 0
        ); });
      });

      describe("with infinite far plane, 45deg fovy, and realistic aspect ratio", () => {
        beforeEach(() => { result = Mat4.perspective(out, 45 * Math.PI / 180.0, 640/480, 0.1, Infinity); });
        it("should calculate correct matrix", () => { expect(result).toBeVec(
          1.81066, 0, 0, 0,
          0, 2.414213, 0, 0,
          0, 0, -1, -1,
          0, 0, -0.2, 0
        ); });
      });
    });

    describe("ortho", () => {
      beforeEach(() => { result = Mat4.ortho(out, -1, 1, -1, 1, -1, 1); });
      it("should place values into out", () => { expect(result).toBeVec(
          1, 0, 0, 0,
          0, 1, 0, 0,
          0, 0, -1, 0,
          0, 0, 0, 1
        );
      });
      it("should return out", () => { expect(result).toBe(out); });
    });

    describe("lookAt", () => {
      let eye    = new Float32Array([0, 0, 1]);
      let center = new Float32Array([0, 0, -1]);
      let up     = new Float32Array([0, 1, 0]);
      let view, right;

      describe("looking down", () => {
        beforeEach(() => {
          view = new Float32Array([0, -1,  0]);
          up   = new Float32Array([0,  0, -1]);
          right= new Float32Array([1,  0,  0]);
          result = Mat4.lookAt(out, [0, 0, 0], view, up);
        });

        it("should transform view into local -Z", () => {
          result = Vec3.transformMat4(new Float32Array(3), view, out);
          expect(result).toBeVec(0, 0, -1);
        });

        it("should transform up into local +Y", () => {
          result = Vec3.transformMat4(new Float32Array(3), up, out);
          expect(result).toBeVec(0, 1, 0);
        });

        it("should transform right into local +X", () => {
          result = Vec3.transformMat4(new Float32Array(3), right, out);
          expect(result).toBeVec(1, 0, 0);
        });

        it("should return out", () => { expect(result).toBe(out); });
      });

      describe("#74", () => {
        beforeEach(() => {
          Mat4.lookAt(out,
            new Float32Array([0,2,0]),
            new Float32Array([0,0.6,0]),
            new Float32Array([0,0,-1]));
        });

        it("should transform a point 'above' into local +Y", () => {
          result = Vec3.transformMat4(new Float32Array(3), [0, 2, -1], out);
          expect(result).toBeVec(0, 1, 0);
        });

        it("should transform a point 'right of' into local +X", () => {
          result = Vec3.transformMat4(new Float32Array(3), [1, 2, 0], out);
          expect(result).toBeVec(1, 0, 0);
        });

        it("should transform a point 'in front of' into local -Z", () => {
          result = Vec3.transformMat4(new Float32Array(3), [0, 1, 0], out);
          expect(result).toBeVec(0, 0, -1);
        });
      });

      beforeEach(() => {
        eye    = new Float32Array([0, 0, 1]);
        center = new Float32Array([0, 0, -1]);
        up     = new Float32Array([0, 1, 0]);
        result = Mat4.lookAt(out, eye, center, up);
      });
      it("should place values into out", () => { expect(result).toBeVec(
          1, 0, 0, 0,
          0, 1, 0, 0,
          0, 0, 1, 0,
          0, 0, -1, 1
        );
      });
      it("should return out", () => { expect(result).toBe(out); });
    });

    describe("targetTo", () => {
      var eye    = new Float32Array([0, 0, 1]);
      var center = new Float32Array([0, 0, -1]);
      var up     = new Float32Array([0, 1, 0]);
      var view, up, right;

      describe("looking down", () => {
        beforeEach(() => {
          view = new Float32Array([0, -1,  0]);
          up   = new Float32Array([0,  0, -1]);
          right= new Float32Array([1,  0,  0]);
          result = Mat4.targetTo(out, [0, 0, 0], view, up);
        });

        it("should transform view into local Z", () => {
          result = Vec3.transformMat4(new Float32Array(3), view, out);
          expect(result).toBeVec(0, 0, 1);
        });

        it("should transform up into local -Y", () => {
          result = Vec3.transformMat4(new Float32Array(3), up, out);
          expect(result).toBeVec(0, -1, 0);
        });

        it("should transform right into local +X", () => {
          result = Vec3.transformMat4(new Float32Array(3), right, out);
          expect(result).toBeVec(1, 0, 0);
        });

        it("should return out", () => { expect(result).toBe(out); });

        it("scaling should be [1, 1, 1]", () => {
          var scaling = Mat4.getScaling(new Float32Array(3), out);
          expect(scaling).toBeVec(1, 1, 1);
        });
      });

      describe("#74", () => {
        beforeEach(() => {
          Mat4.targetTo(out,
            new Float32Array([0,2,0]),
            new Float32Array([0,0.6,0]),
            new Float32Array([0,0,-1]));
        });

        it("should transform a point 'above' into local +Y", () => {
          result = Vec3.transformMat4(new Float32Array(3), [0, 2, -1], out);
          expect(result).toBeVec(0, 1, -2);
        });

        it("should transform a point 'right of' into local +X", () => {
          result = Vec3.transformMat4(new Float32Array(3), [1, 2, 0], out);
          expect(result).toBeVec(1, 2, -2);
        });

        it("should transform a point 'in front of' into local -Z", () => {
          result = Vec3.transformMat4(new Float32Array(3), [0, 1, 0], out);
          expect(result).toBeVec(0, 2, -1);
        });

        it("scaling should be [1, 1, 1]", () => {
          var scaling = Mat4.getScaling(new Float32Array(3), out);
          expect(scaling).toBeVec(1, 1, 1);
        });
      });

      describe("scaling test", () => {
        beforeEach(() => {
          Mat4.targetTo(out,
            new Float32Array([0,1,0]),
            new Float32Array([0,0,1]),
            new Float32Array([0,0,-1]));
        });

        it("scaling should be [1, 1, 1]", () => {
          var scaling = Mat4.getScaling(new Float32Array(3), out);
          expect(scaling).toBeVec(1, 1, 1);
        });
      });

      beforeEach(() => {
        eye    = new Float32Array([0, 0, 1]);
        center = new Float32Array([0, 0, -1]);
        up     = new Float32Array([0, 1, 0]);
        result = Mat4.targetTo(out, eye, center, up);
      });
      it("should place values into out", () => { expect(result).toBeVec(
          1, 0, 0, 0,
          0, 1, 0, 0,
          0, 0, 1, 0,
          0, 0, 1, 1
        );
      });
      it("should return out", () => { expect(result).toBe(out); });
      it("scaling should be [1, 1, 1]", () => {
        var scaling = Mat4.getScaling(new Float32Array(3), out);
        expect(scaling).toBeVec(1, 1, 1);
      });
    });

    describe("str", () => {
      beforeEach(() => { result = Mat4.str(matA); });

      it("should return a string representation of the matrix", () => { expect(result).toEqual("Mat4(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 2, 3, 1)"); });
    });

     describe("frob", () => {
      beforeEach(() => { result = Mat4.frob(matA); });
      it("should return the Frobenius Norm of the matrix", () => { expect(result).toBeCloseTo( Math.sqrt(Math.pow(1, 2) + Math.pow(1, 2) + Math.pow(1, 2) + Math.pow(1, 2) + Math.pow(1, 2) + Math.pow(2, 2) + Math.pow(3, 2) )); });
     });

    describe("add", () => {
      beforeEach(() => {
        matA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        matB = [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
      });
      describe("with a separate output matrix", () => {
        beforeEach(() => {
          result = Mat4.add(out, matA, matB);
        });

        it("should place values into out", () => { expect(out).toBeVec(18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify matA", () => { expect(matA).toBeVec(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16); });
        it("should not modify matB", () => { expect(matB).toBeVec(17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32); });
      });

      describe("when matA is the output matrix", () => {
        beforeEach(() => { result = Mat4.add(matA, matA, matB); });

        it("should place values into matA", () => { expect(matA).toBeVec(18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48); });
        it("should return matA", () => { expect(result).toBe(matA); });
        it("should not modify matB", () => { expect(matB).toBeVec(17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32); });
      });

      describe("when matB is the output matrix", () => {
        beforeEach(() => { result = Mat4.add(matB, matA, matB); });

        it("should place values into matB", () => { expect(matB).toBeVec(18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48); });
        it("should return matB", () => { expect(result).toBe(matB); });
        it("should not modify matA", () => { expect(matA).toBeVec(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16); });
      });
    });

    describe("subtract", () => {
      beforeEach(() => {
        matA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        matB = [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
      });
      it("should have an alias called 'sub'", () => { expect(Mat4.sub).toEqual(Mat4.subtract); });

      describe("with a separate output matrix", () => {
        beforeEach(() => { result = Mat4.subtract(out, matA, matB); });

        it("should place values into out", () => { expect(out).toBeVec(-16, -16, -16, -16, -16, -16, -16, -16, -16, -16, -16, -16, -16, -16, -16, -16); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify matA", () => { expect(matA).toBeVec(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16); });
        it("should not modify matB", () => { expect(matB).toBeVec(17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32); });
      });

      describe("when matA is the output matrix", () => {
        beforeEach(() => { result = Mat4.subtract(matA, matA, matB); });

        it("should place values into matA", () => { expect(matA).toBeVec(-16, -16, -16, -16, -16, -16, -16, -16, -16, -16, -16, -16, -16, -16, -16, -16); });
        it("should return matA", () => { expect(result).toBe(matA); });
        it("should not modify matB", () => { expect(matB).toBeVec(17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32); });
      });

      describe("when matB is the output matrix", () => {
        beforeEach(() => { result = Mat4.subtract(matB, matA, matB); });

        it("should place values into matB", () => { expect(matB).toBeVec(-16, -16, -16, -16, -16, -16, -16, -16, -16, -16, -16, -16, -16, -16, -16, -16); });
        it("should return matB", () => { expect(result).toBe(matB); });
        it("should not modify matA", () => { expect(matA).toBeVec(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16); });
      });
    });

    describe("fromValues", () => {
      beforeEach(() => { result = Mat4.fromValues(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16); });
      it("should return a 16 element array initialized to the values passed", () => { expect(result).toBeVec(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16); });
    });

    describe("set", () => {
      beforeEach(() => { result = Mat4.set(out, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16); });
      it("should place values into out", () => { expect(out).toBeVec(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16); });
      it("should return out", () => { expect(result).toBe(out); });
    });

    describe("multiplyScalar", () => {
      beforeEach(() => {
        matA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
      });
      describe("with a separate output matrix", () => {
        beforeEach(() => { result = Mat4.multiplyScalar(out, matA, 2); });

        it("should place values into out", () => { expect(out).toBeVec(2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify matA", () => { expect(matA).toBeVec(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16); });
      });

      describe("when matA is the output matrix", () => {
        beforeEach(() => { result = Mat4.multiplyScalar(matA, matA, 2); });

        it("should place values into matA", () => { expect(matA).toBeVec(2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32); });
        it("should return matA", () => { expect(result).toBe(matA); });
      });
    });

    describe("multiplyScalarAndAdd", () => {
      beforeEach(() => {
        matA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        matB = [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
      });
      describe("with a separate output matrix", () => {
        beforeEach(() => { result = Mat4.multiplyScalarAndAdd(out, matA, matB, 0.5); });

        it("should place values into out", () => { expect(out).toBeVec(9.5, 11, 12.5, 14, 15.5, 17, 18.5, 20, 21.5, 23, 24.5, 26, 27.5, 29, 30.5, 32); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify matA", () => { expect(matA).toBeVec(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16); });
        it("should not modify matB", () => { expect(matB).toBeVec(17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32); });
      });

      describe("when matA is the output matrix", () => {
        beforeEach(() => { result = Mat4.multiplyScalarAndAdd(matA, matA, matB, 0.5); });

        it("should place values into matA", () => { expect(matA).toBeVec(9.5, 11, 12.5, 14, 15.5, 17, 18.5, 20, 21.5, 23, 24.5, 26, 27.5, 29, 30.5, 32); });
        it("should return matA", () => { expect(result).toBe(matA); });
        it("should not modify matB", () => { expect(matB).toBeVec(17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32); });
      });

      describe("when matB is the output matrix", () => {
        beforeEach(() => { result = Mat4.multiplyScalarAndAdd(matB, matA, matB, 0.5); });

        it("should place values into matB", () => { expect(matB).toBeVec(9.5, 11, 12.5, 14, 15.5, 17, 18.5, 20, 21.5, 23, 24.5, 26, 27.5, 29, 30.5, 32); });
        it("should return matB", () => { expect(result).toBe(matB); });
        it("should not modify matA", () => { expect(matA).toBeVec(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16); });
      });
    });

    describe("exactEquals", () => {
      let matC, r0, r1;
      beforeEach(() => {
        matA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        matB = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        matC = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        r0 = Mat4.exactEquals(matA, matB);
        r1 = Mat4.exactEquals(matA, matC);
      });

      it("should return true for identical matrices", () => { expect(r0).toBe(true); });
      it("should return false for different matrices", () => { expect(r1).toBe(false); });
      it("should not modify matA", () => { expect(matA).toBeVec(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15); });
      it("should not modify matB", () => { expect(matB).toBeVec(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15); });
    });

    describe("equals", () => {
      let matC, matD, r0, r1, r2;
      beforeEach(() => {
        matA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        matB = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        matC = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        matD = [1e-16, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        r0 = Mat4.equals(matA, matB);
        r1 = Mat4.equals(matA, matC);
        r2 = Mat4.equals(matA, matD);
      });
      it("should return true for identical matrices", () => { expect(r0).toBe(true); });
      it("should return false for different matrices", () => { expect(r1).toBe(false); });
      it("should return true for close but not identical matrices", () => { expect(r2).toBe(true); });
      it("should not modify matA", () => { expect(matA).toBeVec(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15); });
      it("should not modify matB", () => { expect(matB).toBeVec(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15); });
    });
  });
});