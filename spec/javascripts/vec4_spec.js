describe("vec4", function() {
  var vec, dest;
  var vecA, vecB, result;
  beforeEach(function() { vecA = [1, 2, 3, 4]; vecB = [5, 6, 7, 8]; dest = [0, 0, 0, 0]; });
  
  describe("when Float32Array is not supported", function() {
    beforeEach(function() { setMatrixArrayType(Array); });

    it("should initialize to 0", function() {
      vec = vec4.create();
      expect(vec[0]).toEqual(0);
      expect(vec[1]).toEqual(0);
      expect(vec[2]).toEqual(0);
      expect(vec[3]).toEqual(0);
    });
  });
  
  describe("str", function() {
    it("should produce pretty string", function() { expect(vec4.str(vecA)).toEqual("[1, 2, 3, 4]"); });
  });

  describe("lerp", function() {
    describe("with dest", function() {
      beforeEach(function() { result = vec4.lerp(vecA, vecB, 0.5, dest); });
      it("should return dest", function() { expect(result).toBe(dest); });
      it("should set dest to correct value", function() { expect(dest).toBeEqualish([3, 4, 5, 6]); });
      it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2, 3, 4]); });
      it("should not modify vecB", function() { expect(vecB).toBeEqualish([5, 6, 7, 8]); });
    });
    
    describe("without dest", function() {
      beforeEach(function() { result = vec4.lerp(vecA, vecB, 0.5); });
      it("should return vecA", function() { expect(result).toBe(vecA); });
      it("should modify vecA", function() { expect(vecA).toBeEqualish([3, 4, 5, 6]); });
      it("should not modify vecB", function() { expect(vecB).toBeEqualish([5, 6, 7, 8]); });
    });
  });
  
  describe("negate", function() {
    describe("with dest given", function() {
      beforeEach(function() { result = vec4.negate(vecA, dest); });
      it("should store negation in dest", function() { expect(dest).toBeEqualish([-1, -2, -3, -4]); });
      it("should return dest", function() { expect(result).toBe(dest); });
      it("should not alter vecA", function() { expect(vecA).toBeEqualish([1, 2, 3, 4]); });
    });
    
    describe("with dest not given", function() {
      beforeEach(function() { result = vec4.negate(vecA); });
      it("should return vecA", function() { expect(result).toBe(vecA); });
      it("should alter vecA", function() { expect(vecA).toBeEqualish([-1, -2, -3, -4]); });
    });
  });

  describe("set", function() {
    beforeEach(function() { result = vec4.set(vecA, dest); });
    it("should assign values", function() { expect(dest).toBeEqualish([1, 2, 3, 4]); });
    it("should return dest", function() { expect(result).toBe(dest); });
  });
  
  describe("scale", function() {
    describe("with dest vec4", function() {
      beforeEach(function() { result = vec4.scale(vecA, 0.5, dest); });

      it("should place values into dest", function() { expect(dest).toBeEqualish([0.5, 1, 1.5, 2]); });
      it("should return dest", function() { expect(result).toBe(dest); });
      it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2, 3, 4]); });
    });
    
    describe("without dest vec4", function() {
      beforeEach(function() { result = vec4.scale(vecA, 0.5); });

      it("should place values into vecA", function() { expect(vecA).toBeEqualish([0.5, 1, 1.5, 2]); });
    });
  });
  
  describe("add", function() {
    describe("with dest vec4", function() {
      beforeEach(function() { result = vec4.add(vecA, vecB, dest); });
      
      it("should place values into dest", function() { expect(dest).toBeEqualish([6, 8, 10, 12]); });
      it("should return dest", function() { expect(result).toBe(dest); });
      it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2, 3, 4]); });
      it("should not modify vecB", function() { expect(vecB).toBeEqualish([5, 6, 7, 8]); });
    });
    
    describe("without dest vec4", function() {
      beforeEach(function() { result = vec4.add(vecA, vecB); });
      
      it("should place values into vecB", function() { expect(vecB).toBeEqualish([6, 8, 10, 12]); });
      it("should return vecB", function() { expect(result).toBe(vecB); });
      it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2, 3, 4]); });
    });
  });
  
  describe("subtract", function() {
    describe("with dest vec4", function() {
      beforeEach(function() { result = vec4.subtract(vecA, vecB, dest); });
      
      it("should place values into dest", function() { expect(dest).toBeEqualish([-4, -4, -4, -4]); });
      it("should return dest", function() { expect(result).toBe(dest); });
      it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2, 3, 4]); });
      it("should not modify vecB", function() { expect(vecB).toBeEqualish([5, 6, 7, 8]); });
    });
    
    describe("without dest vec4", function() {
      beforeEach(function() { result = vec4.subtract(vecA, vecB); });
      
      it("should place values into vecB", function() { expect(vecB).toBeEqualish([-4, -4, -4, -4]); });
      it("should return vecB", function() { expect(result).toBe(vecB); });
      it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2, 3, 4]); });
    });
  });
  
  describe("multiply", function() {
    describe("with dest vec4", function() {
      beforeEach(function() { result = vec4.multiply(vecA, vecB, dest); });
      
      it("should place values into dest", function() { expect(dest).toBeEqualish([5, 12, 21, 32]); });
      it("should return dest", function() { expect(result).toBe(dest); });
      it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2, 3, 4]); });
      it("should not modify vecB", function() { expect(vecB).toBeEqualish([5, 6, 7, 8]); });
    });
    
    describe("without dest vec4", function() {
      beforeEach(function() { result = vec4.multiply(vecA, vecB); });
      
      it("should place values into vecB", function() { expect(vecB).toBeEqualish([5, 12, 21, 32]); });
      it("should return vecB", function() { expect(result).toBe(vecB); });
      it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2, 3, 4]); });
    });
  });
  
  describe("divide", function() {
    describe("with dest vec4", function() {
      beforeEach(function() { result = vec4.divide(vecA, vecB, dest); });
      
      it("should place values into dest", function() { expect(dest).toBeEqualish([0.2, 0.333333, 0.428571, 0.5]); });
      it("should return dest", function() { expect(result).toBe(dest); });
      it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2, 3, 4]); });
      it("should not modify vecB", function() { expect(vecB).toBeEqualish([5, 6, 7, 8]); });
    });
    
    describe("without dest vec4", function() {
      beforeEach(function() { result = vec4.divide(vecA, vecB); });
      
      it("should place values into vecB", function() { expect(vecB).toBeEqualish([0.2, 0.333333, 0.428571, 0.5]); });
      it("should return vecB", function() { expect(result).toBe(vecB); });
      it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2, 3, 4]); });
    });
  });
  
  describe("create", function() {
    describe("with vec", function() {
      it("should clone vec's contents", function() {
        expect(vec4.create([1, 2, 3, 4])).toBeEqualish([1, 2, 3, 4]);
      });
      
      it("should not return vec", function() {
        vec = [1, 2, 3, 4];
        expect(vec4.create(vec)).not.toBe(vec);
      });
    });
    
    describe("without vec", function() {
      it("should initialize components to 0", function() {
        expect(vec4.create()).toBeEqualish([0, 0, 0, 0]);
      });
    });
  });
});
