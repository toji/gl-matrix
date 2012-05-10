describe("mat3", function() {
  var mat, vec, dest, result;
  
  beforeEach(function() {
    mat = mat3.create([-1, 0, 1, 0, -1, 0, 1, 0, -1]);
    vec = vec3.create([1, 2, 3]);
    dest = vec3.create();
  });
  
  describe("when Float32Array is not supported", function() {
    beforeEach(function() { setMatrixArrayType(Array); });

    it("should initialize to 0", function() {
      mat = mat3.create();
      expect(mat).toBeEqualish([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    });
  });
  
  describe("multiplyVec2", function() {
    beforeEach(function() { vec = [1, 2]; dest = vec2.create() });
    
    describe("with dest", function() {
      beforeEach(function() { result = mat3.multiplyVec2(mat, vec, dest); });
      it("should return dest", function() { expect(result).toBe(dest); });
      it("should not alter vec", function() { expect(vec).toBeEqualish([1, 2]); });
      it("should set dest", function() { expect(dest).toBeEqualish([0, -2]); });
    });

    describe("without dest", function() {
      beforeEach(function() { result = mat3.multiplyVec2(mat, vec); });
      it("should return vec", function() { expect(result).toBe(vec); });
      it("should set vec", function() { expect(vec).toBeEqualish([0, -2]); });
    });
  });
  
  describe("multiplyVec3", function() {
    describe("when set to identity", function() {
      beforeEach(function() { mat = mat3.identity(mat3.create()); });

      it("should produce the same vec3", function() {
        expect(mat3.multiplyVec3(mat, vec)).toBeEqualish([1, 2, 3]);
      });
    });
    
    describe("with an arbitrary mat3", function() {
      describe("given a dest vec3", function() {
        it("should not modify incoming vec3", function() {
          mat3.multiplyVec3(mat, vec, vec3.create());
          expect(vec).toBeEqualish([1, 2, 3]);
        });

        it("should store results in dest", function() {
          mat3.multiplyVec3(mat, vec, dest);
          expect(dest).toBeEqualish([2, -2, -2]);
        });
        
        it("should return dest", function() {
          expect(mat3.multiplyVec3(mat, vec, dest)).toBe(dest);
        });
      });
      
      describe("not given a dest vec3", function() {
        it("should modify incoming vec3", function() {
          mat3.multiplyVec3(mat, vec);
          expect(vec).toBeEqualish([2, -2, -2]);
        });
        
        it("should return incoming vec3", function() {
          expect(mat3.multiplyVec3(mat, vec)).toBe(vec);
        });
      });
    });
  });
});
