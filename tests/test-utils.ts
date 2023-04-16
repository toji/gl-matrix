import { expect } from 'vitest';
import { Quat2Like } from '../src/quat2';

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeVec(...expected: number[] | [Float32Array]): CustomMatcherResult;
      toBeQuat2(...expected: number[] | [Float32Array] | [Quat2Like]): jest.CustomMatcherResult;
    }
  }
}

const EPSILON = 0.00001;
expect.extend({
  toBeVec(received: Float32Array, ...expected: number[] | [Float32Array]): jest.CustomMatcherResult {
    let values: number[] | Float32Array;
    if (expected[0] instanceof Float32Array) {
      values = expected[0];
    } else {
      values = expected as number[];
    }
    if (received.length != values.length) {
      return ({
        pass: false,
        message: () => `Expected (${received}) and (${values}) to have the same length. (${received.length} != ${values.length})`
      });
    }
    for(let i = 0; i < values.length; ++i) {
      if(Math.abs(received[i] - values[i]) >= EPSILON) {
        return ({
          pass: false,
          message: () => `Expected (${received}) to be (${values}), but value[${i}] is not within tolerance. (${received[i]} != ${values[i]})`
        });
      }
    }

    return ({
      pass: true,
      message: () => `Expected (${received}) to be (${values}).`
    });
  },

  //Dual quaternions are very special & unique snowflakes
  toBeQuat2(received: Float32Array, ...expected: number[] | [Float32Array]): jest.CustomMatcherResult {
    let values: number[] | Float32Array;
    if (expected[0] instanceof Float32Array) {
      values = expected[0];
    } else {
      values = expected as number[];
    }

    let allSignsFlipped = false;
    if (received.length != values.length) {
      return ({
        pass: false,
        message: () => `Expected (${received}) and (${values}) to have the same length. (${received.length} != ${values.length})`
      });
    }

    for (let i = 0; i < values.length; i++) {
      if (isNaN(received[i]) !== isNaN(values[i])) {
        return ({
          pass: false,
          message: () => `Expected (${received}) and (${values}) to be equalish. (${received.length} != ${values.length})`
        });
      }

      if (allSignsFlipped) {
        if (Math.abs(received[i] - (-values[i])) >= EPSILON) {
          return ({
            pass: false,
            message: () => `Expected (${received}) and (${values}) to be equalish. (${received.length} != ${values.length})`
          });
        }
      } else {
        if (Math.abs(received[i] - values[i]) >= EPSILON) {
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