var walkdir = require('walkdir');
var path = require('path');
var fs = require('fs');
var specs = [];

var createSpecObj = function(path, root) {
  return {
    path: function() { return path; },
    relativePath: function() { return path.replace(root, '').replace(/^[\/\\]/, '').replace(/\\/g, '/'); },
    directory: function() { return path.replace(/[\/\\][\s\w\.-]*$/, "").replace(/\\/g, '/'); },
    relativeDirectory: function() { return relativePath().replace(/[\/\\][\s\w\.-]*$/, "").replace(/\\/g, '/'); },
    filename: function() { return path.replace(/^.*[\\\/]/, ''); }
  };
};

exports.load = function(loadpath, matcher) {
  var wannaBeSpecs = walkdir.sync(loadpath)

  for (var i = 0; i < wannaBeSpecs.length; i++) {
    var file = wannaBeSpecs[i];
    try {
      if (fs.statSync(file).isFile()) {
        if (!/.*node_modules.*/.test(file) && matcher.test(path.basename(file))) {
          specs.push(createSpecObj(file));
        }
      }
    } catch(e) {
      // nothing to do here
    }
  }
};

exports.getSpecs = function() {
  return specs;
};
