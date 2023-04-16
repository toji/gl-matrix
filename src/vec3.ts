import { EPSILON } from './common.js';
import { Mat4Like } from './mat4.js';
import { Mat3Like } from './mat3.js';
import { QuatLike } from './quat.js';

/**
 * A 3 dimensional vector given as a {@link Vec3}, a 3-element Float32Array, or
 * an array of 3 numbers.
 */
export type Vec3Like = [number, number, number] | Float32Array;

 /**
  * 3 Dimensional Vector
  */
export class Vec3 extends Float32Array {
  /**
  * The number of bytes in a {@link Vec3}.
  */
   static readonly BYTE_LENGTH = 3 * Float32Array.BYTES_PER_ELEMENT;

  /**
  * Create a {@link Vec3}.
  */
  constructor(...values: [Readonly<Vec3Like> | ArrayBufferLike, number?] | number[]) {
    switch(values.length) {
      case 3:
        super(values); break;
      case 2:
        super(values[0] as ArrayBufferLike, values[1], 3); break;
      case 1: {
        const v = values[0];
        if (typeof v === 'number') {
          super([v, v, v]);
        } else {
          super(v as ArrayBufferLike, 0, 3);
        }
        break;
      }
      default:
        super(3); break;
    }
  }

  //============
  // Attributes
  //============

  // Getters and setters to make component access read better.
  // These are likely to be a little bit slower than direct array access.

  /**
   * The x component of the vector. Equivalent to `this[0];`
   * @category Vector components
   */
  get x(): number { return this[0]; }
  set x(value: number) { this[0] = value; }

  /**
   * The y component of the vector. Equivalent to `this[1];`
   * @category Vector components
   */
  get y(): number { return this[1]; }
  set y(value: number) { this[1] = value; }

  /**
   * The z component of the vector. Equivalent to `this[2];`
   * @category Vector components
   */
  get z(): number { return this[2]; }
  set z(value: number) { this[2] = value; }

  // Alternate set of getters and setters in case this is being used to define
  // a color.

  /**
   * The r component of the vector. Equivalent to `this[0];`
   * @category Color components
   */
  get r(): number { return this[0]; }
  set r(value: number) { this[0] = value; }

  /**
   * The g component of the vector. Equivalent to `this[1];`
   * @category Color components
   */
  get g(): number { return this[1]; }
  set g(value: number) { this[1] = value; }

  /**
   * The b component of the vector. Equivalent to `this[2];`
   * @category Color components
   */
  get b(): number { return this[2]; }
  set b(value: number) { this[2] = value; }

  /**
   * The magnitude (length) of this.
   * Equivalent to `Vec3.magnitude(this);`
   *
   * Magnitude is used because the `length` attribute is already defined by
   * `Float32Array` to mean the number of elements in the array.
   */
  get magnitude(): number {
    const x = this[0];
    const y = this[1];
    const z = this[2];
    return Math.sqrt(x * x + y * y + z * z);
  }
  /**
   * Alias for {@link Vec3.magnitude}
   */
  get mag(): number { return this.magnitude; }

  /**
   * The squared magnitude (length) of `this`.
   * Equivalent to `Vec3.squaredMagnitude(this);`
   */
  get squaredMagnitude(): number {
    const x = this[0];
    const y = this[1];
    const z = this[2];
    return x * x + y * y + z * z;
  }
  /**
   * Alias for {@link Vec3.squaredMagnitude}
   */
  get sqrMag(): number { return this.squaredMagnitude; }

  /**
   * A string representation of `this`
   * Equivalent to `Vec3.str(this);`
   */
  get str(): string {
    return Vec3.str(this);
  }

  //===================
  // Instances methods
  //===================

  /**
   * Copy the values from another {@link Vec3} into `this`.
   *
   * @param a the source vector
   * @returns `this`
   */
  copy(a: Readonly<Vec3Like>): Vec3 {
    this.set(a);
    return this;
  }

  /**
   * Adds a {@link Vec3} to `this`.
   * Equivalent to `Vec3.add(this, this, b);`
   *
   * @param b - The vector to add to `this`
   * @returns `this`
   */
  add(b: Readonly<Vec3Like>): Vec3 {
    this[0] += b[0];
    this[1] += b[1];
    this[2] += b[2];
    return this;
  }

  /**
   * Subtracts a {@link Vec3} from `this`.
   * Equivalent to `Vec3.subtract(this, this, b);`
   *
   * @param b - The vector to subtract from `this`
   * @returns `this`
   */
  subtract(b: Readonly<Vec3Like>): Vec3 {
    this[0] -= b[0];
    this[1] -= b[1];
    this[2] -= b[2];
    return this;
  }

  /**
   * Alias for {@link Vec3.subtract}
   */
  sub(b: Readonly<Vec3Like>): Vec3 { return this; }

  /**
   * Multiplies `this` by a {@link Vec3}.
   * Equivalent to `Vec3.multiply(this, this, b);`
   *
   * @param b - The vector to multiply `this` by
   * @returns `this`
   */
  multiply(b: Readonly<Vec3Like>): Vec3 {
    this[0] *= b[0];
    this[1] *= b[1];
    this[2] *= b[2];
    return this;
  }

  /**
   * Alias for {@link Vec3.multiply}
   */
  mul(b: Readonly<Vec3Like>): Vec3 { return this; }

  /**
   * Divides `this` by a {@link Vec3}.
   * Equivalent to `Vec3.divide(this, this, b);`
   *
   * @param b - The vector to divide `this` by
   * @returns `this`
   */
  divide(b: Readonly<Vec3Like>): Vec3 {
    this[0] /= b[0];
    this[1] /= b[1];
    this[2] /= b[2];
    return this;
  }

  /**
   * Alias for {@link Vec3.divide}
   */
  div(b: Readonly<Vec3Like>): Vec3 { return this; }

  /**
   * Scales `this` by a scalar number.
   * Equivalent to `Vec3.scale(this, this, b);`
   *
   * @param b - Amount to scale `this` by
   * @returns `this`
   */
  scale(b: number): Vec3 {
    this[0] *= b;
    this[1] *= b;
    this[2] *= b;
    return this;
  }

  /**
   * Calculates `this` scaled by a scalar value then adds the result to `this`.
   * Equivalent to `Vec3.scaleAndAdd(this, this, b, scale);`
   *
   * @param b - The vector to add to `this`
   * @param scale - The amount to scale `b` by before adding
   * @returns `this`
   */
  scaleAndAdd(b: Readonly<Vec3Like>, scale: number): Vec3 {
    this[0] += b[0] * scale;
    this[1] += b[1] * scale;
    this[2] += b[2] * scale;
    return this;
  }

  /**
   * Calculates the euclidian distance between another {@link Vec3} and `this`.
   * Equivalent to `Vec3.distance(this, b);`
   *
   * @param b - The vector to calculate the distance to
   * @returns Distance between `this` and `b`
   */
  distance(b: Readonly<Vec3Like>): number {
    return Vec3.distance(this, b);
  }
  /**
   * Alias for {@link Vec3.distance}
   */
  dist(b: Readonly<Vec3Like>): number { return 0; }

  /**
   * Calculates the squared euclidian distance between another {@link Vec3} and `this`.
   * Equivalent to `Vec3.squaredDistance(this, b);`
   *
   * @param b The vector to calculate the squared distance to
   * @returns Squared distance between `this` and `b`
   */
  squaredDistance(b: Readonly<Vec3Like>): number {
    return Vec3.squaredDistance(this, b);
  }
  /**
   * Alias for {@link Vec3.squaredDistance}
   */
  sqrDist(b: Readonly<Vec3Like>): number { return 0; }

  /**
   * Negates the components of `this`.
   * Equivalent to `Vec3.negate(this, this);`
   *
   * @returns `this`
   */
  negate(): Vec3 {
    this[0] *= -1;
    this[1] *= -1;
    this[2] *= -1;
    return this;
  }

  /**
   * Inverts the components of `this`.
   * Equivalent to `Vec3.inverse(this, this);`
   *
   * @returns `this`
   */
  invert(): Vec3 {
    this[0] = 1.0 / this[0];
    this[1] = 1.0 / this[1];
    this[2] = 1.0 / this[2];
    return this;
  }

  /**
   * Calculates the dot product of this and another {@link Vec3}.
   * Equivalent to `Vec3.dot(this, b);`
   *
   * @param b - The second operand
   * @returns Dot product of `this` and `b`
   */
  dot(b: Readonly<Vec3Like>): number {
    return this[0] * b[0] + this[1] * b[1] + this[2] * b[2];
  }

  /**
   * Normalize `this`.
   * Equivalent to `Vec3.normalize(this, this);`
   *
   * @returns `this`
   */
   normalize(): Vec3 {
    return Vec3.normalize(this, this) as Vec3;
  }

  //================
  // Static methods
  //================

  /**
   * Creates a new, empty vec3
   * @category Static
   *
   * @returns a new 3D vector
   */
  static create(): Vec3 {
    return new Vec3();
  }

  /**
   * Creates a new vec3 initialized with values from an existing vector
   * @category Static
   *
   * @param a - vector to clone
   * @returns a new 3D vector
   */
  static clone(a: Readonly<Vec3Like>): Vec3 {
    return new Vec3(a);
  }

  /**
   * Calculates the magnitude (length) of a {@link Vec3}
   * @category Static
   *
   * @param a - Vector to calculate magnitude of
   * @returns Magnitude of a
   */
  static magnitude(a: Readonly<Vec3Like>): number {
    let x = a[0];
    let y = a[1];
    let z = a[2];
    return Math.sqrt(x * x + y * y + z * z);
  }
  /**
   * Alias for {@link Vec3.magnitude}
   * @category Static
   */
  static mag(a: Readonly<Vec3Like>): number { return 0; }
  /**
   * Alias for {@link Vec3.magnitude}
   * @category Static
   * @deprecated Use {@link Vec3.magnitude} to avoid conflicts with builtin `length` methods/attribs
   *
   * @param a - vector to calculate length of
   * @returns length of a
   */
  // @ts-ignore: Length conflicts with Function.length
  static length(a: Readonly<Vec3Like>): number { return 0; }
  /**
   * Alias for {@link Vec3.magnitude}
   * @category Static
   * @deprecated Use {@link Vec3.mag}
   */
  static len(a: Readonly<Vec3Like>): number { return 0; }

  /**
   * Creates a new vec3 initialized with the given values
   * @category Static
   *
   * @param x - X component
   * @param y - Y component
   * @param z - Z component
   * @returns a new 3D vector
   */
  static fromValues(x: number, y: number, z: number): Vec3 {
    return new Vec3(x, y, z);
  }

  /**
   * Copy the values from one vec3 to another
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the source vector
   * @returns `out`
   */
  static copy(out: Vec3Like, a: Readonly<Vec3Like>): Vec3Like {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
  }

  /**
   * Set the components of a vec3 to the given values
   * @category Static
   *
   * @param out - the receiving vector
   * @param x - X component
   * @param y - Y component
   * @param z - Z component
   * @returns `out`
   */
  static set(out: Vec3Like, x: number, y: number, z: number): Vec3Like {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
  }

  /**
   * Adds two {@link Vec3}s
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - The first operand
   * @param b - The second operand
   * @returns `out`
   */
  static add(out: Vec3Like, a: Readonly<Vec3Like>, b: Readonly<Vec3Like>): Vec3Like {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    return out;
  }

  /**
   * Subtracts vector b from vector a
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static subtract(out: Vec3Like, a: Readonly<Vec3Like>, b: Readonly<Vec3Like>): Vec3Like {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    return out;
  }

  /**
   * Alias for {@link Vec3.subtract}
   * @category Static
   */
  static sub(out: Vec3Like, a: Readonly<Vec3Like>, b: Readonly<Vec3Like>): Vec3Like { return [0, 0, 0]; };

  /**
   * Multiplies two vec3's
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static multiply(out: Vec3Like, a: Readonly<Vec3Like>, b: Readonly<Vec3Like>): Vec3Like {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    return out;
  }

  /**
   * Alias for {@link Vec3.multiply}
   * @category Static
   */
  static mul(out: Vec3Like, a: Readonly<Vec3Like>, b: Readonly<Vec3Like>): Vec3Like { return [0, 0, 0]; }

  /**
   * Divides two vec3's
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static divide(out: Vec3Like, a: Readonly<Vec3Like>, b: Readonly<Vec3Like>): Vec3Like {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    return out;
  }

  /**
   * Alias for {@link Vec3.divide}
   * @category Static
   */
   static div(out: Vec3Like, a: Readonly<Vec3Like>, b: Readonly<Vec3Like>): Vec3Like { return [0, 0, 0]; };

  /**
   * Math.ceil the components of a vec3
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to ceil
   * @returns `out`
   */
  static ceil(out: Vec3Like, a: Readonly<Vec3Like>): Vec3Like {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    out[2] = Math.ceil(a[2]);
    return out;
  }

  /**
   * Math.floor the components of a vec3
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to floor
   * @returns `out`
   */
  static floor(out: Vec3Like, a: Readonly<Vec3Like>): Vec3Like {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    out[2] = Math.floor(a[2]);
    return out;
  }

  /**
   * Returns the minimum of two vec3's
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static min(out: Vec3Like, a: Readonly<Vec3Like>, b: Readonly<Vec3Like>): Vec3Like {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    return out;
  }

  /**
   * Returns the maximum of two vec3's
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static max(out: Vec3Like, a: Readonly<Vec3Like>, b: Readonly<Vec3Like>): Vec3Like {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    return out;
  }

  /**
   * symmetric round the components of a vec3
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to round
   * @returns `out`
   */
  /*static round(out: Vec3Like, a: Readonly<Vec3Like>): Vec3Like {
    out[0] = glMatrix.round(a[0]);
    out[1] = glMatrix.round(a[1]);
    out[2] = glMatrix.round(a[2]);
    return out;
  }*/

  /**
   * Scales a vec3 by a scalar number
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the vector to scale
   * @param scale - amount to scale the vector by
   * @returns `out`
   */
  static scale(out: Vec3Like, a: Readonly<Vec3Like>, scale: number): Vec3Like {
    out[0] = a[0] * scale;
    out[1] = a[1] * scale;
    out[2] = a[2] * scale;
    return out;
  }

  /**
   * Adds two vec3's after scaling the second operand by a scalar value
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @param scale - the amount to scale b by before adding
   * @returns `out`
   */
  static scaleAndAdd(out: Vec3Like, a: Readonly<Vec3Like>, b: Readonly<Vec3Like>, scale: number) {
    out[0] = a[0] + b[0] * scale;
    out[1] = a[1] + b[1] * scale;
    out[2] = a[2] + b[2] * scale;
    return out;
  }

  /**
   * Calculates the euclidian distance between two vec3's
   * @category Static
   *
   * @param a - the first operand
   * @param b - the second operand
   * @returns distance between a and b
   */
  static distance(a: Readonly<Vec3Like>, b: Readonly<Vec3Like>): number {
    const x = b[0] - a[0];
    const y = b[1] - a[1];
    const z = b[2] - a[2];
    return Math.sqrt(x * x + y * y + z * z);
  }
  /**
   * Alias for {@link Vec3.distance}
   */
  static dist(a: Readonly<Vec3Like>, b: Readonly<Vec3Like>): number { return 0; }

  /**
   * Calculates the squared euclidian distance between two vec3's
   * @category Static
   *
   * @param a - the first operand
   * @param b - the second operand
   * @returns squared distance between a and b
   */
  static squaredDistance(a: Readonly<Vec3Like>, b: Readonly<Vec3Like>): number {
    const x = b[0] - a[0];
    const y = b[1] - a[1];
    const z = b[2] - a[2];
    return x * x + y * y + z * z;
  }
  /**
   * Alias for {@link Vec3.squaredDistance}
   */
  static sqrDist(a: Readonly<Vec3Like>, b: Readonly<Vec3Like>): number { return 0; }

  /**
   * Calculates the squared length of a vec3
   * @category Static
   *
   * @param a - vector to calculate squared length of
   * @returns squared length of a
   */
  static squaredLength(a: Readonly<Vec3Like>): number {
    const x = a[0];
    const y = a[1];
    const z = a[2];
    return x * x + y * y + z * z;
  }
  /**
   * Alias for {@link Vec3.squaredLength}
   */
  static sqrLen(a: Readonly<Vec3Like>, b: Readonly<Vec3Like>): number { return 0; }

  /**
   * Negates the components of a vec3
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to negate
   * @returns `out`
   */
  static negate(out: Vec3Like, a: Readonly<Vec3Like>): Vec3Like {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    return out;
  }

  /**
   * Returns the inverse of the components of a vec3
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to invert
   * @returns `out`
   */
  static inverse(out: Vec3Like, a: Readonly<Vec3Like>): Vec3Like {
    out[0] = 1.0 / a[0];
    out[1] = 1.0 / a[1];
    out[2] = 1.0 / a[2];
    return out;
  }

  /**
   * Normalize a vec3
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to normalize
   * @returns `out`
   */
  static normalize(out: Vec3Like, a: Readonly<Vec3Like>): Vec3Like {
    const x = a[0];
    const y = a[1];
    const z = a[2];
    let len = x * x + y * y + z * z;
    if (len > 0) {
      //TODO: evaluate use of glm_invsqrt here?
      len = 1 / Math.sqrt(len);
    }
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    out[2] = a[2] * len;
    return out;
  }

  /**
   * Calculates the dot product of two vec3's
   * @category Static
   *
   * @param a - the first operand
   * @param b - the second operand
   * @returns dot product of a and b
   */
  static dot(a: Readonly<Vec3Like>, b: Readonly<Vec3Like>): number {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  }

  /**
   * Computes the cross product of two vec3's
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static cross(out: Vec3Like, a: Readonly<Vec3Like>, b: Readonly<Vec3Like>): Vec3Like {
    const ax = a[0],
      ay = a[1],
      az = a[2];
    const bx = b[0],
      by = b[1],
      bz = b[2];

    out[0] = ay * bz - az * by;
    out[1] = az * bx - ax * bz;
    out[2] = ax * by - ay * bx;
    return out;
  }

  /**
   * Performs a linear interpolation between two vec3's
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @param t - interpolation amount, in the range [0-1], between the two inputs
   * @returns `out`
   */
  static lerp(out: Vec3Like, a: Readonly<Vec3Like>, b: Readonly<Vec3Like>, t: number): Vec3Like {
    const ax = a[0];
    const ay = a[1];
    const az = a[2];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    return out;
  }

  /**
   * Performs a spherical linear interpolation between two vec3's
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @param t - interpolation amount, in the range [0-1], between the two inputs
   * @returns `out`
   */
  static slerp(out: Vec3Like, a: Readonly<Vec3Like>, b: Readonly<Vec3Like>, t: number): Vec3Like {
    const angle = Math.acos(Math.min(Math.max(Vec3.dot(a, b), -1), 1));
    const sinTotal = Math.sin(angle);

    const ratioA = Math.sin((1 - t) * angle) / sinTotal;
    const ratioB = Math.sin(t * angle) / sinTotal;
    out[0] = ratioA * a[0] + ratioB * b[0];
    out[1] = ratioA * a[1] + ratioB * b[1];
    out[2] = ratioA * a[2] + ratioB * b[2];

    return out;
  }

  /**
   * Performs a hermite interpolation with two control points
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @param c - the third operand
   * @param d - the fourth operand
   * @param t - interpolation amount, in the range [0-1], between the two inputs
   * @returns `out`
   */
  static hermite(out: Vec3Like, a: Readonly<Vec3Like>, b: Readonly<Vec3Like>, c: Readonly<Vec3Like>, d: Readonly<Vec3Like>, t: number): Vec3Like {
    const factorTimes2 = t * t;
    const factor1 = factorTimes2 * (2 * t - 3) + 1;
    const factor2 = factorTimes2 * (t - 2) + t;
    const factor3 = factorTimes2 * (t - 1);
    const factor4 = factorTimes2 * (3 - 2 * t);

    out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
    out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
    out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

    return out;
  }

  /**
   * Performs a bezier interpolation with two control points
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @param c - the third operand
   * @param d - the fourth operand
   * @param t - interpolation amount, in the range [0-1], between the two inputs
   * @returns `out`
   */
  static bezier(out: Vec3Like, a: Readonly<Vec3Like>, b: Readonly<Vec3Like>, c: Readonly<Vec3Like>, d: Readonly<Vec3Like>, t: number): Vec3Like {
    const inverseFactor = 1 - t;
    const inverseFactorTimesTwo = inverseFactor * inverseFactor;
    const factorTimes2 = t * t;
    const factor1 = inverseFactorTimesTwo * inverseFactor;
    const factor2 = 3 * t * inverseFactorTimesTwo;
    const factor3 = 3 * factorTimes2 * inverseFactor;
    const factor4 = factorTimes2 * t;

    out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
    out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
    out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

    return out;
  }

  /**
   * Generates a random vector with the given scale
   * @category Static
   *
   * @param out - the receiving vector
   * @param {Number} [scale] Length of the resulting vector. If omitted, a unit vector will be returned
   * @returns `out`
   */
  /*static random(out: Vec3Like, scale) {
    scale = scale === undefined ? 1.0 : scale;

    let r = glMatrix.RANDOM() * 2.0 * Math.PI;
    let z = glMatrix.RANDOM() * 2.0 - 1.0;
    let zScale = Math.sqrt(1.0 - z * z) * scale;

    out[0] = Math.cos(r) * zScale;
    out[1] = Math.sin(r) * zScale;
    out[2] = z * scale;
    return out;
  }*/

  /**
   * Transforms the vec3 with a mat4.
   * 4th vector component is implicitly '1'
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the vector to transform
   * @param m - matrix to transform with
   * @returns `out`
   */
  static transformMat4(out: Vec3Like, a: Readonly<Vec3Like>, m: Readonly<Mat4Like>): Vec3Like {
    const x = a[0],
      y = a[1],
      z = a[2];
    const w = (m[3] * x + m[7] * y + m[11] * z + m[15]) || 1.0;
    out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
    out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
    out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
    return out;
  }

  /**
   * Transforms the vec3 with a mat3.
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the vector to transform
   * @param m - the 3x3 matrix to transform with
   * @returns `out`
   */
  static transformMat3(out: Vec3Like, a: Vec3Like, m: Mat3Like): Vec3Like {
    let x = a[0],
      y = a[1],
      z = a[2];
    out[0] = x * m[0] + y * m[3] + z * m[6];
    out[1] = x * m[1] + y * m[4] + z * m[7];
    out[2] = x * m[2] + y * m[5] + z * m[8];
    return out;
  }

  /**
   * Transforms the vec3 with a quat
   * Can also be used for dual quaternions. (Multiply it with the real part)
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the vector to transform
   * @param q - quaternion to transform with
   * @returns `out`
   */
  static transformQuat(out: Vec3Like, a: Readonly<Vec3Like>, q: Readonly<QuatLike>): Vec3Like {
    // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
    const qx = q[0];
    const qy = q[1];
    const qz = q[2];
    const w2 = q[3] * 2;
    const x = a[0];
    const y = a[1];
    const z = a[2];
    // var qvec = [qx, qy, qz];
    // var uv = vec3.cross([], qvec, a);
    const uvx = (qy * z - qz * y);
    const uvy = (qz * x - qx * z);
    const uvz = (qx * y - qy * x);
    // var uuv = vec3.cross([], qvec, uv);
    // vec3.scale(uuv, uuv, 2);
    const uuvx = (qy * uvz - qz * uvy) * 2;
    const uuvy = (qz * uvx - qx * uvz) * 2;
    const uuvz = (qx * uvy - qy * uvx) * 2;
    // vec3.scale(uv, uv, 2 * w);
    // return vec3.add(out, a, vec3.add(out, uv, uuv));
    out[0] = x + (uvx*w2) + uuvx;
    out[1] = y + (uvy*w2) + uuvy;
    out[2] = z + (uvz*w2) + uuvz;
    return out;
  }

  /**
   * Rotate a 3D vector around the x-axis
   * @param out - The receiving vec3
   * @param a - The vec3 point to rotate
   * @param b - The origin of the rotation
   * @param rad - The angle of rotation in radians
   * @returns `out`
   */
  static rotateX(out: Vec3Like, a: Readonly<Vec3Like>, b: Readonly<Vec3Like>, rad: number): Vec3Like {
    const by = b[1];
    const bz = b[2];

    //Translate point to the origin
    const py = a[1] - by;
    const pz = a[2] - bz;

    //perform rotation
    //translate to correct position
    out[0] = a[0];
    out[1] = (py * Math.cos(rad) - pz * Math.sin(rad)) + by;
    out[2] = (py * Math.sin(rad) + pz * Math.cos(rad)) + bz;

    return out;
  }

  /**
   * Rotate a 3D vector around the y-axis
   * @param out - The receiving vec3
   * @param a - The vec3 point to rotate
   * @param b - The origin of the rotation
   * @param rad - The angle of rotation in radians
   * @returns `out`
   */
  static rotateY(out: Vec3Like, a: Readonly<Vec3Like>, b: Readonly<Vec3Like>, rad: number): Vec3Like {
    const bx = b[0];
    const bz = b[2];

    //Translate point to the origin
    const px = a[0] - bx;
    const pz = a[2] - bz;

    //perform rotation
    //translate to correct position
    out[0] = (pz * Math.sin(rad) + px * Math.cos(rad)) + bx;
    out[1] = a[1];
    out[2] = (pz * Math.cos(rad) - px * Math.sin(rad)) + bz;

    return out;
  }

  /**
   * Rotate a 3D vector around the z-axis
   * @param out - The receiving vec3
   * @param a - The vec3 point to rotate
   * @param b - The origin of the rotation
   * @param rad - The angle of rotation in radians
   * @returns `out`
   */
  static rotateZ(out: Vec3Like, a: Readonly<Vec3Like>, b: Readonly<Vec3Like>, rad: number): Vec3Like {
    const bx = b[0];
    const by = b[1];

    //Translate point to the origin
    const px = a[0] - bx;
    const py = a[1] - by;

    //perform rotation
    //translate to correct position
    out[0] = (px * Math.cos(rad) - py * Math.sin(rad)) + bx;
    out[1] = (px * Math.sin(rad) + py * Math.cos(rad)) + by;
    out[2] = b[2];

    return out;
  }

  /**
   * Get the angle between two 3D vectors
   * @param a - The first operand
   * @param b - The second operand
   * @returns The angle in radians
   */
  static angle(a: Readonly<Vec3Like>, b: Readonly<Vec3Like>) {
    const ax = a[0];
    const ay = a[1];
    const az = a[2];
    const bx = b[0];
    const by = b[1];
    const bz = b[2];
    const mag = Math.sqrt((ax * ax + ay * ay + az * az) * (bx * bx + by * by + bz * bz));
    const cosine = mag && Vec3.dot(a, b) / mag;
    return Math.acos(Math.min(Math.max(cosine, -1), 1));
  }

  /**
   * Set the components of a vec3 to zero
   * @category Static
   *
   * @param out - the receiving vector
   * @returns `out`
   */
  static zero(out: Vec3Like): Vec3Like {
    out[0] = 0.0;
    out[1] = 0.0;
    out[2] = 0.0;
    return out;
  }

  /**
   * Returns a string representation of a vector
   * @category Static
   *
   * @param a - vector to represent as a string
   * @returns string representation of the vector
   */
  static str(a: Readonly<Vec3Like>): string {
    return `Vec3(${a.join(', ')})`;
  }

  /**
   * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
   * @category Static
   *
   * @param a - The first vector.
   * @param b - The second vector.
   * @returns True if the vectors are equal, false otherwise.
   */
  static exactEquals(a: Readonly<Vec3Like>, b: Readonly<Vec3Like>): boolean {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
  }

  /**
   * Returns whether or not the vectors have approximately the same elements in the same position.
   * @category Static
   *
   * @param a - The first vector.
   * @param b - The second vector.
   * @returns True if the vectors are equal, false otherwise.
   */
  static equals(a: Readonly<Vec3Like>, b: Readonly<Vec3Like>): boolean {
    const a0 = a[0];
    const a1 = a[1];
    const a2 = a[2];
    const b0 = b[0];
    const b1 = b[1];
    const b2 = b[2];
    return (
      Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
      Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
      Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2))
    );
  }
}

// Instance method alias assignments
Vec3.prototype.sub = Vec3.prototype.subtract;
Vec3.prototype.mul = Vec3.prototype.multiply;
Vec3.prototype.div = Vec3.prototype.divide;
Vec3.prototype.dist = Vec3.prototype.distance;
Vec3.prototype.sqrDist = Vec3.prototype.squaredDistance;

// Static method alias assignments
Vec3.sub = Vec3.subtract;
Vec3.mul = Vec3.multiply;
Vec3.div = Vec3.divide;
Vec3.dist = Vec3.distance;
Vec3.sqrDist = Vec3.squaredDistance;
Vec3.sqrLen = Vec3.squaredLength;
Vec3.mag = Vec3.magnitude;
Vec3.length = Vec3.magnitude;
Vec3.len = Vec3.magnitude;

/**
 * Vec3 alias for backwards compatibility
 */
export const vec3 = Vec3;