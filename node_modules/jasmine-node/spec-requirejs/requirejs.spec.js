require(['requirejs.sut'], function(sut){
  describe('RequireJs basic tests', function(){
    it('should load sut', function(){
      expect(sut.name).toBe('Subject To Test');
      expect(sut.method(2)).toBe(3);
    });
  });
});
