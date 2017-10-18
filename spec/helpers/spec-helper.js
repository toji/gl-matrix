const EPSILON = 0.00001;
const assert = require('assert');


global.expect = function(e) {
    return {
        toBe: function(a) {
            assert.strictEqual(e, a);
        },
        toEqual: function(a) {
            assert.strictEqual(e,a);
        },
        toBeDefined: function() {
            assert.notStrictEqual(w, undefined);
        },
        toBeTruthy: function() {
            assert(e);
        },
        toBeFalsy: function() {
            assert(!e);
        },
        toBeNull: function() {
            assert.strictEqual(e, null);
        },
        toBeCloseTo: function(a, p) {
            return Math.abs(e - a) < (Math.pow(10, -p) / 2);
        },
        not: {
            toBe: function(a) {
                assert.notStrictEqual(e, a)
            },
        },
        toBeGreaterThan: function(a) {
            assert(e > a);
        },
        toBeLessThan: function(a) {
            assert(e < a);
        },
        /*
           Returns true if `actual` has the same length as `expected`, and
           if each element of both arrays is within 0.000001 of each other.
           This is a way to check for "equal enough" conditions, as a way
           of working around floating point imprecision.
         */
        toBeEqualish: function(expected) {

            if (typeof(e) == 'number')
                return assert(Math.abs(e - expected) < EPSILON);

            if (e.length != expected.length)
                return assert.fail(e.length, expected.length);

            for (let i = 0; i < e.length; i++) {
                if (isNaN(e[i]) !== isNaN(expected[i]))
                    return assert.fail(isNaN(e[i]), isNaN(expected[i]));
                if (Math.abs(e[i] - expected[i]) >= EPSILON)
                    return assert.fail(Math.abs(e[i] - expected[i]))
            }
            return true;
        }
    }
};
