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

/**
 * @class Quaternion
 * @name quat4
 */
var quat4 = {};

var quat4Identity = new Float32Array([0, 0, 0, 1]);

/**
 * Creates a new identity quat4
 *
 * @returns {quat4} a new quaternion
 */
quat4.create = function() {
    return new Float32Array(quat4Identity);
};

/**
 * Creates a new quat4 initialized with values from an existing quaternion
 *
 * @param {quat4} a quaternion to clone
 * @returns {quat4} a new quaternion
 */
quat4.clone = vec4.clone;

/**
 * Creates a new quat4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat4} a new quaternion
 */
quat4.fromValues = vec4.fromValues;

/**
 * Copy the values from one quat4 to another
 *
 * @param {quat4} out the receiving quaternion
 * @param {quat4} a the source quaternion
 * @returns {quat4} out
 */
quat4.copy = vec4.copy;

/**
 * Set the components of a quat4 to the given values
 *
 * @param {quat4} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat4} out
 */
quat4.set = vec4.set;

/**
 * Set a quat4 to the identity quaternion
 *
 * @param {quat4} out the receiving quaternion
 * @returns {quat4} out
 */
quat4.identity = function(out) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
};

/**
 * Adds two quat4's
 *
 * @param {quat4} out the receiving quaternion
 * @param {quat4} a the first operand
 * @param {quat4} b the second operand
 * @returns {quat4} out
 */
quat4.add = vec4.add;

/**
 * Multiplies two quat4's
 *
 * @param {quat4} out the receiving quaternion
 * @param {quat4} a the first operand
 * @param {quat4} b the second operand
 * @returns {quat4} out
 */
quat4.mul = quat4.multiply = function(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        bx = b[0], by = b[1], bz = b[2], bw = b[3];

    out[0] = ax * bw + aw * bx + ay * bz - az * by;
    out[1] = ay * bw + aw * by + az * bx - ax * bz;
    out[2] = az * bw + aw * bz + ax * by - ay * bx;
    out[3] = aw * bw - ax * bx - ay * by - az * bz;
    return out;
};

/**
 * Scales a quat4 by a scalar number
 *
 * @param {quat4} out the receiving vector
 * @param {quat4} a the vector to scale
 * @param {quat4} b amount to scale the vector by
 * @returns {quat4} out
 */
quat4.scale = vec4.scale;

/**
 * Calculates the W component of a quat4 from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat4} out the receiving quaternion
 * @param {quat4} a quat4 to calculate W component of
 * @returns {quat4} out
 */
quat4.calculateW = function (out, a) {
    var x = a[0], y = a[1], z = a[2];

    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = -Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
    return out;
};

/**
 * Caclulates the dot product of two quat4's
 *
 * @param {quat4} a the first operand
 * @param {quat4} b the second operand
 * @returns {Number} dot product of a and b
 */
quat4.dot = vec4.dot;

/**
 * Performs a linear interpolation between two quat4's
 *
 * @param {quat4} out the receiving quaternion
 * @param {quat4} a the first operand
 * @param {quat4} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat4} out
 */
quat4.lerp = vec4.lerp;

/**
 * Performs a spherical linear interpolation between two quat4
 *
 * @param {quat4} out the receiving quaternion
 * @param {quat4} a the first operand
 * @param {quat4} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat4} out
 */
quat4.slerp = function (out, a, b, t) {
    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        bx = b[0], by = b[1], bz = b[2], bw = a[3];

    var cosHalfTheta = ax * bx + ay * by + az * bz + aw * bw,
        halfTheta,
        sinHalfTheta,
        ratioA,
        ratioB;

    if (Math.abs(cosHalfTheta) >= 1.0) {
        if (out !== a) {
            out[0] = ax;
            out[1] = ay;
            out[2] = az;
            out[3] = aw;
        }
        return out;
    }

    halfTheta = Math.acos(cosHalfTheta);
    sinHalfTheta = Math.sqrt(1.0 - cosHalfTheta * cosHalfTheta);

    if (Math.abs(sinHalfTheta) < 0.001) {
        out[0] = (ax * 0.5 + bx * 0.5);
        out[1] = (ay * 0.5 + by * 0.5);
        out[2] = (az * 0.5 + bz * 0.5);
        out[3] = (aw * 0.5 + bw * 0.5);
        return out;
    }

    ratioA = Math.sin((1 - slerp) * halfTheta) / sinHalfTheta;
    ratioB = Math.sin(slerp * halfTheta) / sinHalfTheta;

    out[0] = (ax * ratioA + bx * ratioB);
    out[1] = (ay * ratioA + by * ratioB);
    out[2] = (az * ratioA + bz * ratioB);
    out[3] = (aw * ratioA + bw * ratioB);

    return out;
};

/**
 * Calculates the inverse of a quat4
 *
 * @param {quat4} out the receiving quaternion
 * @param {quat4} a quat4 to calculate inverse of
 * @returns {quat4} out
 */
quat4.inverse = function(out, a) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
        dot = a0*a0 + a1*a1 + a2*a2 + a3*a3,
        invDot = dot ? 1.0/dot : 0;
    
    // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

    out[0] = -a0*invDot;
    out[1] = -a1*invDot;
    out[2] = -a2*invDot;
    out[3] = a3*invDot;
    return out;
};

/**
 * Calculates the conjugate of a quat4
 * If the quaternion is normalized, this function is faster than quat4.inverse and produces the same result.
 *
 * @param {quat4} out the receiving quaternion
 * @param {quat4} a quat4 to calculate conjugate of
 * @returns {quat4} out
 */
quat4.conjugate = function (out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = a[3];
    return out;
};

/**
 * Caclulates the length of a quat4
 *
 * @param {quat4} a vector to calculate length of
 * @returns {Number} length of a
 */
quat4.len = quat4.length = vec4.length;

/**
 * Caclulates the squared length of a quat4
 *
 * @param {quat4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
quat4.sqrLen = quat4.squaredLength = vec4,squaredLength;

/**
 * Normalize a quat4
 *
 * @param {quat4} out the receiving quaternion
 * @param {quat4} a quaternion to normalize
 * @returns {quat4} out
 */
quat4.normalize = vec4.normalize;

/**
 * Returns a string representation of a quatenion
 *
 * @param {quat4} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */
quat4.str = function (a) {
    return 'quat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
};

exports.quat4 = quat4;