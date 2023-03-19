import { expect, describe, it, beforeEach } from 'vitest';
import { Vec2, Vec2Like } from "../src/vec2"
import "./test-utils"

describe("Vec2", () => {
  let vecA: Vec2;
  let vecB: Vec2;
  let out: Vec2;

  beforeEach(() => {
    vecA = new Vec2(1, 2);
    vecB = new Vec2([3, 4]);
    out = new Vec2();
  });

  describe("constructor", () => {
    it("should return Vec2(0, 0) if called with no arguments", () => {
      expect(new Vec2()).toBeVec(0, 0);
    });

    it("should return Vec2(x, y) if called with (x, y)", () => {
      expect(new Vec2(1, 2)).toBeVec(1, 2);
      expect(new Vec2(-3, 4.4)).toBeVec(-3, 4.4);
    });

    it("should return Vec2(x, x) if called with (x)", () => {
      expect(new Vec2(1)).toBeVec(1, 1);
      expect(new Vec2(-2.3)).toBeVec(-2.3, -2.3);
    });

    it("should return Vec2(x, y) if called with ([x, y])", () => {
      expect(new Vec2([1, 2])).toBeVec(1, 2);
      expect(new Vec2([-3, 4.4])).toBeVec(-3, 4.4);
    });

    it("should return Vec2(x, y) if called with (Vec2(x, y))", () => {
      let v = new Vec2(3.4, 5.6);
      expect(new Vec2(v)).toBeVec(v);
    });

    it("should return Vec2(x, y) if called with (Float32Array([x, y]))", () => {
      let arr = new Float32Array([1.2, 3.4]);
      expect(new Vec2(arr)).toBeVec(arr);
    });
  });

  describe("static methods", () => {
    describe("create", () => {
      it("should return Vec2(0, 0)", () => {
        expect(Vec2.create()).toBeVec(0, 0);
      });
    });

    describe("add", () => {
      let result: Vec2Like;

      describe("with a separate output vector", () => {
          beforeEach(() => { result = Vec2.add(out, vecA, vecB); });

          it("should place values into out", () => { expect(out).toBeVec(4, 6); });
          it("should return out", () => { expect(result).toBe(out); });
          it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2); });
          it("should not modify vecB", () => { expect(vecB).toBeVec(3, 4); });
      });

      describe("when vecA is the output vector", () => {
          beforeEach(() => { result = Vec2.add(vecA, vecA, vecB); });

          it("should place values into vecA", () => { expect(vecA).toBeVec(4, 6); });
          it("should return vecA", () => { expect(result).toBe(vecA); });
          it("should not modify vecB", () => { expect(vecB).toBeVec(3, 4); });
      });

      describe("when vecB is the output vector", () => {
          beforeEach(() => { result = Vec2.add(vecB, vecA, vecB); });

          it("should place values into vecB", () => { expect(vecB).toBeVec(4, 6); });
          it("should return vecB", () => { expect(result).toBe(vecB); });
          it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2); });
      });

      describe("with raw array as the output", () => {
        let outArray: Vec2Like = [0, 0];
        beforeEach(() => { result = Vec2.add(outArray, vecA, vecB); });

        it("should place values into out", () => { expect(outArray).toBeVec(4, 6); });
        it("should return out", () => { expect(result).toBe(outArray); });
      });

      describe("with raw arrays as the inputs", () => {
        beforeEach(() => { result = Vec2.add(out, [1, 2], [3, 4]); });

        it("should place values into out", () => { expect(out).toBeVec(4, 6); });
        it("should return out", () => { expect(result).toBe(out); });
      });
    });
  });

  describe("static", () => {
    let out: Vec2Like, vecA: Vec2Like, vecB: Vec2Like, result: any;

    beforeEach(() => {
      vecA = new Vec2(1, 2);
      vecB = new Vec2(3, 4);
      out = new Vec2(0, 0);
    });

    describe("create", () => {
      beforeEach(() => { result = Vec2.create(); });
      it("should return a 2 element array initialized to 0s", () => { expect(result).toBeVec(0, 0); });
    });

    describe("clone", () => {
      beforeEach(() => { result = Vec2.clone(vecA); });
      it("should return a 2 element array initialized to the values in vecA", () => { expect(result).toBeVec(vecA); });
    });

    describe("fromValues", () => {
      beforeEach(() => { result = Vec2.fromValues(1, 2); });
      it("should return a 2 element array initialized to the values passed", () => { expect(result).toBeVec(1, 2); });
    });

    describe("copy", () => {
      beforeEach(() => { result = Vec2.copy(out, vecA); });
      it("should place values into out", () => { expect(out).toBeVec(1, 2); });
      it("should return out", () => { expect(result).toBe(out); });
    });

    describe("set", () => {
      beforeEach(() => { result = Vec2.set(out, 1, 2); });
      it("should place values into out", () => { expect(out).toBeVec(1, 2); });
      it("should return out", () => { expect(result).toBe(out); });
    });

    describe("add", () => {
      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec2.add(out, vecA, vecB); });

        it("should place values into out", () => { expect(out).toBeVec(4, 6); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(3, 4); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec2.add(vecA, vecA, vecB); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(4, 6); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(3, 4); });
      });

      describe("when vecB is the output vector", () => {
        beforeEach(() => { result = Vec2.add(vecB, vecA, vecB); });

        it("should place values into vecB", () => { expect(vecB).toBeVec(4, 6); });
        it("should return vecB", () => { expect(result).toBe(vecB); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2); });
      });
    });

    describe("subtract", () => {
      it("should have an alias called 'sub'", () => { expect(Vec2.sub).toEqual(Vec2.subtract); });

      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec2.subtract(out, vecA, vecB); });

        it("should place values into out", () => { expect(out).toBeVec(-2, -2); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(3, 4); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec2.subtract(vecA, vecA, vecB); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(-2, -2); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(3, 4); });
      });

      describe("when vecB is the output vector", () => {
        beforeEach(() => { result = Vec2.subtract(vecB, vecA, vecB); });

        it("should place values into vecB", () => { expect(vecB).toBeVec(-2, -2); });
        it("should return vecB", () => { expect(result).toBe(vecB); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2); });
      });
    });

    describe("multiply", () => {
      it("should have an alias called 'mul'", () => { expect(Vec2.mul).toEqual(Vec2.multiply); });

      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec2.multiply(out, vecA, vecB); });

        it("should place values into out", () => { expect(out).toBeVec(3, 8); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(3, 4); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec2.multiply(vecA, vecA, vecB); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(3, 8); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(3, 4); });
      });

      describe("when vecB is the output vector", () => {
        beforeEach(() => { result = Vec2.multiply(vecB, vecA, vecB); });

        it("should place values into vecB", () => { expect(vecB).toBeVec(3, 8); });
        it("should return vecB", () => { expect(result).toBe(vecB); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2); });
      });
    });

    describe("divide", () => {
      it("should have an alias called 'div'", () => { expect(Vec2.div).toEqual(Vec2.divide); });

      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec2.divide(out, vecA, vecB); });

        it("should place values into out", () => { expect(out).toBeVec(0.3333333, 0.5); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(3, 4); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec2.divide(vecA, vecA, vecB); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(0.3333333, 0.5); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(3, 4); });
      });

      describe("when vecB is the output vector", () => {
        beforeEach(() => { result = Vec2.divide(vecB, vecA, vecB); });

        it("should place values into vecB", () => { expect(vecB).toBeVec(0.3333333, 0.5); });
        it("should return vecB", () => { expect(result).toBe(vecB); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2); });
      });
    });

    describe("ceil", () => {
      beforeEach(() => { vecA = [Math.E, Math.PI]; });

      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec2.ceil(out, vecA); });

        it("should place values into out", () => { expect(out).toBeVec(3, 4); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(Math.E, Math.PI); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec2.ceil(vecA, vecA); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(3, 4); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
      });
    });

    describe("floor", () => {
      beforeEach(() => { vecA = [Math.E, Math.PI]; });

      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec2.floor(out, vecA); });

        it("should place values into out", () => { expect(out).toBeVec(2, 3); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(Math.E, Math.PI); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec2.floor(vecA, vecA); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(2, 3); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
      });
    });

    describe("min", () => {
      beforeEach(() => { vecA = [1, 4]; vecB = [3, 2]; });

      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec2.min(out, vecA, vecB); });

        it("should place values into out", () => { expect(out).toBeVec(1, 2); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 4); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(3, 2); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec2.min(vecA, vecA, vecB); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(1, 2); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(3, 2); });
      });

      describe("when vecB is the output vector", () => {
        beforeEach(() => { result = Vec2.min(vecB, vecA, vecB); });

        it("should place values into vecB", () => { expect(vecB).toBeVec(1, 2); });
        it("should return vecB", () => { expect(result).toBe(vecB); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 4); });
      });
    });

    describe("max", () => {
      beforeEach(() => { vecA = [1, 4]; vecB = [3, 2]; });

      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec2.max(out, vecA, vecB); });

        it("should place values into out", () => { expect(out).toBeVec(3, 4); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 4); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(3, 2); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec2.max(vecA, vecA, vecB); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(3, 4); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(3, 2); });
      });

      describe("when vecB is the output vector", () => {
        beforeEach(() => { result = Vec2.max(vecB, vecA, vecB); });

        it("should place values into vecB", () => { expect(vecB).toBeVec(3, 4); });
        it("should return vecB", () => { expect(result).toBe(vecB); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 4); });
      });
    });

    describe("round", () => {
      beforeEach(() => { vecA = [Math.E, Math.PI]; });

      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec2.round(out, vecA); });

        it("should place values into out", () => { expect(out).toBeVec(3, 3); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(Math.E, Math.PI); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec2.round(vecA, vecA); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(3, 3); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
      });
    });

    describe("scale", () => {
      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec2.scale(out, vecA, 2); });

        it("should place values into out", () => { expect(out).toBeVec(2, 4); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec2.scale(vecA, vecA, 2); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(2, 4); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
      });
    });

    describe("scaleAndAdd", () => {
      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec2.scaleAndAdd(out, vecA, vecB, 0.5); });

        it("should place values into out", () => { expect(out).toBeVec(2.5, 4); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(3, 4); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec2.scaleAndAdd(vecA, vecA, vecB, 0.5); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(2.5, 4); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(3, 4); });
      });

      describe("when vecB is the output vector", () => {
        beforeEach(() => { result = Vec2.scaleAndAdd(vecB, vecA, vecB, 0.5); });

        it("should place values into vecB", () => { expect(vecB).toBeVec(2.5, 4); });
        it("should return vecB", () => { expect(result).toBe(vecB); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2); });
      });
    });

    describe("distance", () => {
      it("should have an alias called 'dist'", () => { expect(Vec2.dist).toEqual(Vec2.distance); });

      beforeEach(() => { result = Vec2.distance(vecA, vecB); });

      it("should return the distance", () => { expect(result).toBeCloseTo(2.828427); });
    });

    describe("squaredDistance", () => {
      it("should have an alias called 'sqrDist'", () => { expect(Vec2.sqrDist).toEqual(Vec2.squaredDistance); });

      beforeEach(() => { result = Vec2.squaredDistance(vecA, vecB); });

      it("should return the squared distance", () => { expect(result).toEqual(8); });
    });

    describe("length", () => {
      it("should have an alias called 'len'", () => { expect(Vec2.len).toEqual(Vec2.length); });

      beforeEach(() => { result = Vec2.len(vecA); });

      it("should return the length", () => { expect(result).toBeCloseTo(2.236067); });
    });

    describe("squaredLength", () => {
      it("should have an alias called 'sqrLen'", () => { expect(Vec2.sqrLen).toEqual(Vec2.squaredLength); });

      beforeEach(() => { result = Vec2.squaredLength(vecA); });

      it("should return the squared length", () => { expect(result).toEqual(5); });
    });

    describe("negate", () => {
      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec2.negate(out, vecA); });

        it("should place values into out", () => { expect(out).toBeVec(-1, -2); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec2.negate(vecA, vecA); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(-1, -2); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
      });
    });

    describe("normalize", () => {
      beforeEach(() => { vecA = [5, 0]; });

      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec2.normalize(out, vecA); });

        it("should place values into out", () => { expect(out).toBeVec(1, 0); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(5, 0); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec2.normalize(vecA, vecA); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(1, 0); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
      });
    });

    describe("dot", () => {
      beforeEach(() => { result = Vec2.dot(vecA, vecB); });

      it("should return the dot product", () => { expect(result).toEqual(11); });
      it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2); });
      it("should not modify vecB", () => { expect(vecB).toBeVec(3, 4); });
    });

    describe("cross", () => {
      let out3;

      beforeEach(() => {
        out3 = [0, 0, 0];
        result = Vec2.cross(out3, vecA, vecB);
      });

      it("should place values into out", () => { expect(out3).toBeVec(0, 0, -2); });
      it("should return out", () => { expect(result).toBe(out3); });
      it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2); });
      it("should not modify vecB", () => { expect(vecB).toBeVec(3, 4); });
    });

    describe("lerp", () => {
      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec2.lerp(out, vecA, vecB, 0.5); });

        it("should place values into out", () => { expect(out).toBeVec(2, 3); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(3, 4); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec2.lerp(vecA, vecA, vecB, 0.5); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(2, 3); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(3, 4); });
      });

      describe("when vecB is the output vector", () => {
        beforeEach(() => { result = Vec2.lerp(vecB, vecA, vecB, 0.5); });

        it("should place values into vecB", () => { expect(vecB).toBeVec(2, 3); });
        it("should return vecB", () => { expect(result).toBe(vecB); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2); });
      });
    });

    /*describe("random", () => {
      describe("with no scale", () => {
        beforeEach(() => { result = Vec2.random(out); });

        it("should result in a unit length vector", () => { expect(Vec2.len(out)).toBeCloseTo(1.0); });
        it("should return out", () => { expect(result).toBe(out); });
      });

      describe("with a scale", () => {
        beforeEach(() => { result = Vec2.random(out, 5.0); });

        it("should result in a unit length vector", () => { expect(Vec2.len(out)).toBeCloseTo(5.0); });
        it("should return out", () => { expect(result).toBe(out); });
      });
    });*/

    describe("transformMat2", () => {
      let matA;
      beforeEach(() => { matA = [1, 2, 3, 4]; });

      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec2.transformMat2(out, vecA, matA); });

        it("should place values into out", () => { expect(out).toBeVec(7, 10); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2); });
        it("should not modify matA", () => { expect(matA).toBeVec(1, 2, 3, 4); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec2.transformMat2(vecA, vecA, matA); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(7, 10); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
        it("should not modify matA", () => { expect(matA).toBeVec(1, 2, 3, 4); });
      });
    });

    describe("transformMat2d", () => {
      let matA;
      beforeEach(() => { matA = [1, 2, 3, 4, 5, 6]; });

      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec2.transformMat2d(out, vecA, matA); });

        it("should place values into out", () => { expect(out).toBeVec(12, 16); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2); });
        it("should not modify matA", () => { expect(matA).toBeVec(1, 2, 3, 4, 5, 6); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec2.transformMat2d(vecA, vecA, matA); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(12, 16); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
        it("should not modify matA", () => { expect(matA).toBeVec(1, 2, 3, 4, 5, 6); });
      });
    });

    /*describe("forEach", () => {
      let vecArray;

      beforeEach(() => {
        vecArray = [
          1, 2,
          3, 4,
          0, 0
        ];
      });

      describe("when performing operations that take no extra arguments", () => {
        beforeEach(() => { result = Vec2.forEach(vecArray, 0, 0, 0, Vec2.normalize); });

        it("should update all values", () => {
          expect(vecArray).toBeEqualish([
            0.447214, 0.894427,
            0.6, 0.8,
            0, 0
          ]);
        });
        it("should return vecArray", () => { expect(result).toBe(vecArray); });
      });

      describe("when performing operations that takes one extra arguments", () => {
        beforeEach(() => { result = Vec2.forEach(vecArray, 0, 0, 0, Vec2.add, vecA); });

        it("should update all values", () => {
          expect(vecArray).toBeEqualish([
            2, 4,
            4, 6,
            1, 2
          ]);
        });
        it("should return vecArray", () => { expect(result).toBe(vecArray); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2); });
      });

      describe("when specifying an offset", () => {
        beforeEach(() => { result = Vec2.forEach(vecArray, 0, 2, 0, Vec2.add, vecA); });

        it("should update all values except the first vector", () => {
          expect(vecArray).toBeEqualish([
            1, 2,
            4, 6,
            1, 2
          ]);
        });
        it("should return vecArray", () => { expect(result).toBe(vecArray); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2); });
      });

      describe("when specifying a count", () => {
        beforeEach(() => { result = Vec2.forEach(vecArray, 0, 0, 2, Vec2.add, vecA); });

        it("should update all values except the last vector", () => {
          expect(vecArray).toBeEqualish([
            2, 4,
            4, 6,
            0, 0
          ]);
        });
        it("should return vecArray", () => { expect(result).toBe(vecArray); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2); });
      });

      describe("when specifying a stride", () => {
        beforeEach(() => { result = Vec2.forEach(vecArray, 4, 0, 0, Vec2.add, vecA); });

        it("should update all values except the second vector", () => {
          expect(vecArray).toBeEqualish([
            2, 4,
            3, 4,
            1, 2
          ]);
        });
        it("should return vecArray", () => { expect(result).toBe(vecArray); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2); });
      });

      describe("when calling a function that does not modify the out variable", () => {
        beforeEach(() => {
          result = Vec2.forEach(vecArray, 0, 0, 0, function(out, vec) {});
        });

        it("values should remain unchanged", () => {
          expect(vecArray).toBeEqualish([
            1, 2,
            3, 4,
            0, 0,
          ]);
        });
        it("should return vecArray", () => { expect(result).toBe(vecArray); });
      });
    });*/

    describe('rotate', () => {
      describe('rotation around world origin [0, 0, 0]', () => {
          beforeEach(() => { vecA = [0, 1]; vecB = [0, 0]; result = Vec2.rotate(out, vecA, vecB, Math.PI); });
          it("should return the rotated vector", () => { expect(result).toBeVec(0, -1); });
      });
      describe('rotation around an arbitrary origin', () => {
          beforeEach(() => { vecA = [6, -5]; vecB = [0, -5]; result = Vec2.rotate(out, vecA, vecB, Math.PI); });
          it("should return the rotated vector", () => { expect(result).toBeVec(-6, -5); });
      });
    });

    describe("angle", () => {
      beforeEach(() => {
        vecA = [1,0];
        vecB = [1,2];
        result = Vec2.angle(vecA, vecB);
      });

      it("should return the angle", () => { expect(result).toBeCloseTo(1.10714); });
      it("should not modify vecA", () => { expect(vecA).toBeVec(1, 0); });
      it("should not modify vecB", () => { expect(vecB).toBeVec(1, 2); });
    });

    describe("str", () => {
      it("should return a string representation of the vector", () => { expect(Vec2.str(vecA)).toEqual("Vec2(1, 2)"); });
    });

    describe("exactEquals", () => {
      let vecC, r0, r1;
      beforeEach(() => {
        vecA = [0, 1];
        vecB = [0, 1];
        vecC = [1, 2];
        r0 = Vec2.exactEquals(vecA, vecB);
        r1 = Vec2.exactEquals(vecA, vecC);
      });

      it("should return true for identical vectors", () => { expect(r0).toBe(true); });
      it("should return false for different vectors", () => { expect(r1).toBe(false); });
      it("should not modify vecA", () => { expect(vecA).toBeVec(0, 1); });
      it("should not modify vecB", () => { expect(vecB).toBeVec(0, 1); });
    });

    describe("equals", () => {
      let vecC, vecD, r0, r1, r2;
      beforeEach(() => {
        vecA = [0, 1];
        vecB = [0, 1];
        vecC = [1, 2];
        vecD = [1e-16, 1];
        r0 = Vec2.equals(vecA, vecB);
        r1 = Vec2.equals(vecA, vecC);
        r2 = Vec2.equals(vecA, vecD);
      });
      it("should return true for identical vectors", () => { expect(r0).toBe(true); });
      it("should return false for different vectors", () => { expect(r1).toBe(false); });
      it("should return true for close but not identical vectors", () => { expect(r2).toBe(true); });
      it("should not modify vecA", () => { expect(vecA).toBeVec(0, 1); });
      it("should not modify vecB", () => { expect(vecB).toBeVec(0, 1); });
    });

    describe("zero", () => {
      beforeEach(() => {
        vecA = [1, 2];
        result = Vec2.zero(vecA);
      });
      it("should result in a 2 element vector with zeros", () => { expect(result).toBeVec(0, 0); });
    });
  });
});