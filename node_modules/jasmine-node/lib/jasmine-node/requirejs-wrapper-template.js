var test = function(require, define, undefined) { #REPLACE TEST SCRIPT# 
};

var requirejsOrig = require('requirejs'),
    ostring = Object.prototype.toString,
    path = require('path'),
    baseUrl = '#REPLACE URL#',
    isArray = function(it){
      return ostring.call(it) === '[object Array]';
    },
    isFunction = function(it){
      return ostring.call(it) === '[object Function]';
    },
    requirejs = function(deps, callback){
      var retVal;

      if(!isArray(deps) && typeof deps !== 'string'){
        if(isArray(callback)){
          retVal = requirejsOrig(deps, callback, arguments[2]);
        } else {
          retVal = requirejsOrig(deps, [], callback);
        }
      } else {
        retVal = requirejsOrig(deps, callback);
      }

      return retVal;
    };

requirejsOrig.config({
 baseUrl: baseUrl,
 nodeRequire: require
});

for(var key in requirejsOrig) {
  requirejs[key] = requirejsOrig[key];
}

requirejs.config = function(config){
  var alteredConfig = {};

  for(var key in config) {
    alteredConfig[key] = config[key];
  }

  if(alteredConfig.baseUrl){
    var base = baseUrl.replace(/\\/g, '/'),
        splitUrl = alteredConfig.baseUrl.replace(/\\/g, '/').split('/'),
        index = 0;

    for(; index < splitUrl.length; index++){
      if(splitUrl[index] === '..'){
        base = path.dirname(base);
      } else {
        base += '/' + splitUrl[index];
      }
    }

    alteredConfig.baseUrl = base;
  }

  return requirejsOrig.config(alteredConfig);
};

test(requirejs, requirejs.define);
