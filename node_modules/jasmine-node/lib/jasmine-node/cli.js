var jasmine = require('./index');
var util,
    Path= require('path');
try {
  util = require('util')
} catch(e) {
  util = require('sys')
}

var helperCollection = require('./spec-collection');

var specFolder = null;

for (var key in jasmine)
  global[key] = jasmine[key];

var isVerbose = false;
var showColors = true;
var teamcity = process.env.TEAMCITY_PROJECT_NAME || false;
var useRequireJs = false;
var extentions = "js";
var match = '.';
var matchall = false;
var autotest = false;
var useHelpers = true;
var forceExit = false;

var junitreport = {
  report: false,
  savePath : "./reports/",
  useDotNotation: true,
  consolidate: true
}

var args = process.argv.slice(2);

while(args.length) {
  var arg = args.shift();

  switch(arg)
  {
    case '--color':
      showColors = true;
      break;
    case '--noColor':
    case '--nocolor':
      showColors = false;
      break;
    case '--verbose':
      isVerbose = true;
      break;
    case '--coffee':
      require('coffee-script');
      extentions = "js|coffee";
      break;
    case '-m':
    case '--match':
      match = args.shift();
      break;
    case '--matchall':
      matchall = true;
      break;
    case '--junitreport':
        junitreport.report = true;
        break;
    case '--output':
        junitreport.savePath = args.shift();
        break;
    case '--teamcity':
        teamcity = true;
        break;
    case '--runWithRequireJs':
        useRequireJs = true;
        break;
    case '--nohelpers':
        useHelpers = false;
        break;
    case '--test-dir':
        var dir = args.shift();

        if(!Path.existsSync(dir))
          throw new Error("Test root path '" + dir + "' doesn't exist!");

        specFolder = dir; // NOTE: Does not look from current working directory.
        break;
    case '--autotest':
        autotest = true;
        break;
    case '--forceexit':
        forceExit = true;
        break;
    case '-h':
        help();
    default:
      if (arg.match(/^--/)) help();
      if (arg.match(/^\/.*/)) {
        specFolder = arg;
      } else {
        specFolder = Path.join(process.cwd(), arg);
      }
      break;
  }
}

if (!specFolder) {
  help();
}

if (autotest) {
  require('./autotest').start(specFolder,
                            new RegExp(".+\\.(" + extentions + ")$", "i"));
  return;
}

var exitCode = 0;

process.on("exit", onExit);

function onExit() {
  process.removeListener("exit", onExit);
  process.exit(exitCode);
}

var onComplete = function(runner, log) {
  util.print('\n');
  if (runner.results().failedCount == 0) {
    exitCode = 0;
  } else {
    exitCode = 1;
  }
  if (forceExit) {
    process.exit(exitCode);
  }
};

if(useHelpers){
  jasmine.loadHelpersInFolder(specFolder,
                              new RegExp("helpers?\\.(" + extentions + ")$", 'i'));
}

var regExpSpec = new RegExp(match + (matchall ? "" : "spec\\.") + "(" + extentions + ")$", 'i')

jasmine.executeSpecsInFolder(specFolder,
                             onComplete,
                             isVerbose,
                             showColors,
                             teamcity,
                             useRequireJs,
                             regExpSpec,
                             junitreport);

function help(){
  util.print([
    'USAGE: jasmine-node [--color|--noColor] [--verbose] [--coffee] directory'
  , ''
  , 'Options:'
  , '  --autotest         - rerun automatically the specs when a file changes'
  , '  --color            - use color coding for output'
  , '  --noColor          - do not use color coding for output'
  , '  -m, --match REGEXP - load only specs containing "REGEXPspec"'
  , '  --matchall         - relax requirement of "spec" in spec file names'
  , '  --verbose          - print extra information per each test run'
  , '  --coffee           - load coffee-script which allows execution .coffee files'
  , '  --junitreport      - export tests results as junitreport xml format'
  , '  --output           - defines the output folder for junitreport files'
  , '  --teamcity         - converts all console output to teamcity custom test runner commands. (Normally auto detected.)'
  , '  --runWithRequireJs - loads all specs using requirejs instead of node\'s native require method'
  , '  --test-dir         - the absolute root directory path where tests are located'
  , '  --nohelpers        - does not load helpers.'
  , '  --forceexit        - force exit once tests complete.'
  , '  -h, --help         - display this help and exit'
  , ''
  ].join("\n"));

  process.exit(-1);
}
