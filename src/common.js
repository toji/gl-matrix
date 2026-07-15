/**
 * Common utilities
 * @module glMatrix
 */

// Configuration Constants
export const EPSILON = 0.000001;
export let ARRAY_TYPE =
  typeof Float32Array !== "undefined" ? Float32Array : Array;
// If an array is required to initialize to zero.
export let ARRAY_ZERO_INIT_TYPE = ARRAY_TYPE === Array ? _createFastZeroInit(ARRAY_TYPE) : ARRAY_TYPE;
export let RANDOM = Math.random;
export let ANGLE_ORDER = "zyx";

/**
 * Symmetric round
 *
 * @param {Number} a value to round
 */
export function round(a) {
	return Math.round(Math.abs(a)) * Math.sign(a);
}

/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Float32ArrayConstructor | ArrayConstructor} type Array type, such as Float32Array or Array
 */
export function setMatrixArrayType(type) {

	ARRAY_TYPE = type;

	// If the Array is not a TypedArray, create a constructor that automatically fills it with zeroes.
	if (Array.isArray(type)) {
		ARRAY_ZERO_INIT_TYPE = _createFastZeroInit(type);
		return;
	}
	ARRAY_ZERO_INIT_TYPE = type;
}

const degree = Math.PI / 180;

const radian = 180 / Math.PI;

/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */
export function toRadian(a) {
  return a * degree;
}

/**
 * Convert Radian To Degree
 *
 * @param {Number} a Angle in Radians
 */
export function toDegree(a) {
  return a * radian;
}

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
export function equals(a, b, tolerance = EPSILON) {
  // `a === b` handles exactly-equal values (including matching infinities),
  // while clamping the relative scale to Number.MAX_VALUE prevents an infinite
  // operand from producing an infinite tolerance (which would make differing
  // infinities, or a finite value and an infinity, compare as approximately equal).
  return (
    a === b ||
    Math.abs(a - b) <=
      tolerance * Math.min(Number.MAX_VALUE, Math.max(1, Math.abs(a), Math.abs(b)))
  );
}



/**
 * Creates a subclass of an Array-like class that initializes all it's elements to zero.
 * @private
 * @param {ArrayConstructor} type The Array-like class.
 * @returns {ArrayConstructor} The zero-initializer subclass.
 */
function _createFastZeroInit(type) {
	return class ArrayInitZero extends type {
		constructor(...args) {
			super(...args);
			this.fill(0);
		}
	}
}
