const EPSILON = 0.00001;

global.expect = function(e) {
    return {
        toBe: function(a) {
            return e === a;
        },
        toEqual: function(a) {
            return e === a;
        },
        toBeDefined: function() {
            return typeof w !== undefined;
        },
        toBeTruthy: function() {
            return e;
        },
        toBeFalsy: function() {
            return !e;
        },
        toBeNull: function() {
            return e === null;
        },
        toBeCloseTo: function(a, p) {
            return Math.abs(e - a) < (Math.pow(10, -p) / 2);
        },
        not: {
            toBe: function(a) {
                return e !== a;
            },
        },
        toBeGreaterThan: function(a) {
            return e > a;
        },
        toBeLessThan: function(a) {
            return e < a;
        },
        /*
          Returns true if `actual` has the same length as `expected`, and
          if each element of both arrays is within 0.000001 of each other.
          This is a way to check for "equal enough" conditions, as a way
          of working around floating point imprecision.
        */
        toBeEqualish: function(expected) {

          if (typeof(e) == 'number')
            return Math.abs(e - expected) < EPSILON;

          if (e.length != expected.length) return false;
          for (let i = 0; i < e.length; i++) {
            if (isNaN(e[i]) !== isNaN(expected[i]))
              return false;
            if (Math.abs(e[i] - expected[i]) >= EPSILON)
              return false;
          }
          return true;
        }
    }
};