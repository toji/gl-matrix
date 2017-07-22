/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

//TODO: TOTALLY FIX ME!! (Newer function signatures, ES5 modules?)
//Remove every var --> let

var glMatrix = require("./common.js");
var quat = require("./quat.js");
var mat4 = require("./mat4.js");
//NOTE: Quaternions are in XYZW format!
//NOTE: [real dual]
//NOTE: Dual Quaternions need to be normalized, otherwise some functions won't work!
//TODO: slerp and co.
//TODO: rotate(out, a, rad, axis) 
//TODO: quat2.forEach

//LINKS: https://github.com/bobbens/libdq
//https://github.com/markaren/DualQuaternion/tree/master/src/main/java/info/laht/dualquat
//http://wscg.zcu.cz/wscg2012/short/A29-full.pdf
//http://www.xbdev.net/misc_demos/demos/dual_quaternions_beyond/paper.pdf
//https://github.com/mosra/magnum/blob/master/src/Magnum/Math/DualQuaternion.h#L364
//http://mosra.cz/blog/magnum-doc/classMagnum_1_1Math_1_1DualQuaternion.html#a6dcad20c0e9c7c9361b9c291ee42b181
/**
 * @class Dual Quaternion<br>Format: [[real],[dual]]<br>Make sure to have normalized dual quaternions, otherwise the functions may not work as intended.
 * @name quat2
 */
var quat2 = {};

/**
 * Creates a new identity dual quat
 *
 * @returns {quat2} a new dual quaternion [real -> rotation, dual -> translation]
 */
quat2.create = function() {
    var dq = new glMatrix.ARRAY_TYPE(8);
    dq[0] = 0;
    dq[1] = 0;
    dq[2] = 0;
    dq[3] = 1;
    dq[4] = 0;
    dq[5] = 0;
    dq[6] = 0;
    dq[7] = 0;
    return dq;
};

/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat2} a dual quaternion to clone
 * @returns {quat2} new dual quaternion
 * @function
 */
quat2.clone = function(a) {
    var dq = new glMatrix.ARRAY_TYPE(8);
    dq[0] = a[0];
    dq[1] = a[1];
    dq[2] = a[2];
    dq[3] = a[3];
    dq[4] = a[4];
    dq[5] = a[5];
    dq[6] = a[6];
    dq[7] = a[7];
    return dq;
};

/**
 * Creates a new dual quat initialized with the given values
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} new dual quaternion
 * @function
 */
quat2.fromValues = function(x1, y1, z1, w1, x2, y2, z2, w2) {
    var dq = new glMatrix.ARRAY_TYPE(8);
    dq[0] = x1;
    dq[1] = y1;
    dq[2] = z1;
    dq[3] = w1;
    dq[4] = x2;
    dq[5] = y2;
    dq[6] = z2;
    dq[7] = w2;
    return dq;
};

/**
 * Creates a new dual quat from the given values (quat and translation)
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component (translation)
 * @param {Number} y2 Y component (translation)
 * @param {Number} z2 Z component (translation)
 * @returns {quat2} new dual quaternion
 * @function
 */
quat2.fromRotationTranslationValues = function(x1, y1, z1, w1, x2, y2, z2) {
    var dq = new glMatrix.ARRAY_TYPE(8);
    dq[0] = x1;
    dq[1] = y1;
    dq[2] = z1;
    dq[3] = w1;
    var ax = x2 * 0.5, ay = y2 * 0.5, az = z2 * 0.5;
    dq[4] =  ax * w1 + ay * z1 - az * y1;
    dq[5] =  ay * w1 + az * x1 - ax * z1;
    dq[6] =  az * w1 + ax * y1 - ay * x1;
    dq[7] = -ax * x1 - ay * y1 - az * z1;
    return dq;
};

/**
 * Creates a dual quat from a quaternion and a translation
 *
 * @param {quat2} dual quaternion receiving operation result
 * @param {quat} q quaternion
 * @param {vec3} t tranlation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */
quat2.fromRotationTranslation = function(out, q, t) {
    var ax = t[0] * 0.5, ay = t[1] * 0.5, az = t[2] * 0.5,
        bx = q[0], by = q[1], bz = q[2], bw = q[3];
    //quat.scale(out[1], [t[0], t[1], t[2], 0], 0.5);
    //quat.multiply(out[1], out[1], out[0]);
    out[0] = bx;
    out[1] = by;
    out[2] = bz;
    out[3] = bw;
    out[4] =  ax * bw + ay * bz - az * by;
    out[5] =  ay * bw + az * bx - ax * bz;
    out[6] =  az * bw + ax * by - ay * bx;
    out[7] = -ax * bx - ay * by - az * bz;
    return out;
};

/**
 * Creates a dual quat from a translation
 *
 * @param {quat2} dual quaternion receiving operation result
 * @param {vec3} t translation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */
quat2.fromTranslation = function(out, t) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = t[0] * 0.5;
    out[5] = t[1] * 0.5;
    out[6] = t[2] * 0.5;
    out[7] = 0;
    return out;
};

/**
 * Creates a dual quat from a quaternion
 *
 * @param {quat2} dual quaternion receiving operation result
 * @param {quat} q the quaternion
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */
quat2.fromRotation = function(out, q) {
    out[0] = q[0];
    out[1] = q[1];
    out[2] = q[2];
    out[3] = q[3];
    out[4] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    return out;
};

/**
 * Creates a new dual quat from a matrix (4x4)
 * 
 * @param {quat2} out the dual quaternion
 * @param {mat4} a the matrix
 * @returns {quat2} dual quat receiving operation result
 * @function
 */
quat2.fromMat4 = function(out, a) {
    //TODO Optimize this 
    var outer = quat.create();
    mat4.getRotation(outer, a);
    var t = new glMatrix.ARRAY_TYPE(3);
    mat4.getTranslation(t, a);
    quat2.fromRotationTranslation(out, outer, t);
    //quat.multiply(out[1], [t[0], t[1], t[2], 0], out[0]);
    //quat.scale(out[1], out[1], 0.5);
    return out;
};

/**
 * Copy the values from one dual quat to another
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the source dual quaternion
 * @returns {quat2} out
 * @function
 */
quat2.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    return out;
};

/**
 * Set a dual quat to the identity dual quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @returns {quat2} out
 */
quat2.identity = function(out) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    return out;
};

/**
 * Set the components of a dual quat to the given values
 *
 * @param {quat2} out the receiving quaternion
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} out
 * @function
 */
quat2.set = function(out, x1, y1, z1, w1, x2, y2, z2, w2) {
    out[0] = x1;
    out[1] = y1;
    out[2] = z1;
    out[3] = w1;

    out[4] = x2;
    out[5] = y2;
    out[6] = z2;
    out[7] = w2;
    return out;
};

/**
 * Gets the real part of a dual quat
 * @param  {quat} out real part
 * @param  {quat2} a Dual Quaternion
 * @return {quat} real part
 */
quat2.getReal = quat.copy;

/**
 * Gets the dual part of a dual quat
 * @param  {quat} out dual part
 * @param  {quat2} a Dual Quaternion
 * @return {quat} dual part
 */
quat2.getDual = function(out, a) {
    out[0] = a[4];
    out[1] = a[5];
    out[2] = a[6];
    out[3] = a[7];
    return out;
};

/**
 * Set the real component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {quat} q a quaternion representing the real part
 * @returns {quat2} out
 * @function
 */
quat2.setReal = quat.copy;

/**
 * Set the dual component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {quat} q a quaternion representing the dual part
 * @returns {quat2} out
 * @function
 */
quat2.setDual = function(out, q) {
    out[4] = q[0];
    out[5] = q[1];
    out[6] = q[2];
    out[7] = q[3];
    return out;
};

/**
 * Gets the translation of a normalized dual quat
 * @param  {vec3} out translation
 * @param  {quat2} a Dual Quaternion to be decomposed
 * @return {vec3} translation
 */
quat2.getTranslation = function(out, a) {
    //var q = new glMatrix.ARRAY_TYPE(4);
    //quat.conjugate(q, a[0]);
    //quat.multiply(q, a[1], q);
    //quat.scale(q, q, 2);
    //out[0] = q[0];
    //out[1] = q[1];
    //out[2] = q[2];
    
    var ax = a[4], ay = a[5], az = a[6], aw = a[7],
        bx = -a[0], by = -a[1], bz = -a[2], bw = a[3];
    out[0] = (ax * bw + aw * bx + ay * bz - az * by)*2;
    out[1] = (ay * bw + aw * by + az * bx - ax * bz)*2;
    out[2] = (az * bw + aw * bz + ax * by - ay * bx)*2;
    return out;
};

/**
 * Translates a dual quat by the given vector
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to translate
 * @param {vec3} v vector to translate by
 * @returns {quat2} out
 */
quat2.translate = function(out, a, v) {
    //var trans = quat2.create();
    //quat2.fromTranslation(trans, v);
    //quat2.multiply(out, a, trans);

    var ax1 = a[0], ay1 = a[1], az1 = a[2], aw1 = a[3],
        bx1 = v[0] * 0.5, by1 = v[1] * 0.5, bz1 = v[2] * 0.5,
        ax2 = a[4], ay2 = a[5], az2 = a[6], aw2 = a[7];
    out[0] = ax1;
    out[1] = ay1;
    out[2] = az1;
    out[3] = aw1;
    out[4] =  aw1 * bx1 + ay1 * bz1 - az1 * by1 + ax2;
    out[5] =  aw1 * by1 + az1 * bx1 - ax1 * bz1 + ay2;
    out[6] =  aw1 * bz1 + ax1 * by1 - ay1 * bx1 + az2;
    out[7] = -ax1 * bx1 - ay1 * by1 - az1 * bz1 + aw2;
    return out;
};

/**
 * Rotates a dual quat around the X axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */
quat2.rotateX = function(out, a, rad) {
    //Get the translation
    //var t = new glMatrix.ARRAY_TYPE(4);
    //quat.conjugate(t, a[0]);
    //quat.multiply(t, a[1], t);
    var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3],
        ax = a[4], ay = a[5], az = a[6], aw = a[7];
    //Trans
    var ax1 = ax * bw + aw * bx + ay * bz - az * by,
    ay1 = ay * bw + aw * by + az * bx - ax * bz,
    az1 = az * bw + aw * bz + ax * by - ay * bx,
    aw1 = aw * bw - ax * bx - ay * by - az * bz;
    //Rotate it 
    quat.rotateX(out, a, rad);
    //quat.multiply(out[1], t, out[0]);
    bx = out[0]; by = out[1]; bz = out[2]; bw = out[3];
    out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
    out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
    out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
    out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
    return out;
};

/**
 * Rotates a dual quat around the Y axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */
quat2.rotateY = function(out, a, rad) {
    //Get the translation
    //var t = new glMatrix.ARRAY_TYPE(4);
    //quat.conjugate(t, a[0]);
    //quat.multiply(t, a[1], t);
    var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3],
    ax = a[4], ay = a[5], az = a[6], aw = a[7];
    //Trans
    var ax1 = ax * bw + aw * bx + ay * bz - az * by,
    ay1 = ay * bw + aw * by + az * bx - ax * bz,
    az1 = az * bw + aw * bz + ax * by - ay * bx,
    aw1 = aw * bw - ax * bx - ay * by - az * bz;
    //Rotate it 
    quat.rotateY(out, a, rad);
    //quat.multiply(out[1], t, out[0]);
    bx = out[0]; by = out[1]; bz = out[2]; bw = out[3];
    out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
    out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
    out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
    out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
    return out;
};

/**
 * Rotates a dual quat around the Z axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */
quat2.rotateZ = function(out, a, rad) {
    //Get the translation
    //var t = new glMatrix.ARRAY_TYPE(4);
    //quat.conjugate(t, a[0]);
    //quat.multiply(t, a[1], t);
    var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3],
    ax = a[4], ay = a[5], az = a[6], aw = a[7];
    //Trans
    var ax1 = ax * bw + aw * bx + ay * bz - az * by,
    ay1 = ay * bw + aw * by + az * bx - ax * bz,
    az1 = az * bw + aw * bz + ax * by - ay * bx,
    aw1 = aw * bw - ax * bx - ay * by - az * bz;
    //Rotate it 
    quat.rotateZ(out, a, rad);
    //quat.multiply(out[1], t, out[0]);
    bx = out[0]; by = out[1]; bz = out[2]; bw = out[3];
    out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
    out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
    out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
    out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
    return out;
};

/**
 * Rotates a dual quat by a given quaternion (a * q)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {quat} q quaternion to rotate by
 * @returns {quat2} out
 */
quat2.rotateByQuatAppend = function(out, a, q) {
    var qx = q[0], qy = q[1], qz = q[2], qw = q[3],
        ax = a[0], ay = a[1], az = a[2], aw = a[3];

    out[0] = ax * qw + aw * qx + ay * qz - az * qy;
    out[1] = ay * qw + aw * qy + az * qx - ax * qz;
    out[2] = az * qw + aw * qz + ax * qy - ay * qx;
    out[3] = aw * qw - ax * qx - ay * qy - az * qz;
    ax = a[4]; ay = a[5]; az = a[6]; aw = a[7];
    out[4] = ax * qw + aw * qx + ay * qz - az * qy;
    out[5] = ay * qw + aw * qy + az * qx - ax * qz;
    out[6] = az * qw + aw * qz + ax * qy - ay * qx;
    out[7] = aw * qw - ax * qx - ay * qy - az * qz;
    return out;
};

/**
 * Rotates a dual quat by a given quaternion (q * a)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat} q quaternion to rotate by
 * @param {quat2} a the dual quaternion to rotate
 * @returns {quat2} out
 */
quat2.rotateByQuatPrepend = function(out, q, a) {
    var qx = q[0], qy = q[1], qz = q[2], qw = q[3],
        bx = a[0], by = a[1], bz = a[2], bw = a[3];

    out[0] = qx * bw + qw * bx + qy * bz - qz * by;
    out[1] = qy * bw + qw * by + qz * bx - qx * bz;
    out[2] = qz * bw + qw * bz + qx * by - qy * bx;
    out[3] = qw * bw - qx * bx - qy * by - qz * bz;
    bx = a[4]; by = a[5]; bz = a[6]; bw = a[7];
    out[4] = qx * bw + qw * bx + qy * bz - qz * by;
    out[5] = qy * bw + qw * by + qz * bx - qx * bz;
    out[6] = qz * bw + qw * bz + qx * by - qy * bx;
    out[7] = qw * bw - qx * bx - qy * by - qz * bz;
    return out;
};

/**
 * Rotates a dual quat around a given axis. Does the normalisation automatically
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {vec3} axis the axis to rotate around
 * @param {Number} rad how far the rotation should be
 * @returns {quat2} out
 */
quat2.rotateAroundAxis = function(out, a, axis, rad) {
    //Special case for rad = 0
    if(Math.abs(rad) < glMatrix.EPSILON) {
        return quat2.copy(out, a);
    }
    var axisLength = Math.sqrt(axis[0] * axis[0] + axis[1] * axis[1] + axis[2] * axis[2]);
    //var normalizedAxis = new glMatrix.ARRAY_TYPE(3);
    //normalizedAxis[0] = axis[0] / axisLength;
    //normalizedAxis[1] = axis[1] / axisLength;
    //normalizedAxis[2] = axis[2] / axisLength;
    //var tempAxis = new glMatrix.ARRAY_TYPE(4);
    //quat.setAxisAngle(tempAxis, normalizedAxis, rad);
    
    rad = rad * 0.5;
    var s = Math.sin(rad);
    var bx = s * axis[0] / axisLength;
    var by = s * axis[1] / axisLength;
    var bz = s * axis[2] / axisLength;
    var bw = Math.cos(rad);

    //quat.multiply(out[0], a[0], tempAxis);
    //quat.multiply(out[1], a[1], tempAxis);
    var ax1 = a[0], ay1 = a[1], az1 = a[2], aw1 = a[3];
    out[0] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
    out[1] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
    out[2] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
    out[3] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
    
    var ax = a[4], ay = a[5], az = a[6], aw = a[7];
    out[4] = ax * bw + aw * bx + ay * bz - az * by;
    out[5] = ay * bw + aw * by + az * bx - ax * bz;
    out[6] = az * bw + aw * bz + ax * by - ay * bx;
    out[7] = aw * bw - ax * bx - ay * by - az * bz;
    
    return out;
};

/**
 * Adds two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @returns {quat2} out
 * @function
 */
quat2.add = function(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    out[6] = a[6] + b[6];
    out[7] = a[7] + b[7];
    return out;
};

/**
 * Multiplies two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @returns {quat2} out
 */
quat2.multiply = function(out, a, b) {
    //e.g. Get rid of all those temp arrays
    //var tempReal = new glMatrix.ARRAY_TYPE(4);
    //quat.multiply(tempReal, a[0], b[0]);
    //var temp1 = new glMatrix.ARRAY_TYPE(4),
    //    temp2 = new glMatrix.ARRAY_TYPE(4);
    //quat.add(out[1], quat.multiply(temp1, a[0], b[1]), quat.multiply(temp2, a[1], b[0]));
    var ax0 = a[0], ay0 = a[1], az0 = a[2], aw0 = a[3],
        bx1 = b[4], by1 = b[5], bz1 = b[6], bw1 = b[7],
        ax1 = a[4], ay1 = a[5], az1 = a[6], aw1 = a[7],
        bx0 = b[0], by0 = b[1], bz0 = b[2], bw0 = b[3];
    out[0] = ax0 * bw0 + aw0 * bx0 + ay0 * bz0 - az0 * by0;
    out[1] = ay0 * bw0 + aw0 * by0 + az0 * bx0 - ax0 * bz0;
    out[2] = az0 * bw0 + aw0 * bz0 + ax0 * by0 - ay0 * bx0;
    out[3] = aw0 * bw0 - ax0 * bx0 - ay0 * by0 - az0 * bz0;
    out[4] = ax0 * bw1 + aw0 * bx1 + ay0 * bz1 - az0 * by1 + ax1 * bw0 + aw1 * bx0 + ay1 * bz0 - az1 * by0;
    out[5] = ay0 * bw1 + aw0 * by1 + az0 * bx1 - ax0 * bz1 + ay1 * bw0 + aw1 * by0 + az1 * bx0 - ax1 * bz0;
    out[6] = az0 * bw1 + aw0 * bz1 + ax0 * by1 - ay0 * bx1 + az1 * bw0 + aw1 * bz0 + ax1 * by0 - ay1 * bx0;
    out[7] = aw0 * bw1 - ax0 * bx1 - ay0 * by1 - az0 * bz1 + aw1 * bw0 - ax1 * bx0 - ay1 * by0 - az1 * bz0;
        
    //var ax = a[0][0], ay = a[0][1], az = a[0][2], aw = a[0][3],
    //    bx = b[1][0], by = b[1][1], bz = b[1][2], bw = b[1][3];
    
    //out[0][0] = tempReal[0];
    //out[0][1] = tempReal[1];
    //out[0][2] = tempReal[2];
    //out[0][3] = tempReal[3];
    //quat.multiply(out, a, b);

    //out[1][0] = a[0] + b[0];
    //out[1][1] = a[1] + b[1];
    //out[1][2] = a[2] + b[2];
    //out[1][3] = a[3] + b[3];
    return out;
};

/**
 * Alias for {@link quat2.multiply}
 * @function
 */
quat2.mul = quat2.multiply;

/**
 * Scales a dual quat by a scalar number
 *
 * @param {quat2} out the receiving dual quat
 * @param {quat2} a the dual quat to scale
 * @param {Number} b amount to scale the dual quat by
 * @returns {quat2} out
 * @function
 */
quat2.scale = function(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    out[6] = a[6] * b;
    out[7] = a[7] * b;
    return out;
};

/**
 * Calculates the dot product of two dual quat's (The dot product of the real parts)
 *
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
quat2.dot = quat.dot;

/**
 * Performs a linear interpolation between two dual quats's
 * NOTE: The resulting dual quaternions won't always be normalized (The error is most noticeable when t = 0.5)
 *
 * @param {quat2} out the receiving dual quat
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat2} out
 */
quat2.lerp = function(out, a, b, t) {
    /* (1-t)*q1+t*q2 
     -------------
     ||(1-t)*q1+t*q2|| -> length of it */
     
     //Or: q1+(q2-q1)*t 
     //^From: https://gist.github.com/XProger/def254d40a237cc0f0b2#file-quat-pas-L159
     
    //var tempOUT = quat2.create();
    //quat2.scale(tempOUT, a, 1 - t);
    var mt = 1 - t;
    //var tempDQ = quat2.create();
    if(quat2.dot(a, b) < 0) t = -t;
    //quat2.scale(tempDQ, b, t);
    //quat2.add(out, tempOUT, tempDQ);
    
    out[0] = a[0] * mt + b[0] * t;
    out[1] = a[1] * mt + b[1] * t;
    out[2] = a[2] * mt + b[2] * t;
    out[3] = a[3] * mt + b[3] * t;
    out[4] = a[4] * mt + b[4] * t;
    out[5] = a[5] * mt + b[5] * t;
    out[6] = a[6] * mt + b[6] * t;
    out[7] = a[7] * mt + b[7] * t;
    
    //Renormalizing the dual quat is left as an exercise to the user
    //quat2.scale(out, out, 1 / quat2.length(out));
    return out;
};

/**
 * Performs a spherical linear interpolation between two dual quats
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat2} out
 */
quat2.slerp = function(out, a, b, t) {
    /*
public static DualQuaternion_c ScLERP( DualQuaternion_c from, DualQuaternion_c to, float t )
{
 // Shortest path
 float dot = Quaternion.Dot(from.m_real, to.m_real);
 if ( dot < 0 ) to = to * -1.0f;
 // ScLERP = qa(qa^-1 qb)^t
 DualQuaternion_c diff = DualQuaternion_c.Conjugate(from) * to;
 Vector3 vr = new Vector3(diff.m_real.X, diff.m_real.Y, diff.m_real.Z);
 Vector3 vd = new Vector3(diff.m_dual.X, diff.m_dual.Y, diff.m_dual.Z);
 float invr = 1 / (float)Math.Sqrt( Vector3.Dot(vr, vr) );
 // Screw parameters
 float angle = 2 * (float)Math.Acos( diff.m_real.W );
 float pitch = -2 * diff.m_dual.W * invr;
 Vector3 direction = vr * invr;
 Vector3 moment = (vd - direction*pitch*diff.m_real.W*0.5f)*invr;
 // Exponential power
 angle *= t;
 pitch *= t;
 // Convert back to dual-quaternion
 float sinAngle = Sin(0.5f*angle);
 float cosAngle = Cos(0.5f*angle);
 Quaternion real = new Quaternion( direction* sinAngle, cosAngle );
 Quaternion dual = new Quaternion( sinAngle*moment+pitch*0.5f* cosAngle *direction, -pitch*0.5f*sinAngle );
 // Complete the multiplication and return the interpolated value
 return from * new DualQuaternion_c( real, dual );
*/
    throw new Error("Not implemented");
    return out;
};

/**
 * Calculates the inverse of a dual quat. If they are normalized, conjugate is cheaper
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a dual quat to calculate inverse of
 * @returns {quat2} out
 */
quat2.invert = function(out, a) {
    //quat2.conjugate(out, a);
    //quat2.scale(out, out, 1/quat2.squaredLength(a));
    var sqlen = quat2.squaredLength(a);
    out[0] = -a[0] / sqlen;
    out[1] = -a[1] / sqlen;
    out[2] = -a[2] / sqlen;
    out[3] = a[3] / sqlen;
    out[4] = -a[4] / sqlen;
    out[5] = -a[5] / sqlen;
    out[6] = -a[6] / sqlen;
    out[7] = a[7] / sqlen;
    return out;
};

/**
 * Calculates the conjugate of a dual quat
 * If the dual quaternion is normalized, this function is faster than quat2.inverse and produces the same result.
 *
 * @param {quat2} out the receiving quaternion
 * @param {quat2} a quat to calculate conjugate of
 * @returns {quat2} out
 */
quat2.conjugate = function(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = a[3];
    out[4] = -a[4];
    out[5] = -a[5];
    out[6] = -a[6];
    out[7] = a[7];
    return out;
};

/**
 * Calculates the length of a dual quat
 *
 * @param {quat2} a dual quat to calculate length of
 * @returns {Number} length of a
 * @function
 */
quat2.length = quat.length;

/**
 * Alias for {@link quat2.length}
 * @function
 */
quat2.len = quat2.length;

/**
 * Calculates the squared length of a dual quat
 *
 * @param {quat2} a dual quat to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */
quat2.squaredLength = quat.squaredLength;

/**
 * Alias for {@link quat2.squaredLength}
 * @function
 */
quat2.sqrLen = quat2.squaredLength;

/**
 * Normalize a dual quat
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a dual quaternion to normalize
 * @returns {quat2} out
 * @function
 */
quat2.normalize = function(out, a) {
    var magnitude = quat2.squaredLength(a);
    //Only scale if it makes sense
    if (magnitude > 0) {
        magnitude = Math.sqrt(magnitude);
        //More precise that way:
        out[0] = a[0] / magnitude;
        out[1] = a[1] / magnitude;
        out[2] = a[2] / magnitude;
        out[3] = a[3] / magnitude;
        out[4] = a[4] / magnitude;
        out[5] = a[5] / magnitude;
        out[6] = a[6] / magnitude;
        out[7] = a[7] / magnitude;
    }
    return out;
};

/**
 * Returns a string representation of a dual quatenion
 *
 * @param {quat2} a dual quaternion to represent as a string
 * @returns {String} string representation of the dual quat
 */
quat2.str = function(a) {
    return 'quat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' +
        a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ')';
};

/**
 * Returns whether or not the dual quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat2} a the first dual quaternion.
 * @param {quat2} b the second dual quaternion.
 * @returns {Boolean} true if the dual quaternions are equal, false otherwise.
 */
quat2.exactEquals = function(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] &&
        a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7];
};

/**
 * Returns whether or not the dual quaternions have approximately the same elements in the same position.
 *
 * @param {quat2} a the first dual quat.
 * @param {quat2} b the second dual quat.
 * @returns {Boolean} true if the dual quats are equal, false otherwise.
 */
quat2.equals = function(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7];
    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
            Math.abs(a2 - b2) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
            Math.abs(a3 - b3) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
            Math.abs(a4 - b4) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
            Math.abs(a5 - b5) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
            Math.abs(a6 - b6) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
            Math.abs(a7 - b7) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a7), Math.abs(b7)));
};

module.exports = quat2;
