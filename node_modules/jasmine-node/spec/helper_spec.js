describe("helper", function() {
  it("should load the helpers", function() {
    var expectation= expect(true);
    
    expect(typeof(expectation.toHaveProperty)).toBe('function');
  });
});