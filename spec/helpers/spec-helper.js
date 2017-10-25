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
            assert.notStrictEqual(e, undefined);
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
        not: {
            toBe: function(a) {
                assert.notStrictEqual(e, a);
            },
            
            toBeEqualish: function(a) {
                if (typeof(e) == 'number')
                    assert(Math.abs(e - a) >= EPSILON);

                if (e.length != a.length)
                    return;
                for (let i = 0; i < e.length; i++) {
                    if (isNaN(e[i]) !== isNaN(a[i]))
                        return;
                    if (Math.abs(e[i] - a[i]) >= EPSILON)
                        return;
                }
                
                assert.fail(e, a);
            }
            
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
                assert(Math.abs(e - expected) < EPSILON);

            if (e.length != expected.length)
                assert.fail(e.length, expected.length, "length mismatch");


            for (let i = 0; i < e.length; i++) {
                if (isNaN(e[i]) !== isNaN(expected[i]))
                    assert.fail(isNaN(e[i]), isNaN(expected[i]));
                if (Math.abs(e[i] - expected[i]) >= EPSILON)
                    assert.fail(Math.abs(e[i] - expected[i]));
            }
        },
        
        //Dual quaternions are very special & unique snowflakes
        toBeEqualishQuat2: function(expected) {
            let allSignsFlipped = false;
            if (e.length != expected.length)
                assert.fail(e.length, expected.length, "length mismatch");
                
            for (let i = 0; i < e.length; i++) {
                if (isNaN(e[i]) !== isNaN(expected[i]))
                    assert.fail(isNaN(e[i]), isNaN(expected[i]));
                
                if (allSignsFlipped) {
                    if (Math.abs(e[i] - (-expected[i])) >= EPSILON)
                        assert.fail(Math.abs(e[i] - (-expected[i])));
                } else {
                    if (Math.abs(e[i] - expected[i]) >= EPSILON) {
                        allSignsFlipped = true;
                        i = 0;
                    }
                }
            }
        }
    };
};
