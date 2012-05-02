describe("vec2", function() {
  var vec, dest;
  var vecA, vecB, result;
  beforeEach(function() { vecA = [1, 2]; vecB = [3, 4]; dest = [0, 0]; });
  
  describe("scale", function() {
    describe("with dest vec2", function() {
      beforeEach(function() { result = vec2.scale(vecA, 0.5, dest); });

      it("should place values into dest", function() { expect(dest).toBeEqualish([0.5, 1]); });
      it("should return dest", function() { expect(result).toBe(dest); });
      it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
    });
    
    describe("without dest vec2", function() {
      beforeEach(function() { result = vec2.scale(vecA, vecB); });

      it("should place values into vecA", function() { expect(vecA).toBeEqualish([0.5, 1]); });
    });
  });
  
  describe("add", function() {
    describe("with dest vec2", function() {
      beforeEach(function() { result = vec2.add(vecA, vecB, dest); });
      
      it("should place values into dest", function() { expect(dest).toBeEqualish([4, 6]); });
      it("should return dest", function() { expect(result).toBe(dest); });
      it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
      it("should not modify vecB", function() { expect(vecB).toBeEqualish([3, 4]); });
    });
    
    describe("without dest vec2", function() {
      beforeEach(function() { result = vec2.add(vecA, vecB); });
      
      it("should place values into vecB", function() { expect(vecB).toBeEqualish([4, 6]); });
      it("should return vecB", function() { expect(result).toBe(vecB); });
      it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
    });
  });
  
  describe("subtract", function() {
    describe("with dest vec2", function() {
      beforeEach(function() { result = vec2.subtract(vecA, vecB, dest); });
      
      it("should place values into dest", function() { expect(dest).toBeEqualish([-2, -2]); });
      it("should return dest", function() { expect(result).toBe(dest); });
      it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
      it("should not modify vecB", function() { expect(vecB).toBeEqualish([3, 4]); });
    });
    
    describe("without dest vec2", function() {
      beforeEach(function() { result = vec2.subtract(vecA, vecB); });
      
      it("should place values into vecB", function() { expect(vecB).toBeEqualish([-2, -2]); });
      it("should return vecB", function() { expect(result).toBe(vecB); });
      it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
    });
  });
  
  describe("multiply", function() {
    describe("with dest vec2", function() {
      beforeEach(function() { result = vec2.multiply(vecA, vecB, dest); });
      
      it("should place values into dest", function() { expect(dest).toBeEqualish([3, 8]); });
      it("should return dest", function() { expect(result).toBe(dest); });
      it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
      it("should not modify vecB", function() { expect(vecB).toBeEqualish([3, 4]); });
    });
    
    describe("without dest vec2", function() {
      beforeEach(function() { result = vec2.multiply(vecA, vecB); });
      
      it("should place values into vecB", function() { expect(vecB).toBeEqualish([3, 8]); });
      it("should return vecB", function() { expect(result).toBe(vecB); });
      it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
    });
  });
  
  describe("divide", function() {
    describe("with dest vec2", function() {
      beforeEach(function() { result = vec2.divide(vecA, vecB, dest); });
      
      it("should place values into dest", function() { expect(dest).toBeEqualish([0.333333, 0.5]); });
      it("should return dest", function() { expect(result).toBe(dest); });
      it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
      it("should not modify vecB", function() { expect(vecB).toBeEqualish([3, 4]); });
    });
    
    describe("without dest vec2", function() {
      beforeEach(function() { result = vec2.divide(vecA, vecB); });
      
      it("should place values into vecB", function() { expect(vecB).toBeEqualish([0.333333, 0.5]); });
      it("should return vecB", function() { expect(result).toBe(vecB); });
      it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
    });
  });
  
  describe("create", function() {
    describe("with vec", function() {
      it("should clone vec's contents", function() {
        expect(vec2.create([1, 2])).toBeEqualish([1, 2]);
      });
      
      it("should not return vec", function() {
        vec = [1, 2];
        expect(vec2.create(vec)).not.toBe(vec);
      });
    });
    
    describe("without vec", function() {
      it("should initialize components to 0", function() {
        expect(vec2.create()).toBeEqualish([0, 0]);
      });
    });
  });
});
