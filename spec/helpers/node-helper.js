if (typeof(exports) !== 'undefined') {
  var glm = require("../../lib/gl-matrix");
  for (var ns in glm) {
    global[ns] = glm[ns];
  }
}
