describe("spec helper", function() {
  var mock = null;
  describe("toBeEqualish", function() {
    beforeEach(function() {
      mock = function(actual) {
        return {
          actual: actual,
          equalish: HELPER_MATCHERS.toBeEqualish
        };
      };
    });

    it("should fail if left vector is not equal to right vector", function() {
      expect(mock([0,0,0,6.123031769111886e-17]).equalish([0,0,-0.707106,0.707106])).not.toBeTruthy();
    });

    it("should fail if a is NaN and b is not", function() {
      expect(mock(NaN).equalish(1)).not.toBeTruthy()
    });

    it("should fail if b is NaN and a is not", function() {
      expect(mock(1).equalish(NaN)).not.toBeTruthy()
    });
    
    it("should fail if a is vec of NaN and b is not", function() {
      expect(mock([NaN, NaN, NaN, NaN]).equalish([1, 2, 3, 4])).not.toBeTruthy()
    });
    
    it("should fail if b is vec of NaN and a is not", function() {
      expect(mock([1, 2, 3, 4]).equalish([NaN, NaN, NaN, NaN])).not.toBeTruthy()
    });
    
    it("should not fail if a and b are the same", function() {
      expect(mock(1).equalish(1)).toBeTruthy()
    });
  });
});