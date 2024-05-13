import * as glMatrix from "../../src/common.js"

describe("common", function(){
  let result;

  describe("toRadian", function(){
    beforeEach(function(){ result = glMatrix.toRadian(180); });
    it("should return a value of 3.141592654(Math.PI)", function(){ expect(result).toBeEqualish(Math.PI); });
  });

  describe("toDegree", function(){
    beforeEach(function(){ result = glMatrix.toDegree(Math.PI); });
    it("should return a value of 180", function(){ expect(result).toBeEqualish(180); });
  });

  describe("equals", function() {
    let r0, r1, r2, r3, r4;
    beforeEach(function() {
      r0 = glMatrix.equals(1.0, 0.0);
      r1 = glMatrix.equals(1.0, 1.0);
      r2 = glMatrix.equals(1.0+glMatrix.EPSILON/2, 1.0);
      r3 = glMatrix.equals(1.0011, 1.0, 0.001);
      r4 = glMatrix.equals(100.5, 100.7, 0.2);
    });
    it("should return false for different numbers", function() { expect(r0).toBe(false); });
    it("should return true for the same number", function() { expect(r1).toBe(true); });
    it("should return true for numbers that are close", function() { expect(r2).toBe(true); });
    it("should return false for numbers that are close but tolerance is set to smaller value", function() { expect(r3).toBe(false); });
    it("should return true for numbers that are close with tolerance is set to bigger value", function() { expect(r4).toBe(true); });
  });

});
