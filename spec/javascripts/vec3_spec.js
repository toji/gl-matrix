describe("vec3", function() {
  var vec, dest;
  
  describe("when Float32Array is not supported", function() {
    beforeEach(function() { setMatrixArrayType(Array); });

    it("should initialize to 0", function() {
      vec = vec3.create();
      expect(vec[0]).toEqual(0);
      expect(vec[1]).toEqual(0);
      expect(vec[2]).toEqual(0);
    });
  });

  it("should have length 3", function() {
    expect(vec3.create().length).toEqual(3);
  });

  it("should initialize from a 3-element array", function() {
    vec = vec3.create([1,2,3]);
    expect(vec[0]).toEqual(1);
    expect(vec[1]).toEqual(2);
    expect(vec[2]).toEqual(3);
  });
  
  describe("set", function() {
    beforeEach(function() { vec = vec3.create() });
    
    it("should assign values", function() {
      vec3.set([1,2,3], vec);
      expect(vec[0]).toEqual(1);
      expect(vec[1]).toEqual(2);
      expect(vec[2]).toEqual(3);
    });
  });
  
  describe("add", function() {
    beforeEach(function() { vec = vec3.create([1,2,3]); });
    
    it("should modify original vector if dest not given", function() {
      vec3.add(vec, [3,4,5]);
      expect(vec).toBeEqualish([4,6,8]);
    });
    
    it("should modify original vector if dest is original vector", function() {
      vec3.add(vec, [3,4,5], vec);
      expect(vec).toBeEqualish([4,6,8]);
    });
    
    describe("if dest vector given", function() {
      beforeEach(function() { vec3.add(vec, [3,4,5], dest = vec3.create()); });
      
      it("should not modify original vector", function() {
        expect(vec).toBeEqualish([3,4,5]);
      });
      
      it("should modify dest vector", function() {
        expect(dest).toBeEqualish([4,6,8]);
      });
    });
  });
  
  describe("subtract", function() {
    beforeEach(function() { vec = vec3.create([1,2,3]); });
    
    it('should modify original vector if dest not given', function() {
      vec3.subtract(vec, [3, 4, 5]);
      expect(vec).toBeEqualish([-2,-2,-2]);
    });
    
    it("should modify original vector if dest is original vector", function() {
      vec3.subtract(vec, [3,4,5], vec);
      expect(vec).toBeEqualish([-2,-2,-2]);
    });
    
    describe("if dest vector given", function() {
      beforeEach(function() { vec3.subtract(vec, [3,4,5], dest = vec3.create()); });
      
      it("should not modify original vector", function() { expect(vec).toBeEqualish([3,4,5]); });
      it("should modify dest vector", function() { expect(dest).toBeEqualish([-2,-2,-2]); });
    });
  });
  
  describe("negate", function() {
    beforeEach(function() { vec = vec3.create([1,2,3]); });
    
    it("should modify original vector if dest not given", function() {
      vec3.negate(vec);
      expect(vec).toBeEqualish([-1,-2,-3]);
    });
    
    it("should modify original vector if dest is original vector", function() {
      vec3.negate(vec, vec);
      expect(vec).toBeEqualish([-1,-2,-3]);
    });
    
    describe("if dest vector given", function() {
      beforeEach(function() { vec3.negate(vec, dest = vec3.create()); });
      
      it("should not modify original vector", function() { expect(vec).toBeEqualish([1,2,3]); });
      it("should modify dest vector", function() { expect(dest).toBeEqualish([-1,-2,-3]); });
    });
  });
  
  describe("scale", function() {
    beforeEach(function() { vec = vec3.create([1,2,3]); });
    
    it("should modify original vector if dest not given", function() {
      vec3.scale(vec, 2);
      expect(vec).toBeEqualish([2,4,6]);
    });
    
    it("should modify original vector if dest is original vector", function() {
      vec3.scale(vec, 2, vec);
      expect(vec).toBeEqualish([2,4,6]);
    });
    
    describe("if dest vector given", function() {
      beforeEach(function() { vec3.scale(vec, 2, dest = vec3.create()); });
      
      it("should not modify original vector", function() { expect(vec).toBeEqualish([1,2,3]); });
      it("should modify dest vector", function() { expect(dest).toBeEqualish([2,4,6]); });
    });
  });
  
  describe("normalize", function() {
    var NORMAL = [0.2672612419124244, 0.5345224838248488, 0.8017837257372732];
    beforeEach(function() { vec = vec3.create([1,2,3]); });
    
    it("should return [0,0,0] if vector magnitude is 0", function() {
      expect(vec3.normalize([0,0,0])).toBeEqualish([0,0,0]);
    });
    
    it("should modify original vector if dest not given", function() {
      vec3.normalize(vec);
      expect(vec).toBeEqualish(NORMAL);
    });
    
    it("should modify original vector if dest is original vector", function() {
      vec3.normalize(vec, vec);
      expect(vec).toBeEqualish(NORMAL);
    });
    
    describe("if dest vector is given", function() {
      beforeEach(function() { vec3.normalize(vec, dest = vec3.create()); });
      
      it("should not modify original vector", function() { expect(vec).toBeEqualish([1,2,3]); });
      it("should modify dest vector", function() { expect(dest).toBeEqualish(NORMAL); });
    });
  });
  
  describe("cross", function() {
    var CROSS = [-3, 6, -3];
    beforeEach(function() {
      vec = vec3.create([1,2,3]);
      vec2 = vec3.create([4,5,6]);
    });
    
    it("should modify original vector if dest not given", function() {
      vec3.cross(vec, vec2);
      expect(vec).toBeEqualish(CROSS);
    });
    
    it("should not modify vec2", function() {
      expect(vec2).toBeEqualish([4,5,6]);
    });
    
    it("should modify original mvector if dest is original vector", function() {
      vec3.cross(vec, vec2, vec);
      expect(vec).toBeEqualish(CROSS);
    });
    
    describe("if dest vector is given", function() {
      beforeEach(function() { vec3.cross(vec, vec2, dest = vec3.create()); });
      
      it("should not modify original vector", function() { expect(vec).toBeEqualish([1,2,3]); });
      it("should not modify vec2", function() { expect(vec2).toBeEqualish([4,5,6]); });
      it("should modify dest vector", function() { expect(dest).toBeEqualish(CROSS); });
    });
  });
  
  describe("length", function() {
    beforeEach(function() { vec = vec3.create([1,2,3]); });
    
    it("should return vector magnitude", function() { expect(vec3.length(vec)).toBeEqualish(3.741657); });
  });
});
