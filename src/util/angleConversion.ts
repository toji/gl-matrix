/**
 * Constant used in `gl-matrix` angle conversions.
 */
const GLM_DEG_TO_RAD: number = Math.PI / 180;

/**
 * Constant used in `gl-matrix` angle conversions.
 */
const GLM_RAD_TO_DEG: number = 180 / Math.PI;

/**
 * Convert `radians` to `degrees`.
 *
 * @param value - Angle in `radians`.
 * @returns Angle in `degrees`.
 */
export function toDegree(value: number): number {
  return value * GLM_RAD_TO_DEG;
}

/**
 * Convert `degrees` to `radians`.
 *
 * @param value - Angle in `degrees`.
 * @returns Angle in `radians`.
 */
export function toRadian(value: number): number {
  return value * GLM_DEG_TO_RAD;
}
