/// <reference path="imports.ts" />

export namespace MathUtil {
  function min(a: i32, b: i32): i32 {
    return a < b ? a : b;
  }

  function max(a: f64, b: f64, c: f64): f64 {
    const q = Math.max(b, c)
    return Math.max(a, q);
  }
}
