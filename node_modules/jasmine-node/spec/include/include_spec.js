var Test = require('test');

describe('test', function(){
  it('constructor should return "Hello world"', function(){
    new Test().should == "Hello world";
  });
});