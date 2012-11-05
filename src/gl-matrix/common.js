/* Copyright (c) 2012, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

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