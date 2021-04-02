/**
 * Extended Math functions
 */

export namespace Maths {
  /**
   * Returns the square root of the sum of squares of its arguments.
   * @param a a
   * @param b b
   * @param c c 
   */
  export function hypot3(a: f64, b: f64, c: f64): f64 {
    a = Math.abs(a);
    b = Math.abs(b);
    c = Math.abs(c);
    Math.hypot
  
    let s = max(a, b, c);
    if (s == 0) return 0;
    let invs = 1.0 / s;
    a *= invs;
    b *= invs;
    c *= invs;
    return s * Math.sqrt(a * a + b * b + c * c);
  }

  /**
   * Returns the square root of the sum of squares of its arguments.
   * @param a a
   * @param b b
   * @param c c
   * @param d d 
   */
  export function hypot4(a: f64, b: f64, c: f64, d: f64): f64 {
    a = Math.abs(a);
    b = Math.abs(b);
    c = Math.abs(c);
    d = Math.abs(d);
  
    let s = Math.max(a, max(b, c, d));
    if (s == 0) return 0;
    let invs = 1.0 / s;
    a *= invs;
    b *= invs;
    c *= invs;
    d *= invs;
    return s * Math.sqrt(a * a + b * b + c * c + d * d);
  }

  /**
   * Returns the square root of the sum of squares of its arguments.
   * @param a a
   * @param b b
   * @param c c
   * @param d d
   * @param e e
   * @param f f
   * @param g g 
   */
  export function hypot7(a: f64, b: f64, c: f64, d: f64, e: f64, f: f64, g: f64): f64 {
    a = Math.abs(a);
    b = Math.abs(b);
    c = Math.abs(c);
    d = Math.abs(d);
    e = Math.abs(e);
    f = Math.abs(f);
    g = Math.abs(g);
  
    let s = max(a, max(b, c, d), max(e, f, g));
    if (s == 0) return 0;
    let invs = 1.0 / s;
    a *= invs;
    b *= invs;
    c *= invs;
    d *= invs;
    e *= invs;
    f *= invs;
    g *= invs;
    return s * Math.sqrt(a * a + b * b + c * c + d * d + e * e + f * f + g * g);
  }

  /**
   * Returns the square root of the sum of squares of its arguments.
   * @param a a
   * @param b b
   * @param c c
   * @param d d
   * @param e e
   * @param f f
   * @param g g
   * @param h h
   * @param i i 
   */
  export function hypot9(a: f64, b: f64, c: f64, d: f64, e: f64, f: f64, g: f64, h: f64, i: f64): f64 {
    a = Math.abs(a);
    b = Math.abs(b);
    c = Math.abs(c);
    d = Math.abs(d);
    e = Math.abs(e);
    f = Math.abs(f);
    g = Math.abs(g);
    h = Math.abs(h);
    i = Math.abs(i);
  
    let s = max(max(a, max(b, c, d), max(e, f, g)), h, i);
    if (s == 0) return 0;
    let invs = 1.0 / s;
    a *= invs;
    b *= invs;
    c *= invs;
    d *= invs;
    e *= invs;
    f *= invs;
    g *= invs;
    h *= invs;
    i *= invs;
    return s * Math.sqrt(a * a + b * b + c * c + d * d + e * e + f * f + g * g + h * h + i * i);
  }

  /**
   * Returns the square root of the sum of squares of its arguments.
   * @param a a
   * @param b b
   * @param c c
   * @param d d
   * @param e e
   * @param f f
   * @param g g
   * @param h h
   * @param i i
   * @param j j
   * @param k k
   * @param l l
   * @param m m
   * @param n n
   * @param o o
   * @param p p 
   */
  export function hypot16(a: f64, b: f64, c: f64, d: f64, e: f64, f: f64, g: f64, h: f64, i: f64, j: f64, k: f64, l: f64, m: f64, n: f64, o: f64, p: f64): f64 {
    a = Math.abs(a);
    b = Math.abs(b);
    c = Math.abs(c);
    d = Math.abs(d);
    e = Math.abs(e);
    f = Math.abs(f);
    g = Math.abs(g);
    h = Math.abs(h);
    i = Math.abs(i);
    j = Math.abs(j);
    k = Math.abs(k);
    l = Math.abs(l);
    m = Math.abs(m);
    n = Math.abs(n);
    o = Math.abs(o);
    p = Math.abs(p);
  
    let s = Math.max(max(a, max(b, c, d), max(e, f, g)), max(max(h, i, j), max(k, l, m), max(n, o, p)));
    if (s == 0) return 0;
    let invs = 1.0 / s;
    a *= invs;
    b *= invs;
    c *= invs;
    d *= invs;
    e *= invs;
    f *= invs;
    g *= invs;
    h *= invs;
    j *= invs;
    k *= invs;
    l *= invs;
    m *= invs;
    n *= invs;
    o *= invs;
    p *= invs;
    return s * Math.sqrt(a * a + b * b + c * c + d * d + e * e + f * f + g * g + h * h + i * i + j * j + k * k + m * m + n * n + o * o + p * p);
  }

  /**
   * Returns the smaller of a set of supplied numeric expressions.
   * @param a a
   * @param b b
   */
  export function min(a: i32, b: i32): i32 {
    return a < b ? a : b;
  }

  /**
   * Returns the larger of a set of supplied numeric expressions.
   * @param a a
   * @param b b
   * @param c c
   */
  export function max(a: f64, b: f64, c: f64): f64 {
    const q = Math.max(b, c);
    return Math.max(a, q);
  }
}