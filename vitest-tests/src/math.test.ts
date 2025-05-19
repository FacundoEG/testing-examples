import { describe, it, expect } from 'vitest';
import { multiply } from './math';

describe('multiply', () => {
  it('multiplies 3 * 4 to equal 12', () => {
    expect(multiply(3, 4)).toBe(12);
  });
});
