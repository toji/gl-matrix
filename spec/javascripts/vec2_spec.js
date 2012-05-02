describe("vec2", function() {
  var vec;
  
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
