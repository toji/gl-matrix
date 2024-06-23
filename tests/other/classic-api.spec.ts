import { expect, describe, it } from 'vitest';

import * as modern from '#gl-matrix';
import * as classic from '#gl-matrix/classic';

const toUpper = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

describe('Classic API', () => {
  const classicKeys = Object.keys(classic);
  const modernKeys = Object.keys(modern);

  it('Classic API re-exports Modern API', () => {
    // Ensure that the Classic & Modern APIs export the same amount of symbols.
    expect(classicKeys.length).toEqual(modernKeys.length);

    // Verify that Classic API re-exports the Modern API.
    for (const key of classicKeys) {
      expect(classic[key]).toEqual(modern[toUpper(key)]);
    }
  });
});
