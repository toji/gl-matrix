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

(function() {
    "use strict";

    /**
     * @class 2x2 Matrix
     * @name mat2
     */
    var mat2 = {};

    var mat2Identity = new Float32Array([
        1, 0,
        0, 1
    ]);

    /**
     * Creates a new identity mat2
     *
     * @returns {mat2} a new 2D vector
     */
    mat2.create = function() {
        return new Float32Array(mat2Identity);
    };

    /**
     * Creates a new mat2 initialized with values from an existing vector
     *
     * @param {mat2} a matrix to clone
     * @returns {mat2} a new 2x2 matrix
     */
    mat2.clone = function(a) {
        var out = new Float32Array(4);
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        return out;
    };

    /**
     * Copy the values from one mat2 to another
     *
     * @param {mat2} out the receiving matrix
     * @param {mat2} a the source matrix
     * @returns {mat2} out
     */
    mat2.copy = function(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        return out;
    };

    /**
     * Set a mat2 to the identity matrix
     *
     * @param {mat2} out the receiving matrix
     * @returns {mat2} out
     */
    mat2.identity = function(out) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 1;
        return out;
    };

    exports.mat2 = mat2;
})();