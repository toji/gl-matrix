import { Maths } from "./imports";

/**
 * Common utilities
 * @module glMatrix
 */

// Configuration Constants
export const EPSILON = 0.000001;
export type ARRAY_TYPE = Float64Array;
export let RANDOM = Math.random;
export let ANGLE_ORDER = "zyx";

/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Object} type Array type, such as Float32Array or Array
 */
export function setMatrixArrayType(type: Object): void {
  throw new Error("Not implemented yet");
}

const degree: f64 = Math.PI / 180;

/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */
export function toRadian(a: f64): f64 {
  return a * degree;
}

/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */
export function equals(a: f64, b: f64): bool {
  return Math.abs(a - b) <= EPSILON * Maths.max(1.0, Math.abs(a), Math.abs(b));
}
