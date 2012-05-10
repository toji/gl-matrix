if (typeof(require) !== 'undefined')
  glMatrix = require("gl-matrix");

beforeEach(function() {
  // reset array type to default in case a test changed it
  determineMatrixArrayType();
});
