/*
 * Copyright (c) 2012 Brandon Jones, Colin MacKenzie IV
 *
 * This software is provided 'as-is', without any express or implied
 * warranty. In no event will the authors be held liable for any damages
 * arising from the use of this software.
 *
 * Permission is granted to anyone to use this software for any purpose,
 * including commercial applications, and to alter it and redistribute it
 * freely, subject to the following restrictions:
 *
 *    1. The origin of this software must not be misrepresented; you must not
 *    claim that you wrote the original software. If you use this software
 *    in a product, an acknowledgment in the product documentation would be
 *    appreciated but is not required.
 *
 *    2. Altered source versions must be plainly marked as such, and must not
 *    be misrepresented as being the original software.
 *
 *    3. This notice may not be removed or altered from any source
 *    distribution.
 */

/*
 * Common utilities used throughout the rest of the library
 */

/**
 * Fast way to calculate the inverse square root,
 * see http://jsperf.com/inverse-square-root/5
 *
 * If typed arrays are not available, a slower
 * implementation will be used.
 *
 * @param {Number} n the number
 * @returns {Number} inverse square root
 */
var glm_invsqrt = exports.glm_invsqrt = (function() {
    if (typeof(Float32Array) != 'undefined') {
        var y = new Float32Array(1);
        var i = new Int32Array(y.buffer);

        return function(n) {
            var x2 = n * 0.5;
            y[0] = n;
            i[0] = 0x5f3759df - (i[0] >> 1);
            var n2 = y[0];
            return n2 * (1.5 - (x2 * n2 * n2));
        };
    } else {
        return function(n) { return 1.0 / Math.sqrt(n); };
    }
})();