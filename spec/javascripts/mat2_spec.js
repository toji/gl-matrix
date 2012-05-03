describe("mat2", function() {
  var result, a, b, dest;
  
  beforeEach(function() {
    a = [1, 2, 3, 4];
    b = [5, 6, 7, 8];
    dest = [0, 0, 0, 0];
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
});
