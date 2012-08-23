(function() {
    "use strict";

    /**
     * @class 2 Dimensional Vector
     * @name vec2
     */
    var vec2 = {};
     
    /**
     * Creates a new, empty vec2
     *
     * @returns {vec2} a new 2D vector
     */
    vec2.create = function() {
        return new Float32Array(2);
    };

    /**
     * Adds two vec2's
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
     * Subtracts two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */
    vec2.sub = vec2.subtract = function(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        return out;
    };

    /**
     * Multiplies two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */
    vec2.mul = vec2.multiply = function(out, a, b) {
        out[0] = a[0] * b[0];
        out[1] = a[1] * b[1];
        return out;
    };

    /**
     * Divides two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */
    vec2.div = vec2.divide = function(out, a, b) {
        out[0] = a[0] / b[0];
        out[1] = a[1] / b[1];
        return out;
    };

    /**
     * Scales a vec2 by a scalar number
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
    vec2.dist = vec2.distance = function(a, b) {
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
    vec2.sqrDist = vec2.squaredDistance = function(a, b) {
        var x = b[0] - a[0],
            y = b[1] - a[1];
        return x*x + y*y;
    };

    /**
     * Caclulates the length of a vec2
     *
     * @param {vec2} vec vector to calculate length of
     * @returns {Number} length of vec
     */
    vec2.len = vec2.length = function (a) {
        var x = a[0],
            y = a[1];
        return Math.sqrt(x*x + y*y);
    };

    /**
     * Caclulates the squared length of a vec2
     *
     * @param {vec2} vec vector to calculate squared length of
     * @returns {Number} squared Length of vec
     */
    vec2.sqrLen = vec2.squaredLength = function (a) {
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
     * @returns {Number} dot product of a and b
     */
    vec2.dot = function (a, b) {
        return a[0] * b[0] + a[1] * b[1];
    };

    /**
     * Computes the cross product of two vec2's
     * Note that the cross product must by definition produce a 3D vector
     *
     * @param {vec3} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec3} out
     */
    vec2.cross = function(out, a, b) {
        var z = a[0] * b[1] - a[1] * b[0];
        out[0] = out[1] = 0;
        out[2] = z;
        return out;
    };

    /**
     * Performs a linear interpolation between two vec2's
     *
     * @param {vec3} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @param {Number} t interpolation amount between the two inputs
     * @returns {vec2} dest if specified, vecA otherwise
     */
    vec2.lerp = function (out, a, b, t) {
        var ax = a[0],
            ay = a[1];
        out[0] = ax + t * (b[0] - ax);
        out[1] = ay + t * (b[1] - ay);
        return out;
    };

    /**
     * Returns a string representation of a vector
     *
     * @param {vec2} vec Vector to represent as a string
     * @returns {String} String representation of vec
     */
    vec2.str = function (a) {
        return 'vec2(' + a[0] + ', ' + a[1] + ')';
    };

    window.vec2 = vec2;
})();
