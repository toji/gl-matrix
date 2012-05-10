exports.executeJsRunner = function(specCollection, done, jasmineEnv) {
  var specs,
      specLoader = require('./requirejs-spec-loader'),
      requirejs = require('requirejs'),
      vm = require('vm'),
      fs = require('fs'),
      template = fs.readFileSync(__dirname + '/requirejs-wrapper-template.js', 'utf8'),
      buildNewContext = function(spec){
        var context = {
          describe: describe,
          it: it,
          xdescribe: xdescribe,
          xit: xit,
          beforeEach: beforeEach,
          spyOn: spyOn,
          waitsFor: waitsFor,
          runs: runs,
          jasmine: jasmine,
          expect: expect,
          require: require,
          console: console,
          process: process,
          module: module,
          specLoader: specLoader,
          __dirname: spec.directory(),
          __filename: spec.path()
        };

        context.global = context;

        return context;
      },
      buildRelativeDirName = function(dir){
        var retVal = "",
            thisDir = process.cwd(),
            toDir = dir.split('/'),
            index = 0,
            colonMatches = __dirname.match(/^.:/);

        for(var i = 0; i < (colonMatches && colonMatches.length) || 0; i++){
          thisDir = thisDir.replace(colonMatches[i], '\\' + colonMatches[i].substring(0,1));
        }

        thisDir = thisDir.replace(/\\/g, '/').split('/');

        for(; index < thisDir.length || index < toDir.length; index++) {
          if(thisDir[index] != toDir[index]){
            for(var i = index; i < thisDir.length-1; i++){
              retVal += '../';
            }

            for(var i = index; i < toDir.length; i++){
              retVal += toDir[i] + '/';
            }

            break;
          }
        }

        return retVal.trim('/');
      };

  specCollection.getSpecs().forEach(function(s){
    var script = fs.readFileSync(s.path(), 'utf8'),
        dir = s.directory(),
        colonMatches = dir.match(/.:/),
        wrappedScript;

    for(var i = 0; i < (colonMatches && colonMatches.length) || 0; i++){
      dir = dir.replace(colonMatches[i], '/' + colonMatches[i].substring(0,1));
    }

    wrappedScript = template.replace(/#REPLACE URL#/, buildRelativeDirName(dir))
                            .replace(/#REPLACE TEST SCRIPT#/, script);

    vm.runInNewContext(wrappedScript, buildNewContext(s), s.path());
  });

  specLoader.executeWhenAllSpecsAreComplete(jasmineEnv);
};
