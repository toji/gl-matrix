jasmine-node
======

This node.js module makes the wonderful Pivotal Lab's jasmine
(http://github.com/pivotal/jasmine) spec framework available in
node.js.

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

  * <code>--coffee</code>, allow execution of .coffee specs
  * <code>--color</code>, indicates spec output should uses color to
indicates passing (green) or failing (red) specs
  * <code>--noColor</code>, do not use color in the output
  * <code>--verbose</code>, verbose output as the specs are run
  * <code>--junitreport</code>, export tests results as junitreport xml format'

Checkout spec/SampleSpecs.js to see how to use it.
