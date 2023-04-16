import { EPSILON } from './common.js';
import { Mat4, Mat4Like } from './mat4.js';
import { Quat, QuatLike } from './quat.js';
import { Vec3, Vec3Like } from './vec3.js';

/**
 * A Dual Quaternion given as a {@link Quat2}, an 8-element Float32Array, or
 * an array of 8 numbers.
 */
export type Quat2Like = [
  number, number, number, number,
  number, number, number, number
] | Float32Array;

/**
 * Dual Quaternion
 */
export class Quat2 extends Float32Array {
  /**
   * The number of bytes in a {@link Quat}.
   */
  static readonly BYTE_LENGTH = 8 * Float32Array.BYTES_PER_ELEMENT;

  /**
   * Create a {@link Quat2}.
   */
   constructor(...values: [Readonly<Quat2Like> | ArrayBufferLike, number?] | number[]) {
    switch(values.length) {
      case 8:
        super(values); break;
      case 2:
        super(values[0] as ArrayBufferLike, values[1], 8); break;
      case 1: {
        const v = values[0];
        if (typeof v === 'number') {
          super([v, v, v, v, v, v, v, v]);
        } else {
          super(v as ArrayBufferLike, 0, 8);
        }
        break;
      }
      default:
        super(8);
        this[3] = 1;
        break;
    }
  }

  //============
  // Attributes
  //============

  /**
   * A string representation of `this`
   * Equivalent to `Quat2.str(this);`
   */
  get str(): string {
    return Quat2.str(this);
  }

  //===================
  // Instances methods
  //===================

  /**
   * Copy the values from another {@link Quat2} into `this`.
   *
   * @param a the source dual quaternion
   * @returns `this`
   */
  copy(a: Readonly<Quat2Like>): Quat2 {
    super.set(a);
    return this;
  }


  //===================
  // Static methods
  //===================

  /**
   * Creates a new identity {@link Quat2}
   * @category Static
   *
   * @returns a new dual quaternion [real -> rotation, dual -> translation]
   */
  static create(): Quat2 {
    return new Quat2();
  }

  /**
   * Creates a {@link Quat2} quat initialized with values from an existing quaternion
   * @category Static
   *
   * @param a - dual quaternion to clone
   * @returns a new dual quaternion
   */
  static clone(a: Quat2Like): Quat2 {
    return new Quat2(a);
  }

  /**
   * Creates a new {@link Quat2}  initialized with the given values
   * @category Static
   *
   * @param x1 - 1st X component
   * @param y1 - 1st Y component
   * @param z1 - 1st Z component
   * @param w1 - 1st W component
   * @param x2 - 2nd X component
   * @param y2 - 2nd Y component
   * @param z2 - 2nd Z component
   * @param w2 - 2nd W component
   * @returns a new dual quaternion
   */
  static fromValues(x1: number, y1: number, z1: number, w1: number,
                    x2: number, y2: number, z2: number, w2: number): Quat2 {
    return new Quat2(x1, y1, z1, w1, x2, y2, z2, w2);
  }

  /**
   * Creates a new {@link Quat2} from the given values (quat and translation)
   * @category Static
   *
   * @param x1 - X component (rotation)
   * @param y1 - Y component (rotation)
   * @param z1 - Z component (rotation)
   * @param w1 - W component (rotation)
   * @param x2 - X component (translation)
   * @param y2 - Y component (translation)
   * @param z2 - Z component (translation)
   * @returns a new dual quaternion
   */
  static fromRotationTranslationValues(x1: number, y1: number, z1: number, w1: number,
                                       x2: number, y2: number, z2: number): Quat2 {
    const ax = x2 * 0.5;
    const ay = y2 * 0.5;
    const az = z2 * 0.5;

    return new Quat2(x1, y1, z1, w1,
      ax * w1 + ay * z1 - az * y1,
      ay * w1 + az * x1 - ax * z1,
      az * w1 + ax * y1 - ay * x1,
     -ax * x1 - ay * y1 - az * z1);
  }

  /**
   * Sets a {@link Quat2} from a quaternion and a translation
   * @category Static
   *
   * @param out - dual quaternion receiving operation result
   * @param q - a normalized quaternion
   * @param t - translation vector
   * @returns `out`
   */
  static fromRotationTranslation(out: Quat2Like, q: Readonly<QuatLike>, t: Readonly<Vec3Like>): Quat2Like {
    const ax = t[0] * 0.5;
    const ay = t[1] * 0.5;
    const az = t[2] * 0.5;
    const bx = q[0];
    const by = q[1];
    const bz = q[2];
    const bw = q[3];
    out[0] = bx;
    out[1] = by;
    out[2] = bz;
    out[3] = bw;
    out[4] = ax * bw + ay * bz - az * by;
    out[5] = ay * bw + az * bx - ax * bz;
    out[6] = az * bw + ax * by - ay * bx;
    out[7] = -ax * bx - ay * by - az * bz;
    return out;
  }

  /**
   * Sets a {@link Quat2} from a translation
   * @category Static
   *
   * @param out - dual quaternion receiving operation result
   * @param t - translation vector
   * @returns `out`
   */
  static fromTranslation(out: Quat2Like, t: Readonly<Vec3Like>): Quat2Like {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = t[0] * 0.5;
    out[5] = t[1] * 0.5;
    out[6] = t[2] * 0.5;
    out[7] = 0;
    return out;
  }

  /**
   * Sets a {@link Quat2} from a quaternion
   * @category Static
   *
   * @param out - dual quaternion receiving operation result
   * @param q - a normalized quaternion
   * @returns `out`
   */
  static fromRotation(out: Quat2Like, q: Readonly<QuatLike>): Quat2Like {
    out[0] = q[0];
    out[1] = q[1];
    out[2] = q[2];
    out[3] = q[3];
    out[4] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    return out;
  }

  /**
   * Sets a {@link Quat2} from a quaternion
   * @category Static
   *
   * @param out - dual quaternion receiving operation result
   * @param a - the matrix
   * @returns `out`
   */
  static fromMat4(out: Quat2Like, a: Readonly<Mat4Like>): Quat2Like {
    Mat4.getRotation(tempQuat, a);
    Mat4.getTranslation(tempVec3, a);
    return Quat2.fromRotationTranslation(out, tempQuat, tempVec3);
  }

  /**
   * Copy the values from one {@link Quat2} to another
   * @category Static
   *
   * @param out - the receiving dual quaternion
   * @param a - the source dual quaternion
   * @returns `out`
   */
  static copy(out: Quat2Like, a: Readonly<Quat2Like>): Quat2Like {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    return out;
  }

  /**
   * Set a {@link Quat2} to the identity dual quaternion
   * @category Static
   *
   * @param out - the receiving dual quaternion
   * @returns `out`
   */
  static identity(out: QuatLike): QuatLike {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    return out;
  }

  /**
   * Set the components of a {@link Quat2} to the given values
   * @category Static
   *
   * @param out - the receiving vector
   * @param x1 - 1st X component
   * @param y1 - 1st Y component
   * @param z1 - 1st Z component
   * @param w1 - 1st W component
   * @param x2 - 2nd X component
   * @param y2 - 2nd Y component
   * @param z2 - 2nd Z component
   * @param w2 - 2nd W component
   * @returns `out`
   */
  static set(out: Quat2Like, x1: number, y1: number, z1: number, w1: number,
                             x2: number, y2: number, z2: number, w2: number): Quat2Like {
    out[0] = x1;
    out[1] = y1;
    out[2] = z1;
    out[3] = w1;
    out[4] = x2;
    out[5] = y2;
    out[6] = z2;
    out[7] = w2;
    return out;
  }

  /**
   * Gets the real part of a dual quat
   * @category Static
   *
   * @param out - real part
   * @param a - Dual Quaternion
   * @return `out`
   */
  static getReal(out: QuatLike, a: Readonly<Quat2Like>): QuatLike {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
  };

  /**
   * Gets the dual part of a dual quat
   * @category Static
   *
   * @param out - dual part
   * @param a - Dual Quaternion
   * @return `out`
   */
  static getDual(out: QuatLike, a: Readonly<Quat2Like>): QuatLike {
    out[0] = a[4];
    out[1] = a[5];
    out[2] = a[6];
    out[3] = a[7];
    return out;
  }

  /**
   * Set the real component of a {@link Quat2} to the given quaternion
   * @category Static
   *
   * @param out - the receiving dual quaternion
   * @param a - a quaternion representing the real part
   * @return `out`
   */
  static setReal(out: Quat2Like, a: Readonly<QuatLike>): Quat2Like {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
  };

  /**
   * Set the dual component of a {@link Quat2} to the given quaternion
   * @category Static
   *
   * @param out - the receiving dual quaternion
   * @param a - a quaternion representing the dual part
   * @return `out`
   */
  static setDual(out: Quat2Like, a: Readonly<QuatLike>): Quat2Like {
    out[4] = a[0];
    out[5] = a[1];
    out[6] = a[2];
    out[7] = a[3];
    return out;
  }

  /**
   * Gets the translation of a normalized {@link Quat2}
   * @category Static
   *
   * @param out - the receiving translation vector
   * @param a - Dual Quaternion to be decomposed
   * @return `out`
   */
  static getTranslation(out: Vec3Like, a: Readonly<Quat2Like>): Vec3Like {
    const ax = a[4];
    const ay = a[5];
    const az = a[6];
    const aw = a[7];
    const bx = -a[0];
    const by = -a[1];
    const bz = -a[2];
    const bw = a[3];
    out[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    out[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    out[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
    return out;
  }

  /**
   * Translates a {@link Quat2} by the given vector
   * @category Static
   *
   * @param out - the receiving dual quaternion
   * @param a - the dual quaternion to translate
   * @param v - vector to translate by
   * @returns `out`
   */
  static translate(out: Quat2Like, a: Readonly<Quat2Like>, v: Readonly<Vec3Like>): Quat2Like {
    const ax1 = a[0];
    const ay1 = a[1];
    const az1 = a[2];
    const aw1 = a[3];
    const bx1 = v[0] * 0.5;
    const by1 = v[1] * 0.5;
    const bz1 = v[2] * 0.5;
    const ax2 = a[4];
    const ay2 = a[5];
    const az2 = a[6];
    const aw2 = a[7];
    out[0] = ax1;
    out[1] = ay1;
    out[2] = az1;
    out[3] = aw1;
    out[4] = aw1 * bx1 + ay1 * bz1 - az1 * by1 + ax2;
    out[5] = aw1 * by1 + az1 * bx1 - ax1 * bz1 + ay2;
    out[6] = aw1 * bz1 + ax1 * by1 - ay1 * bx1 + az2;
    out[7] = -ax1 * bx1 - ay1 * by1 - az1 * bz1 + aw2;
    return out;
  }

  /**
   * Rotates a {@link Quat2} around the X axis
   * @category Static
   *
   * @param out - the receiving dual quaternion
   * @param a - the dual quaternion to rotate
   * @param rad - angle (in radians) to rotate
   * @returns `out`
   */
  static rotateX(out: Quat2Like, a: Readonly<Quat2Like>, rad: number): Quat2Like {
    let bx = -a[0];
    let by = -a[1];
    let bz = -a[2];
    let bw = a[3];
    const ax = a[4];
    const ay = a[5];
    const az = a[6];
    const aw = a[7];
    const ax1 = ax * bw + aw * bx + ay * bz - az * by;
    const ay1 = ay * bw + aw * by + az * bx - ax * bz;
    const az1 = az * bw + aw * bz + ax * by - ay * bx;
    const aw1 = aw * bw - ax * bx - ay * by - az * bz;
    Quat.rotateX(out as QuatLike, a as QuatLike, rad);
    bx = out[0];
    by = out[1];
    bz = out[2];
    bw = out[3];
    out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
    out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
    out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
    out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
    return out;
  }

  /**
   * Rotates a {@link Quat2} around the Y axis
   * @category Static
   *
   * @param out - the receiving dual quaternion
   * @param a - the dual quaternion to rotate
   * @param rad - angle (in radians) to rotate
   * @returns `out`
   */
  static rotateY(out: Quat2Like, a: Readonly<Quat2Like>, rad: number): Quat2Like {
    let bx = -a[0];
    let by = -a[1];
    let bz = -a[2];
    let bw = a[3];
    const ax = a[4];
    const ay = a[5];
    const az = a[6];
    const aw = a[7];
    const ax1 = ax * bw + aw * bx + ay * bz - az * by;
    const ay1 = ay * bw + aw * by + az * bx - ax * bz;
    const az1 = az * bw + aw * bz + ax * by - ay * bx;
    const aw1 = aw * bw - ax * bx - ay * by - az * bz;
    Quat.rotateY(out as QuatLike, a as QuatLike, rad);
    bx = out[0];
    by = out[1];
    bz = out[2];
    bw = out[3];
    out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
    out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
    out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
    out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
    return out;
  }

  /**
   * Rotates a {@link Quat2} around the Z axis
   * @category Static
   *
   * @param out - the receiving dual quaternion
   * @param a - the dual quaternion to rotate
   * @param rad - angle (in radians) to rotate
   * @returns `out`
   */
  static rotateZ(out: Quat2Like, a: Readonly<Quat2Like>, rad: number): Quat2Like {
    let bx = -a[0];
    let by = -a[1];
    let bz = -a[2];
    let bw = a[3];
    const ax = a[4];
    const ay = a[5];
    const az = a[6];
    const aw = a[7];
    const ax1 = ax * bw + aw * bx + ay * bz - az * by;
    const ay1 = ay * bw + aw * by + az * bx - ax * bz;
    const az1 = az * bw + aw * bz + ax * by - ay * bx;
    const aw1 = aw * bw - ax * bx - ay * by - az * bz;
    Quat.rotateZ(out as QuatLike, a as QuatLike, rad);
    bx = out[0];
    by = out[1];
    bz = out[2];
    bw = out[3];
    out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
    out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
    out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
    out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
    return out;
  }

  /**
   * Rotates a {@link Quat2} by a given quaternion (a * q)
   * @category Static
   *
   * @param out - the receiving dual quaternion
   * @param a - the dual quaternion to rotate
   * @param q - quaternion to rotate by
   * @returns `out`
   */
  static rotateByQuatAppend(out: Quat2Like, a: Readonly<Quat2Like>, q: Readonly<QuatLike>): Quat2Like {
    const qx = q[0];
    const qy = q[1];
    const qz = q[2];
    const qw = q[3];
    let ax = a[0];
    let ay = a[1];
    let az = a[2];
    let aw = a[3];

    out[0] = ax * qw + aw * qx + ay * qz - az * qy;
    out[1] = ay * qw + aw * qy + az * qx - ax * qz;
    out[2] = az * qw + aw * qz + ax * qy - ay * qx;
    out[3] = aw * qw - ax * qx - ay * qy - az * qz;
    ax = a[4];
    ay = a[5];
    az = a[6];
    aw = a[7];
    out[4] = ax * qw + aw * qx + ay * qz - az * qy;
    out[5] = ay * qw + aw * qy + az * qx - ax * qz;
    out[6] = az * qw + aw * qz + ax * qy - ay * qx;
    out[7] = aw * qw - ax * qx - ay * qy - az * qz;
    return out;
  }

  /**
   * Rotates a {@link Quat2} by a given quaternion (q * a)
   * @category Static
   *
   * @param out - the receiving dual quaternion
   * @param q - quaternion to rotate by
   * @param a - the dual quaternion to rotate
   * @returns `out`
   */
  static rotateByQuatPrepend(out: Quat2Like, q: Readonly<QuatLike>, a: Readonly<Quat2Like>): Quat2Like {
    const qx = q[0];
    const qy = q[1];
    const qz = q[2];
    const qw = q[3];
    let bx = a[0];
    let by = a[1];
    let bz = a[2];
    let bw = a[3];

    out[0] = qx * bw + qw * bx + qy * bz - qz * by;
    out[1] = qy * bw + qw * by + qz * bx - qx * bz;
    out[2] = qz * bw + qw * bz + qx * by - qy * bx;
    out[3] = qw * bw - qx * bx - qy * by - qz * bz;
    bx = a[4];
    by = a[5];
    bz = a[6];
    bw = a[7];
    out[4] = qx * bw + qw * bx + qy * bz - qz * by;
    out[5] = qy * bw + qw * by + qz * bx - qx * bz;
    out[6] = qz * bw + qw * bz + qx * by - qy * bx;
    out[7] = qw * bw - qx * bx - qy * by - qz * bz;
    return out;
  }

  /**
   * Rotates a {@link Quat2} around a given axis. Does the normalization automatically
   * @category Static
   *
   * @param out - the receiving dual quaternion
   * @param a - the dual quaternion to rotate
   * @param axis - the axis to rotate around
   * @param rad - how far the rotation should be
   * @returns `out`
   */
  static rotateAroundAxis(out: Quat2Like, a: Readonly<Quat2Like>, axis: Readonly<Vec3Like>, rad: number): Quat2Like {
    //Special case for rad = 0
    if (Math.abs(rad) < EPSILON) {
      return Quat2.copy(out, a);
    }
    const axisLength = Math.sqrt(axis[0] * axis[0] + axis[1] * axis[1] + axis[2] * axis[2]);

    rad = rad * 0.5;
    const s = Math.sin(rad);
    const bx = (s * axis[0]) / axisLength;
    const by = (s * axis[1]) / axisLength;
    const bz = (s * axis[2]) / axisLength;
    const bw = Math.cos(rad);

    const ax1 = a[0];
    const ay1 = a[1];
    const az1 = a[2];
    const aw1 = a[3];
    out[0] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
    out[1] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
    out[2] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
    out[3] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;

    const ax = a[4];
    const ay = a[5];
    const az = a[6];
    const aw = a[7];
    out[4] = ax * bw + aw * bx + ay * bz - az * by;
    out[5] = ay * bw + aw * by + az * bx - ax * bz;
    out[6] = az * bw + aw * bz + ax * by - ay * bx;
    out[7] = aw * bw - ax * bx - ay * by - az * bz;

    return out;
  }

  /**
   * Adds two {@link Quat2}s
   * @category Static
   *
   * @param out - the receiving dual quaternion
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static add(out: Quat2Like, a: Readonly<Quat2Like>, b: Readonly<Quat2Like>): Quat2Like {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    out[6] = a[6] + b[6];
    out[7] = a[7] + b[7];
    return out;
  }

  /**
   * Multiplies two {@link Quat2}s
   * @category Static
   *
   * @param out - the receiving dual quaternion
   * @param a - the first operand
   * @param b - the second operand
   * @returns {quat2} out
   */
  static multiply(out: Quat2Like, a: Readonly<Quat2Like>, b: Readonly<Quat2Like>): Quat2Like {
    const ax0 = a[0];
    const ay0 = a[1];
    const az0 = a[2];
    const aw0 = a[3];
    const bx1 = b[4];
    const by1 = b[5];
    const bz1 = b[6];
    const bw1 = b[7];
    const ax1 = a[4];
    const ay1 = a[5];
    const az1 = a[6];
    const aw1 = a[7];
    const bx0 = b[0];
    const by0 = b[1];
    const bz0 = b[2];
    const bw0 = b[3];
    out[0] = ax0 * bw0 + aw0 * bx0 + ay0 * bz0 - az0 * by0;
    out[1] = ay0 * bw0 + aw0 * by0 + az0 * bx0 - ax0 * bz0;
    out[2] = az0 * bw0 + aw0 * bz0 + ax0 * by0 - ay0 * bx0;
    out[3] = aw0 * bw0 - ax0 * bx0 - ay0 * by0 - az0 * bz0;
    out[4] =
      ax0 * bw1 +
      aw0 * bx1 +
      ay0 * bz1 -
      az0 * by1 +
      ax1 * bw0 +
      aw1 * bx0 +
      ay1 * bz0 -
      az1 * by0;
    out[5] =
      ay0 * bw1 +
      aw0 * by1 +
      az0 * bx1 -
      ax0 * bz1 +
      ay1 * bw0 +
      aw1 * by0 +
      az1 * bx0 -
      ax1 * bz0;
    out[6] =
      az0 * bw1 +
      aw0 * bz1 +
      ax0 * by1 -
      ay0 * bx1 +
      az1 * bw0 +
      aw1 * bz0 +
      ax1 * by0 -
      ay1 * bx0;
    out[7] =
      aw0 * bw1 -
      ax0 * bx1 -
      ay0 * by1 -
      az0 * bz1 +
      aw1 * bw0 -
      ax1 * bx0 -
      ay1 * by0 -
      az1 * bz0;
    return out;
  }

  /**
   * Alias for {@link Quat2.multiply}
   * @category Static
   */
  static mul(out: Quat2Like, a: Readonly<Quat2Like>, b: Readonly<Quat2Like>): Quat2Like { return out; }

  /**
   * Scales a {@link Quat2} by a scalar value
   * @category Static
   *
   * @param out - the receiving dual quaterion
   * @param a - the dual quaternion to scale
   * @param b - scalar value to scale the dual quaterion by
   * @returns `out`
   */
  static scale(out: Quat2Like, a: Readonly<Quat2Like>, b: number): Quat2Like {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    out[6] = a[6] * b;
    out[7] = a[7] * b;
    return out;
  }

  /**
   * Calculates the dot product of two {@link Quat2}s (The dot product of the real parts)
   * @category Static
   *
   * @param a - the first operand
   * @param b - the second operand
   * @returns dot product of a and b
   */
  static dot(a: Readonly<Quat2Like>, b: Readonly<Quat2Like>): number { return 0; }

  /**
   * Performs a linear interpolation between two {@link Quat2}s
   * NOTE: The resulting dual quaternions won't always be normalized (The error is most noticeable when `t = 0.5`)
   * @category Static
   *
   * @param out - the receiving dual quat
   * @param a - the first operand
   * @param b - the second operand
   * @param t - interpolation amount, in the range [0-1], between the two inputs
   * @returns `out`
   */
  static lerp(out: Quat2Like, a: Readonly<Quat2Like>, b: Readonly<Quat2Like>, t: number): Quat2Like {
    const mt = 1 - t;
    if (Quat2.dot(a, b) < 0) t = -t;

    out[0] = a[0] * mt + b[0] * t;
    out[1] = a[1] * mt + b[1] * t;
    out[2] = a[2] * mt + b[2] * t;
    out[3] = a[3] * mt + b[3] * t;
    out[4] = a[4] * mt + b[4] * t;
    out[5] = a[5] * mt + b[5] * t;
    out[6] = a[6] * mt + b[6] * t;
    out[7] = a[7] * mt + b[7] * t;

    return out;
  }

  /**
   * Calculates the inverse of a {@link Quat2}. If they are normalized, conjugate is cheaper
   * @category Static
   *
   * @param out - the receiving dual quaternion
   * @param a - dual quat to calculate inverse of
   * @returns `out`
   */
  static invert(out: Quat2Like, a: Readonly<Quat2Like>): Quat2Like {
    const sqlen = Quat2.squaredLength(a);
    out[0] = -a[0] / sqlen;
    out[1] = -a[1] / sqlen;
    out[2] = -a[2] / sqlen;
    out[3] = a[3] / sqlen;
    out[4] = -a[4] / sqlen;
    out[5] = -a[5] / sqlen;
    out[6] = -a[6] / sqlen;
    out[7] = a[7] / sqlen;
    return out;
  }

  /**
   * Calculates the conjugate of a {@link Quat2}
   * If the dual quaternion is normalized, this function is faster than {@link Quat2.invert} and produces the same result.
   * @category Static
   *
   * @param out - the receiving dual quaternion
   * @param a - dual quaternion to calculate conjugate of
   * @returns `out`
   */
  static conjugate(out: Quat2Like, a: Readonly<Quat2Like>): Quat2Like {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = a[3];
    out[4] = -a[4];
    out[5] = -a[5];
    out[6] = -a[6];
    out[7] = a[7];
    return out;
  }

  /**
   * Calculates the magnitude (length) of a {@link Quat2}
   * @category Static
   *
   * @param a - dual quaternion to calculate length of
   * @returns length of `a`
   */
  static magnitude(a: Readonly<Quat2Like>): number { return 0; }

  /**
   * Alias for {@link Quat2.magnitude}
   * @category Static
   */
  static mag(a: Readonly<Quat2Like>): number { return 0; }

  /**
   * Alias for {@link Quat2.magnitude}
   * @category Static
   * @deprecated Use {@link Quat2.magnitude} to avoid conflicts with builtin `length` methods/attribs
   */
  // @ts-ignore: Length conflicts with Function.length
  static length(a: Readonly<Quat2Like>): number { return 0; }

  /**
   * Alias for {@link Quat2.magnitude}
   * @category Static
   * @deprecated Use {@link Quat2.mag}
   */
  static len(a: Readonly<Quat2Like>): number { return 0; }

  /**
   * Calculates the squared length of a {@link Quat2}
   * @category Static
   *
   * @param a - dual quaternion to calculate squared length of
   * @returns squared length of a
   */
  static squaredLength(a: Readonly<Quat2Like>): number { return 0; }

  /**
   * Alias for {@link Quat2.squaredLength}
   * @category Static
   */
  static sqrLen(a: Readonly<Quat2Like>): number { return 0; }

  /**
   * Normalize a {@link Quat2}
   * @category Static
   *
   * @param out - the receiving dual quaternion
   * @param a - dual quaternion to normalize
   * @returns `out`
   */
  static normalize(out: Quat2Like, a: Readonly<Quat2Like>): Quat2Like {
    let magnitude = Quat2.squaredLength(a);
    if (magnitude > 0) {
      magnitude = Math.sqrt(magnitude);

      const a0 = a[0] / magnitude;
      const a1 = a[1] / magnitude;
      const a2 = a[2] / magnitude;
      const a3 = a[3] / magnitude;

      const b0 = a[4];
      const b1 = a[5];
      const b2 = a[6];
      const b3 = a[7];

      const a_dot_b = a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3;

      out[0] = a0;
      out[1] = a1;
      out[2] = a2;
      out[3] = a3;

      out[4] = (b0 - a0 * a_dot_b) / magnitude;
      out[5] = (b1 - a1 * a_dot_b) / magnitude;
      out[6] = (b2 - a2 * a_dot_b) / magnitude;
      out[7] = (b3 - a3 * a_dot_b) / magnitude;
    }
    return out;
  }

  /**
   * Returns a string representation of a {@link Quat2}
   * @category Static
   *
   * @param a - dual quaternion to represent as a string
   * @returns string representation of the vector
   */
  static str(a: Readonly<Quat2Like>): string {
    return `Quat2(${a.join(', ')})`;
  }

  /**
   * Returns whether or not the {@link Quat2}s have exactly the same elements in the same position (when compared with ===)
   * @category Static
   *
   * @param a - The first dual quaternion.
   * @param b - The second dual quaternion.
   * @returns True if the dual quaternions are equal, false otherwise.
   */
  static exactEquals(a: Readonly<Quat2Like>, b: Readonly<Quat2Like>): boolean {
    return (
      a[0] === b[0] &&
      a[1] === b[1] &&
      a[2] === b[2] &&
      a[3] === b[3] &&
      a[4] === b[4] &&
      a[5] === b[5] &&
      a[6] === b[6] &&
      a[7] === b[7]
    );
  }

  /**
   * Returns whether or not the {@link Quat2}s have approximately the same elements in the same position.
   * @category Static
   *
   * @param a - The first dual quaternion.
   * @param b - The second dual quaternion.
   * @returns True if the dual quaternions are equal, false otherwise.
   */
  static equals(a: Readonly<Quat2Like>, b: Readonly<Quat2Like>): boolean {
    const a0 = a[0];
    const a1 = a[1];
    const a2 = a[2];
    const a3 = a[3];
    const a4 = a[4];
    const a5 = a[5];
    const a6 = a[6];
    const a7 = a[7];
    const b0 = b[0];
    const b1 = b[1];
    const b2 = b[2];
    const b3 = b[3];
    const b4 = b[4];
    const b5 = b[5];
    const b6 = b[6];
    const b7 = b[7];
    return (
      Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
      Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
      Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
      Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
      Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
      Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
      Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
      Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7))
    );
  }
}

// Temporary variables to prevent repeated allocations in the algorithms above.
const tempQuat = new Quat();
const tempVec3 = new Vec3();

// Methods which re-use the Quat implementation
// @ts-ignore
Quat2.dot = Quat.dot;
// @ts-ignore
Quat2.squaredLength = Quat.squaredLength;
// @ts-ignore
Quat2.sqrLen = Quat.squaredLength;
// @ts-ignore
Quat2.mag = Quat.magnitude;
// @ts-ignore
Quat2.length = Quat.magnitude;
// @ts-ignore
Quat2.len = Quat.magnitude;

// Static method alias assignments
Quat2.mul = Quat2.multiply;

/**
 * Quat2 alias for backwards compatibility
 */
export const quat2 = Quat2;