var fs = require('fs');
var util;
try {
  util = require('util')
} catch(e) {
  util = require('sys')
}

var path = require('path');

var filename = __dirname + '/jasmine-2.0.0.rc1.js';
global.window = {
  setTimeout: setTimeout,
  clearTimeout: clearTimeout,
  setInterval: setInterval,
  clearInterval: clearInterval
};

var src = fs.readFileSync(filename);
var jasmine;
var minorVersion = process.version.match(/\d\.(\d)\.\d/)[1];
switch (minorVersion) {
  case "1":
  case "2":
    jasmine = process.compile(src + '\njasmine;', filename);
    break;
  default:
    jasmine = require('vm').runInThisContext(src + "\njasmine;", filename);
}

delete global.window;
require("./async-callback");
require("jasmine-reporters");

var jasmineNode = require('./reporter').jasmineNode;

jasmine.loadHelpersInFolder=function(folder, matcher)
{
  var helpers = [],
      helperCollection = require('./spec-collection');

  helperCollection.load(folder, matcher);
  helpers = helperCollection.getSpecs();

  for (var i = 0, len = helpers.length; i < len; ++i)
  {
    var file = helpers[i].path();
    var helper= require(file.replace(/\.*$/, ""));
    for (var key in helper)
      global[key]= helper[key];
  }
};

function removeJasmineFrames(text) {
  var lines = [];
  text.split(/\n/).forEach(function(line){
    if (line.indexOf(filename) == -1) {
      lines.push(line);
    }
  });
  return lines.join('\n');
}

jasmine.executeSpecsInFolder = function(folder,
                                        done,
                                        isVerbose,
                                        showColors,
                                        teamcity,
                                        useRequireJs,
                                        matcher,
                                        junitreport){
  var fileMatcher = matcher || new RegExp(".(js)$", "i"),
      colors = showColors || false,
      specs = require('./spec-collection'),
      jasmineEnv = jasmine.getEnv();

  specs.load(folder, fileMatcher);

  if(junitreport && junitreport.report) {
    if(!path.existsSync(junitreport.savePath)) {
      util.puts('creating junit xml report save path: ' + junitreport.savePath);
      fs.mkdirSync(junitreport.savePath, "0755");
    }
    jasmineEnv.addReporter(new jasmine.JUnitXmlReporter(junitreport.savePath,
                                                        junitreport.consolidate,
                                                        junitreport.useDotNotation));
  }

  if(teamcity){
    jasmineEnv.addReporter(new jasmineNode.TerminalReporter({print:       util.print,
                                                 color:       false,
                                                 onComplete:  done,
                                                 stackFilter: removeJasmineFrames}));
  } else if(isVerbose) {
    jasmineEnv.addReporter(new jasmineNode.TerminalVerboseReporter({ print:       util.print,
                                                         color:       showColors,
                                                         onComplete:  done,
                                                         stackFilter: removeJasmineFrames}));
  } else {
    jasmineEnv.addReporter(new jasmineNode.TerminalReporter({print:       util.print,
                                                 color:       showColors,
                                                 onComplete:  done,
                                                 stackFilter: removeJasmineFrames}));
  }

  if (useRequireJs) {
    require('./requirejs-runner').executeJsRunner(specs, done, jasmineEnv);
  } else {
    var specsList = specs.getSpecs();

    for (var i = 0, len = specsList.length; i < len; ++i) {
      var filename = specsList[i];
      require(filename.path().replace(/\.\w+$/, ""));
    }

    jasmineEnv.execute();
  }
};

function now(){
  return new Date().getTime();
}

jasmine.asyncSpecWait = function(){
  var wait = jasmine.asyncSpecWait;
  wait.start = now();
  wait.done = false;
  (function innerWait(){
    waits(10);
    runs(function() {
      if (wait.start + wait.timeout < now()) {
        expect('timeout waiting for spec').toBeNull();
      } else if (wait.done) {
        wait.done = false;
      } else {
        innerWait();
      }
    });
  })();
};
jasmine.asyncSpecWait.timeout = 4 * 1000;
jasmine.asyncSpecDone = function(){
  jasmine.asyncSpecWait.done = true;
};

for ( var key in jasmine) {
  exports[key] = jasmine[key];
}
