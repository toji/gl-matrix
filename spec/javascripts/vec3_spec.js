describe("vec3", function() {
  var vec;

  it("should have length 3", function() { expect(vec3.create().length).toEqual(3); });

  it("should initialize to 0", function() {
    vec = vec3.create();
    expect(vec[0]).toEqual(0);
    expect(vec[1]).toEqual(0);
    expect(vec[2]).toEqual(0);
  });
  
  it("should initialize from a 3-element array", function() {
    vec = vec3.create([1,2,3]);
    expect(vec[0]).toEqual(1);
    expect(vec[1]).toEqual(2);
    expect(vec[2]).toEqual(3);
  });
});
