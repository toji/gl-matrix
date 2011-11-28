glMatrix = require("gl-matrix");

beforeEach(function() {
  // reset array type to default in case a test changed it
  determineMatrixArrayType();
});

// import the specs (see Rakefile for why)
var specs = jasmine.getAllSpecFiles("spec/javascripts", /_spec\.js$/);
for (i = 0; i < specs.length; i++)
  require(specs[i]);
