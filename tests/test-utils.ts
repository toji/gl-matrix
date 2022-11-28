import { expect } from 'vitest';

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeVec(...expected: number[] | Float32Array[]): CustomMatcherResult;
    }
  }
}

const EPSILON = 0.00001;
expect.extend({
  toBeVec(received: Float32Array, ...expected: number[] | Float32Array[]): jest.CustomMatcherResult {
    let values: number[] | Float32Array;
    if (expected[0] instanceof Float32Array) {
      values = expected[0];
    } else {
      values = expected as number[];
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
});