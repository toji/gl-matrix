describe("mat4", function() {
  var result, a, b, dest;
  
  beforeEach(function() {
    a = mat4.identity(mat4.create());
  });
  
  describe("multiply", function() {
    it("an identity with itself should produce an identity", function() {
      expect(mat4.multiply(a, a, dest)).toBeEqualish([1,0,0,0,  0,1,0,0,  0,0,1,0,  0,0,0,1]);
    });
  });
});
