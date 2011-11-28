(function(){

  var objectToString = Object.prototype.toString;
  var PRIMITIVE_TYPES = [String, Number, RegExp, Boolean, Date];

  beforeEach(function(){
    this.addMatchers({
      toHaveProperty: function(prop) {
        try {
          return prop in this.actual;
        }
        catch (e) {
          return false;
        }
      }
    });
  });

})();
