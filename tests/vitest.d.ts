import type {
  FloatArray,
  Quat2Like,
  Mat2Like,
  Mat2dLike,
  Mat3Like,
  Mat4Like,
  Vec2Like,
  Vec3Like,
  Vec4Like } from '#gl-matrix/types';

/**
 * Defines custom matchers set in `./setupExtend.ts` via `expect.extend`.
 */
interface CustomMatchers<R = unknown> {
  toBeVec: (...expected: number[] | [FloatArray] | [Mat2Like] | [Mat2dLike] | [Mat3Like] | [Mat4Like] | [Vec2Like] |
   [Vec3Like] | [Vec4Like]) => R
  toBeQuat2: (...expected: number[] | [FloatArray] | [Quat2Like]) => R
}

declare module 'vitest' {
  // eslint-disable-next-line
  interface Assertion<T = any> extends CustomMatchers<T> {}
}
