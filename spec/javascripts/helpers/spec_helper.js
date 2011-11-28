beforeEach(function() {
  this.addMatchers({
    /*
      Returns true if `actual` has the same length as `expected`, and
      if each element of both arrays is within 0.000001 of each other.
      This is a way to check for "equal enough" conditions, as a way
      of working around floating point imprecision.
    */
    toBeEqualish: function(expected) {
      if (this.actual.length != expected.length) return false;
      for (var i = 0; i < this.actual.length; i++)
        if (Math.abs(this.actual[i]) - Math.abs(expected[i]) < 0.000001)
          return true;
      return false;
    }
  });
});
