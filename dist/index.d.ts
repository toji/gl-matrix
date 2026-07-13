declare module "gl-matrix" {

/**
 * Users can augment this interface to override the default array type
 * 
 * @example
 * export module "gl-matrix" { 
 *   interface Overrides { 
 *     ArrayType: Float64Array 
 *   } 
 * }
 */
interface Overrides { }

/**
 * Users can override `ArrayType` by augmenting `gl-matrix` module
 * 
 * @example
 * export module "gl-matrix" { 
 *   interface Overrides { 
 *     ArrayType: Float64Array 
 *   } 
 * }
 */
export type ArrayType = Overrides extends { ArrayType: infer T } ? T : Float32Array

interface IndexedCollection extends Iterable<number> {
  readonly length: number;
  [index: number]: number;
}

export namespace Tuple {
  // prettier-ignore
  export type Mat2 = [
    number, number,
    number, number
  ]
  // prettier-ignore
  export type Mat2d = [
    number, number,
    number, number,
    number, number
  ]
  // prettier-ignore
  export type Mat3 = [
    number, number, number,
    number, number, number,
    number, number, number
  ]
  // prettier-ignore
  export type Mat4 = [
    number, number, number, number,
    number, number, number, number,
    number, number, number, number,
    number, number, number, number
  ]
  export type Quat = [number, number, number, number]
  // prettier-ignore
  export type Quat2 = [
    number, number, number, number,
    number, number, number, number
  ]
  export type Vec2 = [number, number]
  export type Vec3 = [number, number, number]
  export type Vec4 = [number, number, number, number]

  // prettier-ignore
  export type ReadonlyMat2 = readonly [
    number, number,
    number, number
  ]
  // prettier-ignore
  export type ReadonlyMat2d = readonly [
    number, number,
    number, number,
    number, number
  ]
  // prettier-ignore
  export type ReadonlyMat3 = readonly [
    number, number, number,
    number, number, number,
    number, number, number
  ]
  // prettier-ignore
  export type ReadonlyMat4 = readonly [
    number, number, number, number,
    number, number, number, number,
    number, number, number, number,
    number, number, number, number
  ]
  export type ReadonlyQuat = readonly [number, number, number, number]
  // prettier-ignore
  export type ReadonlyQuat2 = readonly [
    number, number, number, number,
    number, number, number, number
  ]
  export type ReadonlyVec2 = readonly [number, number]
  export type ReadonlyVec3 = readonly [number, number, number];
  export type ReadonlyVec4 = readonly [number, number, number, number];
}

/**
 * Return type utilities. Narrows Array<number> to Tuple types, preserves other types.
 *
 * @example
 * const result = mat4.copy([], mat4.create()); // Tuple.Mat4
 * const result2 = mat4.copy(new Float32Array(16), mat4.create()); // Float32Array
 */
export namespace ReturnType { 
  export type Mat2<T extends IndexedCollection> = T extends Array<number> ? Tuple.Mat2 : T
  export type Mat2d<T extends IndexedCollection> = T extends Array<number> ? Tuple.Mat2d : T
  export type Mat3<T extends IndexedCollection> = T extends Array<number> ? Tuple.Mat3 : T
  export type Mat4<T extends IndexedCollection> = T extends Array<number> ? Tuple.Mat4 : T
  export type Quat<T extends IndexedCollection> = T extends Array<number> ? Tuple.Quat : T
  export type Quat2<T extends IndexedCollection> = T extends Array<number> ? Tuple.Quat2 : T
  export type Vec2<T extends IndexedCollection> = T extends Array<number> ? Tuple.Vec2 : T
  export type Vec3<T extends IndexedCollection> = T extends Array<number> ? Tuple.Vec3 : T
  export type Vec4<T extends IndexedCollection> = T extends Array<number> ? Tuple.Vec4 : T
}

export type mat2 = IndexedCollection | Tuple.Mat2;
export type mat2d = IndexedCollection | Tuple.Mat2d;
export type mat3 = IndexedCollection | Tuple.Mat3;
export type mat4 = IndexedCollection | Tuple.Mat4;
export type quat = IndexedCollection | Tuple.Quat;
export type quat2 = IndexedCollection | Tuple.Quat2;
export type vec2 = IndexedCollection | Tuple.Vec2;
export type vec3 = IndexedCollection | Tuple.Vec3;
export type vec4 = IndexedCollection | Tuple.Vec4;

export type ReadonlyMat2 = IndexedCollection | Tuple.ReadonlyMat2;
export type ReadonlyMat2d = IndexedCollection | Tuple.ReadonlyMat2d;
export type ReadonlyMat3 = IndexedCollection | Tuple.ReadonlyMat3;
export type ReadonlyMat4 = IndexedCollection | Tuple.ReadonlyMat4;
export type ReadonlyQuat = IndexedCollection | Tuple.ReadonlyQuat;
export type ReadonlyQuat2 = IndexedCollection | Tuple.ReadonlyQuat2;
export type ReadonlyVec2 = IndexedCollection | Tuple.ReadonlyVec2;
export type ReadonlyVec3 = IndexedCollection | Tuple.ReadonlyVec3;
export type ReadonlyVec4 = IndexedCollection | Tuple.ReadonlyVec4;

export namespace glMatrix {
    /**
     * Symmetric round
     * see https://www.npmjs.com/package/round-half-up-symmetric#user-content-detailed-background
     *
     * @param {Number} a value to round
     */
    export function round(a: number): number;
    /**
     * Sets the type of array used when creating new vectors and matrices
     *
     * @param {Float32ArrayConstructor | ArrayConstructor} type Array type, such as Float32Array or Array
     */
    export function setMatrixArrayType(type: Float32ArrayConstructor | ArrayConstructor): void;
    /**
     * Convert Degree To Radian
     *
     * @param {Number} a Angle in Degrees
     */
    export function toRadian(a: number): number;
    /**
     * Convert Radian To Degree
     *
     * @param {Number} a Angle in Radians
     */
    export function toDegree(a: number): number;
    /**
     * Tests whether or not the arguments have approximately the same value, within an absolute
     * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
     * than or equal to 1.0, and a relative tolerance is used for larger values)
     *
     * @param {Number} a          The first number to test.
     * @param {Number} b          The second number to test.
     * @param {Number} tolerance  Absolute or relative tolerance (default glMatrix.EPSILON)
     * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
     */
    export function equals(a: number, b: number, tolerance?: number): boolean;
    /**
     * Common utilities
     * @module glMatrix
     */
    export const EPSILON: 0.000001;
    export let ARRAY_TYPE: ArrayConstructor | Float32ArrayConstructor;
    export let RANDOM: () => number;
    export let ANGLE_ORDER: string;
}
export namespace mat2 {
    /**
     * 2x2 Matrix
     * @module mat2
     */
    /**
     * Creates a new identity mat2
     *
     * @returns {ArrayType} a new 2x2 matrix
     */
    export function create(): ArrayType;
    /**
     * Creates a new mat2 initialized with values from an existing matrix
     *
     * @param {ReadonlyMat2} a matrix to clone
     * @returns {ArrayType} a new 2x2 matrix
     */
    export function clone(a: ReadonlyMat2): ArrayType;
    /**
     * Copy the values from one mat2 to another
     *
     * @template {mat2} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat2} a the source matrix
     * @returns {ReturnType.Mat2<T>} out
     */
    export function copy<T extends mat2>(out: T, a: ReadonlyMat2): ReturnType.Mat2<T>;
    /**
     * Set a mat2 to the identity matrix
     *
     * @template {mat2} T
     * @param {T} out the receiving matrix
     * @returns {ReturnType.Mat2<T>} out
     */
    export function identity<T extends mat2>(out: T): ReturnType.Mat2<T>;
    /**
     * Create a new mat2 with the given values
     *
     * @param {Number} m00 Component in column 0, row 0 position (index 0)
     * @param {Number} m01 Component in column 0, row 1 position (index 1)
     * @param {Number} m10 Component in column 1, row 0 position (index 2)
     * @param {Number} m11 Component in column 1, row 1 position (index 3)
     * @returns {ArrayType} out A new 2x2 matrix
     */
    export function fromValues(m00: number, m01: number, m10: number, m11: number): ArrayType;
    /**
     * Set the components of a mat2 to the given values
     *
     * @template {mat2} T
     * @param {T} out the receiving matrix
     * @param {Number} m00 Component in column 0, row 0 position (index 0)
     * @param {Number} m01 Component in column 0, row 1 position (index 1)
     * @param {Number} m10 Component in column 1, row 0 position (index 2)
     * @param {Number} m11 Component in column 1, row 1 position (index 3)
     * @returns {ReturnType.Mat2<T>} out
     */
    export function set<T extends mat2>(out: T, m00: number, m01: number, m10: number, m11: number): ReturnType.Mat2<T>;
    /**
     * Transpose the values of a mat2
     *
     * @template {mat2} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat2} a the source matrix
     * @returns {ReturnType.Mat2<T>} out
     */
    export function transpose<T extends mat2>(out: T, a: ReadonlyMat2): ReturnType.Mat2<T>;
    /**
     * Inverts a mat2
     *
     * @template {mat2} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat2} a the source matrix
     * @returns {ReturnType.Mat2<T> | null} out, or null if source matrix is not invertible
     */
    export function invert<T extends mat2>(out: T, a: ReadonlyMat2): ReturnType.Mat2<T> | null;
    /**
     * Calculates the adjugate of a mat2
     *
     * @template {mat2} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat2} a the source matrix
     * @returns {ReturnType.Mat2<T>} out
     */
    export function adjoint<T extends mat2>(out: T, a: ReadonlyMat2): ReturnType.Mat2<T>;
    /**
     * Calculates the determinant of a mat2
     *
     * @param {ReadonlyMat2} a the source matrix
     * @returns {Number} determinant of a
     */
    export function determinant(a: ReadonlyMat2): number;
    /**
     * Multiplies two mat2's
     *
     * @template {mat2} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat2} a the first operand
     * @param {ReadonlyMat2} b the second operand
     * @returns {ReturnType.Mat2<T>} out
     */
    export function multiply<T extends mat2>(out: T, a: ReadonlyMat2, b: ReadonlyMat2): ReturnType.Mat2<T>;
    /**
     * Rotates a mat2 by the given angle
     *
     * @template {mat2} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat2} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {ReturnType.Mat2<T>} out
     */
    export function rotate<T extends mat2>(out: T, a: ReadonlyMat2, rad: number): ReturnType.Mat2<T>;
    /**
     * Scales the mat2 by the dimensions in the given vec2
     *
     * @template {mat2} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat2} a the matrix to rotate
     * @param {ReadonlyVec2} v the vec2 to scale the matrix by
     * @returns {ReturnType.Mat2<T>} out
     **/
    export function scale<T extends mat2>(out: T, a: ReadonlyMat2, v: ReadonlyVec2): ReturnType.Mat2<T>;
    /**
     * Creates a matrix from a given angle
     * This is equivalent to (but much faster than):
     *
     *     mat2.identity(dest);
     *     mat2.rotate(dest, dest, rad);
     *
     * @template {mat2} T
     * @param {T} out mat2 receiving operation result
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {ReturnType.Mat2<T>} out
     */
    export function fromRotation<T extends mat2>(out: T, rad: number): ReturnType.Mat2<T>;
    /**
     * Creates a matrix from a vector scaling
     * This is equivalent to (but much faster than):
     *
     *     mat2.identity(dest);
     *     mat2.scale(dest, dest, vec);
     *
     * @template {mat2} T
     * @param {T} out mat2 receiving operation result
     * @param {ReadonlyVec2} v Scaling vector
     * @returns {ReturnType.Mat2<T>} out
     */
    export function fromScaling<T extends mat2>(out: T, v: ReadonlyVec2): ReturnType.Mat2<T>;
    /**
     * Returns a string representation of a mat2
     *
     * @param {ReadonlyMat2} a matrix to represent as a string
     * @returns {String} string representation of the matrix
     */
    export function str(a: ReadonlyMat2): string;
    /**
     * Returns Frobenius norm of a mat2
     *
     * @param {ReadonlyMat2} a the matrix to calculate Frobenius norm of
     * @returns {Number} Frobenius norm
     */
    export function frob(a: ReadonlyMat2): number;
    /**
     * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
     * @param {ReadonlyMat2} L the lower triangular matrix
     * @param {ReadonlyMat2} D the diagonal matrix
     * @param {ReadonlyMat2} U the upper triangular matrix
     * @param {ReadonlyMat2} a the input matrix to factorize
     */
    export function LDU(L: ReadonlyMat2, D: ReadonlyMat2, U: ReadonlyMat2, a: ReadonlyMat2): ReadonlyMat2[];
    /**
     * Adds two mat2's
     *
     * @template {mat2} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat2} a the first operand
     * @param {ReadonlyMat2} b the second operand
     * @returns {ReturnType.Mat2<T>} out
     */
    export function add<T extends mat2>(out: T, a: ReadonlyMat2, b: ReadonlyMat2): ReturnType.Mat2<T>;
    /**
     * Subtracts matrix b from matrix a
     *
     * @template {mat2} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat2} a the first operand
     * @param {ReadonlyMat2} b the second operand
     * @returns {ReturnType.Mat2<T>} out
     */
    export function subtract<T extends mat2>(out: T, a: ReadonlyMat2, b: ReadonlyMat2): ReturnType.Mat2<T>;
    /**
     * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
     *
     * @param {ReadonlyMat2} a The first matrix.
     * @param {ReadonlyMat2} b The second matrix.
     * @returns {Boolean} True if the matrices are equal, false otherwise.
     */
    export function exactEquals(a: ReadonlyMat2, b: ReadonlyMat2): boolean;
    /**
     * Returns whether or not the matrices have approximately the same elements in the same position.
     *
     * @param {ReadonlyMat2} a The first matrix.
     * @param {ReadonlyMat2} b The second matrix.
     * @returns {Boolean} True if the matrices are equal, false otherwise.
     */
    export function equals(a: ReadonlyMat2, b: ReadonlyMat2): boolean;
    /**
     * Multiply each element of the matrix by a scalar.
     *
     * @template {mat2} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat2} a the matrix to scale
     * @param {Number} b amount to scale the matrix's elements by
     * @returns {ReturnType.Mat2<T>} out
     */
    export function multiplyScalar<T extends mat2>(out: T, a: ReadonlyMat2, b: number): ReturnType.Mat2<T>;
    /**
     * Adds two mat2's after multiplying each element of the second operand by a scalar value.
     *
     * @template {mat2} T
     * @param {T} out the receiving vector
     * @param {ReadonlyMat2} a the first operand
     * @param {ReadonlyMat2} b the second operand
     * @param {Number} scale the amount to scale b's elements by before adding
     * @returns {ReturnType.Mat2<T>} out
     */
    export function multiplyScalarAndAdd<T extends mat2>(out: T, a: ReadonlyMat2, b: ReadonlyMat2, scale: number): ReturnType.Mat2<T>;
    /**
     * Multiplies two mat2's
     *
     * @template {mat2} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat2} a the first operand
     * @param {ReadonlyMat2} b the second operand
     * @returns {ReturnType.Mat2<T>} out
     */
    export function mul<T extends mat2>(out: T, a: ReadonlyMat2, b: ReadonlyMat2): ReturnType.Mat2<T>;
    /**
     * Subtracts matrix b from matrix a
     *
     * @template {mat2} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat2} a the first operand
     * @param {ReadonlyMat2} b the second operand
     * @returns {ReturnType.Mat2<T>} out
     */
    export function sub<T extends mat2>(out: T, a: ReadonlyMat2, b: ReadonlyMat2): ReturnType.Mat2<T>;
}
export namespace mat2d {
    /**
     * 2x3 Matrix
     * @module mat2d
     * @description
     * A mat2d contains six elements defined as:
     * <pre>
     * [a, b,
     *  c, d,
     *  tx, ty]
     * </pre>
     * This is a short form for the 3x3 matrix:
     * <pre>
     * [a, b, 0,
     *  c, d, 0,
     *  tx, ty, 1]
     * </pre>
     * The last column is ignored so the array is shorter and operations are faster.
     */
    /**
     * Creates a new identity mat2d
     *
     * @returns {ArrayType} a new 2x3 matrix
     */
    export function create(): ArrayType;
    /**
     * Creates a new mat2d initialized with values from an existing matrix
     *
     * @param {ReadonlyMat2d} a matrix to clone
     * @returns {ArrayType} a new 2x3 matrix
     */
    export function clone(a: ReadonlyMat2d): ArrayType;
    /**
     * Copy the values from one mat2d to another
     *
     * @template {mat2d} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat2d} a the source matrix
     * @returns {ReturnType.Mat2d<T>} out
     */
    export function copy<T extends mat2d>(out: T, a: ReadonlyMat2d): ReturnType.Mat2d<T>;
    /**
     * Set a mat2d to the identity matrix
     *
     * @template {mat2d} T
     * @param {T} out the receiving matrix
     * @returns {ReturnType.Mat2d<T>} out
     */
    export function identity<T extends mat2d>(out: T): ReturnType.Mat2d<T>;
    /**
     * Create a new mat2d with the given values
     *
     * @param {Number} a Component A (index 0)
     * @param {Number} b Component B (index 1)
     * @param {Number} c Component C (index 2)
     * @param {Number} d Component D (index 3)
     * @param {Number} tx Component TX (index 4)
     * @param {Number} ty Component TY (index 5)
     * @returns {ArrayType} A new mat2d
     */
    export function fromValues(a: number, b: number, c: number, d: number, tx: number, ty: number): ArrayType;
    /**
     * Set the components of a mat2d to the given values
     *
     * @template {mat2d} T
     * @param {T} out the receiving matrix
     * @param {Number} a Component A (index 0)
     * @param {Number} b Component B (index 1)
     * @param {Number} c Component C (index 2)
     * @param {Number} d Component D (index 3)
     * @param {Number} tx Component TX (index 4)
     * @param {Number} ty Component TY (index 5)
     * @returns {ReturnType.Mat2d<T>} out
     */
    export function set<T extends mat2d>(out: T, a: number, b: number, c: number, d: number, tx: number, ty: number): ReturnType.Mat2d<T>;
    /**
     * Inverts a mat2d
     *
     * @template {mat2d} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat2d} a the source matrix
     * @returns {ReturnType.Mat2d<T> | null} out, or null if source matrix is not invertible
     */
    export function invert<T extends mat2d>(out: T, a: ReadonlyMat2d): ReturnType.Mat2d<T> | null;
    /**
     * Calculates the determinant of a mat2d
     *
     * @param {ReadonlyMat2d} a the source matrix
     * @returns {Number} determinant of a
     */
    export function determinant(a: ReadonlyMat2d): number;
    /**
     * Multiplies two mat2d's
     *
     * @template {mat2d} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat2d} a the first operand
     * @param {ReadonlyMat2d} b the second operand
     * @returns {ReturnType.Mat2d<T>} out
     */
    export function multiply<T extends mat2d>(out: T, a: ReadonlyMat2d, b: ReadonlyMat2d): ReturnType.Mat2d<T>;
    /**
     * Rotates a mat2d by the given angle
     *
     * @template {mat2d} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat2d} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {ReturnType.Mat2d<T>} out
     */
    export function rotate<T extends mat2d>(out: T, a: ReadonlyMat2d, rad: number): ReturnType.Mat2d<T>;
    /**
     * Scales the mat2d by the dimensions in the given vec2
     *
     * @template {mat2d} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat2d} a the matrix to translate
     * @param {ReadonlyVec2} v the vec2 to scale the matrix by
     * @returns {ReturnType.Mat2d<T>} out
     **/
    export function scale<T extends mat2d>(out: T, a: ReadonlyMat2d, v: ReadonlyVec2): ReturnType.Mat2d<T>;
    /**
     * Translates the mat2d by the dimensions in the given vec2
     *
     * @template {mat2d} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat2d} a the matrix to translate
     * @param {ReadonlyVec2} v the vec2 to translate the matrix by
     * @returns {ReturnType.Mat2d<T>} out
     **/
    export function translate<T extends mat2d>(out: T, a: ReadonlyMat2d, v: ReadonlyVec2): ReturnType.Mat2d<T>;
    /**
     * Creates a matrix from a given angle
     * This is equivalent to (but much faster than):
     *
     *     mat2d.identity(dest);
     *     mat2d.rotate(dest, dest, rad);
     *
     * @template {mat2d} T
     * @param {T} out mat2d receiving operation result
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {ReturnType.Mat2d<T>} out
     */
    export function fromRotation<T extends mat2d>(out: T, rad: number): ReturnType.Mat2d<T>;
    /**
     * Creates a matrix from a vector scaling
     * This is equivalent to (but much faster than):
     *
     *     mat2d.identity(dest);
     *     mat2d.scale(dest, dest, vec);
     *
     * @template {mat2d} T
     * @param {T} out mat2d receiving operation result
     * @param {ReadonlyVec2} v Scaling vector
     * @returns {ReturnType.Mat2d<T>} out
     */
    export function fromScaling<T extends mat2d>(out: T, v: ReadonlyVec2): ReturnType.Mat2d<T>;
    /**
     * Creates a matrix from a vector translation
     * This is equivalent to (but much faster than):
     *
     *     mat2d.identity(dest);
     *     mat2d.translate(dest, dest, vec);
     *
     * @template {mat2d} T
     * @param {T} out mat2d receiving operation result
     * @param {ReadonlyVec2} v Translation vector
     * @returns {ReturnType.Mat2d<T>} out
     */
    export function fromTranslation<T extends mat2d>(out: T, v: ReadonlyVec2): ReturnType.Mat2d<T>;
    /**
     * Returns a string representation of a mat2d
     *
     * @param {ReadonlyMat2d} a matrix to represent as a string
     * @returns {String} string representation of the matrix
     */
    export function str(a: ReadonlyMat2d): string;
    /**
     * Returns Frobenius norm of a mat2d
     *
     * @param {ReadonlyMat2d} a the matrix to calculate Frobenius norm of
     * @returns {Number} Frobenius norm
     */
    export function frob(a: ReadonlyMat2d): number;
    /**
     * Adds two mat2d's
     *
     * @template {mat2d} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat2d} a the first operand
     * @param {ReadonlyMat2d} b the second operand
     * @returns {ReturnType.Mat2d<T>} out
     */
    export function add<T extends mat2d>(out: T, a: ReadonlyMat2d, b: ReadonlyMat2d): ReturnType.Mat2d<T>;
    /**
     * Subtracts matrix b from matrix a
     *
     * @template {mat2d} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat2d} a the first operand
     * @param {ReadonlyMat2d} b the second operand
     * @returns {ReturnType.Mat2d<T>} out
     */
    export function subtract<T extends mat2d>(out: T, a: ReadonlyMat2d, b: ReadonlyMat2d): ReturnType.Mat2d<T>;
    /**
     * Multiply each element of the matrix by a scalar.
     *
     * @template {mat2d} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat2d} a the matrix to scale
     * @param {Number} b amount to scale the matrix's elements by
     * @returns {ReturnType.Mat2d<T>} out
     */
    export function multiplyScalar<T extends mat2d>(out: T, a: ReadonlyMat2d, b: number): ReturnType.Mat2d<T>;
    /**
     * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
     *
     * @template {mat2d} T
     * @param {T} out the receiving vector
     * @param {ReadonlyMat2d} a the first operand
     * @param {ReadonlyMat2d} b the second operand
     * @param {Number} scale the amount to scale b's elements by before adding
     * @returns {ReturnType.Mat2d<T>} out
     */
    export function multiplyScalarAndAdd<T extends mat2d>(out: T, a: ReadonlyMat2d, b: ReadonlyMat2d, scale: number): ReturnType.Mat2d<T>;
    /**
     * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
     *
     * @param {ReadonlyMat2d} a The first matrix.
     * @param {ReadonlyMat2d} b The second matrix.
     * @returns {Boolean} True if the matrices are equal, false otherwise.
     */
    export function exactEquals(a: ReadonlyMat2d, b: ReadonlyMat2d): boolean;
    /**
     * Returns whether or not the matrices have approximately the same elements in the same position.
     *
     * @param {ReadonlyMat2d} a The first matrix.
     * @param {ReadonlyMat2d} b The second matrix.
     * @returns {Boolean} True if the matrices are equal, false otherwise.
     */
    export function equals(a: ReadonlyMat2d, b: ReadonlyMat2d): boolean;
    /**
     * Multiplies two mat2d's
     *
     * @template {mat2d} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat2d} a the first operand
     * @param {ReadonlyMat2d} b the second operand
     * @returns {ReturnType.Mat2d<T>} out
     */
    export function mul<T extends mat2d>(out: T, a: ReadonlyMat2d, b: ReadonlyMat2d): ReturnType.Mat2d<T>;
    /**
     * Subtracts matrix b from matrix a
     *
     * @template {mat2d} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat2d} a the first operand
     * @param {ReadonlyMat2d} b the second operand
     * @returns {ReturnType.Mat2d<T>} out
     */
    export function sub<T extends mat2d>(out: T, a: ReadonlyMat2d, b: ReadonlyMat2d): ReturnType.Mat2d<T>;
}
export namespace mat3 {
    /**
     * 3x3 Matrix
     * @module mat3
     */
    /**
     * Creates a new identity mat3
     *
     * @returns {ArrayType} a new 3x3 matrix
     */
    export function create(): ArrayType;
    /**
     * Copies the upper-left 3x3 values into the given mat3.
     *
     * @template {mat3} T
     * @param {T} out the receiving 3x3 matrix
     * @param {ReadonlyMat4} a   the source 4x4 matrix
     * @returns {ReturnType.Mat3<T>} out
     */
    export function fromMat4<T extends mat3>(out: T, a: ReadonlyMat4): ReturnType.Mat3<T>;
    /**
     * Creates a new mat3 initialized with values from an existing matrix
     *
     * @param {ReadonlyMat3} a matrix to clone
     * @returns {ArrayType} a new 3x3 matrix
     */
    export function clone(a: ReadonlyMat3): ArrayType;
    /**
     * Copy the values from one mat3 to another
     *
     * @template {mat3} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat3} a the source matrix
     * @returns {ReturnType.Mat3<T>} out
     */
    export function copy<T extends mat3>(out: T, a: ReadonlyMat3): ReturnType.Mat3<T>;
    /**
     * Create a new mat3 with the given values
     *
     * @param {Number} m00 Component in column 0, row 0 position (index 0)
     * @param {Number} m01 Component in column 0, row 1 position (index 1)
     * @param {Number} m02 Component in column 0, row 2 position (index 2)
     * @param {Number} m10 Component in column 1, row 0 position (index 3)
     * @param {Number} m11 Component in column 1, row 1 position (index 4)
     * @param {Number} m12 Component in column 1, row 2 position (index 5)
     * @param {Number} m20 Component in column 2, row 0 position (index 6)
     * @param {Number} m21 Component in column 2, row 1 position (index 7)
     * @param {Number} m22 Component in column 2, row 2 position (index 8)
     * @returns {ArrayType} A new mat3
     */
    export function fromValues(m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number): ArrayType;
    /**
     * Set the components of a mat3 to the given values
     *
     * @template {mat3} T
     * @param {T} out the receiving matrix
     * @param {Number} m00 Component in column 0, row 0 position (index 0)
     * @param {Number} m01 Component in column 0, row 1 position (index 1)
     * @param {Number} m02 Component in column 0, row 2 position (index 2)
     * @param {Number} m10 Component in column 1, row 0 position (index 3)
     * @param {Number} m11 Component in column 1, row 1 position (index 4)
     * @param {Number} m12 Component in column 1, row 2 position (index 5)
     * @param {Number} m20 Component in column 2, row 0 position (index 6)
     * @param {Number} m21 Component in column 2, row 1 position (index 7)
     * @param {Number} m22 Component in column 2, row 2 position (index 8)
     * @returns {ReturnType.Mat3<T>} out
     */
    export function set<T extends mat3>(out: T, m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number): ReturnType.Mat3<T>;
    /**
     * Set a mat3 to the identity matrix
     *
     * @template {mat3} T
     * @param {T} out the receiving matrix
     * @returns {ReturnType.Mat3<T>} out
     */
    export function identity<T extends mat3>(out: T): ReturnType.Mat3<T>;
    /**
     * Transpose the values of a mat3
     *
     * @template {mat3} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat3} a the source matrix
     * @returns {ReturnType.Mat3<T>} out
     */
    export function transpose<T extends mat3>(out: T, a: ReadonlyMat3): ReturnType.Mat3<T>;
    /**
     * Inverts a mat3
     *
     * @template {mat3} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat3} a the source matrix
     * @returns {ReturnType.Mat3<T> | null} out, or null if source matrix is not invertible
     */
    export function invert<T extends mat3>(out: T, a: ReadonlyMat3): ReturnType.Mat3<T> | null;
    /**
     * Calculates the adjugate of a mat3
     *
     * @template {mat3} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat3} a the source matrix
     * @returns {ReturnType.Mat3<T>} out
     */
    export function adjoint<T extends mat3>(out: T, a: ReadonlyMat3): ReturnType.Mat3<T>;
    /**
     * Calculates the determinant of a mat3
     *
     * @param {ReadonlyMat3} a the source matrix
     * @returns {Number} determinant of a
     */
    export function determinant(a: ReadonlyMat3): number;
    /**
     * Multiplies two mat3's
     *
     * @template {mat3} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat3} a the first operand
     * @param {ReadonlyMat3} b the second operand
     * @returns {ReturnType.Mat3<T>} out
     */
    export function multiply<T extends mat3>(out: T, a: ReadonlyMat3, b: ReadonlyMat3): ReturnType.Mat3<T>;
    /**
     * Translate a mat3 by the given vector
     *
     * @template {mat3} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat3} a the matrix to translate
     * @param {ReadonlyVec2} v vector to translate by
     * @returns {ReturnType.Mat3<T>} out
     */
    export function translate<T extends mat3>(out: T, a: ReadonlyMat3, v: ReadonlyVec2): ReturnType.Mat3<T>;
    /**
     * Rotates a mat3 by the given angle
     *
     * @template {mat3} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat3} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {ReturnType.Mat3<T>} out
     */
    export function rotate<T extends mat3>(out: T, a: ReadonlyMat3, rad: number): ReturnType.Mat3<T>;
    /**
     * Scales the mat3 by the dimensions in the given vec2
     *
     * @template {mat3} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat3} a the matrix to scale
     * @param {ReadonlyVec2} v the vec2 to scale the matrix by
     * @returns {ReturnType.Mat3<T>} out
     **/
    export function scale<T extends mat3>(out: T, a: ReadonlyMat3, v: ReadonlyVec2): ReturnType.Mat3<T>;
    /**
     * Creates a matrix from a vector translation
     * This is equivalent to (but much faster than):
     *
     *     mat3.identity(dest);
     *     mat3.translate(dest, dest, vec);
     *
     * @template {mat3} T
     * @param {T} out mat3 receiving operation result
     * @param {ReadonlyVec2} v Translation vector
     * @returns {ReturnType.Mat3<T>} out
     */
    export function fromTranslation<T extends mat3>(out: T, v: ReadonlyVec2): ReturnType.Mat3<T>;
    /**
     * Creates a matrix from a given angle
     * This is equivalent to (but much faster than):
     *
     *     mat3.identity(dest);
     *     mat3.rotate(dest, dest, rad);
     *
     * @template {mat3} T
     * @param {T} out mat3 receiving operation result
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {ReturnType.Mat3<T>} out
     */
    export function fromRotation<T extends mat3>(out: T, rad: number): ReturnType.Mat3<T>;
    /**
     * Creates a matrix from a vector scaling
     * This is equivalent to (but much faster than):
     *
     *     mat3.identity(dest);
     *     mat3.scale(dest, dest, vec);
     *
     * @template {mat3} T
     * @param {T} out mat3 receiving operation result
     * @param {ReadonlyVec2} v Scaling vector
     * @returns {ReturnType.Mat3<T>} out
     */
    export function fromScaling<T extends mat3>(out: T, v: ReadonlyVec2): ReturnType.Mat3<T>;
    /**
     * Copies the values from a mat2d into a mat3
     *
     * @template {mat3} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat2d} a the matrix to copy
     * @returns {ReturnType.Mat3<T>} out
     **/
    export function fromMat2d<T extends mat3>(out: T, a: ReadonlyMat2d): ReturnType.Mat3<T>;
    /**
     * Calculates a 3x3 matrix from the given quaternion
     *
     * @template {mat3} T
     * @param {T} out mat3 receiving operation result
     * @param {ReadonlyQuat} q Quaternion to create matrix from
     *
     * @returns {ReturnType.Mat3<T>} out
     */
    export function fromQuat<T extends mat3>(out: T, q: ReadonlyQuat): ReturnType.Mat3<T>;
    /**
     * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
     *
     * @template {mat3} T
     * @param {T} out mat3 receiving operation result
     * @param {ReadonlyMat4} a Mat4 to derive the normal matrix from
     *
     * @returns {ReturnType.Mat3<T>} out
     */
    export function normalFromMat4<T extends mat3>(out: T, a: ReadonlyMat4): ReturnType.Mat3<T>;
    /**
     * Generates a 2D projection matrix with the given bounds
     *
     * @template {mat3} T
     * @param {T} out mat3 frustum matrix will be written into
     * @param {number} width Width of your gl context
     * @param {number} height Height of gl context
     * @returns {ReturnType.Mat3<T>} out
     */
    export function projection<T extends mat3>(out: T, width: number, height: number): ReturnType.Mat3<T>;
    /**
     * Returns a string representation of a mat3
     *
     * @param {ReadonlyMat3} a matrix to represent as a string
     * @returns {String} string representation of the matrix
     */
    export function str(a: ReadonlyMat3): string;
    /**
     * Returns Frobenius norm of a mat3
     *
     * @param {ReadonlyMat3} a the matrix to calculate Frobenius norm of
     * @returns {Number} Frobenius norm
     */
    export function frob(a: ReadonlyMat3): number;
    /**
     * Adds two mat3's
     *
     * @template {mat3} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat3} a the first operand
     * @param {ReadonlyMat3} b the second operand
     * @returns {ReturnType.Mat3<T>} out
     */
    export function add<T extends mat3>(out: T, a: ReadonlyMat3, b: ReadonlyMat3): ReturnType.Mat3<T>;
    /**
     * Subtracts matrix b from matrix a
     *
     * @template {mat3} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat3} a the first operand
     * @param {ReadonlyMat3} b the second operand
     * @returns {ReturnType.Mat3<T>} out
     */
    export function subtract<T extends mat3>(out: T, a: ReadonlyMat3, b: ReadonlyMat3): ReturnType.Mat3<T>;
    /**
     * Multiply each element of the matrix by a scalar.
     *
     * @template {mat3} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat3} a the matrix to scale
     * @param {Number} b amount to scale the matrix's elements by
     * @returns {ReturnType.Mat3<T>} out
     */
    export function multiplyScalar<T extends mat3>(out: T, a: ReadonlyMat3, b: number): ReturnType.Mat3<T>;
    /**
     * Adds two mat3's after multiplying each element of the second operand by a scalar value.
     *
     * @template {mat3} T
     * @param {T} out the receiving vector
     * @param {ReadonlyMat3} a the first operand
     * @param {ReadonlyMat3} b the second operand
     * @param {Number} scale the amount to scale b's elements by before adding
     * @returns {ReturnType.Mat3<T>} out
     */
    export function multiplyScalarAndAdd<T extends mat3>(out: T, a: ReadonlyMat3, b: ReadonlyMat3, scale: number): ReturnType.Mat3<T>;
    /**
     * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
     *
     * @param {ReadonlyMat3} a The first matrix.
     * @param {ReadonlyMat3} b The second matrix.
     * @returns {Boolean} True if the matrices are equal, false otherwise.
     */
    export function exactEquals(a: ReadonlyMat3, b: ReadonlyMat3): boolean;
    /**
     * Returns whether or not the matrices have approximately the same elements in the same position.
     *
     * @param {ReadonlyMat3} a The first matrix.
     * @param {ReadonlyMat3} b The second matrix.
     * @returns {Boolean} True if the matrices are equal, false otherwise.
     */
    export function equals(a: ReadonlyMat3, b: ReadonlyMat3): boolean;
    /**
     * Multiplies two mat3's
     *
     * @template {mat3} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat3} a the first operand
     * @param {ReadonlyMat3} b the second operand
     * @returns {ReturnType.Mat3<T>} out
     */
    export function mul<T extends mat3>(out: T, a: ReadonlyMat3, b: ReadonlyMat3): ReturnType.Mat3<T>;
    /**
     * Subtracts matrix b from matrix a
     *
     * @template {mat3} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat3} a the first operand
     * @param {ReadonlyMat3} b the second operand
     * @returns {ReturnType.Mat3<T>} out
     */
    export function sub<T extends mat3>(out: T, a: ReadonlyMat3, b: ReadonlyMat3): ReturnType.Mat3<T>;
}
export namespace mat4 {
    /**
     * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
     * @module mat4
     */
    /**
     * Creates a new identity mat4
     *
     * @returns {ArrayType} a new 4x4 matrix
     */
    export function create(): ArrayType;
    /**
     * Creates a new mat4 initialized with values from an existing matrix
     *
     * @param {ReadonlyMat4} a matrix to clone
     * @returns {ArrayType} a new 4x4 matrix
     */
    export function clone(a: ReadonlyMat4): ArrayType;
    /**
     * Copy the values from one mat4 to another
     *
     * @template {mat4} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat4} a the source matrix
     * @returns {ReturnType.Mat4<T>} out
     */
    export function copy<T extends mat4>(out: T, a: ReadonlyMat4): ReturnType.Mat4<T>;
    /**
     * Create a new mat4 with the given values
     *
     * @param {Number} m00 Component in column 0, row 0 position (index 0)
     * @param {Number} m01 Component in column 0, row 1 position (index 1)
     * @param {Number} m02 Component in column 0, row 2 position (index 2)
     * @param {Number} m03 Component in column 0, row 3 position (index 3)
     * @param {Number} m10 Component in column 1, row 0 position (index 4)
     * @param {Number} m11 Component in column 1, row 1 position (index 5)
     * @param {Number} m12 Component in column 1, row 2 position (index 6)
     * @param {Number} m13 Component in column 1, row 3 position (index 7)
     * @param {Number} m20 Component in column 2, row 0 position (index 8)
     * @param {Number} m21 Component in column 2, row 1 position (index 9)
     * @param {Number} m22 Component in column 2, row 2 position (index 10)
     * @param {Number} m23 Component in column 2, row 3 position (index 11)
     * @param {Number} m30 Component in column 3, row 0 position (index 12)
     * @param {Number} m31 Component in column 3, row 1 position (index 13)
     * @param {Number} m32 Component in column 3, row 2 position (index 14)
     * @param {Number} m33 Component in column 3, row 3 position (index 15)
     * @returns {ArrayType} A new mat4
     */
    export function fromValues(m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number, m30: number, m31: number, m32: number, m33: number): ArrayType;
    /**
     * Set the components of a mat4 to the given values
     *
     * @template {mat4} T
     * @param {T} out the receiving matrix
     * @param {Number} m00 Component in column 0, row 0 position (index 0)
     * @param {Number} m01 Component in column 0, row 1 position (index 1)
     * @param {Number} m02 Component in column 0, row 2 position (index 2)
     * @param {Number} m03 Component in column 0, row 3 position (index 3)
     * @param {Number} m10 Component in column 1, row 0 position (index 4)
     * @param {Number} m11 Component in column 1, row 1 position (index 5)
     * @param {Number} m12 Component in column 1, row 2 position (index 6)
     * @param {Number} m13 Component in column 1, row 3 position (index 7)
     * @param {Number} m20 Component in column 2, row 0 position (index 8)
     * @param {Number} m21 Component in column 2, row 1 position (index 9)
     * @param {Number} m22 Component in column 2, row 2 position (index 10)
     * @param {Number} m23 Component in column 2, row 3 position (index 11)
     * @param {Number} m30 Component in column 3, row 0 position (index 12)
     * @param {Number} m31 Component in column 3, row 1 position (index 13)
     * @param {Number} m32 Component in column 3, row 2 position (index 14)
     * @param {Number} m33 Component in column 3, row 3 position (index 15)
     * @returns {ReturnType.Mat4<T>} out
     */
    export function set<T extends mat4>(out: T, m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number, m30: number, m31: number, m32: number, m33: number): ReturnType.Mat4<T>;
    /**
     * Set a mat4 to the identity matrix
     *
     * @template {mat4} T
     * @param {T} out the receiving matrix
     * @returns {ReturnType.Mat4<T>} out
     */
    export function identity<T extends mat4>(out: T): ReturnType.Mat4<T>;
    /**
     * Transpose the values of a mat4
     *
     * @template {mat4} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat4} a the source matrix
     * @returns {ReturnType.Mat4<T>} out
     */
    export function transpose<T extends mat4>(out: T, a: ReadonlyMat4): ReturnType.Mat4<T>;
    /**
     * Inverts a mat4
     *
     * @template {mat4} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat4} a the source matrix
     * @returns {ReturnType.Mat4<T> | null} out, or null if source matrix is not invertible
     */
    export function invert<T extends mat4>(out: T, a: ReadonlyMat4): ReturnType.Mat4<T> | null;
    /**
     * Calculates the adjugate of a mat4
     *
     * @template {mat4} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat4} a the source matrix
     * @returns {ReturnType.Mat4<T>} out
     */
    export function adjoint<T extends mat4>(out: T, a: ReadonlyMat4): ReturnType.Mat4<T>;
    /**
     * Calculates the determinant of a mat4
     *
     * @param {ReadonlyMat4} a the source matrix
     * @returns {Number} determinant of a
     */
    export function determinant(a: ReadonlyMat4): number;
    /**
     * Multiplies two mat4s
     *
     * @template {mat4} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat4} a the first operand
     * @param {ReadonlyMat4} b the second operand
     * @returns {ReturnType.Mat4<T>} out
     */
    export function multiply<T extends mat4>(out: T, a: ReadonlyMat4, b: ReadonlyMat4): ReturnType.Mat4<T>;
    /**
     * Translate a mat4 by the given vector
     *
     * @template {mat4} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat4} a the matrix to translate
     * @param {ReadonlyVec3} v vector to translate by
     * @returns {ReturnType.Mat4<T>} out
     */
    export function translate<T extends mat4>(out: T, a: ReadonlyMat4, v: ReadonlyVec3): ReturnType.Mat4<T>;
    /**
     * Scales the mat4 by the dimensions in the given vec3 not using vectorization
     *
     * @template {mat4} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat4} a the matrix to scale
     * @param {ReadonlyVec3} v the vec3 to scale the matrix by
     * @returns {ReturnType.Mat4<T>} out
     **/
    export function scale<T extends mat4>(out: T, a: ReadonlyMat4, v: ReadonlyVec3): ReturnType.Mat4<T>;
    /**
     * Rotates a mat4 by the given angle around the given axis
     *
     * @template {mat4} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat4} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @param {ReadonlyVec3} axis the axis to rotate around
     * @returns {ReturnType.Mat4<T>} out
     */
    export function rotate<T extends mat4>(out: T, a: ReadonlyMat4, rad: number, axis: ReadonlyVec3): ReturnType.Mat4<T>;
    /**
     * Rotates a matrix by the given angle around the X axis
     *
     * @template {mat4} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat4} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {ReturnType.Mat4<T>} out
     */
    export function rotateX<T extends mat4>(out: T, a: ReadonlyMat4, rad: number): ReturnType.Mat4<T>;
    /**
     * Rotates a matrix by the given angle around the Y axis
     *
     * @template {mat4} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat4} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {ReturnType.Mat4<T>} out
     */
    export function rotateY<T extends mat4>(out: T, a: ReadonlyMat4, rad: number): ReturnType.Mat4<T>;
    /**
     * Rotates a matrix by the given angle around the Z axis
     *
     * @template {mat4} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat4} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {ReturnType.Mat4<T>} out
     */
    export function rotateZ<T extends mat4>(out: T, a: ReadonlyMat4, rad: number): ReturnType.Mat4<T>;
    /**
     * Creates a matrix from a vector translation
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.translate(dest, dest, vec);
     *
     * @template {mat4} T
     * @param {T} out mat4 receiving operation result
     * @param {ReadonlyVec3} v Translation vector
     * @returns {ReturnType.Mat4<T>} out
     */
    export function fromTranslation<T extends mat4>(out: T, v: ReadonlyVec3): ReturnType.Mat4<T>;
    /**
     * Creates a matrix from a vector scaling
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.scale(dest, dest, vec);
     *
     * @template {mat4} T
     * @param {T} out mat4 receiving operation result
     * @param {ReadonlyVec3} v Scaling vector
     * @returns {ReturnType.Mat4<T>} out
     */
    export function fromScaling<T extends mat4>(out: T, v: ReadonlyVec3): ReturnType.Mat4<T>;
    /**
     * Creates a matrix from a given angle around a given axis
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.rotate(dest, dest, rad, axis);
     *
     * @template {mat4} T
     * @param {T} out mat4 receiving operation result
     * @param {Number} rad the angle to rotate the matrix by
     * @param {ReadonlyVec3} axis the axis to rotate around
     * @returns {ReturnType.Mat4<T>} out
     */
    export function fromRotation<T extends mat4>(out: T, rad: number, axis: ReadonlyVec3): ReturnType.Mat4<T>;
    /**
     * Creates a matrix from the given angle around the X axis
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.rotateX(dest, dest, rad);
     *
     * @template {mat4} T
     * @param {T} out mat4 receiving operation result
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {ReturnType.Mat4<T>} out
     */
    export function fromXRotation<T extends mat4>(out: T, rad: number): ReturnType.Mat4<T>;
    /**
     * Creates a matrix from the given angle around the Y axis
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.rotateY(dest, dest, rad);
     *
     * @template {mat4} T
     * @param {T} out mat4 receiving operation result
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {ReturnType.Mat4<T>} out
     */
    export function fromYRotation<T extends mat4>(out: T, rad: number): ReturnType.Mat4<T>;
    /**
     * Creates a matrix from the given angle around the Z axis
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.rotateZ(dest, dest, rad);
     *
     * @template {mat4} T
     * @param {T} out mat4 receiving operation result
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {ReturnType.Mat4<T>} out
     */
    export function fromZRotation<T extends mat4>(out: T, rad: number): ReturnType.Mat4<T>;
    /**
     * Creates a matrix from a quaternion rotation and vector translation
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.translate(dest, dest, vec);
     *     let quatMat = mat4.create();
     *     mat4.fromQuat(quatMat, quat);
     *     mat4.multiply(dest, dest, quatMat);
     *
     * @template {mat4} T
     * @param {T} out mat4 receiving operation result
     * @param {quat} q Rotation quaternion
     * @param {ReadonlyVec3} v Translation vector
     * @returns {ReturnType.Mat4<T>} out
     */
    export function fromRotationTranslation<T extends mat4>(out: T, q: quat, v: ReadonlyVec3): ReturnType.Mat4<T>;
    /**
     * Creates a new mat4 from a dual quat.
     *
     * @param {mat4} out Matrix
     * @param {ReadonlyQuat2} a Dual Quaternion
     * @returns {ArrayType} mat4 receiving operation result
     */
    export function fromQuat2(out: mat4, a: ReadonlyQuat2): ArrayType;
    /**
     * Returns the translation vector component of a transformation
     *  matrix. If a matrix is built with fromRotationTranslation,
     *  the returned vector will be the same as the translation vector
     *  originally supplied.
     * @param  {vec3} out Vector to receive translation component
     * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
     * @return {vec3} out
     */
    export function getTranslation(out: vec3, mat: ReadonlyMat4): vec3;
    /**
     * Returns the scaling factor component of a transformation
     *  matrix. If a matrix is built with fromRotationTranslationScale
     *  with a normalized Quaternion parameter, the returned vector will be
     *  the same as the scaling vector
     *  originally supplied.
     * @param  {vec3} out Vector to receive scaling factor component
     * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
     * @return {vec3} out
     */
    export function getScaling(out: vec3, mat: ReadonlyMat4): vec3;
    /**
     * Returns a quaternion representing the rotational component
     *  of a transformation matrix. If a matrix is built with
     *  fromRotationTranslation, the returned quaternion will be the
     *  same as the quaternion originally supplied.
     * @param {quat} out Quaternion to receive the rotation component
     * @param {ReadonlyMat4} mat Matrix to be decomposed (input)
     * @return {quat} out
     */
    export function getRotation(out: quat, mat: ReadonlyMat4): quat;
    /**
     * Decomposes a transformation matrix into its rotation, translation
     * and scale components. Returns only the rotation component
     *
     * @param  {quat} out_r Quaternion to receive the rotation component
     * @param  {vec3} out_t Vector to receive the translation vector
     * @param  {vec3} out_s Vector to receive the scaling factor
     * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
     * @returns {ArrayType} out_r
     */
    export function decompose(out_r: quat, out_t: vec3, out_s: vec3, mat: ReadonlyMat4): ArrayType;
    /**
     * Creates a matrix from a quaternion rotation, vector translation and vector scale
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.translate(dest, dest, vec);
     *     let quatMat = mat4.create();
     *     mat4.fromQuat(quatMat, quat);
     *     mat4.multiply(dest, dest, quatMat);
     *     mat4.scale(dest, dest, scale)
     *
     * @template {mat4} T
     * @param {T} out mat4 receiving operation result
     * @param {quat} q Rotation quaternion
     * @param {ReadonlyVec3} v Translation vector
     * @param {ReadonlyVec3} s Scaling vector
     * @returns {ReturnType.Mat4<T>} out
     */
    export function fromRotationTranslationScale<T extends mat4>(out: T, q: quat, v: ReadonlyVec3, s: ReadonlyVec3): ReturnType.Mat4<T>;
    /**
     * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.translate(dest, dest, vec);
     *     mat4.translate(dest, dest, origin);
     *     let quatMat = mat4.create();
     *     mat4.fromQuat(quatMat, quat);
     *     mat4.multiply(dest, dest, quatMat);
     *     mat4.scale(dest, dest, scale)
     *     mat4.translate(dest, dest, negativeOrigin);
     *
     * @template {mat4} T
     * @param {T} out mat4 receiving operation result
     * @param {quat} q Rotation quaternion
     * @param {ReadonlyVec3} v Translation vector
     * @param {ReadonlyVec3} s Scaling vector
     * @param {ReadonlyVec3} o The origin vector around which to scale and rotate
     * @returns {ReturnType.Mat4<T>} out
     */
    export function fromRotationTranslationScaleOrigin<T extends mat4>(out: T, q: quat, v: ReadonlyVec3, s: ReadonlyVec3, o: ReadonlyVec3): ReturnType.Mat4<T>;
    /**
     * Calculates a 4x4 matrix from the given quaternion
     *
     * @template {mat4} T
     * @param {T} out mat4 receiving operation result
     * @param {ReadonlyQuat} q Quaternion to create matrix from
     *
     * @returns {ReturnType.Mat4<T>} out
     */
    export function fromQuat<T extends mat4>(out: T, q: ReadonlyQuat): ReturnType.Mat4<T>;
    /**
     * Generates a frustum matrix with the given bounds
     *
     * @template {mat4} T
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {Number} left Left bound of the frustum
     * @param {Number} right Right bound of the frustum
     * @param {Number} bottom Bottom bound of the frustum
     * @param {Number} top Top bound of the frustum
     * @param {Number} near Near bound of the frustum
     * @param {Number} far Far bound of the frustum
     * @returns {ReturnType.Mat4<T>} out
     */
    export function frustum<T extends mat4>(out: mat4, left: number, right: number, bottom: number, top: number, near: number, far: number): ReturnType.Mat4<T>;
    /**
     * Generates a perspective projection matrix with the given bounds.
     * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
     * which matches WebGL/OpenGL's clip volume.
     * Passing null/undefined/no value for far will generate infinite projection matrix.
     *
     * @template {mat4} T
     * @param {T} out mat4 frustum matrix will be written into
     * @param {number} fovy Vertical field of view in radians
     * @param {number} aspect Aspect ratio. typically viewport width/height
     * @param {number} near Near bound of the frustum
     * @param {number} far Far bound of the frustum, can be null or Infinity
     * @returns {ReturnType.Mat4<T>} out
     */
    export function perspectiveNO<T extends mat4>(out: T, fovy: number, aspect: number, near: number, far: number): ReturnType.Mat4<T>;
    /**
     * Generates a perspective projection matrix suitable for WebGPU with the given bounds.
     * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
     * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
     * Passing null/undefined/no value for far will generate infinite projection matrix.
     *
     * @template {mat4} T
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {number} fovy Vertical field of view in radians
     * @param {number} aspect Aspect ratio. typically viewport width/height
     * @param {number} near Near bound of the frustum
     * @param {number} far Far bound of the frustum, can be null or Infinity
     * @returns {ReturnType.Mat4<T>} out
     */
    export function perspectiveZO<T extends mat4>(out: mat4, fovy: number, aspect: number, near: number, far: number): ReturnType.Mat4<T>;
    /**
     * Generates a perspective projection matrix with the given field of view.
     * This is primarily useful for generating projection matrices to be used
     * with the still experiemental WebVR API.
     *
     * @template {mat4} T
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
     * @param {number} near Near bound of the frustum
     * @param {number} far Far bound of the frustum
     * @returns {ReturnType.Mat4<T>} out
     */
    export function perspectiveFromFieldOfView<T extends mat4>(out: mat4, fov: any, near: number, far: number): ReturnType.Mat4<T>;
    /**
     * Generates a orthogonal projection matrix with the given bounds.
     * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
     * which matches WebGL/OpenGL's clip volume.
     *
     * @template {mat4} T
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {number} left Left bound of the frustum
     * @param {number} right Right bound of the frustum
     * @param {number} bottom Bottom bound of the frustum
     * @param {number} top Top bound of the frustum
     * @param {number} near Near bound of the frustum
     * @param {number} far Far bound of the frustum
     * @returns {ReturnType.Mat4<T>} out
     */
    export function orthoNO<T extends mat4>(out: mat4, left: number, right: number, bottom: number, top: number, near: number, far: number): ReturnType.Mat4<T>;
    /**
     * Generates a orthogonal projection matrix with the given bounds.
     * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
     * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
     *
     * @template {mat4} T
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {number} left Left bound of the frustum
     * @param {number} right Right bound of the frustum
     * @param {number} bottom Bottom bound of the frustum
     * @param {number} top Top bound of the frustum
     * @param {number} near Near bound of the frustum
     * @param {number} far Far bound of the frustum
     * @returns {ReturnType.Mat4<T>} out
     */
    export function orthoZO<T extends mat4>(out: mat4, left: number, right: number, bottom: number, top: number, near: number, far: number): ReturnType.Mat4<T>;
    /**
     * Generates a look-at matrix with the given eye position, focal point, and up axis.
     * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
     *
     * @template {mat4} T
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {ReadonlyVec3} eye Position of the viewer
     * @param {ReadonlyVec3} center Point the viewer is looking at
     * @param {ReadonlyVec3} up vec3 pointing up
     * @returns {ReturnType.Mat4<T>} out
     */
    export function lookAt<T extends mat4>(out: mat4, eye: ReadonlyVec3, center: ReadonlyVec3, up: ReadonlyVec3): ReturnType.Mat4<T>;
    /**
     * Generates a matrix that makes something look at something else.
     *
     * @template {mat4} T
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {ReadonlyVec3} eye Position of the viewer
     * @param {ReadonlyVec3} target Point the viewer is looking at
     * @param {ReadonlyVec3} up vec3 pointing up
     * @returns {ReturnType.Mat4<T>} out
     */
    export function targetTo<T extends mat4>(out: mat4, eye: ReadonlyVec3, target: ReadonlyVec3, up: ReadonlyVec3): ReturnType.Mat4<T>;
    /**
     * Returns a string representation of a mat4
     *
     * @param {ReadonlyMat4} a matrix to represent as a string
     * @returns {String} string representation of the matrix
     */
    export function str(a: ReadonlyMat4): string;
    /**
     * Returns Frobenius norm of a mat4
     *
     * @param {ReadonlyMat4} a the matrix to calculate Frobenius norm of
     * @returns {Number} Frobenius norm
     */
    export function frob(a: ReadonlyMat4): number;
    /**
     * Adds two mat4's
     *
     * @template {mat4} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat4} a the first operand
     * @param {ReadonlyMat4} b the second operand
     * @returns {ReturnType.Mat4<T>} out
     */
    export function add<T extends mat4>(out: T, a: ReadonlyMat4, b: ReadonlyMat4): ReturnType.Mat4<T>;
    /**
     * Subtracts matrix b from matrix a
     *
     * @template {mat4} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat4} a the first operand
     * @param {ReadonlyMat4} b the second operand
     * @returns {ReturnType.Mat4<T>} out
     */
    export function subtract<T extends mat4>(out: T, a: ReadonlyMat4, b: ReadonlyMat4): ReturnType.Mat4<T>;
    /**
     * Multiply each element of the matrix by a scalar.
     *
     * @template {mat4} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat4} a the matrix to scale
     * @param {Number} b amount to scale the matrix's elements by
     * @returns {ReturnType.Mat4<T>} out
     */
    export function multiplyScalar<T extends mat4>(out: T, a: ReadonlyMat4, b: number): ReturnType.Mat4<T>;
    /**
     * Adds two mat4's after multiplying each element of the second operand by a scalar value.
     *
     * @template {mat4} T
     * @param {T} out the receiving vector
     * @param {ReadonlyMat4} a the first operand
     * @param {ReadonlyMat4} b the second operand
     * @param {Number} scale the amount to scale b's elements by before adding
     * @returns {ReturnType.Mat4<T>} out
     */
    export function multiplyScalarAndAdd<T extends mat4>(out: T, a: ReadonlyMat4, b: ReadonlyMat4, scale: number): ReturnType.Mat4<T>;
    /**
     * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
     *
     * @param {ReadonlyMat4} a The first matrix.
     * @param {ReadonlyMat4} b The second matrix.
     * @returns {Boolean} True if the matrices are equal, false otherwise.
     */
    export function exactEquals(a: ReadonlyMat4, b: ReadonlyMat4): boolean;
    /**
     * Returns whether or not the matrices have approximately the same elements in the same position.
     *
     * @param {ReadonlyMat4} a The first matrix.
     * @param {ReadonlyMat4} b The second matrix.
     * @returns {Boolean} True if the matrices are equal, false otherwise.
     */
    export function equals(a: ReadonlyMat4, b: ReadonlyMat4): boolean;
    /**
     * Generates a perspective projection matrix with the given bounds.
     * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
     * which matches WebGL/OpenGL's clip volume.
     * Passing null/undefined/no value for far will generate infinite projection matrix.
     *
     * @template {mat4} T
     * @param {T} out mat4 frustum matrix will be written into
     * @param {number} fovy Vertical field of view in radians
     * @param {number} aspect Aspect ratio. typically viewport width/height
     * @param {number} near Near bound of the frustum
     * @param {number} far Far bound of the frustum, can be null or Infinity
     * @returns {ReturnType.Mat4<T>} out
     */
    export function perspective<T extends mat4>(out: T, fovy: number, aspect: number, near: number, far: number): ReturnType.Mat4<T>;
    /**
     * Generates a orthogonal projection matrix with the given bounds.
     * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
     * which matches WebGL/OpenGL's clip volume.
     *
     * @template {mat4} T
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {number} left Left bound of the frustum
     * @param {number} right Right bound of the frustum
     * @param {number} bottom Bottom bound of the frustum
     * @param {number} top Top bound of the frustum
     * @param {number} near Near bound of the frustum
     * @param {number} far Far bound of the frustum
     * @returns {ReturnType.Mat4<T>} out
     */
    export function ortho<T extends mat4>(out: mat4, left: number, right: number, bottom: number, top: number, near: number, far: number): ReturnType.Mat4<T>;
    /**
     * Multiplies two mat4s
     *
     * @template {mat4} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat4} a the first operand
     * @param {ReadonlyMat4} b the second operand
     * @returns {ReturnType.Mat4<T>} out
     */
    export function mul<T extends mat4>(out: T, a: ReadonlyMat4, b: ReadonlyMat4): ReturnType.Mat4<T>;
    /**
     * Subtracts matrix b from matrix a
     *
     * @template {mat4} T
     * @param {T} out the receiving matrix
     * @param {ReadonlyMat4} a the first operand
     * @param {ReadonlyMat4} b the second operand
     * @returns {ReturnType.Mat4<T>} out
     */
    export function sub<T extends mat4>(out: T, a: ReadonlyMat4, b: ReadonlyMat4): ReturnType.Mat4<T>;
}
export namespace vec3 {
    /**
     * 3 Dimensional Vector
     * @module vec3
     */
    /**
     * Creates a new, empty vec3
     *
     * @returns {ArrayType} a new 3D vector
     */
    export function create(): ArrayType;
    /**
     * Creates a new vec3 initialized with values from an existing vector
     *
     * @param {ReadonlyVec3} a vector to clone
     * @returns {ArrayType} a new 3D vector
     */
    export function clone(a: ReadonlyVec3): ArrayType;
    /**
     * Calculates the length of a vec3
     *
     * @param {ReadonlyVec3} a vector to calculate length of
     * @returns {Number} length of a
     */
    export function length(a: ReadonlyVec3): number;
    /**
     * Creates a new vec3 initialized with the given values
     *
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @returns {ArrayType} a new 3D vector
     */
    export function fromValues(x: number, y: number, z: number): ArrayType;
    /**
     * Copy the values from one vec3 to another
     *
     * @template {vec3} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec3} a the source vector
     * @returns {ReturnType.Vec3<T>} out
     */
    export function copy<T extends vec3>(out: T, a: ReadonlyVec3): ReturnType.Vec3<T>;
    /**
     * Set the components of a vec3 to the given values
     *
     * @template {vec3} T
     * @param {T} out the receiving vector
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @returns {ReturnType.Vec3<T>} out
     */
    export function set<T extends vec3>(out: T, x: number, y: number, z: number): ReturnType.Vec3<T>;
    /**
     * Adds two vec3's
     *
     * @template {vec3} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec3} a the first operand
     * @param {ReadonlyVec3} b the second operand
     * @returns {ReturnType.Vec3<T>} out
     */
    export function add<T extends vec3>(out: T, a: ReadonlyVec3, b: ReadonlyVec3): ReturnType.Vec3<T>;
    /**
     * Subtracts vector b from vector a
     *
     * @template {vec3} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec3} a the first operand
     * @param {ReadonlyVec3} b the second operand
     * @returns {ReturnType.Vec3<T>} out
     */
    export function subtract<T extends vec3>(out: T, a: ReadonlyVec3, b: ReadonlyVec3): ReturnType.Vec3<T>;
    /**
     * Multiplies two vec3's
     *
     * @template {vec3} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec3} a the first operand
     * @param {ReadonlyVec3} b the second operand
     * @returns {ReturnType.Vec3<T>} out
     */
    export function multiply<T extends vec3>(out: T, a: ReadonlyVec3, b: ReadonlyVec3): ReturnType.Vec3<T>;
    /**
     * Divides two vec3's
     *
     * @template {vec3} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec3} a the first operand
     * @param {ReadonlyVec3} b the second operand
     * @returns {ReturnType.Vec3<T>} out
     */
    export function divide<T extends vec3>(out: T, a: ReadonlyVec3, b: ReadonlyVec3): ReturnType.Vec3<T>;
    /**
     * Math.ceil the components of a vec3
     *
     * @template {vec3} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec3} a vector to ceil
     * @returns {ReturnType.Vec3<T>} out
     */
    export function ceil<T extends vec3>(out: T, a: ReadonlyVec3): ReturnType.Vec3<T>;
    /**
     * Math.floor the components of a vec3
     *
     * @template {vec3} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec3} a vector to floor
     * @returns {ReturnType.Vec3<T>} out
     */
    export function floor<T extends vec3>(out: T, a: ReadonlyVec3): ReturnType.Vec3<T>;
    /**
     * Returns the minimum of two vec3's
     *
     * @template {vec3} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec3} a the first operand
     * @param {ReadonlyVec3} b the second operand
     * @returns {ReturnType.Vec3<T>} out
     */
    export function min<T extends vec3>(out: T, a: ReadonlyVec3, b: ReadonlyVec3): ReturnType.Vec3<T>;
    /**
     * Returns the maximum of two vec3's
     *
     * @template {vec3} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec3} a the first operand
     * @param {ReadonlyVec3} b the second operand
     * @returns {ReturnType.Vec3<T>} out
     */
    export function max<T extends vec3>(out: T, a: ReadonlyVec3, b: ReadonlyVec3): ReturnType.Vec3<T>;
    /**
     * symmetric round the components of a vec3
     *
     * @template {vec3} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec3} a vector to round
     * @returns {ReturnType.Vec3<T>} out
     */
    export function round<T extends vec3>(out: T, a: ReadonlyVec3): ReturnType.Vec3<T>;
    /**
     * Scales a vec3 by a scalar number
     *
     * @template {vec3} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec3} a the vector to scale
     * @param {Number} b amount to scale the vector by
     * @returns {ReturnType.Vec3<T>} out
     */
    export function scale<T extends vec3>(out: T, a: ReadonlyVec3, b: number): ReturnType.Vec3<T>;
    /**
     * Adds two vec3's after scaling the second operand by a scalar value
     *
     * @template {vec3} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec3} a the first operand
     * @param {ReadonlyVec3} b the second operand
     * @param {Number} scale the amount to scale b by before adding
     * @returns {ReturnType.Vec3<T>} out
     */
    export function scaleAndAdd<T extends vec3>(out: T, a: ReadonlyVec3, b: ReadonlyVec3, scale: number): ReturnType.Vec3<T>;
    /**
     * Calculates the euclidian distance between two vec3's
     *
     * @param {ReadonlyVec3} a the first operand
     * @param {ReadonlyVec3} b the second operand
     * @returns {Number} distance between a and b
     */
    export function distance(a: ReadonlyVec3, b: ReadonlyVec3): number;
    /**
     * Calculates the squared euclidian distance between two vec3's
     *
     * @param {ReadonlyVec3} a the first operand
     * @param {ReadonlyVec3} b the second operand
     * @returns {Number} squared distance between a and b
     */
    export function squaredDistance(a: ReadonlyVec3, b: ReadonlyVec3): number;
    /**
     * Calculates the squared length of a vec3
     *
     * @param {ReadonlyVec3} a vector to calculate squared length of
     * @returns {Number} squared length of a
     */
    export function squaredLength(a: ReadonlyVec3): number;
    /**
     * Negates the components of a vec3
     *
     * @template {vec3} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec3} a vector to negate
     * @returns {ReturnType.Vec3<T>} out
     */
    export function negate<T extends vec3>(out: T, a: ReadonlyVec3): ReturnType.Vec3<T>;
    /**
     * Returns the inverse of the components of a vec3
     *
     * @template {vec3} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec3} a vector to invert
     * @returns {ReturnType.Vec3<T>} out
     */
    export function inverse<T extends vec3>(out: T, a: ReadonlyVec3): ReturnType.Vec3<T>;
    /**
     * Normalize a vec3
     *
     * @template {vec3} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec3} a vector to normalize
     * @returns {ReturnType.Vec3<T>} out
     */
    export function normalize<T extends vec3>(out: T, a: ReadonlyVec3): ReturnType.Vec3<T>;
    /**
     * Calculates the dot product of two vec3's
     *
     * @param {ReadonlyVec3} a the first operand
     * @param {ReadonlyVec3} b the second operand
     * @returns {Number} dot product of a and b
     */
    export function dot(a: ReadonlyVec3, b: ReadonlyVec3): number;
    /**
     * Computes the cross product of two vec3's
     *
     * @template {vec3} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec3} a the first operand
     * @param {ReadonlyVec3} b the second operand
     * @returns {ReturnType.Vec3<T>} out
     */
    export function cross<T extends vec3>(out: T, a: ReadonlyVec3, b: ReadonlyVec3): ReturnType.Vec3<T>;
    /**
     * Performs a linear interpolation between two vec3's
     *
     * @template {vec3} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec3} a the first operand
     * @param {ReadonlyVec3} b the second operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {ReturnType.Vec3<T>} out
     */
    export function lerp<T extends vec3>(out: T, a: ReadonlyVec3, b: ReadonlyVec3, t: number): ReturnType.Vec3<T>;
    /**
     * Performs a spherical linear interpolation between two vec3's
     *
     * @template {vec3} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec3} a the first operand
     * @param {ReadonlyVec3} b the second operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {ReturnType.Vec3<T>} out
     */
    export function slerp<T extends vec3>(out: T, a: ReadonlyVec3, b: ReadonlyVec3, t: number): ReturnType.Vec3<T>;
    /**
     * Performs a hermite interpolation with two control points
     *
     * @template {vec3} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec3} a the first operand
     * @param {ReadonlyVec3} b the second operand
     * @param {ReadonlyVec3} c the third operand
     * @param {ReadonlyVec3} d the fourth operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {ReturnType.Vec3<T>} out
     */
    export function hermite<T extends vec3>(out: T, a: ReadonlyVec3, b: ReadonlyVec3, c: ReadonlyVec3, d: ReadonlyVec3, t: number): ReturnType.Vec3<T>;
    /**
     * Performs a bezier interpolation with two control points
     *
     * @template {vec3} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec3} a the first operand
     * @param {ReadonlyVec3} b the second operand
     * @param {ReadonlyVec3} c the third operand
     * @param {ReadonlyVec3} d the fourth operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {ReturnType.Vec3<T>} out
     */
    export function bezier<T extends vec3>(out: T, a: ReadonlyVec3, b: ReadonlyVec3, c: ReadonlyVec3, d: ReadonlyVec3, t: number): ReturnType.Vec3<T>;
    /**
     * Generates a random vector with the given scale
     *
     * @template {vec3} T
     * @param {T} out the receiving vector
     * @param {Number} [scale] Length of the resulting vector. If omitted, a unit vector will be returned
     * @returns {ReturnType.Vec3<T>} out
     */
    export function random<T extends vec3>(out: T, scale?: number): ReturnType.Vec3<T>;
    /**
     * Transforms the vec3 with a mat4.
     * 4th vector component is implicitly '1'
     *
     * @template {vec3} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec3} a the vector to transform
     * @param {ReadonlyMat4} m matrix to transform with
     * @returns {ReturnType.Vec3<T>} out
     */
    export function transformMat4<T extends vec3>(out: T, a: ReadonlyVec3, m: ReadonlyMat4): ReturnType.Vec3<T>;
    /**
     * Transforms the vec3 with a mat3.
     *
     * @template {vec3} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec3} a the vector to transform
     * @param {ReadonlyMat3} m the 3x3 matrix to transform with
     * @returns {ReturnType.Vec3<T>} out
     */
    export function transformMat3<T extends vec3>(out: T, a: ReadonlyVec3, m: ReadonlyMat3): ReturnType.Vec3<T>;
    /**
     * Transforms the vec3 with a quat
     * Can also be used for dual quaternions. (Multiply it with the real part)
     *
     * @template {vec3} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec3} a the vector to transform
     * @param {ReadonlyQuat} q normalized quaternion to transform with
     * @returns {ReturnType.Vec3<T>} out
     */
    export function transformQuat<T extends vec3>(out: T, a: ReadonlyVec3, q: ReadonlyQuat): ReturnType.Vec3<T>;
    /**
     * Rotate a 3D vector around the x-axis
     * @template {vec3} T
     * @param {T} out The receiving vec3
     * @param {ReadonlyVec3} a The vec3 point to rotate
     * @param {ReadonlyVec3} b The origin of the rotation
     * @param {Number} rad The angle of rotation in radians
     * @returns {ReturnType.Vec3<T>} out
     */
    export function rotateX<T extends vec3>(out: T, a: ReadonlyVec3, b: ReadonlyVec3, rad: number): ReturnType.Vec3<T>;
    /**
     * Rotate a 3D vector around the y-axis
     * @template {vec3} T
     * @param {T} out The receiving vec3
     * @param {ReadonlyVec3} a The vec3 point to rotate
     * @param {ReadonlyVec3} b The origin of the rotation
     * @param {Number} rad The angle of rotation in radians
     * @returns {ReturnType.Vec3<T>} out
     */
    export function rotateY<T extends vec3>(out: T, a: ReadonlyVec3, b: ReadonlyVec3, rad: number): ReturnType.Vec3<T>;
    /**
     * Rotate a 3D vector around the z-axis
     * @template {vec3} T
     * @param {T} out The receiving vec3
     * @param {ReadonlyVec3} a The vec3 point to rotate
     * @param {ReadonlyVec3} b The origin of the rotation
     * @param {Number} rad The angle of rotation in radians
     * @returns {ReturnType.Vec3<T>} out
     */
    export function rotateZ<T extends vec3>(out: T, a: ReadonlyVec3, b: ReadonlyVec3, rad: number): ReturnType.Vec3<T>;
    /**
     * Get the angle between two 3D vectors
     * @param {ReadonlyVec3} a The first operand
     * @param {ReadonlyVec3} b The second operand
     * @returns {Number} The angle in radians
     */
    export function angle(a: ReadonlyVec3, b: ReadonlyVec3): number;
    /**
     * Set the components of a vec3 to zero
     *
     * @template {vec3} T
     * @param {T} out the receiving vector
     * @returns {ReturnType.Vec3<T>} out
     */
    export function zero<T extends vec3>(out: T): ReturnType.Vec3<T>;
    /**
     * Returns a string representation of a vector
     *
     * @param {ReadonlyVec3} a vector to represent as a string
     * @returns {String} string representation of the vector
     */
    export function str(a: ReadonlyVec3): string;
    /**
     * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
     *
     * @param {ReadonlyVec3} a The first vector.
     * @param {ReadonlyVec3} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */
    export function exactEquals(a: ReadonlyVec3, b: ReadonlyVec3): boolean;
    /**
     * Returns whether or not the vectors have approximately the same elements in the same position.
     *
     * @param {ReadonlyVec3} a The first vector.
     * @param {ReadonlyVec3} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */
    export function equals(a: ReadonlyVec3, b: ReadonlyVec3): boolean;
    /**
     * Subtracts vector b from vector a
     *
     * @template {vec3} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec3} a the first operand
     * @param {ReadonlyVec3} b the second operand
     * @returns {ReturnType.Vec3<T>} out
     */
    export function sub<T extends vec3>(out: T, a: ReadonlyVec3, b: ReadonlyVec3): ReturnType.Vec3<T>;
    /**
     * Multiplies two vec3's
     *
     * @template {vec3} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec3} a the first operand
     * @param {ReadonlyVec3} b the second operand
     * @returns {ReturnType.Vec3<T>} out
     */
    export function mul<T extends vec3>(out: T, a: ReadonlyVec3, b: ReadonlyVec3): ReturnType.Vec3<T>;
    /**
     * Divides two vec3's
     *
     * @template {vec3} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec3} a the first operand
     * @param {ReadonlyVec3} b the second operand
     * @returns {ReturnType.Vec3<T>} out
     */
    export function div<T extends vec3>(out: T, a: ReadonlyVec3, b: ReadonlyVec3): ReturnType.Vec3<T>;
    /**
     * Calculates the euclidian distance between two vec3's
     *
     * @param {ReadonlyVec3} a the first operand
     * @param {ReadonlyVec3} b the second operand
     * @returns {Number} distance between a and b
     */
    export function dist(a: ReadonlyVec3, b: ReadonlyVec3): number;
    /**
     * Calculates the squared euclidian distance between two vec3's
     *
     * @param {ReadonlyVec3} a the first operand
     * @param {ReadonlyVec3} b the second operand
     * @returns {Number} squared distance between a and b
     */
    export function sqrDist(a: ReadonlyVec3, b: ReadonlyVec3): number;
    /**
     * Calculates the length of a vec3
     *
     * @param {ReadonlyVec3} a vector to calculate length of
     * @returns {Number} length of a
     */
    export function len(a: ReadonlyVec3): number;
    /**
     * Calculates the squared length of a vec3
     *
     * @param {ReadonlyVec3} a vector to calculate squared length of
     * @returns {Number} squared length of a
     */
    export function sqrLen(a: ReadonlyVec3): number;
    export function forEach(a: any, stride: any, offset: any, count: any, fn: any, arg: any): any;
}
export namespace vec4 {
    /**
     * 4 Dimensional Vector
     * @module vec4
    */
    /**
     * Creates a new, empty vec4
     *
     * @returns {ArrayType} a new 4D vector
     */
    export function create(): ArrayType;
    /**
     * Creates a new vec4 initialized with values from an existing vector
     *
     * @param {ReadonlyVec4} a vector to clone
     * @returns {ArrayType} a new 4D vector
     */
    export function clone(a: ReadonlyVec4): ArrayType;
    /**
     * Creates a new vec4 initialized with the given values
     *
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @param {Number} w W component
     * @returns {ArrayType} a new 4D vector
     */
    export function fromValues(x: number, y: number, z: number, w: number): ArrayType;
    /**
     * Copy the values from one vec4 to another
     *
     * @template {vec4} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec4} a the source vector
     * @returns {ReturnType.Vec4<T>} out
     */
    export function copy<T extends vec4>(out: T, a: ReadonlyVec4): ReturnType.Vec4<T>;
    /**
     * Set the components of a vec4 to the given values
     *
     * @template {vec4} T
     * @param {T} out the receiving vector
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @param {Number} w W component
     * @returns {ReturnType.Vec4<T>} out
     */
    export function set<T extends vec4>(out: T, x: number, y: number, z: number, w: number): ReturnType.Vec4<T>;
    /**
     * Adds two vec4's
     *
     * @template {vec4} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec4} a the first operand
     * @param {ReadonlyVec4} b the second operand
     * @returns {ReturnType.Vec4<T>} out
     */
    export function add<T extends vec4>(out: T, a: ReadonlyVec4, b: ReadonlyVec4): ReturnType.Vec4<T>;
    /**
     * Subtracts vector b from vector a
     *
     * @template {vec4} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec4} a the first operand
     * @param {ReadonlyVec4} b the second operand
     * @returns {ReturnType.Vec4<T>} out
     */
    export function subtract<T extends vec4>(out: T, a: ReadonlyVec4, b: ReadonlyVec4): ReturnType.Vec4<T>;
    /**
     * Multiplies two vec4's
     *
     * @template {vec4} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec4} a the first operand
     * @param {ReadonlyVec4} b the second operand
     * @returns {ReturnType.Vec4<T>} out
     */
    export function multiply<T extends vec4>(out: T, a: ReadonlyVec4, b: ReadonlyVec4): ReturnType.Vec4<T>;
    /**
     * Divides two vec4's
     *
     * @template {vec4} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec4} a the first operand
     * @param {ReadonlyVec4} b the second operand
     * @returns {ReturnType.Vec4<T>} out
     */
    export function divide<T extends vec4>(out: T, a: ReadonlyVec4, b: ReadonlyVec4): ReturnType.Vec4<T>;
    /**
     * Math.ceil the components of a vec4
     *
     * @template {vec4} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec4} a vector to ceil
     * @returns {ReturnType.Vec4<T>} out
     */
    export function ceil<T extends vec4>(out: T, a: ReadonlyVec4): ReturnType.Vec4<T>;
    /**
     * Math.floor the components of a vec4
     *
     * @template {vec4} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec4} a vector to floor
     * @returns {ReturnType.Vec4<T>} out
     */
    export function floor<T extends vec4>(out: T, a: ReadonlyVec4): ReturnType.Vec4<T>;
    /**
     * Returns the minimum of two vec4's
     *
     * @template {vec4} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec4} a the first operand
     * @param {ReadonlyVec4} b the second operand
     * @returns {ReturnType.Vec4<T>} out
     */
    export function min<T extends vec4>(out: T, a: ReadonlyVec4, b: ReadonlyVec4): ReturnType.Vec4<T>;
    /**
     * Returns the maximum of two vec4's
     *
     * @template {vec4} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec4} a the first operand
     * @param {ReadonlyVec4} b the second operand
     * @returns {ReturnType.Vec4<T>} out
     */
    export function max<T extends vec4>(out: T, a: ReadonlyVec4, b: ReadonlyVec4): ReturnType.Vec4<T>;
    /**
     * symmetric round the components of a vec4
     *
     * @template {vec4} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec4} a vector to round
     * @returns {ReturnType.Vec4<T>} out
     */
    export function round<T extends vec4>(out: T, a: ReadonlyVec4): ReturnType.Vec4<T>;
    /**
     * Scales a vec4 by a scalar number
     *
     * @template {vec4} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec4} a the vector to scale
     * @param {Number} b amount to scale the vector by
     * @returns {ReturnType.Vec4<T>} out
     */
    export function scale<T extends vec4>(out: T, a: ReadonlyVec4, b: number): ReturnType.Vec4<T>;
    /**
     * Adds two vec4's after scaling the second operand by a scalar value
     *
     * @template {vec4} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec4} a the first operand
     * @param {ReadonlyVec4} b the second operand
     * @param {Number} scale the amount to scale b by before adding
     * @returns {ReturnType.Vec4<T>} out
     */
    export function scaleAndAdd<T extends vec4>(out: T, a: ReadonlyVec4, b: ReadonlyVec4, scale: number): ReturnType.Vec4<T>;
    /**
     * Calculates the euclidian distance between two vec4's
     *
     * @param {ReadonlyVec4} a the first operand
     * @param {ReadonlyVec4} b the second operand
     * @returns {Number} distance between a and b
     */
    export function distance(a: ReadonlyVec4, b: ReadonlyVec4): number;
    /**
     * Calculates the squared euclidian distance between two vec4's
     *
     * @param {ReadonlyVec4} a the first operand
     * @param {ReadonlyVec4} b the second operand
     * @returns {Number} squared distance between a and b
     */
    export function squaredDistance(a: ReadonlyVec4, b: ReadonlyVec4): number;
    /**
     * Calculates the length of a vec4
     *
     * @param {ReadonlyVec4} a vector to calculate length of
     * @returns {Number} length of a
     */
    export function length(a: ReadonlyVec4): number;
    /**
     * Calculates the squared length of a vec4
     *
     * @param {ReadonlyVec4} a vector to calculate squared length of
     * @returns {Number} squared length of a
     */
    export function squaredLength(a: ReadonlyVec4): number;
    /**
     * Negates the components of a vec4
     *
     * @template {vec4} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec4} a vector to negate
     * @returns {ReturnType.Vec4<T>} out
     */
    export function negate<T extends vec4>(out: T, a: ReadonlyVec4): ReturnType.Vec4<T>;
    /**
     * Returns the inverse of the components of a vec4
     *
     * @template {vec4} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec4} a vector to invert
     * @returns {ReturnType.Vec4<T>} out
     */
    export function inverse<T extends vec4>(out: T, a: ReadonlyVec4): ReturnType.Vec4<T>;
    /**
     * Normalize a vec4
     *
     * @template {vec4} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec4} a vector to normalize
     * @returns {ReturnType.Vec4<T>} out
     */
    export function normalize<T extends vec4>(out: T, a: ReadonlyVec4): ReturnType.Vec4<T>;
    /**
     * Calculates the dot product of two vec4's
     *
     * @param {ReadonlyVec4} a the first operand
     * @param {ReadonlyVec4} b the second operand
     * @returns {Number} dot product of a and b
     */
    export function dot(a: ReadonlyVec4, b: ReadonlyVec4): number;
    /**
     * Returns the cross-product of three vectors in a 4-dimensional space
     *
     * @template {vec4} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec4} u the first vector
     * @param {ReadonlyVec4} v the second vector
     * @param {ReadonlyVec4} w the third vector
     * @returns {ReturnType.Vec4<T>} result
     */
    export function cross<T extends vec4>(out: T, u: ReadonlyVec4, v: ReadonlyVec4, w: ReadonlyVec4): ReturnType.Vec4<T>;
    /**
     * Performs a linear interpolation between two vec4's
     *
     * @template {vec4} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec4} a the first operand
     * @param {ReadonlyVec4} b the second operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {ReturnType.Vec4<T>} out
     */
    export function lerp<T extends vec4>(out: T, a: ReadonlyVec4, b: ReadonlyVec4, t: number): ReturnType.Vec4<T>;
    /**
     * Generates a random vector with the given scale
     *
     * @template {vec4} T
     * @param {T} out the receiving vector
     * @param {Number} [scale] Length of the resulting vector. If omitted, a unit vector will be returned
     * @returns {ReturnType.Vec4<T>} out
     */
    export function random<T extends vec4>(out: T, scale?: number): ReturnType.Vec4<T>;
    /**
     * Transforms the vec4 with a mat4.
     *
     * @template {vec4} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec4} a the vector to transform
     * @param {ReadonlyMat4} m matrix to transform with
     * @returns {ReturnType.Vec4<T>} out
     */
    export function transformMat4<T extends vec4>(out: T, a: ReadonlyVec4, m: ReadonlyMat4): ReturnType.Vec4<T>;
    /**
     * Transforms the vec4 with a quat
     *
     * @template {vec4} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec4} a the vector to transform
     * @param {ReadonlyQuat} q normalized quaternion to transform with
     * @returns {ReturnType.Vec4<T>} out
     */
    export function transformQuat<T extends vec4>(out: T, a: ReadonlyVec4, q: ReadonlyQuat): ReturnType.Vec4<T>;
    /**
     * Set the components of a vec4 to zero
     *
     * @template {vec4} T
     * @param {T} out the receiving vector
     * @returns {ReturnType.Vec4<T>} out
     */
    export function zero<T extends vec4>(out: T): ReturnType.Vec4<T>;
    /**
     * Returns a string representation of a vector
     *
     * @param {ReadonlyVec4} a vector to represent as a string
     * @returns {String} string representation of the vector
     */
    export function str(a: ReadonlyVec4): string;
    /**
     * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
     *
     * @param {ReadonlyVec4} a The first vector.
     * @param {ReadonlyVec4} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */
    export function exactEquals(a: ReadonlyVec4, b: ReadonlyVec4): boolean;
    /**
     * Returns whether or not the vectors have approximately the same elements in the same position.
     *
     * @param {ReadonlyVec4} a The first vector.
     * @param {ReadonlyVec4} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */
    export function equals(a: ReadonlyVec4, b: ReadonlyVec4): boolean;
    /**
     * Subtracts vector b from vector a
     *
     * @template {vec4} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec4} a the first operand
     * @param {ReadonlyVec4} b the second operand
     * @returns {ReturnType.Vec4<T>} out
     */
    export function sub<T extends vec4>(out: T, a: ReadonlyVec4, b: ReadonlyVec4): ReturnType.Vec4<T>;
    /**
     * Multiplies two vec4's
     *
     * @template {vec4} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec4} a the first operand
     * @param {ReadonlyVec4} b the second operand
     * @returns {ReturnType.Vec4<T>} out
     */
    export function mul<T extends vec4>(out: T, a: ReadonlyVec4, b: ReadonlyVec4): ReturnType.Vec4<T>;
    /**
     * Divides two vec4's
     *
     * @template {vec4} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec4} a the first operand
     * @param {ReadonlyVec4} b the second operand
     * @returns {ReturnType.Vec4<T>} out
     */
    export function div<T extends vec4>(out: T, a: ReadonlyVec4, b: ReadonlyVec4): ReturnType.Vec4<T>;
    /**
     * Calculates the euclidian distance between two vec4's
     *
     * @param {ReadonlyVec4} a the first operand
     * @param {ReadonlyVec4} b the second operand
     * @returns {Number} distance between a and b
     */
    export function dist(a: ReadonlyVec4, b: ReadonlyVec4): number;
    /**
     * Calculates the squared euclidian distance between two vec4's
     *
     * @param {ReadonlyVec4} a the first operand
     * @param {ReadonlyVec4} b the second operand
     * @returns {Number} squared distance between a and b
     */
    export function sqrDist(a: ReadonlyVec4, b: ReadonlyVec4): number;
    /**
     * Calculates the length of a vec4
     *
     * @param {ReadonlyVec4} a vector to calculate length of
     * @returns {Number} length of a
     */
    export function len(a: ReadonlyVec4): number;
    /**
     * Calculates the squared length of a vec4
     *
     * @param {ReadonlyVec4} a vector to calculate squared length of
     * @returns {Number} squared length of a
     */
    export function sqrLen(a: ReadonlyVec4): number;
    export function forEach(a: any, stride: any, offset: any, count: any, fn: any, arg: any): any;
}
export namespace quat {
    /**
     * Quaternion in the format XYZW
     * @module quat
     */
    /**
     * Creates a new identity quat
     *
     * @returns {ReturnType.Quat<ArrayType>} a new quaternion
     */
    export function create(): ReturnType.Quat<ArrayType>;
    /**
     * Set a quat to the identity quaternion
     *
     * @template {quat} T
     * @param {T} out the receiving quaternion
     * @returns {ReturnType.Quat<T>} out
     */
    export function identity<T_1 extends quat>(out: T_1): ReturnType.Quat<T_1>;
    /**
     * Sets a quat from the given angle and rotation axis,
     * then returns it.
     *
     * @template {quat} T
     * @param {T} out the receiving quaternion
     * @param {ReadonlyVec3} axis the axis around which to rotate
     * @param {Number} rad the angle in radians
     * @returns {ReturnType.Quat<T>} out
     **/
    export function setAxisAngle<T_1 extends quat>(out: T_1, axis: ReadonlyVec3, rad: number): ReturnType.Quat<T_1>;
    /**
     * Gets the rotation axis and angle for a given
     *  quaternion. If a quaternion is created with
     *  setAxisAngle, this method will return the same
     *  values as providied in the original parameter list
     *  OR functionally equivalent values.
     * Example: The quaternion formed by axis [0, 0, 1] and
     *  angle -90 is the same as the quaternion formed by
     *  [0, 0, 1] and 270. This method favors the latter.
     * @param  {vec3} out_axis  Vector receiving the axis of rotation
     * @param  {ReadonlyQuat} q     Quaternion to be decomposed
     * @return {Number}     Angle, in radians, of the rotation
     */
    export function getAxisAngle(out_axis: vec3, q: ReadonlyQuat): number;
    /**
     * Gets the angular distance between two unit quaternions
     *
     * @param  {ReadonlyQuat} a     Origin unit quaternion
     * @param  {ReadonlyQuat} b     Destination unit quaternion
     * @return {Number}     Angle, in radians, between the two quaternions
     */
    export function getAngle(a: ReadonlyQuat, b: ReadonlyQuat): number;
    /**
     * Multiplies two quat's
     *
     * @template {quat} T
     * @param {T} out the receiving quaternion
     * @param {ReadonlyQuat} a the first operand
     * @param {ReadonlyQuat} b the second operand
     * @returns {ReturnType.Quat<T>} out
     */
    export function multiply<T_1 extends quat>(out: T_1, a: ReadonlyQuat, b: ReadonlyQuat): ReturnType.Quat<T_1>;
    /**
     * Rotates a quaternion by the given angle about the X axis
     *
     * @template {quat} T
     * @param {T} out quat receiving operation result
     * @param {ReadonlyQuat} a quat to rotate
     * @param {number} rad angle (in radians) to rotate
     * @returns {ReturnType.Quat<T>} out
     */
    export function rotateX<T_1 extends quat>(out: T_1, a: ReadonlyQuat, rad: number): ReturnType.Quat<T_1>;
    /**
     * Rotates a quaternion by the given angle about the Y axis
     *
     * @template {quat} T
     * @param {T} out quat receiving operation result
     * @param {ReadonlyQuat} a quat to rotate
     * @param {number} rad angle (in radians) to rotate
     * @returns {ReturnType.Quat<T>} out
     */
    export function rotateY<T_1 extends quat>(out: T_1, a: ReadonlyQuat, rad: number): ReturnType.Quat<T_1>;
    /**
     * Rotates a quaternion by the given angle about the Z axis
     *
     * @template {quat} T
     * @param {T} out quat receiving operation result
     * @param {ReadonlyQuat} a quat to rotate
     * @param {number} rad angle (in radians) to rotate
     * @returns {ReturnType.Quat<T>} out
     */
    export function rotateZ<T_1 extends quat>(out: T_1, a: ReadonlyQuat, rad: number): ReturnType.Quat<T_1>;
    /**
     * Calculates the W component of a quat from the X, Y, and Z components.
     * Assumes that quaternion is 1 unit in length.
     * Any existing W component will be ignored.
     *
     * @template {quat} T
     * @param {T} out the receiving quaternion
     * @param {ReadonlyQuat} a quat to calculate W component of
     * @returns {ReturnType.Quat<T>} out
     */
    export function calculateW<T_1 extends quat>(out: T_1, a: ReadonlyQuat): ReturnType.Quat<T_1>;
    /**
     * Calculate the exponential of a unit quaternion.
     *
     * @template {quat} T
     * @param {T} out the receiving quaternion
     * @param {ReadonlyQuat} a quat to calculate the exponential of
     * @returns {ReturnType.Quat<T>} out
     */
    export function exp<T_1 extends quat>(out: T_1, a: ReadonlyQuat): ReturnType.Quat<T_1>;
    /**
     * Calculate the natural logarithm of a unit quaternion.
     *
     * @template {quat} T
     * @param {T} out the receiving quaternion
     * @param {ReadonlyQuat} a quat to calculate the exponential of
     * @returns {ReturnType.Quat<T>} out
     */
    export function ln<T_1 extends quat>(out: T_1, a: ReadonlyQuat): ReturnType.Quat<T_1>;
    /**
     * Calculate the scalar power of a unit quaternion.
     *
     * @template {quat} T
     * @param {T} out the receiving quaternion
     * @param {ReadonlyQuat} a quat to calculate the exponential of
     * @param {Number} b amount to scale the quaternion by
     * @returns {ReturnType.Quat<T>} out
     */
    export function pow<T_1 extends quat>(out: T_1, a: ReadonlyQuat, b: number): ReturnType.Quat<T_1>;
    /**
     * Performs a spherical linear interpolation between two quat
     *
     * @template {quat} T
     * @param {T} out the receiving quaternion
     * @param {ReadonlyQuat} a the first operand
     * @param {ReadonlyQuat} b the second operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {ReturnType.Quat<T>} out
     */
    export function slerp<T_1 extends quat>(out: T_1, a: ReadonlyQuat, b: ReadonlyQuat, t: number): ReturnType.Quat<T_1>;
    /**
     * Generates a random unit quaternion
     *
     * @template {quat} T
     * @param {T} out the receiving quaternion
     * @returns {ReturnType.Quat<T>} out
     */
    export function random<T_1 extends quat>(out: T_1): ReturnType.Quat<T_1>;
    /**
     * Calculates the inverse of a quat
     *
     * @template {quat} T
     * @param {T} out the receiving quaternion
     * @param {ReadonlyQuat} a quat to calculate inverse of
     * @returns {ReturnType.Quat<T>} out
     */
    export function invert<T_1 extends quat>(out: T_1, a: ReadonlyQuat): ReturnType.Quat<T_1>;
    /**
     * Calculates the conjugate of a quat
     * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
     *
     * @template {quat} T
     * @param {T} out the receiving quaternion
     * @param {ReadonlyQuat} a quat to calculate conjugate of
     * @returns {ReturnType.Quat<T>} out
     */
    export function conjugate<T_1 extends quat>(out: T_1, a: ReadonlyQuat): ReturnType.Quat<T_1>;
    /**
     * Creates a quaternion from the given 3x3 rotation matrix.
     *
     * NOTE: The resultant quaternion is not normalized, so you should be sure
     * to renormalize the quaternion yourself where necessary.
     *
     * @template {quat} T
     * @param {T} out the receiving quaternion
     * @param {ReadonlyMat3} m rotation matrix
     * @returns {ReturnType.Quat<T>} out
     * @function
     */
    export function fromMat3<T_1 extends quat>(out: T_1, m: ReadonlyMat3): ReturnType.Quat<T_1>;
    /**
     * Creates a quaternion from the given euler angle x, y, z using the provided intrinsic order for the conversion.
     *
     * @template {quat} T
     * @param {T} out the receiving quaternion
     * @param {Number} x Angle to rotate around X axis in degrees.
     * @param {Number} y Angle to rotate around Y axis in degrees.
     * @param {Number} z Angle to rotate around Z axis in degrees.
     * @param {'xyz'|'xzy'|'yxz'|'yzx'|'zxy'|'zyx'} order Intrinsic order for conversion, default is zyx.
     * @returns {ReturnType.Quat<T>} out
     * @function
     */
    export function fromEuler<T_1 extends quat>(out: T_1, x: number, y: number, z: number, order?: "xyz" | "xzy" | "yxz" | "yzx" | "zxy" | "zyx"): ReturnType.Quat<T_1>;
    /**
     * Returns a string representation of a quaternion
     *
     * @param {ReadonlyQuat} a vector to represent as a string
     * @returns {String} string representation of the vector
     */
    export function str(a: ReadonlyQuat): string;
    /**
     * Returns whether or not the quaternions point approximately to the same direction.
     *
     * Both quaternions are assumed to be unit length.
     *
     * @param {ReadonlyQuat} a The first unit quaternion.
     * @param {ReadonlyQuat} b The second unit quaternion.
     * @returns {Boolean} True if the quaternions are equal, false otherwise.
     */
    export function equals(a: ReadonlyQuat, b: ReadonlyQuat): boolean;
    /**
     * Creates a new quat initialized with values from an existing quaternion
     *
     * @param {ReadonlyQuat} a quaternion to clone
     * @returns {ReturnType.Quat<ArrayType>} a new quaternion
     * @function
     */
    export const clone: typeof vec4.clone;
    /**
     * Creates a new quat initialized with the given values
     *
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @param {Number} w W component
     * @returns {ReturnType.Quat<ArrayType>} a new quaternion
     * @function
     */
    export const fromValues: typeof vec4.fromValues;
    /**
     * Copy the values from one quat to another
     *
     * @template {quat} T
     * @param {T} out the receiving quaternion
     * @param {ReadonlyQuat} a the source quaternion
     * @returns {ReturnType.Quat<T>} out
     * @function
     */
    export const copy: typeof vec4.copy;
    /**
     * Set the components of a quat to the given values
     *
     * @template {quat} T
     * @param {T} out the receiving quaternion
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @param {Number} w W component
     * @returns {ReturnType.Quat<T>} out
     * @function
     */
    export const set: typeof vec4.set;
    /**
     * Adds two quat's
     *
     * @template {quat} T
     * @param {T} out the receiving quaternion
     * @param {ReadonlyQuat} a the first operand
     * @param {ReadonlyQuat} b the second operand
     * @returns {ReturnType.Quat<T>} out
     * @function
     */
    export const add: typeof vec4.add;
    /**
     * Multiplies two quat's
     *
     * @template {quat} T
     * @param {T} out the receiving quaternion
     * @param {ReadonlyQuat} a the first operand
     * @param {ReadonlyQuat} b the second operand
     * @returns {ReturnType.Quat<T>} out
     */
    export function mul<T_1 extends quat>(out: T_1, a: ReadonlyQuat, b: ReadonlyQuat): ReturnType.Quat<T_1>;
    /**
     * Scales a quat by a scalar number
     *
     * @template {quat} T
     * @param {T} out the receiving vector
     * @param {ReadonlyQuat} a the vector to scale
     * @param {Number} b amount to scale the vector by
     * @returns {ReturnType.Quat<T>} out
     * @function
     */
    export const scale: typeof vec4.scale;
    /**
     * Calculates the dot product of two quat's
     *
     * @param {ReadonlyQuat} a the first operand
     * @param {ReadonlyQuat} b the second operand
     * @returns {Number} dot product of a and b
     * @function
     */
    export const dot: typeof vec4.dot;
    /**
     * Performs a linear interpolation between two quat's
     *
     * @template {quat} T
     * @param {T} out the receiving quaternion
     * @param {ReadonlyQuat} a the first operand
     * @param {ReadonlyQuat} b the second operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {ReturnType.Quat<T>} out
     * @function
     */
    export const lerp: typeof vec4.lerp;
    /**
     * Calculates the length of a quat
     *
     * @param {ReadonlyQuat} a vector to calculate length of
     * @returns {Number} length of a
     */
    export const length: typeof vec4.length;
    /**
     * Alias for {@link quat.length}
     * @function
     */
    export const len: typeof vec4.length;
    /**
     * Calculates the squared length of a quat
     *
     * @param {ReadonlyQuat} a vector to calculate squared length of
     * @returns {Number} squared length of a
     * @function
     */
    export const squaredLength: typeof vec4.squaredLength;
    /**
     * Alias for {@link quat.squaredLength}
     * @function
     */
    export const sqrLen: typeof vec4.squaredLength;
    /**
     * Normalize a quat
     *
     * @template {quat} T
     * @param {T} out the receiving quaternion
     * @param {ReadonlyQuat} a quaternion to normalize
     * @returns {ReturnType.Quat<T>} out
     * @function
     */
    export const normalize: typeof vec4.normalize;
    /**
     * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
     *
     * @param {ReadonlyQuat} a The first quaternion.
     * @param {ReadonlyQuat} b The second quaternion.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */
    export const exactEquals: typeof vec4.exactEquals;
    export function rotationTo(out: any, a: any, b: any): any;
    export function sqlerp(out: any, a: any, b: any, c: any, d: any, t: any): any;
    export function setAxes(out: any, view: any, right: any, up: any): any;

}
export namespace quat2 {
    /**
     * Dual Quaternion<br>
     * Format: [real, dual]<br>
     * Quaternion format: XYZW<br>
     * Make sure to have normalized dual quaternions, otherwise the functions may not work as intended.<br>
     * @module quat2
     */
    /**
     * Creates a new identity dual quat
     *
     * @returns {ArrayType} a new dual quaternion [real -> rotation, dual -> translation]
     */
    export function create(): ArrayType;
    /**
     * Creates a new quat initialized with values from an existing quaternion
     *
     * @param {ReadonlyQuat2} a dual quaternion to clone
     * @returns {ArrayType} new dual quaternion
     * @function
     */
    export function clone(a: ReadonlyQuat2): ArrayType;
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
     * @returns {ArrayType} new dual quaternion
     * @function
     */
    export function fromValues(x1: number, y1: number, z1: number, w1: number, x2: number, y2: number, z2: number, w2: number): ArrayType;
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
     * @returns {ArrayType} new dual quaternion
     * @function
     */
    export function fromRotationTranslationValues(x1: number, y1: number, z1: number, w1: number, x2: number, y2: number, z2: number): ArrayType;
    /**
     * Creates a dual quat from a quaternion and a translation
     *
     * @template {quat2} T
     * @param {T} out dual quaternion receiving operation result
     * @param {ReadonlyQuat} q a normalized quaternion
     * @param {ReadonlyVec3} t translation vector
     * @returns {ReturnType.Quat2<T>} dual quaternion receiving operation result
     * @function
     */
    export function fromRotationTranslation<T_1 extends quat2>(out: T_1, q: ReadonlyQuat, t: ReadonlyVec3): ReturnType.Quat2<T_1>;
    /**
     * Creates a dual quat from a translation
     *
     * @template {quat2} T
     * @param {T} out dual quaternion receiving operation result
     * @param {ReadonlyVec3} t translation vector
     * @returns {ReturnType.Quat2<T>} dual quaternion receiving operation result
     * @function
     */
    export function fromTranslation<T_1 extends quat2>(out: T_1, t: ReadonlyVec3): ReturnType.Quat2<T_1>;
    /**
     * Creates a dual quat from a quaternion
     *
     * @template {quat2} T
     * @param {T} out dual quaternion receiving operation result
     * @param {ReadonlyQuat} q the quaternion
     * @returns {ReturnType.Quat2<T>} dual quaternion receiving operation result
     * @function
     */
    export function fromRotation<T_1 extends quat2>(out: T_1, q: ReadonlyQuat): ReturnType.Quat2<T_1>;
    /**
     * Creates a new dual quat from a matrix (4x4)
     *
     * @template {quat2} T
     * @param {T} out the dual quaternion
     * @param {ReadonlyMat4} a the matrix
     * @returns {ReturnType.Quat2<T>} dual quat receiving operation result
     * @function
     */
    export function fromMat4<T_1 extends quat2>(out: T_1, a: ReadonlyMat4): ReturnType.Quat2<T_1>;
    /**
     * Copy the values from one dual quat to another
     *
     * @template {quat2} T
     * @param {T} out the receiving dual quaternion
     * @param {ReadonlyQuat2} a the source dual quaternion
     * @returns {ReturnType.Quat2<T>} out
     * @function
     */
    export function copy<T_1 extends quat2>(out: T_1, a: ReadonlyQuat2): ReturnType.Quat2<T_1>;
    /**
     * Set a dual quat to the identity dual quaternion
     *
     * @template {quat2} T
     * @param {T} out the receiving quaternion
     * @returns {ReturnType.Quat2<T>} out
     */
    export function identity<T_1 extends quat2>(out: T_1): ReturnType.Quat2<T_1>;
    /**
     * Set the components of a dual quat to the given values
     *
     * @template {quat2} T
     * @param {T} out the receiving quaternion
     * @param {Number} x1 X component
     * @param {Number} y1 Y component
     * @param {Number} z1 Z component
     * @param {Number} w1 W component
     * @param {Number} x2 X component
     * @param {Number} y2 Y component
     * @param {Number} z2 Z component
     * @param {Number} w2 W component
     * @returns {ReturnType.Quat2<T>} out
     * @function
     */
    export function set<T_1 extends quat2>(out: T_1, x1: number, y1: number, z1: number, w1: number, x2: number, y2: number, z2: number, w2: number): ReturnType.Quat2<T_1>;
    /**
     * Gets the dual part of a dual quat
     * @param  {quat} out dual part
     * @param  {ReadonlyQuat2} a Dual Quaternion
     * @return {quat} dual part
     */
    export function getDual(out: quat, a: ReadonlyQuat2): quat;
    /**
     * Set the dual component of a dual quat to the given quaternion
     *
     * @template {quat2} T
     * @param {T} out the receiving quaternion
     * @param {ReadonlyQuat} q a quaternion representing the dual part
     * @returns {ReturnType.Quat2<T>} out
     * @function
     */
    export function setDual<T_1 extends quat2>(out: T_1, q: ReadonlyQuat): ReturnType.Quat2<T_1>;
    /**
     * Gets the translation of a normalized dual quat
     * @param  {vec3} out translation
     * @param  {ReadonlyQuat2} a Dual Quaternion to be decomposed
     * @return {vec3} translation
     */
    export function getTranslation(out: vec3, a: ReadonlyQuat2): vec3;
    /**
     * Translates a dual quat by the given vector
     *
     * @template {quat2} T
     * @param {T} out the receiving dual quaternion
     * @param {ReadonlyQuat2} a the dual quaternion to translate
     * @param {ReadonlyVec3} v vector to translate by
     * @returns {ReturnType.Quat2<T>} out
     */
    export function translate<T_1 extends quat2>(out: T_1, a: ReadonlyQuat2, v: ReadonlyVec3): ReturnType.Quat2<T_1>;
    /**
     * Rotates a dual quat around the X axis
     *
     * @template {quat2} T
     * @param {T} out the receiving dual quaternion
     * @param {ReadonlyQuat2} a the dual quaternion to rotate
     * @param {number} rad how far should the rotation be
     * @returns {ReturnType.Quat2<T>} out
     */
    export function rotateX<T_1 extends quat2>(out: T_1, a: ReadonlyQuat2, rad: number): ReturnType.Quat2<T_1>;
    /**
     * Rotates a dual quat around the Y axis
     *
     * @template {quat2} T
     * @param {T} out the receiving dual quaternion
     * @param {ReadonlyQuat2} a the dual quaternion to rotate
     * @param {number} rad how far should the rotation be
     * @returns {ReturnType.Quat2<T>} out
     */
    export function rotateY<T_1 extends quat2>(out: T_1, a: ReadonlyQuat2, rad: number): ReturnType.Quat2<T_1>;
    /**
     * Rotates a dual quat around the Z axis
     *
     * @template {quat2} T
     * @param {T} out the receiving dual quaternion
     * @param {ReadonlyQuat2} a the dual quaternion to rotate
     * @param {number} rad how far should the rotation be
     * @returns {ReturnType.Quat2<T>} out
     */
    export function rotateZ<T_1 extends quat2>(out: T_1, a: ReadonlyQuat2, rad: number): ReturnType.Quat2<T_1>;
    /**
     * Rotates a dual quat by a given quaternion (a * q)
     *
     * @template {quat2} T
     * @param {T} out the receiving dual quaternion
     * @param {ReadonlyQuat2} a the dual quaternion to rotate
     * @param {ReadonlyQuat} q quaternion to rotate by
     * @returns {ReturnType.Quat2<T>} out
     */
    export function rotateByQuatAppend<T_1 extends quat2>(out: T_1, a: ReadonlyQuat2, q: ReadonlyQuat): ReturnType.Quat2<T_1>;
    /**
     * Rotates a dual quat by a given quaternion (q * a)
     *
     * @template {quat2} T
     * @param {T} out the receiving dual quaternion
     * @param {ReadonlyQuat} q quaternion to rotate by
     * @param {ReadonlyQuat2} a the dual quaternion to rotate
     * @returns {ReturnType.Quat2<T>} out
     */
    export function rotateByQuatPrepend<T_1 extends quat2>(out: T_1, q: ReadonlyQuat, a: ReadonlyQuat2): ReturnType.Quat2<T_1>;
    /**
     * Rotates a dual quat around a given axis. Does the normalisation automatically
     *
     * @template {quat2} T
     * @param {T} out the receiving dual quaternion
     * @param {ReadonlyQuat2} a the dual quaternion to rotate
     * @param {ReadonlyVec3} axis the axis to rotate around
     * @param {Number} rad how far the rotation should be
     * @returns {ReturnType.Quat2<T>} out
     */
    export function rotateAroundAxis<T_1 extends quat2>(out: T_1, a: ReadonlyQuat2, axis: ReadonlyVec3, rad: number): ReturnType.Quat2<T_1>;
    /**
     * Adds two dual quat's
     *
     * @template {quat2} T
     * @param {T} out the receiving dual quaternion
     * @param {ReadonlyQuat2} a the first operand
     * @param {ReadonlyQuat2} b the second operand
     * @returns {ReturnType.Quat2<T>} out
     * @function
     */
    export function add<T_1 extends quat2>(out: T_1, a: ReadonlyQuat2, b: ReadonlyQuat2): ReturnType.Quat2<T_1>;
    /**
     * Multiplies two dual quat's
     *
     * @template {quat2} T
     * @param {T} out the receiving dual quaternion
     * @param {ReadonlyQuat2} a the first operand
     * @param {ReadonlyQuat2} b the second operand
     * @returns {ReturnType.Quat2<T>} out
     */
    export function multiply<T_1 extends quat2>(out: T_1, a: ReadonlyQuat2, b: ReadonlyQuat2): ReturnType.Quat2<T_1>;
    /**
     * Scales a dual quat by a scalar number
     *
     * @template {quat2} T
     * @param {T} out the receiving dual quat
     * @param {ReadonlyQuat2} a the dual quat to scale
     * @param {Number} b amount to scale the dual quat by
     * @returns {ReturnType.Quat2<T>} out
     * @function
     */
    export function scale<T_1 extends quat2>(out: T_1, a: ReadonlyQuat2, b: number): ReturnType.Quat2<T_1>;
    /**
     * Performs a linear interpolation between two dual quats's
     * NOTE: The resulting dual quaternions won't always be normalized (The error is most noticeable when t = 0.5)
     *
     * @template {quat2} T
     * @param {T} out the receiving dual quat
     * @param {ReadonlyQuat2} a the first operand
     * @param {ReadonlyQuat2} b the second operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {ReturnType.Quat2<T>} out
     */
    export function lerp<T_1 extends quat2>(out: T_1, a: ReadonlyQuat2, b: ReadonlyQuat2, t: number): ReturnType.Quat2<T_1>;
    /**
     * Calculates the inverse of a dual quat. If they are normalized, conjugate is cheaper
     *
     * @template {quat2} T
     * @param {T} out the receiving dual quaternion
     * @param {ReadonlyQuat2} a dual quat to calculate inverse of
     * @returns {ReturnType.Quat2<T>} out
     */
    export function invert<T_1 extends quat2>(out: T_1, a: ReadonlyQuat2): ReturnType.Quat2<T_1>;
    /**
     * Calculates the conjugate of a dual quat
     * If the dual quaternion is normalized, this function is faster than quat2.inverse and produces the same result.
     *
     * @template {quat2} T
     * @param {T} out the receiving quaternion
     * @param {ReadonlyQuat2} a quat to calculate conjugate of
     * @returns {ReturnType.Quat2<T>} out
     */
    export function conjugate<T_1 extends quat2>(out: T_1, a: ReadonlyQuat2): ReturnType.Quat2<T_1>;
    /**
     * Normalize a dual quat
     *
     * @template {quat2} T
     * @param {T} out the receiving dual quaternion
     * @param {ReadonlyQuat2} a dual quaternion to normalize
     * @returns {ReturnType.Quat2<T>} out
     * @function
     */
    export function normalize<T_1 extends quat2>(out: T_1, a: ReadonlyQuat2): ReturnType.Quat2<T_1>;
    /**
     * Returns a string representation of a dual quaternion
     *
     * @param {ReadonlyQuat2} a dual quaternion to represent as a string
     * @returns {String} string representation of the dual quat
     */
    export function str(a: ReadonlyQuat2): string;
    /**
     * Returns whether or not the dual quaternions have exactly the same elements in the same position (when compared with ===)
     *
     * @param {ReadonlyQuat2} a the first dual quaternion.
     * @param {ReadonlyQuat2} b the second dual quaternion.
     * @returns {Boolean} true if the dual quaternions are equal, false otherwise.
     */
    export function exactEquals(a: ReadonlyQuat2, b: ReadonlyQuat2): boolean;
    /**
     * Returns whether or not the dual quaternions have approximately the same elements in the same position.
     *
     * @param {ReadonlyQuat2} a the first dual quat.
     * @param {ReadonlyQuat2} b the second dual quat.
     * @returns {Boolean} true if the dual quats are equal, false otherwise.
     */
    export function equals(a: ReadonlyQuat2, b: ReadonlyQuat2): boolean;
    /**
     * Gets the real part of a dual quat
     * @param  {quat} out real part
     * @param  {ReadonlyQuat2} a Dual Quaternion
     * @return {quat} real part
     */
    export const getReal: typeof vec4.copy;
    /**
     * Set the real component of a dual quat to the given quaternion
     *
     * @template {quat2} T
     * @param {T} out the receiving quaternion
     * @param {ReadonlyQuat} q a quaternion representing the real part
     * @returns {ReturnType.Quat2<T>} out
     * @function
     */
    export const setReal: typeof vec4.copy;
    /**
     * Multiplies two dual quat's
     *
     * @template {quat2} T
     * @param {T} out the receiving dual quaternion
     * @param {ReadonlyQuat2} a the first operand
     * @param {ReadonlyQuat2} b the second operand
     * @returns {ReturnType.Quat2<T>} out
     */
    export function mul<T_1 extends quat2>(out: T_1, a: ReadonlyQuat2, b: ReadonlyQuat2): ReturnType.Quat2<T_1>;
    /**
     * Calculates the dot product of two dual quat's (The dot product of the real parts)
     *
     * @param {ReadonlyQuat2} a the first operand
     * @param {ReadonlyQuat2} b the second operand
     * @returns {Number} dot product of a and b
     * @function
     */
    export const dot: typeof vec4.dot;
    /**
     * Calculates the length of a dual quat
     *
     * @param {ReadonlyQuat2} a dual quat to calculate length of
     * @returns {Number} length of a
     * @function
     */
    export const length: typeof vec4.length;
    /**
     * Alias for {@link quat2.length}
     * @function
     */
    export const len: typeof vec4.length;
    /**
     * Calculates the squared length of a dual quat
     *
     * @param {ReadonlyQuat2} a dual quat to calculate squared length of
     * @returns {Number} squared length of a
     * @function
     */
    export const squaredLength: typeof vec4.squaredLength;
    /**
     * Alias for {@link quat2.squaredLength}
     * @function
     */
    export const sqrLen: typeof vec4.squaredLength;
}
export namespace vec2 {
    /**
     * 2 Dimensional Vector
     * @module vec2
     */
    /**
     * Creates a new, empty vec2
     *
     * @returns {ArrayType} a new 2D vector
     */
    export function create(): ArrayType;
    /**
     * Creates a new vec2 initialized with values from an existing vector
     *
     * @param {ReadonlyVec2} a vector to clone
     * @returns {ArrayType} a new 2D vector
     */
    export function clone(a: ReadonlyVec2): ArrayType;
    /**
     * Creates a new vec2 initialized with the given values
     *
     * @param {Number} x X component
     * @param {Number} y Y component
     * @returns {ArrayType} a new 2D vector
     */
    export function fromValues(x: number, y: number): ArrayType;
    /**
     * Copy the values from one vec2 to another
     *
     * @template {vec2} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec2} a the source vector
     * @returns {ReturnType.Vec2<T>} out
     */
    export function copy<T extends vec2>(out: T, a: ReadonlyVec2): ReturnType.Vec2<T>;
    /**
     * Set the components of a vec2 to the given values
     *
     * @template {vec2} T
     * @param {T} out the receiving vector
     * @param {Number} x X component
     * @param {Number} y Y component
     * @returns {ReturnType.Vec2<T>} out
     */
    export function set<T extends vec2>(out: T, x: number, y: number): ReturnType.Vec2<T>;
    /**
     * Adds two vec2's
     *
     * @template {vec2} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec2} a the first operand
     * @param {ReadonlyVec2} b the second operand
     * @returns {ReturnType.Vec2<T>} out
     */
    export function add<T extends vec2>(out: T, a: ReadonlyVec2, b: ReadonlyVec2): ReturnType.Vec2<T>;
    /**
     * Subtracts vector b from vector a
     *
     * @template {vec2} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec2} a the first operand
     * @param {ReadonlyVec2} b the second operand
     * @returns {ReturnType.Vec2<T>} out
     */
    export function subtract<T extends vec2>(out: T, a: ReadonlyVec2, b: ReadonlyVec2): ReturnType.Vec2<T>;
    /**
     * Multiplies two vec2's
     *
     * @template {vec2} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec2} a the first operand
     * @param {ReadonlyVec2} b the second operand
     * @returns {ReturnType.Vec2<T>} out
     */
    export function multiply<T extends vec2>(out: T, a: ReadonlyVec2, b: ReadonlyVec2): ReturnType.Vec2<T>;
    /**
     * Divides two vec2's
     *
     * @template {vec2} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec2} a the first operand
     * @param {ReadonlyVec2} b the second operand
     * @returns {ReturnType.Vec2<T>} out
     */
    export function divide<T extends vec2>(out: T, a: ReadonlyVec2, b: ReadonlyVec2): ReturnType.Vec2<T>;
    /**
     * Math.ceil the components of a vec2
     *
     * @template {vec2} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec2} a vector to ceil
     * @returns {ReturnType.Vec2<T>} out
     */
    export function ceil<T extends vec2>(out: T, a: ReadonlyVec2): ReturnType.Vec2<T>;
    /**
     * Math.floor the components of a vec2
     *
     * @template {vec2} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec2} a vector to floor
     * @returns {ReturnType.Vec2<T>} out
     */
    export function floor<T extends vec2>(out: T, a: ReadonlyVec2): ReturnType.Vec2<T>;
    /**
     * Returns the minimum of two vec2's
     *
     * @template {vec2} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec2} a the first operand
     * @param {ReadonlyVec2} b the second operand
     * @returns {ReturnType.Vec2<T>} out
     */
    export function min<T extends vec2>(out: T, a: ReadonlyVec2, b: ReadonlyVec2): ReturnType.Vec2<T>;
    /**
     * Returns the maximum of two vec2's
     *
     * @template {vec2} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec2} a the first operand
     * @param {ReadonlyVec2} b the second operand
     * @returns {ReturnType.Vec2<T>} out
     */
    export function max<T extends vec2>(out: T, a: ReadonlyVec2, b: ReadonlyVec2): ReturnType.Vec2<T>;
    /**
     * symmetric round the components of a vec2
     *
     * @template {vec2} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec2} a vector to round
     * @returns {ReturnType.Vec2<T>} out
     */
    export function round<T extends vec2>(out: T, a: ReadonlyVec2): ReturnType.Vec2<T>;
    /**
     * Scales a vec2 by a scalar number
     *
     * @template {vec2} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec2} a the vector to scale
     * @param {Number} b amount to scale the vector by
     * @returns {ReturnType.Vec2<T>} out
     */
    export function scale<T extends vec2>(out: T, a: ReadonlyVec2, b: number): ReturnType.Vec2<T>;
    /**
     * Adds two vec2's after scaling the second operand by a scalar value
     *
     * @template {vec2} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec2} a the first operand
     * @param {ReadonlyVec2} b the second operand
     * @param {Number} scale the amount to scale b by before adding
     * @returns {ReturnType.Vec2<T>} out
     */
    export function scaleAndAdd<T extends vec2>(out: T, a: ReadonlyVec2, b: ReadonlyVec2, scale: number): ReturnType.Vec2<T>;
    /**
     * Calculates the euclidian distance between two vec2's
     *
     * @param {ReadonlyVec2} a the first operand
     * @param {ReadonlyVec2} b the second operand
     * @returns {Number} distance between a and b
     */
    export function distance(a: ReadonlyVec2, b: ReadonlyVec2): number;
    /**
     * Calculates the squared euclidian distance between two vec2's
     *
     * @param {ReadonlyVec2} a the first operand
     * @param {ReadonlyVec2} b the second operand
     * @returns {Number} squared distance between a and b
     */
    export function squaredDistance(a: ReadonlyVec2, b: ReadonlyVec2): number;
    /**
     * Calculates the length of a vec2
     *
     * @param {ReadonlyVec2} a vector to calculate length of
     * @returns {Number} length of a
     */
    export function length(a: ReadonlyVec2): number;
    /**
     * Calculates the squared length of a vec2
     *
     * @param {ReadonlyVec2} a vector to calculate squared length of
     * @returns {Number} squared length of a
     */
    export function squaredLength(a: ReadonlyVec2): number;
    /**
     * Negates the components of a vec2
     *
     * @template {vec2} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec2} a vector to negate
     * @returns {ReturnType.Vec2<T>} out
     */
    export function negate<T extends vec2>(out: T, a: ReadonlyVec2): ReturnType.Vec2<T>;
    /**
     * Returns the inverse of the components of a vec2
     *
     * @template {vec2} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec2} a vector to invert
     * @returns {ReturnType.Vec2<T>} out
     */
    export function inverse<T extends vec2>(out: T, a: ReadonlyVec2): ReturnType.Vec2<T>;
    /**
     * Normalize a vec2
     *
     * @template {vec2} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec2} a vector to normalize
     * @returns {ReturnType.Vec2<T>} out
     */
    export function normalize<T extends vec2>(out: T, a: ReadonlyVec2): ReturnType.Vec2<T>;
    /**
     * Calculates the dot product of two vec2's
     *
     * @param {ReadonlyVec2} a the first operand
     * @param {ReadonlyVec2} b the second operand
     * @returns {Number} dot product of a and b
     */
    export function dot(a: ReadonlyVec2, b: ReadonlyVec2): number;
    /**
     * Computes the cross product of two vec2's
     * Note that the cross product must by definition produce a 3D vector
     *
     * @template {vec3} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec2} a the first operand
     * @param {ReadonlyVec2} b the second operand
     * @returns {ReturnType.Vec2<T>} out
     */
    export function cross<T extends vec3>(out: T, a: ReadonlyVec2, b: ReadonlyVec2): ReturnType.Vec2<T>;
    /**
     * Performs a linear interpolation between two vec2's
     *
     * @template {vec2} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec2} a the first operand
     * @param {ReadonlyVec2} b the second operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {ReturnType.Vec2<T>} out
     */
    export function lerp<T extends vec2>(out: T, a: ReadonlyVec2, b: ReadonlyVec2, t: number): ReturnType.Vec2<T>;
    /**
     * Generates a random vector with the given scale
     *
     * @template {vec2} T
     * @param {T} out the receiving vector
     * @param {Number} [scale] Length of the resulting vector. If omitted, a unit vector will be returned
     * @returns {ReturnType.Vec2<T>} out
     */
    export function random<T extends vec2>(out: T, scale?: number): ReturnType.Vec2<T>;
    /**
     * Transforms the vec2 with a mat2
     *
     * @template {vec2} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec2} a the vector to transform
     * @param {ReadonlyMat2} m matrix to transform with
     * @returns {ReturnType.Vec2<T>} out
     */
    export function transformMat2<T extends vec2>(out: T, a: ReadonlyVec2, m: ReadonlyMat2): ReturnType.Vec2<T>;
    /**
     * Transforms the vec2 with a mat2d
     *
     * @template {vec2} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec2} a the vector to transform
     * @param {ReadonlyMat2d} m matrix to transform with
     * @returns {ReturnType.Vec2<T>} out
     */
    export function transformMat2d<T extends vec2>(out: T, a: ReadonlyVec2, m: ReadonlyMat2d): ReturnType.Vec2<T>;
    /**
     * Transforms the vec2 with a mat3
     * 3rd vector component is implicitly '1'
     *
     * @template {vec2} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec2} a the vector to transform
     * @param {ReadonlyMat3} m matrix to transform with
     * @returns {ReturnType.Vec2<T>} out
     */
    export function transformMat3<T extends vec2>(out: T, a: ReadonlyVec2, m: ReadonlyMat3): ReturnType.Vec2<T>;
    /**
     * Transforms the vec2 with a mat4
     * 3rd vector component is implicitly '0'
     * 4th vector component is implicitly '1'
     *
     * @template {vec2} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec2} a the vector to transform
     * @param {ReadonlyMat4} m matrix to transform with
     * @returns {ReturnType.Vec2<T>} out
     */
    export function transformMat4<T extends vec2>(out: T, a: ReadonlyVec2, m: ReadonlyMat4): ReturnType.Vec2<T>;
    /**
     * Rotate a 2D vector
     * @template {vec2} T
     * @param {T} out The receiving vec2
     * @param {ReadonlyVec2} a The vec2 point to rotate
     * @param {ReadonlyVec2} b The origin of the rotation
     * @param {Number} rad The angle of rotation in radians
     * @returns {ReturnType.Vec2<T>} out
     */
    export function rotate<T extends vec2>(out: T, a: ReadonlyVec2, b: ReadonlyVec2, rad: number): ReturnType.Vec2<T>;
    /**
     * Get the smallest angle between two 2D vectors
     * @param {ReadonlyVec2} a The first operand
     * @param {ReadonlyVec2} b The second operand
     * @returns {Number} The angle in radians
     */
    export function angle(a: ReadonlyVec2, b: ReadonlyVec2): number;
    /**
     * Get the signed angle in the interval [-pi,pi] between two 2D vectors (positive if `a` is to the right of `b`)
     *
     * @param {ReadonlyVec2} a The first vector
     * @param {ReadonlyVec2} b The second vector
     * @returns {number} The signed angle in radians
     */
    export function signedAngle(a: ReadonlyVec2, b: ReadonlyVec2): number;
    /**
     * Set the components of a vec2 to zero
     *
     * @template {vec2} T
     * @param {T} out the receiving vector
     * @returns {ReturnType.Vec2<T>} out
     */
    export function zero<T extends vec2>(out: T): ReturnType.Vec2<T>;
    /**
     * Returns a string representation of a vector
     *
     * @param {ReadonlyVec2} a vector to represent as a string
     * @returns {String} string representation of the vector
     */
    export function str(a: ReadonlyVec2): string;
    /**
     * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
     *
     * @param {ReadonlyVec2} a The first vector.
     * @param {ReadonlyVec2} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */
    export function exactEquals(a: ReadonlyVec2, b: ReadonlyVec2): boolean;
    /**
     * Returns whether or not the vectors have approximately the same elements in the same position.
     *
     * @param {ReadonlyVec2} a The first vector.
     * @param {ReadonlyVec2} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */
    export function equals(a: ReadonlyVec2, b: ReadonlyVec2): boolean;
    /**
     * Calculates the length of a vec2
     *
     * @param {ReadonlyVec2} a vector to calculate length of
     * @returns {Number} length of a
     */
    export function len(a: ReadonlyVec2): number;
    /**
     * Subtracts vector b from vector a
     *
     * @template {vec2} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec2} a the first operand
     * @param {ReadonlyVec2} b the second operand
     * @returns {ReturnType.Vec2<T>} out
     */
    export function sub<T extends vec2>(out: T, a: ReadonlyVec2, b: ReadonlyVec2): ReturnType.Vec2<T>;
    /**
     * Multiplies two vec2's
     *
     * @template {vec2} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec2} a the first operand
     * @param {ReadonlyVec2} b the second operand
     * @returns {ReturnType.Vec2<T>} out
     */
    export function mul<T extends vec2>(out: T, a: ReadonlyVec2, b: ReadonlyVec2): ReturnType.Vec2<T>;
    /**
     * Divides two vec2's
     *
     * @template {vec2} T
     * @param {T} out the receiving vector
     * @param {ReadonlyVec2} a the first operand
     * @param {ReadonlyVec2} b the second operand
     * @returns {ReturnType.Vec2<T>} out
     */
    export function div<T extends vec2>(out: T, a: ReadonlyVec2, b: ReadonlyVec2): ReturnType.Vec2<T>;
    /**
     * Calculates the euclidian distance between two vec2's
     *
     * @param {ReadonlyVec2} a the first operand
     * @param {ReadonlyVec2} b the second operand
     * @returns {Number} distance between a and b
     */
    export function dist(a: ReadonlyVec2, b: ReadonlyVec2): number;
    /**
     * Calculates the squared euclidian distance between two vec2's
     *
     * @param {ReadonlyVec2} a the first operand
     * @param {ReadonlyVec2} b the second operand
     * @returns {Number} squared distance between a and b
     */
    export function sqrDist(a: ReadonlyVec2, b: ReadonlyVec2): number;
    /**
     * Calculates the squared length of a vec2
     *
     * @param {ReadonlyVec2} a vector to calculate squared length of
     * @returns {Number} squared length of a
     */
    export function sqrLen(a: ReadonlyVec2): number;
    export function forEach(a: any, stride: any, offset: any, count: any, fn: any, arg: any): any;
}


}