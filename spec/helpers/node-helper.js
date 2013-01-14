if (typeof(exports) !== 'undefined') {
  var glm = require("../../dist/gl-matrix");
  for (var ns in glm) {
    global[ns] = glm[ns];
  }
}
