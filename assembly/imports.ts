// this file import things passed in from JS, and exports them for use by other
// AS modules.

// @ts-ignore
// prettier-ignore

/**
 * JS Importations
 * @module glMatrix
 */
export declare namespace MathUtil {
  function min(a: i32, b: i32): i32;

  function max(a: f64, b: f64, c: f64): f64;

  // @ts-ignore decorator
  @external("Math", "hypot")
  function hypot(a: f64, b: f64, c?: f64, d?: f64, e?: f64, f?: f64, g?: f64, h?: f64, i?: f64, j?: f64, k?: f64, l?: f64, m?: f64, n?: f64, o?: f64, p?: f64): f64;
}

export interface IArguments {
}

export type IndexedCollection = Float64Array;