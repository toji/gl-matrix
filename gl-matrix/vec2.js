(function() {
    "use strict";

    /**
     * @class 2 Dimensional Vector
     * @name vec2
     */
    var vec2 = {};
     
    /**
     * Creates a new vec2, initializing it from vec if vec
     * is given.
     *
     * @param {vec2} [vec] the vector's initial contents
     * @returns {vec2} a new 2D vector
     */
    vec2.create = function() {
        return new Float32Array(2);
    };

    /**
     * Adds two vec2's.
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */
    vec2.add = function(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        return out;
    };
    
    /**
     * Subtracts two vec2's.
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */
    vec2.subtract = function(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        return out;
    };

    /**
     * Multiplies two vec2's.
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */
    vec2.multiply = function(out, a, b) {
        out[0] = a[0] * b[0];
        out[1] = a[1] * b[1];
        return out;
    };

    /**
     * Divides two vec2's.
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */
    vec2.divide = function(out, a, b) {
        out[0] = a[0] / b[0];
        out[1] = a[1] / b[1];
        return out;
    };

    /**
     * Scales a vec2 by a scalar number.
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the vector to scale
     * @param {vec2} b amount to scale the vector by
     * @returns {vec2} out
     */
    vec2.scale = function(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        return out;
    };

    /**
     * Calculates the euclidian distance between two vec2's
     *
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {Number} distance between a and b
     */
    vec2.distance = function(a, b) {
        var x = b[0] - a[0],
            y = b[1] - a[1];
        return Math.sqrt(x*x + y*y);
    };

    /**
     * Calculates the squared euclidian distance between two vec2's
     *
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {Number} squared distance between a and b
     */
    vec2.squaredDistance = function(a, b) {
        var x = b[0] - a[0],
            y = b[1] - a[1];
        return x*x + y*y;
    };

    /**
     * Caclulates the length of a vec2
     *
     * @param {vec2} vec vector to calculate length of
     *
     * @returns {Number} length of vec
     */
    vec2.length = function (a) {
        var x = a[0],
            y = a[1];
        return Math.sqrt(x*x + y*y);
    };

    /**
     * Caclulates the squared length of a vec2
     *
     * @param {vec2} vec vector to calculate squared length of
     *
     * @returns {Number} squared Length of vec
     */
    vec2.squaredLength = function (a) {
        var x = a[0],
            y = a[1];
        return x*x + y*y;
    };

    /**
     * Negates the components of a vec2
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a vector to negate
     * @returns {vec2} out
     */
    vec2.negate = function(out, a) {
        out[0] = -a[0];
        out[1] = -a[1];
        return out;
    };

    /**
     * Normalize a vec2
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a vector to negate
     * @returns {vec2} out
     */
    vec2.normalize = function(out, a) {
        var len = a[0] * a[0] + a[1] * a[1];
        if (len > 0) {
            len = Math.sqrt(len);
            out[0] = a[0] / len;
            out[1] = a[1] / len;
        }
        return out;
    };

    /**
     * Caclulates the dot product of two vec2's
     *
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     *
     * @returns {Number} dot product of a and b
     */
    vec2.dot = function (a, b) {
        return a[0] * b[0] + a[1] * b[1];
    };

    window.vec2 = vec2;
})();
