if (typeof(exports) !== 'undefined') {
  var glm;
  try {
    glm = require("../../tmp/coverage/manifest");
  } catch(e) {
    if (e.code === "MODULE_NOT_FOUND" ||
        e.toString().indexOf("Cannot find module") !== -1)
      glm = require("../../dist/gl-matrix");
    else throw e;
  }
  for (var ns in glm) {
    global[ns] = glm[ns];
  }
}
