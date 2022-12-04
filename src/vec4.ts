import { EPSILON } from './common.js';
import { Vec2 } from './vec2.js';
import { Vec3 } from './vec3.js';
import { Mat4Like } from './mat4.js';

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
  constructor(...values: [Readonly<Vec4Like>, number?] | number[]) {
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
   * Creates a new, empty vec4
   * @category Static
   *
   * @returns a new 4D vector
   */
  static create(): Vec4 {
    return new Vec4();
  }

  /**
   * Creates a new vec4 initialized with values from an existing vector
   * @category Static
   *
   * @param a - vector to clone
   * @returns a new 4D vector
   */
  static clone(a: Vec4Like): Vec4 {
    return new Vec4(a);
  }

  /**
   * Creates a new vec4 initialized with the given values
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
   * Copy the values from one vec4 to another
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
   * Set the components of a vec4 to the given values
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
  static transformQuat(out: Vec4Like, a: Readonly<Vec4Like>, q: Readonly<Vec4Like>): Vec4Like {
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

  //====================
  // Swizzle attributes
  //====================

  // The contents of the following section are autogenerated by scripts/gen-swizzle.js and should
  // not be modified by hand.
  // [Swizzle Autogen]

  /**
   * Swizzle operations are performed by using the `.` operator in conjunction with any combination
   * of between two to four component names, either from the set `xyzw` or `rgba` (though not intermixed).
   * They return a new vector with the same number of components as specified in the swizzle attribute.
   *
   * @category Swizzle
   *
   * @example
   * ```js
   * let v = new Vec4(0, 1, 2, 3);
   *
   * v.yx // returns new Vec2(1, 0);
   * v.xwy // returns new Vec3(0, 3, 1);
   * v.wyxw // returns new Vec4(3, 1, 0, 3);
   *
   * v.rgba // returns new Vec4(0, 1, 2, 3);
   * v.rag // returns new Vec3(0, 3, 1);
   * v.gg // returns new Vec2(1, 1);
   * ```
   */
  get xyzw(): Vec4 { return new Vec4(this[0], this[1], this[2], this[3]); }

  /** @hidden */ get xx(): Vec2 { return new Vec2(this[0], this[0]); }
  /** @hidden */ get xy(): Vec2 { return new Vec2(this[0], this[1]); }
  /** @hidden */ get xz(): Vec2 { return new Vec2(this[0], this[2]); }
  /** @hidden */ get xw(): Vec2 { return new Vec2(this[0], this[3]); }
  /** @hidden */ get yx(): Vec2 { return new Vec2(this[1], this[0]); }
  /** @hidden */ get yy(): Vec2 { return new Vec2(this[1], this[1]); }
  /** @hidden */ get yz(): Vec2 { return new Vec2(this[1], this[2]); }
  /** @hidden */ get yw(): Vec2 { return new Vec2(this[1], this[3]); }
  /** @hidden */ get zx(): Vec2 { return new Vec2(this[2], this[0]); }
  /** @hidden */ get zy(): Vec2 { return new Vec2(this[2], this[1]); }
  /** @hidden */ get zz(): Vec2 { return new Vec2(this[2], this[2]); }
  /** @hidden */ get zw(): Vec2 { return new Vec2(this[2], this[3]); }
  /** @hidden */ get wx(): Vec2 { return new Vec2(this[3], this[0]); }
  /** @hidden */ get wy(): Vec2 { return new Vec2(this[3], this[1]); }
  /** @hidden */ get wz(): Vec2 { return new Vec2(this[3], this[2]); }
  /** @hidden */ get ww(): Vec2 { return new Vec2(this[3], this[3]); }
  /** @hidden */ get xxx(): Vec3 { return new Vec3(this[0], this[0], this[0]); }
  /** @hidden */ get xxy(): Vec3 { return new Vec3(this[0], this[0], this[1]); }
  /** @hidden */ get xxz(): Vec3 { return new Vec3(this[0], this[0], this[2]); }
  /** @hidden */ get xxw(): Vec3 { return new Vec3(this[0], this[0], this[3]); }
  /** @hidden */ get xyx(): Vec3 { return new Vec3(this[0], this[1], this[0]); }
  /** @hidden */ get xyy(): Vec3 { return new Vec3(this[0], this[1], this[1]); }
  /** @hidden */ get xyz(): Vec3 { return new Vec3(this[0], this[1], this[2]); }
  /** @hidden */ get xyw(): Vec3 { return new Vec3(this[0], this[1], this[3]); }
  /** @hidden */ get xzx(): Vec3 { return new Vec3(this[0], this[2], this[0]); }
  /** @hidden */ get xzy(): Vec3 { return new Vec3(this[0], this[2], this[1]); }
  /** @hidden */ get xzz(): Vec3 { return new Vec3(this[0], this[2], this[2]); }
  /** @hidden */ get xzw(): Vec3 { return new Vec3(this[0], this[2], this[3]); }
  /** @hidden */ get xwx(): Vec3 { return new Vec3(this[0], this[3], this[0]); }
  /** @hidden */ get xwy(): Vec3 { return new Vec3(this[0], this[3], this[1]); }
  /** @hidden */ get xwz(): Vec3 { return new Vec3(this[0], this[3], this[2]); }
  /** @hidden */ get xww(): Vec3 { return new Vec3(this[0], this[3], this[3]); }
  /** @hidden */ get yxx(): Vec3 { return new Vec3(this[1], this[0], this[0]); }
  /** @hidden */ get yxy(): Vec3 { return new Vec3(this[1], this[0], this[1]); }
  /** @hidden */ get yxz(): Vec3 { return new Vec3(this[1], this[0], this[2]); }
  /** @hidden */ get yxw(): Vec3 { return new Vec3(this[1], this[0], this[3]); }
  /** @hidden */ get yyx(): Vec3 { return new Vec3(this[1], this[1], this[0]); }
  /** @hidden */ get yyy(): Vec3 { return new Vec3(this[1], this[1], this[1]); }
  /** @hidden */ get yyz(): Vec3 { return new Vec3(this[1], this[1], this[2]); }
  /** @hidden */ get yyw(): Vec3 { return new Vec3(this[1], this[1], this[3]); }
  /** @hidden */ get yzx(): Vec3 { return new Vec3(this[1], this[2], this[0]); }
  /** @hidden */ get yzy(): Vec3 { return new Vec3(this[1], this[2], this[1]); }
  /** @hidden */ get yzz(): Vec3 { return new Vec3(this[1], this[2], this[2]); }
  /** @hidden */ get yzw(): Vec3 { return new Vec3(this[1], this[2], this[3]); }
  /** @hidden */ get ywx(): Vec3 { return new Vec3(this[1], this[3], this[0]); }
  /** @hidden */ get ywy(): Vec3 { return new Vec3(this[1], this[3], this[1]); }
  /** @hidden */ get ywz(): Vec3 { return new Vec3(this[1], this[3], this[2]); }
  /** @hidden */ get yww(): Vec3 { return new Vec3(this[1], this[3], this[3]); }
  /** @hidden */ get zxx(): Vec3 { return new Vec3(this[2], this[0], this[0]); }
  /** @hidden */ get zxy(): Vec3 { return new Vec3(this[2], this[0], this[1]); }
  /** @hidden */ get zxz(): Vec3 { return new Vec3(this[2], this[0], this[2]); }
  /** @hidden */ get zxw(): Vec3 { return new Vec3(this[2], this[0], this[3]); }
  /** @hidden */ get zyx(): Vec3 { return new Vec3(this[2], this[1], this[0]); }
  /** @hidden */ get zyy(): Vec3 { return new Vec3(this[2], this[1], this[1]); }
  /** @hidden */ get zyz(): Vec3 { return new Vec3(this[2], this[1], this[2]); }
  /** @hidden */ get zyw(): Vec3 { return new Vec3(this[2], this[1], this[3]); }
  /** @hidden */ get zzx(): Vec3 { return new Vec3(this[2], this[2], this[0]); }
  /** @hidden */ get zzy(): Vec3 { return new Vec3(this[2], this[2], this[1]); }
  /** @hidden */ get zzz(): Vec3 { return new Vec3(this[2], this[2], this[2]); }
  /** @hidden */ get zzw(): Vec3 { return new Vec3(this[2], this[2], this[3]); }
  /** @hidden */ get zwx(): Vec3 { return new Vec3(this[2], this[3], this[0]); }
  /** @hidden */ get zwy(): Vec3 { return new Vec3(this[2], this[3], this[1]); }
  /** @hidden */ get zwz(): Vec3 { return new Vec3(this[2], this[3], this[2]); }
  /** @hidden */ get zww(): Vec3 { return new Vec3(this[2], this[3], this[3]); }
  /** @hidden */ get wxx(): Vec3 { return new Vec3(this[3], this[0], this[0]); }
  /** @hidden */ get wxy(): Vec3 { return new Vec3(this[3], this[0], this[1]); }
  /** @hidden */ get wxz(): Vec3 { return new Vec3(this[3], this[0], this[2]); }
  /** @hidden */ get wxw(): Vec3 { return new Vec3(this[3], this[0], this[3]); }
  /** @hidden */ get wyx(): Vec3 { return new Vec3(this[3], this[1], this[0]); }
  /** @hidden */ get wyy(): Vec3 { return new Vec3(this[3], this[1], this[1]); }
  /** @hidden */ get wyz(): Vec3 { return new Vec3(this[3], this[1], this[2]); }
  /** @hidden */ get wyw(): Vec3 { return new Vec3(this[3], this[1], this[3]); }
  /** @hidden */ get wzx(): Vec3 { return new Vec3(this[3], this[2], this[0]); }
  /** @hidden */ get wzy(): Vec3 { return new Vec3(this[3], this[2], this[1]); }
  /** @hidden */ get wzz(): Vec3 { return new Vec3(this[3], this[2], this[2]); }
  /** @hidden */ get wzw(): Vec3 { return new Vec3(this[3], this[2], this[3]); }
  /** @hidden */ get wwx(): Vec3 { return new Vec3(this[3], this[3], this[0]); }
  /** @hidden */ get wwy(): Vec3 { return new Vec3(this[3], this[3], this[1]); }
  /** @hidden */ get wwz(): Vec3 { return new Vec3(this[3], this[3], this[2]); }
  /** @hidden */ get www(): Vec3 { return new Vec3(this[3], this[3], this[3]); }
  /** @hidden */ get xxxx(): Vec4 { return new Vec4(this[0], this[0], this[0], this[0]); }
  /** @hidden */ get xxxy(): Vec4 { return new Vec4(this[0], this[0], this[0], this[1]); }
  /** @hidden */ get xxxz(): Vec4 { return new Vec4(this[0], this[0], this[0], this[2]); }
  /** @hidden */ get xxxw(): Vec4 { return new Vec4(this[0], this[0], this[0], this[3]); }
  /** @hidden */ get xxyx(): Vec4 { return new Vec4(this[0], this[0], this[1], this[0]); }
  /** @hidden */ get xxyy(): Vec4 { return new Vec4(this[0], this[0], this[1], this[1]); }
  /** @hidden */ get xxyz(): Vec4 { return new Vec4(this[0], this[0], this[1], this[2]); }
  /** @hidden */ get xxyw(): Vec4 { return new Vec4(this[0], this[0], this[1], this[3]); }
  /** @hidden */ get xxzx(): Vec4 { return new Vec4(this[0], this[0], this[2], this[0]); }
  /** @hidden */ get xxzy(): Vec4 { return new Vec4(this[0], this[0], this[2], this[1]); }
  /** @hidden */ get xxzz(): Vec4 { return new Vec4(this[0], this[0], this[2], this[2]); }
  /** @hidden */ get xxzw(): Vec4 { return new Vec4(this[0], this[0], this[2], this[3]); }
  /** @hidden */ get xxwx(): Vec4 { return new Vec4(this[0], this[0], this[3], this[0]); }
  /** @hidden */ get xxwy(): Vec4 { return new Vec4(this[0], this[0], this[3], this[1]); }
  /** @hidden */ get xxwz(): Vec4 { return new Vec4(this[0], this[0], this[3], this[2]); }
  /** @hidden */ get xxww(): Vec4 { return new Vec4(this[0], this[0], this[3], this[3]); }
  /** @hidden */ get xyxx(): Vec4 { return new Vec4(this[0], this[1], this[0], this[0]); }
  /** @hidden */ get xyxy(): Vec4 { return new Vec4(this[0], this[1], this[0], this[1]); }
  /** @hidden */ get xyxz(): Vec4 { return new Vec4(this[0], this[1], this[0], this[2]); }
  /** @hidden */ get xyxw(): Vec4 { return new Vec4(this[0], this[1], this[0], this[3]); }
  /** @hidden */ get xyyx(): Vec4 { return new Vec4(this[0], this[1], this[1], this[0]); }
  /** @hidden */ get xyyy(): Vec4 { return new Vec4(this[0], this[1], this[1], this[1]); }
  /** @hidden */ get xyyz(): Vec4 { return new Vec4(this[0], this[1], this[1], this[2]); }
  /** @hidden */ get xyyw(): Vec4 { return new Vec4(this[0], this[1], this[1], this[3]); }
  /** @hidden */ get xyzx(): Vec4 { return new Vec4(this[0], this[1], this[2], this[0]); }
  /** @hidden */ get xyzy(): Vec4 { return new Vec4(this[0], this[1], this[2], this[1]); }
  /** @hidden */ get xyzz(): Vec4 { return new Vec4(this[0], this[1], this[2], this[2]); }
  /** @hidden */ get xywx(): Vec4 { return new Vec4(this[0], this[1], this[3], this[0]); }
  /** @hidden */ get xywy(): Vec4 { return new Vec4(this[0], this[1], this[3], this[1]); }
  /** @hidden */ get xywz(): Vec4 { return new Vec4(this[0], this[1], this[3], this[2]); }
  /** @hidden */ get xyww(): Vec4 { return new Vec4(this[0], this[1], this[3], this[3]); }
  /** @hidden */ get xzxx(): Vec4 { return new Vec4(this[0], this[2], this[0], this[0]); }
  /** @hidden */ get xzxy(): Vec4 { return new Vec4(this[0], this[2], this[0], this[1]); }
  /** @hidden */ get xzxz(): Vec4 { return new Vec4(this[0], this[2], this[0], this[2]); }
  /** @hidden */ get xzxw(): Vec4 { return new Vec4(this[0], this[2], this[0], this[3]); }
  /** @hidden */ get xzyx(): Vec4 { return new Vec4(this[0], this[2], this[1], this[0]); }
  /** @hidden */ get xzyy(): Vec4 { return new Vec4(this[0], this[2], this[1], this[1]); }
  /** @hidden */ get xzyz(): Vec4 { return new Vec4(this[0], this[2], this[1], this[2]); }
  /** @hidden */ get xzyw(): Vec4 { return new Vec4(this[0], this[2], this[1], this[3]); }
  /** @hidden */ get xzzx(): Vec4 { return new Vec4(this[0], this[2], this[2], this[0]); }
  /** @hidden */ get xzzy(): Vec4 { return new Vec4(this[0], this[2], this[2], this[1]); }
  /** @hidden */ get xzzz(): Vec4 { return new Vec4(this[0], this[2], this[2], this[2]); }
  /** @hidden */ get xzzw(): Vec4 { return new Vec4(this[0], this[2], this[2], this[3]); }
  /** @hidden */ get xzwx(): Vec4 { return new Vec4(this[0], this[2], this[3], this[0]); }
  /** @hidden */ get xzwy(): Vec4 { return new Vec4(this[0], this[2], this[3], this[1]); }
  /** @hidden */ get xzwz(): Vec4 { return new Vec4(this[0], this[2], this[3], this[2]); }
  /** @hidden */ get xzww(): Vec4 { return new Vec4(this[0], this[2], this[3], this[3]); }
  /** @hidden */ get xwxx(): Vec4 { return new Vec4(this[0], this[3], this[0], this[0]); }
  /** @hidden */ get xwxy(): Vec4 { return new Vec4(this[0], this[3], this[0], this[1]); }
  /** @hidden */ get xwxz(): Vec4 { return new Vec4(this[0], this[3], this[0], this[2]); }
  /** @hidden */ get xwxw(): Vec4 { return new Vec4(this[0], this[3], this[0], this[3]); }
  /** @hidden */ get xwyx(): Vec4 { return new Vec4(this[0], this[3], this[1], this[0]); }
  /** @hidden */ get xwyy(): Vec4 { return new Vec4(this[0], this[3], this[1], this[1]); }
  /** @hidden */ get xwyz(): Vec4 { return new Vec4(this[0], this[3], this[1], this[2]); }
  /** @hidden */ get xwyw(): Vec4 { return new Vec4(this[0], this[3], this[1], this[3]); }
  /** @hidden */ get xwzx(): Vec4 { return new Vec4(this[0], this[3], this[2], this[0]); }
  /** @hidden */ get xwzy(): Vec4 { return new Vec4(this[0], this[3], this[2], this[1]); }
  /** @hidden */ get xwzz(): Vec4 { return new Vec4(this[0], this[3], this[2], this[2]); }
  /** @hidden */ get xwzw(): Vec4 { return new Vec4(this[0], this[3], this[2], this[3]); }
  /** @hidden */ get xwwx(): Vec4 { return new Vec4(this[0], this[3], this[3], this[0]); }
  /** @hidden */ get xwwy(): Vec4 { return new Vec4(this[0], this[3], this[3], this[1]); }
  /** @hidden */ get xwwz(): Vec4 { return new Vec4(this[0], this[3], this[3], this[2]); }
  /** @hidden */ get xwww(): Vec4 { return new Vec4(this[0], this[3], this[3], this[3]); }
  /** @hidden */ get yxxx(): Vec4 { return new Vec4(this[1], this[0], this[0], this[0]); }
  /** @hidden */ get yxxy(): Vec4 { return new Vec4(this[1], this[0], this[0], this[1]); }
  /** @hidden */ get yxxz(): Vec4 { return new Vec4(this[1], this[0], this[0], this[2]); }
  /** @hidden */ get yxxw(): Vec4 { return new Vec4(this[1], this[0], this[0], this[3]); }
  /** @hidden */ get yxyx(): Vec4 { return new Vec4(this[1], this[0], this[1], this[0]); }
  /** @hidden */ get yxyy(): Vec4 { return new Vec4(this[1], this[0], this[1], this[1]); }
  /** @hidden */ get yxyz(): Vec4 { return new Vec4(this[1], this[0], this[1], this[2]); }
  /** @hidden */ get yxyw(): Vec4 { return new Vec4(this[1], this[0], this[1], this[3]); }
  /** @hidden */ get yxzx(): Vec4 { return new Vec4(this[1], this[0], this[2], this[0]); }
  /** @hidden */ get yxzy(): Vec4 { return new Vec4(this[1], this[0], this[2], this[1]); }
  /** @hidden */ get yxzz(): Vec4 { return new Vec4(this[1], this[0], this[2], this[2]); }
  /** @hidden */ get yxzw(): Vec4 { return new Vec4(this[1], this[0], this[2], this[3]); }
  /** @hidden */ get yxwx(): Vec4 { return new Vec4(this[1], this[0], this[3], this[0]); }
  /** @hidden */ get yxwy(): Vec4 { return new Vec4(this[1], this[0], this[3], this[1]); }
  /** @hidden */ get yxwz(): Vec4 { return new Vec4(this[1], this[0], this[3], this[2]); }
  /** @hidden */ get yxww(): Vec4 { return new Vec4(this[1], this[0], this[3], this[3]); }
  /** @hidden */ get yyxx(): Vec4 { return new Vec4(this[1], this[1], this[0], this[0]); }
  /** @hidden */ get yyxy(): Vec4 { return new Vec4(this[1], this[1], this[0], this[1]); }
  /** @hidden */ get yyxz(): Vec4 { return new Vec4(this[1], this[1], this[0], this[2]); }
  /** @hidden */ get yyxw(): Vec4 { return new Vec4(this[1], this[1], this[0], this[3]); }
  /** @hidden */ get yyyx(): Vec4 { return new Vec4(this[1], this[1], this[1], this[0]); }
  /** @hidden */ get yyyy(): Vec4 { return new Vec4(this[1], this[1], this[1], this[1]); }
  /** @hidden */ get yyyz(): Vec4 { return new Vec4(this[1], this[1], this[1], this[2]); }
  /** @hidden */ get yyyw(): Vec4 { return new Vec4(this[1], this[1], this[1], this[3]); }
  /** @hidden */ get yyzx(): Vec4 { return new Vec4(this[1], this[1], this[2], this[0]); }
  /** @hidden */ get yyzy(): Vec4 { return new Vec4(this[1], this[1], this[2], this[1]); }
  /** @hidden */ get yyzz(): Vec4 { return new Vec4(this[1], this[1], this[2], this[2]); }
  /** @hidden */ get yyzw(): Vec4 { return new Vec4(this[1], this[1], this[2], this[3]); }
  /** @hidden */ get yywx(): Vec4 { return new Vec4(this[1], this[1], this[3], this[0]); }
  /** @hidden */ get yywy(): Vec4 { return new Vec4(this[1], this[1], this[3], this[1]); }
  /** @hidden */ get yywz(): Vec4 { return new Vec4(this[1], this[1], this[3], this[2]); }
  /** @hidden */ get yyww(): Vec4 { return new Vec4(this[1], this[1], this[3], this[3]); }
  /** @hidden */ get yzxx(): Vec4 { return new Vec4(this[1], this[2], this[0], this[0]); }
  /** @hidden */ get yzxy(): Vec4 { return new Vec4(this[1], this[2], this[0], this[1]); }
  /** @hidden */ get yzxz(): Vec4 { return new Vec4(this[1], this[2], this[0], this[2]); }
  /** @hidden */ get yzxw(): Vec4 { return new Vec4(this[1], this[2], this[0], this[3]); }
  /** @hidden */ get yzyx(): Vec4 { return new Vec4(this[1], this[2], this[1], this[0]); }
  /** @hidden */ get yzyy(): Vec4 { return new Vec4(this[1], this[2], this[1], this[1]); }
  /** @hidden */ get yzyz(): Vec4 { return new Vec4(this[1], this[2], this[1], this[2]); }
  /** @hidden */ get yzyw(): Vec4 { return new Vec4(this[1], this[2], this[1], this[3]); }
  /** @hidden */ get yzzx(): Vec4 { return new Vec4(this[1], this[2], this[2], this[0]); }
  /** @hidden */ get yzzy(): Vec4 { return new Vec4(this[1], this[2], this[2], this[1]); }
  /** @hidden */ get yzzz(): Vec4 { return new Vec4(this[1], this[2], this[2], this[2]); }
  /** @hidden */ get yzzw(): Vec4 { return new Vec4(this[1], this[2], this[2], this[3]); }
  /** @hidden */ get yzwx(): Vec4 { return new Vec4(this[1], this[2], this[3], this[0]); }
  /** @hidden */ get yzwy(): Vec4 { return new Vec4(this[1], this[2], this[3], this[1]); }
  /** @hidden */ get yzwz(): Vec4 { return new Vec4(this[1], this[2], this[3], this[2]); }
  /** @hidden */ get yzww(): Vec4 { return new Vec4(this[1], this[2], this[3], this[3]); }
  /** @hidden */ get ywxx(): Vec4 { return new Vec4(this[1], this[3], this[0], this[0]); }
  /** @hidden */ get ywxy(): Vec4 { return new Vec4(this[1], this[3], this[0], this[1]); }
  /** @hidden */ get ywxz(): Vec4 { return new Vec4(this[1], this[3], this[0], this[2]); }
  /** @hidden */ get ywxw(): Vec4 { return new Vec4(this[1], this[3], this[0], this[3]); }
  /** @hidden */ get ywyx(): Vec4 { return new Vec4(this[1], this[3], this[1], this[0]); }
  /** @hidden */ get ywyy(): Vec4 { return new Vec4(this[1], this[3], this[1], this[1]); }
  /** @hidden */ get ywyz(): Vec4 { return new Vec4(this[1], this[3], this[1], this[2]); }
  /** @hidden */ get ywyw(): Vec4 { return new Vec4(this[1], this[3], this[1], this[3]); }
  /** @hidden */ get ywzx(): Vec4 { return new Vec4(this[1], this[3], this[2], this[0]); }
  /** @hidden */ get ywzy(): Vec4 { return new Vec4(this[1], this[3], this[2], this[1]); }
  /** @hidden */ get ywzz(): Vec4 { return new Vec4(this[1], this[3], this[2], this[2]); }
  /** @hidden */ get ywzw(): Vec4 { return new Vec4(this[1], this[3], this[2], this[3]); }
  /** @hidden */ get ywwx(): Vec4 { return new Vec4(this[1], this[3], this[3], this[0]); }
  /** @hidden */ get ywwy(): Vec4 { return new Vec4(this[1], this[3], this[3], this[1]); }
  /** @hidden */ get ywwz(): Vec4 { return new Vec4(this[1], this[3], this[3], this[2]); }
  /** @hidden */ get ywww(): Vec4 { return new Vec4(this[1], this[3], this[3], this[3]); }
  /** @hidden */ get zxxx(): Vec4 { return new Vec4(this[2], this[0], this[0], this[0]); }
  /** @hidden */ get zxxy(): Vec4 { return new Vec4(this[2], this[0], this[0], this[1]); }
  /** @hidden */ get zxxz(): Vec4 { return new Vec4(this[2], this[0], this[0], this[2]); }
  /** @hidden */ get zxxw(): Vec4 { return new Vec4(this[2], this[0], this[0], this[3]); }
  /** @hidden */ get zxyx(): Vec4 { return new Vec4(this[2], this[0], this[1], this[0]); }
  /** @hidden */ get zxyy(): Vec4 { return new Vec4(this[2], this[0], this[1], this[1]); }
  /** @hidden */ get zxyz(): Vec4 { return new Vec4(this[2], this[0], this[1], this[2]); }
  /** @hidden */ get zxyw(): Vec4 { return new Vec4(this[2], this[0], this[1], this[3]); }
  /** @hidden */ get zxzx(): Vec4 { return new Vec4(this[2], this[0], this[2], this[0]); }
  /** @hidden */ get zxzy(): Vec4 { return new Vec4(this[2], this[0], this[2], this[1]); }
  /** @hidden */ get zxzz(): Vec4 { return new Vec4(this[2], this[0], this[2], this[2]); }
  /** @hidden */ get zxzw(): Vec4 { return new Vec4(this[2], this[0], this[2], this[3]); }
  /** @hidden */ get zxwx(): Vec4 { return new Vec4(this[2], this[0], this[3], this[0]); }
  /** @hidden */ get zxwy(): Vec4 { return new Vec4(this[2], this[0], this[3], this[1]); }
  /** @hidden */ get zxwz(): Vec4 { return new Vec4(this[2], this[0], this[3], this[2]); }
  /** @hidden */ get zxww(): Vec4 { return new Vec4(this[2], this[0], this[3], this[3]); }
  /** @hidden */ get zyxx(): Vec4 { return new Vec4(this[2], this[1], this[0], this[0]); }
  /** @hidden */ get zyxy(): Vec4 { return new Vec4(this[2], this[1], this[0], this[1]); }
  /** @hidden */ get zyxz(): Vec4 { return new Vec4(this[2], this[1], this[0], this[2]); }
  /** @hidden */ get zyxw(): Vec4 { return new Vec4(this[2], this[1], this[0], this[3]); }
  /** @hidden */ get zyyx(): Vec4 { return new Vec4(this[2], this[1], this[1], this[0]); }
  /** @hidden */ get zyyy(): Vec4 { return new Vec4(this[2], this[1], this[1], this[1]); }
  /** @hidden */ get zyyz(): Vec4 { return new Vec4(this[2], this[1], this[1], this[2]); }
  /** @hidden */ get zyyw(): Vec4 { return new Vec4(this[2], this[1], this[1], this[3]); }
  /** @hidden */ get zyzx(): Vec4 { return new Vec4(this[2], this[1], this[2], this[0]); }
  /** @hidden */ get zyzy(): Vec4 { return new Vec4(this[2], this[1], this[2], this[1]); }
  /** @hidden */ get zyzz(): Vec4 { return new Vec4(this[2], this[1], this[2], this[2]); }
  /** @hidden */ get zyzw(): Vec4 { return new Vec4(this[2], this[1], this[2], this[3]); }
  /** @hidden */ get zywx(): Vec4 { return new Vec4(this[2], this[1], this[3], this[0]); }
  /** @hidden */ get zywy(): Vec4 { return new Vec4(this[2], this[1], this[3], this[1]); }
  /** @hidden */ get zywz(): Vec4 { return new Vec4(this[2], this[1], this[3], this[2]); }
  /** @hidden */ get zyww(): Vec4 { return new Vec4(this[2], this[1], this[3], this[3]); }
  /** @hidden */ get zzxx(): Vec4 { return new Vec4(this[2], this[2], this[0], this[0]); }
  /** @hidden */ get zzxy(): Vec4 { return new Vec4(this[2], this[2], this[0], this[1]); }
  /** @hidden */ get zzxz(): Vec4 { return new Vec4(this[2], this[2], this[0], this[2]); }
  /** @hidden */ get zzxw(): Vec4 { return new Vec4(this[2], this[2], this[0], this[3]); }
  /** @hidden */ get zzyx(): Vec4 { return new Vec4(this[2], this[2], this[1], this[0]); }
  /** @hidden */ get zzyy(): Vec4 { return new Vec4(this[2], this[2], this[1], this[1]); }
  /** @hidden */ get zzyz(): Vec4 { return new Vec4(this[2], this[2], this[1], this[2]); }
  /** @hidden */ get zzyw(): Vec4 { return new Vec4(this[2], this[2], this[1], this[3]); }
  /** @hidden */ get zzzx(): Vec4 { return new Vec4(this[2], this[2], this[2], this[0]); }
  /** @hidden */ get zzzy(): Vec4 { return new Vec4(this[2], this[2], this[2], this[1]); }
  /** @hidden */ get zzzz(): Vec4 { return new Vec4(this[2], this[2], this[2], this[2]); }
  /** @hidden */ get zzzw(): Vec4 { return new Vec4(this[2], this[2], this[2], this[3]); }
  /** @hidden */ get zzwx(): Vec4 { return new Vec4(this[2], this[2], this[3], this[0]); }
  /** @hidden */ get zzwy(): Vec4 { return new Vec4(this[2], this[2], this[3], this[1]); }
  /** @hidden */ get zzwz(): Vec4 { return new Vec4(this[2], this[2], this[3], this[2]); }
  /** @hidden */ get zzww(): Vec4 { return new Vec4(this[2], this[2], this[3], this[3]); }
  /** @hidden */ get zwxx(): Vec4 { return new Vec4(this[2], this[3], this[0], this[0]); }
  /** @hidden */ get zwxy(): Vec4 { return new Vec4(this[2], this[3], this[0], this[1]); }
  /** @hidden */ get zwxz(): Vec4 { return new Vec4(this[2], this[3], this[0], this[2]); }
  /** @hidden */ get zwxw(): Vec4 { return new Vec4(this[2], this[3], this[0], this[3]); }
  /** @hidden */ get zwyx(): Vec4 { return new Vec4(this[2], this[3], this[1], this[0]); }
  /** @hidden */ get zwyy(): Vec4 { return new Vec4(this[2], this[3], this[1], this[1]); }
  /** @hidden */ get zwyz(): Vec4 { return new Vec4(this[2], this[3], this[1], this[2]); }
  /** @hidden */ get zwyw(): Vec4 { return new Vec4(this[2], this[3], this[1], this[3]); }
  /** @hidden */ get zwzx(): Vec4 { return new Vec4(this[2], this[3], this[2], this[0]); }
  /** @hidden */ get zwzy(): Vec4 { return new Vec4(this[2], this[3], this[2], this[1]); }
  /** @hidden */ get zwzz(): Vec4 { return new Vec4(this[2], this[3], this[2], this[2]); }
  /** @hidden */ get zwzw(): Vec4 { return new Vec4(this[2], this[3], this[2], this[3]); }
  /** @hidden */ get zwwx(): Vec4 { return new Vec4(this[2], this[3], this[3], this[0]); }
  /** @hidden */ get zwwy(): Vec4 { return new Vec4(this[2], this[3], this[3], this[1]); }
  /** @hidden */ get zwwz(): Vec4 { return new Vec4(this[2], this[3], this[3], this[2]); }
  /** @hidden */ get zwww(): Vec4 { return new Vec4(this[2], this[3], this[3], this[3]); }
  /** @hidden */ get wxxx(): Vec4 { return new Vec4(this[3], this[0], this[0], this[0]); }
  /** @hidden */ get wxxy(): Vec4 { return new Vec4(this[3], this[0], this[0], this[1]); }
  /** @hidden */ get wxxz(): Vec4 { return new Vec4(this[3], this[0], this[0], this[2]); }
  /** @hidden */ get wxxw(): Vec4 { return new Vec4(this[3], this[0], this[0], this[3]); }
  /** @hidden */ get wxyx(): Vec4 { return new Vec4(this[3], this[0], this[1], this[0]); }
  /** @hidden */ get wxyy(): Vec4 { return new Vec4(this[3], this[0], this[1], this[1]); }
  /** @hidden */ get wxyz(): Vec4 { return new Vec4(this[3], this[0], this[1], this[2]); }
  /** @hidden */ get wxyw(): Vec4 { return new Vec4(this[3], this[0], this[1], this[3]); }
  /** @hidden */ get wxzx(): Vec4 { return new Vec4(this[3], this[0], this[2], this[0]); }
  /** @hidden */ get wxzy(): Vec4 { return new Vec4(this[3], this[0], this[2], this[1]); }
  /** @hidden */ get wxzz(): Vec4 { return new Vec4(this[3], this[0], this[2], this[2]); }
  /** @hidden */ get wxzw(): Vec4 { return new Vec4(this[3], this[0], this[2], this[3]); }
  /** @hidden */ get wxwx(): Vec4 { return new Vec4(this[3], this[0], this[3], this[0]); }
  /** @hidden */ get wxwy(): Vec4 { return new Vec4(this[3], this[0], this[3], this[1]); }
  /** @hidden */ get wxwz(): Vec4 { return new Vec4(this[3], this[0], this[3], this[2]); }
  /** @hidden */ get wxww(): Vec4 { return new Vec4(this[3], this[0], this[3], this[3]); }
  /** @hidden */ get wyxx(): Vec4 { return new Vec4(this[3], this[1], this[0], this[0]); }
  /** @hidden */ get wyxy(): Vec4 { return new Vec4(this[3], this[1], this[0], this[1]); }
  /** @hidden */ get wyxz(): Vec4 { return new Vec4(this[3], this[1], this[0], this[2]); }
  /** @hidden */ get wyxw(): Vec4 { return new Vec4(this[3], this[1], this[0], this[3]); }
  /** @hidden */ get wyyx(): Vec4 { return new Vec4(this[3], this[1], this[1], this[0]); }
  /** @hidden */ get wyyy(): Vec4 { return new Vec4(this[3], this[1], this[1], this[1]); }
  /** @hidden */ get wyyz(): Vec4 { return new Vec4(this[3], this[1], this[1], this[2]); }
  /** @hidden */ get wyyw(): Vec4 { return new Vec4(this[3], this[1], this[1], this[3]); }
  /** @hidden */ get wyzx(): Vec4 { return new Vec4(this[3], this[1], this[2], this[0]); }
  /** @hidden */ get wyzy(): Vec4 { return new Vec4(this[3], this[1], this[2], this[1]); }
  /** @hidden */ get wyzz(): Vec4 { return new Vec4(this[3], this[1], this[2], this[2]); }
  /** @hidden */ get wyzw(): Vec4 { return new Vec4(this[3], this[1], this[2], this[3]); }
  /** @hidden */ get wywx(): Vec4 { return new Vec4(this[3], this[1], this[3], this[0]); }
  /** @hidden */ get wywy(): Vec4 { return new Vec4(this[3], this[1], this[3], this[1]); }
  /** @hidden */ get wywz(): Vec4 { return new Vec4(this[3], this[1], this[3], this[2]); }
  /** @hidden */ get wyww(): Vec4 { return new Vec4(this[3], this[1], this[3], this[3]); }
  /** @hidden */ get wzxx(): Vec4 { return new Vec4(this[3], this[2], this[0], this[0]); }
  /** @hidden */ get wzxy(): Vec4 { return new Vec4(this[3], this[2], this[0], this[1]); }
  /** @hidden */ get wzxz(): Vec4 { return new Vec4(this[3], this[2], this[0], this[2]); }
  /** @hidden */ get wzxw(): Vec4 { return new Vec4(this[3], this[2], this[0], this[3]); }
  /** @hidden */ get wzyx(): Vec4 { return new Vec4(this[3], this[2], this[1], this[0]); }
  /** @hidden */ get wzyy(): Vec4 { return new Vec4(this[3], this[2], this[1], this[1]); }
  /** @hidden */ get wzyz(): Vec4 { return new Vec4(this[3], this[2], this[1], this[2]); }
  /** @hidden */ get wzyw(): Vec4 { return new Vec4(this[3], this[2], this[1], this[3]); }
  /** @hidden */ get wzzx(): Vec4 { return new Vec4(this[3], this[2], this[2], this[0]); }
  /** @hidden */ get wzzy(): Vec4 { return new Vec4(this[3], this[2], this[2], this[1]); }
  /** @hidden */ get wzzz(): Vec4 { return new Vec4(this[3], this[2], this[2], this[2]); }
  /** @hidden */ get wzzw(): Vec4 { return new Vec4(this[3], this[2], this[2], this[3]); }
  /** @hidden */ get wzwx(): Vec4 { return new Vec4(this[3], this[2], this[3], this[0]); }
  /** @hidden */ get wzwy(): Vec4 { return new Vec4(this[3], this[2], this[3], this[1]); }
  /** @hidden */ get wzwz(): Vec4 { return new Vec4(this[3], this[2], this[3], this[2]); }
  /** @hidden */ get wzww(): Vec4 { return new Vec4(this[3], this[2], this[3], this[3]); }
  /** @hidden */ get wwxx(): Vec4 { return new Vec4(this[3], this[3], this[0], this[0]); }
  /** @hidden */ get wwxy(): Vec4 { return new Vec4(this[3], this[3], this[0], this[1]); }
  /** @hidden */ get wwxz(): Vec4 { return new Vec4(this[3], this[3], this[0], this[2]); }
  /** @hidden */ get wwxw(): Vec4 { return new Vec4(this[3], this[3], this[0], this[3]); }
  /** @hidden */ get wwyx(): Vec4 { return new Vec4(this[3], this[3], this[1], this[0]); }
  /** @hidden */ get wwyy(): Vec4 { return new Vec4(this[3], this[3], this[1], this[1]); }
  /** @hidden */ get wwyz(): Vec4 { return new Vec4(this[3], this[3], this[1], this[2]); }
  /** @hidden */ get wwyw(): Vec4 { return new Vec4(this[3], this[3], this[1], this[3]); }
  /** @hidden */ get wwzx(): Vec4 { return new Vec4(this[3], this[3], this[2], this[0]); }
  /** @hidden */ get wwzy(): Vec4 { return new Vec4(this[3], this[3], this[2], this[1]); }
  /** @hidden */ get wwzz(): Vec4 { return new Vec4(this[3], this[3], this[2], this[2]); }
  /** @hidden */ get wwzw(): Vec4 { return new Vec4(this[3], this[3], this[2], this[3]); }
  /** @hidden */ get wwwx(): Vec4 { return new Vec4(this[3], this[3], this[3], this[0]); }
  /** @hidden */ get wwwy(): Vec4 { return new Vec4(this[3], this[3], this[3], this[1]); }
  /** @hidden */ get wwwz(): Vec4 { return new Vec4(this[3], this[3], this[3], this[2]); }
  /** @hidden */ get wwww(): Vec4 { return new Vec4(this[3], this[3], this[3], this[3]); }
  /** @hidden */ get rr(): Vec2 { return new Vec2(this[0], this[0]); }
  /** @hidden */ get rg(): Vec2 { return new Vec2(this[0], this[1]); }
  /** @hidden */ get rb(): Vec2 { return new Vec2(this[0], this[2]); }
  /** @hidden */ get ra(): Vec2 { return new Vec2(this[0], this[3]); }
  /** @hidden */ get gr(): Vec2 { return new Vec2(this[1], this[0]); }
  /** @hidden */ get gg(): Vec2 { return new Vec2(this[1], this[1]); }
  /** @hidden */ get gb(): Vec2 { return new Vec2(this[1], this[2]); }
  /** @hidden */ get ga(): Vec2 { return new Vec2(this[1], this[3]); }
  /** @hidden */ get br(): Vec2 { return new Vec2(this[2], this[0]); }
  /** @hidden */ get bg(): Vec2 { return new Vec2(this[2], this[1]); }
  /** @hidden */ get bb(): Vec2 { return new Vec2(this[2], this[2]); }
  /** @hidden */ get ba(): Vec2 { return new Vec2(this[2], this[3]); }
  /** @hidden */ get ar(): Vec2 { return new Vec2(this[3], this[0]); }
  /** @hidden */ get ag(): Vec2 { return new Vec2(this[3], this[1]); }
  /** @hidden */ get ab(): Vec2 { return new Vec2(this[3], this[2]); }
  /** @hidden */ get aa(): Vec2 { return new Vec2(this[3], this[3]); }
  /** @hidden */ get rrr(): Vec3 { return new Vec3(this[0], this[0], this[0]); }
  /** @hidden */ get rrg(): Vec3 { return new Vec3(this[0], this[0], this[1]); }
  /** @hidden */ get rrb(): Vec3 { return new Vec3(this[0], this[0], this[2]); }
  /** @hidden */ get rra(): Vec3 { return new Vec3(this[0], this[0], this[3]); }
  /** @hidden */ get rgr(): Vec3 { return new Vec3(this[0], this[1], this[0]); }
  /** @hidden */ get rgg(): Vec3 { return new Vec3(this[0], this[1], this[1]); }
  /** @hidden */ get rgb(): Vec3 { return new Vec3(this[0], this[1], this[2]); }
  /** @hidden */ get rga(): Vec3 { return new Vec3(this[0], this[1], this[3]); }
  /** @hidden */ get rbr(): Vec3 { return new Vec3(this[0], this[2], this[0]); }
  /** @hidden */ get rbg(): Vec3 { return new Vec3(this[0], this[2], this[1]); }
  /** @hidden */ get rbb(): Vec3 { return new Vec3(this[0], this[2], this[2]); }
  /** @hidden */ get rba(): Vec3 { return new Vec3(this[0], this[2], this[3]); }
  /** @hidden */ get rar(): Vec3 { return new Vec3(this[0], this[3], this[0]); }
  /** @hidden */ get rag(): Vec3 { return new Vec3(this[0], this[3], this[1]); }
  /** @hidden */ get rab(): Vec3 { return new Vec3(this[0], this[3], this[2]); }
  /** @hidden */ get raa(): Vec3 { return new Vec3(this[0], this[3], this[3]); }
  /** @hidden */ get grr(): Vec3 { return new Vec3(this[1], this[0], this[0]); }
  /** @hidden */ get grg(): Vec3 { return new Vec3(this[1], this[0], this[1]); }
  /** @hidden */ get grb(): Vec3 { return new Vec3(this[1], this[0], this[2]); }
  /** @hidden */ get gra(): Vec3 { return new Vec3(this[1], this[0], this[3]); }
  /** @hidden */ get ggr(): Vec3 { return new Vec3(this[1], this[1], this[0]); }
  /** @hidden */ get ggg(): Vec3 { return new Vec3(this[1], this[1], this[1]); }
  /** @hidden */ get ggb(): Vec3 { return new Vec3(this[1], this[1], this[2]); }
  /** @hidden */ get gga(): Vec3 { return new Vec3(this[1], this[1], this[3]); }
  /** @hidden */ get gbr(): Vec3 { return new Vec3(this[1], this[2], this[0]); }
  /** @hidden */ get gbg(): Vec3 { return new Vec3(this[1], this[2], this[1]); }
  /** @hidden */ get gbb(): Vec3 { return new Vec3(this[1], this[2], this[2]); }
  /** @hidden */ get gba(): Vec3 { return new Vec3(this[1], this[2], this[3]); }
  /** @hidden */ get gar(): Vec3 { return new Vec3(this[1], this[3], this[0]); }
  /** @hidden */ get gag(): Vec3 { return new Vec3(this[1], this[3], this[1]); }
  /** @hidden */ get gab(): Vec3 { return new Vec3(this[1], this[3], this[2]); }
  /** @hidden */ get gaa(): Vec3 { return new Vec3(this[1], this[3], this[3]); }
  /** @hidden */ get brr(): Vec3 { return new Vec3(this[2], this[0], this[0]); }
  /** @hidden */ get brg(): Vec3 { return new Vec3(this[2], this[0], this[1]); }
  /** @hidden */ get brb(): Vec3 { return new Vec3(this[2], this[0], this[2]); }
  /** @hidden */ get bra(): Vec3 { return new Vec3(this[2], this[0], this[3]); }
  /** @hidden */ get bgr(): Vec3 { return new Vec3(this[2], this[1], this[0]); }
  /** @hidden */ get bgg(): Vec3 { return new Vec3(this[2], this[1], this[1]); }
  /** @hidden */ get bgb(): Vec3 { return new Vec3(this[2], this[1], this[2]); }
  /** @hidden */ get bga(): Vec3 { return new Vec3(this[2], this[1], this[3]); }
  /** @hidden */ get bbr(): Vec3 { return new Vec3(this[2], this[2], this[0]); }
  /** @hidden */ get bbg(): Vec3 { return new Vec3(this[2], this[2], this[1]); }
  /** @hidden */ get bbb(): Vec3 { return new Vec3(this[2], this[2], this[2]); }
  /** @hidden */ get bba(): Vec3 { return new Vec3(this[2], this[2], this[3]); }
  /** @hidden */ get bar(): Vec3 { return new Vec3(this[2], this[3], this[0]); }
  /** @hidden */ get bag(): Vec3 { return new Vec3(this[2], this[3], this[1]); }
  /** @hidden */ get bab(): Vec3 { return new Vec3(this[2], this[3], this[2]); }
  /** @hidden */ get baa(): Vec3 { return new Vec3(this[2], this[3], this[3]); }
  /** @hidden */ get arr(): Vec3 { return new Vec3(this[3], this[0], this[0]); }
  /** @hidden */ get arg(): Vec3 { return new Vec3(this[3], this[0], this[1]); }
  /** @hidden */ get arb(): Vec3 { return new Vec3(this[3], this[0], this[2]); }
  /** @hidden */ get ara(): Vec3 { return new Vec3(this[3], this[0], this[3]); }
  /** @hidden */ get agr(): Vec3 { return new Vec3(this[3], this[1], this[0]); }
  /** @hidden */ get agg(): Vec3 { return new Vec3(this[3], this[1], this[1]); }
  /** @hidden */ get agb(): Vec3 { return new Vec3(this[3], this[1], this[2]); }
  /** @hidden */ get aga(): Vec3 { return new Vec3(this[3], this[1], this[3]); }
  /** @hidden */ get abr(): Vec3 { return new Vec3(this[3], this[2], this[0]); }
  /** @hidden */ get abg(): Vec3 { return new Vec3(this[3], this[2], this[1]); }
  /** @hidden */ get abb(): Vec3 { return new Vec3(this[3], this[2], this[2]); }
  /** @hidden */ get aba(): Vec3 { return new Vec3(this[3], this[2], this[3]); }
  /** @hidden */ get aar(): Vec3 { return new Vec3(this[3], this[3], this[0]); }
  /** @hidden */ get aag(): Vec3 { return new Vec3(this[3], this[3], this[1]); }
  /** @hidden */ get aab(): Vec3 { return new Vec3(this[3], this[3], this[2]); }
  /** @hidden */ get aaa(): Vec3 { return new Vec3(this[3], this[3], this[3]); }
  /** @hidden */ get rrrr(): Vec4 { return new Vec4(this[0], this[0], this[0], this[0]); }
  /** @hidden */ get rrrg(): Vec4 { return new Vec4(this[0], this[0], this[0], this[1]); }
  /** @hidden */ get rrrb(): Vec4 { return new Vec4(this[0], this[0], this[0], this[2]); }
  /** @hidden */ get rrra(): Vec4 { return new Vec4(this[0], this[0], this[0], this[3]); }
  /** @hidden */ get rrgr(): Vec4 { return new Vec4(this[0], this[0], this[1], this[0]); }
  /** @hidden */ get rrgg(): Vec4 { return new Vec4(this[0], this[0], this[1], this[1]); }
  /** @hidden */ get rrgb(): Vec4 { return new Vec4(this[0], this[0], this[1], this[2]); }
  /** @hidden */ get rrga(): Vec4 { return new Vec4(this[0], this[0], this[1], this[3]); }
  /** @hidden */ get rrbr(): Vec4 { return new Vec4(this[0], this[0], this[2], this[0]); }
  /** @hidden */ get rrbg(): Vec4 { return new Vec4(this[0], this[0], this[2], this[1]); }
  /** @hidden */ get rrbb(): Vec4 { return new Vec4(this[0], this[0], this[2], this[2]); }
  /** @hidden */ get rrba(): Vec4 { return new Vec4(this[0], this[0], this[2], this[3]); }
  /** @hidden */ get rrar(): Vec4 { return new Vec4(this[0], this[0], this[3], this[0]); }
  /** @hidden */ get rrag(): Vec4 { return new Vec4(this[0], this[0], this[3], this[1]); }
  /** @hidden */ get rrab(): Vec4 { return new Vec4(this[0], this[0], this[3], this[2]); }
  /** @hidden */ get rraa(): Vec4 { return new Vec4(this[0], this[0], this[3], this[3]); }
  /** @hidden */ get rgrr(): Vec4 { return new Vec4(this[0], this[1], this[0], this[0]); }
  /** @hidden */ get rgrg(): Vec4 { return new Vec4(this[0], this[1], this[0], this[1]); }
  /** @hidden */ get rgrb(): Vec4 { return new Vec4(this[0], this[1], this[0], this[2]); }
  /** @hidden */ get rgra(): Vec4 { return new Vec4(this[0], this[1], this[0], this[3]); }
  /** @hidden */ get rggr(): Vec4 { return new Vec4(this[0], this[1], this[1], this[0]); }
  /** @hidden */ get rggg(): Vec4 { return new Vec4(this[0], this[1], this[1], this[1]); }
  /** @hidden */ get rggb(): Vec4 { return new Vec4(this[0], this[1], this[1], this[2]); }
  /** @hidden */ get rgga(): Vec4 { return new Vec4(this[0], this[1], this[1], this[3]); }
  /** @hidden */ get rgbr(): Vec4 { return new Vec4(this[0], this[1], this[2], this[0]); }
  /** @hidden */ get rgbg(): Vec4 { return new Vec4(this[0], this[1], this[2], this[1]); }
  /** @hidden */ get rgbb(): Vec4 { return new Vec4(this[0], this[1], this[2], this[2]); }
  /** @hidden */ get rgba(): Vec4 { return new Vec4(this[0], this[1], this[2], this[3]); }
  /** @hidden */ get rgar(): Vec4 { return new Vec4(this[0], this[1], this[3], this[0]); }
  /** @hidden */ get rgag(): Vec4 { return new Vec4(this[0], this[1], this[3], this[1]); }
  /** @hidden */ get rgab(): Vec4 { return new Vec4(this[0], this[1], this[3], this[2]); }
  /** @hidden */ get rgaa(): Vec4 { return new Vec4(this[0], this[1], this[3], this[3]); }
  /** @hidden */ get rbrr(): Vec4 { return new Vec4(this[0], this[2], this[0], this[0]); }
  /** @hidden */ get rbrg(): Vec4 { return new Vec4(this[0], this[2], this[0], this[1]); }
  /** @hidden */ get rbrb(): Vec4 { return new Vec4(this[0], this[2], this[0], this[2]); }
  /** @hidden */ get rbra(): Vec4 { return new Vec4(this[0], this[2], this[0], this[3]); }
  /** @hidden */ get rbgr(): Vec4 { return new Vec4(this[0], this[2], this[1], this[0]); }
  /** @hidden */ get rbgg(): Vec4 { return new Vec4(this[0], this[2], this[1], this[1]); }
  /** @hidden */ get rbgb(): Vec4 { return new Vec4(this[0], this[2], this[1], this[2]); }
  /** @hidden */ get rbga(): Vec4 { return new Vec4(this[0], this[2], this[1], this[3]); }
  /** @hidden */ get rbbr(): Vec4 { return new Vec4(this[0], this[2], this[2], this[0]); }
  /** @hidden */ get rbbg(): Vec4 { return new Vec4(this[0], this[2], this[2], this[1]); }
  /** @hidden */ get rbbb(): Vec4 { return new Vec4(this[0], this[2], this[2], this[2]); }
  /** @hidden */ get rbba(): Vec4 { return new Vec4(this[0], this[2], this[2], this[3]); }
  /** @hidden */ get rbar(): Vec4 { return new Vec4(this[0], this[2], this[3], this[0]); }
  /** @hidden */ get rbag(): Vec4 { return new Vec4(this[0], this[2], this[3], this[1]); }
  /** @hidden */ get rbab(): Vec4 { return new Vec4(this[0], this[2], this[3], this[2]); }
  /** @hidden */ get rbaa(): Vec4 { return new Vec4(this[0], this[2], this[3], this[3]); }
  /** @hidden */ get rarr(): Vec4 { return new Vec4(this[0], this[3], this[0], this[0]); }
  /** @hidden */ get rarg(): Vec4 { return new Vec4(this[0], this[3], this[0], this[1]); }
  /** @hidden */ get rarb(): Vec4 { return new Vec4(this[0], this[3], this[0], this[2]); }
  /** @hidden */ get rara(): Vec4 { return new Vec4(this[0], this[3], this[0], this[3]); }
  /** @hidden */ get ragr(): Vec4 { return new Vec4(this[0], this[3], this[1], this[0]); }
  /** @hidden */ get ragg(): Vec4 { return new Vec4(this[0], this[3], this[1], this[1]); }
  /** @hidden */ get ragb(): Vec4 { return new Vec4(this[0], this[3], this[1], this[2]); }
  /** @hidden */ get raga(): Vec4 { return new Vec4(this[0], this[3], this[1], this[3]); }
  /** @hidden */ get rabr(): Vec4 { return new Vec4(this[0], this[3], this[2], this[0]); }
  /** @hidden */ get rabg(): Vec4 { return new Vec4(this[0], this[3], this[2], this[1]); }
  /** @hidden */ get rabb(): Vec4 { return new Vec4(this[0], this[3], this[2], this[2]); }
  /** @hidden */ get raba(): Vec4 { return new Vec4(this[0], this[3], this[2], this[3]); }
  /** @hidden */ get raar(): Vec4 { return new Vec4(this[0], this[3], this[3], this[0]); }
  /** @hidden */ get raag(): Vec4 { return new Vec4(this[0], this[3], this[3], this[1]); }
  /** @hidden */ get raab(): Vec4 { return new Vec4(this[0], this[3], this[3], this[2]); }
  /** @hidden */ get raaa(): Vec4 { return new Vec4(this[0], this[3], this[3], this[3]); }
  /** @hidden */ get grrr(): Vec4 { return new Vec4(this[1], this[0], this[0], this[0]); }
  /** @hidden */ get grrg(): Vec4 { return new Vec4(this[1], this[0], this[0], this[1]); }
  /** @hidden */ get grrb(): Vec4 { return new Vec4(this[1], this[0], this[0], this[2]); }
  /** @hidden */ get grra(): Vec4 { return new Vec4(this[1], this[0], this[0], this[3]); }
  /** @hidden */ get grgr(): Vec4 { return new Vec4(this[1], this[0], this[1], this[0]); }
  /** @hidden */ get grgg(): Vec4 { return new Vec4(this[1], this[0], this[1], this[1]); }
  /** @hidden */ get grgb(): Vec4 { return new Vec4(this[1], this[0], this[1], this[2]); }
  /** @hidden */ get grga(): Vec4 { return new Vec4(this[1], this[0], this[1], this[3]); }
  /** @hidden */ get grbr(): Vec4 { return new Vec4(this[1], this[0], this[2], this[0]); }
  /** @hidden */ get grbg(): Vec4 { return new Vec4(this[1], this[0], this[2], this[1]); }
  /** @hidden */ get grbb(): Vec4 { return new Vec4(this[1], this[0], this[2], this[2]); }
  /** @hidden */ get grba(): Vec4 { return new Vec4(this[1], this[0], this[2], this[3]); }
  /** @hidden */ get grar(): Vec4 { return new Vec4(this[1], this[0], this[3], this[0]); }
  /** @hidden */ get grag(): Vec4 { return new Vec4(this[1], this[0], this[3], this[1]); }
  /** @hidden */ get grab(): Vec4 { return new Vec4(this[1], this[0], this[3], this[2]); }
  /** @hidden */ get graa(): Vec4 { return new Vec4(this[1], this[0], this[3], this[3]); }
  /** @hidden */ get ggrr(): Vec4 { return new Vec4(this[1], this[1], this[0], this[0]); }
  /** @hidden */ get ggrg(): Vec4 { return new Vec4(this[1], this[1], this[0], this[1]); }
  /** @hidden */ get ggrb(): Vec4 { return new Vec4(this[1], this[1], this[0], this[2]); }
  /** @hidden */ get ggra(): Vec4 { return new Vec4(this[1], this[1], this[0], this[3]); }
  /** @hidden */ get gggr(): Vec4 { return new Vec4(this[1], this[1], this[1], this[0]); }
  /** @hidden */ get gggg(): Vec4 { return new Vec4(this[1], this[1], this[1], this[1]); }
  /** @hidden */ get gggb(): Vec4 { return new Vec4(this[1], this[1], this[1], this[2]); }
  /** @hidden */ get ggga(): Vec4 { return new Vec4(this[1], this[1], this[1], this[3]); }
  /** @hidden */ get ggbr(): Vec4 { return new Vec4(this[1], this[1], this[2], this[0]); }
  /** @hidden */ get ggbg(): Vec4 { return new Vec4(this[1], this[1], this[2], this[1]); }
  /** @hidden */ get ggbb(): Vec4 { return new Vec4(this[1], this[1], this[2], this[2]); }
  /** @hidden */ get ggba(): Vec4 { return new Vec4(this[1], this[1], this[2], this[3]); }
  /** @hidden */ get ggar(): Vec4 { return new Vec4(this[1], this[1], this[3], this[0]); }
  /** @hidden */ get ggag(): Vec4 { return new Vec4(this[1], this[1], this[3], this[1]); }
  /** @hidden */ get ggab(): Vec4 { return new Vec4(this[1], this[1], this[3], this[2]); }
  /** @hidden */ get ggaa(): Vec4 { return new Vec4(this[1], this[1], this[3], this[3]); }
  /** @hidden */ get gbrr(): Vec4 { return new Vec4(this[1], this[2], this[0], this[0]); }
  /** @hidden */ get gbrg(): Vec4 { return new Vec4(this[1], this[2], this[0], this[1]); }
  /** @hidden */ get gbrb(): Vec4 { return new Vec4(this[1], this[2], this[0], this[2]); }
  /** @hidden */ get gbra(): Vec4 { return new Vec4(this[1], this[2], this[0], this[3]); }
  /** @hidden */ get gbgr(): Vec4 { return new Vec4(this[1], this[2], this[1], this[0]); }
  /** @hidden */ get gbgg(): Vec4 { return new Vec4(this[1], this[2], this[1], this[1]); }
  /** @hidden */ get gbgb(): Vec4 { return new Vec4(this[1], this[2], this[1], this[2]); }
  /** @hidden */ get gbga(): Vec4 { return new Vec4(this[1], this[2], this[1], this[3]); }
  /** @hidden */ get gbbr(): Vec4 { return new Vec4(this[1], this[2], this[2], this[0]); }
  /** @hidden */ get gbbg(): Vec4 { return new Vec4(this[1], this[2], this[2], this[1]); }
  /** @hidden */ get gbbb(): Vec4 { return new Vec4(this[1], this[2], this[2], this[2]); }
  /** @hidden */ get gbba(): Vec4 { return new Vec4(this[1], this[2], this[2], this[3]); }
  /** @hidden */ get gbar(): Vec4 { return new Vec4(this[1], this[2], this[3], this[0]); }
  /** @hidden */ get gbag(): Vec4 { return new Vec4(this[1], this[2], this[3], this[1]); }
  /** @hidden */ get gbab(): Vec4 { return new Vec4(this[1], this[2], this[3], this[2]); }
  /** @hidden */ get gbaa(): Vec4 { return new Vec4(this[1], this[2], this[3], this[3]); }
  /** @hidden */ get garr(): Vec4 { return new Vec4(this[1], this[3], this[0], this[0]); }
  /** @hidden */ get garg(): Vec4 { return new Vec4(this[1], this[3], this[0], this[1]); }
  /** @hidden */ get garb(): Vec4 { return new Vec4(this[1], this[3], this[0], this[2]); }
  /** @hidden */ get gara(): Vec4 { return new Vec4(this[1], this[3], this[0], this[3]); }
  /** @hidden */ get gagr(): Vec4 { return new Vec4(this[1], this[3], this[1], this[0]); }
  /** @hidden */ get gagg(): Vec4 { return new Vec4(this[1], this[3], this[1], this[1]); }
  /** @hidden */ get gagb(): Vec4 { return new Vec4(this[1], this[3], this[1], this[2]); }
  /** @hidden */ get gaga(): Vec4 { return new Vec4(this[1], this[3], this[1], this[3]); }
  /** @hidden */ get gabr(): Vec4 { return new Vec4(this[1], this[3], this[2], this[0]); }
  /** @hidden */ get gabg(): Vec4 { return new Vec4(this[1], this[3], this[2], this[1]); }
  /** @hidden */ get gabb(): Vec4 { return new Vec4(this[1], this[3], this[2], this[2]); }
  /** @hidden */ get gaba(): Vec4 { return new Vec4(this[1], this[3], this[2], this[3]); }
  /** @hidden */ get gaar(): Vec4 { return new Vec4(this[1], this[3], this[3], this[0]); }
  /** @hidden */ get gaag(): Vec4 { return new Vec4(this[1], this[3], this[3], this[1]); }
  /** @hidden */ get gaab(): Vec4 { return new Vec4(this[1], this[3], this[3], this[2]); }
  /** @hidden */ get gaaa(): Vec4 { return new Vec4(this[1], this[3], this[3], this[3]); }
  /** @hidden */ get brrr(): Vec4 { return new Vec4(this[2], this[0], this[0], this[0]); }
  /** @hidden */ get brrg(): Vec4 { return new Vec4(this[2], this[0], this[0], this[1]); }
  /** @hidden */ get brrb(): Vec4 { return new Vec4(this[2], this[0], this[0], this[2]); }
  /** @hidden */ get brra(): Vec4 { return new Vec4(this[2], this[0], this[0], this[3]); }
  /** @hidden */ get brgr(): Vec4 { return new Vec4(this[2], this[0], this[1], this[0]); }
  /** @hidden */ get brgg(): Vec4 { return new Vec4(this[2], this[0], this[1], this[1]); }
  /** @hidden */ get brgb(): Vec4 { return new Vec4(this[2], this[0], this[1], this[2]); }
  /** @hidden */ get brga(): Vec4 { return new Vec4(this[2], this[0], this[1], this[3]); }
  /** @hidden */ get brbr(): Vec4 { return new Vec4(this[2], this[0], this[2], this[0]); }
  /** @hidden */ get brbg(): Vec4 { return new Vec4(this[2], this[0], this[2], this[1]); }
  /** @hidden */ get brbb(): Vec4 { return new Vec4(this[2], this[0], this[2], this[2]); }
  /** @hidden */ get brba(): Vec4 { return new Vec4(this[2], this[0], this[2], this[3]); }
  /** @hidden */ get brar(): Vec4 { return new Vec4(this[2], this[0], this[3], this[0]); }
  /** @hidden */ get brag(): Vec4 { return new Vec4(this[2], this[0], this[3], this[1]); }
  /** @hidden */ get brab(): Vec4 { return new Vec4(this[2], this[0], this[3], this[2]); }
  /** @hidden */ get braa(): Vec4 { return new Vec4(this[2], this[0], this[3], this[3]); }
  /** @hidden */ get bgrr(): Vec4 { return new Vec4(this[2], this[1], this[0], this[0]); }
  /** @hidden */ get bgrg(): Vec4 { return new Vec4(this[2], this[1], this[0], this[1]); }
  /** @hidden */ get bgrb(): Vec4 { return new Vec4(this[2], this[1], this[0], this[2]); }
  /** @hidden */ get bgra(): Vec4 { return new Vec4(this[2], this[1], this[0], this[3]); }
  /** @hidden */ get bggr(): Vec4 { return new Vec4(this[2], this[1], this[1], this[0]); }
  /** @hidden */ get bggg(): Vec4 { return new Vec4(this[2], this[1], this[1], this[1]); }
  /** @hidden */ get bggb(): Vec4 { return new Vec4(this[2], this[1], this[1], this[2]); }
  /** @hidden */ get bgga(): Vec4 { return new Vec4(this[2], this[1], this[1], this[3]); }
  /** @hidden */ get bgbr(): Vec4 { return new Vec4(this[2], this[1], this[2], this[0]); }
  /** @hidden */ get bgbg(): Vec4 { return new Vec4(this[2], this[1], this[2], this[1]); }
  /** @hidden */ get bgbb(): Vec4 { return new Vec4(this[2], this[1], this[2], this[2]); }
  /** @hidden */ get bgba(): Vec4 { return new Vec4(this[2], this[1], this[2], this[3]); }
  /** @hidden */ get bgar(): Vec4 { return new Vec4(this[2], this[1], this[3], this[0]); }
  /** @hidden */ get bgag(): Vec4 { return new Vec4(this[2], this[1], this[3], this[1]); }
  /** @hidden */ get bgab(): Vec4 { return new Vec4(this[2], this[1], this[3], this[2]); }
  /** @hidden */ get bgaa(): Vec4 { return new Vec4(this[2], this[1], this[3], this[3]); }
  /** @hidden */ get bbrr(): Vec4 { return new Vec4(this[2], this[2], this[0], this[0]); }
  /** @hidden */ get bbrg(): Vec4 { return new Vec4(this[2], this[2], this[0], this[1]); }
  /** @hidden */ get bbrb(): Vec4 { return new Vec4(this[2], this[2], this[0], this[2]); }
  /** @hidden */ get bbra(): Vec4 { return new Vec4(this[2], this[2], this[0], this[3]); }
  /** @hidden */ get bbgr(): Vec4 { return new Vec4(this[2], this[2], this[1], this[0]); }
  /** @hidden */ get bbgg(): Vec4 { return new Vec4(this[2], this[2], this[1], this[1]); }
  /** @hidden */ get bbgb(): Vec4 { return new Vec4(this[2], this[2], this[1], this[2]); }
  /** @hidden */ get bbga(): Vec4 { return new Vec4(this[2], this[2], this[1], this[3]); }
  /** @hidden */ get bbbr(): Vec4 { return new Vec4(this[2], this[2], this[2], this[0]); }
  /** @hidden */ get bbbg(): Vec4 { return new Vec4(this[2], this[2], this[2], this[1]); }
  /** @hidden */ get bbbb(): Vec4 { return new Vec4(this[2], this[2], this[2], this[2]); }
  /** @hidden */ get bbba(): Vec4 { return new Vec4(this[2], this[2], this[2], this[3]); }
  /** @hidden */ get bbar(): Vec4 { return new Vec4(this[2], this[2], this[3], this[0]); }
  /** @hidden */ get bbag(): Vec4 { return new Vec4(this[2], this[2], this[3], this[1]); }
  /** @hidden */ get bbab(): Vec4 { return new Vec4(this[2], this[2], this[3], this[2]); }
  /** @hidden */ get bbaa(): Vec4 { return new Vec4(this[2], this[2], this[3], this[3]); }
  /** @hidden */ get barr(): Vec4 { return new Vec4(this[2], this[3], this[0], this[0]); }
  /** @hidden */ get barg(): Vec4 { return new Vec4(this[2], this[3], this[0], this[1]); }
  /** @hidden */ get barb(): Vec4 { return new Vec4(this[2], this[3], this[0], this[2]); }
  /** @hidden */ get bara(): Vec4 { return new Vec4(this[2], this[3], this[0], this[3]); }
  /** @hidden */ get bagr(): Vec4 { return new Vec4(this[2], this[3], this[1], this[0]); }
  /** @hidden */ get bagg(): Vec4 { return new Vec4(this[2], this[3], this[1], this[1]); }
  /** @hidden */ get bagb(): Vec4 { return new Vec4(this[2], this[3], this[1], this[2]); }
  /** @hidden */ get baga(): Vec4 { return new Vec4(this[2], this[3], this[1], this[3]); }
  /** @hidden */ get babr(): Vec4 { return new Vec4(this[2], this[3], this[2], this[0]); }
  /** @hidden */ get babg(): Vec4 { return new Vec4(this[2], this[3], this[2], this[1]); }
  /** @hidden */ get babb(): Vec4 { return new Vec4(this[2], this[3], this[2], this[2]); }
  /** @hidden */ get baba(): Vec4 { return new Vec4(this[2], this[3], this[2], this[3]); }
  /** @hidden */ get baar(): Vec4 { return new Vec4(this[2], this[3], this[3], this[0]); }
  /** @hidden */ get baag(): Vec4 { return new Vec4(this[2], this[3], this[3], this[1]); }
  /** @hidden */ get baab(): Vec4 { return new Vec4(this[2], this[3], this[3], this[2]); }
  /** @hidden */ get baaa(): Vec4 { return new Vec4(this[2], this[3], this[3], this[3]); }
  /** @hidden */ get arrr(): Vec4 { return new Vec4(this[3], this[0], this[0], this[0]); }
  /** @hidden */ get arrg(): Vec4 { return new Vec4(this[3], this[0], this[0], this[1]); }
  /** @hidden */ get arrb(): Vec4 { return new Vec4(this[3], this[0], this[0], this[2]); }
  /** @hidden */ get arra(): Vec4 { return new Vec4(this[3], this[0], this[0], this[3]); }
  /** @hidden */ get argr(): Vec4 { return new Vec4(this[3], this[0], this[1], this[0]); }
  /** @hidden */ get argg(): Vec4 { return new Vec4(this[3], this[0], this[1], this[1]); }
  /** @hidden */ get argb(): Vec4 { return new Vec4(this[3], this[0], this[1], this[2]); }
  /** @hidden */ get arga(): Vec4 { return new Vec4(this[3], this[0], this[1], this[3]); }
  /** @hidden */ get arbr(): Vec4 { return new Vec4(this[3], this[0], this[2], this[0]); }
  /** @hidden */ get arbg(): Vec4 { return new Vec4(this[3], this[0], this[2], this[1]); }
  /** @hidden */ get arbb(): Vec4 { return new Vec4(this[3], this[0], this[2], this[2]); }
  /** @hidden */ get arba(): Vec4 { return new Vec4(this[3], this[0], this[2], this[3]); }
  /** @hidden */ get arar(): Vec4 { return new Vec4(this[3], this[0], this[3], this[0]); }
  /** @hidden */ get arag(): Vec4 { return new Vec4(this[3], this[0], this[3], this[1]); }
  /** @hidden */ get arab(): Vec4 { return new Vec4(this[3], this[0], this[3], this[2]); }
  /** @hidden */ get araa(): Vec4 { return new Vec4(this[3], this[0], this[3], this[3]); }
  /** @hidden */ get agrr(): Vec4 { return new Vec4(this[3], this[1], this[0], this[0]); }
  /** @hidden */ get agrg(): Vec4 { return new Vec4(this[3], this[1], this[0], this[1]); }
  /** @hidden */ get agrb(): Vec4 { return new Vec4(this[3], this[1], this[0], this[2]); }
  /** @hidden */ get agra(): Vec4 { return new Vec4(this[3], this[1], this[0], this[3]); }
  /** @hidden */ get aggr(): Vec4 { return new Vec4(this[3], this[1], this[1], this[0]); }
  /** @hidden */ get aggg(): Vec4 { return new Vec4(this[3], this[1], this[1], this[1]); }
  /** @hidden */ get aggb(): Vec4 { return new Vec4(this[3], this[1], this[1], this[2]); }
  /** @hidden */ get agga(): Vec4 { return new Vec4(this[3], this[1], this[1], this[3]); }
  /** @hidden */ get agbr(): Vec4 { return new Vec4(this[3], this[1], this[2], this[0]); }
  /** @hidden */ get agbg(): Vec4 { return new Vec4(this[3], this[1], this[2], this[1]); }
  /** @hidden */ get agbb(): Vec4 { return new Vec4(this[3], this[1], this[2], this[2]); }
  /** @hidden */ get agba(): Vec4 { return new Vec4(this[3], this[1], this[2], this[3]); }
  /** @hidden */ get agar(): Vec4 { return new Vec4(this[3], this[1], this[3], this[0]); }
  /** @hidden */ get agag(): Vec4 { return new Vec4(this[3], this[1], this[3], this[1]); }
  /** @hidden */ get agab(): Vec4 { return new Vec4(this[3], this[1], this[3], this[2]); }
  /** @hidden */ get agaa(): Vec4 { return new Vec4(this[3], this[1], this[3], this[3]); }
  /** @hidden */ get abrr(): Vec4 { return new Vec4(this[3], this[2], this[0], this[0]); }
  /** @hidden */ get abrg(): Vec4 { return new Vec4(this[3], this[2], this[0], this[1]); }
  /** @hidden */ get abrb(): Vec4 { return new Vec4(this[3], this[2], this[0], this[2]); }
  /** @hidden */ get abra(): Vec4 { return new Vec4(this[3], this[2], this[0], this[3]); }
  /** @hidden */ get abgr(): Vec4 { return new Vec4(this[3], this[2], this[1], this[0]); }
  /** @hidden */ get abgg(): Vec4 { return new Vec4(this[3], this[2], this[1], this[1]); }
  /** @hidden */ get abgb(): Vec4 { return new Vec4(this[3], this[2], this[1], this[2]); }
  /** @hidden */ get abga(): Vec4 { return new Vec4(this[3], this[2], this[1], this[3]); }
  /** @hidden */ get abbr(): Vec4 { return new Vec4(this[3], this[2], this[2], this[0]); }
  /** @hidden */ get abbg(): Vec4 { return new Vec4(this[3], this[2], this[2], this[1]); }
  /** @hidden */ get abbb(): Vec4 { return new Vec4(this[3], this[2], this[2], this[2]); }
  /** @hidden */ get abba(): Vec4 { return new Vec4(this[3], this[2], this[2], this[3]); }
  /** @hidden */ get abar(): Vec4 { return new Vec4(this[3], this[2], this[3], this[0]); }
  /** @hidden */ get abag(): Vec4 { return new Vec4(this[3], this[2], this[3], this[1]); }
  /** @hidden */ get abab(): Vec4 { return new Vec4(this[3], this[2], this[3], this[2]); }
  /** @hidden */ get abaa(): Vec4 { return new Vec4(this[3], this[2], this[3], this[3]); }
  /** @hidden */ get aarr(): Vec4 { return new Vec4(this[3], this[3], this[0], this[0]); }
  /** @hidden */ get aarg(): Vec4 { return new Vec4(this[3], this[3], this[0], this[1]); }
  /** @hidden */ get aarb(): Vec4 { return new Vec4(this[3], this[3], this[0], this[2]); }
  /** @hidden */ get aara(): Vec4 { return new Vec4(this[3], this[3], this[0], this[3]); }
  /** @hidden */ get aagr(): Vec4 { return new Vec4(this[3], this[3], this[1], this[0]); }
  /** @hidden */ get aagg(): Vec4 { return new Vec4(this[3], this[3], this[1], this[1]); }
  /** @hidden */ get aagb(): Vec4 { return new Vec4(this[3], this[3], this[1], this[2]); }
  /** @hidden */ get aaga(): Vec4 { return new Vec4(this[3], this[3], this[1], this[3]); }
  /** @hidden */ get aabr(): Vec4 { return new Vec4(this[3], this[3], this[2], this[0]); }
  /** @hidden */ get aabg(): Vec4 { return new Vec4(this[3], this[3], this[2], this[1]); }
  /** @hidden */ get aabb(): Vec4 { return new Vec4(this[3], this[3], this[2], this[2]); }
  /** @hidden */ get aaba(): Vec4 { return new Vec4(this[3], this[3], this[2], this[3]); }
  /** @hidden */ get aaar(): Vec4 { return new Vec4(this[3], this[3], this[3], this[0]); }
  /** @hidden */ get aaag(): Vec4 { return new Vec4(this[3], this[3], this[3], this[1]); }
  /** @hidden */ get aaab(): Vec4 { return new Vec4(this[3], this[3], this[3], this[2]); }
  /** @hidden */ get aaaa(): Vec4 { return new Vec4(this[3], this[3], this[3], this[3]); }

  // [/Swizzle Autogen]
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