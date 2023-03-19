import { EPSILON } from './common.js';

/**
 * A 2x3 Matrix given as a {@link Mat2d}, a 6-element Float32Array, or an array
 * of 6 numbers.
 */
export type Mat2dLike = [
  number, number, 
  number, number,
  number, number
] | Float32Array;

const IDENTITY_2X3 = new Float32Array([
  1, 0,
  0, 1,
  0, 0,
]);

/**
 * A 2x3 Matrix
 */
export class Mat2d extends Float32Array {
  /**
   * The number of bytes in a {@link Mat2d}.
   */
  static readonly BYTE_LENGTH = 6 * Float32Array.BYTES_PER_ELEMENT;

  /**
   * Create a {@link Mat2}.
   */
  constructor(...values: [Readonly<Mat2dLike>, number?] | number[] ) {
    switch(values.length) {
      case 6:
        super(values); break;
      case 2:
        super(values[0] as ArrayBufferLike, values[1], 6); break;
      case 1:
        const v = values[0];
        if (typeof v === 'number') {
          super([
            v, v,
            v, v,
            v, v]);
        } else {
          super(v as ArrayBufferLike, 0, 6);
        }
        break;
      default:
        super(IDENTITY_2X3); break;
    }
  }

  //============
  // Attributes
  //============

  /**
   * A string representation of `this`
   * Equivalent to `Mat2d.str(this);`
   */
   get str(): string {
    return Mat2d.str(this);
  }

  //===================
  // Instances methods
  //===================

  /**
   * Set `this` to the identity matrix
   * Equivalent to Mat2d.identity(this)
   *
   * @returns `this`
   */
  identity(): Mat2d {
    this.set(IDENTITY_2X3);
    return this;
  }

  //================
  // Static methods
  //================

  /**
   * Creates a new, identity {@link Mat2d}
   * @category Static
   *
   * @returns A new {@link Mat2d}
   */
  static create(): Mat2d {
    return new Mat2d();
  }

  /**
   * Creates a new {@link Mat2d} initialized with values from an existing matrix
   * @category Static
   *
   * @param a - Matrix to clone
   * @returns A new {@link Mat2d}
   */
  static clone(a: Readonly<Mat2dLike>): Mat2d {
    return new Mat2d(a);
  }

  /**
   * Copy the values from one {@link Mat2d} to another
   * @category Static
   *
   * @param out - The receiving Matrix
   * @param a - Matrix to copy
   * @returns `out`
   */
  static copy(out: Mat2dLike, a: Readonly<Mat2dLike>): Mat2dLike {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    return out;
  }

  /**
   * Create a new {@link Mat2d} with the given values
   * @category Static
   *
   * @param values - Matrix components
   * @returns A new {@link Mat2d}
   */
  static fromValues(...values: number[]): Mat2d {
    return new Mat2d(...values);
  }

  /**
   * Returns a string representation of a {@link Mat2d}
   * @category Static
   *
   * @param a - matrix to represent as a string
   * @returns string representation of the matrix
   */
  static str(a: Readonly<Mat2dLike>): string {
    return `Mat2d(${a.join(', ')})`;
  }

}

/**
 * {@link Mat2d} alias for backwards compatibility
 */
export const mat2d = Mat2d;