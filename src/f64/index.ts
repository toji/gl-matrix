/**
 * Provides the modern `gl-matrix` API (64-bit). All classes extend from `Float64Array`. The API is identical to
 * the main 32-bit variation.
 *
 * ```js
 * import { Vec3 } from 'gl-matrix/f64';
 *
 * const vec = new Vec3(0, 1, 2);
 * ```
 *
 * If you have a need to mix and match the 64-bit and 32-bit versions you can do so by importing them as different
 * names.
 *
 * ```js
 * import { Vec3 as Vec3F32 } from 'gl-matrix';
 * import { Vec3 as Vec3F64 } from 'gl-matrix/f64';
 * ```
 *
 * @packageDocumentation
 */

export * from '../_lib/f64/index.js';

