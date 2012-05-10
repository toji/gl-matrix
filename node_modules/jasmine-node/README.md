jasmine-node
======

[![Build Status](https://secure.travis-ci.org/spaghetticode/jasmine-node.png)](http://travis-ci.org/spaghetticode/jasmine-node)

This node.js module makes the wonderful Pivotal Lab's jasmine
(http://github.com/pivotal/jasmine) spec framework available in
node.js.

install
------
    npm install jasmine-node -g

usage
------

Write the specifications for your code in *.js and *.coffee files in the
spec/ directory (note: your specification files must end with either
.spec.js or .spec.coffee; otherwise jasmine-node won't find them!). You
can use sub-directories to better organise your specs.

If you have installed the npm package, you can run it with:

    jasmine-node

If you aren't using npm, you should add `pwd`/lib to the $NODE_PATH
environment variable, then run:

    node lib/jasmine-node/cli.js


You can supply the following arguments:

  * <code>--autotest</code>, provides automatic execution of specs after
    each changes
  * <code>--coffee</code>, allow execution of .coffee specs
  * <code>--color</code>, indicates spec output should uses color to
indicates passing (green) or failing (red) specs
  * <code>--noColor</code>, do not use color in the output
  * <code>--verbose</code>, verbose output as the specs are run
  * <code>--junitreport</code>, export tests results as junitreport xml format'

Checkout spec/SampleSpecs.js to see how to use it.

async tests
-----------

jasmine-node includes an alternate syntax for writing asynchronous tests. Accepting
a done callback in the specification will trigger jasmine-node to run the test
asynchronously waiting until the done() callback is called.

```javascript
    it("should respond with hello world", function(done) {
      request("http://localhost:3000/hello", function(error, response, body){
        expect(body).toEqual("hello world");
        done();
      });
    });
```

An asynchronous test will fail after 5000 ms if done() is not called. This timeout
can be changed by setting jasmine.DEFAULT_TIMEOUT_INTERVAL or by passing a timeout
interval in the specification.

    it("should respond with hello world", function(done) {
      request("http://localhost:3000/hello", function(error, response, body){
        done();
      }, 250);  // timeout after 250 ms
    });

development
-----------
Install the dependent packages by running:

    npm install

Run the specs before you send your pull request:

    scripts/specs

or

    scripts/specs --verbose
