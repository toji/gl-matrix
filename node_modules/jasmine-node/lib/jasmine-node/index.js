var fs = require('fs');
var sys = require('sys');
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
require("jasmine-reporters");

var TerminalReporter = require('./reporter').TerminalReporter;

jasmine.loadHelpersInFolder=function(folder, matcher)
{
  var helpers = [];

  if(fs.statSync(folder).isDirectory()) {
    helpers = jasmine.getAllSpecFiles(folder, matcher);
  } else {
    folder = path.dirname(folder);
    helpers = jasmine.getAllSpecFiles(folder, matcher);
  }

  for (var i = 0, len = helpers.length; i < len; ++i)
  {
    var filename = helpers[i];
    var helper= require(filename.replace(/\.*$/, ""));
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

jasmine.executeSpecsInFolder = function(folder, done, isVerbose, showColors, teamcity, matcher, junitreport){
  var fileMatcher = matcher || new RegExp(".(js)$", "i");
  var colors = showColors || false;
  var specs = [];

  if (fs.statSync(folder).isDirectory()) {
    specs = jasmine.getAllSpecFiles(folder, fileMatcher);
  } else {
    specs.push(folder);
  }

  for (var i = 0, len = specs.length; i < len; ++i){
    var filename = specs[i];
    require(filename.replace(/\.\w+$/, ""));
  }

  var jasmineEnv = jasmine.getEnv();
  if(junitreport.report) {
    if(!path.existsSync(junitreport.savePath)) {
      sys.puts('creating junit xml report save path: ' + junitreport.savePath);
      fs.mkdirSync(junitreport.savePath, "0755");
    }
    jasmineEnv.addReporter(new jasmine.JUnitXmlReporter(junitreport.savePath, junitreport.consolidate, junitreport.useDotNotation));
  }

  if(teamcity){
    jasmineEnv.addReporter(new jasmine.TeamcityReporter());
  } else {
    jasmineEnv.addReporter(new TerminalReporter({print:       sys.print,
                                                 verbose:     isVerbose,
                                                 color:       showColors,
                                                 onComplete:  done,
                                                 stackFilter: removeJasmineFrames}));
  }

  jasmineEnv.execute();
};

jasmine.getAllSpecFiles = function(dir, matcher){
  var specs = [];
  if (fs.statSync(dir).isFile() && dir.match(matcher)) {
    specs.push(dir);
  } else {
    var files = fs.readdirSync(dir);
    for (var i = 0, len = files.length; i < len; ++i){
      var filename = dir + '/' + files[i];
        // fs.fstatSync will pass ENOENT from stat(2) up
        // the stack. That's not particularly useful right now,
        // so try and continue...
        try{
          isFile = fs.statSync(filename).isFile();
        }catch (err){
          if(err.code === 'ENOENT'){
            isFile = false;
          }else{
              throw err;
          }
        }
        if (filename.match(matcher) && isFile){
          specs.push(filename);
        }else{
          try{
            isDir = fs.statSync(filename).isDirectory();
          } catch (err) {
            if(err.code === 'ENOENT'){
              isDir = false;
            }else{
              throw err;
            }
          }
          if (isDir){
            var subfiles = this.getAllSpecFiles(filename, matcher);
            subfiles.forEach(function(result){
                specs.push(result);
            });
          }
        }

    }
  }
  return specs;
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
