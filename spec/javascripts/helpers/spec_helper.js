beforeEach(function() {
  var EPSILON = 0.000001;
  
  this.addMatchers({
    /*
      Returns true if `actual` has the same length as `expected`, and
      if each element of both arrays is within 0.000001 of each other.
      This is a way to check for "equal enough" conditions, as a way
      of working around floating point imprecision.
    */
    toBeEqualish: function(expected) {
      if (typeof(this.actual) == 'number')
        return Math.abs(this.actual) - Math.abs(expected) < EPSILON;
        
      if (this.actual.length != expected.length) return false;
      for (var i = 0; i < this.actual.length; i++)
        if (Math.abs(this.actual[i]) - Math.abs(expected[i]) < EPSILON)
          return true;
      return false;
    }
  });
});
