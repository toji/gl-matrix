import { expect, describe, it, beforeEach } from 'vitest';
import { Vec4, Vec4Like } from "../src/vec4"
import "./test-utils"

describe("Vec4", () => {
  describe("constructor", () => {
    it("should return Vec4(0, 0, 0, 0) if called with no arguments", () => {
      expect(new Vec4()).toBeVec(0, 0, 0, 0);
    });

    it("should return Vec4(x, y, z, w) if called with (x, y, z, w)", () => {
      expect(new Vec4(1, 2, 3, 4)).toBeVec(1, 2, 3, 4);
      expect(new Vec4(-3, 4.4, -5.6, 7.8)).toBeVec(-3, 4.4, -5.6, 7.8);
    });

    it("should return Vec4(x, x, x) if called with (x)", () => {
      expect(new Vec4(1)).toBeVec(1, 1, 1, 1);
      expect(new Vec4(-2.3)).toBeVec(-2.3, -2.3, -2.3, -2.3);
    });

    it("should return Vec4(x, y, z, w) if called with ([x, y, z, w])", () => {
      expect(new Vec4([1, 2, 3, 4])).toBeVec(1, 2, 3, 4);
      expect(new Vec4([-3, 4.4, -5.6, 7.8])).toBeVec(-3, 4.4, -5.6, 7.8);
    });

    it("should return Vec4(x, y, z, w) if called with (Vec4(x, y, z, w))", () => {
      let v = new Vec4(3.4, 5.6, 7.8, 9);
      expect(new Vec4(v)).toBeVec(v);
    });

    it("should return Vec4(x, y, z, w) if called with (Float32Array([x, y, z, w]))", () => {
      let arr = new Float32Array([1.2, 3.4, 5.6, 7.8]);
      expect(new Vec4(arr)).toBeVec(arr);
    });
  });

  describe("static", () => {
    let out: Vec4Like;
    let vecA: Vec4Like;
    let vecB: Vec4Like;
    let result: any;

    beforeEach(() => {
      vecA = new Vec4(1, 2, 3, 4);
      vecB = new Vec4(5, 6, 7, 8);
      out = new Vec4(0, 0, 0, 0);
    });

    describe("create", () => {
      beforeEach(() => { result = Vec4.create(); });
      it("should return a 4 element array initialized to 0s", () => { expect(result).toBeVec(0, 0, 0, 0); });
    });

    describe("clone", () => {
      beforeEach(() => { result = Vec4.clone(vecA); });
      it("should return a 4 element array initialized to the values in vecA", () => { expect(result).toBeVec(vecA); });
    });

    describe("fromValues", () => {
      beforeEach(() => { result = Vec4.fromValues(1, 2, 3, 4); });
      it("should return a 4 element array initialized to the values passed", () => { expect(result).toBeVec(1, 2, 3, 4); });
    });

    describe("copy", () => {
      beforeEach(() => { result = Vec4.copy(out, vecA); });
      it("should place values into out", () => { expect(out).toBeVec(1, 2, 3, 4); });
      it("should return out", () => { expect(result).toBe(out); });
    });

    describe("set", () => {
      beforeEach(() => { result = Vec4.set(out, 1, 2, 3, 4); });
      it("should place values into out", () => { expect(out).toBeVec(1, 2, 3, 4); });
      it("should return out", () => { expect(result).toBe(out); });
    });

    describe("add", () => {
      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec4.add(out, vecA, vecB); });

        it("should place values into out", () => { expect(out).toBeVec(6, 8, 10, 12); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2, 3, 4); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(5, 6, 7, 8); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec4.add(vecA, vecA, vecB); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(6, 8, 10, 12); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(5, 6, 7, 8); });
      });

      describe("when vecB is the output vector", () => {
        beforeEach(() => { result = Vec4.add(vecB, vecA, vecB); });

        it("should place values into vecB", () => { expect(vecB).toBeVec(6, 8, 10, 12); });
        it("should return vecB", () => { expect(result).toBe(vecB); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2, 3, 4); });
      });
    });

    describe("subtract", () => {
      it("should have an alias called 'sub'", () => { expect(Vec4.sub).toEqual(Vec4.subtract); });

      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec4.subtract(out, vecA, vecB); });

        it("should place values into out", () => { expect(out).toBeVec(-4, -4, -4, -4); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2, 3, 4); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(5, 6, 7, 8); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec4.subtract(vecA, vecA, vecB); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(-4, -4, -4, -4); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(5, 6, 7, 8); });
      });

      describe("when vecB is the output vector", () => {
        beforeEach(() => { result = Vec4.subtract(vecB, vecA, vecB); });

        it("should place values into vecB", () => { expect(vecB).toBeVec(-4, -4, -4, -4); });
        it("should return vecB", () => { expect(result).toBe(vecB); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2, 3, 4); });
      });
    });

    describe("multiply", () => {
      it("should have an alias called 'mul'", () => { expect(Vec4.mul).toEqual(Vec4.multiply); });

      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec4.multiply(out, vecA, vecB); });

        it("should place values into out", () => { expect(out).toBeVec(5, 12, 21, 32); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2, 3, 4); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(5, 6, 7, 8); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec4.multiply(vecA, vecA, vecB); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(5, 12, 21, 32); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(5, 6, 7, 8); });
      });

      describe("when vecB is the output vector", () => {
        beforeEach(() => { result = Vec4.multiply(vecB, vecA, vecB); });

        it("should place values into vecB", () => { expect(vecB).toBeVec(5, 12, 21, 32); });
        it("should return vecB", () => { expect(result).toBe(vecB); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2, 3, 4); });
      });
    });

    describe("divide", () => {
      it("should have an alias called 'div'", () => { expect(Vec4.div).toEqual(Vec4.divide); });

      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec4.divide(out, vecA, vecB); });

        it("should place values into out", () => { expect(out).toBeVec(0.2, 0.333333, 0.428571, 0.5); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2, 3, 4); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(5, 6, 7, 8); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec4.divide(vecA, vecA, vecB); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(0.2, 0.333333, 0.428571, 0.5); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(5, 6, 7, 8); });
      });

      describe("when vecB is the output vector", () => {
        beforeEach(() => { result = Vec4.divide(vecB, vecA, vecB); });

        it("should place values into vecB", () => { expect(vecB).toBeVec(0.2, 0.333333, 0.428571, 0.5); });
        it("should return vecB", () => { expect(result).toBe(vecB); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2, 3, 4); });
      });
    });

    describe("ceil", () => {
      beforeEach(() => { vecA = [Math.E, Math.PI, Math.SQRT2, Math.SQRT1_2]; });

      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec4.ceil(out, vecA); });

        it("should place values into out", () => { expect(out).toBeVec(3, 4, 2, 1); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(Math.E, Math.PI, Math.SQRT2, Math.SQRT1_2); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec4.ceil(vecA, vecA); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(3, 4, 2, 1); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
      });
    });

    describe("floor", () => {
      beforeEach(() => { vecA = [Math.E, Math.PI, Math.SQRT2, Math.SQRT1_2]; });

      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec4.floor(out, vecA); });

        it("should place values into out", () => { expect(out).toBeVec(2, 3, 1, 0); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(Math.E, Math.PI, Math.SQRT2, Math.SQRT1_2); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec4.floor(vecA, vecA); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(2, 3, 1, 0); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
      });
    });

    describe("min", () => {
      beforeEach(() => { vecA = [1, 3, 1, 3]; vecB = [3, 1, 3, 1]; });

      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec4.min(out, vecA, vecB); });

        it("should place values into out", () => { expect(out).toBeVec(1, 1, 1, 1); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 3, 1, 3); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(3, 1, 3, 1); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec4.min(vecA, vecA, vecB); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(1, 1, 1, 1); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(3, 1, 3, 1); });
      });

      describe("when vecB is the output vector", () => {
        beforeEach(() => { result = Vec4.min(vecB, vecA, vecB); });

        it("should place values into vecB", () => { expect(vecB).toBeVec(1, 1, 1, 1); });
        it("should return vecB", () => { expect(result).toBe(vecB); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 3, 1, 3); });
      });
    });

    describe("max", () => {
      beforeEach(() => { vecA = [1, 3, 1, 3]; vecB = [3, 1, 3, 1]; });

      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec4.max(out, vecA, vecB); });

        it("should place values into out", () => { expect(out).toBeVec(3, 3, 3, 3); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 3, 1, 3); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(3, 1, 3, 1); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec4.max(vecA, vecA, vecB); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(3, 3, 3, 3); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(3, 1, 3, 1); });
      });

      describe("when vecB is the output vector", () => {
        beforeEach(() => { result = Vec4.max(vecB, vecA, vecB); });

        it("should place values into vecB", () => { expect(vecB).toBeVec(3, 3, 3, 3); });
        it("should return vecB", () => { expect(result).toBe(vecB); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 3, 1, 3); });
      });
    });

    describe("round", () => {
      beforeEach(() => { vecA = [Math.E, Math.PI, Math.SQRT2, Math.SQRT1_2]; });

      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec4.round(out, vecA); });

        it("should place values into out", () => { expect(out).toBeVec(3, 3, 1, 1); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(Math.E, Math.PI, Math.SQRT2, Math.SQRT1_2); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec4.round(vecA, vecA); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(3, 3, 1, 1); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
      });
    });

    describe("scale", () => {
      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec4.scale(out, vecA, 2); });

        it("should place values into out", () => { expect(out).toBeVec(2, 4, 6, 8); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2, 3, 4); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec4.scale(vecA, vecA, 2); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(2, 4, 6, 8); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
      });
    });

    describe("scaleAndAdd", () => {
      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec4.scaleAndAdd(out, vecA, vecB, 0.5); });

        it("should place values into out", () => { expect(out).toBeVec(3.5, 5, 6.5, 8); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2, 3, 4); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(5, 6, 7, 8); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec4.scaleAndAdd(vecA, vecA, vecB, 0.5); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(3.5, 5, 6.5, 8); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(5, 6, 7, 8); });
      });

      describe("when vecB is the output vector", () => {
        beforeEach(() => { result = Vec4.scaleAndAdd(vecB, vecA, vecB, 0.5); });

        it("should place values into vecB", () => { expect(vecB).toBeVec(3.5, 5, 6.5, 8); });
        it("should return vecB", () => { expect(result).toBe(vecB); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2, 3, 4); });
      });
    });

    describe("distance", () => {
      it("should have an alias called 'dist'", () => { expect(Vec4.dist).toEqual(Vec4.distance); });

      beforeEach(() => { result = Vec4.distance(vecA, vecB); });

      it("should return the distance", () => { expect(result).toBeCloseTo(8); });
    });

    describe("squaredDistance", () => {
      it("should have an alias called 'sqrDist'", () => { expect(Vec4.sqrDist).toEqual(Vec4.squaredDistance); });

      beforeEach(() => { result = Vec4.squaredDistance(vecA, vecB); });

      it("should return the squared distance", () => { expect(result).toEqual(64); });
    });

    describe("length", () => {
      it("should have an alias called 'len'", () => { expect(Vec4.len).toEqual(Vec4.length); });

      beforeEach(() => { result = Vec4.len(vecA); });

      it("should return the length", () => { expect(result).toBeCloseTo(5.477225); });
    });

    describe("squaredLength", () => {
      it("should have an alias called 'sqrLen'", () => { expect(Vec4.sqrLen).toEqual(Vec4.squaredLength); });

      beforeEach(() => { result = Vec4.squaredLength(vecA); });

      it("should return the squared length", () => { expect(result).toEqual(30); });
    });

    describe("negate", () => {
      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec4.negate(out, vecA); });

        it("should place values into out", () => { expect(out).toBeVec(-1, -2, -3, -4); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2, 3, 4); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec4.negate(vecA, vecA); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(-1, -2, -3, -4); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
      });
    });

    describe("normalize", () => {
      beforeEach(() => { vecA = [5, 0, 0, 0]; });

      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec4.normalize(out, vecA); });

        it("should place values into out", () => { expect(out).toBeVec(1, 0, 0, 0); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(5, 0, 0, 0); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec4.normalize(vecA, vecA); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(1, 0, 0, 0); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
      });
    });

    describe("dot", () => {
      beforeEach(() => { result = Vec4.dot(vecA, vecB); });

      it("should return the dot product", () => { expect(result).toEqual(70); });
      it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2, 3, 4); });
      it("should not modify vecB", () => { expect(vecB).toBeVec(5, 6, 7, 8); });
    });

    describe("lerp", () => {
      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec4.lerp(out, vecA, vecB, 0.5); });

        it("should place values into out", () => { expect(out).toBeVec(3, 4, 5, 6); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2, 3, 4); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(5, 6, 7, 8); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec4.lerp(vecA, vecA, vecB, 0.5); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(3, 4, 5, 6); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(5, 6, 7, 8); });
      });

      describe("when vecB is the output vector", () => {
        beforeEach(() => { result = Vec4.lerp(vecB, vecA, vecB, 0.5); });

        it("should place values into vecB", () => { expect(vecB).toBeVec(3, 4, 5, 6); });
        it("should return vecB", () => { expect(result).toBe(vecB); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2, 3, 4); });
      });
    });

    /*describe("random", () => {
      describe("with no scale", () => {
        beforeEach(() => { result = Vec4.random(out); });

        it("should result in a unit length vector", () => { expect(Vec4.len(out)).toBeCloseTo(1.0); });
        it("should return out", () => { expect(result).toBe(out); });
      });

      describe("with a scale", () => {
        beforeEach(() => { result = Vec4.random(out, 5.0); });

        it("should result in a unit length vector", () => { expect(Vec4.len(out)).toBeCloseTo(5.0); });
        it("should return out", () => { expect(result).toBe(out); });
      });
    });*/

    describe("cross", () => {
      let vecC: Vec4Like;
      beforeEach(() => {
        vecA = new Vec4(1, 0, 0, 0);
        vecB = new Vec4(0, 1, 0, 0);
        vecC = [0, 0, 1, 0];
      });

      describe("with a separate output vector", () => {
        beforeEach(() => { result = Vec4.cross(out, vecA,vecB,vecC); });

        it("should place values into out", () => { expect(out).toBeVec(0, 0, 0, -1); });
        it("should return out", () => { expect(result).toBe(out); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 0, 0, 0); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(0, 1, 0, 0); });
        it("should not modify vecC", () => { expect(vecC).toBeVec(0, 0, 1, 0); });
      });

      describe("when vecA is the output vector", () => {
        beforeEach(() => { result = Vec4.cross(vecA, vecA,vecB,vecC); });

        it("should place values into vecA", () => { expect(vecA).toBeVec(0, 0, 0,-1); });
        it("should return vecA", () => { expect(result).toBe(vecA); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(0, 1, 0, 0); });
        it("should not modify vecC", () => { expect(vecC).toBeVec(0, 0, 1, 0); });
      });
      describe("when vecB is the output vector", () => {
        beforeEach(() => { result = Vec4.cross(vecB, vecA,vecB,vecC); });

        it("should place values into vecB", () => { expect(vecB).toBeVec(0, 0, 0,-1); });
        it("should return vecB", () => { expect(result).toBe(vecB); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 0, 0, 0); });
        it("should not modify vecC", () => { expect(vecC).toBeVec(0, 0, 1, 0); });
      });
      describe("when vecC is the output vector", () => {
        beforeEach(() => { result = Vec4.cross(vecC, vecA,vecB,vecC); });

        it("should place values into vecC", () => { expect(vecC).toBeVec(0, 0, 0,-1); });
        it("should return vecC", () => { expect(result).toBe(vecC); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 0, 0, 0); });
        it("should not modify vecB", () => { expect(vecB).toBeVec(0, 1, 0, 0); });
      });
    });

    /*describe("forEach", () => {
      let vecArray;

      beforeEach(() => {
        vecArray = [
          1, 2, 3, 4,
          5, 6, 7, 8,
          0, 0, 0, 0
        ];
      });

      describe("when performing operations that take no extra arguments", () => {
        beforeEach(() => { result = Vec4.forEach(vecArray, 0, 0, 0, Vec4.normalize); });

        it("should update all values", () => {
          expect(vecArray).toBeEqualish([
            0.182574, 0.365148, 0.547722, 0.730296,
            0.379049, 0.454858, 0.530668, 0.606478,
            0, 0, 0, 0
          ]);
        });
        it("should return vecArray", () => { expect(result).toBe(vecArray); });
      });

      describe("when performing operations that takes one extra arguments", () => {
        beforeEach(() => { result = Vec4.forEach(vecArray, 0, 0, 0, Vec4.add, vecA); });

        it("should update all values", () => {
          expect(vecArray).toBeEqualish([
            2, 4, 6, 8,
            6, 8, 10, 12,
            1, 2, 3, 4
          ]);
        });
        it("should return vecArray", () => { expect(result).toBe(vecArray); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2, 3, 4); });
      });

      describe("when specifying an offset", () => {
        beforeEach(() => { result = Vec4.forEach(vecArray, 0, 4, 0, Vec4.add, vecA); });

        it("should update all values except the first vector", () => {
          expect(vecArray).toBeEqualish([
            1, 2, 3, 4,
            6, 8, 10, 12,
            1, 2, 3, 4
          ]);
        });
        it("should return vecArray", () => { expect(result).toBe(vecArray); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2, 3, 4); });
      });

      describe("when specifying a count", () => {
        beforeEach(() => { result = Vec4.forEach(vecArray, 0, 0, 2, Vec4.add, vecA); });

        it("should update all values except the last vector", () => {
          expect(vecArray).toBeEqualish([
            2, 4, 6, 8,
            6, 8, 10, 12,
            0, 0, 0, 0
          ]);
        });
        it("should return vecArray", () => { expect(result).toBe(vecArray); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2, 3, 4); });
      });

      describe("when specifying a stride", () => {
        beforeEach(() => { result = Vec4.forEach(vecArray, 8, 0, 0, Vec4.add, vecA); });

        it("should update all values except the second vector", () => {
          expect(vecArray).toBeEqualish([
            2, 4, 6, 8,
            5, 6, 7, 8,
            1, 2, 3, 4
          ]);
        });
        it("should return vecArray", () => { expect(result).toBe(vecArray); });
        it("should not modify vecA", () => { expect(vecA).toBeVec(1, 2, 3, 4); });
      });

      describe("when calling a function that does not modify the out variable", () => {
        beforeEach(() => {
          result = vec3.forEach(vecArray, 0, 0, 0, function(out, vec) {});
        });

        it("values should remain unchanged", () => {
          expect(vecArray).toBeEqualish([
            1, 2, 3, 4,
            5, 6, 7, 8,
            0, 0, 0, 0
          ]);
        });
        it("should return vecArray", () => { expect(result).toBe(vecArray); });
      });
    });*/

    describe("str", () => {
      it("should return a string representation of the vector", () => { expect(Vec4.str(vecA)).toEqual("Vec4(1, 2, 3, 4)"); });
    });

    describe("exactEquals", () => {
      let vecC: Vec4Like, r0: boolean, r1: boolean;
      beforeEach(() => {
        vecA = [0, 1, 2, 3];
        vecB = [0, 1, 2, 3];
        vecC = [1, 2, 3, 4];
        r0 = Vec4.exactEquals(vecA, vecB);
        r1 = Vec4.exactEquals(vecA, vecC);
      });

      it("should return true for identical vectors", () => { expect(r0).toBe(true); });
      it("should return false for different vectors", () => { expect(r1).toBe(false); });
      it("should not modify vecA", () => { expect(vecA).toBeVec(0, 1, 2, 3); });
      it("should not modify vecB", () => { expect(vecB).toBeVec(0, 1, 2, 3); });
    });

    describe("equals", () => {
      let vecC: Vec4Like, vecD: Vec4Like, r0: boolean, r1: boolean, r2: boolean;
      beforeEach(() => {
        vecA = [0, 1, 2, 3];
        vecB = [0, 1, 2, 3];
        vecC = [1, 2, 3, 4];
        vecD = [1e-16, 1, 2, 3];
        r0 = Vec4.equals(vecA, vecB);
        r1 = Vec4.equals(vecA, vecC);
        r2 = Vec4.equals(vecA, vecD);
      });
      it("should return true for identical vectors", () => { expect(r0).toBe(true); });
      it("should return false for different vectors", () => { expect(r1).toBe(false); });
      it("should return true for close but not identical vectors", () => { expect(r2).toBe(true); });
      it("should not modify vecA", () => { expect(vecA).toBeVec(0, 1, 2, 3); });
      it("should not modify vecB", () => { expect(vecB).toBeVec(0, 1, 2, 3); });
    });

    describe("zero", () => {
      beforeEach(() => {
        vecA = [1, 2, 3, 4];
        result = Vec4.zero(vecA);
      });
      it("should result in a 4 element vector with zeros", () => { expect(result).toBeVec(0, 0, 0, 0); });
    });
  });
});