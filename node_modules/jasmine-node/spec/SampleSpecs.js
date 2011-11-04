describe('jasmine-node', function(){

  it('should pass', function(){
    expect(1+2).toEqual(3);
  });

  it('shows asynchronous test', function(){
    setTimeout(function(){
      expect('second').toEqual('second');
      asyncSpecDone();
    }, 1);
    expect('first').toEqual('first');
    asyncSpecWait();
  });
});
