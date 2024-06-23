import { expect } from 'vitest';

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

/** Less precision than `GSM_EPSILON` from #gl-matrix/common. */
const TEST_EPSILON = 0.00001;

interface MatcherResult {
  pass: boolean
  message: () => string
}

expect.extend({
  toBeVec(received: FloatArray, ...expected: number[] | [FloatArray] | [Mat2Like] | [Mat2dLike] | [Mat3Like] |
    [Mat4Like] | [Vec2Like] | [Vec3Like] | [Vec4Like]):
   MatcherResult {
    let values: number[] | FloatArray;
    if (expected[0] instanceof Float32Array || expected[0] instanceof Float64Array) {
      values = expected[0];
    } else {
      values = expected as number[];
    }
    if (received.length != values.length) {
      return ({
        pass: false,
        message: () => `Expected (${received}) and (${values}) to have the same length. (${
          received.length} != ${values.length})`
      });
    }
    for (let i = 0; i < values.length; ++i) {
      if (Math.abs(received[i] - values[i]) >= TEST_EPSILON) {
        return ({
          pass: false,
          message: () => `Expected (${received}) to be (${values}), but value[${i}] is not within tolerance. (${
            received[i]} != ${values[i]})`
        });
      }
    }

    return ({
      pass: true,
      message: () => `Expected (${received}) to be (${values}).`
    });
  },

  // Dual quaternions are very special & unique snowflakes
  toBeQuat2(received: FloatArray, ...expected: number[] | [FloatArray] | [Quat2Like]): MatcherResult {
    let values: number[] | FloatArray;
    if (expected[0] instanceof Float32Array || expected[0] instanceof Float64Array) {
      values = expected[0];
    } else {
      values = expected as number[];
    }

    let allSignsFlipped = false;
    if (received.length != values.length) {
      return ({
        pass: false,
        message: () => `Expected (${received}) and (${values}) to have the same length. (${
          received.length} != ${values.length})`
      });
    }

    for (let i = 0; i < values.length; i++) {
      if (isNaN(received[i]) !== isNaN(values[i])) {
        return ({
          pass: false,
          message: () => `Expected (${received}) and (${values}) to be equalish. (${
            received.length} != ${values.length})`
        });
      }

      if (allSignsFlipped) {
        if (Math.abs(received[i] - (-values[i])) >= TEST_EPSILON) {
          return ({
            pass: false,
            message: () => `Expected (${received}) and (${values}) to be equalish. (${
              received.length} != ${values.length})`
          });
        }
      } else {
        if (Math.abs(received[i] - values[i]) >= TEST_EPSILON) {
          allSignsFlipped = true;
          i = 0;
        }
      }
    }

    return ({
      pass: true,
      message: () => `Expected (${received}) to be (${values}).`
    });
  }
});
