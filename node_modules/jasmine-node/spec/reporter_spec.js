var jasmineNode = require(__dirname + "/../lib/jasmine-node/reporter").jasmineNode;

describe('TerminalReporter', function() {
  beforeEach(function() {
    var config = {}
    this.reporter = new jasmineNode.TerminalReporter(config);
  });

  describe("initialize", function() {
    it('initializes print_ from config', function() {
      var config = { print: true };
      this.reporter = new jasmineNode.TerminalReporter(config);
      expect(this.reporter.print_).toBeTruthy();
    });

    it('initializes color_ from config', function() {
      var config = { color: true }
      this.reporter = new jasmineNode.TerminalReporter(config);
      expect(this.reporter.color_).toEqual(jasmineNode.ANSIColors);
    });

    it('sets the started_ flag to false', function() {
      var config = {}
      this.reporter = new jasmineNode.TerminalReporter(config);
      expect(this.reporter.started_).toBeFalsy();
    });

    it('sets the finished_ flag to false', function() {
      var config = {}
      this.reporter = new jasmineNode.TerminalReporter(config);
      expect(this.reporter.finished_).toBeFalsy();
    });

    it('initializes the suites_ array', function() {
      var config = {}
      this.reporter = new jasmineNode.TerminalReporter(config);
      expect(this.reporter.suites_.length).toEqual(0);
    });

    it('initializes the specResults_ to an Object', function() {
      var config = {}
      this.reporter = new jasmineNode.TerminalReporter(config);
      expect(this.reporter.specResults_).toBeDefined();
    });

    it('initializes the failures_ array', function() {
      var config = {}
      this.reporter = new jasmineNode.TerminalReporter(config);
      expect(this.reporter.failures_.length).toEqual(0);
    });

    it('sets the callback_ property to false by default', function() {
      var config = {}
      this.reporter = new jasmineNode.TerminalReporter(config);
      expect(this.reporter.callback_).toEqual(false)
    });

    it('sets the callback_ property to onComplete if supplied', function() {
      var foo = function() { }
      var config = { onComplete: foo }
      this.reporter = new jasmineNode.TerminalReporter(config);
      expect(this.reporter.callback_).toBe(foo)
    });
  });

  describe('when the report runner starts', function() {
    beforeEach(function() {
      this.spy = spyOn(this.reporter, 'printLine_');

      var runner = {
        topLevelSuites: function() {
          var suites = [];
          var suite = { id: 25 };
          suites.push(suite);
          return suites;
        }
      };
      this.reporter.reportRunnerStarting(runner);
    });

    it('sets the started_ field to true', function() {
      expect(this.reporter.started_).toBeTruthy();
    });

    it('sets the startedAt field', function() {
      expect(this.reporter.startedAt instanceof Date).toBeTruthy();
    });

    it('buildes the suites_ collection', function() {
      expect(this.reporter.suites_.length).toEqual(1);
      expect(this.reporter.suites_[0].id).toEqual(25);
    });
  });

  describe('the summarize_ creates suite and spec tree', function() {
    beforeEach(function() {
      this.spec = {
        id: 1,
        description: 'the spec',
        isSuite: false
      }
    });

    it('creates a summary object from spec', function() {
      var result = this.reporter.summarize_(this.spec);

      expect(result.id).toEqual(1);
      expect(result.name).toEqual('the spec');
      expect(result.type).toEqual('spec');
      expect(result.children.length).toEqual(0);
    });

    it('creates a summary object from suite with 1 spec', function() {
      var env = { nextSuiteId: false }
      var suite = new jasmine.Suite(env, 'suite name', undefined, undefined);
      suite.description = 'the suite';
      suite.parentSuite = null;
      suite.children_.push(this.spec);

      var result = this.reporter.summarize_(suite);
      expect(result.name).toEqual('the suite');
      expect(result.type).toEqual('suite');
      expect(result.children.length).toEqual(1);

      var suiteChildSpec = result.children[0];
      expect(suiteChildSpec.id).toEqual(1);
    });
  });

  describe('reportRunnerResults', function() {
    beforeEach(function() {
      this.printLineSpy = spyOn(this.reporter, 'printLine_');
    });

    it('generates the report', function() {
      var failuresSpy = spyOn(this.reporter, 'reportFailures_');
      var printRunnerResultsSpy = spyOn(this.reporter, 'printRunnerResults_').
                          andReturn('this is the runner result');

      var callbackSpy = spyOn(this.reporter, 'callback_');

      var runner = {
        results: function() {
          var result = { failedCount: 0 };
          return result;
        },
        specs: function() { return []; }
      };
      this.reporter.startedAt = new Date();

      this.reporter.reportRunnerResults(runner);

      expect(failuresSpy).toHaveBeenCalled();
      expect(this.printLineSpy).toHaveBeenCalled();
      expect(callbackSpy).toHaveBeenCalled();
    });
  });

  describe('reportSpecResults', function() {
    beforeEach(function() {
      this.printSpy = spyOn(this.reporter, 'print_');
      this.spec = {
        id: 1,
        description: 'the spec',
        isSuite: false,
        results: function() {
          var result = {
            passed: function() { return true; }
          }
          return result;
        }
      }
    });

    it('prints a \'.\' for pass', function() {
      this.reporter.reportSpecResults(this.spec);
      expect(this.printSpy).toHaveBeenCalledWith('.');
    });

    it('prints an \'F\' for failure', function() {
      var addFailureToFailuresSpy = spyOn(this.reporter, 'addFailureToFailures_');
      var results = function() {
        var result = {
          passed: function() { return false; }
        }
        return result;
      }
      this.spec.results = results;

      this.reporter.reportSpecResults(this.spec);

      expect(this.printSpy).toHaveBeenCalledWith('F');
      expect(addFailureToFailuresSpy).toHaveBeenCalled();
    });
  });

  describe('addFailureToFailures', function() {
    it('adds message and stackTrace to failures_', function() {
      var spec = {
        description: 'the spec',
        results: function() {
          var result = {
            items_: function() {
              var theItems = new Array();
              var item = {
                passed_: false,
                message: 'the message',
                trace: {
                  stack: 'the stack'
                }
              }
              theItems.push(item);
              return theItems;
            }.call()
          };
          return result;
        }
      };

      this.reporter.addFailureToFailures_(spec);

      var failures = this.reporter.failures_;
      expect(failures.length).toEqual(1);
      var failure = failures[0];
      expect(failure.spec).toEqual('the spec');
      expect(failure.message).toEqual('the message');
      expect(failure.stackTrace).toEqual('the stack');
    });
  });

  describe('prints the runner results', function() {
    beforeEach(function() {
      this.runner = {
        results: function() {
          var _results = {
            totalCount: 23,
            failedCount: 52
          };
          return _results;
        },
        specs: function() {
          var _specs = new Array();
          _specs.push(1);
          return _specs;
        }
      };
    });

    it('uses the specs\'s length, totalCount and failedCount', function() {
      var message = this.reporter.printRunnerResults_(this.runner);
      expect(message).toEqual('1 test, 23 assertions, 52 failures\n');
    });
  });

  describe('reports failures', function() {
    beforeEach(function() {
      this.printSpy = spyOn(this.reporter, 'print_');
      this.printLineSpy = spyOn(this.reporter, 'printLine_');
    });

    it('does not report anything when there are no failures', function() {
      this.reporter.failures_ = new Array();

      this.reporter.reportFailures_();

      expect(this.printLineSpy).not.toHaveBeenCalled();
    });

    it('prints the failures', function() {
      var failure = {
        spec: 'the spec',
        message: 'the message',
        stackTrace: 'the stackTrace'
      }

      this.reporter.failures_ = new Array();
      this.reporter.failures_.push(failure);

      this.reporter.reportFailures_();

      var generatedOutput =
                 [ [ '\n' ],
                 [ '\n' ],
                 [ '  1) the spec' ],
                 [ '   Message:' ],
                 [ '     the message' ],
                 [ '   Stacktrace:' ] ];

      expect(this.printLineSpy).toHaveBeenCalled();
      expect(this.printLineSpy.argsForCall).toEqual(generatedOutput);

      expect(this.printSpy).toHaveBeenCalled();
      expect(this.printSpy.argsForCall[0]).toEqual(['Failures:']);
      expect(this.printSpy.argsForCall[1]).toEqual(['     the stackTrace']);
    });
  });
});

describe('TerminalVerboseReporter', function() {
  beforeEach(function() {
    var config = {}
    this.verboseReporter = new jasmineNode.TerminalVerboseReporter(config);
    this.addFailureToFailuresSpy = spyOn(this.verboseReporter, 'addFailureToFailures_');
    this.spec = {
      id: 23,
      results: function() {
        return {
          failedCount: 1,
          getItems: function() {
            return ["this is the message"];
          }
        }
      }
    };
  });

  describe('#reportSpecResults', function() {
    it('adds the spec to the failures_', function() {
      this.verboseReporter.reportSpecResults(this.spec);

      expect(this.addFailureToFailuresSpy).toHaveBeenCalledWith(this.spec);
    });

    it('adds a new object to the specResults_', function() {
      this.verboseReporter.reportSpecResults(this.spec);

      expect(this.verboseReporter.specResults_[23].messages).toEqual(['this is the message']);
      expect(this.verboseReporter.specResults_[23].result).toEqual('failed');
    });
  });

  describe('#buildMessagesFromResults_', function() {
    beforeEach(function() {
      this.suite = {
        type: 'suite',
        name: 'a describe block',
        suiteNestingLevel: 0,
        children: []
      };

      this.spec = {
        id: 23,
        type: 'spec',
        name: 'a spec block',
        children: []
      };

      this.verboseReporter.specResults_['23'] = {
        result: 'passed'
      };

    });

    it('does not build anything when the results collection is empty', function() {
      var results = [],
          messages = [];

      this.verboseReporter.buildMessagesFromResults_(messages, results);

      expect(messages.length).toEqual(0);
    });

    it('adds a single suite to the messages', function() {
      var results = [],
          messages = [];

      results.push(this.suite);

      this.verboseReporter.buildMessagesFromResults_(messages, results);

      expect(messages.length).toEqual(2);
      expect(messages[0]).toEqual('');
      expect(messages[1]).toEqual('a describe block');
    });

    it('adds a single spec with success to the messages', function() {
      var results = [],
          messages = [];

      this.passSpy = spyOn(this.verboseReporter.color_, 'pass');

      results.push(this.spec);

      this.verboseReporter.buildMessagesFromResults_(messages, results);

      expect(this.passSpy).toHaveBeenCalled();
      expect(messages.length).toEqual(1);
      expect(messages[0]).toEqual('  a spec block');
    });

    it('adds a single spec with failure to the messages', function() {
      var results = [],
          messages = [];

      this.verboseReporter.specResults_['23'].result = 'failed';

      this.passSpy = spyOn(this.verboseReporter.color_, 'pass');
      this.failSpy = spyOn(this.verboseReporter.color_, 'fail');

      results.push(this.spec);

      this.verboseReporter.buildMessagesFromResults_(messages, results);

      expect(this.failSpy).toHaveBeenCalled();
      expect(this.passSpy).not.toHaveBeenCalled();
    });

    it('adds a suite, a suite and a single spec with success to the messages', function() {
      var results = [],
          messages = [];

      var subSuite = new Object();
      subSuite.type = 'suite';
      subSuite.name = 'a sub describe block';
      subSuite.suiteNestingLevel = 1;
      subSuite.children = [];
      subSuite.children.push(this.spec);

      this.suite.children.push(subSuite);
      results.push(this.suite);

      this.verboseReporter.buildMessagesFromResults_(messages, results);

      expect(messages.length).toEqual(5);
      expect(messages[0]).toEqual('');
      expect(messages[1]).toEqual('a describe block');
      expect(messages[2]).toEqual('');
      expect(messages[3]).toEqual('  a sub describe block');
      expect(messages[4]).toEqual('    a spec block');
    });
  });
});
