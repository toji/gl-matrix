import { EPSILON } from './common.js';
import { Mat2Like } from './mat2.js';
import { Mat2dLike } from './mat2d.js';
import { Mat3Like } from './mat3.js';
import { Mat4Like } from './mat4.js';
import { Vec3 } from './vec3.js';
import { Vec4 } from './vec4.js';

/**
 * A 2 dimensional vector given as a {@link Vec2}, a 2-element Float32Array, or
 * an array of 2 numbers.
 */
export type Vec2Like = [number, number] | Float32Array;

/**
 * 2 Dimensional Vector
 */
export class Vec2 extends Float32Array {
  /**
   * The number of bytes in a {@link Vec2}.
   */
  static readonly BYTE_LENGTH = 2 * Float32Array.BYTES_PER_ELEMENT;

  /**
   * Create a {@link Vec2}.
   */
   constructor(...values: [Readonly<Vec2Like> | ArrayBufferLike, number?] | number[]) {
    switch(values.length) {
      case 2:{
        const v = values[0];
        if (typeof v === 'number') {
          super([v, values[1]]);
        } else {
          super(v as ArrayBufferLike, values[1], 2);
        }
        break;
      }
      case 1: {
        const v = values[0];
        if (typeof v === 'number') {
          super([v, v]);
        } else {
          super(v as ArrayBufferLike, 0, 2);
        }
        break;
      }
      default:
        super(2); break;
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
   * The magnitude (length) of this.
   * Equivalent to `Vec2.magnitude(this);`
   *
   * Magnitude is used because the `length` attribute is already defined by
   * `Float32Array` to mean the number of elements in the array.
   */
  get magnitude(): number {
    return Math.hypot(this[0], this[1]);
  }
  /**
   * Alias for {@link Vec2.magnitude}
   */
  get mag(): number { return this.magnitude; }

  /**
   * The squared magnitude (length) of `this`.
   * Equivalent to `Vec2.squaredMagnitude(this);`
   */
  get squaredMagnitude(): number {
    const x = this[0];
    const y = this[1];
    return x * x + y * y;
  }
  /**
   * Alias for {@link Vec2.squaredMagnitude}
   */
  get sqrMag(): number { return this.squaredMagnitude; }

  /**
   * A string representation of `this`
   * Equivalent to `Vec2.str(this);`
   */
  get str(): string {
    return Vec2.str(this);
  }

  //===================
  // Instances methods
  //===================

  /**
   * Copy the values from another {@link Vec2} into `this`.
   *
   * @param a the source vector
   * @returns `this`
   */
  copy(a: Readonly<Vec2Like>): Vec2 {
    this.set(a);
    return this;
  }

  // Instead of zero(), use a.fill(0) for instances;

  /**
   * Adds a {@link Vec2} to `this`.
   * Equivalent to `Vec2.add(this, this, b);`
   *
   * @param b - The vector to add to `this`
   * @returns `this`
   */
  add(b: Readonly<Vec2Like>): Vec2 {
    this[0] += b[0];
    this[1] += b[1];
    return this;
  }

  /**
   * Subtracts a {@link Vec2} from `this`.
   * Equivalent to `Vec2.subtract(this, this, b);`
   *
   * @param b - The vector to subtract from `this`
   * @returns `this`
   */
  subtract(b: Readonly<Vec2Like>): Vec2 {
    this[0] -= b[0];
    this[1] -= b[1];
    return this;
  }

  /**
   * Alias for {@link Vec2.subtract}
   */
  sub(b: Readonly<Vec2Like>): Vec2 { return this; }

  /**
   * Multiplies `this` by a {@link Vec2}.
   * Equivalent to `Vec2.multiply(this, this, b);`
   *
   * @param b - The vector to multiply `this` by
   * @returns `this`
   */
  multiply(b: Readonly<Vec2Like>): Vec2 {
    this[0] *= b[0];
    this[1] *= b[1];
    return this;
  }
  /**
   * Alias for {@link Vec2.multiply}
   */
  mul(b: Readonly<Vec2Like>): Vec2 { return this; }

  /**
   * Divides `this` by a {@link Vec2}.
   * Equivalent to `Vec2.divide(this, this, b);`
   *
   * @param b - The vector to divide `this` by
   * @returns {Vec2} `this`
   */
  divide(b: Readonly<Vec2Like>): Vec2 {
    this[0] /= b[0];
    this[1] /= b[1];
    return this;
  }
  /**
   * Alias for {@link Vec2.divide}
   */
  div(b: Readonly<Vec2Like>): Vec2 { return this; }

  /**
   * Scales `this` by a scalar number.
   * Equivalent to `Vec2.scale(this, this, b);`
   *
   * @param b - Amount to scale `this` by
   * @returns `this`
   */
  scale(b: number): Vec2 {
    this[0] *= b;
    this[1] *= b;
    return this;
  }

  /**
   * Calculates `this` scaled by a scalar value then adds the result to `this`.
   * Equivalent to `Vec2.scaleAndAdd(this, this, b, scale);`
   *
   * @param b - The vector to add to `this`
   * @param scale - The amount to scale `b` by before adding
   * @returns `this`
   */
  scaleAndAdd(b: Readonly<Vec2Like>, scale: number): Vec2 {
    this[0] += b[0] * scale;
    this[1] += b[1] * scale;
    return this;
  }

  /**
   * Calculates the euclidian distance between another {@link Vec2} and `this`.
   * Equivalent to `Vec2.distance(this, b);`
   *
   * @param b - The vector to calculate the distance to
   * @returns Distance between `this` and `b`
   */
  distance(b: Readonly<Vec2Like>): number {
    return Vec2.distance(this, b);
  }
  /**
   * Alias for {@link Vec2.distance}
   */
  dist(b: Readonly<Vec2Like>): number { return 0; }

  /**
   * Calculates the squared euclidian distance between another {@link Vec2} and `this`.
   * Equivalent to `Vec2.squaredDistance(this, b);`
   *
   * @param b The vector to calculate the squared distance to
   * @returns Squared distance between `this` and `b`
   */
  squaredDistance(b: Readonly<Vec2Like>): number {
    return Vec2.squaredDistance(this, b);
  }
  /**
   * Alias for {@link Vec2.squaredDistance}
   */
  sqrDist(b: Readonly<Vec2Like>): number { return 0; }

  /**
   * Negates the components of `this`.
   * Equivalent to `Vec2.negate(this, this);`
   *
   * @returns `this`
   */
  negate(): Vec2 {
    this[0] *= -1;
    this[1] *= -1;
    return this;
  }

  /**
   * Inverts the components of `this`.
   * Equivalent to `Vec2.inverse(this, this);`
   *
   * @returns `this`
   */
  invert(): Vec2 {
    this[0] = 1.0 / this[0];
    this[1] = 1.0 / this[1];
    return this;
  }

  /**
   * Calculates the dot product of this and another {@link Vec2}.
   * Equivalent to `Vec2.dot(this, b);`
   *
   * @param b - The second operand
   * @returns Dot product of `this` and `b`
   */
  dot(b: Readonly<Vec2Like>): number {
    return this[0] * b[0] + this[1] * b[1];
  }

  /**
   * Normalize `this`.
   * Equivalent to `Vec2.normalize(this, this);`
   *
   * @returns `this`
   */
   normalize(): Vec2 {
    return Vec2.normalize(this, this) as Vec2;
  }

  //================
  // Static methods
  //================

  /**
   * Creates a new, empty {@link Vec2}
   * @category Static
   *
   * @returns A new 2D vector
   */
  static create(): Vec2 {
    return new Vec2();
  }

  /**
   * Creates a new {@link Vec2} initialized with values from an existing vector
   * @category Static
   *
   * @param a - Vector to clone
   * @returns A new 2D vector
   */
  static clone(a: Readonly<Vec2Like>): Vec2 {
    return new Vec2(a);
  }

  /**
   * Creates a new {@link Vec2} initialized with the given values
   * @category Static
   *
   * @param x - X component
   * @param y - Y component
   * @returns A new 2D vector
   */
   static fromValues(x: number, y: number): Vec2 {
    return new Vec2(x, y);
  }

  /**
   * Copy the values from one {@link Vec2} to another
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - The source vector
   * @returns `out`
   */
  static copy(out: Vec2Like, a: Readonly<Vec2Like>): Vec2Like {
    out[0] = a[0];
    out[1] = a[1];
    return out;
  }

  /**
   * Set the components of a {@link Vec2} to the given values
   * @category Static
   *
   * @param out - The receiving vector
   * @param x - X component
   * @param y - Y component
   * @returns `out`
   */
  static set(out: Vec2Like, x: number, y: number): Vec2Like {
    out[0] = x;
    out[1] = y;
    return out;
  }

  /**
   * Adds two {@link Vec2}s
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - The first operand
   * @param b - The second operand
   * @returns `out`
   */
  static add(out: Vec2Like, a: Readonly<Vec2Like>, b: Readonly<Vec2Like>): Vec2Like {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    return out;
  }

  /**
   * Subtracts vector b from vector a
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - The first operand
   * @param b - The second operand
   * @returns `out`
   */
  static subtract(out: Vec2Like, a: Readonly<Vec2Like>, b: Readonly<Vec2Like>): Vec2Like {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    return out;
  }

  /**
   * Alias for {@link Vec2.subtract}
   * @category Static
   */
  static sub(out: Vec2Like, a: Readonly<Vec2Like>, b: Readonly<Vec2Like>): Vec2Like { return [0, 0]; }

  /**
   * Multiplies two {@link Vec2}s
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - The first operand
   * @param b - The second operand
   * @returns `out`
   */
  static multiply(out: Vec2Like, a: Readonly<Vec2Like>, b: Readonly<Vec2Like>): Vec2Like {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    return out;
  }

  /**
   * Alias for {@link Vec2.multiply}
   * @category Static
   */
   static mul(out: Vec2Like, a: Readonly<Vec2Like>, b: Readonly<Vec2Like>): Vec2Like { return [0, 0]; }

  /**
   * Divides two {@link Vec2}s
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - The first operand
   * @param b - The second operand
   * @returns `out`
   */
  static divide(out: Vec2Like, a: Readonly<Vec2Like>, b: Readonly<Vec2Like>): Vec2Like {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    return out;
  }

  /**
   * Alias for {@link Vec2.divide}
   * @category Static
   */
  static div(out: Vec2Like, a: Readonly<Vec2Like>, b: Readonly<Vec2Like>): Vec2Like { return [0, 0]; }

  /**
   * Math.ceil the components of a {@link Vec2}
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - Vector to ceil
   * @returns `out`
   */
  static ceil(out: Vec2Like, a: Readonly<Vec2Like>): Vec2Like {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    return out;
  }

  /**
   * Math.floor the components of a {@link Vec2}
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - Vector to floor
   * @returns `out`
   */
  static floor(out: Vec2Like, a: Readonly<Vec2Like>): Vec2Like {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    return out;
  }

  /**
   * Returns the minimum of two {@link Vec2}s
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - The first operand
   * @param b - The second operand
   * @returns `out`
   */
  static min(out: Vec2Like, a: Readonly<Vec2Like>, b: Readonly<Vec2Like>): Vec2Like {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    return out;
  }

  /**
   * Returns the maximum of two {@link Vec2}s
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - The first operand
   * @param b - The second operand
   * @returns `out`
   */
  static max(out: Vec2Like, a: Readonly<Vec2Like>, b: Readonly<Vec2Like>): Vec2Like {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    return out;
  }

  /**
   * Math.round the components of a {@link Vec2}
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - Vector to round
   * @returns `out`
   */
  static round(out: Vec2Like, a: Readonly<Vec2Like>): Vec2Like {
    out[0] = Math.round(a[0]);
    out[1] = Math.round(a[1]);
    return out;
  }

  /**
   * Scales a {@link Vec2} by a scalar number
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - The vector to scale
   * @param b - Amount to scale the vector by
   * @returns `out`
   */
  static scale(out: Vec2Like, a: Readonly<Vec2Like>, b: number): Vec2Like {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    return out;
  }

  /**
   * Adds two Vec2's after scaling the second operand by a scalar value
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - The first operand
   * @param b - The second operand
   * @param scale - The amount to scale b by before adding
   * @returns `out`
   */
  static scaleAndAdd(out: Vec2Like, a: Readonly<Vec2Like>, b: Readonly<Vec2Like>, scale: number): Vec2Like {
    out[0] = a[0] + b[0] * scale;
    out[1] = a[1] + b[1] * scale;
    return out;
  }

  /**
   * Calculates the euclidian distance between two {@link Vec2}s
   * @category Static
   *
   * @param a - The first operand
   * @param b - The second operand
   * @returns distance between `a` and `b`
   */
  static distance(a: Readonly<Vec2Like>, b: Readonly<Vec2Like>): number {
    return Math.hypot(b[0] - a[0], b[1] - a[1]);
  }

  /**
   * Alias for {@link Vec2.distance}
   * @category Static
   */
  static dist(a: Readonly<Vec2Like>, b: Readonly<Vec2Like>): number { return 0; }

  /**
   * Calculates the squared euclidian distance between two {@link Vec2}s
   * @category Static
   *
   * @param a - The first operand
   * @param b - The second operand
   * @returns Squared distance between `a` and `b`
   */
  static squaredDistance(a: Readonly<Vec2Like>, b: Readonly<Vec2Like>): number {
    const x = b[0] - a[0];
    const y = b[1] - a[1];
    return x * x + y * y;
  }

  /**
   * Alias for {@link Vec2.distance}
   * @category Static
   */
   static sqrDist(a: Readonly<Vec2Like>, b: Readonly<Vec2Like>): number { return 0; }

  /**
   * Calculates the magnitude (length) of a {@link Vec2}
   * @category Static
   *
   * @param a - Vector to calculate magnitude of
   * @returns Magnitude of a
   */
  static magnitude(a: Readonly<Vec2Like>): number {
    let x = a[0];
    let y = a[1];
    return Math.sqrt(x * x + y * y);
  }
  /**
   * Alias for {@link Vec2.magnitude}
   * @category Static
   */
  static mag(a: Readonly<Vec2Like>): number { return 0; }
  /**
   * Alias for {@link Vec2.magnitude}
   * @category Static
   * @deprecated Use {@link Vec2.magnitude} to avoid conflicts with builtin `length` methods/attribs
   *
   * @param a - vector to calculate length of
   * @returns length of a
   */
  // @ts-ignore: Length conflicts with Function.length
  static length(a: Readonly<Vec2Like>): number { return 0; }
  /**
   * Alias for {@link Vec2.magnitude}
   * @category Static
   * @deprecated Use {@link Vec2.mag}
   */
  static len(a: Readonly<Vec2Like>): number { return 0; }

  /**
   * Calculates the squared length of a {@link Vec2}
   * @category Static
   *
   * @param a - Vector to calculate squared length of
   * @returns Squared length of a
   */
  static squaredLength(a: Readonly<Vec2Like>): number {
    const x = a[0];
    const y = a[1];
    return x * x + y * y;
  }
  /**
   * Alias for {@link Vec2.squaredLength}
   */
  static sqrLen(a: Readonly<Vec2Like>, b: Readonly<Vec2Like>): number { return 0; }

  /**
   * Negates the components of a {@link Vec2}
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - Vector to negate
   * @returns `out`
   */
  static negate(out: Vec2Like, a: Readonly<Vec2Like>) {
    out[0] = -a[0];
    out[1] = -a[1];
    return out;
  }

  /**
   * Returns the inverse of the components of a {@link Vec2}
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - Vector to invert
   * @returns `out`
   */
  static inverse(out: Vec2Like, a: Readonly<Vec2Like>): Vec2Like {
    out[0] = 1.0 / a[0];
    out[1] = 1.0 / a[1];
    return out;
  }

  /**
   * Normalize a {@link Vec2}
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - Vector to normalize
   * @returns `out`
   */
  static normalize(out: Vec2Like, a: Readonly<Vec2Like>): Vec2Like {
    const x = a[0];
    const y = a[1];
    let len = x * x + y * y;
    if (len > 0) {
      //TODO: evaluate use of glm_invsqrt here?
      len = 1 / Math.sqrt(len);
    }
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    return out;
  }

  /**
   * Calculates the dot product of two {@link Vec2}s
   * @category Static
   *
   * @param a - The first operand
   * @param b - The second operand
   * @returns Dot product of `a` and `b`
   */
  static dot(a: Readonly<Vec2Like>, b: Readonly<Vec2Like>): number {
    return a[0] * b[0] + a[1] * b[1];
  }

  /**
   * Computes the cross product of two {@link Vec2}s
   * Note that the cross product must by definition produce a 3D vector.
   * For this reason there is also not instance equivalent for this function.
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - The first operand
   * @param b - The second operand
   * @returns `out`
   */
  static cross(out: Vec2Like, a: Readonly<Vec2Like>, b: Readonly<Vec2Like>): Vec2Like {
    const z = a[0] * b[1] - a[1] * b[0];
    out[0] = out[1] = 0;
    out[2] = z;
    return out;
  }

  /**
   * Performs a linear interpolation between two {@link Vec2}s
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - The first operand
   * @param b - The second operand
   * @param t - Interpolation amount, in the range [0-1], between the two inputs
   * @returns `out`
   */
  static lerp(out: Vec2Like, a: Readonly<Vec2Like>, b: Readonly<Vec2Like>, t: number): Vec2Like {
    const ax = a[0];
    const ay = a[1];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    return out;
  }

  /**
   * Transforms the {@link Vec2} with a {@link Mat2}
   *
   * @param out - The receiving vector
   * @param a - The vector to transform
   * @param m - Matrix to transform with
   * @returns `out`
   */
  static transformMat2(out: Vec2Like, a: Readonly<Vec2Like>, m: Readonly<Mat2Like>): Vec2Like {
    const x = a[0];
    const y = a[1];
    out[0] = m[0] * x + m[2] * y;
    out[1] = m[1] * x + m[3] * y;
    return out;
  }

  /**
   * Transforms the {@link Vec2} with a {@link Mat2d}
   *
   * @param out - The receiving vector
   * @param a - The vector to transform
   * @param m - Matrix to transform with
   * @returns `out`
   */
  static transformMat2d(out: Vec2Like, a: Readonly<Vec2Like>, m: Readonly<Mat2dLike>): Vec2Like {
    const x = a[0];
    const y = a[1];
    out[0] = m[0] * x + m[2] * y + m[4];
    out[1] = m[1] * x + m[3] * y + m[5];
    return out;
  }

  /**
   * Transforms the {@link Vec2} with a {@link Mat3}
   * 3rd vector component is implicitly '1'
   *
   * @param out - The receiving vector
   * @param a - The vector to transform
   * @param m - Matrix to transform with
   * @returns `out`
   */
  static transformMat3(out: Vec2Like, a: Readonly<Vec2Like>, m: Readonly<Mat3Like>): Vec2Like {
    const x = a[0];
    const y = a[1];
    out[0] = m[0] * x + m[3] * y + m[6];
    out[1] = m[1] * x + m[4] * y + m[7];
    return out;
  }

  /**
   * Transforms the {@link Vec2} with a {@link Mat4}
   * 3rd vector component is implicitly '0'
   * 4th vector component is implicitly '1'
   *
   * @param out - The receiving vector
   * @param a - The vector to transform
   * @param m - Matrix to transform with
   * @returns `out`
   */
  static transformMat4(out: Vec2Like, a: Readonly<Vec2Like>, m: Readonly<Mat4Like>): Vec2Like {
    const x = a[0];
    const y = a[1];
    out[0] = m[0] * x + m[4] * y + m[12];
    out[1] = m[1] * x + m[5] * y + m[13];
    return out;
  }

  /**
   * Rotate a 2D vector
   * @category Static
   *
   * @param out - The receiving {@link Vec2}
   * @param a - The {@link Vec2} point to rotate
   * @param b - The origin of the rotation
   * @param rad - The angle of rotation in radians
   * @returns `out`
   */
  static rotate(out: Vec2Like, a: Readonly<Vec2Like>, b: Readonly<Vec2Like>, rad: number): Vec2Like {
    //Translate point to the origin
    const p0 = a[0] - b[0];
    const p1 = a[1] - b[1];
    const sinC = Math.sin(rad);
    const cosC = Math.cos(rad);

    //perform rotation and translate to correct position
    out[0] = p0 * cosC - p1 * sinC + b[0];
    out[1] = p0 * sinC + p1 * cosC + b[1];

    return out;
  }

  /**
   * Get the angle between two 2D vectors
   * @category Static
   *
   * @param a - The first operand
   * @param b - The second operand
   * @returns The angle in radians
   */
  static angle(a: Readonly<Vec2Like>, b: Readonly<Vec2Like>): number {
    const x1 = a[0];
    const y1 = a[1];
    const x2 = b[0];
    const y2 = b[1];
    // mag is the product of the magnitudes of a and b
    const  mag = Math.sqrt(x1 * x1 + y1 * y1) * Math.sqrt(x2 * x2 + y2 * y2);
    // mag &&.. short circuits if mag == 0
    const cosine = mag && (x1 * x2 + y1 * y2) / mag;
    // Math.min(Math.max(cosine, -1), 1) clamps the cosine between -1 and 1
    return Math.acos(Math.min(Math.max(cosine, -1), 1));
  }

  /**
   * Set the components of a {@link Vec2} to zero
   * @category Static
   *
   * @param out - The receiving vector
   * @returns `out`
   */
  static zero(out: Vec2Like): Vec2Like {
    out[0] = 0.0;
    out[1] = 0.0;
    return out;
  }

  /**
   * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
   * @category Static
   *
   * @param a - The first vector.
   * @param b - The second vector.
   * @returns `true` if the vectors components are ===, `false` otherwise.
   */
  static exactEquals(a: Readonly<Vec2Like>, b: Readonly<Vec2Like>): boolean {
    return a[0] === b[0] && a[1] === b[1];
  }

  /**
   * Returns whether or not the vectors have approximately the same elements in the same position.
   * @category Static
   *
   * @param a - The first vector.
   * @param b - The second vector.
   * @returns `true` if the vectors are approximately equal, `false` otherwise.
   */
  static equals(a: Readonly<Vec2Like>, b: Readonly<Vec2Like>): boolean {
    const a0 = a[0];
    const a1 = a[1];
    const b0 = b[0];
    const b1 = b[1];
    return (
      Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
      Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1))
    );
  }

  /**
   * Returns a string representation of a vector
   * @category Static
   *
   * @param a - Vector to represent as a string
   * @returns String representation of the vector
   */
   static str(a: Readonly<Vec2Like>): string {
    return `Vec2(${a.join(', ')})`;
  }
}

// Instance method alias assignments
Vec2.prototype.sub = Vec2.prototype.subtract;
Vec2.prototype.mul = Vec2.prototype.multiply;
Vec2.prototype.div = Vec2.prototype.divide;
Vec2.prototype.dist = Vec2.prototype.distance;
Vec2.prototype.sqrDist = Vec2.prototype.squaredDistance;

// Static method alias assignments
Vec2.sub = Vec2.subtract;
Vec2.mul = Vec2.multiply;
Vec2.div = Vec2.divide;
Vec2.dist = Vec2.distance;
Vec2.sqrDist = Vec2.squaredDistance;
Vec2.sqrLen = Vec2.squaredLength;
Vec2.mag = Vec2.magnitude;
Vec2.length = Vec2.magnitude;
Vec2.len = Vec2.magnitude;

/**
 * Vec2 alias for backwards compatibility
 */
 export const vec2 = Vec2;