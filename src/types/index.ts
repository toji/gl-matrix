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
type Mat2Like = [
  number, number,
  number, number
] | FloatArray;

/**
 * A 2x3 Matrix given as a {@link Mat2d}, a 6-element floating-point TypedArray, or an array of 6 numbers.
 */
type Mat2dLike = [
  number, number,
  number, number,
  number, number
] | FloatArray;

/**
 * A 3x3 Matrix given as a {@link Mat3}, a 9-element floating-point TypedArray, or an array of 9 numbers.
 */
type Mat3Like = [
  number, number, number,
  number, number, number,
  number, number, number
] | FloatArray;

/**
 * A 4x4 Matrix given as a {@link Mat4}, a 16-element floating-point TypedArray, or an array of 16 numbers.
 */
type Mat4Like = [
  number, number, number, number,
  number, number, number, number,
  number, number, number, number,
  number, number, number, number
] | FloatArray;

/**
 * A Quaternion given as a {@link Quat}, a 4-element floating-point TypedArray, or an array of 4 numbers.
 */
type QuatLike = Vec4Like;

/**
 * A Dual Quaternion given as a {@link Quat2}, an 8-element floating-point TypedArray, or an array of 8 numbers.
 */
type Quat2Like = [
  number, number, number, number,
  number, number, number, number
] | FloatArray;

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

export {
  FloatArray,
  Mat2Like,
  Mat2dLike,
  Mat3Like,
  Mat4Like,
  QuatLike,
  Quat2Like,
  Vec2Like,
  Vec3Like,
  Vec4Like
};
