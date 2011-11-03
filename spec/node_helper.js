glMatrix = require("gl-matrix");

// exports from glMatrix are expected to be global
var i;
for (i in glMatrix)
  global[i] = glMatrix[i];

// import the specs (see Rakefile for why)
var specs = jasmine.getAllSpecFiles("spec/javascripts", /_spec\.js$/);
for (i = 0; i < specs.length; i++)
  require(specs[i]);
