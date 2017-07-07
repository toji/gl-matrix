/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

module.exports = (function() {
  "use strict";

  let glMatrix = require("./common.js");

  /**
   * @class 2 Dimensional Vector
   * @name vec2
   */
  class vec2 {
    /**
     * Creates a new, empty vec2
     *
     * @returns {vec2} a new 2D vector
     */
    static create() {
      let out = new glMatrix.ARRAY_TYPE(2);
      out[0] = 0;
      out[1] = 0;
      return out;
    }

    /**
     * Creates a new vec2 initialized with values from an existing vector
     *
     * @param {vec2} a vector to clone
     * @returns {vec2} a new 2D vector
     */
    static clone(a) {
      let out = new glMatrix.ARRAY_TYPE(2);
      out[0] = a[0];
      out[1] = a[1];
      return out;
    }

    /**
     * Creates a new vec2 initialized with the given values
     *
     * @param {Number} x X component
     * @param {Number} y Y component
     * @returns {vec2} a new 2D vector
     */
    static fromValues(x, y) {
      let out = new glMatrix.ARRAY_TYPE(2);
      out[0] = x;
      out[1] = y;
      return out;
    }

    /**
     * Copy the values from one vec2 to another
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the source vector
     * @returns {vec2} out
     */
    static copy(out, a) {
      out[0] = a[0];
      out[1] = a[1];
      return out;
    }

    /**
     * Set the components of a vec2 to the given values
     *
     * @param {vec2} out the receiving vector
     * @param {Number} x X component
     * @param {Number} y Y component
     * @returns {vec2} out
     */
    static set(out, x, y) {
      out[0] = x;
      out[1] = y;
      return out;
    }

    /**
     * Adds two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */
    static add(out, a, b) {
      out[0] = a[0] + b[0];
      out[1] = a[1] + b[1];
      return out;
    }

    /**
     * Subtracts vector b from vector a
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */
    static subtract(out, a, b) {
      out[0] = a[0] - b[0];
      out[1] = a[1] - b[1];
      return out;
    }

    /**
     * Multiplies two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */
    static multiply(out, a, b) {
      out[0] = a[0] * b[0];
      out[1] = a[1] * b[1];
      return out;
    };

    /**
     * Divides two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */
    static divide(out, a, b) {
      out[0] = a[0] / b[0];
      out[1] = a[1] / b[1];
      return out;
    };

    /**
     * Math.ceil the components of a vec2
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a vector to ceil
     * @returns {vec2} out
     */
    static ceil(out, a) {
      out[0] = Math.ceil(a[0]);
      out[1] = Math.ceil(a[1]);
      return out;
    };

    /**
     * Math.floor the components of a vec2
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a vector to floor
     * @returns {vec2} out
     */
    static floor(out, a) {
      out[0] = Math.floor(a[0]);
      out[1] = Math.floor(a[1]);
      return out;
    };

    /**
     * Returns the minimum of two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */
    static min(out, a, b) {
      out[0] = Math.min(a[0], b[0]);
      out[1] = Math.min(a[1], b[1]);
      return out;
    };

    /**
     * Returns the maximum of two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */
    static max(out, a, b) {
      out[0] = Math.max(a[0], b[0]);
      out[1] = Math.max(a[1], b[1]);
      return out;
    };

    /**
     * Math.round the components of a vec2
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a vector to round
     * @returns {vec2} out
     */
    static round (out, a) {
      out[0] = Math.round(a[0]);
      out[1] = Math.round(a[1]);
      return out;
    };

    /**
     * Scales a vec2 by a scalar number
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the vector to scale
     * @param {Number} b amount to scale the vector by
     * @returns {vec2} out
     */
    static scale(out, a, b) {
      out[0] = a[0] * b;
      out[1] = a[1] * b;
      return out;
    };

    /**
     * Adds two vec2's after scaling the second operand by a scalar value
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @param {Number} scale the amount to scale b by before adding
     * @returns {vec2} out
     */
    static scaleAndAdd(out, a, b, scale) {
      out[0] = a[0] + (b[0] * scale);
      out[1] = a[1] + (b[1] * scale);
      return out;
    };

    /**
     * Calculates the euclidian distance between two vec2's
     *
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {Number} distance between a and b
     */
    static distance(a, b) {
      var x = b[0] - a[0],
        y = b[1] - a[1];
      return Math.sqrt(x*x + y*y);
    };

    /**
     * Calculates the squared euclidian distance between two vec2's
     *
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {Number} squared distance between a and b
     */
    static squaredDistance(a, b) {
      var x = b[0] - a[0],
        y = b[1] - a[1];
      return x*x + y*y;
    };

    /**
     * Calculates the length of a vec2
     *
     * @param {vec2} a vector to calculate length of
     * @returns {Number} length of a
     */
    static length(a) {
      var x = a[0],
        y = a[1];
      return Math.sqrt(x*x + y*y);
    };

    /**
     * Calculates the squared length of a vec2
     *
     * @param {vec2} a vector to calculate squared length of
     * @returns {Number} squared length of a
     */
    static squaredLength (a) {
      var x = a[0],
        y = a[1];
      return x*x + y*y;
    };

    /**
     * Negates the components of a vec2
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a vector to negate
     * @returns {vec2} out
     */
    static negate(out, a) {
      out[0] = -a[0];
      out[1] = -a[1];
      return out;
    };

    /**
     * Returns the inverse of the components of a vec2
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a vector to invert
     * @returns {vec2} out
     */
    static inverse(out, a) {
      out[0] = 1.0 / a[0];
      out[1] = 1.0 / a[1];
      return out;
    };

    /**
     * Normalize a vec2
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a vector to normalize
     * @returns {vec2} out
     */
    static normalize(out, a) {
      var x = a[0],
        y = a[1];
      var len = x*x + y*y;
      if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
      }
      return out;
    };

    /**
     * Calculates the dot product of two vec2's
     *
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {Number} dot product of a and b
     */
    static dot(a, b) {
      return a[0] * b[0] + a[1] * b[1];
    };

    /**
     * Computes the cross product of two vec2's
     * Note that the cross product must by definition produce a 3D vector
     *
     * @param {vec3} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec3} out
     */
    static cross(out, a, b) {
      var z = a[0] * b[1] - a[1] * b[0];
      out[0] = out[1] = 0;
      out[2] = z;
      return out;
    };

    /**
     * Performs a linear interpolation between two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @param {Number} t interpolation amount between the two inputs
     * @returns {vec2} out
     */
    static lerp(out, a, b, t) {
      var ax = a[0],
        ay = a[1];
      out[0] = ax + t * (b[0] - ax);
      out[1] = ay + t * (b[1] - ay);
      return out;
    };

    /**
     * Generates a random vector with the given scale
     *
     * @param {vec2} out the receiving vector
     * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
     * @returns {vec2} out
     */
    static random(out, scale) {
      scale = scale || 1.0;
      var r = glMatrix.RANDOM() * 2.0 * Math.PI;
      out[0] = Math.cos(r) * scale;
      out[1] = Math.sin(r) * scale;
      return out;
    };

    /**
     * Transforms the vec2 with a mat2
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the vector to transform
     * @param {mat2} m matrix to transform with
     * @returns {vec2} out
     */
    static transformMat2(out, a, m) {
      var x = a[0],
        y = a[1];
      out[0] = m[0] * x + m[2] * y;
      out[1] = m[1] * x + m[3] * y;
      return out;
    };

    /**
     * Transforms the vec2 with a mat2d
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the vector to transform
     * @param {mat2d} m matrix to transform with
     * @returns {vec2} out
     */
    static transformMat2d(out, a, m) {
      var x = a[0],
        y = a[1];
      out[0] = m[0] * x + m[2] * y + m[4];
      out[1] = m[1] * x + m[3] * y + m[5];
      return out;
    };

    /**
     * Transforms the vec2 with a mat3
     * 3rd vector component is implicitly '1'
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the vector to transform
     * @param {mat3} m matrix to transform with
     * @returns {vec2} out
     */
    static transformMat3(out, a, m) {
      var x = a[0],
        y = a[1];
      out[0] = m[0] * x + m[3] * y + m[6];
      out[1] = m[1] * x + m[4] * y + m[7];
      return out;
    };

    /**
     * Transforms the vec2 with a mat4
     * 3rd vector component is implicitly '0'
     * 4th vector component is implicitly '1'
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the vector to transform
     * @param {mat4} m matrix to transform with
     * @returns {vec2} out
     */
    static transformMat4(out, a, m) {
      let x = a[0];
      let y = a[1];
      out[0] = m[0] * x + m[4] * y + m[12];
      out[1] = m[1] * x + m[5] * y + m[13];
      return out;
    }

    /**
     * Returns a string representation of a vector
     *
     * @param {vec2} a vector to represent as a string
     * @returns {String} string representation of the vector
     */
    static str(a) {
      return 'vec2(' + a[0] + ', ' + a[1] + ')';
    }

    /**
     * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
     *
     * @param {vec2} a The first vector.
     * @param {vec2} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */
    static exactEquals(a, b) {
      return a[0] === b[0] && a[1] === b[1];
    }

    /**
     * Returns whether or not the vectors have approximately the same elements in the same position.
     *
     * @param {vec2} a The first vector.
     * @param {vec2} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */
    static equals(a, b) {
      let a0 = a[0], a1 = a[1];
      let b0 = b[0], b1 = b[1];
      return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
              Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)));
    }
  }

  /**
   * Alias for {@link vec2.length}
   * @function
   */
  vec2.len = vec2.length;

  /**
   * Alias for {@link vec2.subtract}
   * @function
   */
  vec2.sub = vec2.subtract;

  /**
   * Alias for {@link vec2.multiply}
   * @function
   */
  vec2.mul = vec2.multiply;

  /**
   * Alias for {@link vec2.divide}
   * @function
   */
  vec2.div = vec2.divide;

  /**
   * Alias for {@link vec2.distance}
   * @function
   */
  vec2.dist = vec2.distance;

  /**
   * Alias for {@link vec2.squaredDistance}
   * @function
   */
  vec2.sqrDist = vec2.squaredDistance;

  /**
   * Alias for {@link vec2.squaredLength}
   * @function
   */
  vec2.sqrLen = vec2.squaredLength;

  /**
   * Perform some operation over an array of vec2s.
   *
   * @param {Array} a the array of vectors to iterate over
   * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
   * @param {Number} offset Number of elements to skip at the beginning of the array
   * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
   * @param {Function} fn Function to call for each vector in the array
   * @param {Object} [arg] additional argument to pass to fn
   * @returns {Array} a
   * @function
   */
  vec2.forEach = (function() {
    let vec = vec2.create();

    return function(a, stride, offset, count, fn, arg) {
      let i, l;
      if(!stride) {
        stride = 2;
      }

      if(!offset) {
        offset = 0;
      }

      if(count) {
        l = Math.min((count * stride) + offset, a.length);
      } else {
        l = a.length;
      }

      for(i = offset; i < l; i += stride) {
        vec[0] = a[i]; vec[1] = a[i+1];
        fn(vec, vec, arg);
        a[i] = vec[0]; a[i+1] = vec[1];
      }

      return a;
    };
  })();

  return vec2;
})();
