import { EPSILON } from './common.js';

/**
 * A 2x2 Matrix given as a {@link Mat2}, a 4-element Float32Array, or an array
 * of 4 numbers.
 */
export type Mat2Like = [
  number, number,
  number, number
] | Float32Array;

const IDENTITY_2X2 = new Float32Array([
  1, 0,
  0, 1
]);

/**
 * A 2x2 Matrix
 */
export class Mat2 extends Float32Array {
  /**
   * The number of bytes in a {@link Mat2}.
   */
  static readonly BYTE_LENGTH = 4 * Float32Array.BYTES_PER_ELEMENT;

  /**
   * Create a {@link Mat2}.
   */
  constructor(...values: [Readonly<Mat2Like>, number?] | number[] ) {
    switch(values.length) {
      case 4:
        super(values); break;
      case 2:
        super(values[0] as ArrayBufferLike, values[1], 4); break;
      case 1:
        const v = values[0];
        if (typeof v === 'number') {
          super([
            v, v,
            v, v]);
        } else {
          super(v as ArrayBufferLike, 0, 4);
        }
        break;
      default:
        super(IDENTITY_2X2); break;
    }
  }

  //============
  // Attributes
  //============

  /**
   * A string representation of `this`
   * Equivalent to `Mat2.str(this);`
   */
   get str(): string {
    return Mat2.str(this);
  }

  //===================
  // Instances methods
  //===================

  /**
   * Set `this` to the identity matrix
   * Equivalent to Mat2.identity(this)
   *
   * @returns `this`
   */
  identity(): Mat2 {
    this.set(IDENTITY_2X2);
    return this;
  }

  //================
  // Static methods
  //================

  /**
   * Creates a new, identity {@link Mat2}
   * @category Static
   *
   * @returns A new {@link Mat2}
   */
  static create(): Mat2 {
    return new Mat2();
  }

  /**
   * Creates a new {@link Mat2} initialized with values from an existing matrix
   * @category Static
   *
   * @param a - Matrix to clone
   * @returns A new {@link Mat2}
   */
  static clone(a: Readonly<Mat2Like>): Mat2 {
    return new Mat2(a);
  }

  /**
   * Copy the values from one {@link Mat2} to another
   * @category Static
   *
   * @param out - The receiving Matrix
   * @param a - Matrix to copy
   * @returns `out`
   */
  static copy(out: Mat2Like, a: Readonly<Mat2Like>): Mat2Like {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
  }

  /**
   * Create a new {@link Mat2} with the given values
   * @category Static
   *
   * @param values - Matrix components
   * @returns A new {@link Mat2}
   */
  static fromValues(...values: number[]): Mat2 {
    return new Mat2(...values);
  }

  /**
   * Returns a string representation of a {@link Mat2}
   * @category Static
   *
   * @param a - matrix to represent as a string
   * @returns string representation of the matrix
   */
  static str(a: Readonly<Mat2Like>): string {
    return `Mat2(${a.join(', ')})`;
  }

}

/**
 * {@link Mat2} alias for backwards compatibility
 */
export const mat2 = Mat2;