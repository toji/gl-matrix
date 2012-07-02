describe("mat2d", function() {
  var result, a, b, dest;
  
  beforeEach(function() {
    a = [1, 2, 3, 4, 0, 0];
    b = [5, 6, 7, 8, 0, 0];
    dest = [0, 0, 0, 0, 0, 0];
  });
  
  describe("when Float32Array is not supported", function() {
    beforeEach(function() { setMatrixArrayType(Array); });

    it("should initialize to 0", function() {
      mat = mat2d.create();
      expect(mat).toBeEqualish([0, 0, 0, 0, 0, 0]);
    });
  });
  
  describe("create", function() {
    describe("with src", function() {
      beforeEach(function() { result = mat2d.create(a); });
      it("should set result", function() { expect(result).toBeEqualish([1, 2, 3, 4, 0, 0]); });
      it("should not return a", function() { expect(result).not.toBe(a); });
      it("should not change a", function() { expect(a).toBeEqualish([1, 2, 3, 4, 0, 0]); });
    });
    
    describe("with no src", function() {
      it("should set to 0", function() { expect(mat2d.create()).toBeEqualish([0, 0, 0, 0, 0, 0]); });
    });
  });

  describe("set", function() {
    it("should set values in dest to values from src", function() {
      mat2d.set(a, b);
      expect(b).toBeEqualish(a);
    });
    
    it("should return b", function() {
      expect(mat2d.set(a, b)).toBe(b);
    });
  });

  describe("identity", function() {
    describe("with dest", function() {
      beforeEach(function() { result = mat2d.identity(dest); });
      it("should set dest to identity", function() { expect(dest).toBeEqualish([1, 0, 0, 1, 0, 0]); });
      it("should return dest", function() { expect(result).toBe(dest); });
    });
    
    describe("without dest", function() {
      beforeEach(function() { result = mat2d.identity(); });
      it("should set result to identity", function() { expect(result).toBeEqualish([1, 0, 0, 1, 0, 0]); });
    });
  });

  // describe("transpose", function() {
  //   describe("with dest", function() {
  //     beforeEach(function() { result = mat2d.transpose(a, dest); });
  //     it("should set dest to transpose", function() { expect(dest).toBeEqualish([1, 3, 2, 4]); });
  //     it("should return dest", function() { expect(result).toBe(dest); });
  //     it("should not alter a", function() { expect(a).toBeEqualish([1, 2, 3, 4]); });
  //   });
    
  //   describe("without dest", function() {
  //     beforeEach(function() { result = mat2.transpose(a); });
  //     it("should set a to transpose", function() { expect(a).toBeEqualish([1, 3, 2, 4]); });
  //     it("should return a", function() { expect(result).toBe(a); });
  //   });
  // });
  
  describe("determinant", function() {
    it("should produce the correct result", function() {
      expect(mat2d.determinant(a)).toBeEqualish(-2);
    });
  });
  
  describe("inverse", function() {
    describe("when no inverse exists", function() {
      it("should be null", function() {
        expect(mat2d.inverse([3, 4, 6, 8, 0, 0])).toBeNull();
      });
    });
    
    describe("with dest", function() {
      beforeEach(function() { result = mat2d.inverse(a = [4, 7, 2, 6, 0, 0], dest); });
      it("should set dest", function() { expect(dest).toBeEqualish([0.6, -0.7, -0.2, 0.4, 0, 0]); });
      it("should return dest", function() { expect(result).toBe(dest); });
      it("should not modify a", function() { expect(a).toBeEqualish([4, 7, 2, 6, 0, 0]); });
    });
    
    describe("without dest", function() {
      beforeEach(function() { result = mat2d.inverse(a = [4, 7, 2, 6, 0, 0]); });
      it("should set a", function() { expect(a).toBeEqualish([0.6, -0.7, -0.2, 0.4, 0, 0]); });
      it("should return a", function() { expect(result).toBe(a); });
    });
  });
  
  describe("multiply", function() {
    describe("with dest", function() {
      beforeEach(function() { result = mat2d.multiply(a, b, dest); });
      it("should set dest", function() { expect(dest).toBeEqualish([19, 22, 43, 50, 0, 0]); });
      it("should return dest", function() { expect(result).toBe(dest); });
      it("should not modify a", function() { expect(a).toBeEqualish([1, 2, 3, 4, 0, 0]); });
      it("should not modify b", function() { expect(b).toBeEqualish([5, 6, 7, 8, 0, 0]); });
    });
    
    describe("without dest", function() {
      beforeEach(function() { result = mat2d.multiply(a, b); });
      it("should set a", function() { expect(a).toBeEqualish([19, 22, 43, 50, 0, 0]); });
      it("should not change b", function() { expect(b).toBeEqualish([5, 6, 7, 8, 0, 0]); });
      it("should return a", function() { expect(result).toBe(a); });
    });
  });

  describe("multiplyVec2", function() {
    beforeEach(function() { b = [5, 6]; dest = [0, 0]; });
    
    describe("with dest", function() {
      beforeEach(function() { result = mat2d.multiplyVec2(a, b, dest); });
      it("should set dest", function() { expect(dest).toBeEqualish([17, 39]); });
      it("should return dest", function() { expect(result).toBe(dest); });
      it("should not modify a", function() { expect(a).toBeEqualish([1, 2, 3, 4, 0, 0]); });
      it("should not modify b", function() { expect(b).toBeEqualish([5, 6]); });
    });
    
    describe("without dest", function() {
      beforeEach(function() { result = mat2d.multiplyVec2(a, b); });
      it("should not change a", function() { expect(a).toBeEqualish([1, 2, 3, 4, 0, 0]); });
      it("should change b", function() { expect(b).toBeEqualish([17, 39]); });
      it("should return b", function() { expect(result).toBe(b); });
    });
  });

  // describe("rotate", function() {
  //   beforeEach(function() { b = Math.PI/2; });
    
  //   describe("with dest", function() {
  //     beforeEach(function() { result = mat2.rotate(a, b, dest); });
  //     it("should set dest", function() { expect(dest).toBeEqualish([2, -1, 4, -3]); });
  //     it("should return dest", function() { expect(result).toBe(dest); });
  //     it("should not modify a", function() { expect(a).toBeEqualish([1, 2, 3, 4]); });
  //   });
    
  //   describe("without dest", function() {
  //     beforeEach(function() { result = mat2.rotate(a, b); });
  //     it("should modify a", function() { expect(a).toBeEqualish([2, -1, 4, -3]); });
  //     it("should return a", function() { expect(result).toBe(a); });
  //   });
  // });

  describe("scale", function() {
    beforeEach(function() { b = [2, 2] });
    
    describe("with dest", function() {
      beforeEach(function() { result = mat2d.scale(a, b, dest); });
      it("should set dest", function() { expect(dest).toBeEqualish([2, 4, 6, 8, 0, 0]); });
      it("should return dest", function() { expect(result).toBe(dest); });
      it("should not modify a", function() { expect(a).toBeEqualish([1, 2, 3, 4, 0, 0]); });
      it("should not modify b", function() { expect(b).toBeEqualish([2, 2]); });
    });
    
    describe("without dest", function() {
      beforeEach(function() { result = mat2d.scale(a, b); });
      it("should set a", function() { expect(a).toBeEqualish([2, 4, 6, 8, 0, 0]); });
      it("should return a", function() { expect(result).toBe(a); });
      it("should not modify b", function() { expect(b).toBeEqualish([2, 2]); });
    });
  });

  describe("str", function() {
    it("should produce pretty string", function() { expect(mat2d.str(a)).toEqual("[1, 2, 3, 4, 0, 0]"); });
  });
});
