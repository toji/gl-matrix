describe('plane3', function(){
  var result, out, planeA;

	describe('create', function(){
		beforeEach(function(){ result = plane3.create(); });
		it("should return a 3 element array initialized to [0, 1, 0]", function(){ expect(result.normal).toEqual([0, 1, 0]); });
		it("should return an element initialized to 0", function(){ expect(result.distance).toBe(0); });
	});

	describe('fromValues', function(){
		beforeEach(function(){ result = plane3.fromValues(5, 0, 0, 7); });
		it("should return a vec3 of unit length", function(){ expect(result.normal).toEqual([1, 0, 0]); });
		it("should return the distance passed", function(){ expect(result.distance).toBe(7); });
	});

	describe('fromPoint', function(){
		beforeEach(function(){ result = plane3.fromPoint(0, 1, 0, 2, 5, 0); });
		it("should return a vec3 of unit length", function(){ expect(result.normal).toEqual([0, 1, 0]); });
		it("should return the calculated distance", function(){ expect(result.distance).toBe(5); });
	});

	describe('clone', function(){
		beforeEach(function(){ planeA = plane3.fromValues(0, 1, 0, 7); result = plane3.clone(planeA); });
		it("should return the cloned plane normal", function(){ expect(result.normal).toEqual([0, 1, 0]); });
		it("should return the cloned plane distance", function(){ expect(result.distance).toBe(7); });
	});

	describe('copy', function(){
		beforeEach(function(){ out = plane3.create(); planeA = plane3.fromValues(0, 0, 1, 4); plane3.copy(out, planeA); });
		it("should copy the plane normal in out", function(){ expect(out.normal).toEqual([0, 0, 1]); });
		it("should copy the plane distance in out", function(){ expect(out.distance).toBe(4); });
	});

	describe('set', function(){
		beforeEach(function(){ out = plane3.create(); plane3.set(out, 1, 0, 0, 3); });
		it("should place the normal passed in out", function(){ expect(out.normal).toEqual([1, 0, 0]); });
		it("should palce the distance passed in out", function(){ expect(out.distance).toBe(3); });
	});

	describe('setNormal', function(){
		beforeEach(function(){ out = plane3.create(); plane3.setNormal(out, 0, 0, 1); });
		it("should place the normal passed in out", function(){ expect(out.normal).toEqual([0, 0, 1]); });
	});

	describe('setDistance', function(){
		beforeEach(function(){ out = plane3.create(); plane3.setDistance(out, 12); });
		it("should place the distance passed in out", function(){ expect(out.distance).toBe(12); });
	});

	describe('normalize', function(){
		beforeEach(function(){ 
			out = plane3.create();
			out.normal = [7, 0, 0];
			plane3.normalize(out, out);
		});
		it("should normalized the plane normal and place it in out", function(){ expect(out.normal).toEqual([1, 0, 0]); });
	});

	describe('classifyVec3', function(){
		beforeEach(function(){ planeA = plane3.fromValues(0, 0, 1, 20);	result = plane3.classifyVec3(planeA, [-28, 0, 24]); });
		it("should return the distance from the vec3 point to the plane", function(){ expect(result).toBe(4); });
	});

	describe('classify', function(){
		beforeEach(function(){ planeA = plane3.fromValues(0, 0, 1, 20);	result = plane3.classify(planeA, 10, 0, 11); });
		it("should return the distance from the point to the plane", function(){ expect(result).toBe(-9); });
	});

	describe('str', function(){
		beforeEach(function(){ planeA = plane3.create(); result = plane3.str(planeA); });
		it("should return a string representation of the plane passed", function(){ expect(result).toBe("plane3(0, 1,0, 0)"); });
	});
});
