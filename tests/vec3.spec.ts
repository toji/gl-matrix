import { expect, describe, it, beforeEach } from 'vitest';
import { Vec3, Vec3Like } from "../src/vec3"
import { Mat4, Mat4Like } from "../src/mat4"
import "./test-utils"

describe("Vec3", () => {
  describe("constructor", () => {
    it("should return Vec3(0, 0, 0) if called with no arguments", () => {
      expect(new Vec3()).toBeVec(0, 0, 0);
    });

    it("should return Vec3(x, y, z) if called with (x, y, z)", () => {
      expect(new Vec3(1, 2, 3)).toBeVec(1, 2, 3);
      expect(new Vec3(-3, 4.4, -5.6)).toBeVec(-3, 4.4, -5.6);
    });

    it("should return Vec3(x, x, x) if called with (x)", () => {
      expect(new Vec3(1)).toBeVec(1, 1, 1);
      expect(new Vec3(-2.3)).toBeVec(-2.3, -2.3, -2.3);
    });

    it("should return Vec3(x, y, z) if called with ([x, y, z])", () => {
      expect(new Vec3([1, 2, 3])).toBeVec(1, 2, 3);
      expect(new Vec3([-3, 4.4, -5.6])).toBeVec(-3, 4.4, -5.6);
    });

    it("should return Vec3(x, y, z) if called with (Vec3(x, y, z))", () => {
      let v = new Vec3(3.4, 5.6, 7.8);
      expect(new Vec3(v)).toBeVec(v);
    });

    it("should return Vec3(x, y, z) if called with (Float32Array([x, y, z]))", () => {
      let arr = new Float32Array([1.2, 3.4, 5.6]);
      expect(new Vec3(arr)).toBeVec(arr);
    });
  });

  describe("static", () => {
    let out: Vec3Like;
    let vecA: Vec3Like;
    let vecB: Vec3Like;
    let result: Vec3Like;

    beforeEach(() => {
      vecA = new Vec3(1, 2, 3);
      vecB = new Vec3(4, 5, 6);
      out = new Vec3(0, 0, 0);
    });

    describe('rotateX', () => {
      describe('rotation around world origin [0, 0, 0]', () => {
        beforeEach(() => { vecA = [0, 1, 0]; vecB = [0, 0, 0]; result = Vec3.rotateX(out, vecA, vecB, Math.PI); });
        it("should return the rotated vector", () => { expect(result).toBeVec(0, -1, 0); });
      });
      describe('rotation around an arbitrary origin', () => {
        beforeEach(() => { vecA = [2, 7, 0]; vecB = [2, 5, 0]; result = Vec3.rotateX(out, vecA, vecB, Math.PI); });
        it("should return the rotated vector", () => { expect(result).toBeVec(2, 3, 0); });
      });
    });

    describe('rotateY', () => {
      describe('rotation around world origin [0, 0, 0]', () => {
        beforeEach(() => { vecA = [1, 0, 0]; vecB = [0, 0, 0]; result = Vec3.rotateY(out, vecA, vecB, Math.PI); });
        it("should return the rotated vector", () => { expect(result).toBeVec(-1, 0, 0); });
      });
      describe('rotation around an arbitrary origin', () => {
        beforeEach(() => { vecA = [-2, 3, 10]; vecB = [-4, 3, 10]; result = Vec3.rotateY(out, vecA, vecB, Math.PI); });
        it("should return the rotated vector", () => { expect(result).toBeVec(-6, 3, 10); });
      });
    });

    describe('rotateZ', () => {
      describe('rotation around world origin [0, 0, 0]', () => {
        beforeEach(() => { vecA = [0, 1, 0]; vecB = [0, 0, 0]; result = Vec3.rotateZ(out, vecA, vecB, Math.PI); });
        it("should return the rotated vector", () => { expect(result).toBeVec(0, -1, 0); });
      });
      describe('rotation around an arbitrary origin', () => {
        beforeEach(() => { vecA = [0, 6, -5]; vecB = [0, 0, -5]; result = Vec3.rotateZ(out, vecA, vecB, Math.PI); });
        it("should return the rotated vector", () => { expect(result).toBeVec(0, -6, -5); });
      });
    });

    describe('transformMat4', () => {
      let matr : Mat4Like;
      describe("with an identity", () => {
        beforeEach(() => { matr = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ] });

        beforeEach(() => { result = Vec3.transformMat4(out, vecA, matr); });

        it("should produce the input", () => {
          expect(out).toBeVec(1, 2, 3);
        });

        it("should return out", () => { expect(result).toBe(out); });
      });

      describe("with a lookAt", () => {
        beforeEach(() => { matr = Mat4.lookAt(new Mat4(), [5, 6, 7], [2, 6, 7], [0, 1, 0]); });

        beforeEach(() => { result = Vec3.transformMat4(out, vecA, matr); });

        it("should rotate and translate the input", () => {
          expect(out).toBeVec( 4, -4, -4 );
        });

        it("should return out", () => { expect(result).toBe(out); });
      });

      describe("with a perspective matrix (#92)", () => {
        it("should transform a point from perspective(pi/2, 4/3, 1, 100)", () => {
          matr = [0.750, 0, 0, 0,
              0, 1, 0, 0,
              0, 0, -1.02, -1,
              0, 0, -2.02, 0];
          result = Vec3.transformMat4([0, 0, 0], [10, 20, 30], matr);
          expect(result).toBeVec(-0.25, -0.666666, 1.087333);
        });
      });

    });

    /*describe('transformMat3', () => {
      let matr;
      describe("with an identity", () => {
        beforeEach(() => { matr = [1, 0, 0, 0, 1, 0, 0, 0, 1 ] });

        beforeEach(() => { result = Vec3.transformMat3(out, vecA, matr); });

        it("should produce the input", () => {
          expect(out).toBeVec(1, 2, 3);
        });

        it("should return out", () => { expect(result).toBe(out); });
      });

      describe("with 90deg about X", () => {
        beforeEach(() => {
          result = Vec3.transformMat3(out, [0,1,0], [1,0,0,0,0,1,0,-1,0]);
        });

        it("should produce correct output", () => {
          expect(out).toBeVec(0,0,1);
        });
      });

      describe("with 90deg about Y", () => {
        beforeEach(() => {
          result = Vec3.transformMat3(out, [1,0,0], [0,0,-1,0,1,0,1,0,0]);
        });

        it("should produce correct output", () => {
          expect(out).toBeVec(0,0,-1);
        });
      });

      describe("with 90deg about Z", () => {
        beforeEach(() => {
          result = Vec3.transformMat3(out, [1,0,0], [0,1,0,-1,0,0,0,0,1]);
        });

        it("should produce correct output", () => {
          expect(out).toBeVec(0,1,0);
        });
      });

      describe("with a lookAt normal matrix", () => {
        beforeEach(() => {
          matr = mat4.lookAt(mat4.create(), [5, 6, 7], [2, 6, 7], [0, 1, 0]);
          let n = mat3.create();
          matr = mat3.transpose(n, mat3.invert(n, mat3.fromMat4(n, matr)));
        });

        beforeEach(() => { result = Vec3.transformMat3(out, [1,0,0], matr); });

        it("should rotate the input", () => {
          expect(out).toBeVec( 0,0,1 );
        });

        it("should return out", () => { expect(result).toBe(out); });
      });
    });*/

    describe("transformQuat", () => {
      beforeEach(() => { result = Vec3.transformQuat(out, vecA, [0.18257418567011074, 0.3651483713402215, 0.5477225570103322, 0.730296742680443]); });
      it("should rotate the input vector", () => {  expect(out).toBeVec(1, 2, 3); });
      it("should return out", () => { expect(result).not.toBe([1,2,3,4]); });
    });

    describe("create", () => {
      beforeEach(() => { result = Vec3.create(); });
      it("should return a 3 element array initialized to 0s", () => { expect(result).toBeVec(0, 0, 0); });
    });

    describe("clone", () => {
      beforeEach(() => { result = Vec3.clone(vecA); });
      it("should return a 3 element array initialized to the values in vecA", () => { expect(result).toBeVec(vecA); });
    });

    describe("fromValues", () => {
      beforeEach(() => { result = Vec3.fromValues(1, 2, 3); });
      it("should return a 3 element array initialized to the values passed", () => { expect(result).toBeVec(1, 2, 3); });
    });

    describe("copy", () => {
      beforeEach(() => { result = Vec3.copy(out, vecA); });
      it("should place values into out", () => { expect(out).toBeVec(1, 2, 3); });
      it("should return out", () => { expect(result).toBe(out); });
    });

    describe("set", () => {
      beforeEach(() => { result = Vec3.set(out, 1, 2, 3); });
      it("should place values into out", () => { expect(out).toBeVec(1, 2, 3); });
      it("should return out", () => { expect(result).toBe(out); });
    });

    describe("add", () => {
      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec3.add(out, vecA, vecB); });

        it("should place values into out", () => { expect(out).toBeVec(5, 7, 9); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2, 3); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(4, 5, 6); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec3.add(vecA, vecA, vecB); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(5, 7, 9); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(4, 5, 6); });
      });

      describe("when vecB is the output vector", () => {
        beforeEach(() => { result = Vec3.add(vecB, vecA, vecB); });

        it("should place values into vecB", () => { expect(vecB).toBeVec(5, 7, 9); });
        it("should return vecB", () => { expect(result).toBe(vecB); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2, 3); });
      });
    });

    describe("subtract", () => {
      it("should have an alias called 'sub'", () => { expect(Vec3.sub).toEqual(Vec3.subtract); });

      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec3.subtract(out, vecA, vecB); });

        it("should place values into out", () => { expect(out).toBeVec(-3, -3, -3); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2, 3); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(4, 5, 6); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec3.subtract(vecA, vecA, vecB); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(-3, -3, -3); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(4, 5, 6); });
      });

      describe("when vecB is the output vector", () => {
        beforeEach(() => { result = Vec3.subtract(vecB, vecA, vecB); });

        it("should place values into vecB", () => { expect(vecB).toBeVec(-3, -3, -3); });
        it("should return vecB", () => { expect(result).toBe(vecB); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2, 3); });
      });
    });

    describe("multiply", () => {
      it("should have an alias called 'mul'", () => { expect(Vec3.mul).toEqual(Vec3.multiply); });

      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec3.multiply(out, vecA, vecB); });

        it("should place values into out", () => { expect(out).toBeVec(4, 10, 18); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2, 3); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(4, 5, 6); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec3.multiply(vecA, vecA, vecB); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(4, 10, 18); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(4, 5, 6); });
      });

      describe("when vecB is the output vector", () => {
        beforeEach(() => { result = Vec3.multiply(vecB, vecA, vecB); });

        it("should place values into vecB", () => { expect(vecB).toBeVec(4, 10, 18); });
        it("should return vecB", () => { expect(result).toBe(vecB); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2, 3); });
      });
    });

    describe("divide", () => {
      it("should have an alias called 'div'", () => { expect(Vec3.div).toEqual(Vec3.divide); });

      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec3.divide(out, vecA, vecB); });

        it("should place values into out", () => { expect(out).toBeVec(0.25, 0.4, 0.5); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2, 3); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(4, 5, 6); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec3.divide(vecA, vecA, vecB); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(0.25, 0.4, 0.5); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(4, 5, 6); });
      });

      describe("when vecB is the output vector", () => {
        beforeEach(() => { result = Vec3.divide(vecB, vecA, vecB); });

        it("should place values into vecB", () => { expect(vecB).toBeVec(0.25, 0.4, 0.5); });
        it("should return vecB", () => { expect(result).toBe(vecB); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2, 3); });
      });
    });

    describe("ceil", () => {
      beforeEach(() => { vecA = [Math.E, Math.PI, Math.SQRT2]; });

      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec3.ceil(out, vecA); });

        it("should place values into out", () => { expect(out).toBeVec(3, 4, 2); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(Math.E, Math.PI, Math.SQRT2); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec3.ceil(vecA, vecA); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(3, 4, 2); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
      });
    });

    describe("floor", () => {
      beforeEach(() => { vecA = [Math.E, Math.PI, Math.SQRT2]; });

      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec3.floor(out, vecA); });

        it("should place values into out", () => { expect(out).toBeVec(2, 3, 1); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(Math.E, Math.PI, Math.SQRT2); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec3.floor(vecA, vecA); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(2, 3, 1); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
      });
    });

    describe("min", () => {
      beforeEach(() => { vecA = [1, 3, 1]; vecB = [3, 1, 3]; });

      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec3.min(out, vecA, vecB); });

        it("should place values into out", () => { expect(out).toBeVec(1, 1, 1); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 3, 1); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(3, 1, 3); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec3.min(vecA, vecA, vecB); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(1, 1, 1); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(3, 1, 3); });
      });

      describe("when vecB is the output vector", () => {
        beforeEach(() => { result = Vec3.min(vecB, vecA, vecB); });

        it("should place values into vecB", () => { expect(vecB).toBeVec(1, 1, 1); });
        it("should return vecB", () => { expect(result).toBe(vecB); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 3, 1); });
      });
    });

    describe("max", () => {
      beforeEach(() => { vecA = [1, 3, 1]; vecB = [3, 1, 3]; });

      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec3.max(out, vecA, vecB); });

        it("should place values into out", () => { expect(out).toBeVec(3, 3, 3); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 3, 1); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(3, 1, 3); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec3.max(vecA, vecA, vecB); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(3, 3, 3); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(3, 1, 3); });
      });

      describe("when vecB is the output vector", () => {
        beforeEach(() => { result = Vec3.max(vecB, vecA, vecB); });

        it("should place values into vecB", () => { expect(vecB).toBeVec(3, 3, 3); });
        it("should return vecB", () => { expect(result).toBe(vecB); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 3, 1); });
      });
    });

    /*describe("round", () => {
      beforeEach(() => { vecA = [Math.E, Math.PI, Math.SQRT2]; });

      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec3.round(out, vecA); });

        it("should place values into out", () => { expect(out).toBeVec(3, 3, 1); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(Math.E, Math.PI, Math.SQRT2); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec3.round(vecA, vecA); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(3, 3, 1); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
      });
    });*/

    describe("scale", () => {
      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec3.scale(out, vecA, 2); });

        it("should place values into out", () => { expect(out).toBeVec(2, 4, 6); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2, 3); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec3.scale(vecA, vecA, 2); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(2, 4, 6); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
      });
    });

    describe("scaleAndAdd", () => {
      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec3.scaleAndAdd(out, vecA, vecB, 0.5); });

        it("should place values into out", () => { expect(out).toBeVec(3, 4.5, 6); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2, 3); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(4, 5, 6); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec3.scaleAndAdd(vecA, vecA, vecB, 0.5); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(3, 4.5, 6); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(4, 5, 6); });
      });

      describe("when vecB is the output vector", () => {
        beforeEach(() => { result = Vec3.scaleAndAdd(vecB, vecA, vecB, 0.5); });

        it("should place values into vecB", () => { expect(vecB).toBeVec(3, 4.5, 6); });
        it("should return vecB", () => { expect(result).toBe(vecB); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2, 3); });
      });
    });

    describe("distance", () => {
      it("should have an alias called 'dist'", () => { expect(Vec3.dist).toEqual(Vec3.distance); });
      it("should return the distance", () => { expect(Vec3.distance(vecA, vecB)).toBeCloseTo(5.196152); });
    });

    describe("squaredDistance", () => {
      it("should have an alias called 'sqrDist'", () => { expect(Vec3.sqrDist).toEqual(Vec3.squaredDistance); });
      it("should return the squared distance", () => { expect(Vec3.squaredDistance(vecA, vecB)).toEqual(27); });
    });

    describe("length", () => {
      it("should have an alias called 'len'", () => { expect(Vec3.len).toEqual(Vec3.length); });
      it("should return the length", () => { expect(Vec3.len(vecA)).toBeCloseTo(3.741657); });
    });

    describe("squaredLength", () => {
      it("should have an alias called 'sqrLen'", () => { expect(Vec3.sqrLen).toEqual(Vec3.squaredLength); });
      it("should return the squared length", () => { expect(Vec3.squaredLength(vecA)).toEqual(14); });
    });

    describe("negate", () => {
      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec3.negate(out, vecA); });

        it("should place values into out", () => { expect(out).toBeVec(-1, -2, -3); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2, 3); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec3.negate(vecA, vecA); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(-1, -2, -3); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
      });
    });

    describe("normalize", () => {
      beforeEach(() => { vecA = [5, 0, 0]; });

      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec3.normalize(out, vecA); });

        it("should place values into out", () => { expect(out).toBeVec(1, 0, 0); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(5, 0, 0); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec3.normalize(vecA, vecA); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(1, 0, 0); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
      });
    });

    describe("dot", () => {
      let value: number;
      beforeEach(() => { value = Vec3.dot(vecA, vecB); });

      it("should return the dot product", () => { expect(value).toEqual(32); });
      it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2, 3); });
      it("should not modify vecB", () => { expect(vecB).toBeVec(4, 5, 6); });
    });

    describe("cross", () => {
      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec3.cross(out, vecA, vecB); });

        it("should place values into out", () => { expect(out).toBeVec(-3, 6, -3); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2, 3); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(4, 5, 6); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec3.cross(vecA, vecA, vecB); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(-3, 6, -3); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(4, 5, 6); });
      });

      describe("when vecB is the output vector", () => {
        beforeEach(() => { result = Vec3.cross(vecB, vecA, vecB); });

        it("should place values into vecB", () => { expect(vecB).toBeVec(-3, 6, -3); });
        it("should return vecB", () => { expect(result).toBe(vecB); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2, 3); });
      });
    });

    describe("lerp", () => {
      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec3.lerp(out, vecA, vecB, 0.5); });

        it("should place values into out", () => { expect(out).toBeVec(2.5, 3.5, 4.5); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2, 3); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(4, 5, 6); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec3.lerp(vecA, vecA, vecB, 0.5); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(2.5, 3.5, 4.5); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(4, 5, 6); });
      });

      describe("when vecB is the output vector", () => {
        beforeEach(() => { result = Vec3.lerp(vecB, vecA, vecB, 0.5); });

        it("should place values into vecB", () => { expect(vecB).toBeVec(2.5, 3.5, 4.5); });
        it("should return vecB", () => { expect(result).toBe(vecB); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2, 3); });
      });
    });

    describe("angle", () => {
      let value: number;
      beforeEach(() => { value = Vec3.angle(vecA, vecB); });

      it("should return the angle", () => { expect(value).toBeCloseTo(0.225726); });
      it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2, 3); });
      it("should not modify vecB", () => { expect(vecB).toBeVec(4, 5, 6); });
    });

    describe("str", () => {
      it("should return a string representation of the vector", () => { expect(Vec3.str(vecA)).toEqual("Vec3(1, 2, 3)"); });
    });

    describe("exactEquals", () => {
      let vecC: Vec3Like, r0: boolean, r1: boolean;
      beforeEach(() => {
        vecA = [0, 1, 2];
        vecB = [0, 1, 2];
        vecC = [1, 2, 3];
        r0 = Vec3.exactEquals(vecA, vecB);
        r1 = Vec3.exactEquals(vecA, vecC);
      });

      it("should return true for identical vectors", () => { expect(r0).toBe(true); });
      it("should return false for different vectors", () => { expect(r1).toBe(false); });
      it("should not modify vecA", () => { expect(vecA).toBeVec(0, 1, 2); });
      it("should not modify vecB", () => { expect(vecB).toBeVec(0, 1, 2); });
    });

    describe("equals", () => {
      let vecC: Vec3Like,
          vecD: Vec3Like,
          r0: boolean,
          r1: boolean,
          r2: boolean;
      beforeEach(() => {
        vecA = [0, 1, 2];
        vecB = [0, 1, 2];
        vecC = [1, 2, 3];
        vecD = [1e-16, 1, 2];
        r0 = Vec3.equals(vecA, vecB);
        r1 = Vec3.equals(vecA, vecC);
        r2 = Vec3.equals(vecA, vecD);
      });
      it("should return true for identical vectors", () => { expect(r0).toBe(true); });
      it("should return false for different vectors", () => { expect(r1).toBe(false); });
      it("should return true for close but not identical vectors", () => { expect(r2).toBe(true); });
      it("should not modify vecA", () => { expect(vecA).toBeVec(0, 1, 2); });
      it("should not modify vecB", () => { expect(vecB).toBeVec(0, 1, 2); });
    });

    describe("zero", () => {
      beforeEach(() => {
        vecA = [1, 2, 3];
        result = Vec3.zero(vecA);
      });
      it("should result in a 3 element vector with zeros", () => { expect(result).toBeVec(0, 0, 0); });
    });
  });
});