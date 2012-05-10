describe("mat2", function() {
  var result, a, b, dest;
  
  beforeEach(function() {
    a = [1, 2, 3, 4];
    b = [5, 6, 7, 8];
    dest = [0, 0, 0, 0];
  });
  
  describe("when Float32Array is not supported", function() {
    beforeEach(function() { setMatrixArrayType(Array); });

    it("should initialize to 0", function() {
      mat = mat2.create();
      expect(mat).toBeEqualish([0, 0, 0, 0]);
    });
  });
  
  describe("create", function() {
    describe("with src", function() {
      beforeEach(function() { result = mat2.create(a); });
      it("should set result", function() { expect(result).toBeEqualish([1, 2, 3, 4]); });
      it("should not return a", function() { expect(result).not.toBe(a); });
      it("should not change a", function() { expect(a).toBeEqualish([1, 2, 3, 4]); });
    });
    
    describe("with no src", function() {
      it("should set to 0", function() { expect(mat2.create()).toBeEqualish([0, 0, 0, 0]); });
    });
  });

  describe("set", function() {
    it("should set values in dest to values from src", function() {
      mat2.set(a, b);
      expect(b).toBeEqualish(a);
    });
    
    it("should return b", function() {
      expect(mat2.set(a, b)).toBe(b);
    });
  });

  describe("identity", function() {
    describe("with dest", function() {
      beforeEach(function() { result = mat2.identity(dest); });
      it("should set dest to identity", function() { expect(dest).toBeEqualish([1, 0, 0, 1]); });
      it("should return dest", function() { expect(result).toBe(dest); });
    });
    
    describe("without dest", function() {
      beforeEach(function() { result = mat2.identity(); });
      it("should set result to identity", function() { expect(result).toBeEqualish([1, 0, 0, 1]); });
    });
  });

  describe("transpose", function() {
    describe("with dest", function() {
      beforeEach(function() { result = mat2.transpose(a, dest); });
      it("should set dest to transpose", function() { expect(dest).toBeEqualish([1, 3, 2, 4]); });
      it("should return dest", function() { expect(result).toBe(dest); });
      it("should not alter a", function() { expect(a).toBeEqualish([1, 2, 3, 4]); });
    });
    
    describe("without dest", function() {
      beforeEach(function() { result = mat2.transpose(a); });
      it("should set a to transpose", function() { expect(a).toBeEqualish([1, 3, 2, 4]); });
      it("should return a", function() { expect(result).toBe(a); });
    });
  });
  
  describe("determinant", function() {
    it("should produce the correct result", function() {
      expect(mat2.determinant(a)).toBeEqualish(-2);
    });
  });
  
  describe("inverse", function() {
    describe("when no inverse exists", function() {
      it("should be null", function() {
        expect(mat2.inverse([3, 4, 6, 8])).toBeNull();
      });
    });
    
    describe("with dest", function() {
      beforeEach(function() { result = mat2.inverse(a = [4, 7, 2, 6], dest); });
      it("should set dest", function() { expect(dest).toBeEqualish([0.6, -0.7, -0.2, 0.4]); });
      it("should return dest", function() { expect(result).toBe(dest); });
      it("should not modify a", function() { expect(a).toBeEqualish([4, 7, 2, 6]); });
    });
    
    describe("without dest", function() {
      beforeEach(function() { result = mat2.inverse(a = [4, 7, 2, 6]); });
      it("should set a", function() { expect(a).toBeEqualish([0.6, -0.7, -0.2, 0.4]); });
      it("should return a", function() { expect(result).toBe(a); });
    });
  });
  
  describe("multiply", function() {
    describe("with dest", function() {
      beforeEach(function() { result = mat2.multiply(a, b, dest); });
      it("should set dest", function() { expect(dest).toBeEqualish([19, 22, 43, 50]); });
      it("should return dest", function() { expect(result).toBe(dest); });
      it("should not modify a", function() { expect(a).toBeEqualish([1, 2, 3, 4]); });
      it("should not modify b", function() { expect(b).toBeEqualish([5, 6, 7, 8]); });
    });
    
    describe("without dest", function() {
      beforeEach(function() { result = mat2.multiply(a, b); });
      it("should set a", function() { expect(a).toBeEqualish([19, 22, 43, 50]); });
      it("should not change b", function() { expect(b).toBeEqualish([5, 6, 7, 8]); });
      it("should return a", function() { expect(result).toBe(a); });
    });
  });

  describe("multiplyVec2", function() {
    beforeEach(function() { b = [5, 6]; dest = [0, 0]; });
    
    describe("with dest", function() {
      beforeEach(function() { result = mat2.multiplyVec2(a, b, dest); });
      it("should set dest", function() { expect(dest).toBeEqualish([17, 39]); });
      it("should return dest", function() { expect(result).toBe(dest); });
      it("should not modify a", function() { expect(a).toBeEqualish([1, 2, 3, 4]); });
      it("should not modify b", function() { expect(b).toBeEqualish([5, 6]); });
    });
    
    describe("without dest", function() {
      beforeEach(function() { result = mat2.multiplyVec2(a, b); });
      it("should not change a", function() { expect(a).toBeEqualish([1, 2, 3, 4]); });
      it("should change b", function() { expect(b).toBeEqualish([17, 39]); });
      it("should return b", function() { expect(result).toBe(b); });
    });
  });

  describe("rotate", function() {
    beforeEach(function() { b = Math.PI/2; });
    
    describe("with dest", function() {
      beforeEach(function() { result = mat2.rotate(a, b, dest); });
      it("should set dest", function() { expect(dest).toBeEqualish([2, -1, 4, -3]); });
      it("should return dest", function() { expect(result).toBe(dest); });
      it("should not modify a", function() { expect(a).toBeEqualish([1, 2, 3, 4]); });
    });
    
    describe("without dest", function() {
      beforeEach(function() { result = mat2.rotate(a, b); });
      it("should modify a", function() { expect(a).toBeEqualish([2, -1, 4, -3]); });
      it("should return a", function() { expect(result).toBe(a); });
    });
  });

  describe("scale", function() {
    beforeEach(function() { b = [2, 2] });
    
    describe("with dest", function() {
      beforeEach(function() { result = mat2.scale(a, b, dest); });
      it("should set dest", function() { expect(dest).toBeEqualish([2, 4, 6, 8]); });
      it("should return dest", function() { expect(result).toBe(dest); });
      it("should not modify a", function() { expect(a).toBeEqualish([1, 2, 3, 4]); });
      it("should not modify b", function() { expect(b).toBeEqualish([2, 2]); });
    });
    
    describe("without dest", function() {
      beforeEach(function() { result = mat2.scale(a, b); });
      it("should set a", function() { expect(a).toBeEqualish([2, 4, 6, 8]); });
      it("should return a", function() { expect(result).toBe(a); });
      it("should not modify b", function() { expect(b).toBeEqualish([2, 2]); });
    });
  });

  describe("str", function() {
    it("should produce pretty string", function() { expect(mat2.str(a)).toEqual("[1, 2, 3, 4]"); });
  });
});
