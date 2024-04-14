export const EPSILON = 0.000001;
export const ANGLE_ORDER = "zyx";

/**
 * The floating point typed arrays that can be used in place of a vector,
 * matrix, or quaternion.
 */
export type FloatArray = Float32Array | Float64Array;

const DEG_TO_RAD = Math.PI / 180;
const RAD_TO_DEG = 180 / Math.PI;

/**
 * Convert Degrees To Radians
 *
 * @param value - Angle in Degrees
 * @returns Angle in Radians
 */
export function toRadian(value: number): number {
  return value * DEG_TO_RAD;
}

/**
 * Convert Radians To Degrees
 *
 * @param value - Angle in Radians
 * @returns Angle in Degrees
 */
export function toDegree(value: number): number {
  return value * RAD_TO_DEG;
}
