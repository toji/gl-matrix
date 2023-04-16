import { EPSILON } from './common.js';
import { Mat3, Mat3Like } from './mat3.js';
import { Vec3, Vec3Like } from './vec3.js';
import { Vec4, Vec4Like } from './vec4.js';

/**
 * A Quaternion given as a {@link Quat}, a 4-element Float32Array, or
 * an array of 4 numbers.
 */
export type QuatLike = Vec4Like;

/**
 * Quaternion
 */
export class Quat extends Float32Array {
  /**
   * The number of bytes in a {@link Quat}.
   */
  static readonly BYTE_LENGTH = 4 * Float32Array.BYTES_PER_ELEMENT;

  /**
   * Create a {@link Quat}.
   */
   constructor(...values: [Readonly<QuatLike> | ArrayBufferLike, number?] | number[]) {
    switch(values.length) {
      case 4:
        super(values); break;
      case 2:
        super(values[0] as ArrayBufferLike, values[1], 4); break;
      case 1: {
        const v = values[0];
        if (typeof v === 'number') {
          super([v, v, v, v]);
        } else {
          super(v as ArrayBufferLike, 0, 4);
        }
        break;
      }
      default:
        super(4);
        this[3] = 1;
        break;
    }
  }

  //============
  // Attributes
  //============

  // Getters and setters to make component access read better.
  // These are likely to be a little bit slower than direct array access.

  /**
   * The x component of the quaternion. Equivalent to `this[0];`
   * @category Quaternion components
   */
  get x(): number { return this[0]; }
  set x(value: number) { this[0] = value; }

  /**
   * The y component of the quaternion. Equivalent to `this[1];`
   * @category Quaternion components
   */
  get y(): number { return this[1]; }
  set y(value: number) { this[1] = value; }

  /**
   * The z component of the quaternion. Equivalent to `this[2];`
   * @category Quaternion components
   */
  get z(): number { return this[2]; }
  set z(value: number) { this[2] = value; }

  /**
   * The w component of the quaternion. Equivalent to `this[3];`
   * @category Quaternion components
   */
  get w(): number { return this[3]; }
  set w(value: number) { this[3] = value; }

  /**
   * The magnitude (length) of this.
   * Equivalent to `Quat.magnitude(this);`
   *
   * Magnitude is used because the `length` attribute is already defined by
   * `Float32Array` to mean the number of elements in the array.
   */
  get magnitude(): number {
    const x = this[0];
    const y = this[1];
    const z = this[2];
    const w = this[3];
    return Math.sqrt(x * x + y * y + z * z + w * w);
  }

  /**
   * Alias for {@link Quat.magnitude}
   */
  get mag(): number { return this.magnitude; }

  /**
   * A string representation of `this`
   * Equivalent to `Quat.str(this);`
   */
  get str(): string {
    return Quat.str(this);
  }

  //===================
  // Instances methods
  //===================

  /**
   * Copy the values from another {@link Quat} into `this`.
   *
   * @param a the source quaternion
   * @returns `this`
   */
  copy(a: Readonly<QuatLike>): Quat {
    super.set(a);
    return this;
  }

  /**
   * Set `this` to the identity quaternion
   * Equivalent to Quat.identity(this)
   *
   * @returns `this`
   */
  identity(): Quat {
    this[0] = 0;
    this[1] = 0;
    this[2] = 0;
    this[3] = 1;
    return this;
  }

  /**
   * Multiplies `this` by a {@link Quat}.
   * Equivalent to `Quat.multiply(this, this, b);`
   *
   * @param b - The vector to multiply `this` by
   * @returns `this`
   */
  multiply(b: Readonly<QuatLike>): Quat {
    return Quat.multiply(this, this, b) as Quat;
  }

  /**
   * Alias for {@link Quat.multiply}
   */
  mul(b: Readonly<QuatLike>): Quat { return this; }

  /**
   * Rotates `this` by the given angle about the X axis
   * Equivalent to `Quat.rotateX(this, this, rad);`
   *
   * @param rad - angle (in radians) to rotate
   * @returns `this`
   */
  rotateX(rad: number): Quat {
    return Quat.rotateX(this, this, rad) as Quat;
  }

  /**
   * Rotates `this` by the given angle about the Y axis
   * Equivalent to `Quat.rotateY(this, this, rad);`
   *
   * @param rad - angle (in radians) to rotate
   * @returns `this`
   */
  rotateY(rad: number): Quat {
    return Quat.rotateY(this, this, rad) as Quat;
  }

  /**
   * Rotates `this` by the given angle about the Z axis
   * Equivalent to `Quat.rotateZ(this, this, rad);`
   *
   * @param rad - angle (in radians) to rotate
   * @returns `this`
   */
  rotateZ(rad: number): Quat {
    return Quat.rotateZ(this, this, rad) as Quat;
  }

  /**
   * Inverts `this`
   * Equivalent to `Quat.invert(this, this);`
   *
   * @returns `this`
   */
  invert(): Quat {
    return Quat.invert(this, this) as Quat;
  }

  /**
   * Scales `this` by a scalar number
   * Equivalent to `Quat.scale(this, this, scale);`
   *
   * @param out - the receiving vector
   * @param a - the vector to scale
   * @param scale - amount to scale the vector by
   * @returns `this`
   */
  scale(scale: number): QuatLike {
    this[0] *= scale;
    this[1] *= scale;
    this[2] *= scale;
    this[3] *= scale;
    return this;
  }

  /**
   * Calculates the dot product of `this` and another {@link Quat}
   * Equivalent to `Quat.dot(this, b);`
   *
   * @param b - the second operand
   * @returns dot product of `this` and b
   */
  dot(b: Readonly<QuatLike>): number {
    return Quat.dot(this, b);
  }

  //===================
  // Static methods
  //===================

  /**
   * Creates a new identity quat
   * @category Static
   *
   * @returns a new quaternion
   */
  static create(): Quat {
    return new Quat();
  }

  /**
   * Set a quat to the identity quaternion
   * @category Static
   *
   * @param out - the receiving quaternion
   * @returns `out`
   */
  static identity(out: QuatLike): QuatLike {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
  }

  /**
   * Sets a quat from the given angle and rotation axis,
   * then returns it.
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param axis - the axis around which to rotate
   * @param rad - the angle in radians
   * @returns `out`
   **/
  static setAxisAngle(out: QuatLike, axis: Readonly<Vec3Like>, rad: number): QuatLike {
    rad = rad * 0.5;
    const s = Math.sin(rad);
    out[0] = s * axis[0];
    out[1] = s * axis[1];
    out[2] = s * axis[2];
    out[3] = Math.cos(rad);
    return out;
  }

  /**
   * Gets the rotation axis and angle for a given
   *  quaternion. If a quaternion is created with
   *  setAxisAngle, this method will return the same
   *  values as providied in the original parameter list
   *  OR functionally equivalent values.
   * Example: The quaternion formed by axis [0, 0, 1] and
   *  angle -90 is the same as the quaternion formed by
   *  [0, 0, 1] and 270. This method favors the latter.
   * @category Static
   *
   * @param out_axis - Vector receiving the axis of rotation
   * @param q - Quaternion to be decomposed
   * @return Angle, in radians, of the rotation
   */
  static getAxisAngle(out_axis: Vec3Like, q: Readonly<QuatLike>): number {
    const rad = Math.acos(q[3]) * 2.0;
    const s = Math.sin(rad / 2.0);
    if (s > EPSILON) {
      out_axis[0] = q[0] / s;
      out_axis[1] = q[1] / s;
      out_axis[2] = q[2] / s;
    } else {
      // If s is zero, return any axis (no rotation - axis does not matter)
      out_axis[0] = 1;
      out_axis[1] = 0;
      out_axis[2] = 0;
    }
    return rad;
  }

  /**
   * Gets the angular distance between two unit quaternions
   * @category Static
   *
   * @param  {ReadonlyQuat} a     Origin unit quaternion
   * @param  {ReadonlyQuat} b     Destination unit quaternion
   * @return {Number}     Angle, in radians, between the two quaternions
   */
  static getAngle(a: Readonly<QuatLike>, b: Readonly<QuatLike>): number {
    const dotproduct = Quat.dot(a, b);

    return Math.acos(2 * dotproduct * dotproduct - 1);
  }

  /**
   * Multiplies two quat's
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static multiply(out: QuatLike, a: Readonly<QuatLike>, b: Readonly<QuatLike>): QuatLike {
    const ax = a[0];
    const ay = a[1];
    const az = a[2];
    const aw = a[3];
    const bx = b[0];
    const by = b[1];
    const bz = b[2];
    const bw = b[3];

    out[0] = ax * bw + aw * bx + ay * bz - az * by;
    out[1] = ay * bw + aw * by + az * bx - ax * bz;
    out[2] = az * bw + aw * bz + ax * by - ay * bx;
    out[3] = aw * bw - ax * bx - ay * by - az * bz;
    return out;
  }

  /**
   * Rotates a quaternion by the given angle about the X axis
   * @category Static
   *
   * @param out - quat receiving operation result
   * @param a - quat to rotate
   * @param rad - angle (in radians) to rotate
   * @returns `out`
   */
  static rotateX(out: QuatLike, a: Readonly<QuatLike>, rad: number): QuatLike {
    rad *= 0.5;

    const ax = a[0];
    const ay = a[1];
    const az = a[2];
    const aw = a[3];
    const bx = Math.sin(rad);
    const bw = Math.cos(rad);

    out[0] = ax * bw + aw * bx;
    out[1] = ay * bw + az * bx;
    out[2] = az * bw - ay * bx;
    out[3] = aw * bw - ax * bx;
    return out;
  }

  /**
   * Rotates a quaternion by the given angle about the Y axis
   * @category Static
   *
   * @param out - quat receiving operation result
   * @param a - quat to rotate
   * @param rad - angle (in radians) to rotate
   * @returns `out`
   */
  static rotateY(out: QuatLike, a: Readonly<QuatLike>, rad: number): QuatLike {
    rad *= 0.5;

    const ax = a[0];
    const ay = a[1];
    const az = a[2];
    const aw = a[3];
    const by = Math.sin(rad);
    const bw = Math.cos(rad);

    out[0] = ax * bw - az * by;
    out[1] = ay * bw + aw * by;
    out[2] = az * bw + ax * by;
    out[3] = aw * bw - ay * by;
    return out;
  }

  /**
   * Rotates a quaternion by the given angle about the Z axis
   * @category Static
   *
   * @param out - quat receiving operation result
   * @param a - quat to rotate
   * @param rad - angle (in radians) to rotate
   * @returns `out`
   */
  static rotateZ(out: QuatLike, a: Readonly<QuatLike>, rad: number): QuatLike {
    rad *= 0.5;

    const ax = a[0];
    const ay = a[1];
    const az = a[2];
    const aw = a[3];
    const bz = Math.sin(rad);
    const bw = Math.cos(rad);

    out[0] = ax * bw + ay * bz;
    out[1] = ay * bw - ax * bz;
    out[2] = az * bw + aw * bz;
    out[3] = aw * bw - az * bz;
    return out;
  }

  /**
   * Calculates the W component of a quat from the X, Y, and Z components.
   * Assumes that quaternion is 1 unit in length.
   * Any existing W component will be ignored.
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param a - quat to calculate W component of
   * @returns `out`
   */
  static calculateW(out: QuatLike, a: Readonly<QuatLike>): QuatLike {
    const x = a[0],
      y = a[1],
      z = a[2];

    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
    return out;
  }

  /**
   * Calculate the exponential of a unit quaternion.
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param a - quat to calculate the exponential of
   * @returns `out`
   */
  static exp(out: QuatLike, a: Readonly<QuatLike>): QuatLike {
    const x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];

    const r = Math.sqrt(x * x + y * y + z * z);
    const et = Math.exp(w);
    const s = r > 0 ? (et * Math.sin(r)) / r : 0;

    out[0] = x * s;
    out[1] = y * s;
    out[2] = z * s;
    out[3] = et * Math.cos(r);

    return out;
  }

  /**
   * Calculate the natural logarithm of a unit quaternion.
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param a - quat to calculate the exponential of
   * @returns `out`
   */
  static ln(out: QuatLike, a: Readonly<QuatLike>): QuatLike {
    const x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];

    const r = Math.sqrt(x * x + y * y + z * z);
    const t = r > 0 ? Math.atan2(r, w) / r : 0;

    out[0] = x * t;
    out[1] = y * t;
    out[2] = z * t;
    out[3] = 0.5 * Math.log(x * x + y * y + z * z + w * w);

    return out;
  }

  /**
   * Calculate the scalar power of a unit quaternion.
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param a - quat to calculate the exponential of
   * @param b - amount to scale the quaternion by
   * @returns `out`
   */
  static pow(out: QuatLike, a: Readonly<QuatLike>, b: number): QuatLike {
    Quat.ln(out, a);
    Quat.scale(out, out, b);
    Quat.exp(out, out);
    return out;
  }

  /**
   * Performs a spherical linear interpolation between two quat
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param a - the first operand
   * @param b - the second operand
   * @param t - interpolation amount, in the range [0-1], between the two inputs
   * @returns `out`
   */
  static slerp(out: QuatLike, a: Readonly<QuatLike>, b: Readonly<QuatLike>, t: number): QuatLike {
    // benchmarks:
    //    http://jsperf.com/quaternion-slerp-implementations
    const ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
    let bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];

    let scale0: number;
    let scale1: number;

    // calc cosine
    let cosom = ax * bx + ay * by + az * bz + aw * bw;
    // adjust signs (if necessary)
    if (cosom < 0.0) {
      cosom = -cosom;
      bx = -bx;
      by = -by;
      bz = -bz;
      bw = -bw;
    }
    // calculate coefficients
    if (1.0 - cosom > EPSILON) {
      // standard case (slerp)
      const omega = Math.acos(cosom);
      const sinom = Math.sin(omega);
      scale0 = Math.sin((1.0 - t) * omega) / sinom;
      scale1 = Math.sin(t * omega) / sinom;
    } else {
      // "from" and "to" quaternions are very close
      //  ... so we can do a linear interpolation
      scale0 = 1.0 - t;
      scale1 = t;
    }
    // calculate final values
    out[0] = scale0 * ax + scale1 * bx;
    out[1] = scale0 * ay + scale1 * by;
    out[2] = scale0 * az + scale1 * bz;
    out[3] = scale0 * aw + scale1 * bw;

    return out;
  }

  /**
   * Generates a random unit quaternion
   * @category Static
   *
   * @param out - the receiving quaternion
   * @returns `out`
   */
  /*static random(out: QuatLike): QuatLike {
    // Implementation of http://planning.cs.uiuc.edu/node198.html
    // TODO: Calling random 3 times is probably not the fastest solution
    let u1 = glMatrix.RANDOM();
    let u2 = glMatrix.RANDOM();
    let u3 = glMatrix.RANDOM();

    let sqrt1MinusU1 = Math.sqrt(1 - u1);
    let sqrtU1 = Math.sqrt(u1);

    out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
    out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
    out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
    out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
    return out;
  }*/

  /**
   * Calculates the inverse of a quat
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param a - quat to calculate inverse of
   * @returns `out`
   */
  static invert(out: QuatLike, a: Readonly<QuatLike>): QuatLike {
    const a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
    const dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
    const invDot = dot ? 1.0 / dot : 0;

    // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

    out[0] = -a0 * invDot;
    out[1] = -a1 * invDot;
    out[2] = -a2 * invDot;
    out[3] = a3 * invDot;
    return out;
  }

  /**
   * Calculates the conjugate of a quat
   * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param a - quat to calculate conjugate of
   * @returns `out`
   */
  static conjugate(out: QuatLike, a: Readonly<QuatLike>): QuatLike {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = a[3];
    return out;
  }

  /**
   * Creates a quaternion from the given 3x3 rotation matrix.
   *
   * NOTE: The resultant quaternion is not normalized, so you should be sure
   * to renormalize the quaternion yourself where necessary.
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param m - rotation matrix
   * @returns `out`
   */
  static fromMat3(out: QuatLike, m: Readonly<Mat3Like>): QuatLike {
    // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
    // article "Quaternion Calculus and Fast Animation".
    const fTrace = m[0] + m[4] + m[8];
    let fRoot: number;

    if (fTrace > 0.0) {
      // |w| > 1/2, may as well choose w > 1/2
      fRoot = Math.sqrt(fTrace + 1.0); // 2w
      out[3] = 0.5 * fRoot;
      fRoot = 0.5 / fRoot; // 1/(4w)
      out[0] = (m[5] - m[7]) * fRoot;
      out[1] = (m[6] - m[2]) * fRoot;
      out[2] = (m[1] - m[3]) * fRoot;
    } else {
      // |w| <= 1/2
      let i = 0;
      if (m[4] > m[0]) i = 1;
      if (m[8] > m[i * 3 + i]) i = 2;
      let j = (i + 1) % 3;
      let k = (i + 2) % 3;

      fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
      out[i] = 0.5 * fRoot;
      fRoot = 0.5 / fRoot;
      out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
      out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
      out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
    }

    return out;
  }

  /**
   * Creates a quaternion from the given euler angle x, y, z.
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param x - Angle to rotate around X axis in degrees.
   * @param y - Angle to rotate around Y axis in degrees.
   * @param z - Angle to rotate around Z axis in degrees.
   * @returns `out`
   */
  static fromEuler(out: QuatLike, x: number, y: number, z: number): QuatLike {
    let halfToRad = (0.5 * Math.PI) / 180.0;
    x *= halfToRad;
    y *= halfToRad;
    z *= halfToRad;

    let sx = Math.sin(x);
    let cx = Math.cos(x);
    let sy = Math.sin(y);
    let cy = Math.cos(y);
    let sz = Math.sin(z);
    let cz = Math.cos(z);

    out[0] = sx * cy * cz - cx * sy * sz;
    out[1] = cx * sy * cz + sx * cy * sz;
    out[2] = cx * cy * sz - sx * sy * cz;
    out[3] = cx * cy * cz + sx * sy * sz;

    return out;
  }

  /**
   * Returns a string representation of a quatenion
   * @category Static
   *
   * @param a - vector to represent as a string
   * @returns string representation of the vector
   */
  static str(a: Readonly<QuatLike>): string {
    return `Quat(${a.join(', ')})`;
  }

  /**
   * Creates a new quat initialized with values from an existing quaternion
   * @category Static
   *
   * @param a - quaternion to clone
   * @returns a new quaternion
   */
  static clone(a: Readonly<QuatLike>): Quat {
    return new Quat(a);
  }

  /**
   * Creates a new quat initialized with the given values
   * @category Static
   *
   * @param x - X component
   * @param y - Y component
   * @param z - Z component
   * @param w - W component
   * @returns a new quaternion
   */
  static fromValues(x: number, y: number, z: number, w: number): Quat {
    return new Quat(x, y, z, w);
  }

  /**
   * Copy the values from one quat to another
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param a - the source quaternion
   * @returns `out`
   */
  static copy(out: QuatLike, a: Readonly<QuatLike>): QuatLike {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
  }

  /**
   * Set the components of a {@link Quat} to the given values
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param x - X component
   * @param y - Y component
   * @param z - Z component
   * @param w - W component
   * @returns `out`
   */
  static set(out: QuatLike, x: number, y: number, z: number, w: number): QuatLike { return out; }

  /**
   * Adds two {@link Quat}'s
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static add(out: QuatLike, a: Readonly<QuatLike>, b: Readonly<QuatLike>): QuatLike { return out; }

  /**
   * Alias for {@link Quat.multiply}
   * @category Static
   */
  static mul(out: QuatLike, a: Readonly<QuatLike>, b: Readonly<QuatLike>): QuatLike { return out; }

  /**
   * Scales a quat by a scalar number
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the vector to scale
   * @param b - amount to scale the vector by
   * @returns `out`
   */
  static scale(out: QuatLike, a: Readonly<QuatLike>, scale: number): QuatLike {
    out[0] = a[0] * scale;
    out[1] = a[1] * scale;
    out[2] = a[2] * scale;
    out[3] = a[3] * scale;
    return out;
  }

  /**
   * Calculates the dot product of two quat's
   * @category Static
   *
   * @param a - the first operand
   * @param b - the second operand
   * @returns dot product of a and b
   */
  static dot(a: Readonly<QuatLike>, b: Readonly<QuatLike>): number {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
  }

  /**
   * Performs a linear interpolation between two quat's
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param a - the first operand
   * @param b - the second operand
   * @param t - interpolation amount, in the range [0-1], between the two inputs
   * @returns `out`
   */
   static lerp(out: QuatLike, a: Readonly<QuatLike>, b: Readonly<QuatLike>, t: number): QuatLike { return out }

  /**
   * Calculates the magnitude (length) of a {@link Quat}
   * @category Static
   *
   * @param a - quaternion to calculate length of
   * @returns length of `a`
   */
   static magnitude(a: Readonly<QuatLike>): number { return 0; }

  /**
   * Alias for {@link Quat.magnitude}
   * @category Static
   */
  static mag(a: Readonly<QuatLike>): number { return 0; }

  /**
   * Alias for {@link Quat.magnitude}
   * @category Static
   * @deprecated Use {@link Quat.magnitude} to avoid conflicts with builtin `length` methods/attribs
   */
  // @ts-ignore: Length conflicts with Function.length
  static length(a: Readonly<QuatLike>): number { return 0; }

  /**
   * Alias for {@link Quat.magnitude}
   * @category Static
   * @deprecated Use {@link Quat.mag}
   */
  static len(a: Readonly<QuatLike>): number { return 0; }

  /**
   * Calculates the squared length of a {@link Quat}
   * @category Static
   *
   * @param a - quaternion to calculate squared length of
   * @returns squared length of a
   */
  static squaredLength(a: Readonly<QuatLike>): number { return 0; }

  /**
   * Alias for {@link Quat.squaredLength}
   * @category Static
   */
  static sqrLen(a: Readonly<QuatLike>): number { return 0; }

  /**
   * Normalize a {@link Quat}
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param a - quaternion to normalize
   * @returns `out`
   */
  static normalize(out: QuatLike, a: Readonly<QuatLike>): QuatLike { return out; }

  /**
   * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
   * @category Static
   *
   * @param a - The first quaternion.
   * @param b - The second quaternion.
   * @returns True if the vectors are equal, false otherwise.
   */
  static exactEquals(a: Readonly<QuatLike>, b: Readonly<QuatLike>): boolean { return false; }

  /**
   * Returns whether or not the quaternions have approximately the same elements in the same position.
   * @category Static
   *
   * @param a - The first vector.
   * @param b - The second vector.
   * @returns True if the vectors are equal, false otherwise.
   */
  static equals(a: Readonly<QuatLike>, b: Readonly<QuatLike>): boolean { return false; }

  /**
   * Sets a quaternion to represent the shortest rotation from one
   * vector to another.
   *
   * Both vectors are assumed to be unit length.
   * @category Static
   *
   * @param out - the receiving quaternion.
   * @param a - the initial vector
   * @param b - the destination vector
   * @returns `out`
   */
  static rotationTo(out: QuatLike, a: Readonly<Vec3Like>, b: Readonly<Vec3Like>): QuatLike {
    let dot = Vec3.dot(a, b);
    if (dot < -0.999999) {
      Vec3.cross(tmpVec3, xUnitVec3, a);
      if (Vec3.len(tmpVec3) < 0.000001) Vec3.cross(tmpVec3, yUnitVec3, a);
      Vec3.normalize(tmpVec3, tmpVec3);
      Quat.setAxisAngle(out, tmpVec3, Math.PI);
      return out;
    } else if (dot > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      Vec3.cross(tmpVec3, a, b);
      out[0] = tmpVec3[0];
      out[1] = tmpVec3[1];
      out[2] = tmpVec3[2];
      out[3] = 1 + dot;
      return Quat.normalize(out, out);
    }
  }

  /**
   * Performs a spherical linear interpolation with two control points
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param a - the first operand
   * @param b - the second operand
   * @param c - the third operand
   * @param d - the fourth operand
   * @param t - interpolation amount, in the range [0-1], between the two inputs
   * @returns `out`
   */
  static sqlerp(out: QuatLike, a: Readonly<QuatLike>, b: Readonly<QuatLike>, c: Readonly<QuatLike>, d: Readonly<QuatLike>, t: number): QuatLike {
    Quat.slerp(temp1, a, d, t);
    Quat.slerp(temp2, b, c, t);
    Quat.slerp(out, temp1, temp2, 2 * t * (1 - t));

    return out;
  }

  /**
   * Sets the specified quaternion with values corresponding to the given
   * axes. Each axis is a vec3 and is expected to be unit length and
   * perpendicular to all other specified axes.
   * @category Static
   *
   * @param out - The receiving quaternion
   * @param view - the vector representing the viewing direction
   * @param right - the vector representing the local "right" direction
   * @param up - the vector representing the local "up" direction
   * @returns `out`
   */
  static setAxes(out: QuatLike, view: Readonly<Vec3Like>, right: Readonly<Vec3Like>, up: Readonly<Vec3Like>): QuatLike {
    tempMat3[0] = right[0];
    tempMat3[3] = right[1];
    tempMat3[6] = right[2];

    tempMat3[1] = up[0];
    tempMat3[4] = up[1];
    tempMat3[7] = up[2];

    tempMat3[2] = -view[0];
    tempMat3[5] = -view[1];
    tempMat3[8] = -view[2];

    return Quat.normalize(out, Quat.fromMat3(out, tempMat3));
  }
}

// Temporary variables to prevent repeated allocations in the algorithms above.
const temp1 = new Quat();
const temp2 = new Quat();
const tempMat3 = new Mat3();

const tmpVec3 = new Vec3();
const xUnitVec3 = new Vec3(1, 0, 0);
const yUnitVec3 = new Vec3(0, 1, 0);

// Methods which re-use the Vec4 implementation
Quat.set = Vec4.set;
Quat.add = Vec4.add;
Quat.lerp = Vec4.lerp;
Quat.normalize = Vec4.normalize;
Quat.squaredLength = Vec4.squaredLength;
Quat.sqrLen = Vec4.squaredLength;
Quat.exactEquals = Vec4.exactEquals;
Quat.equals = Vec4.equals;
Quat.magnitude = Vec4.magnitude;

// Instance method alias assignments
Quat.prototype.mul = Quat.prototype.multiply;

// Static method alias assignments
Quat.mul = Quat.multiply;
Quat.mag = Quat.magnitude;
Quat.length = Quat.magnitude;
Quat.len = Quat.magnitude;

/**
 * Quat alias for backwards compatibility
 */
export const quat = Quat;