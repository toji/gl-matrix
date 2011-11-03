describe('jasmine-node-uber-nested', function(){
  it('should pass', function(){
    expect(1+2).toEqual(3);
  });

  describe('failure', function(){
    it('should report failure (THIS IS EXPECTED)', function(){
      expect(true).toBeFalsy();
    });
  });
});
