import type { FloatArray, Quat2Like, Vec2Like, Vec3Like, Vec4Like } from '#gl-matrix/types';

/**
 * Defines custom matchers set in `./setupExtend.ts` via `expect.extend`.
 */
interface CustomMatchers<R = unknown> {
   toBeVec: (...expected: number[] | [FloatArray] | [Vec2Like] | [Vec3Like] | [Vec4Like]) => R
   toBeQuat2: (...expected: number[] | [FloatArray] | [Quat2Like]) => R
}

declare module 'vitest' {
   interface Assertion<T = any> extends CustomMatchers<T> {}
}
