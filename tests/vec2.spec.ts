import { expect, describe, it, beforeEach } from 'vitest';
import { Vec2, vec2, Vec2Like } from "../src/vec2"
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
        expect(vec2.create()).toBeVec(0, 0);
      });
    });

    describe("add", () => {
      let result: Vec2Like;

      describe("with a separate output vector", function() {
          beforeEach(function() { result = vec2.add(out, vecA, vecB); });

          it("should place values into out", function() { expect(out).toBeVec(4, 6); });
          it("should return out", function() { expect(result).toBe(out); });
          it("should not modify vecA", function() { expect(vecA).toBeVec(1, 2); });
          it("should not modify vecB", function() { expect(vecB).toBeVec(3, 4); });
      });

      describe("when vecA is the output vector", function() {
          beforeEach(function() { result = vec2.add(vecA, vecA, vecB); });

          it("should place values into vecA", function() { expect(vecA).toBeVec(4, 6); });
          it("should return vecA", function() { expect(result).toBe(vecA); });
          it("should not modify vecB", function() { expect(vecB).toBeVec(3, 4); });
      });

      describe("when vecB is the output vector", function() {
          beforeEach(function() { result = vec2.add(vecB, vecA, vecB); });

          it("should place values into vecB", function() { expect(vecB).toBeVec(4, 6); });
          it("should return vecB", function() { expect(result).toBe(vecB); });
          it("should not modify vecA", function() { expect(vecA).toBeVec(1, 2); });
      });

      describe("with raw array as the output", function() {
        let outArray: Vec2Like = [0, 0];
        beforeEach(function() { result = vec2.add(outArray, vecA, vecB); });

        it("should place values into out", function() { expect(outArray).toBeVec(4, 6); });
        it("should return out", function() { expect(result).toBe(outArray); });
      });

      describe("with raw arrays as the inputs", function() {
        beforeEach(function() { result = vec2.add(out, [1, 2], [3, 4]); });

        it("should place values into out", function() { expect(out).toBeVec(4, 6); });
        it("should return out", function() { expect(result).toBe(out); });
      });
    });
  });
});