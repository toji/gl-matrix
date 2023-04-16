import { EPSILON } from './common.js';
import { Mat4Like } from './mat4.js';
import { QuatLike } from './quat.js';

/**
 * A 4 dimensional vector given as a {@link Vec4}, a 4-element Float32Array, or
 * an array of 4 numbers.
 */
export type Vec4Like = [number, number, number, number] | Float32Array;

/**
 * 4 Dimensional Vector
 */
export class Vec4 extends Float32Array {
  /**
   * The number of bytes in a {@link Vec4}.
   */
  static readonly BYTE_LENGTH = 4 * Float32Array.BYTES_PER_ELEMENT;

  /**
   * Create a {@link Vec4}.
   */
  constructor(...values: [Readonly<Vec4Like> | ArrayBufferLike, number?] | number[]) {
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
        super(4); break;
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

  /**
   * The w component of the vector. Equivalent to `this[3];`
   * @category Vector components
   */
  get w(): number { return this[3]; }
  set w(value: number) { this[3] = value; }

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
   * The a component of the vector. Equivalent to `this[3];`
   * @category Color components
   */
  get a(): number { return this[3]; }
  set a(value: number) { this[3] = value; }

  /**
   * The magnitude (length) of this.
   * Equivalent to `Vec4.magnitude(this);`
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
   * Alias for {@link Vec4.magnitude}
   */
  get mag(): number { return this.magnitude; }

  /**
   * A string representation of `this`
   * Equivalent to `Vec4.str(this);`
   */
  get str(): string {
    return Vec4.str(this);
  }

  //===================
  // Instances methods
  //===================

  /**
   * Copy the values from another {@link Vec4} into `this`.
   *
   * @param a the source vector
   * @returns `this`
   */
  copy(a: Readonly<Vec4Like>): Vec4 {
    super.set(a);
    return this;
  }

  /**
   * Adds a {@link Vec4} to `this`.
   * Equivalent to `Vec4.add(this, this, b);`
   *
   * @param b - The vector to add to `this`
   * @returns `this`
   */
  add(b: Readonly<Vec4Like>): Vec4 {
    this[0] += b[0];
    this[1] += b[1];
    this[2] += b[2];
    this[3] += b[3];
    return this;
  }

  /**
   * Subtracts a {@link Vec4} from `this`.
   * Equivalent to `Vec4.subtract(this, this, b);`
   *
   * @param b - The vector to subtract from `this`
   * @returns `this`
   */
   subtract(b: Readonly<Vec4Like>): Vec4 {
    this[0] -= b[0];
    this[1] -= b[1];
    this[2] -= b[2];
    this[3] -= b[3];
    return this;
  }

  /**
   * Alias for {@link Vec4.subtract}
   */
  sub(b: Readonly<Vec4Like>): Vec4 { return this; }

  /**
   * Multiplies `this` by a {@link Vec4}.
   * Equivalent to `Vec4.multiply(this, this, b);`
   *
   * @param b - The vector to multiply `this` by
   * @returns `this`
   */
  multiply(b: Readonly<Vec4Like>): Vec4 {
    this[0] *= b[0];
    this[1] *= b[1];
    this[2] *= b[2];
    this[3] *= b[3];
    return this;
  }

  /**
   * Alias for {@link Vec4.multiply}
   */
  mul(b: Readonly<Vec4Like>): Vec4 { return this; }

  /**
   * Divides `this` by a {@link Vec4}.
   * Equivalent to `Vec4.divide(this, this, b);`
   *
   * @param b - The vector to divide `this` by
   * @returns `this`
   */
  divide(b: Readonly<Vec4Like>): Vec4 {
    this[0] /= b[0];
    this[1] /= b[1];
    this[2] /= b[2];
    this[3] /= b[3];
    return this;
  }

  /**
   * Alias for {@link Vec4.divide}
   */
  div(b: Readonly<Vec4Like>): Vec4 { return this; }

  /**
   * Scales `this` by a scalar number.
   * Equivalent to `Vec4.scale(this, this, b);`
   *
   * @param b - Amount to scale `this` by
   * @returns `this`
   */
  scale(b: number): Vec4 {
    this[0] *= b;
    this[1] *= b;
    this[2] *= b;
    this[3] *= b;
    return this;
  }

  /**
   * Calculates `this` scaled by a scalar value then adds the result to `this`.
   * Equivalent to `Vec4.scaleAndAdd(this, this, b, scale);`
   *
   * @param b - The vector to add to `this`
   * @param scale - The amount to scale `b` by before adding
   * @returns `this`
   */
  scaleAndAdd(b: Readonly<Vec4Like>, scale: number): Vec4 {
    this[0] += b[0] * scale;
    this[1] += b[1] * scale;
    this[2] += b[2] * scale;
    this[3] += b[3] * scale;
    return this;
  }

  /**
   * Calculates the euclidian distance between another {@link Vec4} and `this`.
   * Equivalent to `Vec4.distance(this, b);`
   *
   * @param b - The vector to calculate the distance to
   * @returns Distance between `this` and `b`
   */
  distance(b: Readonly<Vec4Like>): number {
    return Vec4.distance(this, b);
  }
  /**
   * Alias for {@link Vec4.distance}
   */
  dist(b: Readonly<Vec4Like>): number { return 0; }

  /**
   * Calculates the squared euclidian distance between another {@link Vec4} and `this`.
   * Equivalent to `Vec4.squaredDistance(this, b);`
   *
   * @param b The vector to calculate the squared distance to
   * @returns Squared distance between `this` and `b`
   */
  squaredDistance(b: Readonly<Vec4Like>): number {
    return Vec4.squaredDistance(this, b);
  }
  /**
   * Alias for {@link Vec4.squaredDistance}
   */
  sqrDist(b: Readonly<Vec4Like>): number { return 0; }

  /**
   * Negates the components of `this`.
   * Equivalent to `Vec4.negate(this, this);`
   *
   * @returns `this`
   */
  negate(): Vec4 {
    this[0] *= -1;
    this[1] *= -1;
    this[2] *= -1;
    this[3] *= -1;
    return this;
  }

  /**
   * Inverts the components of `this`.
   * Equivalent to `Vec4.inverse(this, this);`
   *
   * @returns `this`
   */
  invert(): Vec4 {
    this[0] = 1.0 / this[0];
    this[1] = 1.0 / this[1];
    this[2] = 1.0 / this[2];
    this[3] = 1.0 / this[3];
    return this;
  }

  /**
   * Calculates the dot product of this and another {@link Vec4}.
   * Equivalent to `Vec4.dot(this, b);`
   *
   * @param b - The second operand
   * @returns Dot product of `this` and `b`
   */
  dot(b: Readonly<Vec4Like>): number {
    return this[0] * b[0] + this[1] * b[1] + this[2] * b[2] + this[3] * b[3];
  }

  /**
   * Normalize `this`.
   * Equivalent to `Vec4.normalize(this, this);`
   *
   * @returns `this`
   */
  normalize(): Vec4 {
    return Vec4.normalize(this, this) as Vec4;
  }

  //===================
  // Static methods
  //===================

  /**
   * Creates a new, empty {@link Vec4}
   * @category Static
   *
   * @returns a new 4D vector
   */
  static create(): Vec4 {
    return new Vec4();
  }

  /**
   * Creates a new {@link Vec4} initialized with values from an existing vector
   * @category Static
   *
   * @param a - vector to clone
   * @returns a new 4D vector
   */
  static clone(a: Vec4Like): Vec4 {
    return new Vec4(a);
  }

  /**
   * Creates a new {@link Vec4} initialized with the given values
   * @category Static
   *
   * @param x - X component
   * @param y - Y component
   * @param z - Z component
   * @param w - W component
   * @returns a new 4D vector
   */
  static fromValues(x: number, y: number, z: number, w: number): Vec4 {
    return new Vec4(x, y, z, w);
  }

  /**
   * Copy the values from one {@link Vec4} to another
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the source vector
   * @returns `out`
   */
  static copy(out: Vec4Like, a: Readonly<Vec4Like>): Vec4Like {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
  }

  /**
   * Set the components of a {@link Vec4} to the given values
   * @category Static
   *
   * @param out - the receiving vector
   * @param x - X component
   * @param y - Y component
   * @param z - Z component
   * @param w - W component
   * @returns `out`
   */
  static set(out: Vec4Like, x: number, y: number, z: number, w: number): Vec4Like {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
  }

  /**
   * Adds two {@link Vec4}s
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - The first operand
   * @param b - The second operand
   * @returns `out`
   */
  static add(out: Vec4Like, a: Readonly<Vec4Like>, b: Readonly<Vec4Like>): Vec4Like {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
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
  static subtract(out: Vec4Like, a: Readonly<Vec4Like>, b: Readonly<Vec4Like>): Vec4Like {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    return out;
  }

  /**
   * Alias for {@link Vec4.subtract}
   * @category Static
   */
  static sub(out: Vec4Like, a: Readonly<Vec4Like>, b: Readonly<Vec4Like>): Vec4Like { return out; }

  /**
   * Multiplies two {@link Vec4}'s
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static multiply(out: Vec4Like, a: Readonly<Vec4Like>, b: Readonly<Vec4Like>): Vec4Like {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    out[3] = a[3] * b[3];
    return out;
  }

  /**
   * Alias for {@link Vec4.multiply}
   * @category Static
   */
  static mul(out: Vec4Like, a: Readonly<Vec4Like>, b: Readonly<Vec4Like>): Vec4Like { return out; }

  /**
   * Divides two {@link Vec4}'s
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static divide(out: Vec4Like, a: Readonly<Vec4Like>, b: Readonly<Vec4Like>): Vec4Like {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    out[3] = a[3] / b[3];
    return out;
  }

  /**
   * Alias for {@link Vec4.divide}
   * @category Static
   */
  static div(out: Vec4Like, a: Readonly<Vec4Like>, b: Readonly<Vec4Like>): Vec4Like { return out; }

  /**
   * Math.ceil the components of a {@link Vec4}
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to ceil
   * @returns `out`
   */
  static ceil(out: Vec4Like, a: Readonly<Vec4Like>): Vec4Like {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    out[2] = Math.ceil(a[2]);
    out[3] = Math.ceil(a[3]);
    return out;
  }

  /**
   * Math.floor the components of a {@link Vec4}
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to floor
   * @returns `out`
   */
  static floor(out: Vec4Like, a: Readonly<Vec4Like>): Vec4Like {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    out[2] = Math.floor(a[2]);
    out[3] = Math.floor(a[3]);
    return out;
  }

  /**
   * Returns the minimum of two {@link Vec4}'s
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static min(out: Vec4Like, a: Readonly<Vec4Like>, b: Readonly<Vec4Like>): Vec4Like {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    out[3] = Math.min(a[3], b[3]);
    return out;
  }

  /**
   * Returns the maximum of two {@link Vec4}'s
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static max(out: Vec4Like, a: Readonly<Vec4Like>, b: Readonly<Vec4Like>): Vec4Like {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    out[3] = Math.max(a[3], b[3]);
    return out;
  }

  /**
   * Math.round the components of a {@link Vec4}
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to round
   * @returns `out`
   */
  static round(out: Vec4Like, a: Readonly<Vec4Like>): Vec4Like {
    out[0] = Math.round(a[0]);
    out[1] = Math.round(a[1]);
    out[2] = Math.round(a[2]);
    out[3] = Math.round(a[3]);
    return out;
  }

  /**
   * Scales a {@link Vec4} by a scalar number
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the vector to scale
   * @param scale - amount to scale the vector by
   * @returns `out`
   */
  static scale(out: Vec4Like, a: Readonly<Vec4Like>, scale: number): Vec4Like {
    out[0] = a[0] * scale;
    out[1] = a[1] * scale;
    out[2] = a[2] * scale;
    out[3] = a[3] * scale;
    return out;
  }

  /**
   * Adds two {@link Vec4}'s after scaling the second operand by a scalar value
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @param scale - the amount to scale b by before adding
   * @returns `out`
   */
  static scaleAndAdd(out: Vec4Like, a: Readonly<Vec4Like>, b: Readonly<Vec4Like>, scale: number): Vec4Like {
    out[0] = a[0] + b[0] * scale;
    out[1] = a[1] + b[1] * scale;
    out[2] = a[2] + b[2] * scale;
    out[3] = a[3] + b[3] * scale;
    return out;
  }

  /**
   * Calculates the euclidian distance between two {@link Vec4}'s
   * @category Static
   *
   * @param a - the first operand
   * @param b - the second operand
   * @returns distance between a and b
   */
  static distance(a: Readonly<Vec4Like>, b: Readonly<Vec4Like>): number {
    const x = b[0] - a[0];
    const y = b[1] - a[1];
    const z = b[2] - a[2];
    const w = b[3] - a[3];
    return Math.hypot(x, y, z, w);
  }
  /**
   * Alias for {@link Vec4.distance}
   * @category Static
   */
  static dist(a: Readonly<Vec4Like>, b: Readonly<Vec4Like>): number { return 0; }

  /**
   * Calculates the squared euclidian distance between two {@link Vec4}'s
   * @category Static
   *
   * @param a - the first operand
   * @param b - the second operand
   * @returns squared distance between a and b
   */
  static squaredDistance(a: Readonly<Vec4Like>, b: Readonly<Vec4Like>): number {
    const x = b[0] - a[0];
    const y = b[1] - a[1];
    const z = b[2] - a[2];
    const w = b[3] - a[3];
    return x * x + y * y + z * z + w * w;
  }
  /**
   * Alias for {@link Vec4.squaredDistance}
   * @category Static
   */
  static sqrDist(a: Readonly<Vec4Like>, b: Readonly<Vec4Like>): number { return 0; }

  /**
   * Calculates the magnitude (length) of a {@link Vec4}
   * @category Static
   *
   * @param a - vector to calculate length of
   * @returns length of `a`
   */
  static magnitude(a: Readonly<Vec4Like>): number {
    const x = a[0];
    const y = a[1];
    const z = a[2];
    const w = a[3];
    return Math.sqrt(x * x + y * y + z * z + w * w);
  }
  /**
   * Alias for {@link Vec4.magnitude}
   * @category Static
   */
  static mag(a: Readonly<Vec4Like>): number { return 0; }

  /**
   * Alias for {@link Vec4.magnitude}
   * @category Static
   * @deprecated Use {@link Vec4.magnitude} to avoid conflicts with builtin `length` methods/attribs
   */
  // @ts-ignore: Length conflicts with Function.length
  static length(a: Readonly<Vec4Like>): number { return 0; }

  /**
   * Alias for {@link Vec4.magnitude}
   * @category Static
   * @deprecated Use {@link Vec4.mag}
   */
  static len(a: Readonly<Vec4Like>): number { return 0; }

  /**
   * Calculates the squared length of a {@link Vec4}
   * @category Static
   *
   * @param a - vector to calculate squared length of
   * @returns squared length of a
   */
  static squaredLength(a: Readonly<Vec4Like>): number {
    const x = a[0];
    const y = a[1];
    const z = a[2];
    const w = a[3];
    return x * x + y * y + z * z + w * w;
  }

  /**
   * Alias for {@link Vec4.squaredLength}
   * @category Static
   */
  static sqrLen(a: Readonly<Vec4Like>): number { return 0; }

  /**
   * Negates the components of a {@link Vec4}
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to negate
   * @returns `out`
   */
  static negate(out: Vec4Like, a: Readonly<Vec4Like>): Vec4Like {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = -a[3];
    return out;
  }

  /**
   * Returns the inverse of the components of a {@link Vec4}
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to invert
   * @returns `out`
   */
  static inverse(out: Vec4Like, a: Readonly<Vec4Like>): Vec4Like {
    out[0] = 1.0 / a[0];
    out[1] = 1.0 / a[1];
    out[2] = 1.0 / a[2];
    out[3] = 1.0 / a[3];
    return out;
  }

  /**
   * Normalize a {@link Vec4}
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to normalize
   * @returns `out`
   */
  static normalize(out: Vec4Like, a: Readonly<Vec4Like>): Vec4Like {
    const x = a[0];
    const y = a[1];
    const z = a[2];
    const w = a[3];
    let len = x * x + y * y + z * z + w * w;
    if (len > 0) {
      len = 1 / Math.sqrt(len);
    }
    out[0] = x * len;
    out[1] = y * len;
    out[2] = z * len;
    out[3] = w * len;
    return out;
  }

  /**
   * Calculates the dot product of two {@link Vec4}'s
   * @category Static
   *
   * @param a - the first operand
   * @param b - the second operand
   * @returns dot product of a and b
   */
  static dot(a: Readonly<Vec4Like>, b: Readonly<Vec4Like>): number {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
  }

  /**
   * Returns the cross-product of three vectors in a 4-dimensional space
   * @category Static
   *
   * @param out the receiving vector
   * @param u - the first vector
   * @param v - the second vector
   * @param w - the third vector
   * @returns result
   */
  static cross(out: Vec4Like, u: Readonly<Vec4Like>, v: Readonly<Vec4Like>, w: Readonly<Vec4Like>): Vec4Like {
    const a = v[0] * w[1] - v[1] * w[0];
    const b = v[0] * w[2] - v[2] * w[0];
    const c = v[0] * w[3] - v[3] * w[0];
    const d = v[1] * w[2] - v[2] * w[1];
    const e = v[1] * w[3] - v[3] * w[1];
    const f = v[2] * w[3] - v[3] * w[2];
    const g = u[0];
    const h = u[1];
    const i = u[2];
    const j = u[3];

    out[0] = h * f - i * e + j * d;
    out[1] = -(g * f) + i * c - j * b;
    out[2] = g * e - h * c + j * a;
    out[3] = -(g * d) + h * b - i * a;

    return out;
  }

  /**
   * Performs a linear interpolation between two {@link Vec4}'s
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @param t - interpolation amount, in the range [0-1], between the two inputs
   * @returns `out`
   */
  static lerp(out: Vec4Like, a: Readonly<Vec4Like>, b: Readonly<Vec4Like>, t: number): Vec4Like {
    const ax = a[0];
    const ay = a[1];
    const az = a[2];
    const aw = a[3];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    out[3] = aw + t * (b[3] - aw);
    return out;
  }

  /**
   * Generates a random vector with the given scale
   * @category Static
   *
   * @param out - the receiving vector
   * @param [scale] - Length of the resulting vector. If ommitted, a unit vector will be returned
   * @returns `out`
   */
  /*static random(out: Vec4Like, scale): Vec4Like {
    scale = scale || 1.0;

    // Marsaglia, George. Choosing a Point from the Surface of a
    // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
    // http://projecteuclid.org/euclid.aoms/1177692644;
    var v1, v2, v3, v4;
    var s1, s2;
    do {
      v1 = glMatrix.RANDOM() * 2 - 1;
      v2 = glMatrix.RANDOM() * 2 - 1;
      s1 = v1 * v1 + v2 * v2;
    } while (s1 >= 1);
    do {
      v3 = glMatrix.RANDOM() * 2 - 1;
      v4 = glMatrix.RANDOM() * 2 - 1;
      s2 = v3 * v3 + v4 * v4;
    } while (s2 >= 1);

    var d = Math.sqrt((1 - s1) / s2);
    out[0] = scale * v1;
    out[1] = scale * v2;
    out[2] = scale * v3 * d;
    out[3] = scale * v4 * d;
    return out;
  }*/

  /**
   * Transforms the {@link Vec4} with a {@link Mat4}.
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the vector to transform
   * @param m - matrix to transform with
   * @returns `out`
   */
  static transformMat4(out: Vec4Like, a: Readonly<Vec4Like>, m: Readonly<Mat4Like>): Vec4Like {
    const x = a[0];
    const y = a[1];
    const z = a[2];
    const w = a[3];
    out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
    out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
    out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
    out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
    return out;
  }

  /**
   * Transforms the {@link Vec4} with a {@link Quat}
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the vector to transform
   * @param q - quaternion to transform with
   * @returns `out`
   */
  static transformQuat(out: Vec4Like, a: Readonly<Vec4Like>, q: Readonly<QuatLike>): Vec4Like {
    const x = a[0];
    const y = a[1];
    const z = a[2];
    const qx = q[0];
    const qy = q[1];
    const qz = q[2];
    const qw = q[3];

    // calculate quat * vec
    const ix = qw * x + qy * z - qz * y;
    const iy = qw * y + qz * x - qx * z;
    const iz = qw * z + qx * y - qy * x;
    const iw = -qx * x - qy * y - qz * z;

    // calculate result * inverse quat
    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    out[3] = a[3];
    return out;
  }

  /**
   * Set the components of a {@link Vec4} to zero
   * @category Static
   *
   * @param out - the receiving vector
   * @returns `out`
   */
  static zero(out: Vec4Like): Vec4Like {
    out[0] = 0.0;
    out[1] = 0.0;
    out[2] = 0.0;
    out[3] = 0.0;
    return out;
  }

  /**
   * Returns a string representation of a {@link Vec4}
   * @category Static
   *
   * @param a - vector to represent as a string
   * @returns string representation of the vector
   */
  static str(a: Readonly<Vec4Like>): string {
    return `Vec4(${a.join(', ')})`;
  }

  /**
   * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
   * @category Static
   *
   * @param a - The first vector.
   * @param b - The second vector.
   * @returns True if the vectors are equal, false otherwise.
   */
  static exactEquals(a: Readonly<Vec4Like>, b: Readonly<Vec4Like>): boolean {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
  }

  /**
   * Returns whether or not the vectors have approximately the same elements in the same position.
   * @category Static
   *
   * @param a - The first vector.
   * @param b - The second vector.
   * @returns True if the vectors are equal, false otherwise.
   */
  static equals(a: Readonly<Vec4Like>, b: Readonly<Vec4Like>): boolean {
    const a0 = a[0];
    const a1 = a[1];
    const a2 = a[2];
    const a3 = a[3];
    const b0 = b[0];
    const b1 = b[1];
    const b2 = b[2];
    const b3 = b[3];
    return (
      Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
      Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
      Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
      Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3))
    );
  }
}

// Instance method alias assignments
Vec4.prototype.sub = Vec4.prototype.subtract;
Vec4.prototype.mul = Vec4.prototype.multiply;
Vec4.prototype.div = Vec4.prototype.divide;
Vec4.prototype.dist = Vec4.prototype.distance;
Vec4.prototype.sqrDist = Vec4.prototype.squaredDistance;

// Static method alias assignments
Vec4.sub = Vec4.subtract;
Vec4.mul = Vec4.multiply;
Vec4.div = Vec4.divide;
Vec4.dist = Vec4.distance;
Vec4.sqrDist = Vec4.squaredDistance;
Vec4.sqrLen = Vec4.squaredLength;
Vec4.mag = Vec4.magnitude;
Vec4.length = Vec4.magnitude;
Vec4.len = Vec4.magnitude;

/**
 * Vec4 alias for backwards compatibility
 */
export const vec4 = Vec4;