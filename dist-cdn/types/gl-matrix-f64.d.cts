/**
 * Provides an all-inclusive ESM distribution of `gl-matrix` (64-bit). All library classes extends `Float64Array`.
 *
 * @packageDocumentation
 */

/**
 * Provides all common type declarations shared across `gl-matrix`.
 *
 * ```ts
 * import { Vec3 } from 'gl-matrix';
 * import type { Vec3Like } from 'gl-matrix/types';
 *
 * const vec: Vec3Like = new Vec3(0, 1, 2);
 * ```
 *
 * For JSDoc using the new Typescript 5.5 `@import` tag:
 * ```js
 * /**
 *  * @import { Vec3Like } from 'gl-matrix/types'
 *  *\/
 * ```
 *
 * For JSDoc using the older `import types` Typescript mechanism:
 * ```js
 * /**
 *  * @type {import('gl-matrix/types').Vec3Like}
 *  *\/
 * ```
 *
 * @packageDocumentation
 */
/**
 * The floating-point typed arrays that can be used in place of a vector, matrix, or quaternion.
 */
type FloatArray = Float32Array | Float64Array;
/**
 * A 2x2 Matrix given as a {@link Mat2}, a 4-element floating-point TypedArray, or an array of 4 numbers.
 */
type Mat2Like = [number, number, number, number] | FloatArray;
/**
 * A 2x3 Matrix given as a {@link Mat2d}, a 6-element floating-point TypedArray, or an array of 6 numbers.
 */
type Mat2dLike = [number, number, number, number, number, number] | FloatArray;
/**
 * A 3x3 Matrix given as a {@link Mat3}, a 9-element floating-point TypedArray, or an array of 9 numbers.
 */
type Mat3Like = [number, number, number, number, number, number, number, number, number] | FloatArray;
/**
 * A 4x4 Matrix given as a {@link Mat4}, a 16-element floating-point TypedArray, or an array of 16 numbers.
 */
type Mat4Like =
  | [
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
    ]
  | FloatArray;
/**
 * A Quaternion given as a {@link Quat}, a 4-element floating-point TypedArray, or an array of 4 numbers.
 */
type QuatLike = Vec4Like;
/**
 * A Dual Quaternion given as a {@link Quat2}, an 8-element floating-point TypedArray, or an array of 8 numbers.
 */
type Quat2Like = [number, number, number, number, number, number, number, number] | FloatArray;
/**
 * A 2-dimensional vector given as a {@link Vec2}, a 2-element floating-point TypedArray, or an array of 2 numbers.
 */
type Vec2Like = [number, number] | FloatArray;
/**
 * A 3-dimensional vector given as a {@link Vec3}, a 3-element floating-point TypedArray, or an array of 3 numbers.
 */
type Vec3Like = [number, number, number] | FloatArray;
/**
 * A 4-dimensional vector given as a {@link Vec4}, a 4-element floating-point TypedArray, or an array of 4 numbers.
 */
type Vec4Like = [number, number, number, number] | FloatArray;

/**
 * A 2x2 Matrix
 */
declare class Mat2 extends Float64Array {
  #private;
  /**
   * Create a {@link Mat2}.
   *
   * @category Constructor
   */
  constructor(...values: [Readonly<Mat2Like> | ArrayBufferLike, number?] | number[]);
  /**
   * A string representation of `this`
   * Equivalent to `Mat2.str(this);`
   *
   * @category Accessors
   */
  get str(): string;
  /**
   * Copy the values from another {@link Mat2} into `this`.
   *
   * @param a the source vector
   * @returns `this`
   * @category Methods
   */
  copy(a: Readonly<Mat2Like>): this;
  /**
   * Set `this` to the identity matrix
   * Equivalent to Mat2.identity(this)
   *
   * @returns `this`
   * @category Methods
   */
  identity(): this;
  /**
   * Multiplies this {@link Mat2} against another one
   * Equivalent to `Mat2.multiply(this, this, b);`
   *
   * @param b - The second operand
   * @returns `this`
   * @category Methods
   */
  multiply(b: Readonly<Mat2Like>): this;
  /**
   * Alias for {@link Mat2.multiply}
   * @category Methods
   */
  mul(b: Readonly<Mat2Like>): this;
  /**
   * Transpose this {@link Mat2}
   * Equivalent to `Mat2.transpose(this, this);`
   *
   * @returns `this`
   * @category Methods
   */
  transpose(): this;
  /**
   * Inverts this {@link Mat2}
   * Equivalent to `Mat4.invert(this, this);`
   *
   * @returns `this`
   * @category Methods
   */
  invert(): this;
  /**
   * Scales this {@link Mat2} by the dimensions in the given vec3 not using vectorization
   * Equivalent to `Mat2.scale(this, this, v);`
   *
   * @param v - The {@link Vec2} to scale the matrix by
   * @returns `this`
   * @category Methods
   */
  scale(v: Readonly<Vec2Like>): this;
  /**
   * Rotates this {@link Mat2} by the given angle around the given axis
   * Equivalent to `Mat2.rotate(this, this, rad);`
   *
   * @param rad - the angle to rotate the matrix by
   * @returns `this`
   * @category Methods
   */
  rotate(rad: number): this;
  /**
   * @category Static
   *
   * @returns The number of bytes in a {@link Mat2}.
   */
  static get BYTE_LENGTH(): number;
  /**
   * Creates a new, identity {@link Mat2}
   * @category Static
   *
   * @returns A new {@link Mat2}
   */
  static create(): Mat2;
  /**
   * Creates a new {@link Mat2} initialized with values from an existing matrix
   * @category Static
   *
   * @param a - Matrix to clone
   * @returns A new {@link Mat2}
   */
  static clone(a: Readonly<Mat2Like>): Mat2;
  /**
   * Copy the values from one {@link Mat2} to another
   * @category Static
   *
   * @param out - The receiving Matrix
   * @param a - Matrix to copy
   * @returns `out`
   */
  static copy(out: Mat2Like, a: Readonly<Mat2Like>): Mat2Like;
  /**
   * Create a new {@link Mat2} with the given values
   * @category Static
   *
   * @param values - Matrix components
   * @returns A new {@link Mat2}
   */
  static fromValues(...values: number[]): Mat2;
  /**
   * Set the components of a {@link Mat2} to the given values
   * @category Static
   *
   * @param out - The receiving matrix
   * @param values - Matrix components
   * @returns `out`
   */
  static set(out: Mat2Like, ...values: number[]): Mat2Like;
  /**
   * Set a {@link Mat2} to the identity matrix
   * @category Static
   *
   * @param out - The receiving matrix
   * @returns `out`
   */
  static identity(out: Mat2Like): Mat2Like;
  /**
   * Transpose the values of a {@link Mat2}
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the source matrix
   * @returns `out`
   */
  static transpose(out: Mat2Like, a: Readonly<Mat2Like>): Mat2Like;
  /**
   * Inverts a {@link Mat2}
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the source matrix
   * @returns `out` or `null` if the matrix is not invertible
   */
  static invert(out: Mat2Like, a: Mat2Like): Mat2Like | null;
  /**
   * Calculates the adjugate of a {@link Mat2}
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the source matrix
   * @returns `out`
   */
  static adjoint(out: Mat2Like, a: Mat2Like): Mat2Like;
  /**
   * Calculates the determinant of a {@link Mat2}
   * @category Static
   *
   * @param a - the source matrix
   * @returns determinant of a
   */
  static determinant(a: Readonly<Mat2Like>): number;
  /**
   * Adds two {@link Mat2}'s
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static add(out: Mat2Like, a: Readonly<Mat2Like>, b: Readonly<Mat2Like>): Mat2Like;
  /**
   * Subtracts matrix b from matrix a
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static subtract(out: Mat2Like, a: Readonly<Mat2Like>, b: Readonly<Mat2Like>): Mat2Like;
  /**
   * Alias for {@link Mat2.subtract}
   * @category Static
   */
  static sub(out: Mat2Like, a: Readonly<Mat2Like>, b: Readonly<Mat2Like>): Mat2Like;
  /**
   * Multiplies two {@link Mat2}s
   * @category Static
   *
   * @param out - The receiving Matrix
   * @param a - The first operand
   * @param b - The second operand
   * @returns `out`
   */
  static multiply(out: Mat2Like, a: Readonly<Mat2Like>, b: Readonly<Mat2Like>): Mat2Like;
  /**
   * Alias for {@link Mat2.multiply}
   * @category Static
   */
  static mul(out: Mat2Like, a: Readonly<Mat2Like>, b: Readonly<Mat2Like>): Mat2Like;
  /**
   * Rotates a {@link Mat2} by the given angle
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the matrix to rotate
   * @param rad - the angle to rotate the matrix by
   * @returns `out`
   */
  static rotate(out: Mat2Like, a: Readonly<Mat2Like>, rad: number): Mat2Like;
  /**
   * Scales the {@link Mat2} by the dimensions in the given {@link Vec2}
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the matrix to scale
   * @param v - the {@link Vec2} to scale the matrix by
   * @returns `out`
   **/
  static scale(out: Mat2Like, a: Readonly<Mat2Like>, v: Readonly<Vec2Like>): Mat2Like;
  /**
   * Creates a {@link Mat2} from a given angle around a given axis
   * This is equivalent to (but much faster than):
   * ```js
   *   mat2.identity(dest);
   *   mat2.rotate(dest, dest, rad);
   * ```
   * @category Static
   *
   * @param out - {@link Mat2} receiving operation result
   * @param rad - the angle to rotate the matrix by
   * @returns `out`
   */
  static fromRotation(out: Mat2Like, rad: number): Mat2Like;
  /**
   * Creates a {@link Mat2} from a vector scaling
   * This is equivalent to (but much faster than):
   * ```js
   *   mat2.identity(dest);
   *   mat2.scale(dest, dest, vec);
   * ```
   * @category Static
   *
   * @param out - {@link Mat2} receiving operation result
   * @param v - Scaling vector
   * @returns `out`
   */
  static fromScaling(out: Mat2Like, v: Readonly<Vec2Like>): Mat2Like;
  /**
   * Returns Frobenius norm of a {@link Mat2}
   * @category Static
   *
   * @param a - the matrix to calculate Frobenius norm of
   * @returns Frobenius norm
   */
  static frob(a: Readonly<Mat2Like>): number;
  /**
   * Multiply each element of a {@link Mat2} by a scalar.
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the matrix to scale
   * @param b - amount to scale the matrix's elements by
   * @returns `out`
   */
  static multiplyScalar(out: Mat2Like, a: Readonly<Mat2Like>, b: number): Mat2Like;
  /**
   * Adds two {@link Mat2}'s after multiplying each element of the second operand by a scalar value.
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @param scale - the amount to scale b's elements by before adding
   * @returns `out`
   */
  static multiplyScalarAndAdd(out: Mat2Like, a: Readonly<Mat2Like>, b: Readonly<Mat2Like>, scale: number): Mat2Like;
  /**
   * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
   * @category Static
   *
   * @param L - the lower triangular matrix
   * @param D - the diagonal matrix
   * @param U - the upper triangular matrix
   * @param a - the input matrix to factorize
   */
  static LDU(
    L: Mat2Like,
    D: Readonly<Mat2Like>,
    U: Mat2Like,
    a: Readonly<Mat2Like>,
  ): [Mat2Like, Readonly<Mat2Like>, Mat2Like];
  /**
   * Returns whether two {@link Mat2}s have exactly the same elements in the same position (when compared with ===)
   * @category Static
   *
   * @param a - The first matrix.
   * @param b - The second matrix.
   * @returns True if the matrices are equal, false otherwise.
   */
  static exactEquals(a: Readonly<Mat2Like>, b: Readonly<Mat2Like>): boolean;
  /**
   * Returns whether two {@link Mat2}s have approximately the same elements in the same position.
   * @category Static
   *
   * @param a - The first matrix.
   * @param b - The second matrix.
   * @returns True if the matrices are equal, false otherwise.
   */
  static equals(a: Readonly<Mat2Like>, b: Readonly<Mat2Like>): boolean;
  /**
   * Returns a string representation of a {@link Mat2}
   * @category Static
   *
   * @param a - matrix to represent as a string
   * @returns string representation of the matrix
   */
  static str(a: Readonly<Mat2Like>): string;
}

/**
 * A 2x3 Matrix
 */
declare class Mat2d extends Float64Array {
  #private;
  /**
   * Create a {@link Mat2}.
   *
   * @category Constructor
   */
  constructor(...values: [Readonly<Mat2dLike> | ArrayBufferLike, number?] | number[]);
  /**
   * A string representation of `this`
   * Equivalent to `Mat2d.str(this);`
   *
   * @category Accessors
   */
  get str(): string;
  /**
   * Copy the values from another {@link Mat2d} into `this`.
   * @category Methods
   *
   * @param a the source vector
   * @returns `this`
   */
  copy(a: Readonly<Mat2dLike>): this;
  /**
   * Set `this` to the identity matrix
   * Equivalent to Mat2d.identity(this)
   * @category Methods
   *
   * @returns `this`
   */
  identity(): this;
  /**
   * Multiplies this {@link Mat2d} against another one
   * Equivalent to `Mat2d.multiply(this, this, b);`
   * @category Methods
   *
   * @param out - The receiving Matrix
   * @param a - The first operand
   * @param b - The second operand
   * @returns `this`
   */
  multiply(b: Readonly<Mat2dLike>): this;
  /**
   * Alias for {@link Mat2d.multiply}
   * @category Methods
   */
  mul(b: Readonly<Mat2dLike>): this;
  /**
   * Translate this {@link Mat2d} by the given vector
   * Equivalent to `Mat2d.translate(this, this, v);`
   * @category Methods
   *
   * @param v - The {@link Vec2} to translate by
   * @returns `this`
   */
  translate(v: Readonly<Vec2Like>): this;
  /**
   * Rotates this {@link Mat2d} by the given angle around the given axis
   * Equivalent to `Mat2d.rotate(this, this, rad);`
   * @category Methods
   *
   * @param rad - the angle to rotate the matrix by
   * @returns `this`
   */
  rotate(rad: number): this;
  /**
   * Scales this {@link Mat2d} by the dimensions in the given vec3 not using vectorization
   * Equivalent to `Mat2d.scale(this, this, v);`
   * @category Methods
   *
   * @param v - The {@link Vec2} to scale the matrix by
   * @returns `this`
   */
  scale(v: Readonly<Vec2Like>): this;
  /**
   * @category Static
   *
   * @returns The number of bytes in a {@link Mat2d}.
   */
  static get BYTE_LENGTH(): number;
  /**
   * Creates a new, identity {@link Mat2d}
   * @category Static
   *
   * @returns A new {@link Mat2d}
   */
  static create(): Mat2d;
  /**
   * Creates a new {@link Mat2d} initialized with values from an existing matrix
   * @category Static
   *
   * @param a - Matrix to clone
   * @returns A new {@link Mat2d}
   */
  static clone(a: Readonly<Mat2dLike>): Mat2d;
  /**
   * Copy the values from one {@link Mat2d} to another
   * @category Static
   *
   * @param out - The receiving Matrix
   * @param a - Matrix to copy
   * @returns `out`
   */
  static copy(out: Mat2dLike, a: Readonly<Mat2dLike>): Mat2dLike;
  /**
   * Create a new {@link Mat2d} with the given values
   * @category Static
   *
   * @param values - Matrix components
   * @returns A new {@link Mat2d}
   */
  static fromValues(...values: number[]): Mat2d;
  /**
   * Set the components of a {@link Mat2d} to the given values
   * @category Static
   *
   * @param out - The receiving matrix
   * @param values - Matrix components
   * @returns `out`
   */
  static set(out: Mat2dLike, ...values: number[]): Mat2dLike;
  /**
   * Set a {@link Mat2d} to the identity matrix
   * @category Static
   *
   * @param out - The receiving matrix
   * @returns `out`
   */
  static identity(out: Mat2dLike): Mat2dLike;
  /**
   * Inverts a {@link Mat2d}
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the source matrix
   * @returns `out` or `null` if the matrix is not invertible
   */
  static invert(out: Mat2dLike, a: Mat2dLike): Mat2dLike | null;
  /**
   * Calculates the determinant of a {@link Mat2d}
   * @category Static
   *
   * @param a - the source matrix
   * @returns determinant of a
   */
  static determinant(a: Readonly<Mat2dLike>): number;
  /**
   * Adds two {@link Mat2d}'s
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static add(out: Mat2dLike, a: Readonly<Mat2dLike>, b: Readonly<Mat2dLike>): Mat2dLike;
  /**
   * Subtracts matrix b from matrix a
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static subtract(out: Mat2dLike, a: Readonly<Mat2dLike>, b: Readonly<Mat2dLike>): Mat2dLike;
  /**
   * Alias for {@link Mat2d.subtract}
   * @category Static
   */
  static sub(out: Mat2dLike, a: Readonly<Mat2dLike>, b: Readonly<Mat2dLike>): Mat2dLike;
  /**
   * Multiplies two {@link Mat2d}s
   * @category Static
   *
   * @param out - The receiving Matrix
   * @param a - The first operand
   * @param b - The second operand
   * @returns `out`
   */
  static multiply(out: Mat2dLike, a: Readonly<Mat2dLike>, b: Readonly<Mat2dLike>): Mat2dLike;
  /**
   * Alias for {@link Mat2d.multiply}
   * @category Static
   */
  static mul(out: Mat2dLike, a: Readonly<Mat2dLike>, b: Readonly<Mat2dLike>): Mat2dLike;
  /**
   * Translate a {@link Mat2d} by the given vector
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the matrix to translate
   * @param v - vector to translate by
   * @returns `out`
   */
  static translate(out: Mat2dLike, a: Readonly<Mat2dLike>, v: Readonly<Vec2Like>): Mat2dLike;
  /**
   * Rotates a {@link Mat2d} by the given angle
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the matrix to rotate
   * @param rad - the angle to rotate the matrix by
   * @returns `out`
   */
  static rotate(out: Mat2dLike, a: Readonly<Mat2dLike>, rad: number): Mat2dLike;
  /**
   * Scales the {@link Mat2d} by the dimensions in the given {@link Vec2}
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the matrix to scale
   * @param v - the {@link Vec2} to scale the matrix by
   * @returns `out`
   **/
  static scale(out: Mat2dLike, a: Readonly<Mat2dLike>, v: Readonly<Vec2Like>): Mat2dLike;
  /**
   * Creates a {@link Mat2d} from a vector translation
   * This is equivalent to (but much faster than):
   * ```js
   *   Mat2d.identity(dest);
   *   Mat2d.translate(dest, dest, vec);
   * ```
   * @category Static
   *
   * @param out - {@link Mat2d} receiving operation result
   * @param v - Translation vector
   * @returns `out`
   */
  static fromTranslation(out: Mat2dLike, v: Readonly<Vec2Like>): Mat2dLike;
  /**
   * Creates a {@link Mat2d} from a given angle around a given axis
   * This is equivalent to (but much faster than):
   * ```js
   *   Mat2d.identity(dest);
   *   Mat2d.rotate(dest, dest, rad);
   * ```
   * @category Static
   *
   * @param out - {@link Mat2d} receiving operation result
   * @param rad - the angle to rotate the matrix by
   * @returns `out`
   */
  static fromRotation(out: Mat2dLike, rad: number): Mat2dLike;
  /**
   * Creates a {@link Mat2d} from a vector scaling
   * This is equivalent to (but much faster than):
   * ```js
   *   Mat2d.identity(dest);
   *   Mat2d.scale(dest, dest, vec);
   * ```
   * @category Static
   *
   * @param out - {@link Mat2d} receiving operation result
   * @param v - Scaling vector
   * @returns `out`
   */
  static fromScaling(out: Mat2dLike, v: Readonly<Vec2Like>): Mat2dLike;
  /**
   * Returns Frobenius norm of a {@link Mat2d}
   * @category Static
   *
   * @param a - the matrix to calculate Frobenius norm of
   * @returns Frobenius norm
   */
  static frob(a: Readonly<Mat2dLike>): number;
  /**
   * Multiply each element of a {@link Mat2d} by a scalar.
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the matrix to scale
   * @param b - amount to scale the matrix's elements by
   * @returns `out`
   */
  static multiplyScalar(out: Mat2dLike, a: Readonly<Mat2dLike>, b: number): Mat2dLike;
  /**
   * Adds two {@link Mat2d}'s after multiplying each element of the second operand by a scalar value.
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @param scale - the amount to scale b's elements by before adding
   * @returns `out`
   */
  static multiplyScalarAndAdd(out: Mat2dLike, a: Readonly<Mat2dLike>, b: Readonly<Mat2dLike>, scale: number): Mat2dLike;
  /**
   * Returns whether two {@link Mat2d}s have exactly the same elements in the same position (when compared with ===).
   * @category Static
   *
   * @param a - The first matrix.
   * @param b - The second matrix.
   * @returns True if the matrices are equal, false otherwise.
   */
  static exactEquals(a: Readonly<Mat2dLike>, b: Readonly<Mat2dLike>): boolean;
  /**
   * Returns whether two {@link Mat2d}s have approximately the same elements in the same position.
   * @category Static
   *
   * @param a - The first matrix.
   * @param b - The second matrix.
   * @returns True if the matrices are equal, false otherwise.
   */
  static equals(a: Readonly<Mat2dLike>, b: Readonly<Mat2dLike>): boolean;
  /**
   * Returns a string representation of a {@link Mat2d}
   * @category Static
   *
   * @param a - matrix to represent as a string
   * @returns string representation of the matrix
   */
  static str(a: Readonly<Mat2dLike>): string;
}

/**
 * A 3x3 Matrix
 */
declare class Mat3 extends Float64Array {
  #private;
  /**
   * Create a {@link Mat3}.
   *
   * @category Constructor
   */
  constructor(...values: [Readonly<Mat3Like> | ArrayBufferLike, number?] | number[]);
  /**
   * A string representation of `this`
   * Equivalent to `Mat3.str(this);`
   *
   * @category Accessors
   */
  get str(): string;
  /**
   * Copy the values from another {@link Mat3} into `this`.
   * @category Methods
   *
   * @param a the source vector
   * @returns `this`
   */
  copy(a: Readonly<Mat3Like>): this;
  /**
   * Set `this` to the identity matrix
   * Equivalent to Mat3.identity(this)
   * @category Methods
   *
   * @returns `this`
   */
  identity(): this;
  /**
   * Multiplies this {@link Mat3} against another one
   * Equivalent to `Mat3.multiply(this, this, b);`
   * @category Methods
   *
   * @param out - The receiving Matrix
   * @param a - The first operand
   * @param b - The second operand
   * @returns `this`
   */
  multiply(b: Readonly<Mat3Like>): this;
  /**
   * Alias for {@link Mat3.multiply}
   * @category Methods
   */
  mul(b: Readonly<Mat3Like>): this;
  /**
   * Transpose this {@link Mat3}
   * Equivalent to `Mat3.transpose(this, this);`
   * @category Methods
   *
   * @returns `this`
   */
  transpose(): this;
  /**
   * Inverts this {@link Mat3}
   * Equivalent to `Mat4.invert(this, this);`
   * @category Methods
   *
   * @returns `this`
   */
  invert(): this;
  /**
   * Translate this {@link Mat3} by the given vector
   * Equivalent to `Mat3.translate(this, this, v);`
   * @category Methods
   *
   * @param v - The {@link Vec2} to translate by
   * @returns `this`
   */
  translate(v: Readonly<Vec2Like>): this;
  /**
   * Rotates this {@link Mat3} by the given angle around the given axis
   * Equivalent to `Mat3.rotate(this, this, rad);`
   * @category Methods
   *
   * @param rad - the angle to rotate the matrix by
   * @returns `this`
   */
  rotate(rad: number): this;
  /**
   * Scales this {@link Mat3} by the dimensions in the given vec3 not using vectorization
   * Equivalent to `Mat3.scale(this, this, v);`
   * @category Methods
   *
   * @param v - The {@link Vec2} to scale the matrix by
   * @returns `this`
   */
  scale(v: Readonly<Vec2Like>): this;
  /**
   * @category Static
   *
   * @returns The number of bytes in a {@link Mat3}.
   */
  static get BYTE_LENGTH(): number;
  /**
   * Creates a new, identity {@link Mat3}
   * @category Static
   *
   * @returns A new {@link Mat3}
   */
  static create(): Mat3;
  /**
   * Creates a new {@link Mat3} initialized with values from an existing matrix
   * @category Static
   *
   * @param a - Matrix to clone
   * @returns A new {@link Mat3}
   */
  static clone(a: Readonly<Mat3Like>): Mat3;
  /**
   * Copy the values from one {@link Mat3} to another
   * @category Static
   *
   * @param out - The receiving Matrix
   * @param a - Matrix to copy
   * @returns `out`
   */
  static copy(out: Mat3Like, a: Readonly<Mat3Like>): Mat3Like;
  /**
   * Create a new {@link Mat3} with the given values
   * @category Static
   *
   * @param values - Matrix components
   * @returns A new {@link Mat3}
   */
  static fromValues(...values: number[]): Mat3;
  /**
   * Set the components of a {@link Mat3} to the given values
   * @category Static
   *
   * @param out - The receiving matrix
   * @param values - Matrix components
   * @returns `out`
   */
  static set(out: Mat3Like, ...values: number[]): Mat3Like;
  /**
   * Set a {@link Mat3} to the identity matrix
   * @category Static
   *
   * @param out - The receiving matrix
   * @returns `out`
   */
  static identity(out: Mat3Like): Mat3Like;
  /**
   * Transpose the values of a {@link Mat3}
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the source matrix
   * @returns `out`
   */
  static transpose(out: Mat3Like, a: Readonly<Mat3Like>): Mat3Like;
  /**
   * Inverts a {@link Mat3}
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the source matrix
   * @returns `out` or `null` if the matrix is not invertible
   */
  static invert(out: Mat3Like, a: Mat3Like): Mat3Like | null;
  /**
   * Calculates the adjugate of a {@link Mat3}
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the source matrix
   * @returns `out`
   */
  static adjoint(out: Mat3Like, a: Mat3Like): Mat3Like;
  /**
   * Calculates the determinant of a {@link Mat3}
   * @category Static
   *
   * @param a - the source matrix
   * @returns determinant of a
   */
  static determinant(a: Readonly<Mat3Like>): number;
  /**
   * Adds two {@link Mat3}'s
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static add(out: Mat3Like, a: Readonly<Mat3Like>, b: Readonly<Mat3Like>): Mat3Like;
  /**
   * Subtracts matrix b from matrix a
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static subtract(out: Mat3Like, a: Readonly<Mat3Like>, b: Readonly<Mat3Like>): Mat3Like;
  /**
   * Alias for {@link Mat3.subtract}
   * @category Static
   */
  static sub(out: Mat3Like, a: Readonly<Mat3Like>, b: Readonly<Mat3Like>): Mat3Like;
  /**
   * Multiplies two {@link Mat3}s
   * @category Static
   *
   * @param out - The receiving Matrix
   * @param a - The first operand
   * @param b - The second operand
   * @returns `out`
   */
  static multiply(out: Mat3Like, a: Readonly<Mat3Like>, b: Readonly<Mat3Like>): Mat3Like;
  /**
   * Alias for {@link Mat3.multiply}
   * @category Static
   */
  static mul(out: Mat3Like, a: Readonly<Mat3Like>, b: Readonly<Mat3Like>): Mat3Like;
  /**
   * Translate a {@link Mat3} by the given vector
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the matrix to translate
   * @param v - vector to translate by
   * @returns `out`
   */
  static translate(out: Mat3Like, a: Readonly<Mat3Like>, v: Readonly<Vec2Like>): Mat3Like;
  /**
   * Rotates a {@link Mat3} by the given angle
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the matrix to rotate
   * @param rad - the angle to rotate the matrix by
   * @returns `out`
   */
  static rotate(out: Mat3Like, a: Readonly<Mat3Like>, rad: number): Mat3Like;
  /**
   * Scales the {@link Mat3} by the dimensions in the given {@link Vec2}
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the matrix to scale
   * @param v - the {@link Vec2} to scale the matrix by
   * @returns `out`
   **/
  static scale(out: Mat3Like, a: Readonly<Mat3Like>, v: Readonly<Vec2Like>): Mat3Like;
  /**
   * Creates a {@link Mat3} from a vector translation
   * This is equivalent to (but much faster than):
   * ```js
   *   mat3.identity(dest);
   *   mat3.translate(dest, dest, vec);
   * ```
   * @category Static
   *
   * @param out - {@link Mat3} receiving operation result
   * @param v - Translation vector
   * @returns `out`
   */
  static fromTranslation(out: Mat3Like, v: Readonly<Vec2Like>): Mat3Like;
  /**
   * Creates a {@link Mat3} from a given angle around a given axis
   * This is equivalent to (but much faster than):
   *
   *     mat3.identity(dest);
   *     mat3.rotate(dest, dest, rad);
   * @category Static
   *
   * @param out - {@link Mat3} receiving operation result
   * @param rad - the angle to rotate the matrix by
   * @returns `out`
   */
  static fromRotation(out: Mat3Like, rad: number): Mat3Like;
  /**
   * Creates a {@link Mat3} from a vector scaling
   * This is equivalent to (but much faster than):
   * ```js
   *   mat3.identity(dest);
   *   mat3.scale(dest, dest, vec);
   * ```
   * @category Static
   *
   * @param out - {@link Mat3} receiving operation result
   * @param v - Scaling vector
   * @returns `out`
   */
  static fromScaling(out: Mat3Like, v: Readonly<Vec2Like>): Mat3Like;
  /**
   * Copies the upper-left 3x3 values of a {@link Mat2d} into the given
   * {@link Mat3}.
   * @category Static
   *
   * @param out - the receiving 3x3 matrix
   * @param a - the source 2x3 matrix
   * @returns `out`
   */
  static fromMat2d(out: Mat3Like, a: Readonly<Mat2dLike>): Mat3Like;
  /**
   * Calculates a {@link Mat3} from the given quaternion
   * @category Static
   *
   * @param out - {@link Mat3} receiving operation result
   * @param q - {@link Quat} to create matrix from
   * @returns `out`
   */
  static fromQuat(out: Mat3Like, q: Readonly<QuatLike>): Mat3Like;
  /**
   * Copies the upper-left 3x3 values of a {@link Mat4} into the given
   * {@link Mat3}.
   * @category Static
   *
   * @param out - the receiving 3x3 matrix
   * @param a - the source 4x4 matrix
   * @returns `out`
   */
  static fromMat4(out: Mat3Like, a: Readonly<Mat4Like>): Mat3Like;
  /**
   * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
   * @category Static
   *
   * @param {mat3} out mat3 receiving operation result
   * @param {ReadonlyMat4} a Mat4 to derive the normal matrix from
   * @returns `out` or `null` if the matrix is not invertible
   */
  static normalFromMat4(out: Mat3Like, a: Readonly<Mat4Like>): Mat3Like | null;
  /**
   * Calculates a {@link Mat3} normal matrix (transpose inverse) from a {@link Mat4}
   * This version omits the calculation of the constant factor (1/determinant), so
   * any normals transformed with it will need to be renormalized.
   * From https://stackoverflow.com/a/27616419/25968
   * @category Static
   *
   * @param out - Matrix receiving operation result
   * @param a - Mat4 to derive the normal matrix from
   * @returns `out`
   */
  static normalFromMat4Fast(out: Mat3Like, a: Readonly<Mat4Like>): Mat3Like;
  /**
   * Generates a 2D projection matrix with the given bounds
   * @category Static
   *
   * @param out mat3 frustum matrix will be written into
   * @param width Width of your gl context
   * @param height Height of gl context
   * @returns `out`
   */
  static projection(out: Mat3Like, width: number, height: number): Mat3Like;
  /**
   * Returns Frobenius norm of a {@link Mat3}
   * @category Static
   *
   * @param a - the matrix to calculate Frobenius norm of
   * @returns Frobenius norm
   */
  static frob(a: Readonly<Mat3Like>): number;
  /**
   * Multiply each element of a {@link Mat3} by a scalar.
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the matrix to scale
   * @param b - amount to scale the matrix's elements by
   * @returns `out`
   */
  static multiplyScalar(out: Mat3Like, a: Readonly<Mat3Like>, b: number): Mat3Like;
  /**
   * Adds two {@link Mat3}'s after multiplying each element of the second operand by a scalar value.
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @param scale - the amount to scale b's elements by before adding
   * @returns `out`
   */
  static multiplyScalarAndAdd(out: Mat3Like, a: Readonly<Mat3Like>, b: Readonly<Mat3Like>, scale: number): Mat3Like;
  /**
   * Returns whether two {@link Mat3}s have exactly the same elements in the same position (when compared with ===).
   * @category Static
   *
   * @param a - The first matrix.
   * @param b - The second matrix.
   * @returns True if the matrices are equal, false otherwise.
   */
  static exactEquals(a: Readonly<Mat3Like>, b: Readonly<Mat3Like>): boolean;
  /**
   * Returns whether two {@link Mat3}s have approximately the same elements in the same position.
   * @category Static
   *
   * @param a - The first matrix.
   * @param b - The second matrix.
   * @returns True if the matrices are equal, false otherwise.
   */
  static equals(a: Readonly<Mat3Like>, b: Readonly<Mat3Like>): boolean;
  /**
   * Returns a string representation of a {@link Mat3}
   * @category Static
   *
   * @param a - matrix to represent as a string
   * @returns string representation of the matrix
   */
  static str(a: Readonly<Mat3Like>): string;
}

/**
 * A 4x4 Matrix
 */
declare class Mat4 extends Float64Array {
  #private;
  /**
   * Create a {@link Mat4}.
   *
   * @category Constructor
   */
  constructor(...values: [Readonly<Mat4Like> | ArrayBufferLike, number?] | number[]);
  /**
   * A string representation of `this`
   * Equivalent to `Mat4.str(this);`
   *
   * @category Accessors
   */
  get str(): string;
  /**
   * Copy the values from another {@link Mat4} into `this`.
   * @category Methods
   *
   * @param a the source vector
   * @returns `this`
   */
  copy(a: Readonly<Mat4Like>): this;
  /**
   * Set `this` to the identity matrix
   * Equivalent to Mat4.identity(this)
   * @category Methods
   *
   * @returns `this`
   */
  identity(): this;
  /**
   * Multiplies this {@link Mat4} against another one
   * Equivalent to `Mat4.multiply(this, this, b);`
   * @category Methods
   *
   * @param b - The second operand
   * @returns `this`
   */
  multiply(b: Readonly<Mat4Like>): this;
  /**
   * Alias for {@link Mat4.multiply}
   * @category Methods
   */
  mul(b: Readonly<Mat4Like>): this;
  /**
   * Transpose this {@link Mat4}
   * Equivalent to `Mat4.transpose(this, this);`
   * @category Methods
   *
   * @returns `this`
   */
  transpose(): this;
  /**
   * Inverts this {@link Mat4}
   * Equivalent to `Mat4.invert(this, this);`
   * @category Methods
   *
   * @returns `this`
   */
  invert(): this;
  /**
   * Translate this {@link Mat4} by the given vector
   * Equivalent to `Mat4.translate(this, this, v);`
   * @category Methods
   *
   * @param v - The {@link Vec3} to translate by
   * @returns `this`
   */
  translate(v: Readonly<Vec3Like>): this;
  /**
   * Rotates this {@link Mat4} by the given angle around the given axis
   * Equivalent to `Mat4.rotate(this, this, rad, axis);`
   * @category Methods
   *
   * @param rad - the angle to rotate the matrix by
   * @param axis - the axis to rotate around
   * @returns `this`
   */
  rotate(rad: number, axis: Readonly<Vec3Like>): this;
  /**
   * Scales this {@link Mat4} by the dimensions in the given vec3 not using vectorization
   * Equivalent to `Mat4.scale(this, this, v);`
   * @category Methods
   *
   * @param v - The {@link Vec3} to scale the matrix by
   * @returns `this`
   */
  scale(v: Readonly<Vec3Like>): this;
  /**
   * Rotates this {@link Mat4} by the given angle around the X axis
   * Equivalent to `Mat4.rotateX(this, this, rad);`
   * @category Methods
   *
   * @param rad - the angle to rotate the matrix by
   * @returns `this`
   */
  rotateX(rad: number): this;
  /**
   * Rotates this {@link Mat4} by the given angle around the Y axis
   * Equivalent to `Mat4.rotateY(this, this, rad);`
   * @category Methods
   *
   * @param rad - the angle to rotate the matrix by
   * @returns `this`
   */
  rotateY(rad: number): this;
  /**
   * Rotates this {@link Mat4} by the given angle around the Z axis
   * Equivalent to `Mat4.rotateZ(this, this, rad);`
   * @category Methods
   *
   * @param rad - the angle to rotate the matrix by
   * @returns `this`
   */
  rotateZ(rad: number): this;
  /**
   * Generates a perspective projection matrix with the given bounds.
   * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
   * which matches WebGL/OpenGL's clip volume.
   * Passing null/undefined/no value for far will generate infinite projection matrix.
   * Equivalent to `Mat4.perspectiveNO(this, fovy, aspect, near, far);`
   * @category Methods
   *
   * @param fovy - Vertical field of view in radians
   * @param aspect - Aspect ratio. typically viewport width/height
   * @param near - Near bound of the frustum
   * @param far - Far bound of the frustum, can be null or Infinity
   * @returns `this`
   */
  perspectiveNO(fovy: number, aspect: number, near: number, far: number): this;
  /**
   * Generates a perspective projection matrix suitable for WebGPU with the given bounds.
   * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
   * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
   * Passing null/undefined/no value for far will generate infinite projection matrix.
   * Equivalent to `Mat4.perspectiveZO(this, fovy, aspect, near, far);`
   * @category Methods
   *
   * @param fovy - Vertical field of view in radians
   * @param aspect - Aspect ratio. typically viewport width/height
   * @param near - Near bound of the frustum
   * @param far - Far bound of the frustum, can be null or Infinity
   * @returns `this`
   */
  perspectiveZO(fovy: number, aspect: number, near: number, far: number): this;
  /**
   * Generates a orthogonal projection matrix with the given bounds.
   * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
   * which matches WebGL/OpenGL's clip volume.
   * Equivalent to `Mat4.orthoNO(this, left, right, bottom, top, near, far);`
   * @category Methods
   *
   * @param left - Left bound of the frustum
   * @param right - Right bound of the frustum
   * @param bottom - Bottom bound of the frustum
   * @param top - Top bound of the frustum
   * @param near - Near bound of the frustum
   * @param far - Far bound of the frustum
   * @returns `this`
   */
  orthoNO(left: number, right: number, bottom: number, top: number, near: number, far: number): this;
  /**
   * Generates a orthogonal projection matrix with the given bounds.
   * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
   * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
   * Equivalent to `Mat4.orthoZO(this, left, right, bottom, top, near, far);`
   * @category Methods
   *
   * @param left - Left bound of the frustum
   * @param right - Right bound of the frustum
   * @param bottom - Bottom bound of the frustum
   * @param top - Top bound of the frustum
   * @param near - Near bound of the frustum
   * @param far - Far bound of the frustum
   * @returns `this`
   */
  orthoZO(left: number, right: number, bottom: number, top: number, near: number, far: number): this;
  /**
   * @category Static
   *
   * @returns The number of bytes in a {@link Mat4}.
   */
  static get BYTE_LENGTH(): number;
  /**
   * Creates a new, identity {@link Mat4}
   * @category Static
   *
   * @returns A new {@link Mat4}
   */
  static create(): Mat4;
  /**
   * Creates a new {@link Mat4} initialized with values from an existing matrix
   * @category Static
   *
   * @param a - Matrix to clone
   * @returns A new {@link Mat4}
   */
  static clone(a: Readonly<Mat4Like>): Mat4;
  /**
   * Copy the values from one {@link Mat4} to another
   * @category Static
   *
   * @param out - The receiving Matrix
   * @param a - Matrix to copy
   * @returns `out`
   */
  static copy(out: Mat4Like, a: Readonly<Mat4Like>): Mat4Like;
  /**
   * Create a new mat4 with the given values
   * @category Static
   *
   * @param values - Matrix components
   * @returns A new {@link Mat4}
   */
  static fromValues(...values: number[]): Mat4;
  /**
   * Set the components of a mat4 to the given values
   * @category Static
   *
   * @param out - The receiving matrix
   * @param values - Matrix components
   * @returns `out`
   */
  static set(out: Mat4Like, ...values: number[]): Mat4Like;
  /**
   * Set a {@link Mat4} to the identity matrix
   * @category Static
   *
   * @param out - The receiving Matrix
   * @returns `out`
   */
  static identity(out: Mat4Like): Mat4Like;
  /**
   * Transpose the values of a {@link Mat4}
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the source matrix
   * @returns `out`
   */
  static transpose(out: Mat4Like, a: Readonly<Mat4Like>): Mat4Like;
  /**
   * Inverts a {@link Mat4}
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the source matrix
   * @returns `out` or `null` if the matrix is not invertible
   */
  static invert(out: Mat4Like, a: Mat4Like): Mat4Like | null;
  /**
   * Calculates the adjugate of a {@link Mat4}
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the source matrix
   * @returns `out`
   */
  static adjoint(out: Mat4Like, a: Mat4Like): Mat4Like;
  /**
   * Calculates the determinant of a {@link Mat4}
   * @category Static
   *
   * @param a - the source matrix
   * @returns determinant of a
   */
  static determinant(a: Readonly<Mat4Like>): number;
  /**
   * Multiplies two {@link Mat4}s
   * @category Static
   *
   * @param out - The receiving Matrix
   * @param a - The first operand
   * @param b - The second operand
   * @returns `out`
   */
  static multiply(out: Mat4Like, a: Readonly<Mat4Like>, b: Readonly<Mat4Like>): Mat4Like;
  /**
   * Alias for {@link Mat4.multiply}
   * @category Static
   */
  static mul(out: Mat4Like, a: Readonly<Mat4Like>, b: Readonly<Mat4Like>): Mat4Like;
  /**
   * Translate a {@link Mat4} by the given vector
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the matrix to translate
   * @param v - vector to translate by
   * @returns `out`
   */
  static translate(out: Mat4Like, a: Readonly<Mat4Like>, v: Readonly<Vec3Like>): Mat4Like;
  /**
   * Scales the {@link Mat4} by the dimensions in the given {@link Vec3} not using vectorization
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the matrix to scale
   * @param v - the {@link Vec3} to scale the matrix by
   * @returns `out`
   **/
  static scale(out: Mat4Like, a: Readonly<Mat4Like>, v: Readonly<Vec3Like>): Mat4Like;
  /**
   * Rotates a {@link Mat4} by the given angle around the given axis
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the matrix to rotate
   * @param rad - the angle to rotate the matrix by
   * @param axis - the axis to rotate around
   * @returns `out` or `null` if axis has a length of 0
   */
  static rotate(out: Mat4Like, a: Readonly<Mat4Like>, rad: number, axis: Readonly<Vec3Like>): Mat4Like | null;
  /**
   * Rotates a matrix by the given angle around the X axis
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the matrix to rotate
   * @param rad - the angle to rotate the matrix by
   * @returns `out`
   */
  static rotateX(out: Mat4Like, a: Readonly<Mat4Like>, rad: number): Mat4Like;
  /**
   * Rotates a matrix by the given angle around the Y axis
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the matrix to rotate
   * @param rad - the angle to rotate the matrix by
   * @returns `out`
   */
  static rotateY(out: Mat4Like, a: Readonly<Mat4Like>, rad: number): Mat4Like;
  /**
   * Rotates a matrix by the given angle around the Z axis
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the matrix to rotate
   * @param rad - the angle to rotate the matrix by
   * @returns `out`
   */
  static rotateZ(out: Mat4Like, a: Readonly<Mat4Like>, rad: number): Mat4Like;
  /**
   * Creates a {@link Mat4} from a vector translation
   * This is equivalent to (but much faster than):
   * ```js
   *   mat4.identity(dest);
   *   mat4.translate(dest, dest, vec);
   * ```
   * @category Static
   *
   * @param out - {@link Mat4} receiving operation result
   * @param v - Translation vector
   * @returns `out`
   */
  static fromTranslation(out: Mat4Like, v: Readonly<Vec3Like>): Mat4Like;
  /**
   * Creates a {@link Mat4} from a vector scaling
   * This is equivalent to (but much faster than):
   * ```js
   *   mat4.identity(dest);
   *   mat4.scale(dest, dest, vec);
   * ```
   * @category Static
   *
   * @param out - {@link Mat4} receiving operation result
   * @param v - Scaling vector
   * @returns `out`
   */
  static fromScaling(out: Mat4Like, v: Readonly<Vec3Like>): Mat4Like;
  /**
   * Creates a {@link Mat4} from a given angle around a given axis
   * This is equivalent to (but much faster than):
   * ```js
   *   mat4.identity(dest);
   *   mat4.rotate(dest, dest, rad, axis);
   * ```
   * @category Static
   *
   * @param out - {@link Mat4} receiving operation result
   * @param rad - the angle to rotate the matrix by
   * @param axis - the axis to rotate around
   * @returns `out` or `null` if `axis` has a length of 0
   */
  static fromRotation(out: Mat4Like, rad: number, axis: Readonly<Vec3Like>): Mat4Like | null;
  /**
   * Creates a matrix from the given angle around the X axis
   * This is equivalent to (but much faster than):
   * ```js
   *   mat4.identity(dest);
   *   mat4.rotateX(dest, dest, rad);
   * ```
   * @category Static
   *
   * @param out - mat4 receiving operation result
   * @param rad - the angle to rotate the matrix by
   * @returns `out`
   */
  static fromXRotation(out: Mat4Like, rad: number): Mat4Like;
  /**
   * Creates a matrix from the given angle around the Y axis
   * This is equivalent to (but much faster than):
   * ```js
   *   mat4.identity(dest);
   *   mat4.rotateY(dest, dest, rad);
   * ```
   * @category Static
   *
   * @param out - mat4 receiving operation result
   * @param rad - the angle to rotate the matrix by
   * @returns `out`
   */
  static fromYRotation(out: Mat4Like, rad: number): Mat4Like;
  /**
   * Creates a matrix from the given angle around the Z axis
   * This is equivalent to (but much faster than):
   * ```js
   *   mat4.identity(dest);
   *   mat4.rotateZ(dest, dest, rad);
   * ```
   * @category Static
   *
   * @param out - mat4 receiving operation result
   * @param rad - the angle to rotate the matrix by
   * @returns `out`
   */
  static fromZRotation(out: Mat4Like, rad: number): Mat4Like;
  /**
   * Creates a matrix from a quaternion rotation and vector translation
   * This is equivalent to (but much faster than):
   * ```js
   *   mat4.identity(dest);
   *   mat4.translate(dest, vec);
   *   let quatMat = mat4.create();
   *   quat4.toMat4(quat, quatMat);
   *   mat4.multiply(dest, quatMat);
   * ```
   * @category Static
   *
   * @param out - mat4 receiving operation result
   * @param q - Rotation quaternion
   * @param v - Translation vector
   * @returns `out`
   */
  static fromRotationTranslation(out: Mat4Like, q: Readonly<QuatLike>, v: Readonly<Vec3Like>): Mat4Like;
  /**
   * Sets a {@link Mat4} from a {@link Quat2}.
   * @category Static
   *
   * @param out - Matrix
   * @param a - Dual Quaternion
   * @returns `out`
   */
  static fromQuat2(out: Mat4Like, a: Quat2Like): Mat4Like;
  /**
   * Calculates a {@link Mat4} normal matrix (transpose inverse) from a {@link Mat4}
   * @category Static
   *
   * @param out - Matrix receiving operation result
   * @param a - Mat4 to derive the normal matrix from
   * @returns `out` or `null` if the matrix is not invertible
   */
  static normalFromMat4(out: Mat4Like, a: Readonly<Mat4Like>): Mat4Like | null;
  /**
   * Calculates a {@link Mat4} normal matrix (transpose inverse) from a {@link Mat4}
   * This version omits the calculation of the constant factor (1/determinant), so
   * any normals transformed with it will need to be renormalized.
   * From https://stackoverflow.com/a/27616419/25968
   * @category Static
   *
   * @param out - Matrix receiving operation result
   * @param a - Mat4 to derive the normal matrix from
   * @returns `out`
   */
  static normalFromMat4Fast(out: Mat4Like, a: Readonly<Mat4Like>): Mat4Like;
  /**
   * Returns the translation vector component of a transformation
   * matrix. If a matrix is built with fromRotationTranslation,
   * the returned vector will be the same as the translation vector
   * originally supplied.
   * @category Static
   *
   * @param  {vec3} out Vector to receive translation component
   * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
   * @return {vec3} out
   */
  static getTranslation(out: Vec3Like, mat: Readonly<Mat4Like>): Vec3Like;
  /**
   * Returns the scaling factor component of a transformation
   * matrix. If a matrix is built with fromRotationTranslationScale
   * with a normalized Quaternion parameter, the returned vector will be
   * the same as the scaling vector
   * originally supplied.
   * @category Static
   *
   * @param  {vec3} out Vector to receive scaling factor component
   * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
   * @return {vec3} out
   */
  static getScaling(out: Vec3Like, mat: Readonly<Mat4Like>): Vec3Like;
  /**
   * Returns a quaternion representing the rotational component
   * of a transformation matrix. If a matrix is built with
   * fromRotationTranslation, the returned quaternion will be the
   * same as the quaternion originally supplied.
   * @category Static
   *
   * @param out - Quaternion to receive the rotation component
   * @param mat - Matrix to be decomposed (input)
   * @return `out`
   */
  static getRotation(out: QuatLike, mat: Readonly<Mat4Like>): QuatLike;
  /**
   * Decomposes a transformation matrix into its rotation, translation
   * and scale components. Returns only the rotation component
   * @category Static
   *
   * @param out_r - Quaternion to receive the rotation component
   * @param out_t - Vector to receive the translation vector
   * @param out_s - Vector to receive the scaling factor
   * @param mat - Matrix to be decomposed (input)
   * @returns `out_r`
   */
  static decompose(out_r: QuatLike, out_t: Vec3Like, out_s: Vec3Like, mat: Readonly<Mat4Like>): QuatLike;
  /**
   * Creates a matrix from a quaternion rotation, vector translation and vector scale
   * This is equivalent to (but much faster than):
   * ```js
   *   mat4.identity(dest);
   *   mat4.translate(dest, vec);
   *   let quatMat = mat4.create();
   *   quat4.toMat4(quat, quatMat);
   *   mat4.multiply(dest, quatMat);
   *   mat4.scale(dest, scale);
   * ```
   * @category Static
   *
   * @param out - mat4 receiving operation result
   * @param q - Rotation quaternion
   * @param v - Translation vector
   * @param s - Scaling vector
   * @returns `out`
   */
  static fromRotationTranslationScale(
    out: Mat4Like,
    q: Readonly<QuatLike>,
    v: Readonly<Vec3Like>,
    s: Readonly<Vec3Like>,
  ): Mat4Like;
  /**
   * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the
   * given origin. This is equivalent to (but much faster than):
   * ```js
   *   mat4.identity(dest);
   *   mat4.translate(dest, vec);
   *   mat4.translate(dest, origin);
   *   let quatMat = mat4.create();
   *   quat4.toMat4(quat, quatMat);
   *   mat4.multiply(dest, quatMat);
   *   mat4.scale(dest, scale)
   *   mat4.translate(dest, negativeOrigin);
   * ```
   * @category Static
   *
   * @param out - mat4 receiving operation result
   * @param q - Rotation quaternion
   * @param v - Translation vector
   * @param s - Scaling vector
   * @param o - The origin vector around which to scale and rotate
   * @returns `out`
   */
  static fromRotationTranslationScaleOrigin(
    out: Mat4Like,
    q: Readonly<QuatLike>,
    v: Readonly<Vec3Like>,
    s: Readonly<Vec3Like>,
    o: Readonly<Vec3Like>,
  ): Mat4Like;
  /**
   * Calculates a 4x4 matrix from the given quaternion
   * @category Static
   *
   * @param out - mat4 receiving operation result
   * @param q - Quaternion to create matrix from
   * @returns `out`
   */
  static fromQuat(out: Mat4Like, q: Readonly<QuatLike>): Mat4Like;
  /**
   * Generates a frustum matrix with the given bounds
   * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
   * which matches WebGL/OpenGL's clip volume.
   * Passing null/undefined/no value for far will generate infinite projection matrix.
   * @category Static
   *
   * @param out - mat4 frustum matrix will be written into
   * @param left - Left bound of the frustum
   * @param right - Right bound of the frustum
   * @param bottom - Bottom bound of the frustum
   * @param top - Top bound of the frustum
   * @param near - Near bound of the frustum
   * @param far -  Far bound of the frustum, can be null or Infinity
   * @returns `out`
   */
  static frustumNO(
    out: Mat4Like,
    left: number,
    right: number,
    bottom: number,
    top: number,
    near: number,
    far?: number,
  ): Mat4Like;
  /**
   * Alias for {@link Mat4.frustumNO}
   * @category Static
   * @deprecated Use {@link Mat4.frustumNO} or {@link Mat4.frustumZO} explicitly
   */
  static frustum(
    out: Mat4Like,
    left: number,
    right: number,
    bottom: number,
    top: number,
    near: number,
    far?: number,
  ): Mat4Like;
  /**
   * Generates a frustum matrix with the given bounds
   * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
   * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
   * Passing null/undefined/no value for far will generate infinite projection matrix.
   * @category Static
   *
   * @param out - mat4 frustum matrix will be written into
   * @param left - Left bound of the frustum
   * @param right - Right bound of the frustum
   * @param bottom - Bottom bound of the frustum
   * @param top - Top bound of the frustum
   * @param near - Near bound of the frustum
   * @param far - Far bound of the frustum, can be null or Infinity
   * @returns `out`
   */
  static frustumZO(
    out: Mat4Like,
    left: number,
    right: number,
    bottom: number,
    top: number,
    near: number,
    far?: number,
  ): Mat4Like;
  /**
   * Generates a perspective projection matrix with the given bounds.
   * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
   * which matches WebGL/OpenGL's clip volume.
   * Passing null/undefined/no value for far will generate infinite projection matrix.
   * @category Static
   *
   * @param out - mat4 frustum matrix will be written into
   * @param fovy - Vertical field of view in radians
   * @param aspect - Aspect ratio. typically viewport width/height
   * @param near - Near bound of the frustum
   * @param far - Far bound of the frustum, can be null or Infinity
   * @returns `out`
   */
  static perspectiveNO(out: Mat4Like, fovy: number, aspect: number, near: number, far?: number): Mat4Like;
  /**
   * Alias for {@link Mat4.perspectiveNO}
   * @category Static
   * @deprecated Use {@link Mat4.perspectiveNO} or {@link Mat4.perspectiveZO} explicitly
   */
  static perspective(out: Mat4Like, fovy: number, aspect: number, near: number, far?: number): Mat4Like;
  /**
   * Generates a perspective projection matrix suitable for WebGPU with the given bounds.
   * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
   * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
   * Passing null/undefined/no value for far will generate infinite projection matrix.
   * @category Static
   *
   * @param out - mat4 frustum matrix will be written into
   * @param fovy - Vertical field of view in radians
   * @param aspect - Aspect ratio. typically viewport width/height
   * @param near - Near bound of the frustum
   * @param far - Far bound of the frustum, can be null or Infinity
   * @returns `out`
   */
  static perspectiveZO(out: Mat4Like, fovy: number, aspect: number, near: number, far?: number): Mat4Like;
  /**
   * Generates a perspective projection matrix with the given field of view. This is primarily useful for generating
   * projection matrices to be used with the still experimental WebVR API.
   * @category Static
   *
   * @param out - mat4 frustum matrix will be written into
   * @param fov - Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
   * @param near - Near bound of the frustum
   * @param far - Far bound of the frustum
   * @returns `out`
   * @deprecated
   */
  static perspectiveFromFieldOfView(
    out: Mat4Like,
    fov: {
      upDegrees: number;
      downDegrees: number;
      leftDegrees: number;
      rightDegrees: number;
    },
    near: number,
    far: number,
  ): Mat4Like;
  /**
   * Generates an orthogonal projection matrix with the given bounds. The near / far clip planes correspond to a
   * normalized device coordinate Z range of [-1, 1], which matches WebGL / OpenGLs clip volume.
   * @category Static
   *
   * @param out - mat4 frustum matrix will be written into
   * @param left - Left bound of the frustum
   * @param right - Right bound of the frustum
   * @param bottom - Bottom bound of the frustum
   * @param top - Top bound of the frustum
   * @param near - Near bound of the frustum
   * @param far - Far bound of the frustum
   * @returns `out`
   */
  static orthoNO(
    out: Mat4Like,
    left: number,
    right: number,
    bottom: number,
    top: number,
    near: number,
    far: number,
  ): Mat4Like;
  /**
   * Alias for {@link Mat4.orthoNO}
   * @category Static
   * @deprecated Use {@link Mat4.orthoNO} or {@link Mat4.orthoZO} explicitly
   */
  static ortho(
    out: Mat4Like,
    left: number,
    right: number,
    bottom: number,
    top: number,
    near: number,
    far: number,
  ): Mat4Like;
  /**
   * Generates a orthogonal projection matrix with the given bounds. The near / far clip planes correspond to a
   * normalized device coordinate Z range of [0, 1], which matches WebGPU / Vulkan / DirectX / Metal's clip volume.
   * @category Static
   *
   * @param out - mat4 frustum matrix will be written into
   * @param left - Left bound of the frustum
   * @param right - Right bound of the frustum
   * @param bottom - Bottom bound of the frustum
   * @param top - Top bound of the frustum
   * @param near - Near bound of the frustum
   * @param far - Far bound of the frustum
   * @returns `out`
   */
  static orthoZO(
    out: Mat4Like,
    left: number,
    right: number,
    bottom: number,
    top: number,
    near: number,
    far: number,
  ): Mat4Like;
  /**
   * Generates a look-at matrix with the given eye position, focal point, and up axis. If you want a matrix that
   * actually makes an object look at another object, you should use targetTo instead.
   * @category Static
   *
   * @param out - mat4 frustum matrix will be written into
   * @param eye - Position of the viewer
   * @param center - Point the viewer is looking at
   * @param up - vec3 pointing up
   * @returns `out`
   */
  static lookAt(out: Mat4Like, eye: Readonly<Vec3Like>, center: Readonly<Vec3Like>, up: Readonly<Vec3Like>): Mat4Like;
  /**
   * Generates a matrix that makes something look at something else.
   * @category Static
   *
   * @param out - mat4 frustum matrix will be written into
   * @param eye - Position of the viewer
   * @param target - Point the viewer is looking at
   * @param up - vec3 pointing up
   * @returns `out`
   */
  static targetTo(out: Mat4Like, eye: Readonly<Vec3Like>, target: Readonly<Vec3Like>, up: Readonly<Vec3Like>): Mat4Like;
  /**
   * Returns Frobenius norm of a {@link Mat4}
   * @category Static
   *
   * @param a - the matrix to calculate Frobenius norm of
   * @returns Frobenius norm
   */
  static frob(a: Readonly<Mat4Like>): number;
  /**
   * Adds two {@link Mat4}'s
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static add(out: Mat4Like, a: Readonly<Mat4Like>, b: Readonly<Mat4Like>): Mat4Like;
  /**
   * Subtracts matrix b from matrix a
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static subtract(out: Mat4Like, a: Readonly<Mat4Like>, b: Readonly<Mat4Like>): Mat4Like;
  /**
   * Alias for {@link Mat4.subtract}
   * @category Static
   */
  static sub(out: Mat4Like, a: Readonly<Mat4Like>, b: Readonly<Mat4Like>): Mat4Like;
  /**
   * Multiply each element of the matrix by a scalar.
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the matrix to scale
   * @param b - amount to scale the matrix's elements by
   * @returns `out`
   */
  static multiplyScalar(out: Mat4Like, a: Readonly<Mat4Like>, b: number): Mat4Like;
  /**
   * Adds two mat4's after multiplying each element of the second operand by a scalar value.
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @param scale - the amount to scale b's elements by before adding
   * @returns `out`
   */
  static multiplyScalarAndAdd(out: Mat4Like, a: Readonly<Mat4Like>, b: Readonly<Mat4Like>, scale: number): Mat4Like;
  /**
   * Returns whether two {@link Mat4}s have exactly the same elements in the same position (when compared with ===).
   * @category Static
   *
   * @param a - The first matrix.
   * @param b - The second matrix.
   * @returns True if the matrices are equal, false otherwise.
   */
  static exactEquals(a: Readonly<Mat4Like>, b: Readonly<Mat4Like>): boolean;
  /**
   * Returns whether two {@link Mat4}s have approximately the same elements in the same position.
   * @category Static
   *
   * @param a - The first matrix.
   * @param b - The second matrix.
   * @returns True if the matrices are equal, false otherwise.
   */
  static equals(a: Readonly<Mat4Like>, b: Readonly<Mat4Like>): boolean;
  /**
   * Returns a string representation of a {@link Mat4}
   * @category Static
   *
   * @param a - matrix to represent as a string
   * @returns string representation of the matrix
   */
  static str(a: Readonly<Mat4Like>): string;
}

/**
 * Quaternion
 */
declare class Quat extends Float64Array {
  #private;
  /**
   * Create a {@link Quat}.
   *
   * @category Constructor
   */
  constructor(...values: [Readonly<QuatLike> | ArrayBufferLike, number?] | number[]);
  /**
   * The x component of the quaternion. Equivalent to `this[0];`
   * @category Quaternion Components
   */
  get x(): number;
  set x(value: number);
  /**
   * The y component of the quaternion. Equivalent to `this[1];`
   * @category Quaternion Components
   */
  get y(): number;
  set y(value: number);
  /**
   * The z component of the quaternion. Equivalent to `this[2];`
   * @category Quaternion Components
   */
  get z(): number;
  set z(value: number);
  /**
   * The w component of the quaternion. Equivalent to `this[3];`
   * @category Quaternion Components
   */
  get w(): number;
  set w(value: number);
  /**
   * The magnitude (length) of this.
   * Equivalent to `Quat.magnitude(this);`
   *
   * Magnitude is used because the `length` attribute is already defined by
   * TypedArrays to mean the number of elements in the array.
   *
   * @category Accessors
   */
  get magnitude(): number;
  /**
   * Alias for {@link Quat.magnitude}
   *
   * @category Accessors
   */
  get mag(): number;
  /**
   * A string representation of `this`
   * Equivalent to `Quat.str(this);`
   *
   * @category Accessors
   */
  get str(): string;
  /**
   * Copy the values from another {@link Quat} into `this`.
   * @category Methods
   *
   * @param a the source quaternion
   * @returns `this`
   */
  copy(a: Readonly<QuatLike>): this;
  /**
   * Set `this` to the identity quaternion
   * Equivalent to Quat.identity(this)
   * @category Methods
   *
   * @returns `this`
   */
  identity(): this;
  /**
   * Multiplies `this` by a {@link Quat}.
   * Equivalent to `Quat.multiply(this, this, b);`
   * @category Methods
   *
   * @param b - The vector to multiply `this` by
   * @returns `this`
   */
  multiply(b: Readonly<QuatLike>): this;
  /**
   * Alias for {@link Quat.multiply}
   * @category Methods
   */
  mul(b: Readonly<QuatLike>): this;
  /**
   * Rotates `this` by the given angle about the X axis
   * Equivalent to `Quat.rotateX(this, this, rad);`
   * @category Methods
   *
   * @param rad - angle (in radians) to rotate
   * @returns `this`
   */
  rotateX(rad: number): this;
  /**
   * Rotates `this` by the given angle about the Y axis
   * Equivalent to `Quat.rotateY(this, this, rad);`
   * @category Methods
   *
   * @param rad - angle (in radians) to rotate
   * @returns `this`
   */
  rotateY(rad: number): this;
  /**
   * Rotates `this` by the given angle about the Z axis
   * Equivalent to `Quat.rotateZ(this, this, rad);`
   * @category Methods
   *
   * @param rad - angle (in radians) to rotate
   * @returns `this`
   */
  rotateZ(rad: number): this;
  /**
   * Inverts `this`
   * Equivalent to `Quat.invert(this, this);`
   * @category Methods
   *
   * @returns `this`
   */
  invert(): this;
  /**
   * Scales `this` by a scalar number
   * Equivalent to `Quat.scale(this, this, scale);`
   * @category Methods
   *
   * @param scale - amount to scale the vector by
   * @returns `this`
   */
  scale(scale: number): QuatLike;
  /**
   * Calculates the dot product of `this` and another {@link Quat}
   * Equivalent to `Quat.dot(this, b);`
   * @category Methods
   *
   * @param b - the second operand
   * @returns dot product of `this` and b
   */
  dot(b: Readonly<QuatLike>): number;
  /**
   * @category Static
   *
   * @returns The number of bytes in a {@link Quat}.
   */
  static get BYTE_LENGTH(): number;
  /**
   * Creates a new identity quat
   * @category Static
   *
   * @returns a new quaternion
   */
  static create(): Quat;
  /**
   * Set a quat to the identity quaternion
   * @category Static
   *
   * @param out - the receiving quaternion
   * @returns `out`
   */
  static identity(out: QuatLike): QuatLike;
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
  static setAxisAngle(out: QuatLike, axis: Readonly<Vec3Like>, rad: number): QuatLike;
  /**
   * Gets the rotation axis and angle for a given
   *  quaternion. If a quaternion is created with
   *  setAxisAngle, this method will return the same
   *  values as provided in the original parameter list
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
  static getAxisAngle(out_axis: Vec3Like, q: Readonly<QuatLike>): number;
  /**
   * Gets the angular distance between two unit quaternions
   * @category Static
   *
   * @param  {ReadonlyQuat} a     Origin unit quaternion
   * @param  {ReadonlyQuat} b     Destination unit quaternion
   * @return {Number}     Angle, in radians, between the two quaternions
   */
  static getAngle(a: Readonly<QuatLike>, b: Readonly<QuatLike>): number;
  /**
   * Multiplies two quaternions.
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static multiply(out: QuatLike, a: Readonly<QuatLike>, b: Readonly<QuatLike>): QuatLike;
  /**
   * Rotates a quaternion by the given angle about the X axis
   * @category Static
   *
   * @param out - quat receiving operation result
   * @param a - quat to rotate
   * @param rad - angle (in radians) to rotate
   * @returns `out`
   */
  static rotateX(out: QuatLike, a: Readonly<QuatLike>, rad: number): QuatLike;
  /**
   * Rotates a quaternion by the given angle about the Y axis
   * @category Static
   *
   * @param out - quat receiving operation result
   * @param a - quat to rotate
   * @param rad - angle (in radians) to rotate
   * @returns `out`
   */
  static rotateY(out: QuatLike, a: Readonly<QuatLike>, rad: number): QuatLike;
  /**
   * Rotates a quaternion by the given angle about the Z axis
   * @category Static
   *
   * @param out - quat receiving operation result
   * @param a - quat to rotate
   * @param rad - angle (in radians) to rotate
   * @returns `out`
   */
  static rotateZ(out: QuatLike, a: Readonly<QuatLike>, rad: number): QuatLike;
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
  static calculateW(out: QuatLike, a: Readonly<QuatLike>): QuatLike;
  /**
   * Calculate the exponential of a unit quaternion.
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param a - quat to calculate the exponential of
   * @returns `out`
   */
  static exp(out: QuatLike, a: Readonly<QuatLike>): QuatLike;
  /**
   * Calculate the natural logarithm of a unit quaternion.
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param a - quat to calculate the exponential of
   * @returns `out`
   */
  static ln(out: QuatLike, a: Readonly<QuatLike>): QuatLike;
  /**
   * Calculate the scalar power of a unit quaternion.
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param a - quat to calculate the exponential of
   * @param b - amount to scale the quaternion by
   * @returns `out`
   */
  static pow(out: QuatLike, a: Readonly<QuatLike>, b: number): QuatLike;
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
  static slerp(out: QuatLike, a: Readonly<QuatLike>, b: Readonly<QuatLike>, t: number): QuatLike;
  /**
   * Generates a random unit quaternion
   * @category Static
   *
   * @param out - the receiving quaternion
   * @returns `out`
   */
  /**
   * Calculates the inverse of a quat
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param a - quat to calculate inverse of
   * @returns `out`
   */
  static invert(out: QuatLike, a: Readonly<QuatLike>): QuatLike;
  /**
   * Calculates the conjugate of a quat
   * If the quaternion is normalized, this function is faster than `quat.inverse` and produces the same result.
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param a - quat to calculate conjugate of
   * @returns `out`
   */
  static conjugate(out: QuatLike, a: Readonly<QuatLike>): QuatLike;
  /**
   * Creates a quaternion from the given 3x3 rotation matrix.
   *
   * NOTE: The resultant quaternion is not normalized, so you should be sure
   * to re-normalize the quaternion yourself where necessary.
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param m - rotation matrix
   * @returns `out`
   */
  static fromMat3(out: QuatLike, m: Readonly<Mat3Like>): QuatLike;
  /**
   * Creates a quaternion from the given euler angle x, y, z.
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param x - Angle to rotate around X axis in degrees.
   * @param y - Angle to rotate around Y axis in degrees.
   * @param z - Angle to rotate around Z axis in degrees.
   * @param {'xyz'|'xzy'|'yxz'|'yzx'|'zxy'|'zyx'} order - Intrinsic order for conversion, default is zyx.
   * @returns `out`
   */
  static fromEuler(out: QuatLike, x: number, y: number, z: number, order?: string): QuatLike;
  /**
   * Returns a string representation of a quatenion
   * @category Static
   *
   * @param a - vector to represent as a string
   * @returns string representation of the vector
   */
  static str(a: Readonly<QuatLike>): string;
  /**
   * Creates a new quat initialized with values from an existing quaternion
   * @category Static
   *
   * @param a - quaternion to clone
   * @returns a new quaternion
   */
  static clone(a: Readonly<QuatLike>): Quat;
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
  static fromValues(x: number, y: number, z: number, w: number): Quat;
  /**
   * Copy the values from one quat to another
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param a - the source quaternion
   * @returns `out`
   */
  static copy(out: QuatLike, a: Readonly<QuatLike>): QuatLike;
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
  static set(out: QuatLike, x: number, y: number, z: number, w: number): QuatLike;
  /**
   * Adds two {@link Quat}'s
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static add(out: QuatLike, a: Readonly<QuatLike>, b: Readonly<QuatLike>): QuatLike;
  /**
   * Alias for {@link Quat.multiply}
   * @category Static
   */
  static mul(out: QuatLike, a: Readonly<QuatLike>, b: Readonly<QuatLike>): QuatLike;
  /**
   * Scales a quat by a scalar number
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the vector to scale
   * @param b - amount to scale the vector by
   * @returns `out`
   */
  static scale(out: QuatLike, a: Readonly<QuatLike>, scale: number): QuatLike;
  /**
   * Calculates the dot product of two quat's
   * @category Static
   *
   * @param a - the first operand
   * @param b - the second operand
   * @returns dot product of a and b
   */
  static dot(a: Readonly<QuatLike>, b: Readonly<QuatLike>): number;
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
  static lerp(out: QuatLike, a: Readonly<QuatLike>, b: Readonly<QuatLike>, t: number): QuatLike;
  /**
   * Calculates the magnitude (length) of a {@link Quat}
   * @category Static
   *
   * @param a - quaternion to calculate length of
   * @returns length of `a`
   */
  static magnitude(a: Readonly<QuatLike>): number;
  /**
   * Alias for {@link Quat.magnitude}
   * @category Static
   */
  static mag(a: Readonly<QuatLike>): number;
  /**
   * Alias for {@link Quat.magnitude}
   * @category Static
   * @deprecated Use {@link Quat.magnitude} to avoid conflicts with builtin `length` methods/attribs
   */
  static length(a: Readonly<QuatLike>): number;
  /**
   * Alias for {@link Quat.magnitude}
   * @category Static
   * @deprecated Use {@link Quat.mag}
   */
  static len(a: Readonly<QuatLike>): number;
  /**
   * Calculates the squared length of a {@link Quat}
   * @category Static
   *
   * @param a - quaternion to calculate squared length of
   * @returns squared length of a
   */
  static squaredLength(a: Readonly<QuatLike>): number;
  /**
   * Alias for {@link Quat.squaredLength}
   * @category Static
   */
  static sqrLen(a: Readonly<QuatLike>): number;
  /**
   * Normalize a {@link Quat}
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param a - quaternion to normalize
   * @returns `out`
   */
  static normalize(out: QuatLike, a: Readonly<QuatLike>): QuatLike;
  /**
   * Returns whether the quaternions have exactly the same elements in the same position (when compared with ===)
   * @category Static
   *
   * @param a - The first quaternion.
   * @param b - The second quaternion.
   * @returns True if the vectors are equal, false otherwise.
   */
  static exactEquals(a: Readonly<QuatLike>, b: Readonly<QuatLike>): boolean;
  /**
   * Returns whether the quaternions have approximately the same elements in the same position.
   * @category Static
   *
   * @param a - The first vector.
   * @param b - The second vector.
   * @returns True if the vectors are equal, false otherwise.
   */
  static equals(a: Readonly<QuatLike>, b: Readonly<QuatLike>): boolean;
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
  static rotationTo(out: QuatLike, a: Readonly<Vec3Like>, b: Readonly<Vec3Like>): QuatLike;
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
  static sqlerp(
    out: QuatLike,
    a: Readonly<QuatLike>,
    b: Readonly<QuatLike>,
    c: Readonly<QuatLike>,
    d: Readonly<QuatLike>,
    t: number,
  ): QuatLike;
  /**
   * Sets the specified quaternion with values corresponding to the given
   * axes. Each axis is a vec3 and is expected to be unit length and
   * perpendicular to all other specified axes.
   * @category Static
   *
   * @param out - The receiving quaternion
   * @param view - the vector representing the viewing direction
   * @param right - the vector representing the local `right` direction
   * @param up - the vector representing the local `up` direction
   * @returns `out`
   */
  static setAxes(out: QuatLike, view: Readonly<Vec3Like>, right: Readonly<Vec3Like>, up: Readonly<Vec3Like>): QuatLike;
}

/**
 * Dual Quaternion
 */
declare class Quat2 extends Float64Array {
  #private;
  /**
   * Create a {@link Quat2}.
   *
   * @category Constructor
   */
  constructor(...values: [Readonly<Quat2Like> | ArrayBufferLike, number?] | number[]);
  /**
   * A string representation of `this`
   * Equivalent to `Quat2.str(this);`
   *
   * @category Accessors
   */
  get str(): string;
  /**
   * Copy the values from another {@link Quat2} into `this`.
   * @category Methods
   *
   * @param a the source dual quaternion
   * @returns `this`
   */
  copy(a: Readonly<Quat2Like>): this;
  /**
   * @category Static
   *
   * @returns The number of bytes in a {@link Quat2}.
   */
  static get BYTE_LENGTH(): number;
  /**
   * Creates a new identity {@link Quat2}
   * @category Static
   *
   * @returns a new dual quaternion [real -> rotation, dual -> translation]
   */
  static create(): Quat2;
  /**
   * Creates a {@link Quat2} quat initialized with values from an existing quaternion
   * @category Static
   *
   * @param a - dual quaternion to clone
   * @returns a new dual quaternion
   */
  static clone(a: Quat2Like): Quat2;
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
  static fromValues(
    x1: number,
    y1: number,
    z1: number,
    w1: number,
    x2: number,
    y2: number,
    z2: number,
    w2: number,
  ): Quat2;
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
  static fromRotationTranslationValues(
    x1: number,
    y1: number,
    z1: number,
    w1: number,
    x2: number,
    y2: number,
    z2: number,
  ): Quat2;
  /**
   * Sets a {@link Quat2} from a quaternion and a translation
   * @category Static
   *
   * @param out - dual quaternion receiving operation result
   * @param q - a normalized quaternion
   * @param t - translation vector
   * @returns `out`
   */
  static fromRotationTranslation(out: Quat2Like, q: Readonly<QuatLike>, t: Readonly<Vec3Like>): Quat2Like;
  /**
   * Sets a {@link Quat2} from a translation
   * @category Static
   *
   * @param out - dual quaternion receiving operation result
   * @param t - translation vector
   * @returns `out`
   */
  static fromTranslation(out: Quat2Like, t: Readonly<Vec3Like>): Quat2Like;
  /**
   * Sets a {@link Quat2} from a quaternion
   * @category Static
   *
   * @param out - dual quaternion receiving operation result
   * @param q - a normalized quaternion
   * @returns `out`
   */
  static fromRotation(out: Quat2Like, q: Readonly<QuatLike>): Quat2Like;
  /**
   * Sets a {@link Quat2} from a quaternion
   * @category Static
   *
   * @param out - dual quaternion receiving operation result
   * @param a - the matrix
   * @returns `out`
   */
  static fromMat4(out: Quat2Like, a: Readonly<Mat4Like>): Quat2Like;
  /**
   * Copy the values from one {@link Quat2} to another
   * @category Static
   *
   * @param out - the receiving dual quaternion
   * @param a - the source dual quaternion
   * @returns `out`
   */
  static copy(out: Quat2Like, a: Readonly<Quat2Like>): Quat2Like;
  /**
   * Set a {@link Quat2} to the identity dual quaternion
   * @category Static
   *
   * @param out - the receiving dual quaternion
   * @returns `out`
   */
  static identity(out: QuatLike): QuatLike;
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
  static set(
    out: Quat2Like,
    x1: number,
    y1: number,
    z1: number,
    w1: number,
    x2: number,
    y2: number,
    z2: number,
    w2: number,
  ): Quat2Like;
  /**
   * Gets the real part of a dual quat
   * @category Static
   *
   * @param out - real part
   * @param a - Dual Quaternion
   * @return `out`
   */
  static getReal(out: QuatLike, a: Readonly<Quat2Like>): QuatLike;
  /**
   * Gets the dual part of a dual quat
   * @category Static
   *
   * @param out - dual part
   * @param a - Dual Quaternion
   * @return `out`
   */
  static getDual(out: QuatLike, a: Readonly<Quat2Like>): QuatLike;
  /**
   * Set the real component of a {@link Quat2} to the given quaternion
   * @category Static
   *
   * @param out - the receiving dual quaternion
   * @param a - a quaternion representing the real part
   * @return `out`
   */
  static setReal(out: Quat2Like, a: Readonly<QuatLike>): Quat2Like;
  /**
   * Set the dual component of a {@link Quat2} to the given quaternion
   * @category Static
   *
   * @param out - the receiving dual quaternion
   * @param a - a quaternion representing the dual part
   * @return `out`
   */
  static setDual(out: Quat2Like, a: Readonly<QuatLike>): Quat2Like;
  /**
   * Gets the translation of a normalized {@link Quat2}
   * @category Static
   *
   * @param out - the receiving translation vector
   * @param a - Dual Quaternion to be decomposed
   * @return `out`
   */
  static getTranslation(out: Vec3Like, a: Readonly<Quat2Like>): Vec3Like;
  /**
   * Translates a {@link Quat2} by the given vector
   * @category Static
   *
   * @param out - the receiving dual quaternion
   * @param a - the dual quaternion to translate
   * @param v - vector to translate by
   * @returns `out`
   */
  static translate(out: Quat2Like, a: Readonly<Quat2Like>, v: Readonly<Vec3Like>): Quat2Like;
  /**
   * Rotates a {@link Quat2} around the X axis
   * @category Static
   *
   * @param out - the receiving dual quaternion
   * @param a - the dual quaternion to rotate
   * @param rad - angle (in radians) to rotate
   * @returns `out`
   */
  static rotateX(out: Quat2Like, a: Readonly<Quat2Like>, rad: number): Quat2Like;
  /**
   * Rotates a {@link Quat2} around the Y axis
   * @category Static
   *
   * @param out - the receiving dual quaternion
   * @param a - the dual quaternion to rotate
   * @param rad - angle (in radians) to rotate
   * @returns `out`
   */
  static rotateY(out: Quat2Like, a: Readonly<Quat2Like>, rad: number): Quat2Like;
  /**
   * Rotates a {@link Quat2} around the Z axis
   * @category Static
   *
   * @param out - the receiving dual quaternion
   * @param a - the dual quaternion to rotate
   * @param rad - angle (in radians) to rotate
   * @returns `out`
   */
  static rotateZ(out: Quat2Like, a: Readonly<Quat2Like>, rad: number): Quat2Like;
  /**
   * Rotates a {@link Quat2} by a given quaternion (a * q)
   * @category Static
   *
   * @param out - the receiving dual quaternion
   * @param a - the dual quaternion to rotate
   * @param q - quaternion to rotate by
   * @returns `out`
   */
  static rotateByQuatAppend(out: Quat2Like, a: Readonly<Quat2Like>, q: Readonly<QuatLike>): Quat2Like;
  /**
   * Rotates a {@link Quat2} by a given quaternion (q * a)
   * @category Static
   *
   * @param out - the receiving dual quaternion
   * @param q - quaternion to rotate by
   * @param a - the dual quaternion to rotate
   * @returns `out`
   */
  static rotateByQuatPrepend(out: Quat2Like, q: Readonly<QuatLike>, a: Readonly<Quat2Like>): Quat2Like;
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
  static rotateAroundAxis(out: Quat2Like, a: Readonly<Quat2Like>, axis: Readonly<Vec3Like>, rad: number): Quat2Like;
  /**
   * Adds two {@link Quat2}s
   * @category Static
   *
   * @param out - the receiving dual quaternion
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static add(out: Quat2Like, a: Readonly<Quat2Like>, b: Readonly<Quat2Like>): Quat2Like;
  /**
   * Multiplies two {@link Quat2}s
   * @category Static
   *
   * @param out - the receiving dual quaternion
   * @param a - the first operand
   * @param b - the second operand
   * @returns {quat2} out
   */
  static multiply(out: Quat2Like, a: Readonly<Quat2Like>, b: Readonly<Quat2Like>): Quat2Like;
  /**
   * Alias for {@link Quat2.multiply}
   * @category Static
   */
  static mul(out: Quat2Like, a: Readonly<Quat2Like>, b: Readonly<Quat2Like>): Quat2Like;
  /**
   * Scales a {@link Quat2} by a scalar value
   * @category Static
   *
   * @param out - the receiving dual quaterion
   * @param a - the dual quaternion to scale
   * @param b - scalar value to scale the dual quaterion by
   * @returns `out`
   */
  static scale(out: Quat2Like, a: Readonly<Quat2Like>, b: number): Quat2Like;
  /**
   * Calculates the dot product of two {@link Quat2}s (The dot product of the real parts)
   * @category Static
   *
   * @param a - the first operand
   * @param b - the second operand
   * @returns dot product of a and b
   */
  static dot(a: Readonly<Quat2Like>, b: Readonly<Quat2Like>): number;
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
  static lerp(out: Quat2Like, a: Readonly<Quat2Like>, b: Readonly<Quat2Like>, t: number): Quat2Like;
  /**
   * Calculates the inverse of a {@link Quat2}. If they are normalized, conjugate is cheaper
   * @category Static
   *
   * @param out - the receiving dual quaternion
   * @param a - dual quat to calculate inverse of
   * @returns `out`
   */
  static invert(out: Quat2Like, a: Readonly<Quat2Like>): Quat2Like;
  /**
   * Calculates the conjugate of a {@link Quat2}. If the dual quaternion is normalized, this function is faster than
   * {@link Quat2.invert} and produces the same result.
   * @category Static
   *
   * @param out - the receiving dual quaternion
   * @param a - dual quaternion to calculate conjugate of
   * @returns `out`
   */
  static conjugate(out: Quat2Like, a: Readonly<Quat2Like>): Quat2Like;
  /**
   * Calculates the magnitude (length) of a {@link Quat2}
   * @category Static
   *
   * @param a - dual quaternion to calculate length of
   * @returns length of `a`
   */
  static magnitude(a: Readonly<Quat2Like>): number;
  /**
   * Alias for {@link Quat2.magnitude}
   * @category Static
   */
  static mag(a: Readonly<Quat2Like>): number;
  /**
   * Alias for {@link Quat2.magnitude}
   * @category Static
   * @deprecated Use {@link Quat2.magnitude} to avoid conflicts with builtin `length` methods/attribs
   */
  static length(a: Readonly<Quat2Like>): number;
  /**
   * Alias for {@link Quat2.magnitude}
   * @category Static
   * @deprecated Use {@link Quat2.mag}
   */
  static len(a: Readonly<Quat2Like>): number;
  /**
   * Calculates the squared length of a {@link Quat2}
   * @category Static
   *
   * @param a - dual quaternion to calculate squared length of
   * @returns squared length of a
   */
  static squaredLength(a: Readonly<Quat2Like>): number;
  /**
   * Alias for {@link Quat2.squaredLength}
   * @category Static
   */
  static sqrLen(a: Readonly<Quat2Like>): number;
  /**
   * Normalize a {@link Quat2}
   * @category Static
   *
   * @param out - the receiving dual quaternion
   * @param a - dual quaternion to normalize
   * @returns `out`
   */
  static normalize(out: Quat2Like, a: Readonly<Quat2Like>): Quat2Like;
  /**
   * Returns a string representation of a {@link Quat2}
   * @category Static
   *
   * @param a - dual quaternion to represent as a string
   * @returns string representation of the vector
   */
  static str(a: Readonly<Quat2Like>): string;
  /**
   * Returns whether the {@link Quat2}s have exactly the same elements in the same position (when compared with ===)
   * @category Static
   *
   * @param a - The first dual quaternion.
   * @param b - The second dual quaternion.
   * @returns True if the dual quaternions are equal, false otherwise.
   */
  static exactEquals(a: Readonly<Quat2Like>, b: Readonly<Quat2Like>): boolean;
  /**
   * Returns whether the {@link Quat2}s have approximately the same elements in the same position.
   * @category Static
   *
   * @param a - The first dual quaternion.
   * @param b - The second dual quaternion.
   * @returns True if the dual quaternions are equal, false otherwise.
   */
  static equals(a: Readonly<Quat2Like>, b: Readonly<Quat2Like>): boolean;
}

/**
 * 2 Dimensional Vector
 */
declare class Vec2 extends Float64Array {
  /**
   * Create a {@link Vec2}.
   *
   * @category Constructor
   */
  constructor(...values: [Readonly<Vec2Like> | ArrayBufferLike, number?] | number[]);
  /**
   * The x component of the vector. Equivalent to `this[0];`
   * @category Vector Components
   */
  get x(): number;
  set x(value: number);
  /**
   * The y component of the vector. Equivalent to `this[1];`
   * @category Vector Components
   */
  get y(): number;
  set y(value: number);
  /**
   * The r component of the vector. Equivalent to `this[0];`
   * @category Color Components
   */
  get r(): number;
  set r(value: number);
  /**
   * The g component of the vector. Equivalent to `this[1];`
   * @category Color Components
   */
  get g(): number;
  set g(value: number);
  /**
   * The magnitude (length) of this.
   * Equivalent to `Vec2.magnitude(this);`
   *
   * Magnitude is used because the `length` attribute is already defined by
   * TypedArrays to mean the number of elements in the array.
   *
   * @category Accessors
   */
  get magnitude(): number;
  /**
   * Alias for {@link Vec2.magnitude}
   *
   * @category Accessors
   */
  get mag(): number;
  /**
   * The squared magnitude (length) of `this`.
   * Equivalent to `Vec2.squaredMagnitude(this);`
   *
   * @category Accessors
   */
  get squaredMagnitude(): number;
  /**
   * Alias for {@link Vec2.squaredMagnitude}
   *
   * @category Accessors
   */
  get sqrMag(): number;
  /**
   * A string representation of `this`
   * Equivalent to `Vec2.str(this);`
   *
   * @category Accessors
   */
  get str(): string;
  /**
   * Copy the values from another {@link Vec2} into `this`.
   * @category Methods
   *
   * @param a the source vector
   * @returns `this`
   */
  copy(a: Readonly<Vec2Like>): this;
  /**
   * Adds a {@link Vec2} to `this`.
   * Equivalent to `Vec2.add(this, this, b);`
   * @category Methods
   *
   * @param b - The vector to add to `this`
   * @returns `this`
   */
  add(b: Readonly<Vec2Like>): this;
  /**
   * Subtracts a {@link Vec2} from `this`.
   * Equivalent to `Vec2.subtract(this, this, b);`
   * @category Methods
   *
   * @param b - The vector to subtract from `this`
   * @returns `this`
   */
  subtract(b: Readonly<Vec2Like>): this;
  /**
   * Alias for {@link Vec2.subtract}
   * @category Methods
   */
  sub(b: Readonly<Vec2Like>): this;
  /**
   * Multiplies `this` by a {@link Vec2}.
   * Equivalent to `Vec2.multiply(this, this, b);`
   * @category Methods
   *
   * @param b - The vector to multiply `this` by
   * @returns `this`
   */
  multiply(b: Readonly<Vec2Like>): this;
  /**
   * Alias for {@link Vec2.multiply}
   * @category Methods
   */
  mul(b: Readonly<Vec2Like>): this;
  /**
   * Divides `this` by a {@link Vec2}.
   * Equivalent to `Vec2.divide(this, this, b);`
   * @category Methods
   *
   * @param b - The vector to divide `this` by
   * @returns `this`
   */
  divide(b: Readonly<Vec2Like>): this;
  /**
   * Alias for {@link Vec2.divide}
   * @category Methods
   */
  div(b: Readonly<Vec2Like>): this;
  /**
   * Scales `this` by a scalar number.
   * Equivalent to `Vec2.scale(this, this, b);`
   * @category Methods
   *
   * @param b - Amount to scale `this` by
   * @returns `this`
   */
  scale(b: number): this;
  /**
   * Calculates `this` scaled by a scalar value then adds the result to `this`.
   * Equivalent to `Vec2.scaleAndAdd(this, this, b, scale);`
   * @category Methods
   *
   * @param b - The vector to add to `this`
   * @param scale - The amount to scale `b` by before adding
   * @returns `this`
   */
  scaleAndAdd(b: Readonly<Vec2Like>, scale: number): this;
  /**
   * Calculates the Euclidean distance between another {@link Vec2} and `this`.
   * Equivalent to `Vec2.distance(this, b);`
   * @category Methods
   *
   * @param b - The vector to calculate the distance to
   * @returns Distance between `this` and `b`
   */
  distance(b: Readonly<Vec2Like>): number;
  /**
   * Alias for {@link Vec2.distance}
   * @category Methods
   */
  dist(b: Readonly<Vec2Like>): number;
  /**
   * Calculates the squared Euclidean distance between another {@link Vec2} and `this`.
   * Equivalent to `Vec2.squaredDistance(this, b);`
   * @category Methods
   *
   * @param b The vector to calculate the squared distance to
   * @returns Squared distance between `this` and `b`
   */
  squaredDistance(b: Readonly<Vec2Like>): number;
  /**
   * Alias for {@link Vec2.squaredDistance}
   * @category Methods
   */
  sqrDist(b: Readonly<Vec2Like>): number;
  /**
   * Negates the components of `this`.
   * Equivalent to `Vec2.negate(this, this);`
   * @category Methods
   *
   * @returns `this`
   */
  negate(): this;
  /**
   * Inverts the components of `this`.
   * Equivalent to `Vec2.inverse(this, this);`
   * @category Methods
   *
   * @returns `this`
   */
  invert(): this;
  /**
   * Sets each component of `this` to it's absolute value.
   * Equivalent to `Vec2.abs(this, this);`
   * @category Methods
   *
   * @returns `this`
   */
  abs(): this;
  /**
   * Calculates the dot product of this and another {@link Vec2}.
   * Equivalent to `Vec2.dot(this, b);`
   * @category Methods
   *
   * @param b - The second operand
   * @returns Dot product of `this` and `b`
   */
  dot(b: Readonly<Vec2Like>): number;
  /**
   * Normalize `this`.
   * Equivalent to `Vec2.normalize(this, this);`
   * @category Methods
   *
   * @returns `this`
   */
  normalize(): this;
  /**
   * @category Static
   *
   * @returns The number of bytes in a {@link Vec2}.
   */
  static get BYTE_LENGTH(): number;
  /**
   * Creates a new, empty {@link Vec2}
   * @category Static
   *
   * @returns A new 2D vector
   */
  static create(): Vec2;
  /**
   * Creates a new {@link Vec2} initialized with values from an existing vector
   * @category Static
   *
   * @param a - Vector to clone
   * @returns A new 2D vector
   */
  static clone(a: Readonly<Vec2Like>): Vec2;
  /**
   * Creates a new {@link Vec2} initialized with the given values
   * @category Static
   *
   * @param x - X component
   * @param y - Y component
   * @returns A new 2D vector
   */
  static fromValues(x: number, y: number): Vec2;
  /**
   * Copy the values from one {@link Vec2} to another
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - The source vector
   * @returns `out`
   */
  static copy(out: Vec2Like, a: Readonly<Vec2Like>): Vec2Like;
  /**
   * Set the components of a {@link Vec2} to the given values
   * @category Static
   *
   * @param out - The receiving vector
   * @param x - X component
   * @param y - Y component
   * @returns `out`
   */
  static set(out: Vec2Like, x: number, y: number): Vec2Like;
  /**
   * Adds two {@link Vec2}s
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - The first operand
   * @param b - The second operand
   * @returns `out`
   */
  static add(out: Vec2Like, a: Readonly<Vec2Like>, b: Readonly<Vec2Like>): Vec2Like;
  /**
   * Subtracts vector b from vector a
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - The first operand
   * @param b - The second operand
   * @returns `out`
   */
  static subtract(out: Vec2Like, a: Readonly<Vec2Like>, b: Readonly<Vec2Like>): Vec2Like;
  /**
   * Alias for {@link Vec2.subtract}
   * @category Static
   */
  static sub(out: Vec2Like, a: Readonly<Vec2Like>, b: Readonly<Vec2Like>): Vec2Like;
  /**
   * Multiplies two {@link Vec2}s
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - The first operand
   * @param b - The second operand
   * @returns `out`
   */
  static multiply(out: Vec2Like, a: Readonly<Vec2Like>, b: Readonly<Vec2Like>): Vec2Like;
  /**
   * Alias for {@link Vec2.multiply}
   * @category Static
   */
  static mul(out: Vec2Like, a: Readonly<Vec2Like>, b: Readonly<Vec2Like>): Vec2Like;
  /**
   * Divides two {@link Vec2}s
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - The first operand
   * @param b - The second operand
   * @returns `out`
   */
  static divide(out: Vec2Like, a: Readonly<Vec2Like>, b: Readonly<Vec2Like>): Vec2Like;
  /**
   * Alias for {@link Vec2.divide}
   * @category Static
   */
  static div(out: Vec2Like, a: Readonly<Vec2Like>, b: Readonly<Vec2Like>): Vec2Like;
  /**
   * Math.ceil the components of a {@link Vec2}
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - Vector to ceil
   * @returns `out`
   */
  static ceil(out: Vec2Like, a: Readonly<Vec2Like>): Vec2Like;
  /**
   * Math.floor the components of a {@link Vec2}
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - Vector to floor
   * @returns `out`
   */
  static floor(out: Vec2Like, a: Readonly<Vec2Like>): Vec2Like;
  /**
   * Returns the minimum of two {@link Vec2}s
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - The first operand
   * @param b - The second operand
   * @returns `out`
   */
  static min(out: Vec2Like, a: Readonly<Vec2Like>, b: Readonly<Vec2Like>): Vec2Like;
  /**
   * Returns the maximum of two {@link Vec2}s
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - The first operand
   * @param b - The second operand
   * @returns `out`
   */
  static max(out: Vec2Like, a: Readonly<Vec2Like>, b: Readonly<Vec2Like>): Vec2Like;
  /**
   * Math.round the components of a {@link Vec2}
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - Vector to round
   * @returns `out`
   */
  static round(out: Vec2Like, a: Readonly<Vec2Like>): Vec2Like;
  /**
   * Scales a {@link Vec2} by a scalar number
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - The vector to scale
   * @param b - Amount to scale the vector by
   * @returns `out`
   */
  static scale(out: Vec2Like, a: Readonly<Vec2Like>, b: number): Vec2Like;
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
  static scaleAndAdd(out: Vec2Like, a: Readonly<Vec2Like>, b: Readonly<Vec2Like>, scale: number): Vec2Like;
  /**
   * Calculates the Euclidean distance between two {@link Vec2}s
   * @category Static
   *
   * @param a - The first operand
   * @param b - The second operand
   * @returns distance between `a` and `b`
   */
  static distance(a: Readonly<Vec2Like>, b: Readonly<Vec2Like>): number;
  /**
   * Alias for {@link Vec2.distance}
   * @category Static
   */
  static dist(a: Readonly<Vec2Like>, b: Readonly<Vec2Like>): number;
  /**
   * Calculates the squared Euclidean distance between two {@link Vec2}s
   * @category Static
   *
   * @param a - The first operand
   * @param b - The second operand
   * @returns Squared distance between `a` and `b`
   */
  static squaredDistance(a: Readonly<Vec2Like>, b: Readonly<Vec2Like>): number;
  /**
   * Alias for {@link Vec2.distance}
   * @category Static
   */
  static sqrDist(a: Readonly<Vec2Like>, b: Readonly<Vec2Like>): number;
  /**
   * Calculates the magnitude (length) of a {@link Vec2}
   * @category Static
   *
   * @param a - Vector to calculate magnitude of
   * @returns Magnitude of a
   */
  static magnitude(a: Readonly<Vec2Like>): number;
  /**
   * Alias for {@link Vec2.magnitude}
   * @category Static
   */
  static mag(a: Readonly<Vec2Like>): number;
  /**
   * Alias for {@link Vec2.magnitude}
   * @category Static
   * @deprecated Use {@link Vec2.magnitude} to avoid conflicts with builtin `length` methods/attribs
   *
   * @param a - vector to calculate length of
   * @returns length of a
   */
  static length(a: Readonly<Vec2Like>): number;
  /**
   * Alias for {@link Vec2.magnitude}
   * @category Static
   * @deprecated Use {@link Vec2.mag}
   */
  static len(a: Readonly<Vec2Like>): number;
  /**
   * Calculates the squared length of a {@link Vec2}
   * @category Static
   *
   * @param a - Vector to calculate squared length of
   * @returns Squared length of a
   */
  static squaredLength(a: Readonly<Vec2Like>): number;
  /**
   * Alias for {@link Vec2.squaredLength}
   * @category Static
   */
  static sqrLen(a: Readonly<Vec2Like>, b: Readonly<Vec2Like>): number;
  /**
   * Negates the components of a {@link Vec2}
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - Vector to negate
   * @returns `out`
   */
  static negate(out: Vec2Like, a: Readonly<Vec2Like>): Vec2Like;
  /**
   * Returns the inverse of the components of a {@link Vec2}
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - Vector to invert
   * @returns `out`
   */
  static inverse(out: Vec2Like, a: Readonly<Vec2Like>): Vec2Like;
  /**
   * Returns the absolute value of the components of a {@link Vec2}
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - Vector to compute the absolute values of
   * @returns `out`
   */
  static abs(out: Vec2Like, a: Readonly<Vec2Like>): Vec2Like;
  /**
   * Normalize a {@link Vec2}
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - Vector to normalize
   * @returns `out`
   */
  static normalize(out: Vec2Like, a: Readonly<Vec2Like>): Vec2Like;
  /**
   * Calculates the dot product of two {@link Vec2}s
   * @category Static
   *
   * @param a - The first operand
   * @param b - The second operand
   * @returns Dot product of `a` and `b`
   */
  static dot(a: Readonly<Vec2Like>, b: Readonly<Vec2Like>): number;
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
  static cross(out: Vec2Like, a: Readonly<Vec2Like>, b: Readonly<Vec2Like>): Vec2Like;
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
  static lerp(out: Vec2Like, a: Readonly<Vec2Like>, b: Readonly<Vec2Like>, t: number): Vec2Like;
  /**
   * Transforms the {@link Vec2} with a {@link Mat2}
   *
   * @param out - The receiving vector
   * @param a - The vector to transform
   * @param m - Matrix to transform with
   * @returns `out`
   * @category Static
   */
  static transformMat2(out: Vec2Like, a: Readonly<Vec2Like>, m: Readonly<Mat2Like>): Vec2Like;
  /**
   * Transforms the {@link Vec2} with a {@link Mat2d}
   *
   * @param out - The receiving vector
   * @param a - The vector to transform
   * @param m - Matrix to transform with
   * @returns `out`
   * @category Static
   */
  static transformMat2d(out: Vec2Like, a: Readonly<Vec2Like>, m: Readonly<Mat2dLike>): Vec2Like;
  /**
   * Transforms the {@link Vec2} with a {@link Mat3}
   * 3rd vector component is implicitly '1'
   *
   * @param out - The receiving vector
   * @param a - The vector to transform
   * @param m - Matrix to transform with
   * @returns `out`
   * @category Static
   */
  static transformMat3(out: Vec2Like, a: Readonly<Vec2Like>, m: Readonly<Mat3Like>): Vec2Like;
  /**
   * Transforms the {@link Vec2} with a {@link Mat4}
   * 3rd vector component is implicitly '0'
   * 4th vector component is implicitly '1'
   *
   * @param out - The receiving vector
   * @param a - The vector to transform
   * @param m - Matrix to transform with
   * @returns `out`
   * @category Static
   */
  static transformMat4(out: Vec2Like, a: Readonly<Vec2Like>, m: Readonly<Mat4Like>): Vec2Like;
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
  static rotate(out: Vec2Like, a: Readonly<Vec2Like>, b: Readonly<Vec2Like>, rad: number): Vec2Like;
  /**
   * Get the angle between two 2D vectors
   * @category Static
   *
   * @param a - The first operand
   * @param b - The second operand
   * @returns The angle in radians
   */
  static angle(a: Readonly<Vec2Like>, b: Readonly<Vec2Like>): number;
  /**
   * Set the components of a {@link Vec2} to zero
   * @category Static
   *
   * @param out - The receiving vector
   * @returns `out`
   */
  static zero(out: Vec2Like): Vec2Like;
  /**
   * Returns whether the vectors have exactly the same elements in the same position (when compared with ===)
   * @category Static
   *
   * @param a - The first vector.
   * @param b - The second vector.
   * @returns `true` if the vectors components are ===, `false` otherwise.
   */
  static exactEquals(a: Readonly<Vec2Like>, b: Readonly<Vec2Like>): boolean;
  /**
   * Returns whether the vectors have approximately the same elements in the same position.
   * @category Static
   *
   * @param a - The first vector.
   * @param b - The second vector.
   * @returns `true` if the vectors are approximately equal, `false` otherwise.
   */
  static equals(a: Readonly<Vec2Like>, b: Readonly<Vec2Like>): boolean;
  /**
   * Returns a string representation of a vector
   * @category Static
   *
   * @param a - Vector to represent as a string
   * @returns String representation of the vector
   */
  static str(a: Readonly<Vec2Like>): string;
}

/**
 * 3 Dimensional Vector
 */
declare class Vec3 extends Float64Array {
  /**
   * Create a {@link Vec3}.
   *
   * @category Constructor
   */
  constructor(...values: [Readonly<Vec3Like> | ArrayBufferLike, number?] | number[]);
  /**
   * The x component of the vector. Equivalent to `this[0];`
   * @category Vector Components
   */
  get x(): number;
  set x(value: number);
  /**
   * The y component of the vector. Equivalent to `this[1];`
   * @category Vector Components
   */
  get y(): number;
  set y(value: number);
  /**
   * The z component of the vector. Equivalent to `this[2];`
   * @category Vector Components
   */
  get z(): number;
  set z(value: number);
  /**
   * The r component of the vector. Equivalent to `this[0];`
   * @category Color Components
   */
  get r(): number;
  set r(value: number);
  /**
   * The g component of the vector. Equivalent to `this[1];`
   * @category Color Components
   */
  get g(): number;
  set g(value: number);
  /**
   * The b component of the vector. Equivalent to `this[2];`
   * @category Color Components
   */
  get b(): number;
  set b(value: number);
  /**
   * The magnitude (length) of this.
   * Equivalent to `Vec3.magnitude(this);`
   *
   * Magnitude is used because the `length` attribute is already defined by
   * TypedArrays to mean the number of elements in the array.
   *
   * @category Accessors
   */
  get magnitude(): number;
  /**
   * Alias for {@link Vec3.magnitude}
   *
   * @category Accessors
   */
  get mag(): number;
  /**
   * The squared magnitude (length) of `this`.
   * Equivalent to `Vec3.squaredMagnitude(this);`
   *
   * @category Accessors
   */
  get squaredMagnitude(): number;
  /**
   * Alias for {@link Vec3.squaredMagnitude}
   *
   * @category Accessors
   */
  get sqrMag(): number;
  /**
   * A string representation of `this`
   * Equivalent to `Vec3.str(this);`
   *
   * @category Accessors
   */
  get str(): string;
  /**
   * Copy the values from another {@link Vec3} into `this`.
   * @category Methods
   *
   * @param a the source vector
   * @returns `this`
   */
  copy(a: Readonly<Vec3Like>): this;
  /**
   * Adds a {@link Vec3} to `this`.
   * Equivalent to `Vec3.add(this, this, b);`
   * @category Methods
   *
   * @param b - The vector to add to `this`
   * @returns `this`
   */
  add(b: Readonly<Vec3Like>): this;
  /**
   * Subtracts a {@link Vec3} from `this`.
   * Equivalent to `Vec3.subtract(this, this, b);`
   * @category Methods
   *
   * @param b - The vector to subtract from `this`
   * @returns `this`
   */
  subtract(b: Readonly<Vec3Like>): this;
  /**
   * Alias for {@link Vec3.subtract}
   * @category Methods
   */
  sub(b: Readonly<Vec3Like>): this;
  /**
   * Multiplies `this` by a {@link Vec3}.
   * Equivalent to `Vec3.multiply(this, this, b);`
   * @category Methods
   *
   * @param b - The vector to multiply `this` by
   * @returns `this`
   */
  multiply(b: Readonly<Vec3Like>): this;
  /**
   * Alias for {@link Vec3.multiply}
   * @category Methods
   */
  mul(b: Readonly<Vec3Like>): this;
  /**
   * Divides `this` by a {@link Vec3}.
   * Equivalent to `Vec3.divide(this, this, b);`
   * @category Methods
   *
   * @param b - The vector to divide `this` by
   * @returns `this`
   */
  divide(b: Readonly<Vec3Like>): this;
  /**
   * Alias for {@link Vec3.divide}
   * @category Methods
   */
  div(b: Readonly<Vec3Like>): this;
  /**
   * Scales `this` by a scalar number.
   * Equivalent to `Vec3.scale(this, this, b);`
   * @category Methods
   *
   * @param b - Amount to scale `this` by
   * @returns `this`
   */
  scale(b: number): this;
  /**
   * Calculates `this` scaled by a scalar value then adds the result to `this`.
   * Equivalent to `Vec3.scaleAndAdd(this, this, b, scale);`
   * @category Methods
   *
   * @param b - The vector to add to `this`
   * @param scale - The amount to scale `b` by before adding
   * @returns `this`
   */
  scaleAndAdd(b: Readonly<Vec3Like>, scale: number): this;
  /**
   * Calculates the Euclidean distance between another {@link Vec3} and `this`.
   * Equivalent to `Vec3.distance(this, b);`
   * @category Methods
   *
   * @param b - The vector to calculate the distance to
   * @returns Distance between `this` and `b`
   */
  distance(b: Readonly<Vec3Like>): number;
  /**
   * Alias for {@link Vec3.distance}
   * @category Methods
   */
  dist(b: Readonly<Vec3Like>): number;
  /**
   * Calculates the squared Euclidean distance between another {@link Vec3} and `this`.
   * Equivalent to `Vec3.squaredDistance(this, b);`
   * @category Methods
   *
   * @param b The vector to calculate the squared distance to
   * @returns Squared distance between `this` and `b`
   */
  squaredDistance(b: Readonly<Vec3Like>): number;
  /**
   * Alias for {@link Vec3.squaredDistance}
   * @category Methods
   */
  sqrDist(b: Readonly<Vec3Like>): number;
  /**
   * Negates the components of `this`.
   * Equivalent to `Vec3.negate(this, this);`
   * @category Methods
   *
   * @returns `this`
   */
  negate(): this;
  /**
   * Inverts the components of `this`.
   * Equivalent to `Vec3.inverse(this, this);`
   * @category Methods
   *
   * @returns `this`
   */
  invert(): this;
  /**
   * Sets each component of `this` to its absolute value.
   * Equivalent to `Vec3.abs(this, this);`
   * @category Methods
   *
   * @returns `this`
   */
  abs(): this;
  /**
   * Calculates the dot product of this and another {@link Vec3}.
   * Equivalent to `Vec3.dot(this, b);`
   * @category Methods
   *
   * @param b - The second operand
   * @returns Dot product of `this` and `b`
   */
  dot(b: Readonly<Vec3Like>): number;
  /**
   * Normalize `this`.
   * Equivalent to `Vec3.normalize(this, this);`
   * @category Methods
   *
   * @returns `this`
   */
  normalize(): this;
  /**
   * @category Static
   *
   * @returns The number of bytes in a {@link Vec3}.
   */
  static get BYTE_LENGTH(): number;
  /**
   * Creates a new, empty vec3
   * @category Static
   *
   * @returns a new 3D vector
   */
  static create(): Vec3;
  /**
   * Creates a new vec3 initialized with values from an existing vector
   * @category Static
   *
   * @param a - vector to clone
   * @returns a new 3D vector
   */
  static clone(a: Readonly<Vec3Like>): Vec3;
  /**
   * Calculates the magnitude (length) of a {@link Vec3}
   * @category Static
   *
   * @param a - Vector to calculate magnitude of
   * @returns Magnitude of a
   */
  static magnitude(a: Readonly<Vec3Like>): number;
  /**
   * Alias for {@link Vec3.magnitude}
   * @category Static
   */
  static mag(a: Readonly<Vec3Like>): number;
  /**
   * Alias for {@link Vec3.magnitude}
   * @category Static
   * @deprecated Use {@link Vec3.magnitude} to avoid conflicts with builtin `length` methods/attribs
   *
   * @param a - vector to calculate length of
   * @returns length of a
   */
  static length(a: Readonly<Vec3Like>): number;
  /**
   * Alias for {@link Vec3.magnitude}
   * @category Static
   * @deprecated Use {@link Vec3.mag}
   */
  static len(a: Readonly<Vec3Like>): number;
  /**
   * Creates a new vec3 initialized with the given values
   * @category Static
   *
   * @param x - X component
   * @param y - Y component
   * @param z - Z component
   * @returns a new 3D vector
   */
  static fromValues(x: number, y: number, z: number): Vec3;
  /**
   * Copy the values from one vec3 to another
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the source vector
   * @returns `out`
   */
  static copy(out: Vec3Like, a: Readonly<Vec3Like>): Vec3Like;
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
  static set(out: Vec3Like, x: number, y: number, z: number): Vec3Like;
  /**
   * Adds two {@link Vec3}s
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - The first operand
   * @param b - The second operand
   * @returns `out`
   */
  static add(out: Vec3Like, a: Readonly<Vec3Like>, b: Readonly<Vec3Like>): Vec3Like;
  /**
   * Subtracts vector b from vector a
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static subtract(out: Vec3Like, a: Readonly<Vec3Like>, b: Readonly<Vec3Like>): Vec3Like;
  /**
   * Alias for {@link Vec3.subtract}
   * @category Static
   */
  static sub(out: Vec3Like, a: Readonly<Vec3Like>, b: Readonly<Vec3Like>): Vec3Like;
  /**
   * Multiplies two vec3's
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static multiply(out: Vec3Like, a: Readonly<Vec3Like>, b: Readonly<Vec3Like>): Vec3Like;
  /**
   * Alias for {@link Vec3.multiply}
   * @category Static
   */
  static mul(out: Vec3Like, a: Readonly<Vec3Like>, b: Readonly<Vec3Like>): Vec3Like;
  /**
   * Divides two vec3's
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static divide(out: Vec3Like, a: Readonly<Vec3Like>, b: Readonly<Vec3Like>): Vec3Like;
  /**
   * Alias for {@link Vec3.divide}
   * @category Static
   */
  static div(out: Vec3Like, a: Readonly<Vec3Like>, b: Readonly<Vec3Like>): Vec3Like;
  /**
   * Math.ceil the components of a vec3
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to ceil
   * @returns `out`
   */
  static ceil(out: Vec3Like, a: Readonly<Vec3Like>): Vec3Like;
  /**
   * Math.floor the components of a vec3
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to floor
   * @returns `out`
   */
  static floor(out: Vec3Like, a: Readonly<Vec3Like>): Vec3Like;
  /**
   * Returns the minimum of two vec3's
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static min(out: Vec3Like, a: Readonly<Vec3Like>, b: Readonly<Vec3Like>): Vec3Like;
  /**
   * Returns the maximum of two vec3's
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static max(out: Vec3Like, a: Readonly<Vec3Like>, b: Readonly<Vec3Like>): Vec3Like;
  /**
   * symmetric round the components of a vec3
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to round
   * @returns `out`
   */
  /**
   * Scales a vec3 by a scalar number
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the vector to scale
   * @param scale - amount to scale the vector by
   * @returns `out`
   */
  static scale(out: Vec3Like, a: Readonly<Vec3Like>, scale: number): Vec3Like;
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
  static scaleAndAdd(out: Vec3Like, a: Readonly<Vec3Like>, b: Readonly<Vec3Like>, scale: number): Vec3Like;
  /**
   * Calculates the Euclidean distance between two vec3's
   * @category Static
   *
   * @param a - the first operand
   * @param b - the second operand
   * @returns distance between a and b
   */
  static distance(a: Readonly<Vec3Like>, b: Readonly<Vec3Like>): number;
  /**
   * Alias for {@link Vec3.distance}
   * @category Static
   */
  static dist(a: Readonly<Vec3Like>, b: Readonly<Vec3Like>): number;
  /**
   * Calculates the squared Euclidean distance between two vec3's
   * @category Static
   *
   * @param a - the first operand
   * @param b - the second operand
   * @returns squared distance between a and b
   */
  static squaredDistance(a: Readonly<Vec3Like>, b: Readonly<Vec3Like>): number;
  /**
   * Alias for {@link Vec3.squaredDistance}
   * @category Static
   */
  static sqrDist(a: Readonly<Vec3Like>, b: Readonly<Vec3Like>): number;
  /**
   * Calculates the squared length of a vec3
   * @category Static
   *
   * @param a - vector to calculate squared length of
   * @returns squared length of a
   */
  static squaredLength(a: Readonly<Vec3Like>): number;
  /**
   * Alias for {@link Vec3.squaredLength}
   * @category Static
   */
  static sqrLen(a: Readonly<Vec3Like>, b: Readonly<Vec3Like>): number;
  /**
   * Negates the components of a vec3
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to negate
   * @returns `out`
   */
  static negate(out: Vec3Like, a: Readonly<Vec3Like>): Vec3Like;
  /**
   * Returns the inverse of the components of a vec3
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to invert
   * @returns `out`
   */
  static inverse(out: Vec3Like, a: Readonly<Vec3Like>): Vec3Like;
  /**
   * Returns the absolute value of the components of a {@link Vec3}
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - Vector to compute the absolute values of
   * @returns `out`
   */
  static abs(out: Vec3Like, a: Readonly<Vec3Like>): Vec3Like;
  /**
   * Normalize a vec3
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to normalize
   * @returns `out`
   */
  static normalize(out: Vec3Like, a: Readonly<Vec3Like>): Vec3Like;
  /**
   * Calculates the dot product of two vec3's
   * @category Static
   *
   * @param a - the first operand
   * @param b - the second operand
   * @returns dot product of a and b
   */
  static dot(a: Readonly<Vec3Like>, b: Readonly<Vec3Like>): number;
  /**
   * Computes the cross product of two vec3's
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static cross(out: Vec3Like, a: Readonly<Vec3Like>, b: Readonly<Vec3Like>): Vec3Like;
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
  static lerp(out: Vec3Like, a: Readonly<Vec3Like>, b: Readonly<Vec3Like>, t: number): Vec3Like;
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
  static slerp(out: Vec3Like, a: Readonly<Vec3Like>, b: Readonly<Vec3Like>, t: number): Vec3Like;
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
  static hermite(
    out: Vec3Like,
    a: Readonly<Vec3Like>,
    b: Readonly<Vec3Like>,
    c: Readonly<Vec3Like>,
    d: Readonly<Vec3Like>,
    t: number,
  ): Vec3Like;
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
  static bezier(
    out: Vec3Like,
    a: Readonly<Vec3Like>,
    b: Readonly<Vec3Like>,
    c: Readonly<Vec3Like>,
    d: Readonly<Vec3Like>,
    t: number,
  ): Vec3Like;
  /**
   * Generates a random vector with the given scale
   * @category Static
   *
   * @param out - the receiving vector
   * @param {Number} [scale] Length of the resulting vector. If omitted, a unit vector will be returned
   * @returns `out`
   */
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
  static transformMat4(out: Vec3Like, a: Readonly<Vec3Like>, m: Readonly<Mat4Like>): Vec3Like;
  /**
   * Transforms the vec3 with a mat3.
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the vector to transform
   * @param m - the 3x3 matrix to transform with
   * @returns `out`
   */
  static transformMat3(out: Vec3Like, a: Vec3Like, m: Mat3Like): Vec3Like;
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
  static transformQuat(out: Vec3Like, a: Readonly<Vec3Like>, q: Readonly<QuatLike>): Vec3Like;
  /**
   * Rotate a 3D vector around the x-axis
   * @category Static
   *
   * @param out - The receiving vec3
   * @param a - The vec3 point to rotate
   * @param b - The origin of the rotation
   * @param rad - The angle of rotation in radians
   * @returns `out`
   */
  static rotateX(out: Vec3Like, a: Readonly<Vec3Like>, b: Readonly<Vec3Like>, rad: number): Vec3Like;
  /**
   * Rotate a 3D vector around the y-axis
   * @category Static
   *
   * @param out - The receiving vec3
   * @param a - The vec3 point to rotate
   * @param b - The origin of the rotation
   * @param rad - The angle of rotation in radians
   * @returns `out`
   */
  static rotateY(out: Vec3Like, a: Readonly<Vec3Like>, b: Readonly<Vec3Like>, rad: number): Vec3Like;
  /**
   * Rotate a 3D vector around the z-axis
   * @category Static
   *
   * @param out - The receiving vec3
   * @param a - The vec3 point to rotate
   * @param b - The origin of the rotation
   * @param rad - The angle of rotation in radians
   * @returns `out`
   */
  static rotateZ(out: Vec3Like, a: Readonly<Vec3Like>, b: Readonly<Vec3Like>, rad: number): Vec3Like;
  /**
   * Get the angle between two 3D vectors
   * @category Static
   *
   * @param a - The first operand
   * @param b - The second operand
   * @returns The angle in radians
   */
  static angle(a: Readonly<Vec3Like>, b: Readonly<Vec3Like>): number;
  /**
   * Set the components of a vec3 to zero
   * @category Static
   *
   * @param out - the receiving vector
   * @returns `out`
   */
  static zero(out: Vec3Like): Vec3Like;
  /**
   * Returns a string representation of a vector
   * @category Static
   *
   * @param a - vector to represent as a string
   * @returns string representation of the vector
   */
  static str(a: Readonly<Vec3Like>): string;
  /**
   * Returns whether the vectors have exactly the same elements in the same position (when compared with ===)
   * @category Static
   *
   * @param a - The first vector.
   * @param b - The second vector.
   * @returns True if the vectors are equal, false otherwise.
   */
  static exactEquals(a: Readonly<Vec3Like>, b: Readonly<Vec3Like>): boolean;
  /**
   * Returns whether the vectors have approximately the same elements in the same position.
   * @category Static
   *
   * @param a - The first vector.
   * @param b - The second vector.
   * @returns True if the vectors are equal, false otherwise.
   */
  static equals(a: Readonly<Vec3Like>, b: Readonly<Vec3Like>): boolean;
}

/**
 * 4 Dimensional Vector
 */
declare class Vec4 extends Float64Array {
  /**
   * Create a {@link Vec4}.
   *
   * @category Constructor
   */
  constructor(...values: [Readonly<Vec4Like> | ArrayBufferLike, number?] | number[]);
  /**
   * The x component of the vector. Equivalent to `this[0];`
   * @category Vector Components
   */
  get x(): number;
  set x(value: number);
  /**
   * The y component of the vector. Equivalent to `this[1];`
   * @category Vector Components
   */
  get y(): number;
  set y(value: number);
  /**
   * The z component of the vector. Equivalent to `this[2];`
   * @category Vector Components
   */
  get z(): number;
  set z(value: number);
  /**
   * The w component of the vector. Equivalent to `this[3];`
   * @category Vector Components
   */
  get w(): number;
  set w(value: number);
  /**
   * The r component of the vector. Equivalent to `this[0];`
   * @category Color Components
   */
  get r(): number;
  set r(value: number);
  /**
   * The g component of the vector. Equivalent to `this[1];`
   * @category Color Components
   */
  get g(): number;
  set g(value: number);
  /**
   * The b component of the vector. Equivalent to `this[2];`
   * @category Color Components
   */
  get b(): number;
  set b(value: number);
  /**
   * The a component of the vector. Equivalent to `this[3];`
   * @category Color Components
   */
  get a(): number;
  set a(value: number);
  /**
   * The magnitude (length) of this.
   * Equivalent to `Vec4.magnitude(this);`
   *
   * Magnitude is used because the `length` attribute is already defined by
   * TypedArrays to mean the number of elements in the array.
   *
   * @category Accessors
   */
  get magnitude(): number;
  /**
   * Alias for {@link Vec4.magnitude}
   *
   * @category Accessors
   */
  get mag(): number;
  /**
   * A string representation of `this`
   * Equivalent to `Vec4.str(this);`
   *
   * @category Accessors
   */
  get str(): string;
  /**
   * Copy the values from another {@link Vec4} into `this`.
   * @category Methods
   *
   * @param a the source vector
   * @returns `this`
   */
  copy(a: Readonly<Vec4Like>): this;
  /**
   * Adds a {@link Vec4} to `this`.
   * Equivalent to `Vec4.add(this, this, b);`
   * @category Methods
   *
   * @param b - The vector to add to `this`
   * @returns `this`
   */
  add(b: Readonly<Vec4Like>): this;
  /**
   * Subtracts a {@link Vec4} from `this`.
   * Equivalent to `Vec4.subtract(this, this, b);`
   * @category Methods
   *
   * @param b - The vector to subtract from `this`
   * @returns `this`
   */
  subtract(b: Readonly<Vec4Like>): this;
  /**
   * Alias for {@link Vec4.subtract}
   * @category Methods
   */
  sub(b: Readonly<Vec4Like>): this;
  /**
   * Multiplies `this` by a {@link Vec4}.
   * Equivalent to `Vec4.multiply(this, this, b);`
   * @category Methods
   *
   * @param b - The vector to multiply `this` by
   * @returns `this`
   */
  multiply(b: Readonly<Vec4Like>): this;
  /**
   * Alias for {@link Vec4.multiply}
   * @category Methods
   */
  mul(b: Readonly<Vec4Like>): this;
  /**
   * Divides `this` by a {@link Vec4}.
   * Equivalent to `Vec4.divide(this, this, b);`
   * @category Methods
   *
   * @param b - The vector to divide `this` by
   * @returns `this`
   */
  divide(b: Readonly<Vec4Like>): this;
  /**
   * Alias for {@link Vec4.divide}
   * @category Methods
   */
  div(b: Readonly<Vec4Like>): this;
  /**
   * Scales `this` by a scalar number.
   * Equivalent to `Vec4.scale(this, this, b);`
   * @category Methods
   *
   * @param b - Amount to scale `this` by
   * @returns `this`
   */
  scale(b: number): this;
  /**
   * Calculates `this` scaled by a scalar value then adds the result to `this`.
   * Equivalent to `Vec4.scaleAndAdd(this, this, b, scale);`
   * @category Methods
   *
   * @param b - The vector to add to `this`
   * @param scale - The amount to scale `b` by before adding
   * @returns `this`
   */
  scaleAndAdd(b: Readonly<Vec4Like>, scale: number): this;
  /**
   * Calculates the Euclidean distance between another {@link Vec4} and `this`.
   * Equivalent to `Vec4.distance(this, b);`
   * @category Methods
   *
   * @param b - The vector to calculate the distance to
   * @returns Distance between `this` and `b`
   */
  distance(b: Readonly<Vec4Like>): number;
  /**
   * Alias for {@link Vec4.distance}
   * @category Methods
   */
  dist(b: Readonly<Vec4Like>): number;
  /**
   * Calculates the squared Euclidean distance between another {@link Vec4} and `this`.
   * Equivalent to `Vec4.squaredDistance(this, b);`
   * @category Methods
   *
   * @param b The vector to calculate the squared distance to
   * @returns Squared distance between `this` and `b`
   */
  squaredDistance(b: Readonly<Vec4Like>): number;
  /**
   * Alias for {@link Vec4.squaredDistance}
   * @category Methods
   */
  sqrDist(b: Readonly<Vec4Like>): number;
  /**
   * Negates the components of `this`.
   * Equivalent to `Vec4.negate(this, this);`
   * @category Methods
   *
   * @returns `this`
   */
  negate(): this;
  /**
   * Inverts the components of `this`.
   * Equivalent to `Vec4.inverse(this, this);`
   * @category Methods
   *
   * @returns `this`
   */
  invert(): this;
  /**
   * Sets each component of `this` to it's absolute value.
   * Equivalent to `Vec4.abs(this, this);`
   * @category Methods
   *
   * @returns `this`
   */
  abs(): this;
  /**
   * Calculates the dot product of this and another {@link Vec4}.
   * Equivalent to `Vec4.dot(this, b);`
   * @category Methods
   *
   * @param b - The second operand
   * @returns Dot product of `this` and `b`
   */
  dot(b: Readonly<Vec4Like>): number;
  /**
   * Normalize `this`.
   * Equivalent to `Vec4.normalize(this, this);`
   * @category Methods
   *
   * @returns `this`
   */
  normalize(): this;
  /**
   * @category Static
   *
   * @returns The number of bytes in a {@link Vec4}.
   */
  static get BYTE_LENGTH(): number;
  /**
   * Creates a new, empty {@link Vec4}
   * @category Static
   *
   * @returns a new 4D vector
   */
  static create(): Vec4;
  /**
   * Creates a new {@link Vec4} initialized with values from an existing vector
   * @category Static
   *
   * @param a - vector to clone
   * @returns a new 4D vector
   */
  static clone(a: Vec4Like): Vec4;
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
  static fromValues(x: number, y: number, z: number, w: number): Vec4;
  /**
   * Copy the values from one {@link Vec4} to another
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the source vector
   * @returns `out`
   */
  static copy(out: Vec4Like, a: Readonly<Vec4Like>): Vec4Like;
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
  static set(out: Vec4Like, x: number, y: number, z: number, w: number): Vec4Like;
  /**
   * Adds two {@link Vec4}s
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - The first operand
   * @param b - The second operand
   * @returns `out`
   */
  static add(out: Vec4Like, a: Readonly<Vec4Like>, b: Readonly<Vec4Like>): Vec4Like;
  /**
   * Subtracts vector b from vector a
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static subtract(out: Vec4Like, a: Readonly<Vec4Like>, b: Readonly<Vec4Like>): Vec4Like;
  /**
   * Alias for {@link Vec4.subtract}
   * @category Static
   */
  static sub(out: Vec4Like, a: Readonly<Vec4Like>, b: Readonly<Vec4Like>): Vec4Like;
  /**
   * Multiplies two {@link Vec4}'s
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static multiply(out: Vec4Like, a: Readonly<Vec4Like>, b: Readonly<Vec4Like>): Vec4Like;
  /**
   * Alias for {@link Vec4.multiply}
   * @category Static
   */
  static mul(out: Vec4Like, a: Readonly<Vec4Like>, b: Readonly<Vec4Like>): Vec4Like;
  /**
   * Divides two {@link Vec4}'s
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static divide(out: Vec4Like, a: Readonly<Vec4Like>, b: Readonly<Vec4Like>): Vec4Like;
  /**
   * Alias for {@link Vec4.divide}
   * @category Static
   */
  static div(out: Vec4Like, a: Readonly<Vec4Like>, b: Readonly<Vec4Like>): Vec4Like;
  /**
   * Math.ceil the components of a {@link Vec4}
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to ceil
   * @returns `out`
   */
  static ceil(out: Vec4Like, a: Readonly<Vec4Like>): Vec4Like;
  /**
   * Math.floor the components of a {@link Vec4}
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to floor
   * @returns `out`
   */
  static floor(out: Vec4Like, a: Readonly<Vec4Like>): Vec4Like;
  /**
   * Returns the minimum of two {@link Vec4}'s
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static min(out: Vec4Like, a: Readonly<Vec4Like>, b: Readonly<Vec4Like>): Vec4Like;
  /**
   * Returns the maximum of two {@link Vec4}'s
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static max(out: Vec4Like, a: Readonly<Vec4Like>, b: Readonly<Vec4Like>): Vec4Like;
  /**
   * Math.round the components of a {@link Vec4}
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to round
   * @returns `out`
   */
  static round(out: Vec4Like, a: Readonly<Vec4Like>): Vec4Like;
  /**
   * Scales a {@link Vec4} by a scalar number
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the vector to scale
   * @param scale - amount to scale the vector by
   * @returns `out`
   */
  static scale(out: Vec4Like, a: Readonly<Vec4Like>, scale: number): Vec4Like;
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
  static scaleAndAdd(out: Vec4Like, a: Readonly<Vec4Like>, b: Readonly<Vec4Like>, scale: number): Vec4Like;
  /**
   * Calculates the Euclidean distance between two {@link Vec4}'s
   * @category Static
   *
   * @param a - the first operand
   * @param b - the second operand
   * @returns distance between a and b
   */
  static distance(a: Readonly<Vec4Like>, b: Readonly<Vec4Like>): number;
  /**
   * Alias for {@link Vec4.distance}
   * @category Static
   */
  static dist(a: Readonly<Vec4Like>, b: Readonly<Vec4Like>): number;
  /**
   * Calculates the squared Euclidean distance between two {@link Vec4}'s
   * @category Static
   *
   * @param a - the first operand
   * @param b - the second operand
   * @returns squared distance between a and b
   */
  static squaredDistance(a: Readonly<Vec4Like>, b: Readonly<Vec4Like>): number;
  /**
   * Alias for {@link Vec4.squaredDistance}
   * @category Static
   */
  static sqrDist(a: Readonly<Vec4Like>, b: Readonly<Vec4Like>): number;
  /**
   * Calculates the magnitude (length) of a {@link Vec4}
   * @category Static
   *
   * @param a - vector to calculate length of
   * @returns length of `a`
   */
  static magnitude(a: Readonly<Vec4Like>): number;
  /**
   * Alias for {@link Vec4.magnitude}
   * @category Static
   */
  static mag(a: Readonly<Vec4Like>): number;
  /**
   * Alias for {@link Vec4.magnitude}
   * @category Static
   * @deprecated Use {@link Vec4.magnitude} to avoid conflicts with builtin `length` methods/attribs
   */
  static length(a: Readonly<Vec4Like>): number;
  /**
   * Alias for {@link Vec4.magnitude}
   * @category Static
   * @deprecated Use {@link Vec4.mag}
   */
  static len(a: Readonly<Vec4Like>): number;
  /**
   * Calculates the squared length of a {@link Vec4}
   * @category Static
   *
   * @param a - vector to calculate squared length of
   * @returns squared length of a
   */
  static squaredLength(a: Readonly<Vec4Like>): number;
  /**
   * Alias for {@link Vec4.squaredLength}
   * @category Static
   */
  static sqrLen(a: Readonly<Vec4Like>): number;
  /**
   * Negates the components of a {@link Vec4}
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to negate
   * @returns `out`
   */
  static negate(out: Vec4Like, a: Readonly<Vec4Like>): Vec4Like;
  /**
   * Returns the inverse of the components of a {@link Vec4}
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to invert
   * @returns `out`
   */
  static inverse(out: Vec4Like, a: Readonly<Vec4Like>): Vec4Like;
  /**
   * Returns the absolute value of the components of a {@link Vec4}
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - Vector to compute the absolute values of
   * @returns `out`
   */
  static abs(out: Vec4Like, a: Readonly<Vec4Like>): Vec4Like;
  /**
   * Normalize a {@link Vec4}
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to normalize
   * @returns `out`
   */
  static normalize(out: Vec4Like, a: Readonly<Vec4Like>): Vec4Like;
  /**
   * Calculates the dot product of two {@link Vec4}'s
   * @category Static
   *
   * @param a - the first operand
   * @param b - the second operand
   * @returns dot product of a and b
   */
  static dot(a: Readonly<Vec4Like>, b: Readonly<Vec4Like>): number;
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
  static cross(out: Vec4Like, u: Readonly<Vec4Like>, v: Readonly<Vec4Like>, w: Readonly<Vec4Like>): Vec4Like;
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
  static lerp(out: Vec4Like, a: Readonly<Vec4Like>, b: Readonly<Vec4Like>, t: number): Vec4Like;
  /**
   * Generates a random vector with the given scale
   * @category Static
   *
   * @param out - the receiving vector
   * @param [scale] - Length of the resulting vector. If ommitted, a unit vector will be returned
   * @returns `out`
   */
  /**
   * Transforms the {@link Vec4} with a {@link Mat4}.
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the vector to transform
   * @param m - matrix to transform with
   * @returns `out`
   */
  static transformMat4(out: Vec4Like, a: Readonly<Vec4Like>, m: Readonly<Mat4Like>): Vec4Like;
  /**
   * Transforms the {@link Vec4} with a {@link Quat}
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the vector to transform
   * @param q - quaternion to transform with
   * @returns `out`
   */
  static transformQuat(out: Vec4Like, a: Readonly<Vec4Like>, q: Readonly<QuatLike>): Vec4Like;
  /**
   * Set the components of a {@link Vec4} to zero
   * @category Static
   *
   * @param out - the receiving vector
   * @returns `out`
   */
  static zero(out: Vec4Like): Vec4Like;
  /**
   * Returns a string representation of a {@link Vec4}
   * @category Static
   *
   * @param a - vector to represent as a string
   * @returns string representation of the vector
   */
  static str(a: Readonly<Vec4Like>): string;
  /**
   * Returns whether the vectors have exactly the same elements in the same position (when compared with ===)
   * @category Static
   *
   * @param a - The first vector.
   * @param b - The second vector.
   * @returns True if the vectors are equal, false otherwise.
   */
  static exactEquals(a: Readonly<Vec4Like>, b: Readonly<Vec4Like>): boolean;
  /**
   * Returns whether the vectors have approximately the same elements in the same position.
   * @category Static
   *
   * @param a - The first vector.
   * @param b - The second vector.
   * @returns True if the vectors are equal, false otherwise.
   */
  static equals(a: Readonly<Vec4Like>, b: Readonly<Vec4Like>): boolean;
}

/**
 * To enable additional swizzle accessors for vector classes (64-bit) invoke the {@link EnableSwizzlesF64} function from
 * the `gl-matrix/swizzle/f64` sub-path export. To enable ambient module declarations for IDE / Typescript support
 * please see {@link gl-matrix/types/swizzle/f64}.
 *
 * To enable swizzling for the 32-bit variation of `gl-matrix` please see {@link gl-matrix/swizzle}.
 *
 * @example
 * ```ts
 * import { Vec3 } from 'gl-matrix/f64';
 * import { EnableSwizzlesF64 } from 'gl-matrix/swizzle/f64';
 *
 * EnableSwizzlesF64();
 *
 * const vec = new Vec3(0, 1, 2);
 * const vecSwizzled = vec.zyx; // Returns a new Vec3(2, 1, 0).
 * ```
 *
 * @packageDocumentation
 */
/**
 * Enables Swizzle operations on {@link gl-matrix/f64.Vec2 | Vec2} / {@link gl-matrix/f64.Vec3 | Vec3} /
 * {@link gl-matrix/f64.Vec4 | Vec4} types from {@link gl-matrix/f64} (64-bit).
 *
 * Swizzle operations are performed by using the `.` operator in conjunction with any combination
 * of between two and four component names, either from the set `xyzw` or `rgbw` (though not intermixed).
 * They return a new vector with the same number of components as specified in the swizzle attribute.
 *
 * @example
 * ```js
 * import { Vec3 } from 'gl-matrix/f64';
 * import { EnableSwizzlesF64 } from 'gl-matrix/swizzle/f64';
 *
 * EnableSwizzlesF64();
 *
 * let v = new Vec3(0, 1, 2);
 *
 * v.yx; // returns new Vec2(1, 0)
 * v.xzy; // returns new Vec3(0, 2, 1)
 * v.zyxz; // returns new Vec4(2, 1, 0, 2)
 *
 * v.rgb; // returns new Vec3(0, 1, 2)
 * v.rbg; // returns new Vec3(0, 2, 1)
 * v.gg; // returns new Vec2(1, 1)
 * ```
 */
declare function EnableSwizzlesF64(): void;

/**
 * Ambient module declarations for `gl-matrix/f64` (64-bit) swizzle extensions for vector classes.
 *
 * When swizzle accessors via {@link gl-matrix/swizzle/f64.EnableSwizzlesF64 | EnableSwizzlesF64} are enabled include
 * this sub-path export as a `side effect` import to add ambient module declarations for the additional accessors to
 * {@link gl-matrix/f64.Vec2 | Vec2} / {@link gl-matrix/f64.Vec3 | Vec3} / {@link gl-matrix/f64.Vec4 | Vec4}.
 *
 * To enable swizzling for the 64-bit variation of `gl-matrix` please see {@link gl-matrix/swizzle/f64}.
 *
 * ```js
 * import { Vec2 } from 'gl-matrix/f64';
 * import { EnableSwizzlesF64 } from 'gl-matrix/swizzle/f64';
 *
 * import 'gl-matrix/types/swizzle/f64';
 *
 * EnableSwizzlesF64();
 *
 * const vec = new Vec2(0, 1);
 *
 * // Swizzled instance - returns new Vec2(1, 0).
 * const vecSwizzled = vec.yx;
 * ```
 *
 * @packageDocumentation
 */

/**
 * A type alias for Vec2 (64-bit).
 * @hidden
 */
type Vec2Alias = Vec2;
/**
 * A type alias for Vec3 (64-bit).
 * @hidden
 */
type Vec3Alias = Vec3;
/**
 * A type alias for Vec4 (64-bit).
 * @hidden
 */
type Vec4Alias = Vec4;

/**
 * Vec2 swizzle extension accessors.
 */
interface Vec2 {
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get xx(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get xy(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get yx(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get yy(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get xxx(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get xxy(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get xyx(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get xyy(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get yxx(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get yxy(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get yyx(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get yyy(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xxxx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xxxy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xxyx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xxyy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xyxx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xyxy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xyyx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xyyy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yxxx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yxxy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yxyx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yxyy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yyxx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yyxy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yyyx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yyyy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get rr(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get rg(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get gr(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get gg(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get rrr(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get rrg(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get rgr(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get rgg(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get grr(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get grg(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get ggr(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get ggg(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rrrr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rrrg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rrgr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rrgg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rgrr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rgrg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rggr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rggg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get grrr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get grrg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get grgr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get grgg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ggrr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ggrg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gggr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gggg(): Vec4Alias;
}
/**
 * Vec3 swizzle extension accessors.
 */
interface Vec3 {
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get xx(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get xy(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get yx(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get yy(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get xxx(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get xxy(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get xyx(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get xyy(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get yxx(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get yxy(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get yyx(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get yyy(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xxxx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xxxy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xxyx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xxyy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xyxx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xyxy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xyyx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xyyy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yxxx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yxxy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yxyx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yxyy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yyxx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yyxy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yyyx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yyyy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get rr(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get rg(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get gr(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get gg(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get rrr(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get rrg(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get rgr(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get rgg(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get grr(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get grg(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get ggr(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get ggg(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rrrr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rrrg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rrgr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rrgg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rgrr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rgrg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rggr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rggg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get grrr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get grrg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get grgr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get grgg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ggrr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ggrg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gggr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gggg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get xz(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get yz(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get zx(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get zy(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get zz(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get xxz(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get xyz(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get xzx(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get xzy(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get xzz(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get yxz(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get yyz(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get yzx(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get yzy(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get yzz(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get zxx(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get zxy(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get zxz(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get zyx(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get zyy(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get zyz(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get zzx(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get zzy(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get zzz(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xxxz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xxyz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xxzx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xxzy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xxzz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xyxz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xyyz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xyzx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xyzy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xyzz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xzxx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xzxy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xzxz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xzyx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xzyy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xzyz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xzzx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xzzy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xzzz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yxxz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yxyz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yxzx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yxzy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yxzz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yyxz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yyyz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yyzx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yyzy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yyzz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yzxx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yzxy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yzxz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yzyx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yzyy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yzyz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yzzx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yzzy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yzzz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zxxx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zxxy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zxxz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zxyx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zxyy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zxyz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zxzx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zxzy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zxzz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zyxx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zyxy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zyxz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zyyx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zyyy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zyyz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zyzx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zyzy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zyzz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zzxx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zzxy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zzxz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zzyx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zzyy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zzyz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zzzx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zzzy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zzzz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get rb(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get gb(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get br(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get bg(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get bb(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get rrb(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get rgb(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get rbr(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get rbg(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get rbb(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get grb(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get ggb(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get gbr(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get gbg(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get gbb(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get brr(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get brg(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get brb(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get bgr(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get bgg(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get bgb(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get bbr(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get bbg(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get bbb(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rrrb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rrgb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rrbr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rrbg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rrbb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rgrb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rggb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rgbr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rgbg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rgbb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rbrr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rbrg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rbrb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rbgr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rbgg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rbgb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rbbr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rbbg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rbbb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get grrb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get grgb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get grbr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get grbg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get grbb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ggrb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gggb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ggbr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ggbg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ggbb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gbrr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gbrg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gbrb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gbgr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gbgg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gbgb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gbbr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gbbg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gbbb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get brrr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get brrg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get brrb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get brgr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get brgg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get brgb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get brbr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get brbg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get brbb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bgrr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bgrg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bgrb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bggr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bggg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bggb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bgbr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bgbg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bgbb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bbrr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bbrg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bbrb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bbgr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bbgg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bbgb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bbbr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bbbg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bbbb(): Vec4Alias;
}
/**
 * Vec4 swizzle extension accessors.
 */
interface Vec4 {
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get xx(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get xy(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get yx(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get yy(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get xxx(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get xxy(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get xyx(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get xyy(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get yxx(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get yxy(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get yyx(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get yyy(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xxxx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xxxy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xxyx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xxyy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xyxx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xyxy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xyyx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xyyy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yxxx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yxxy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yxyx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yxyy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yyxx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yyxy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yyyx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yyyy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get rr(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get rg(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get gr(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get gg(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get rrr(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get rrg(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get rgr(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get rgg(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get grr(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get grg(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get ggr(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get ggg(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rrrr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rrrg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rrgr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rrgg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rgrr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rgrg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rggr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rggg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get grrr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get grrg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get grgr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get grgg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ggrr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ggrg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gggr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gggg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get xz(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get yz(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get zx(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get zy(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get zz(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get xxz(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get xyz(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get xzx(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get xzy(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get xzz(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get yxz(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get yyz(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get yzx(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get yzy(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get yzz(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get zxx(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get zxy(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get zxz(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get zyx(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get zyy(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get zyz(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get zzx(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get zzy(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get zzz(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xxxz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xxyz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xxzx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xxzy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xxzz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xyxz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xyyz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xyzx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xyzy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xyzz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xzxx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xzxy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xzxz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xzyx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xzyy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xzyz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xzzx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xzzy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xzzz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yxxz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yxyz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yxzx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yxzy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yxzz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yyxz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yyyz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yyzx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yyzy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yyzz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yzxx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yzxy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yzxz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yzyx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yzyy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yzyz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yzzx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yzzy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yzzz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zxxx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zxxy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zxxz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zxyx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zxyy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zxyz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zxzx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zxzy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zxzz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zyxx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zyxy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zyxz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zyyx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zyyy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zyyz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zyzx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zyzy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zyzz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zzxx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zzxy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zzxz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zzyx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zzyy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zzyz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zzzx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zzzy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zzzz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get rb(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get gb(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get br(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get bg(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get bb(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get rrb(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get rgb(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get rbr(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get rbg(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get rbb(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get grb(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get ggb(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get gbr(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get gbg(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get gbb(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get brr(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get brg(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get brb(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get bgr(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get bgg(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get bgb(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get bbr(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get bbg(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get bbb(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rrrb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rrgb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rrbr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rrbg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rrbb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rgrb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rggb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rgbr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rgbg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rgbb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rbrr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rbrg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rbrb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rbgr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rbgg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rbgb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rbbr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rbbg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rbbb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get grrb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get grgb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get grbr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get grbg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get grbb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ggrb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gggb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ggbr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ggbg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ggbb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gbrr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gbrg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gbrb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gbgr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gbgg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gbgb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gbbr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gbbg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gbbb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get brrr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get brrg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get brrb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get brgr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get brgg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get brgb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get brbr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get brbg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get brbb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bgrr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bgrg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bgrb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bggr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bggg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bggb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bgbr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bgbg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bgbb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bbrr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bbrg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bbrb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bbgr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bbgg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bbgb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bbbr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bbbg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bbbb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get xw(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get yw(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get zw(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get wx(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get wy(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get wz(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get ww(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get xxw(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get xyw(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get xzw(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get xwx(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get xwy(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get xwz(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get xww(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get yxw(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get yyw(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get yzw(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get ywx(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get ywy(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get ywz(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get yww(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get zxw(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get zyw(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get zzw(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get zwx(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get zwy(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get zwz(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get zww(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get wxx(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get wxy(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get wxz(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get wxw(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get wyx(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get wyy(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get wyz(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get wyw(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get wzx(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get wzy(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get wzz(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get wzw(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get wwx(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get wwy(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get wwz(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get www(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xxxw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xxyw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xxzw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xxwx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xxwy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xxwz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xxww(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xyxw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xyyw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xyzw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xywx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xywy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xywz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xyww(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xzxw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xzyw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xzzw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xzwx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xzwy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xzwz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xzww(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xwxx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xwxy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xwxz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xwxw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xwyx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xwyy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xwyz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xwyw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xwzx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xwzy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xwzz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xwzw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xwwx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xwwy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xwwz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get xwww(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yxxw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yxyw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yxzw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yxwx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yxwy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yxwz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yxww(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yyxw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yyyw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yyzw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yywx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yywy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yywz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yyww(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yzxw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yzyw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yzzw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yzwx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yzwy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yzwz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get yzww(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ywxx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ywxy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ywxz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ywxw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ywyx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ywyy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ywyz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ywyw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ywzx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ywzy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ywzz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ywzw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ywwx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ywwy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ywwz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ywww(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zxxw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zxyw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zxzw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zxwx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zxwy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zxwz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zxww(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zyxw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zyyw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zyzw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zywx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zywy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zywz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zyww(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zzxw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zzyw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zzzw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zzwx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zzwy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zzwz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zzww(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zwxx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zwxy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zwxz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zwxw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zwyx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zwyy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zwyz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zwyw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zwzx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zwzy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zwzz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zwzw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zwwx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zwwy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zwwz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get zwww(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wxxx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wxxy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wxxz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wxxw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wxyx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wxyy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wxyz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wxyw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wxzx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wxzy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wxzz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wxzw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wxwx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wxwy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wxwz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wxww(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wyxx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wyxy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wyxz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wyxw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wyyx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wyyy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wyyz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wyyw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wyzx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wyzy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wyzz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wyzw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wywx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wywy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wywz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wyww(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wzxx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wzxy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wzxz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wzxw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wzyx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wzyy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wzyz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wzyw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wzzx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wzzy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wzzz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wzzw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wzwx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wzwy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wzwz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wzww(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wwxx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wwxy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wwxz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wwxw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wwyx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wwyy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wwyz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wwyw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wwzx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wwzy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wwzz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wwzw(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wwwx(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wwwy(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wwwz(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get wwww(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get ra(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get ga(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get ba(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get ar(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get ag(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get ab(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec2
   */
  get aa(): Vec2Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get rra(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get rga(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get rba(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get rar(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get rag(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get rab(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get raa(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get gra(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get gga(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get gba(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get gar(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get gag(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get gab(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get gaa(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get bra(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get bga(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get bba(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get bar(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get bag(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get bab(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get baa(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get arr(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get arg(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get arb(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get ara(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get agr(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get agg(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get agb(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get aga(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get abr(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get abg(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get abb(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get aba(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get aar(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get aag(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get aab(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec3
   */
  get aaa(): Vec3Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rrra(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rrga(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rrba(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rrar(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rrag(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rrab(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rraa(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rgra(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rgga(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rgba(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rgar(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rgag(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rgab(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rgaa(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rbra(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rbga(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rbba(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rbar(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rbag(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rbab(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rbaa(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rarr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rarg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rarb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rara(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ragr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ragg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ragb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get raga(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rabr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rabg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get rabb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get raba(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get raar(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get raag(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get raab(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get raaa(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get grra(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get grga(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get grba(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get grar(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get grag(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get grab(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get graa(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ggra(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ggga(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ggba(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ggar(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ggag(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ggab(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get ggaa(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gbra(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gbga(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gbba(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gbar(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gbag(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gbab(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gbaa(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get garr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get garg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get garb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gara(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gagr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gagg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gagb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gaga(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gabr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gabg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gabb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gaba(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gaar(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gaag(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gaab(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get gaaa(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get brra(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get brga(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get brba(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get brar(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get brag(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get brab(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get braa(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bgra(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bgga(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bgba(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bgar(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bgag(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bgab(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bgaa(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bbra(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bbga(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bbba(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bbar(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bbag(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bbab(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bbaa(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get barr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get barg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get barb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bara(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bagr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bagg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get bagb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get baga(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get babr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get babg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get babb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get baba(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get baar(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get baag(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get baab(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get baaa(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get arrr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get arrg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get arrb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get arra(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get argr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get argg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get argb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get arga(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get arbr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get arbg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get arbb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get arba(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get arar(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get arag(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get arab(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get araa(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get agrr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get agrg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get agrb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get agra(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get aggr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get aggg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get aggb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get agga(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get agbr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get agbg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get agbb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get agba(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get agar(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get agag(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get agab(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get agaa(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get abrr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get abrg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get abrb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get abra(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get abgr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get abgg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get abgb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get abga(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get abbr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get abbg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get abbb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get abba(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get abar(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get abag(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get abab(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get abaa(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get aarr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get aarg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get aarb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get aara(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get aagr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get aagg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get aagb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get aaga(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get aabr(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get aabg(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get aabb(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get aaba(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get aaar(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get aaag(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get aaab(): Vec4Alias;
  /**
   * @category Swizzle Accessors (Optional)
   * @returns New instance of swizzled Vec4
   */
  get aaaa(): Vec4Alias;
}

/**
 * Convert `radians` to `degrees`.
 *
 * @param value - Angle in `radians`.
 * @returns Angle in `degrees`.
 */
declare function toDegree(value: number): number;
/**
 * Convert `degrees` to `radians`.
 *
 * @param value - Angle in `degrees`.
 * @returns Angle in `radians`.
 */
declare function toRadian(value: number): number;

export {
  EnableSwizzlesF64,
  type FloatArray,
  Mat2,
  type Mat2Like,
  Mat2d,
  type Mat2dLike,
  Mat3,
  type Mat3Like,
  Mat4,
  type Mat4Like,
  Quat,
  Quat2,
  type Quat2Like,
  type QuatLike,
  Vec2,
  type Vec2Like,
  Vec3,
  type Vec3Like,
  Vec4,
  type Vec4Like,
  toDegree,
  toRadian,
};
