/**
 * Provides aliases for backwards compatibility with the `3.x` API (32-bit).
 *
 * To facilitate easier adoption of version 4 of `gl-matrix` and maintain compatability with existing codebases the
 * modern API can be accessed via remapped exports matching the version 3 API from the `gl-matrix/classic` sub-path
 * export. The only change required is altering imports from `gl-matrix` to `gl-matrix/classic`.
 *
 * ```js
 * import { vec3 } from 'gl-matrix/classic';
 *
 * const vec = vec3.create();
 * ```
 *
 * @packageDocumentation
 */

export {
  Mat2 as mat2,
  Mat2d as mat2d,
  Mat3 as mat3,
  Mat4 as mat4,
  Quat as quat,
  Quat2 as quat2,
  Vec2 as vec2,
  Vec3 as vec3,
  Vec4 as vec4,
} from '#gl-matrix';

