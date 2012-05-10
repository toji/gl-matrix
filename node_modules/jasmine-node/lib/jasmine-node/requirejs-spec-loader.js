var _ = require('underscore'),
    registry = {},
    timeout = 120000,
    now = function() {
      return new Date().getTime();
    },
    loader = {
      register: function(name) {
        registry[name] = false;
      },
      completed: function(name){
        registry[name] = true;
      }
    },
    specLoader = {
      defineLoader: function(requirejs) {
        requirejs.define('jasmine-spec-loader', function() {
          return loader;
        });
      },
      executeWhenAllSpecsAreComplete: function(jasmineEnv) {
        var allComplete = false,
            wait = now(),
            timeoutCallback = function() {
              allComplete = _.all(registry, function(value) {
                return value;
              });

              if(!allComplete && wait + timeout > now()) {
                setTimeout(timeoutCallback, 100);
              } else if (!allComplete) {
                console.log('Failed to load all specs within timeout window.');
                process.exit(-1);
              } else {
                jasmineEnv.execute();
              }
            };

        setTimeout(timeoutCallback, 100);
      },
      setTimeoutInterval: function(value) {
        timeout = value;
      },
    };

for(var key in specLoader) {
  exports[key] = specLoader[key];
}
