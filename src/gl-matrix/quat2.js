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

var glMatrix = require("./common.js");
var quat = require("./quat.js");
var mat4 = require("./mat4.js");
//NOTE: Quaternions are in XYZW format!
//NOTE: Dual Quaternions need to be normalized, otherwise some functions won't work!
//TODO: slerp and co.
//TODO: rotate(out, a, rad, axis) 

//LINKS: https://github.com/bobbens/libdq
//https://github.com/markaren/DualQuaternion/tree/master/src/main/java/info/laht/dualquat
//http://wscg.zcu.cz/wscg2012/short/A29-full.pdf
//http://www.xbdev.net/misc_demos/demos/dual_quaternions_beyond/paper.pdf
//https://github.com/mosra/magnum/blob/master/src/Magnum/Math/DualQuaternion.h#L364
//http://mosra.cz/blog/magnum-doc/classMagnum_1_1Math_1_1DualQuaternion.html#a6dcad20c0e9c7c9361b9c291ee42b181
/**
 * @class Dual Quaternion
 * @name quat2
 */
var quat2 = {};

/**
 * Creates a new identity dual quat
 *
 * @returns {quat2} a new dual quaternion [real -> rotation, dual -> translation]
 */
quat2.create = function() {
    var real = new glMatrix.ARRAY_TYPE(4),
        dual = new glMatrix.ARRAY_TYPE(4);
    real[0] = 0;
    real[1] = 0;
    real[2] = 0;
    real[3] = 1;
    dual[0] = 0;
    dual[1] = 0;
    dual[2] = 0;
    dual[3] = 0;
    return [real, dual];
};

/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat2} a dual quaternion to clone
 * @returns {quat2} new dual quaternion
 * @function
 */
quat2.clone = function(a) {
    var real = new glMatrix.ARRAY_TYPE(4),
        dual = new glMatrix.ARRAY_TYPE(4);
    real[0] = a[0][0];
    real[1] = a[0][1];
    real[2] = a[0][2];
    real[3] = a[0][3];
    dual[0] = a[1][0];
    dual[1] = a[1][1];
    dual[2] = a[1][2];
    dual[3] = a[1][3];
    return [real, dual];
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
    var real = new glMatrix.ARRAY_TYPE(4),
        dual = new glMatrix.ARRAY_TYPE(4);
    real[0] = x1;
    real[1] = y1;
    real[2] = z1;
    real[3] = w1;
    dual[0] = x2;
    dual[1] = y2;
    dual[2] = z2;
    dual[3] = w2;
    var out = [real, dual];
    return out;
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
    var real = new glMatrix.ARRAY_TYPE(4),
        dual = new glMatrix.ARRAY_TYPE(4);
    real[0] = x1;
    real[1] = y1;
    real[2] = z1;
    real[3] = w1;
    //TODO Optimize this
    quat.multiply(dual, [x2, y2, z2, 0], real);
    quat.scale(dual, dual, 0.5);
    
    quat.scale(dual, [x2, y2, z2, 0], 0.5);
    quat.multiply(dual, dual, real);
    
    return [real, dual];
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
    out[0][0] = q[0];
    out[0][1] = q[1];
    out[0][2] = q[2];
    out[0][3] = q[3];
    
    //TODO Optimize this
    quat.scale(out[1], [t[0], t[1], t[2], 0], 0.5);
    quat.multiply(out[1], out[1], out[0]);
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
    out[0][0] = 0;
    out[0][1] = 0;
    out[0][2] = 0;
    out[0][3] = 1;
    out[1][0] = t[0] * 0.5;
    out[1][1] = t[1] * 0.5;
    out[1][2] = t[2] * 0.5;
    out[1][3] = 0;
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
    out[0][0] = q[0];
    out[0][1] = q[1];
    out[0][2] = q[2];
    out[0][3] = q[3];
    out[1][0] = 0;
    out[1][1] = 0;
    out[1][2] = 0;
    out[1][3] = 0;
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
 * Creates a new mat4 from a dual quat.
 * Is not in mat4.js, because that would cause a circlular dependency.
 *
 * @param {mat4} out Matrix
 * @param {quat2} a Dual Quaternion
 * @returns {mat4} mat4 receiving operation result
 */
quat2.toMat4 = function(out, a) {
    /*var X = a[0][0],
        Y = a[0][1],
        Z = a[0][2],
        W = a[0][3];
    var xx = X * X;
    var yy = Y * Y;
    var zz = Z * Z;

    var xy = X * Y;
    var zw = Z * W;
    var zx = Z * X;
    var yw = Y * W;
    var yz = Y * Z;
    var xw = X * W;
    var translation = new glMatrix.ARRAY_TYPE(3);
    quat2.getTranslation(translation, a);
   
    out[0] = 1.0 - 2.0 * (yy + zz);
    out[1] = 2.0 * (xy + zw);
    out[2] = 2.0 * (zx - yw);
    out[3] = 0;
    out[4] = 2.0 * (xy - zw);
    out[5] = 1.0 - 2.0 * (zz + xx);
    out[6] = 2.0 * (yz + xw);
    out[7] = 0;
    out[8] = 2.0 * (zx + yw);
    out[9] = 2.0 * (yz - xw);
    out[10] = 1.0 - 2.0 * (yy + xx);
    out[11] = 0;
    out[12] = translation[0];
    out[13] = translation[1];
    out[14] = translation[2];
    out[15] = 1;*/
    
    var translation = new glMatrix.ARRAY_TYPE(3);
    var normalizedA = quat2.create();
    quat2.normalize(normalizedA, a);
    quat2.getTranslation(translation, normalizedA);

    mat4.fromRotationTranslation(out, a[0], translation);
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
    out[0][0] = a[0][0];
    out[0][1] = a[0][1];
    out[0][2] = a[0][2];
    out[0][3] = a[0][3];
    out[1][0] = a[1][0];
    out[1][1] = a[1][1];
    out[1][2] = a[1][2];
    out[1][3] = a[1][3];
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
    out[0][0] = x1;
    out[0][1] = y1;
    out[0][2] = z1;
    out[0][3] = w1;

    out[1][0] = x2;
    out[1][1] = y2;
    out[1][2] = z2;
    out[1][3] = w2;
    return out;
};

/**
 * Set a dual quat to the identity dual quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @returns {quat2} out
 */
quat2.identity = function(out) {
    out[0][0] = 0;
    out[0][1] = 0;
    out[0][2] = 0;
    out[0][3] = 1;
    out[1][0] = 0;
    out[1][1] = 0;
    out[1][2] = 0;
    out[1][3] = 0;
    return out;
};

/**
 * Gets the translation of a normalized dual quat
 * @param  {vec3} out translation
 * @param  {quat} q Dual Quaternion to be decomposed
 * @return {Number} translation
 */
quat2.getTranslation = function(out, a) {
    var q = new glMatrix.ARRAY_TYPE(4);
    quat.conjugate(q, a[0]);
    quat.multiply(q, a[1], q);
    quat.scale(q, q, 2);
    out[0] = q[0];
    out[1] = q[1];
    out[2] = q[2];
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
    /*
    //TODO What does this do:
    var t = new glMatrix.ARRAY_TYPE(3);
    quat2.getTranslation(t, a);
    vec3.add(t, t, v);
    if (a === out) {
        quat.scale(out[1], [t[0], t[1], t[2], 0], 0.5);
        quat.multiply(out[1], out[1], a[0]);
    } else {
        out[0][0] = a[0][0];
        out[0][1] = a[0][1];
        out[0][2] = a[0][2];
        out[0][3] = a[0][3];
        quat.scale(out[1], [t[0], t[1], t[2], 0], 0.5);
        quat.multiply(out[1], out[1], a[0]);
    }*/
    var trans = quat2.create();
    quat2.fromTranslation(trans, v);
    quat2.multiply(out, a, trans);
    return out;
};

/**
 * Rotates a dual quat around the X axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to translate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */
quat2.rotateX = function(out, a, rad) {
    //TODO: Optimize this
    //Get the translation
    var t = new glMatrix.ARRAY_TYPE(4);
    quat.conjugate(t, a[0]);
    quat.multiply(t, a[1], t);
    //Rotate it 
    quat.rotateX(out[0], a[0], rad);
    quat.multiply(out[1], t, out[0]);
    //I have absolutely no clue why I need this, it (magically) seems to work though
    out[0][0] = -out[0][0];
    out[0][1] = -out[0][1];
    out[0][2] = -out[0][2];
    out[0][3] = -out[0][3];
    out[1][0] = -out[1][0];
    out[1][1] = -out[1][1];
    out[1][2] = -out[1][2];
    out[1][3] = -out[1][3];
    return out;
};

/**
 * Rotates a dual quat around the Y axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to translate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */
quat2.rotateY = function(out, a, rad) {
    //TODO: Optimize this
    //Get the translation
    var t = new glMatrix.ARRAY_TYPE(4);
    quat.conjugate(t, a[0]);
    quat.multiply(t, a[1], t);
    //Rotate it 
    quat.rotateY(out[0], a[0], rad);
    quat.multiply(out[1], t, out[0]);
    //The flip signs stuff doesn't seem to be required here. Magic?
    return out;
};

/**
 * Rotates a dual quat around the Z axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to translate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */
quat2.rotateZ = function(out, a, rad) {
    //TODO: Optimize this
    //Get the translation
    var t = new glMatrix.ARRAY_TYPE(4);
    quat.conjugate(t, a[0]);
    quat.multiply(t, a[1], t);
    //Rotate it 
    quat.rotateZ(out[0], a[0], rad);
    quat.multiply(out[1], t, out[0]);
    //I have absolutely no clue why I need this, it (magically) seems to work though
    out[0][0] = -out[0][0];
    out[0][1] = -out[0][1];
    out[0][2] = -out[0][2];
    out[0][3] = -out[0][3];
    out[1][0] = -out[1][0];
    out[1][1] = -out[1][1];
    out[1][2] = -out[1][2];
    out[1][3] = -out[1][3];
    return out;
};

/**
 * Rotates a dual quat by a given quaternion
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {quat} q quaternion to rotate by
 * @returns {quat2} out
 */
quat2.rotateByQuat = function(out, a, q) {
    //TODO: Optimize this?
    quat.multiply(out[0], a[0], q);
    quat.multiply(out[1], a[1], q);
    return out;
};

/**
 * Rotates a dual quat around a given axis. Does the normalisation automatically
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to translate
 * @param {vec3} axis the axis to rotate around
 * @param {Number} rad how far the rotation should be
 * @returns {quat2} out
 */
quat2.rotateAroundAxis = function(out, a, axis, rad) {
    //Special case for rad = 0
    if(Math.abs(rad) < glMatrix.EPSILON) {
        return quat.copy(out, a);
    }
    var axisLength = Math.sqrt(axis[0] * axis[0] + axis[1] * axis[1] + axis[2] * axis[2]);
    var normalizedAxis = new glMatrix.ARRAY_TYPE(3);
    normalizedAxis[0] = axis[0] / axisLength;
    normalizedAxis[1] = axis[1] / axisLength;
    normalizedAxis[2] = axis[2] / axisLength;
    
    var tempAxis = new glMatrix.ARRAY_TYPE(4);
    quat.setAxisAngle(tempAxis, normalizedAxis, rad);
    //TODO: Optimize this?
    quat.multiply(out[0], a[0], tempAxis);
    quat.multiply(out[1], a[1], tempAxis);

    out[0][0] = -out[0][0];
    out[0][1] = -out[0][1];
    out[0][2] = -out[0][2];
    out[0][3] = -out[0][3];
    out[1][0] = -out[1][0];
    out[1][1] = -out[1][1];
    out[1][2] = -out[1][2];
    out[1][3] = -out[1][3];
    
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
    quat.add(out[0], a[0], b[0]);
    quat.add(out[1], a[1], b[1]);
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
    //TODO Most likely, this can be optimized a lot
    //e.g. Get rid of all those temp arrays
    var tempReal = new glMatrix.ARRAY_TYPE(4);
    quat.multiply(tempReal, a[0], b[0]);
    var temp1 = new glMatrix.ARRAY_TYPE(4),
        temp2 = new glMatrix.ARRAY_TYPE(4);
    quat.add(out[1], quat.multiply(temp1, a[0], b[1]), quat.multiply(temp2, a[1], b[0]));
    
    out[0][0] = tempReal[0];
    out[0][1] = tempReal[1];
    out[0][2] = tempReal[2];
    out[0][3] = tempReal[3];
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
    out[0][0] = a[0][0] * b;
    out[0][1] = a[0][1] * b;
    out[0][2] = a[0][2] * b;
    out[0][3] = a[0][3] * b;
    out[1][0] = a[1][0] * b;
    out[1][1] = a[1][1] * b;
    out[1][2] = a[1][2] * b;
    out[1][3] = a[1][3] * b;
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
quat2.dot = function(a, b) {
    return a[0][0] * b[0][0] + a[0][1] * b[0][1] + a[0][2] * b[0][2] + a[0][3] * b[0][3];
};

/**
 * Performs a linear interpolation between two dual quats's
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
    //TODO: Optimize this!!!
    var tempDQ = quat2.create();
    quat2.scale(out, a, 1 - t);
    quat2.scale(tempDQ, b, t);
    quat2.add(out, out, tempDQ);
    //Now we have the top part of the equation

    quat2.scale(out, out, 1 / quat2.length(out));
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
 * Calculates the inverse of a dual quat.
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a dual quat to calculate inverse of
 * @returns {quat2} out
 */
quat2.invert = function(out, a) {
    quat2.conjugate(out, a);
    quat2.scale(out, out, 1/quat2.squaredLength(a));
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
    quat.conjugate(out[0], a[0]);
    quat.conjugate(out[1], a[1]);
    return out;
};

/**
 * Calculates the length of a dual quat
 *
 * @param {quat2} a dual quat to calculate length of
 * @returns {Number} length of a
 * @function
 */
quat2.length = function(a) {
    var x = a[0][0],
        y = a[0][1],
        z = a[0][2],
        w = a[0][3];
    return Math.sqrt(x * x + y * y + z * z + w * w);
};

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
quat2.squaredLength = function(a) {
    var x = a[0][0],
        y = a[0][1],
        z = a[0][2],
        w = a[0][3];
    return x * x + y * y + z * z + w * w;
};

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
        out[0][0] = a[0][0] / magnitude;
        out[0][1] = a[0][1] / magnitude;
        out[0][2] = a[0][2] / magnitude;
        out[0][3] = a[0][3] / magnitude;
        out[1][0] = a[1][0] / magnitude;
        out[1][1] = a[1][1] / magnitude;
        out[1][2] = a[1][2] / magnitude;
        out[1][3] = a[1][3] / magnitude;
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
    return 'quat2(' + a[0][0] + ', ' + a[0][1] + ', ' + a[0][2] + ', ' + a[0][3] + ', ' +
        a[1][0] + ', ' + a[1][1] + ', ' + a[1][2] + ', ' + a[1][3] + ')';
};

/**
 * Returns whether or not the dual quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat2} a the first dual quaternion.
 * @param {quat2} b the second dual quaternion.
 * @returns {Boolean} true if the dual quaternions are equal, false otherwise.
 */
quat2.exactEquals = function(a, b) {
    return a[0][0] === b[0][0] && a[0][1] === b[0][1] && a[0][2] === b[0][2] && a[0][3] === b[0][3] &&
        a[1][0] === b[1][0] && a[1][1] === b[1][1] && a[1][2] === b[1][2] && a[1][3] === b[1][3];
};

/**
 * Returns whether or not the dual quaternions have approximately the same elements in the same position.
 *
 * @param {quat2} a the first dual quat.
 * @param {quat2} b the second dual quat.
 * @returns {Boolean} true if the dual quats are equal, false otherwise.
 */
quat2.equals = function(a, b) {
    return quat.equals(a[0], b[0]) && quat.equals(a[1], b[1]);
};

module.exports = quat2;