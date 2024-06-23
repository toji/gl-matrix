import { expect, describe, it } from 'vitest';

import { toDegree, toRadian } from '#gl-matrix/util';

describe('Common', () => {
  describe('toRadian', () => {
    it('should return a value of 0 when passed 0', () => expect(toRadian(0)).toBeCloseTo(0));
    it('should return a value of Math.PI/2 when passed 90', () => expect(toRadian(90)).toBeCloseTo(Math.PI / 2));
    it('should return a value of Math.PI when passed 180', () => expect(toRadian(180)).toBeCloseTo(Math.PI));
    it('should return a value of Math.PI*2 when passed 360', () => expect(toRadian(360)).toBeCloseTo(Math.PI * 2));
  });

  describe('toDegree', () => {
    it('should return a value of 0 when passed 0', () => expect(toDegree(0)).toBeCloseTo(0));
    it('should return a value of 90 when passed Math.PI/2', () => expect(toDegree(Math.PI / 2)).toBeCloseTo(90));
    it('should return a value of 180 when passed Math.PI', () => expect(toDegree(Math.PI)).toBeCloseTo(180));
    it('should return a value of 360 when passed Math.PI*2', () => expect(toDegree(Math.PI * 2)).toBeCloseTo(360));
  });
});
