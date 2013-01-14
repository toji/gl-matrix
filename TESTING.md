Running the test suite
=======================

The unit tests are built upon the following tools:

* Jasmine -- the underlying test suite which executes the test and reports feedback
* node.js -- used for testing at the command line, via the `jasmine-node` package
* selenium -- used for automated in-browser testing via Ruby

If Ruby is installed, you can set up with:

    gem install bundler
    bundle install

...and then test with:

    rake
    
Hint: also look at

    rake --tasks

If Ruby is not installed, you must test with `jasmine-node` directly:

    NODE_PATH=$NODE_PATH:.                       \
      node_modules/jasmine-node/bin/jasmine-node \
      spec/helpers/node_helper.js