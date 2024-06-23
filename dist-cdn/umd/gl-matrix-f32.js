// gl-matrix - v4.0.0-beta.3 - A high performance matrix and vector library.
// @author Brandon Jones
// @author Colin MacKenzie IV
// @license MIT (https://github.com/toji/gl-matrix/blob/master/LICENSE.md)
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.glMatrix = {}));
})(this, (function (exports) { 'use strict';

  function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
  }
  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function _construct(t, e, r) {
    if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    var o = [null];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return r && _setPrototypeOf(p, r.prototype), p;
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  function _get() {
    return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
      var p = _superPropBase(e, t);
      if (p) {
        var n = Object.getOwnPropertyDescriptor(p, t);
        return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
      }
    }, _get.apply(null, arguments);
  }
  function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
  }
  function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(t, "prototype", {
      writable: !1
    }), e && _setPrototypeOf(t, e);
  }
  function _isNativeFunction(t) {
    try {
      return -1 !== Function.toString.call(t).indexOf("[native code]");
    } catch (n) {
      return "function" == typeof t;
    }
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
  }
  function _possibleConstructorReturn(t, e) {
    if (e && ("object" == typeof e || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
  }
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
  }
  function _superPropBase(t, o) {
    for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)););
    return t;
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r );
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (String )(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _wrapNativeSuper(t) {
    var r = "function" == typeof Map ? new Map() : void 0;
    return _wrapNativeSuper = function (t) {
      if (null === t || !_isNativeFunction(t)) return t;
      if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== r) {
        if (r.has(t)) return r.get(t);
        r.set(t, Wrapper);
      }
      function Wrapper() {
        return _construct(t, arguments, _getPrototypeOf(this).constructor);
      }
      return Wrapper.prototype = Object.create(t.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), _setPrototypeOf(Wrapper, t);
    }, _wrapNativeSuper(t);
  }

  // gl-matrix - v4.0.0-beta.3 - A high performance matrix and vector library.
  // @author Brandon Jones
  // @author Colin MacKenzie IV
  // @license MIT (https://github.com/toji/gl-matrix/blob/master/LICENSE.md)
  var __typeError = function __typeError(msg) {
    throw TypeError(msg);
  };
  var __accessCheck = function __accessCheck(obj, member, msg) {
    return member.has(obj) || __typeError("Cannot " + msg);
  };
  var __privateGet = function __privateGet(obj, member, getter) {
    return __accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj);
  };
  var __privateAdd = function __privateAdd(obj, member, value) {
    return member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  };

  // src/common/index.ts
  var GLM_EPSILON = 1e-6;

  // src/_lib/f32/Mat2.ts
  var _IDENTITY_2X2;
  var _Mat2 = /*#__PURE__*/function (_Float32Array) {
    /**
     * Create a {@link Mat2}.
     *
     * @category Constructor
     */
    function _Mat2() {
      var _this;
      _classCallCheck(this, _Mat2);
      for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
      }
      switch (values.length) {
        case 4:
          _this = _callSuper(this, _Mat2, [values]);
          break;
        case 2:
          _this = _callSuper(this, _Mat2, [values[0], values[1], 4]);
          break;
        case 1:
          var v = values[0];
          if (typeof v === "number") {
            _this = _callSuper(this, _Mat2, [[v, v, v, v]]);
          } else {
            _this = _callSuper(this, _Mat2, [v, 0, 4]);
          }
          break;
        default:
          _this = _callSuper(this, _Mat2, [__privateGet(_Mat2, _IDENTITY_2X2)]);
          break;
      }
      return _assertThisInitialized(_this);
    }
    // ============
    // Accessors
    // ============
    /**
     * A string representation of `this`
     * Equivalent to `Mat2.str(this);`
     *
     * @category Accessors
     */
    _inherits(_Mat2, _Float32Array);
    return _createClass(_Mat2, [{
      key: "str",
      get: function get() {
        return _Mat2.str(this);
      }
      // ===================
      // Instance methods
      // ===================
      /**
       * Copy the values from another {@link Mat2} into `this`.
       *
       * @param a the source vector
       * @returns `this`
       * @category Methods
       */
    }, {
      key: "copy",
      value: function copy(a) {
        this.set(a);
        return this;
      }
      /**
       * Set `this` to the identity matrix
       * Equivalent to Mat2.identity(this)
       *
       * @returns `this`
       * @category Methods
       */
    }, {
      key: "identity",
      value: function identity() {
        this.set(__privateGet(_Mat2, _IDENTITY_2X2));
        return this;
      }
      /**
       * Multiplies this {@link Mat2} against another one
       * Equivalent to `Mat2.multiply(this, this, b);`
       *
       * @param b - The second operand
       * @returns `this`
       * @category Methods
       */
    }, {
      key: "multiply",
      value: function multiply(b) {
        return _Mat2.multiply(this, this, b);
      }
      /**
       * Alias for {@link Mat2.multiply}
       * @category Methods
       */
    }, {
      key: "mul",
      value: function mul(b) {
        return this;
      }
      // eslint-disable-line @typescript-eslint/no-unused-vars
      /**
       * Transpose this {@link Mat2}
       * Equivalent to `Mat2.transpose(this, this);`
       *
       * @returns `this`
       * @category Methods
       */
    }, {
      key: "transpose",
      value: function transpose() {
        return _Mat2.transpose(this, this);
      }
      /**
       * Inverts this {@link Mat2}
       * Equivalent to `Mat4.invert(this, this);`
       *
       * @returns `this`
       * @category Methods
       */
    }, {
      key: "invert",
      value: function invert() {
        return _Mat2.invert(this, this);
      }
      /**
       * Scales this {@link Mat2} by the dimensions in the given vec3 not using vectorization
       * Equivalent to `Mat2.scale(this, this, v);`
       *
       * @param v - The {@link Vec2} to scale the matrix by
       * @returns `this`
       * @category Methods
       */
    }, {
      key: "scale",
      value: function scale(v) {
        return _Mat2.scale(this, this, v);
      }
      /**
       * Rotates this {@link Mat2} by the given angle around the given axis
       * Equivalent to `Mat2.rotate(this, this, rad);`
       *
       * @param rad - the angle to rotate the matrix by
       * @returns `this`
       * @category Methods
       */
    }, {
      key: "rotate",
      value: function rotate(rad) {
        return _Mat2.rotate(this, this, rad);
      }
      // ===================
      // Static accessors
      // ===================
      /**
       * @category Static
       *
       * @returns The number of bytes in a {@link Mat2}.
       */
    }], [{
      key: "BYTE_LENGTH",
      get: function get() {
        return 4 * Float32Array.BYTES_PER_ELEMENT;
      }
      // ===================
      // Static methods
      // ===================
      /**
       * Creates a new, identity {@link Mat2}
       * @category Static
       *
       * @returns A new {@link Mat2}
       */
    }, {
      key: "create",
      value: function create() {
        return new _Mat2();
      }
      /**
       * Creates a new {@link Mat2} initialized with values from an existing matrix
       * @category Static
       *
       * @param a - Matrix to clone
       * @returns A new {@link Mat2}
       */
    }, {
      key: "clone",
      value: function clone(a) {
        return new _Mat2(a);
      }
      /**
       * Copy the values from one {@link Mat2} to another
       * @category Static
       *
       * @param out - The receiving Matrix
       * @param a - Matrix to copy
       * @returns `out`
       */
    }, {
      key: "copy",
      value: function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        return out;
      }
      /**
       * Create a new {@link Mat2} with the given values
       * @category Static
       *
       * @param values - Matrix components
       * @returns A new {@link Mat2}
       */
    }, {
      key: "fromValues",
      value: function fromValues() {
        for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          values[_key2] = arguments[_key2];
        }
        return _construct(_Mat2, values);
      }
      /**
       * Set the components of a {@link Mat2} to the given values
       * @category Static
       *
       * @param out - The receiving matrix
       * @param values - Matrix components
       * @returns `out`
       */
    }, {
      key: "set",
      value: function set(out) {
        out[0] = arguments.length <= 1 ? undefined : arguments[1];
        out[1] = arguments.length <= 2 ? undefined : arguments[2];
        out[2] = arguments.length <= 3 ? undefined : arguments[3];
        out[3] = arguments.length <= 4 ? undefined : arguments[4];
        return out;
      }
      /**
       * Set a {@link Mat2} to the identity matrix
       * @category Static
       *
       * @param out - The receiving matrix
       * @returns `out`
       */
    }, {
      key: "identity",
      value: function identity(out) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 1;
        return out;
      }
      /**
       * Transpose the values of a {@link Mat2}
       * @category Static
       *
       * @param out - the receiving matrix
       * @param a - the source matrix
       * @returns `out`
       */
    }, {
      key: "transpose",
      value: function transpose(out, a) {
        if (out === a) {
          var a1 = a[1];
          out[1] = a[2];
          out[2] = a1;
        } else {
          out[0] = a[0];
          out[1] = a[2];
          out[2] = a[1];
          out[3] = a[3];
        }
        return out;
      }
      /**
       * Inverts a {@link Mat2}
       * @category Static
       *
       * @param out - the receiving matrix
       * @param a - the source matrix
       * @returns `out` or `null` if the matrix is not invertible
       */
    }, {
      key: "invert",
      value: function invert(out, a) {
        var a0 = a[0];
        var a1 = a[1];
        var a2 = a[2];
        var a3 = a[3];
        var det = a0 * a3 - a2 * a1;
        if (!det) {
          return null;
        }
        det = 1 / det;
        out[0] = a3 * det;
        out[1] = -a1 * det;
        out[2] = -a2 * det;
        out[3] = a0 * det;
        return out;
      }
      /**
       * Calculates the adjugate of a {@link Mat2}
       * @category Static
       *
       * @param out - the receiving matrix
       * @param a - the source matrix
       * @returns `out`
       */
    }, {
      key: "adjoint",
      value: function adjoint(out, a) {
        var a0 = a[0];
        out[0] = a[3];
        out[1] = -a[1];
        out[2] = -a[2];
        out[3] = a0;
        return out;
      }
      /**
       * Calculates the determinant of a {@link Mat2}
       * @category Static
       *
       * @param a - the source matrix
       * @returns determinant of a
       */
    }, {
      key: "determinant",
      value: function determinant(a) {
        return a[0] * a[3] - a[2] * a[1];
      }
      /**
       * Adds two {@link Mat2}'s
       * @category Static
       *
       * @param out - the receiving matrix
       * @param a - the first operand
       * @param b - the second operand
       * @returns `out`
       */
    }, {
      key: "add",
      value: function add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        out[3] = a[3] + b[3];
        return out;
      }
      /**
       * Subtracts matrix b from matrix a
       * @category Static
       *
       * @param out - the receiving matrix
       * @param a - the first operand
       * @param b - the second operand
       * @returns `out`
       */
    }, {
      key: "subtract",
      value: function subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        out[3] = a[3] - b[3];
        return out;
      }
      /**
       * Alias for {@link Mat2.subtract}
       * @category Static
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "sub",
      value: function sub(out, a, b) {
        return out;
      }
      /**
       * Multiplies two {@link Mat2}s
       * @category Static
       *
       * @param out - The receiving Matrix
       * @param a - The first operand
       * @param b - The second operand
       * @returns `out`
       */
    }, {
      key: "multiply",
      value: function multiply(out, a, b) {
        var a0 = a[0];
        var a1 = a[1];
        var a2 = a[2];
        var a3 = a[3];
        var b0 = b[0];
        var b1 = b[1];
        var b2 = b[2];
        var b3 = b[3];
        out[0] = a0 * b0 + a2 * b1;
        out[1] = a1 * b0 + a3 * b1;
        out[2] = a0 * b2 + a2 * b3;
        out[3] = a1 * b2 + a3 * b3;
        return out;
      }
      /**
       * Alias for {@link Mat2.multiply}
       * @category Static
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "mul",
      value: function mul(out, a, b) {
        return out;
      }
      /**
       * Rotates a {@link Mat2} by the given angle
       * @category Static
       *
       * @param out - the receiving matrix
       * @param a - the matrix to rotate
       * @param rad - the angle to rotate the matrix by
       * @returns `out`
       */
    }, {
      key: "rotate",
      value: function rotate(out, a, rad) {
        var a0 = a[0];
        var a1 = a[1];
        var a2 = a[2];
        var a3 = a[3];
        var s = Math.sin(rad);
        var c = Math.cos(rad);
        out[0] = a0 * c + a2 * s;
        out[1] = a1 * c + a3 * s;
        out[2] = a0 * -s + a2 * c;
        out[3] = a1 * -s + a3 * c;
        return out;
      }
      /**
       * Scales the {@link Mat2} by the dimensions in the given {@link Vec2}
       * @category Static
       *
       * @param out - the receiving matrix
       * @param a - the matrix to scale
       * @param v - the {@link Vec2} to scale the matrix by
       * @returns `out`
       **/
    }, {
      key: "scale",
      value: function scale(out, a, v) {
        var a0 = a[0];
        var a1 = a[1];
        var a2 = a[2];
        var a3 = a[3];
        var v0 = v[0];
        var v1 = v[1];
        out[0] = a0 * v0;
        out[1] = a1 * v0;
        out[2] = a2 * v1;
        out[3] = a3 * v1;
        return out;
      }
      /**
       * Creates a {@link Mat2} from a given angle around a given axis
       * This is equivalent to (but much faster than):
       * ```js
       *   mat2.identity(dest);
       *   mat2.rotate(dest, dest, rad);
       * ```
       * @category Static
       *
       * @param out - {@link Mat2} receiving operation result
       * @param rad - the angle to rotate the matrix by
       * @returns `out`
       */
    }, {
      key: "fromRotation",
      value: function fromRotation(out, rad) {
        var s = Math.sin(rad);
        var c = Math.cos(rad);
        out[0] = c;
        out[1] = s;
        out[2] = -s;
        out[3] = c;
        return out;
      }
      /**
       * Creates a {@link Mat2} from a vector scaling
       * This is equivalent to (but much faster than):
       * ```js
       *   mat2.identity(dest);
       *   mat2.scale(dest, dest, vec);
       * ```
       * @category Static
       *
       * @param out - {@link Mat2} receiving operation result
       * @param v - Scaling vector
       * @returns `out`
       */
    }, {
      key: "fromScaling",
      value: function fromScaling(out, v) {
        out[0] = v[0];
        out[1] = 0;
        out[2] = 0;
        out[3] = v[1];
        return out;
      }
      /**
       * Returns Frobenius norm of a {@link Mat2}
       * @category Static
       *
       * @param a - the matrix to calculate Frobenius norm of
       * @returns Frobenius norm
       */
    }, {
      key: "frob",
      value: function frob(a) {
        return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2] + a[3] * a[3]);
      }
      /**
       * Multiply each element of a {@link Mat2} by a scalar.
       * @category Static
       *
       * @param out - the receiving matrix
       * @param a - the matrix to scale
       * @param b - amount to scale the matrix's elements by
       * @returns `out`
       */
    }, {
      key: "multiplyScalar",
      value: function multiplyScalar(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        out[3] = a[3] * b;
        return out;
      }
      /**
       * Adds two {@link Mat2}'s after multiplying each element of the second operand by a scalar value.
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - the first operand
       * @param b - the second operand
       * @param scale - the amount to scale b's elements by before adding
       * @returns `out`
       */
    }, {
      key: "multiplyScalarAndAdd",
      value: function multiplyScalarAndAdd(out, a, b, scale) {
        out[0] = a[0] + b[0] * scale;
        out[1] = a[1] + b[1] * scale;
        out[2] = a[2] + b[2] * scale;
        out[3] = a[3] + b[3] * scale;
        return out;
      }
      /**
       * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
       * @category Static
       *
       * @param L - the lower triangular matrix
       * @param D - the diagonal matrix
       * @param U - the upper triangular matrix
       * @param a - the input matrix to factorize
       */
    }, {
      key: "LDU",
      value: function LDU(L, D, U, a) {
        L[2] = a[2] / a[0];
        U[0] = a[0];
        U[1] = a[1];
        U[3] = a[3] - L[2] * U[1];
        return [L, D, U];
      }
      /**
       * Returns whether two {@link Mat2}s have exactly the same elements in the same position (when compared with ===)
       * @category Static
       *
       * @param a - The first matrix.
       * @param b - The second matrix.
       * @returns True if the matrices are equal, false otherwise.
       */
    }, {
      key: "exactEquals",
      value: function exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
      }
      /**
       * Returns whether two {@link Mat2}s have approximately the same elements in the same position.
       * @category Static
       *
       * @param a - The first matrix.
       * @param b - The second matrix.
       * @returns True if the matrices are equal, false otherwise.
       */
    }, {
      key: "equals",
      value: function equals(a, b) {
        var a0 = a[0];
        var a1 = a[1];
        var a2 = a[2];
        var a3 = a[3];
        var b0 = b[0];
        var b1 = b[1];
        var b2 = b[2];
        var b3 = b[3];
        return Math.abs(a0 - b0) <= GLM_EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= GLM_EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= GLM_EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= GLM_EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3));
      }
      /**
       * Returns a string representation of a {@link Mat2}
       * @category Static
       *
       * @param a - matrix to represent as a string
       * @returns string representation of the matrix
       */
    }, {
      key: "str",
      value: function str(a) {
        return "Mat2(".concat(a.join(", "), ")");
      }
    }]);
  }( /*#__PURE__*/_wrapNativeSuper(Float32Array));
  _IDENTITY_2X2 = new WeakMap();
  __privateAdd(_Mat2, _IDENTITY_2X2, new Float32Array([1, 0, 0, 1]));
  var Mat2 = _Mat2;
  Mat2.prototype.mul = Mat2.prototype.multiply;
  Mat2.mul = Mat2.multiply;
  Mat2.sub = Mat2.subtract;

  // src/_lib/f32/Mat2d.ts
  var _IDENTITY_2X3;
  var _Mat2d = /*#__PURE__*/function (_Float32Array2) {
    /**
     * Create a {@link Mat2}.
     *
     * @category Constructor
     */
    function _Mat2d() {
      var _this2;
      _classCallCheck(this, _Mat2d);
      for (var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        values[_key3] = arguments[_key3];
      }
      switch (values.length) {
        case 6:
          _this2 = _callSuper(this, _Mat2d, [values]);
          break;
        case 2:
          _this2 = _callSuper(this, _Mat2d, [values[0], values[1], 6]);
          break;
        case 1:
          var v = values[0];
          if (typeof v === "number") {
            _this2 = _callSuper(this, _Mat2d, [[v, v, v, v, v, v]]);
          } else {
            _this2 = _callSuper(this, _Mat2d, [v, 0, 6]);
          }
          break;
        default:
          _this2 = _callSuper(this, _Mat2d, [__privateGet(_Mat2d, _IDENTITY_2X3)]);
          break;
      }
      return _assertThisInitialized(_this2);
    }
    // ============
    // Accessors
    // ============
    /**
     * A string representation of `this`
     * Equivalent to `Mat2d.str(this);`
     *
     * @category Accessors
     */
    _inherits(_Mat2d, _Float32Array2);
    return _createClass(_Mat2d, [{
      key: "str",
      get: function get() {
        return _Mat2d.str(this);
      }
      // ===================
      // Instances methods
      // ===================
      /**
       * Copy the values from another {@link Mat2d} into `this`.
       * @category Methods
       *
       * @param a the source vector
       * @returns `this`
       */
    }, {
      key: "copy",
      value: function copy(a) {
        this.set(a);
        return this;
      }
      /**
       * Set `this` to the identity matrix
       * Equivalent to Mat2d.identity(this)
       * @category Methods
       *
       * @returns `this`
       */
    }, {
      key: "identity",
      value: function identity() {
        this.set(__privateGet(_Mat2d, _IDENTITY_2X3));
        return this;
      }
      /**
       * Multiplies this {@link Mat2d} against another one
       * Equivalent to `Mat2d.multiply(this, this, b);`
       * @category Methods
       *
       * @param out - The receiving Matrix
       * @param a - The first operand
       * @param b - The second operand
       * @returns `this`
       */
    }, {
      key: "multiply",
      value: function multiply(b) {
        return _Mat2d.multiply(this, this, b);
      }
      /**
       * Alias for {@link Mat2d.multiply}
       * @category Methods
       */
    }, {
      key: "mul",
      value: function mul(b) {
        return this;
      }
      // eslint-disable-line @typescript-eslint/no-unused-vars
      /**
       * Translate this {@link Mat2d} by the given vector
       * Equivalent to `Mat2d.translate(this, this, v);`
       * @category Methods
       *
       * @param v - The {@link Vec2} to translate by
       * @returns `this`
       */
    }, {
      key: "translate",
      value: function translate(v) {
        return _Mat2d.translate(this, this, v);
      }
      /**
       * Rotates this {@link Mat2d} by the given angle around the given axis
       * Equivalent to `Mat2d.rotate(this, this, rad);`
       * @category Methods
       *
       * @param rad - the angle to rotate the matrix by
       * @returns `this`
       */
    }, {
      key: "rotate",
      value: function rotate(rad) {
        return _Mat2d.rotate(this, this, rad);
      }
      /**
       * Scales this {@link Mat2d} by the dimensions in the given vec3 not using vectorization
       * Equivalent to `Mat2d.scale(this, this, v);`
       * @category Methods
       *
       * @param v - The {@link Vec2} to scale the matrix by
       * @returns `this`
       */
    }, {
      key: "scale",
      value: function scale(v) {
        return _Mat2d.scale(this, this, v);
      }
      // ===================
      // Static accessors
      // ===================
      /**
       * @category Static
       *
       * @returns The number of bytes in a {@link Mat2d}.
       */
    }], [{
      key: "BYTE_LENGTH",
      get: function get() {
        return 6 * Float32Array.BYTES_PER_ELEMENT;
      }
      // ===================
      // Static methods
      // ===================
      /**
       * Creates a new, identity {@link Mat2d}
       * @category Static
       *
       * @returns A new {@link Mat2d}
       */
    }, {
      key: "create",
      value: function create() {
        return new _Mat2d();
      }
      /**
       * Creates a new {@link Mat2d} initialized with values from an existing matrix
       * @category Static
       *
       * @param a - Matrix to clone
       * @returns A new {@link Mat2d}
       */
    }, {
      key: "clone",
      value: function clone(a) {
        return new _Mat2d(a);
      }
      /**
       * Copy the values from one {@link Mat2d} to another
       * @category Static
       *
       * @param out - The receiving Matrix
       * @param a - Matrix to copy
       * @returns `out`
       */
    }, {
      key: "copy",
      value: function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        return out;
      }
      /**
       * Create a new {@link Mat2d} with the given values
       * @category Static
       *
       * @param values - Matrix components
       * @returns A new {@link Mat2d}
       */
    }, {
      key: "fromValues",
      value: function fromValues() {
        for (var _len4 = arguments.length, values = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          values[_key4] = arguments[_key4];
        }
        return _construct(_Mat2d, values);
      }
      /**
       * Set the components of a {@link Mat2d} to the given values
       * @category Static
       *
       * @param out - The receiving matrix
       * @param values - Matrix components
       * @returns `out`
       */
    }, {
      key: "set",
      value: function set(out) {
        out[0] = arguments.length <= 1 ? undefined : arguments[1];
        out[1] = arguments.length <= 2 ? undefined : arguments[2];
        out[2] = arguments.length <= 3 ? undefined : arguments[3];
        out[3] = arguments.length <= 4 ? undefined : arguments[4];
        out[4] = arguments.length <= 5 ? undefined : arguments[5];
        out[5] = arguments.length <= 6 ? undefined : arguments[6];
        return out;
      }
      /**
       * Set a {@link Mat2d} to the identity matrix
       * @category Static
       *
       * @param out - The receiving matrix
       * @returns `out`
       */
    }, {
      key: "identity",
      value: function identity(out) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 1;
        out[4] = 0;
        out[5] = 0;
        return out;
      }
      /**
       * Inverts a {@link Mat2d}
       * @category Static
       *
       * @param out - the receiving matrix
       * @param a - the source matrix
       * @returns `out` or `null` if the matrix is not invertible
       */
    }, {
      key: "invert",
      value: function invert(out, a) {
        var aa = a[0];
        var ab = a[1];
        var ac = a[2];
        var ad = a[3];
        var atx = a[4];
        var aty = a[5];
        var det = aa * ad - ab * ac;
        if (!det) {
          return null;
        }
        det = 1 / det;
        out[0] = ad * det;
        out[1] = -ab * det;
        out[2] = -ac * det;
        out[3] = aa * det;
        out[4] = (ac * aty - ad * atx) * det;
        out[5] = (ab * atx - aa * aty) * det;
        return out;
      }
      /**
       * Calculates the determinant of a {@link Mat2d}
       * @category Static
       *
       * @param a - the source matrix
       * @returns determinant of a
       */
    }, {
      key: "determinant",
      value: function determinant(a) {
        return a[0] * a[3] - a[1] * a[2];
      }
      /**
       * Adds two {@link Mat2d}'s
       * @category Static
       *
       * @param out - the receiving matrix
       * @param a - the first operand
       * @param b - the second operand
       * @returns `out`
       */
    }, {
      key: "add",
      value: function add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        out[3] = a[3] + b[3];
        out[4] = a[4] + b[4];
        out[5] = a[5] + b[5];
        return out;
      }
      /**
       * Subtracts matrix b from matrix a
       * @category Static
       *
       * @param out - the receiving matrix
       * @param a - the first operand
       * @param b - the second operand
       * @returns `out`
       */
    }, {
      key: "subtract",
      value: function subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        out[3] = a[3] - b[3];
        out[4] = a[4] - b[4];
        out[5] = a[5] - b[5];
        return out;
      }
      /**
       * Alias for {@link Mat2d.subtract}
       * @category Static
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "sub",
      value: function sub(out, a, b) {
        return out;
      }
      /**
       * Multiplies two {@link Mat2d}s
       * @category Static
       *
       * @param out - The receiving Matrix
       * @param a - The first operand
       * @param b - The second operand
       * @returns `out`
       */
    }, {
      key: "multiply",
      value: function multiply(out, a, b) {
        var a0 = a[0];
        var a1 = a[1];
        var a2 = a[2];
        var a3 = a[3];
        var a4 = a[4];
        var a5 = a[5];
        var b0 = b[0];
        var b1 = b[1];
        var b2 = b[2];
        var b3 = b[3];
        var b4 = b[4];
        var b5 = b[5];
        out[0] = a0 * b0 + a2 * b1;
        out[1] = a1 * b0 + a3 * b1;
        out[2] = a0 * b2 + a2 * b3;
        out[3] = a1 * b2 + a3 * b3;
        out[4] = a0 * b4 + a2 * b5 + a4;
        out[5] = a1 * b4 + a3 * b5 + a5;
        return out;
      }
      /**
       * Alias for {@link Mat2d.multiply}
       * @category Static
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "mul",
      value: function mul(out, a, b) {
        return out;
      }
      /**
       * Translate a {@link Mat2d} by the given vector
       * @category Static
       *
       * @param out - the receiving matrix
       * @param a - the matrix to translate
       * @param v - vector to translate by
       * @returns `out`
       */
    }, {
      key: "translate",
      value: function translate(out, a, v) {
        var a0 = a[0];
        var a1 = a[1];
        var a2 = a[2];
        var a3 = a[3];
        var a4 = a[4];
        var a5 = a[5];
        var v0 = v[0];
        var v1 = v[1];
        out[0] = a0;
        out[1] = a1;
        out[2] = a2;
        out[3] = a3;
        out[4] = a0 * v0 + a2 * v1 + a4;
        out[5] = a1 * v0 + a3 * v1 + a5;
        return out;
      }
      /**
       * Rotates a {@link Mat2d} by the given angle
       * @category Static
       *
       * @param out - the receiving matrix
       * @param a - the matrix to rotate
       * @param rad - the angle to rotate the matrix by
       * @returns `out`
       */
    }, {
      key: "rotate",
      value: function rotate(out, a, rad) {
        var a0 = a[0];
        var a1 = a[1];
        var a2 = a[2];
        var a3 = a[3];
        var a4 = a[4];
        var a5 = a[5];
        var s = Math.sin(rad);
        var c = Math.cos(rad);
        out[0] = a0 * c + a2 * s;
        out[1] = a1 * c + a3 * s;
        out[2] = a0 * -s + a2 * c;
        out[3] = a1 * -s + a3 * c;
        out[4] = a4;
        out[5] = a5;
        return out;
      }
      /**
       * Scales the {@link Mat2d} by the dimensions in the given {@link Vec2}
       * @category Static
       *
       * @param out - the receiving matrix
       * @param a - the matrix to scale
       * @param v - the {@link Vec2} to scale the matrix by
       * @returns `out`
       **/
    }, {
      key: "scale",
      value: function scale(out, a, v) {
        var a0 = a[0];
        var a1 = a[1];
        var a2 = a[2];
        var a3 = a[3];
        var a4 = a[4];
        var a5 = a[5];
        var v0 = v[0];
        var v1 = v[1];
        out[0] = a0 * v0;
        out[1] = a1 * v0;
        out[2] = a2 * v1;
        out[3] = a3 * v1;
        out[4] = a4;
        out[5] = a5;
        return out;
      }
      // TODO: Got to fromRotation
      /**
       * Creates a {@link Mat2d} from a vector translation
       * This is equivalent to (but much faster than):
       * ```js
       *   Mat2d.identity(dest);
       *   Mat2d.translate(dest, dest, vec);
       * ```
       * @category Static
       *
       * @param out - {@link Mat2d} receiving operation result
       * @param v - Translation vector
       * @returns `out`
       */
    }, {
      key: "fromTranslation",
      value: function fromTranslation(out, v) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 1;
        out[4] = v[0];
        out[5] = v[1];
        return out;
      }
      /**
       * Creates a {@link Mat2d} from a given angle around a given axis
       * This is equivalent to (but much faster than):
       * ```js
       *   Mat2d.identity(dest);
       *   Mat2d.rotate(dest, dest, rad);
       * ```
       * @category Static
       *
       * @param out - {@link Mat2d} receiving operation result
       * @param rad - the angle to rotate the matrix by
       * @returns `out`
       */
    }, {
      key: "fromRotation",
      value: function fromRotation(out, rad) {
        var s = Math.sin(rad);
        var c = Math.cos(rad);
        out[0] = c;
        out[1] = s;
        out[2] = -s;
        out[3] = c;
        out[4] = 0;
        out[5] = 0;
        return out;
      }
      /**
       * Creates a {@link Mat2d} from a vector scaling
       * This is equivalent to (but much faster than):
       * ```js
       *   Mat2d.identity(dest);
       *   Mat2d.scale(dest, dest, vec);
       * ```
       * @category Static
       *
       * @param out - {@link Mat2d} receiving operation result
       * @param v - Scaling vector
       * @returns `out`
       */
    }, {
      key: "fromScaling",
      value: function fromScaling(out, v) {
        out[0] = v[0];
        out[1] = 0;
        out[2] = 0;
        out[3] = v[1];
        out[4] = 0;
        out[5] = 0;
        return out;
      }
      /**
       * Returns Frobenius norm of a {@link Mat2d}
       * @category Static
       *
       * @param a - the matrix to calculate Frobenius norm of
       * @returns Frobenius norm
       */
    }, {
      key: "frob",
      value: function frob(a) {
        return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2] + a[3] * a[3] + a[4] * a[4] + a[5] * a[5] + 1);
      }
      /**
       * Multiply each element of a {@link Mat2d} by a scalar.
       * @category Static
       *
       * @param out - the receiving matrix
       * @param a - the matrix to scale
       * @param b - amount to scale the matrix's elements by
       * @returns `out`
       */
    }, {
      key: "multiplyScalar",
      value: function multiplyScalar(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        out[3] = a[3] * b;
        out[4] = a[4] * b;
        out[5] = a[5] * b;
        return out;
      }
      /**
       * Adds two {@link Mat2d}'s after multiplying each element of the second operand by a scalar value.
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - the first operand
       * @param b - the second operand
       * @param scale - the amount to scale b's elements by before adding
       * @returns `out`
       */
    }, {
      key: "multiplyScalarAndAdd",
      value: function multiplyScalarAndAdd(out, a, b, scale) {
        out[0] = a[0] + b[0] * scale;
        out[1] = a[1] + b[1] * scale;
        out[2] = a[2] + b[2] * scale;
        out[3] = a[3] + b[3] * scale;
        out[4] = a[4] + b[4] * scale;
        out[5] = a[5] + b[5] * scale;
        return out;
      }
      /**
       * Returns whether two {@link Mat2d}s have exactly the same elements in the same position (when compared with ===).
       * @category Static
       *
       * @param a - The first matrix.
       * @param b - The second matrix.
       * @returns True if the matrices are equal, false otherwise.
       */
    }, {
      key: "exactEquals",
      value: function exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
      }
      /**
       * Returns whether two {@link Mat2d}s have approximately the same elements in the same position.
       * @category Static
       *
       * @param a - The first matrix.
       * @param b - The second matrix.
       * @returns True if the matrices are equal, false otherwise.
       */
    }, {
      key: "equals",
      value: function equals(a, b) {
        var a0 = a[0];
        var a1 = a[1];
        var a2 = a[2];
        var a3 = a[3];
        var a4 = a[4];
        var a5 = a[5];
        var b0 = b[0];
        var b1 = b[1];
        var b2 = b[2];
        var b3 = b[3];
        var b4 = b[4];
        var b5 = b[5];
        return Math.abs(a0 - b0) <= GLM_EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= GLM_EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= GLM_EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= GLM_EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= GLM_EPSILON * Math.max(1, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= GLM_EPSILON * Math.max(1, Math.abs(a5), Math.abs(b5));
      }
      /**
       * Returns a string representation of a {@link Mat2d}
       * @category Static
       *
       * @param a - matrix to represent as a string
       * @returns string representation of the matrix
       */
    }, {
      key: "str",
      value: function str(a) {
        return "Mat2d(".concat(a.join(", "), ")");
      }
    }]);
  }( /*#__PURE__*/_wrapNativeSuper(Float32Array));
  _IDENTITY_2X3 = new WeakMap();
  __privateAdd(_Mat2d, _IDENTITY_2X3, new Float32Array([1, 0, 0, 1, 0, 0]));
  var Mat2d = _Mat2d;
  Mat2d.mul = Mat2d.multiply;
  Mat2d.sub = Mat2d.subtract;

  // src/_lib/f32/Mat3.ts
  var _IDENTITY_3X3;
  var _Mat3 = /*#__PURE__*/function (_Float32Array3) {
    /**
     * Create a {@link Mat3}.
     *
     * @category Constructor
     */
    function _Mat3() {
      var _this3;
      _classCallCheck(this, _Mat3);
      for (var _len5 = arguments.length, values = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        values[_key5] = arguments[_key5];
      }
      switch (values.length) {
        case 9:
          _this3 = _callSuper(this, _Mat3, [values]);
          break;
        case 2:
          _this3 = _callSuper(this, _Mat3, [values[0], values[1], 9]);
          break;
        case 1:
          var v = values[0];
          if (typeof v === "number") {
            _this3 = _callSuper(this, _Mat3, [[v, v, v, v, v, v, v, v, v]]);
          } else {
            _this3 = _callSuper(this, _Mat3, [v, 0, 9]);
          }
          break;
        default:
          _this3 = _callSuper(this, _Mat3, [__privateGet(_Mat3, _IDENTITY_3X3)]);
          break;
      }
      return _assertThisInitialized(_this3);
    }
    // ============
    // Accessors
    // ============
    /**
     * A string representation of `this`
     * Equivalent to `Mat3.str(this);`
     *
     * @category Accessors
     */
    _inherits(_Mat3, _Float32Array3);
    return _createClass(_Mat3, [{
      key: "str",
      get: function get() {
        return _Mat3.str(this);
      }
      // ===================
      // Instance methods
      // ===================
      /**
       * Copy the values from another {@link Mat3} into `this`.
       * @category Methods
       *
       * @param a the source vector
       * @returns `this`
       */
    }, {
      key: "copy",
      value: function copy(a) {
        this.set(a);
        return this;
      }
      /**
       * Set `this` to the identity matrix
       * Equivalent to Mat3.identity(this)
       * @category Methods
       *
       * @returns `this`
       */
    }, {
      key: "identity",
      value: function identity() {
        this.set(__privateGet(_Mat3, _IDENTITY_3X3));
        return this;
      }
      /**
       * Multiplies this {@link Mat3} against another one
       * Equivalent to `Mat3.multiply(this, this, b);`
       * @category Methods
       *
       * @param out - The receiving Matrix
       * @param a - The first operand
       * @param b - The second operand
       * @returns `this`
       */
    }, {
      key: "multiply",
      value: function multiply(b) {
        return _Mat3.multiply(this, this, b);
      }
      /**
       * Alias for {@link Mat3.multiply}
       * @category Methods
       */
    }, {
      key: "mul",
      value: function mul(b) {
        return this;
      }
      // eslint-disable-line @typescript-eslint/no-unused-vars
      /**
       * Transpose this {@link Mat3}
       * Equivalent to `Mat3.transpose(this, this);`
       * @category Methods
       *
       * @returns `this`
       */
    }, {
      key: "transpose",
      value: function transpose() {
        return _Mat3.transpose(this, this);
      }
      /**
       * Inverts this {@link Mat3}
       * Equivalent to `Mat4.invert(this, this);`
       * @category Methods
       *
       * @returns `this`
       */
    }, {
      key: "invert",
      value: function invert() {
        return _Mat3.invert(this, this);
      }
      /**
       * Translate this {@link Mat3} by the given vector
       * Equivalent to `Mat3.translate(this, this, v);`
       * @category Methods
       *
       * @param v - The {@link Vec2} to translate by
       * @returns `this`
       */
    }, {
      key: "translate",
      value: function translate(v) {
        return _Mat3.translate(this, this, v);
      }
      /**
       * Rotates this {@link Mat3} by the given angle around the given axis
       * Equivalent to `Mat3.rotate(this, this, rad);`
       * @category Methods
       *
       * @param rad - the angle to rotate the matrix by
       * @returns `this`
       */
    }, {
      key: "rotate",
      value: function rotate(rad) {
        return _Mat3.rotate(this, this, rad);
      }
      /**
       * Scales this {@link Mat3} by the dimensions in the given vec3 not using vectorization
       * Equivalent to `Mat3.scale(this, this, v);`
       * @category Methods
       *
       * @param v - The {@link Vec2} to scale the matrix by
       * @returns `this`
       */
    }, {
      key: "scale",
      value: function scale(v) {
        return _Mat3.scale(this, this, v);
      }
      // ===================
      // Static accessors
      // ===================
      /**
       * @category Static
       *
       * @returns The number of bytes in a {@link Mat3}.
       */
    }], [{
      key: "BYTE_LENGTH",
      get: function get() {
        return 9 * Float32Array.BYTES_PER_ELEMENT;
      }
      // ===================
      // Static methods
      // ===================
      /**
       * Creates a new, identity {@link Mat3}
       * @category Static
       *
       * @returns A new {@link Mat3}
       */
    }, {
      key: "create",
      value: function create() {
        return new _Mat3();
      }
      /**
       * Creates a new {@link Mat3} initialized with values from an existing matrix
       * @category Static
       *
       * @param a - Matrix to clone
       * @returns A new {@link Mat3}
       */
    }, {
      key: "clone",
      value: function clone(a) {
        return new _Mat3(a);
      }
      /**
       * Copy the values from one {@link Mat3} to another
       * @category Static
       *
       * @param out - The receiving Matrix
       * @param a - Matrix to copy
       * @returns `out`
       */
    }, {
      key: "copy",
      value: function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[8] = a[8];
        return out;
      }
      /**
       * Create a new {@link Mat3} with the given values
       * @category Static
       *
       * @param values - Matrix components
       * @returns A new {@link Mat3}
       */
    }, {
      key: "fromValues",
      value: function fromValues() {
        for (var _len6 = arguments.length, values = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          values[_key6] = arguments[_key6];
        }
        return _construct(_Mat3, values);
      }
      /**
       * Set the components of a {@link Mat3} to the given values
       * @category Static
       *
       * @param out - The receiving matrix
       * @param values - Matrix components
       * @returns `out`
       */
    }, {
      key: "set",
      value: function set(out) {
        out[0] = arguments.length <= 1 ? undefined : arguments[1];
        out[1] = arguments.length <= 2 ? undefined : arguments[2];
        out[2] = arguments.length <= 3 ? undefined : arguments[3];
        out[3] = arguments.length <= 4 ? undefined : arguments[4];
        out[4] = arguments.length <= 5 ? undefined : arguments[5];
        out[5] = arguments.length <= 6 ? undefined : arguments[6];
        out[6] = arguments.length <= 7 ? undefined : arguments[7];
        out[7] = arguments.length <= 8 ? undefined : arguments[8];
        out[8] = arguments.length <= 9 ? undefined : arguments[9];
        return out;
      }
      /**
       * Set a {@link Mat3} to the identity matrix
       * @category Static
       *
       * @param out - The receiving matrix
       * @returns `out`
       */
    }, {
      key: "identity",
      value: function identity(out) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 1;
        out[5] = 0;
        out[6] = 0;
        out[7] = 0;
        out[8] = 1;
        return out;
      }
      /**
       * Transpose the values of a {@link Mat3}
       * @category Static
       *
       * @param out - the receiving matrix
       * @param a - the source matrix
       * @returns `out`
       */
    }, {
      key: "transpose",
      value: function transpose(out, a) {
        if (out === a) {
          var a01 = a[1],
            a02 = a[2],
            a12 = a[5];
          out[1] = a[3];
          out[2] = a[6];
          out[3] = a01;
          out[5] = a[7];
          out[6] = a02;
          out[7] = a12;
        } else {
          out[0] = a[0];
          out[1] = a[3];
          out[2] = a[6];
          out[3] = a[1];
          out[4] = a[4];
          out[5] = a[7];
          out[6] = a[2];
          out[7] = a[5];
          out[8] = a[8];
        }
        return out;
      }
      /**
       * Inverts a {@link Mat3}
       * @category Static
       *
       * @param out - the receiving matrix
       * @param a - the source matrix
       * @returns `out` or `null` if the matrix is not invertible
       */
    }, {
      key: "invert",
      value: function invert(out, a) {
        var a00 = a[0],
          a01 = a[1],
          a02 = a[2];
        var a10 = a[3],
          a11 = a[4],
          a12 = a[5];
        var a20 = a[6],
          a21 = a[7],
          a22 = a[8];
        var b01 = a22 * a11 - a12 * a21;
        var b11 = -a22 * a10 + a12 * a20;
        var b21 = a21 * a10 - a11 * a20;
        var det = a00 * b01 + a01 * b11 + a02 * b21;
        if (!det) {
          return null;
        }
        det = 1 / det;
        out[0] = b01 * det;
        out[1] = (-a22 * a01 + a02 * a21) * det;
        out[2] = (a12 * a01 - a02 * a11) * det;
        out[3] = b11 * det;
        out[4] = (a22 * a00 - a02 * a20) * det;
        out[5] = (-a12 * a00 + a02 * a10) * det;
        out[6] = b21 * det;
        out[7] = (-a21 * a00 + a01 * a20) * det;
        out[8] = (a11 * a00 - a01 * a10) * det;
        return out;
      }
      /**
       * Calculates the adjugate of a {@link Mat3}
       * @category Static
       *
       * @param out - the receiving matrix
       * @param a - the source matrix
       * @returns `out`
       */
    }, {
      key: "adjoint",
      value: function adjoint(out, a) {
        var a00 = a[0];
        var a01 = a[1];
        var a02 = a[2];
        var a10 = a[3];
        var a11 = a[4];
        var a12 = a[5];
        var a20 = a[6];
        var a21 = a[7];
        var a22 = a[8];
        out[0] = a11 * a22 - a12 * a21;
        out[1] = a02 * a21 - a01 * a22;
        out[2] = a01 * a12 - a02 * a11;
        out[3] = a12 * a20 - a10 * a22;
        out[4] = a00 * a22 - a02 * a20;
        out[5] = a02 * a10 - a00 * a12;
        out[6] = a10 * a21 - a11 * a20;
        out[7] = a01 * a20 - a00 * a21;
        out[8] = a00 * a11 - a01 * a10;
        return out;
      }
      /**
       * Calculates the determinant of a {@link Mat3}
       * @category Static
       *
       * @param a - the source matrix
       * @returns determinant of a
       */
    }, {
      key: "determinant",
      value: function determinant(a) {
        var a00 = a[0];
        var a01 = a[1];
        var a02 = a[2];
        var a10 = a[3];
        var a11 = a[4];
        var a12 = a[5];
        var a20 = a[6];
        var a21 = a[7];
        var a22 = a[8];
        return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
      }
      /**
       * Adds two {@link Mat3}'s
       * @category Static
       *
       * @param out - the receiving matrix
       * @param a - the first operand
       * @param b - the second operand
       * @returns `out`
       */
    }, {
      key: "add",
      value: function add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        out[3] = a[3] + b[3];
        out[4] = a[4] + b[4];
        out[5] = a[5] + b[5];
        out[6] = a[6] + b[6];
        out[7] = a[7] + b[7];
        out[8] = a[8] + b[8];
        return out;
      }
      /**
       * Subtracts matrix b from matrix a
       * @category Static
       *
       * @param out - the receiving matrix
       * @param a - the first operand
       * @param b - the second operand
       * @returns `out`
       */
    }, {
      key: "subtract",
      value: function subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        out[3] = a[3] - b[3];
        out[4] = a[4] - b[4];
        out[5] = a[5] - b[5];
        out[6] = a[6] - b[6];
        out[7] = a[7] - b[7];
        out[8] = a[8] - b[8];
        return out;
      }
      /**
       * Alias for {@link Mat3.subtract}
       * @category Static
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "sub",
      value: function sub(out, a, b) {
        return out;
      }
      /**
       * Multiplies two {@link Mat3}s
       * @category Static
       *
       * @param out - The receiving Matrix
       * @param a - The first operand
       * @param b - The second operand
       * @returns `out`
       */
    }, {
      key: "multiply",
      value: function multiply(out, a, b) {
        var a00 = a[0];
        var a01 = a[1];
        var a02 = a[2];
        var a10 = a[3];
        var a11 = a[4];
        var a12 = a[5];
        var a20 = a[6];
        var a21 = a[7];
        var a22 = a[8];
        var b0 = b[0];
        var b1 = b[1];
        var b2 = b[2];
        out[0] = b0 * a00 + b1 * a10 + b2 * a20;
        out[1] = b0 * a01 + b1 * a11 + b2 * a21;
        out[2] = b0 * a02 + b1 * a12 + b2 * a22;
        b0 = b[3];
        b1 = b[4];
        b2 = b[5];
        out[3] = b0 * a00 + b1 * a10 + b2 * a20;
        out[4] = b0 * a01 + b1 * a11 + b2 * a21;
        out[5] = b0 * a02 + b1 * a12 + b2 * a22;
        b0 = b[6];
        b1 = b[7];
        b2 = b[8];
        out[6] = b0 * a00 + b1 * a10 + b2 * a20;
        out[7] = b0 * a01 + b1 * a11 + b2 * a21;
        out[8] = b0 * a02 + b1 * a12 + b2 * a22;
        return out;
      }
      /**
       * Alias for {@link Mat3.multiply}
       * @category Static
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "mul",
      value: function mul(out, a, b) {
        return out;
      }
      /**
       * Translate a {@link Mat3} by the given vector
       * @category Static
       *
       * @param out - the receiving matrix
       * @param a - the matrix to translate
       * @param v - vector to translate by
       * @returns `out`
       */
    }, {
      key: "translate",
      value: function translate(out, a, v) {
        var a00 = a[0];
        var a01 = a[1];
        var a02 = a[2];
        var a10 = a[3];
        var a11 = a[4];
        var a12 = a[5];
        var a20 = a[6];
        var a21 = a[7];
        var a22 = a[8];
        var x = v[0];
        var y = v[1];
        out[0] = a00;
        out[1] = a01;
        out[2] = a02;
        out[3] = a10;
        out[4] = a11;
        out[5] = a12;
        out[6] = x * a00 + y * a10 + a20;
        out[7] = x * a01 + y * a11 + a21;
        out[8] = x * a02 + y * a12 + a22;
        return out;
      }
      /**
       * Rotates a {@link Mat3} by the given angle
       * @category Static
       *
       * @param out - the receiving matrix
       * @param a - the matrix to rotate
       * @param rad - the angle to rotate the matrix by
       * @returns `out`
       */
    }, {
      key: "rotate",
      value: function rotate(out, a, rad) {
        var a00 = a[0];
        var a01 = a[1];
        var a02 = a[2];
        var a10 = a[3];
        var a11 = a[4];
        var a12 = a[5];
        var a20 = a[6];
        var a21 = a[7];
        var a22 = a[8];
        var s = Math.sin(rad);
        var c = Math.cos(rad);
        out[0] = c * a00 + s * a10;
        out[1] = c * a01 + s * a11;
        out[2] = c * a02 + s * a12;
        out[3] = c * a10 - s * a00;
        out[4] = c * a11 - s * a01;
        out[5] = c * a12 - s * a02;
        out[6] = a20;
        out[7] = a21;
        out[8] = a22;
        return out;
      }
      /**
       * Scales the {@link Mat3} by the dimensions in the given {@link Vec2}
       * @category Static
       *
       * @param out - the receiving matrix
       * @param a - the matrix to scale
       * @param v - the {@link Vec2} to scale the matrix by
       * @returns `out`
       **/
    }, {
      key: "scale",
      value: function scale(out, a, v) {
        var x = v[0];
        var y = v[1];
        out[0] = x * a[0];
        out[1] = x * a[1];
        out[2] = x * a[2];
        out[3] = y * a[3];
        out[4] = y * a[4];
        out[5] = y * a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[8] = a[8];
        return out;
      }
      /**
       * Creates a {@link Mat3} from a vector translation
       * This is equivalent to (but much faster than):
       * ```js
       *   mat3.identity(dest);
       *   mat3.translate(dest, dest, vec);
       * ```
       * @category Static
       *
       * @param out - {@link Mat3} receiving operation result
       * @param v - Translation vector
       * @returns `out`
       */
    }, {
      key: "fromTranslation",
      value: function fromTranslation(out, v) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 1;
        out[5] = 0;
        out[6] = v[0];
        out[7] = v[1];
        out[8] = 1;
        return out;
      }
      /**
       * Creates a {@link Mat3} from a given angle around a given axis
       * This is equivalent to (but much faster than):
       *
       *     mat3.identity(dest);
       *     mat3.rotate(dest, dest, rad);
       * @category Static
       *
       * @param out - {@link Mat3} receiving operation result
       * @param rad - the angle to rotate the matrix by
       * @returns `out`
       */
    }, {
      key: "fromRotation",
      value: function fromRotation(out, rad) {
        var s = Math.sin(rad);
        var c = Math.cos(rad);
        out[0] = c;
        out[1] = s;
        out[2] = 0;
        out[3] = -s;
        out[4] = c;
        out[5] = 0;
        out[6] = 0;
        out[7] = 0;
        out[8] = 1;
        return out;
      }
      /**
       * Creates a {@link Mat3} from a vector scaling
       * This is equivalent to (but much faster than):
       * ```js
       *   mat3.identity(dest);
       *   mat3.scale(dest, dest, vec);
       * ```
       * @category Static
       *
       * @param out - {@link Mat3} receiving operation result
       * @param v - Scaling vector
       * @returns `out`
       */
    }, {
      key: "fromScaling",
      value: function fromScaling(out, v) {
        out[0] = v[0];
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = v[1];
        out[5] = 0;
        out[6] = 0;
        out[7] = 0;
        out[8] = 1;
        return out;
      }
      /**
       * Copies the upper-left 3x3 values of a {@link Mat2d} into the given
       * {@link Mat3}.
       * @category Static
       *
       * @param out - the receiving 3x3 matrix
       * @param a - the source 2x3 matrix
       * @returns `out`
       */
    }, {
      key: "fromMat2d",
      value: function fromMat2d(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = 0;
        out[3] = a[2];
        out[4] = a[3];
        out[5] = 0;
        out[6] = a[4];
        out[7] = a[5];
        out[8] = 1;
        return out;
      }
      /**
       * Calculates a {@link Mat3} from the given quaternion
       * @category Static
       *
       * @param out - {@link Mat3} receiving operation result
       * @param q - {@link Quat} to create matrix from
       * @returns `out`
       */
    }, {
      key: "fromQuat",
      value: function fromQuat(out, q) {
        var x = q[0];
        var y = q[1];
        var z = q[2];
        var w = q[3];
        var x2 = x + x;
        var y2 = y + y;
        var z2 = z + z;
        var xx = x * x2;
        var yx = y * x2;
        var yy = y * y2;
        var zx = z * x2;
        var zy = z * y2;
        var zz = z * z2;
        var wx = w * x2;
        var wy = w * y2;
        var wz = w * z2;
        out[0] = 1 - yy - zz;
        out[3] = yx - wz;
        out[6] = zx + wy;
        out[1] = yx + wz;
        out[4] = 1 - xx - zz;
        out[7] = zy - wx;
        out[2] = zx - wy;
        out[5] = zy + wx;
        out[8] = 1 - xx - yy;
        return out;
      }
      /**
       * Copies the upper-left 3x3 values of a {@link Mat4} into the given
       * {@link Mat3}.
       * @category Static
       *
       * @param out - the receiving 3x3 matrix
       * @param a - the source 4x4 matrix
       * @returns `out`
       */
    }, {
      key: "fromMat4",
      value: function fromMat4(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[4];
        out[4] = a[5];
        out[5] = a[6];
        out[6] = a[8];
        out[7] = a[9];
        out[8] = a[10];
        return out;
      }
      /**
       * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
       * @category Static
       *
       * @param {mat3} out mat3 receiving operation result
       * @param {ReadonlyMat4} a Mat4 to derive the normal matrix from
       * @returns `out` or `null` if the matrix is not invertible
       */
    }, {
      key: "normalFromMat4",
      value: function normalFromMat4(out, a) {
        var a00 = a[0];
        var a01 = a[1];
        var a02 = a[2];
        var a03 = a[3];
        var a10 = a[4];
        var a11 = a[5];
        var a12 = a[6];
        var a13 = a[7];
        var a20 = a[8];
        var a21 = a[9];
        var a22 = a[10];
        var a23 = a[11];
        var a30 = a[12];
        var a31 = a[13];
        var a32 = a[14];
        var a33 = a[15];
        var b00 = a00 * a11 - a01 * a10;
        var b01 = a00 * a12 - a02 * a10;
        var b02 = a00 * a13 - a03 * a10;
        var b03 = a01 * a12 - a02 * a11;
        var b04 = a01 * a13 - a03 * a11;
        var b05 = a02 * a13 - a03 * a12;
        var b06 = a20 * a31 - a21 * a30;
        var b07 = a20 * a32 - a22 * a30;
        var b08 = a20 * a33 - a23 * a30;
        var b09 = a21 * a32 - a22 * a31;
        var b10 = a21 * a33 - a23 * a31;
        var b11 = a22 * a33 - a23 * a32;
        var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
        if (!det) {
          return null;
        }
        det = 1 / det;
        out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
        out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
        out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
        out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
        out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
        out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
        out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
        out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
        out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
        return out;
      }
      /**
       * Calculates a {@link Mat3} normal matrix (transpose inverse) from a {@link Mat4}
       * This version omits the calculation of the constant factor (1/determinant), so
       * any normals transformed with it will need to be renormalized.
       * From https://stackoverflow.com/a/27616419/25968
       * @category Static
       *
       * @param out - Matrix receiving operation result
       * @param a - Mat4 to derive the normal matrix from
       * @returns `out`
       */
    }, {
      key: "normalFromMat4Fast",
      value: function normalFromMat4Fast(out, a) {
        var ax = a[0];
        var ay = a[1];
        var az = a[2];
        var bx = a[4];
        var by = a[5];
        var bz = a[6];
        var cx = a[8];
        var cy = a[9];
        var cz = a[10];
        out[0] = by * cz - cz * cy;
        out[1] = bz * cx - cx * cz;
        out[2] = bx * cy - cy * cx;
        out[3] = cy * az - cz * ay;
        out[4] = cz * ax - cx * az;
        out[5] = cx * ay - cy * ax;
        out[6] = ay * bz - az * by;
        out[7] = az * bx - ax * bz;
        out[8] = ax * by - ay * bx;
        return out;
      }
      /**
       * Generates a 2D projection matrix with the given bounds
       * @category Static
       *
       * @param out mat3 frustum matrix will be written into
       * @param width Width of your gl context
       * @param height Height of gl context
       * @returns `out`
       */
    }, {
      key: "projection",
      value: function projection(out, width, height) {
        out[0] = 2 / width;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = -2 / height;
        out[5] = 0;
        out[6] = -1;
        out[7] = 1;
        out[8] = 1;
        return out;
      }
      /**
       * Returns Frobenius norm of a {@link Mat3}
       * @category Static
       *
       * @param a - the matrix to calculate Frobenius norm of
       * @returns Frobenius norm
       */
    }, {
      key: "frob",
      value: function frob(a) {
        return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2] + a[3] * a[3] + a[4] * a[4] + a[5] * a[5] + a[6] * a[6] + a[7] * a[7] + a[8] * a[8]);
      }
      /**
       * Multiply each element of a {@link Mat3} by a scalar.
       * @category Static
       *
       * @param out - the receiving matrix
       * @param a - the matrix to scale
       * @param b - amount to scale the matrix's elements by
       * @returns `out`
       */
    }, {
      key: "multiplyScalar",
      value: function multiplyScalar(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        out[3] = a[3] * b;
        out[4] = a[4] * b;
        out[5] = a[5] * b;
        out[6] = a[6] * b;
        out[7] = a[7] * b;
        out[8] = a[8] * b;
        return out;
      }
      /**
       * Adds two {@link Mat3}'s after multiplying each element of the second operand by a scalar value.
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - the first operand
       * @param b - the second operand
       * @param scale - the amount to scale b's elements by before adding
       * @returns `out`
       */
    }, {
      key: "multiplyScalarAndAdd",
      value: function multiplyScalarAndAdd(out, a, b, scale) {
        out[0] = a[0] + b[0] * scale;
        out[1] = a[1] + b[1] * scale;
        out[2] = a[2] + b[2] * scale;
        out[3] = a[3] + b[3] * scale;
        out[4] = a[4] + b[4] * scale;
        out[5] = a[5] + b[5] * scale;
        out[6] = a[6] + b[6] * scale;
        out[7] = a[7] + b[7] * scale;
        out[8] = a[8] + b[8] * scale;
        return out;
      }
      /**
       * Returns whether two {@link Mat3}s have exactly the same elements in the same position (when compared with ===).
       * @category Static
       *
       * @param a - The first matrix.
       * @param b - The second matrix.
       * @returns True if the matrices are equal, false otherwise.
       */
    }, {
      key: "exactEquals",
      value: function exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
      }
      /**
       * Returns whether two {@link Mat3}s have approximately the same elements in the same position.
       * @category Static
       *
       * @param a - The first matrix.
       * @param b - The second matrix.
       * @returns True if the matrices are equal, false otherwise.
       */
    }, {
      key: "equals",
      value: function equals(a, b) {
        var a0 = a[0];
        var a1 = a[1];
        var a2 = a[2];
        var a3 = a[3];
        var a4 = a[4];
        var a5 = a[5];
        var a6 = a[6];
        var a7 = a[7];
        var a8 = a[8];
        var b0 = b[0];
        var b1 = b[1];
        var b2 = b[2];
        var b3 = b[3];
        var b4 = b[4];
        var b5 = b[5];
        var b6 = b[6];
        var b7 = b[7];
        var b8 = b[8];
        return Math.abs(a0 - b0) <= GLM_EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= GLM_EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= GLM_EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= GLM_EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= GLM_EPSILON * Math.max(1, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= GLM_EPSILON * Math.max(1, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= GLM_EPSILON * Math.max(1, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= GLM_EPSILON * Math.max(1, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= GLM_EPSILON * Math.max(1, Math.abs(a8), Math.abs(b8));
      }
      /**
       * Returns a string representation of a {@link Mat3}
       * @category Static
       *
       * @param a - matrix to represent as a string
       * @returns string representation of the matrix
       */
    }, {
      key: "str",
      value: function str(a) {
        return "Mat3(".concat(a.join(", "), ")");
      }
    }]);
  }( /*#__PURE__*/_wrapNativeSuper(Float32Array));
  _IDENTITY_3X3 = new WeakMap();
  __privateAdd(_Mat3, _IDENTITY_3X3, new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]));
  var Mat3 = _Mat3;
  Mat3.prototype.mul = Mat3.prototype.multiply;
  Mat3.mul = Mat3.multiply;
  Mat3.sub = Mat3.subtract;

  // src/_lib/f32/Mat4.ts
  var _IDENTITY_4X4, _TMP_VEC3;
  var _Mat4 = /*#__PURE__*/function (_Float32Array4) {
    /**
     * Create a {@link Mat4}.
     *
     * @category Constructor
     */
    function _Mat4() {
      var _this4;
      _classCallCheck(this, _Mat4);
      for (var _len7 = arguments.length, values = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        values[_key7] = arguments[_key7];
      }
      switch (values.length) {
        case 16:
          _this4 = _callSuper(this, _Mat4, [values]);
          break;
        case 2:
          _this4 = _callSuper(this, _Mat4, [values[0], values[1], 16]);
          break;
        case 1:
          var v = values[0];
          if (typeof v === "number") {
            _this4 = _callSuper(this, _Mat4, [[v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v]]);
          } else {
            _this4 = _callSuper(this, _Mat4, [v, 0, 16]);
          }
          break;
        default:
          _this4 = _callSuper(this, _Mat4, [__privateGet(_Mat4, _IDENTITY_4X4)]);
          break;
      }
      return _assertThisInitialized(_this4);
    }
    // ============
    // Accessors
    // ============
    /**
     * A string representation of `this`
     * Equivalent to `Mat4.str(this);`
     *
     * @category Accessors
     */
    _inherits(_Mat4, _Float32Array4);
    return _createClass(_Mat4, [{
      key: "str",
      get: function get() {
        return _Mat4.str(this);
      }
      // ===================
      // Instance methods
      // ===================
      /**
       * Copy the values from another {@link Mat4} into `this`.
       * @category Methods
       *
       * @param a the source vector
       * @returns `this`
       */
    }, {
      key: "copy",
      value: function copy(a) {
        this.set(a);
        return this;
      }
      /**
       * Set `this` to the identity matrix
       * Equivalent to Mat4.identity(this)
       * @category Methods
       *
       * @returns `this`
       */
    }, {
      key: "identity",
      value: function identity() {
        this.set(__privateGet(_Mat4, _IDENTITY_4X4));
        return this;
      }
      /**
       * Multiplies this {@link Mat4} against another one
       * Equivalent to `Mat4.multiply(this, this, b);`
       * @category Methods
       *
       * @param b - The second operand
       * @returns `this`
       */
    }, {
      key: "multiply",
      value: function multiply(b) {
        return _Mat4.multiply(this, this, b);
      }
      /**
       * Alias for {@link Mat4.multiply}
       * @category Methods
       */
    }, {
      key: "mul",
      value: function mul(b) {
        return this;
      }
      // eslint-disable-line @typescript-eslint/no-unused-vars
      /**
       * Transpose this {@link Mat4}
       * Equivalent to `Mat4.transpose(this, this);`
       * @category Methods
       *
       * @returns `this`
       */
    }, {
      key: "transpose",
      value: function transpose() {
        return _Mat4.transpose(this, this);
      }
      /**
       * Inverts this {@link Mat4}
       * Equivalent to `Mat4.invert(this, this);`
       * @category Methods
       *
       * @returns `this`
       */
    }, {
      key: "invert",
      value: function invert() {
        return _Mat4.invert(this, this);
      }
      /**
       * Translate this {@link Mat4} by the given vector
       * Equivalent to `Mat4.translate(this, this, v);`
       * @category Methods
       *
       * @param v - The {@link Vec3} to translate by
       * @returns `this`
       */
    }, {
      key: "translate",
      value: function translate(v) {
        return _Mat4.translate(this, this, v);
      }
      /**
       * Rotates this {@link Mat4} by the given angle around the given axis
       * Equivalent to `Mat4.rotate(this, this, rad, axis);`
       * @category Methods
       *
       * @param rad - the angle to rotate the matrix by
       * @param axis - the axis to rotate around
       * @returns `this`
       */
    }, {
      key: "rotate",
      value: function rotate(rad, axis) {
        return _Mat4.rotate(this, this, rad, axis);
      }
      /**
       * Scales this {@link Mat4} by the dimensions in the given vec3 not using vectorization
       * Equivalent to `Mat4.scale(this, this, v);`
       * @category Methods
       *
       * @param v - The {@link Vec3} to scale the matrix by
       * @returns `this`
       */
    }, {
      key: "scale",
      value: function scale(v) {
        return _Mat4.scale(this, this, v);
      }
      /**
       * Rotates this {@link Mat4} by the given angle around the X axis
       * Equivalent to `Mat4.rotateX(this, this, rad);`
       * @category Methods
       *
       * @param rad - the angle to rotate the matrix by
       * @returns `this`
       */
    }, {
      key: "rotateX",
      value: function rotateX(rad) {
        return _Mat4.rotateX(this, this, rad);
      }
      /**
       * Rotates this {@link Mat4} by the given angle around the Y axis
       * Equivalent to `Mat4.rotateY(this, this, rad);`
       * @category Methods
       *
       * @param rad - the angle to rotate the matrix by
       * @returns `this`
       */
    }, {
      key: "rotateY",
      value: function rotateY(rad) {
        return _Mat4.rotateY(this, this, rad);
      }
      /**
       * Rotates this {@link Mat4} by the given angle around the Z axis
       * Equivalent to `Mat4.rotateZ(this, this, rad);`
       * @category Methods
       *
       * @param rad - the angle to rotate the matrix by
       * @returns `this`
       */
    }, {
      key: "rotateZ",
      value: function rotateZ(rad) {
        return _Mat4.rotateZ(this, this, rad);
      }
      /**
       * Generates a perspective projection matrix with the given bounds.
       * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
       * which matches WebGL/OpenGL's clip volume.
       * Passing null/undefined/no value for far will generate infinite projection matrix.
       * Equivalent to `Mat4.perspectiveNO(this, fovy, aspect, near, far);`
       * @category Methods
       *
       * @param fovy - Vertical field of view in radians
       * @param aspect - Aspect ratio. typically viewport width/height
       * @param near - Near bound of the frustum
       * @param far - Far bound of the frustum, can be null or Infinity
       * @returns `this`
       */
    }, {
      key: "perspectiveNO",
      value: function perspectiveNO(fovy, aspect, near, far) {
        return _Mat4.perspectiveNO(this, fovy, aspect, near, far);
      }
      /**
       * Generates a perspective projection matrix suitable for WebGPU with the given bounds.
       * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
       * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
       * Passing null/undefined/no value for far will generate infinite projection matrix.
       * Equivalent to `Mat4.perspectiveZO(this, fovy, aspect, near, far);`
       * @category Methods
       *
       * @param fovy - Vertical field of view in radians
       * @param aspect - Aspect ratio. typically viewport width/height
       * @param near - Near bound of the frustum
       * @param far - Far bound of the frustum, can be null or Infinity
       * @returns `this`
       */
    }, {
      key: "perspectiveZO",
      value: function perspectiveZO(fovy, aspect, near, far) {
        return _Mat4.perspectiveZO(this, fovy, aspect, near, far);
      }
      /**
       * Generates a orthogonal projection matrix with the given bounds.
       * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
       * which matches WebGL/OpenGL's clip volume.
       * Equivalent to `Mat4.orthoNO(this, left, right, bottom, top, near, far);`
       * @category Methods
       *
       * @param left - Left bound of the frustum
       * @param right - Right bound of the frustum
       * @param bottom - Bottom bound of the frustum
       * @param top - Top bound of the frustum
       * @param near - Near bound of the frustum
       * @param far - Far bound of the frustum
       * @returns `this`
       */
    }, {
      key: "orthoNO",
      value: function orthoNO(left, right, bottom, top, near, far) {
        return _Mat4.orthoNO(this, left, right, bottom, top, near, far);
      }
      /**
       * Generates a orthogonal projection matrix with the given bounds.
       * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
       * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
       * Equivalent to `Mat4.orthoZO(this, left, right, bottom, top, near, far);`
       * @category Methods
       *
       * @param left - Left bound of the frustum
       * @param right - Right bound of the frustum
       * @param bottom - Bottom bound of the frustum
       * @param top - Top bound of the frustum
       * @param near - Near bound of the frustum
       * @param far - Far bound of the frustum
       * @returns `this`
       */
    }, {
      key: "orthoZO",
      value: function orthoZO(left, right, bottom, top, near, far) {
        return _Mat4.orthoZO(this, left, right, bottom, top, near, far);
      }
      // ===================
      // Static accessors
      // ===================
      /**
       * @category Static
       *
       * @returns The number of bytes in a {@link Mat4}.
       */
    }], [{
      key: "BYTE_LENGTH",
      get: function get() {
        return 16 * Float32Array.BYTES_PER_ELEMENT;
      }
      // ===================
      // Static methods
      // ===================
      /**
       * Creates a new, identity {@link Mat4}
       * @category Static
       *
       * @returns A new {@link Mat4}
       */
    }, {
      key: "create",
      value: function create() {
        return new _Mat4();
      }
      /**
       * Creates a new {@link Mat4} initialized with values from an existing matrix
       * @category Static
       *
       * @param a - Matrix to clone
       * @returns A new {@link Mat4}
       */
    }, {
      key: "clone",
      value: function clone(a) {
        return new _Mat4(a);
      }
      /**
       * Copy the values from one {@link Mat4} to another
       * @category Static
       *
       * @param out - The receiving Matrix
       * @param a - Matrix to copy
       * @returns `out`
       */
    }, {
      key: "copy",
      value: function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[8] = a[8];
        out[9] = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
        return out;
      }
      /**
       * Create a new mat4 with the given values
       * @category Static
       *
       * @param values - Matrix components
       * @returns A new {@link Mat4}
       */
    }, {
      key: "fromValues",
      value: function fromValues() {
        for (var _len8 = arguments.length, values = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
          values[_key8] = arguments[_key8];
        }
        return _construct(_Mat4, values);
      }
      /**
       * Set the components of a mat4 to the given values
       * @category Static
       *
       * @param out - The receiving matrix
       * @param values - Matrix components
       * @returns `out`
       */
    }, {
      key: "set",
      value: function set(out) {
        out[0] = arguments.length <= 1 ? undefined : arguments[1];
        out[1] = arguments.length <= 2 ? undefined : arguments[2];
        out[2] = arguments.length <= 3 ? undefined : arguments[3];
        out[3] = arguments.length <= 4 ? undefined : arguments[4];
        out[4] = arguments.length <= 5 ? undefined : arguments[5];
        out[5] = arguments.length <= 6 ? undefined : arguments[6];
        out[6] = arguments.length <= 7 ? undefined : arguments[7];
        out[7] = arguments.length <= 8 ? undefined : arguments[8];
        out[8] = arguments.length <= 9 ? undefined : arguments[9];
        out[9] = arguments.length <= 10 ? undefined : arguments[10];
        out[10] = arguments.length <= 11 ? undefined : arguments[11];
        out[11] = arguments.length <= 12 ? undefined : arguments[12];
        out[12] = arguments.length <= 13 ? undefined : arguments[13];
        out[13] = arguments.length <= 14 ? undefined : arguments[14];
        out[14] = arguments.length <= 15 ? undefined : arguments[15];
        out[15] = arguments.length <= 16 ? undefined : arguments[16];
        return out;
      }
      /**
       * Set a {@link Mat4} to the identity matrix
       * @category Static
       *
       * @param out - The receiving Matrix
       * @returns `out`
       */
    }, {
      key: "identity",
      value: function identity(out) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = 1;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = 1;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
      }
      /**
       * Transpose the values of a {@link Mat4}
       * @category Static
       *
       * @param out - the receiving matrix
       * @param a - the source matrix
       * @returns `out`
       */
    }, {
      key: "transpose",
      value: function transpose(out, a) {
        if (out === a) {
          var a01 = a[1],
            a02 = a[2],
            a03 = a[3];
          var a12 = a[6],
            a13 = a[7];
          var a23 = a[11];
          out[1] = a[4];
          out[2] = a[8];
          out[3] = a[12];
          out[4] = a01;
          out[6] = a[9];
          out[7] = a[13];
          out[8] = a02;
          out[9] = a12;
          out[11] = a[14];
          out[12] = a03;
          out[13] = a13;
          out[14] = a23;
        } else {
          out[0] = a[0];
          out[1] = a[4];
          out[2] = a[8];
          out[3] = a[12];
          out[4] = a[1];
          out[5] = a[5];
          out[6] = a[9];
          out[7] = a[13];
          out[8] = a[2];
          out[9] = a[6];
          out[10] = a[10];
          out[11] = a[14];
          out[12] = a[3];
          out[13] = a[7];
          out[14] = a[11];
          out[15] = a[15];
        }
        return out;
      }
      /**
       * Inverts a {@link Mat4}
       * @category Static
       *
       * @param out - the receiving matrix
       * @param a - the source matrix
       * @returns `out` or `null` if the matrix is not invertible
       */
    }, {
      key: "invert",
      value: function invert(out, a) {
        var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a03 = a[3];
        var a10 = a[4],
          a11 = a[5],
          a12 = a[6],
          a13 = a[7];
        var a20 = a[8],
          a21 = a[9],
          a22 = a[10],
          a23 = a[11];
        var a30 = a[12],
          a31 = a[13],
          a32 = a[14],
          a33 = a[15];
        var b00 = a00 * a11 - a01 * a10;
        var b01 = a00 * a12 - a02 * a10;
        var b02 = a00 * a13 - a03 * a10;
        var b03 = a01 * a12 - a02 * a11;
        var b04 = a01 * a13 - a03 * a11;
        var b05 = a02 * a13 - a03 * a12;
        var b06 = a20 * a31 - a21 * a30;
        var b07 = a20 * a32 - a22 * a30;
        var b08 = a20 * a33 - a23 * a30;
        var b09 = a21 * a32 - a22 * a31;
        var b10 = a21 * a33 - a23 * a31;
        var b11 = a22 * a33 - a23 * a32;
        var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
        if (!det) {
          return null;
        }
        det = 1 / det;
        out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
        out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
        out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
        out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
        out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
        out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
        out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
        out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
        out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
        out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
        out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
        out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
        out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
        out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
        out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
        out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
        return out;
      }
      /**
       * Calculates the adjugate of a {@link Mat4}
       * @category Static
       *
       * @param out - the receiving matrix
       * @param a - the source matrix
       * @returns `out`
       */
    }, {
      key: "adjoint",
      value: function adjoint(out, a) {
        var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a03 = a[3];
        var a10 = a[4],
          a11 = a[5],
          a12 = a[6],
          a13 = a[7];
        var a20 = a[8],
          a21 = a[9],
          a22 = a[10],
          a23 = a[11];
        var a30 = a[12],
          a31 = a[13],
          a32 = a[14],
          a33 = a[15];
        var b00 = a00 * a11 - a01 * a10;
        var b01 = a00 * a12 - a02 * a10;
        var b02 = a00 * a13 - a03 * a10;
        var b03 = a01 * a12 - a02 * a11;
        var b04 = a01 * a13 - a03 * a11;
        var b05 = a02 * a13 - a03 * a12;
        var b06 = a20 * a31 - a21 * a30;
        var b07 = a20 * a32 - a22 * a30;
        var b08 = a20 * a33 - a23 * a30;
        var b09 = a21 * a32 - a22 * a31;
        var b10 = a21 * a33 - a23 * a31;
        var b11 = a22 * a33 - a23 * a32;
        out[0] = a11 * b11 - a12 * b10 + a13 * b09;
        out[1] = a02 * b10 - a01 * b11 - a03 * b09;
        out[2] = a31 * b05 - a32 * b04 + a33 * b03;
        out[3] = a22 * b04 - a21 * b05 - a23 * b03;
        out[4] = a12 * b08 - a10 * b11 - a13 * b07;
        out[5] = a00 * b11 - a02 * b08 + a03 * b07;
        out[6] = a32 * b02 - a30 * b05 - a33 * b01;
        out[7] = a20 * b05 - a22 * b02 + a23 * b01;
        out[8] = a10 * b10 - a11 * b08 + a13 * b06;
        out[9] = a01 * b08 - a00 * b10 - a03 * b06;
        out[10] = a30 * b04 - a31 * b02 + a33 * b00;
        out[11] = a21 * b02 - a20 * b04 - a23 * b00;
        out[12] = a11 * b07 - a10 * b09 - a12 * b06;
        out[13] = a00 * b09 - a01 * b07 + a02 * b06;
        out[14] = a31 * b01 - a30 * b03 - a32 * b00;
        out[15] = a20 * b03 - a21 * b01 + a22 * b00;
        return out;
      }
      /**
       * Calculates the determinant of a {@link Mat4}
       * @category Static
       *
       * @param a - the source matrix
       * @returns determinant of a
       */
    }, {
      key: "determinant",
      value: function determinant(a) {
        var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a03 = a[3];
        var a10 = a[4],
          a11 = a[5],
          a12 = a[6],
          a13 = a[7];
        var a20 = a[8],
          a21 = a[9],
          a22 = a[10],
          a23 = a[11];
        var a30 = a[12],
          a31 = a[13],
          a32 = a[14],
          a33 = a[15];
        var b0 = a00 * a11 - a01 * a10;
        var b1 = a00 * a12 - a02 * a10;
        var b2 = a01 * a12 - a02 * a11;
        var b3 = a20 * a31 - a21 * a30;
        var b4 = a20 * a32 - a22 * a30;
        var b5 = a21 * a32 - a22 * a31;
        var b6 = a00 * b5 - a01 * b4 + a02 * b3;
        var b7 = a10 * b5 - a11 * b4 + a12 * b3;
        var b8 = a20 * b2 - a21 * b1 + a22 * b0;
        var b9 = a30 * b2 - a31 * b1 + a32 * b0;
        return a13 * b6 - a03 * b7 + a33 * b8 - a23 * b9;
      }
      /**
       * Multiplies two {@link Mat4}s
       * @category Static
       *
       * @param out - The receiving Matrix
       * @param a - The first operand
       * @param b - The second operand
       * @returns `out`
       */
    }, {
      key: "multiply",
      value: function multiply(out, a, b) {
        var a00 = a[0];
        var a01 = a[1];
        var a02 = a[2];
        var a03 = a[3];
        var a10 = a[4];
        var a11 = a[5];
        var a12 = a[6];
        var a13 = a[7];
        var a20 = a[8];
        var a21 = a[9];
        var a22 = a[10];
        var a23 = a[11];
        var a30 = a[12];
        var a31 = a[13];
        var a32 = a[14];
        var a33 = a[15];
        var b0 = b[0];
        var b1 = b[1];
        var b2 = b[2];
        var b3 = b[3];
        out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        b0 = b[4];
        b1 = b[5];
        b2 = b[6];
        b3 = b[7];
        out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        b0 = b[8];
        b1 = b[9];
        b2 = b[10];
        b3 = b[11];
        out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        b0 = b[12];
        b1 = b[13];
        b2 = b[14];
        b3 = b[15];
        out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        return out;
      }
      /**
       * Alias for {@link Mat4.multiply}
       * @category Static
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "mul",
      value: function mul(out, a, b) {
        return out;
      }
      /**
       * Translate a {@link Mat4} by the given vector
       * @category Static
       *
       * @param out - the receiving matrix
       * @param a - the matrix to translate
       * @param v - vector to translate by
       * @returns `out`
       */
    }, {
      key: "translate",
      value: function translate(out, a, v) {
        var x = v[0];
        var y = v[1];
        var z = v[2];
        if (a === out) {
          out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
          out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
          out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
          out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
        } else {
          var a00 = a[0];
          var a01 = a[1];
          var a02 = a[2];
          var a03 = a[3];
          var a10 = a[4];
          var a11 = a[5];
          var a12 = a[6];
          var a13 = a[7];
          var a20 = a[8];
          var a21 = a[9];
          var a22 = a[10];
          var a23 = a[11];
          out[0] = a00;
          out[1] = a01;
          out[2] = a02;
          out[3] = a03;
          out[4] = a10;
          out[5] = a11;
          out[6] = a12;
          out[7] = a13;
          out[8] = a20;
          out[9] = a21;
          out[10] = a22;
          out[11] = a23;
          out[12] = a00 * x + a10 * y + a20 * z + a[12];
          out[13] = a01 * x + a11 * y + a21 * z + a[13];
          out[14] = a02 * x + a12 * y + a22 * z + a[14];
          out[15] = a03 * x + a13 * y + a23 * z + a[15];
        }
        return out;
      }
      /**
       * Scales the {@link Mat4} by the dimensions in the given {@link Vec3} not using vectorization
       * @category Static
       *
       * @param out - the receiving matrix
       * @param a - the matrix to scale
       * @param v - the {@link Vec3} to scale the matrix by
       * @returns `out`
       **/
    }, {
      key: "scale",
      value: function scale(out, a, v) {
        var x = v[0];
        var y = v[1];
        var z = v[2];
        out[0] = a[0] * x;
        out[1] = a[1] * x;
        out[2] = a[2] * x;
        out[3] = a[3] * x;
        out[4] = a[4] * y;
        out[5] = a[5] * y;
        out[6] = a[6] * y;
        out[7] = a[7] * y;
        out[8] = a[8] * z;
        out[9] = a[9] * z;
        out[10] = a[10] * z;
        out[11] = a[11] * z;
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
        return out;
      }
      /**
       * Rotates a {@link Mat4} by the given angle around the given axis
       * @category Static
       *
       * @param out - the receiving matrix
       * @param a - the matrix to rotate
       * @param rad - the angle to rotate the matrix by
       * @param axis - the axis to rotate around
       * @returns `out` or `null` if axis has a length of 0
       */
    }, {
      key: "rotate",
      value: function rotate(out, a, rad, axis) {
        var x = axis[0];
        var y = axis[1];
        var z = axis[2];
        var len = Math.sqrt(x * x + y * y + z * z);
        if (len < GLM_EPSILON) {
          return null;
        }
        len = 1 / len;
        x *= len;
        y *= len;
        z *= len;
        var s = Math.sin(rad);
        var c = Math.cos(rad);
        var t = 1 - c;
        var a00 = a[0];
        var a01 = a[1];
        var a02 = a[2];
        var a03 = a[3];
        var a10 = a[4];
        var a11 = a[5];
        var a12 = a[6];
        var a13 = a[7];
        var a20 = a[8];
        var a21 = a[9];
        var a22 = a[10];
        var a23 = a[11];
        var b00 = x * x * t + c;
        var b01 = y * x * t + z * s;
        var b02 = z * x * t - y * s;
        var b10 = x * y * t - z * s;
        var b11 = y * y * t + c;
        var b12 = z * y * t + x * s;
        var b20 = x * z * t + y * s;
        var b21 = y * z * t - x * s;
        var b22 = z * z * t + c;
        out[0] = a00 * b00 + a10 * b01 + a20 * b02;
        out[1] = a01 * b00 + a11 * b01 + a21 * b02;
        out[2] = a02 * b00 + a12 * b01 + a22 * b02;
        out[3] = a03 * b00 + a13 * b01 + a23 * b02;
        out[4] = a00 * b10 + a10 * b11 + a20 * b12;
        out[5] = a01 * b10 + a11 * b11 + a21 * b12;
        out[6] = a02 * b10 + a12 * b11 + a22 * b12;
        out[7] = a03 * b10 + a13 * b11 + a23 * b12;
        out[8] = a00 * b20 + a10 * b21 + a20 * b22;
        out[9] = a01 * b20 + a11 * b21 + a21 * b22;
        out[10] = a02 * b20 + a12 * b21 + a22 * b22;
        out[11] = a03 * b20 + a13 * b21 + a23 * b22;
        if (a !== out) {
          out[12] = a[12];
          out[13] = a[13];
          out[14] = a[14];
          out[15] = a[15];
        }
        return out;
      }
      /**
       * Rotates a matrix by the given angle around the X axis
       * @category Static
       *
       * @param out - the receiving matrix
       * @param a - the matrix to rotate
       * @param rad - the angle to rotate the matrix by
       * @returns `out`
       */
    }, {
      key: "rotateX",
      value: function rotateX(out, a, rad) {
        var s = Math.sin(rad);
        var c = Math.cos(rad);
        var a10 = a[4];
        var a11 = a[5];
        var a12 = a[6];
        var a13 = a[7];
        var a20 = a[8];
        var a21 = a[9];
        var a22 = a[10];
        var a23 = a[11];
        if (a !== out) {
          out[0] = a[0];
          out[1] = a[1];
          out[2] = a[2];
          out[3] = a[3];
          out[12] = a[12];
          out[13] = a[13];
          out[14] = a[14];
          out[15] = a[15];
        }
        out[4] = a10 * c + a20 * s;
        out[5] = a11 * c + a21 * s;
        out[6] = a12 * c + a22 * s;
        out[7] = a13 * c + a23 * s;
        out[8] = a20 * c - a10 * s;
        out[9] = a21 * c - a11 * s;
        out[10] = a22 * c - a12 * s;
        out[11] = a23 * c - a13 * s;
        return out;
      }
      /**
       * Rotates a matrix by the given angle around the Y axis
       * @category Static
       *
       * @param out - the receiving matrix
       * @param a - the matrix to rotate
       * @param rad - the angle to rotate the matrix by
       * @returns `out`
       */
    }, {
      key: "rotateY",
      value: function rotateY(out, a, rad) {
        var s = Math.sin(rad);
        var c = Math.cos(rad);
        var a00 = a[0];
        var a01 = a[1];
        var a02 = a[2];
        var a03 = a[3];
        var a20 = a[8];
        var a21 = a[9];
        var a22 = a[10];
        var a23 = a[11];
        if (a !== out) {
          out[4] = a[4];
          out[5] = a[5];
          out[6] = a[6];
          out[7] = a[7];
          out[12] = a[12];
          out[13] = a[13];
          out[14] = a[14];
          out[15] = a[15];
        }
        out[0] = a00 * c - a20 * s;
        out[1] = a01 * c - a21 * s;
        out[2] = a02 * c - a22 * s;
        out[3] = a03 * c - a23 * s;
        out[8] = a00 * s + a20 * c;
        out[9] = a01 * s + a21 * c;
        out[10] = a02 * s + a22 * c;
        out[11] = a03 * s + a23 * c;
        return out;
      }
      /**
       * Rotates a matrix by the given angle around the Z axis
       * @category Static
       *
       * @param out - the receiving matrix
       * @param a - the matrix to rotate
       * @param rad - the angle to rotate the matrix by
       * @returns `out`
       */
    }, {
      key: "rotateZ",
      value: function rotateZ(out, a, rad) {
        var s = Math.sin(rad);
        var c = Math.cos(rad);
        var a00 = a[0];
        var a01 = a[1];
        var a02 = a[2];
        var a03 = a[3];
        var a10 = a[4];
        var a11 = a[5];
        var a12 = a[6];
        var a13 = a[7];
        if (a !== out) {
          out[8] = a[8];
          out[9] = a[9];
          out[10] = a[10];
          out[11] = a[11];
          out[12] = a[12];
          out[13] = a[13];
          out[14] = a[14];
          out[15] = a[15];
        }
        out[0] = a00 * c + a10 * s;
        out[1] = a01 * c + a11 * s;
        out[2] = a02 * c + a12 * s;
        out[3] = a03 * c + a13 * s;
        out[4] = a10 * c - a00 * s;
        out[5] = a11 * c - a01 * s;
        out[6] = a12 * c - a02 * s;
        out[7] = a13 * c - a03 * s;
        return out;
      }
      /**
       * Creates a {@link Mat4} from a vector translation
       * This is equivalent to (but much faster than):
       * ```js
       *   mat4.identity(dest);
       *   mat4.translate(dest, dest, vec);
       * ```
       * @category Static
       *
       * @param out - {@link Mat4} receiving operation result
       * @param v - Translation vector
       * @returns `out`
       */
    }, {
      key: "fromTranslation",
      value: function fromTranslation(out, v) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = 1;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = 1;
        out[11] = 0;
        out[12] = v[0];
        out[13] = v[1];
        out[14] = v[2];
        out[15] = 1;
        return out;
      }
      /**
       * Creates a {@link Mat4} from a vector scaling
       * This is equivalent to (but much faster than):
       * ```js
       *   mat4.identity(dest);
       *   mat4.scale(dest, dest, vec);
       * ```
       * @category Static
       *
       * @param out - {@link Mat4} receiving operation result
       * @param v - Scaling vector
       * @returns `out`
       */
    }, {
      key: "fromScaling",
      value: function fromScaling(out, v) {
        out[0] = v[0];
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = v[1];
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = v[2];
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
      }
      /**
       * Creates a {@link Mat4} from a given angle around a given axis
       * This is equivalent to (but much faster than):
       * ```js
       *   mat4.identity(dest);
       *   mat4.rotate(dest, dest, rad, axis);
       * ```
       * @category Static
       *
       * @param out - {@link Mat4} receiving operation result
       * @param rad - the angle to rotate the matrix by
       * @param axis - the axis to rotate around
       * @returns `out` or `null` if `axis` has a length of 0
       */
    }, {
      key: "fromRotation",
      value: function fromRotation(out, rad, axis) {
        var x = axis[0];
        var y = axis[1];
        var z = axis[2];
        var len = Math.sqrt(x * x + y * y + z * z);
        if (len < GLM_EPSILON) {
          return null;
        }
        len = 1 / len;
        x *= len;
        y *= len;
        z *= len;
        var s = Math.sin(rad);
        var c = Math.cos(rad);
        var t = 1 - c;
        out[0] = x * x * t + c;
        out[1] = y * x * t + z * s;
        out[2] = z * x * t - y * s;
        out[3] = 0;
        out[4] = x * y * t - z * s;
        out[5] = y * y * t + c;
        out[6] = z * y * t + x * s;
        out[7] = 0;
        out[8] = x * z * t + y * s;
        out[9] = y * z * t - x * s;
        out[10] = z * z * t + c;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
      }
      /**
       * Creates a matrix from the given angle around the X axis
       * This is equivalent to (but much faster than):
       * ```js
       *   mat4.identity(dest);
       *   mat4.rotateX(dest, dest, rad);
       * ```
       * @category Static
       *
       * @param out - mat4 receiving operation result
       * @param rad - the angle to rotate the matrix by
       * @returns `out`
       */
    }, {
      key: "fromXRotation",
      value: function fromXRotation(out, rad) {
        var s = Math.sin(rad);
        var c = Math.cos(rad);
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = c;
        out[6] = s;
        out[7] = 0;
        out[8] = 0;
        out[9] = -s;
        out[10] = c;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
      }
      /**
       * Creates a matrix from the given angle around the Y axis
       * This is equivalent to (but much faster than):
       * ```js
       *   mat4.identity(dest);
       *   mat4.rotateY(dest, dest, rad);
       * ```
       * @category Static
       *
       * @param out - mat4 receiving operation result
       * @param rad - the angle to rotate the matrix by
       * @returns `out`
       */
    }, {
      key: "fromYRotation",
      value: function fromYRotation(out, rad) {
        var s = Math.sin(rad);
        var c = Math.cos(rad);
        out[0] = c;
        out[1] = 0;
        out[2] = -s;
        out[3] = 0;
        out[4] = 0;
        out[5] = 1;
        out[6] = 0;
        out[7] = 0;
        out[8] = s;
        out[9] = 0;
        out[10] = c;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
      }
      /**
       * Creates a matrix from the given angle around the Z axis
       * This is equivalent to (but much faster than):
       * ```js
       *   mat4.identity(dest);
       *   mat4.rotateZ(dest, dest, rad);
       * ```
       * @category Static
       *
       * @param out - mat4 receiving operation result
       * @param rad - the angle to rotate the matrix by
       * @returns `out`
       */
    }, {
      key: "fromZRotation",
      value: function fromZRotation(out, rad) {
        var s = Math.sin(rad);
        var c = Math.cos(rad);
        out[0] = c;
        out[1] = s;
        out[2] = 0;
        out[3] = 0;
        out[4] = -s;
        out[5] = c;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = 1;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
      }
      /**
       * Creates a matrix from a quaternion rotation and vector translation
       * This is equivalent to (but much faster than):
       * ```js
       *   mat4.identity(dest);
       *   mat4.translate(dest, vec);
       *   let quatMat = mat4.create();
       *   quat4.toMat4(quat, quatMat);
       *   mat4.multiply(dest, quatMat);
       * ```
       * @category Static
       *
       * @param out - mat4 receiving operation result
       * @param q - Rotation quaternion
       * @param v - Translation vector
       * @returns `out`
       */
    }, {
      key: "fromRotationTranslation",
      value: function fromRotationTranslation(out, q, v) {
        var x = q[0];
        var y = q[1];
        var z = q[2];
        var w = q[3];
        var x2 = x + x;
        var y2 = y + y;
        var z2 = z + z;
        var xx = x * x2;
        var xy = x * y2;
        var xz = x * z2;
        var yy = y * y2;
        var yz = y * z2;
        var zz = z * z2;
        var wx = w * x2;
        var wy = w * y2;
        var wz = w * z2;
        out[0] = 1 - (yy + zz);
        out[1] = xy + wz;
        out[2] = xz - wy;
        out[3] = 0;
        out[4] = xy - wz;
        out[5] = 1 - (xx + zz);
        out[6] = yz + wx;
        out[7] = 0;
        out[8] = xz + wy;
        out[9] = yz - wx;
        out[10] = 1 - (xx + yy);
        out[11] = 0;
        out[12] = v[0];
        out[13] = v[1];
        out[14] = v[2];
        out[15] = 1;
        return out;
      }
      /**
       * Sets a {@link Mat4} from a {@link Quat2}.
       * @category Static
       *
       * @param out - Matrix
       * @param a - Dual Quaternion
       * @returns `out`
       */
    }, {
      key: "fromQuat2",
      value: function fromQuat2(out, a) {
        var bx = -a[0];
        var by = -a[1];
        var bz = -a[2];
        var bw = a[3];
        var ax = a[4];
        var ay = a[5];
        var az = a[6];
        var aw = a[7];
        var magnitude = bx * bx + by * by + bz * bz + bw * bw;
        if (magnitude > 0) {
          __privateGet(_Mat4, _TMP_VEC3)[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
          __privateGet(_Mat4, _TMP_VEC3)[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
          __privateGet(_Mat4, _TMP_VEC3)[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
        } else {
          __privateGet(_Mat4, _TMP_VEC3)[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
          __privateGet(_Mat4, _TMP_VEC3)[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
          __privateGet(_Mat4, _TMP_VEC3)[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
        }
        _Mat4.fromRotationTranslation(out, a, __privateGet(_Mat4, _TMP_VEC3));
        return out;
      }
      /**
       * Calculates a {@link Mat4} normal matrix (transpose inverse) from a {@link Mat4}
       * @category Static
       *
       * @param out - Matrix receiving operation result
       * @param a - Mat4 to derive the normal matrix from
       * @returns `out` or `null` if the matrix is not invertible
       */
    }, {
      key: "normalFromMat4",
      value: function normalFromMat4(out, a) {
        var a00 = a[0];
        var a01 = a[1];
        var a02 = a[2];
        var a03 = a[3];
        var a10 = a[4];
        var a11 = a[5];
        var a12 = a[6];
        var a13 = a[7];
        var a20 = a[8];
        var a21 = a[9];
        var a22 = a[10];
        var a23 = a[11];
        var a30 = a[12];
        var a31 = a[13];
        var a32 = a[14];
        var a33 = a[15];
        var b00 = a00 * a11 - a01 * a10;
        var b01 = a00 * a12 - a02 * a10;
        var b02 = a00 * a13 - a03 * a10;
        var b03 = a01 * a12 - a02 * a11;
        var b04 = a01 * a13 - a03 * a11;
        var b05 = a02 * a13 - a03 * a12;
        var b06 = a20 * a31 - a21 * a30;
        var b07 = a20 * a32 - a22 * a30;
        var b08 = a20 * a33 - a23 * a30;
        var b09 = a21 * a32 - a22 * a31;
        var b10 = a21 * a33 - a23 * a31;
        var b11 = a22 * a33 - a23 * a32;
        var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
        if (!det) {
          return null;
        }
        det = 1 / det;
        out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
        out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
        out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
        out[3] = 0;
        out[4] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
        out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
        out[6] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
        out[7] = 0;
        out[8] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
        out[9] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
        out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
      }
      /**
       * Calculates a {@link Mat4} normal matrix (transpose inverse) from a {@link Mat4}
       * This version omits the calculation of the constant factor (1/determinant), so
       * any normals transformed with it will need to be renormalized.
       * From https://stackoverflow.com/a/27616419/25968
       * @category Static
       *
       * @param out - Matrix receiving operation result
       * @param a - Mat4 to derive the normal matrix from
       * @returns `out`
       */
    }, {
      key: "normalFromMat4Fast",
      value: function normalFromMat4Fast(out, a) {
        var ax = a[0];
        var ay = a[1];
        var az = a[2];
        var bx = a[4];
        var by = a[5];
        var bz = a[6];
        var cx = a[8];
        var cy = a[9];
        var cz = a[10];
        out[0] = by * cz - cz * cy;
        out[1] = bz * cx - cx * cz;
        out[2] = bx * cy - cy * cx;
        out[3] = 0;
        out[4] = cy * az - cz * ay;
        out[5] = cz * ax - cx * az;
        out[6] = cx * ay - cy * ax;
        out[7] = 0;
        out[8] = ay * bz - az * by;
        out[9] = az * bx - ax * bz;
        out[10] = ax * by - ay * bx;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
      }
      /**
       * Returns the translation vector component of a transformation
       * matrix. If a matrix is built with fromRotationTranslation,
       * the returned vector will be the same as the translation vector
       * originally supplied.
       * @category Static
       *
       * @param  {vec3} out Vector to receive translation component
       * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
       * @return {vec3} out
       */
    }, {
      key: "getTranslation",
      value: function getTranslation(out, mat) {
        out[0] = mat[12];
        out[1] = mat[13];
        out[2] = mat[14];
        return out;
      }
      /**
       * Returns the scaling factor component of a transformation
       * matrix. If a matrix is built with fromRotationTranslationScale
       * with a normalized Quaternion parameter, the returned vector will be
       * the same as the scaling vector
       * originally supplied.
       * @category Static
       *
       * @param  {vec3} out Vector to receive scaling factor component
       * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
       * @return {vec3} out
       */
    }, {
      key: "getScaling",
      value: function getScaling(out, mat) {
        var m11 = mat[0];
        var m12 = mat[1];
        var m13 = mat[2];
        var m21 = mat[4];
        var m22 = mat[5];
        var m23 = mat[6];
        var m31 = mat[8];
        var m32 = mat[9];
        var m33 = mat[10];
        out[0] = Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
        out[1] = Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
        out[2] = Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);
        return out;
      }
      /**
       * Returns a quaternion representing the rotational component
       * of a transformation matrix. If a matrix is built with
       * fromRotationTranslation, the returned quaternion will be the
       * same as the quaternion originally supplied.
       * @category Static
       *
       * @param out - Quaternion to receive the rotation component
       * @param mat - Matrix to be decomposed (input)
       * @return `out`
       */
    }, {
      key: "getRotation",
      value: function getRotation(out, mat) {
        _Mat4.getScaling(__privateGet(_Mat4, _TMP_VEC3), mat);
        var is1 = 1 / __privateGet(_Mat4, _TMP_VEC3)[0];
        var is2 = 1 / __privateGet(_Mat4, _TMP_VEC3)[1];
        var is3 = 1 / __privateGet(_Mat4, _TMP_VEC3)[2];
        var sm11 = mat[0] * is1;
        var sm12 = mat[1] * is2;
        var sm13 = mat[2] * is3;
        var sm21 = mat[4] * is1;
        var sm22 = mat[5] * is2;
        var sm23 = mat[6] * is3;
        var sm31 = mat[8] * is1;
        var sm32 = mat[9] * is2;
        var sm33 = mat[10] * is3;
        var trace = sm11 + sm22 + sm33;
        var S = 0;
        if (trace > 0) {
          S = Math.sqrt(trace + 1) * 2;
          out[3] = 0.25 * S;
          out[0] = (sm23 - sm32) / S;
          out[1] = (sm31 - sm13) / S;
          out[2] = (sm12 - sm21) / S;
        } else if (sm11 > sm22 && sm11 > sm33) {
          S = Math.sqrt(1 + sm11 - sm22 - sm33) * 2;
          out[3] = (sm23 - sm32) / S;
          out[0] = 0.25 * S;
          out[1] = (sm12 + sm21) / S;
          out[2] = (sm31 + sm13) / S;
        } else if (sm22 > sm33) {
          S = Math.sqrt(1 + sm22 - sm11 - sm33) * 2;
          out[3] = (sm31 - sm13) / S;
          out[0] = (sm12 + sm21) / S;
          out[1] = 0.25 * S;
          out[2] = (sm23 + sm32) / S;
        } else {
          S = Math.sqrt(1 + sm33 - sm11 - sm22) * 2;
          out[3] = (sm12 - sm21) / S;
          out[0] = (sm31 + sm13) / S;
          out[1] = (sm23 + sm32) / S;
          out[2] = 0.25 * S;
        }
        return out;
      }
      /**
       * Decomposes a transformation matrix into its rotation, translation
       * and scale components. Returns only the rotation component
       * @category Static
       *
       * @param out_r - Quaternion to receive the rotation component
       * @param out_t - Vector to receive the translation vector
       * @param out_s - Vector to receive the scaling factor
       * @param mat - Matrix to be decomposed (input)
       * @returns `out_r`
       */
    }, {
      key: "decompose",
      value: function decompose(out_r, out_t, out_s, mat) {
        out_t[0] = mat[12];
        out_t[1] = mat[13];
        out_t[2] = mat[14];
        var m11 = mat[0];
        var m12 = mat[1];
        var m13 = mat[2];
        var m21 = mat[4];
        var m22 = mat[5];
        var m23 = mat[6];
        var m31 = mat[8];
        var m32 = mat[9];
        var m33 = mat[10];
        out_s[0] = Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
        out_s[1] = Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
        out_s[2] = Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);
        var is1 = 1 / out_s[0];
        var is2 = 1 / out_s[1];
        var is3 = 1 / out_s[2];
        var sm11 = m11 * is1;
        var sm12 = m12 * is2;
        var sm13 = m13 * is3;
        var sm21 = m21 * is1;
        var sm22 = m22 * is2;
        var sm23 = m23 * is3;
        var sm31 = m31 * is1;
        var sm32 = m32 * is2;
        var sm33 = m33 * is3;
        var trace = sm11 + sm22 + sm33;
        var S = 0;
        if (trace > 0) {
          S = Math.sqrt(trace + 1) * 2;
          out_r[3] = 0.25 * S;
          out_r[0] = (sm23 - sm32) / S;
          out_r[1] = (sm31 - sm13) / S;
          out_r[2] = (sm12 - sm21) / S;
        } else if (sm11 > sm22 && sm11 > sm33) {
          S = Math.sqrt(1 + sm11 - sm22 - sm33) * 2;
          out_r[3] = (sm23 - sm32) / S;
          out_r[0] = 0.25 * S;
          out_r[1] = (sm12 + sm21) / S;
          out_r[2] = (sm31 + sm13) / S;
        } else if (sm22 > sm33) {
          S = Math.sqrt(1 + sm22 - sm11 - sm33) * 2;
          out_r[3] = (sm31 - sm13) / S;
          out_r[0] = (sm12 + sm21) / S;
          out_r[1] = 0.25 * S;
          out_r[2] = (sm23 + sm32) / S;
        } else {
          S = Math.sqrt(1 + sm33 - sm11 - sm22) * 2;
          out_r[3] = (sm12 - sm21) / S;
          out_r[0] = (sm31 + sm13) / S;
          out_r[1] = (sm23 + sm32) / S;
          out_r[2] = 0.25 * S;
        }
        return out_r;
      }
      /**
       * Creates a matrix from a quaternion rotation, vector translation and vector scale
       * This is equivalent to (but much faster than):
       * ```js
       *   mat4.identity(dest);
       *   mat4.translate(dest, vec);
       *   let quatMat = mat4.create();
       *   quat4.toMat4(quat, quatMat);
       *   mat4.multiply(dest, quatMat);
       *   mat4.scale(dest, scale);
       * ```
       * @category Static
       *
       * @param out - mat4 receiving operation result
       * @param q - Rotation quaternion
       * @param v - Translation vector
       * @param s - Scaling vector
       * @returns `out`
       */
    }, {
      key: "fromRotationTranslationScale",
      value: function fromRotationTranslationScale(out, q, v, s) {
        var x = q[0];
        var y = q[1];
        var z = q[2];
        var w = q[3];
        var x2 = x + x;
        var y2 = y + y;
        var z2 = z + z;
        var xx = x * x2;
        var xy = x * y2;
        var xz = x * z2;
        var yy = y * y2;
        var yz = y * z2;
        var zz = z * z2;
        var wx = w * x2;
        var wy = w * y2;
        var wz = w * z2;
        var sx = s[0];
        var sy = s[1];
        var sz = s[2];
        out[0] = (1 - (yy + zz)) * sx;
        out[1] = (xy + wz) * sx;
        out[2] = (xz - wy) * sx;
        out[3] = 0;
        out[4] = (xy - wz) * sy;
        out[5] = (1 - (xx + zz)) * sy;
        out[6] = (yz + wx) * sy;
        out[7] = 0;
        out[8] = (xz + wy) * sz;
        out[9] = (yz - wx) * sz;
        out[10] = (1 - (xx + yy)) * sz;
        out[11] = 0;
        out[12] = v[0];
        out[13] = v[1];
        out[14] = v[2];
        out[15] = 1;
        return out;
      }
      /**
       * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the
       * given origin. This is equivalent to (but much faster than):
       * ```js
       *   mat4.identity(dest);
       *   mat4.translate(dest, vec);
       *   mat4.translate(dest, origin);
       *   let quatMat = mat4.create();
       *   quat4.toMat4(quat, quatMat);
       *   mat4.multiply(dest, quatMat);
       *   mat4.scale(dest, scale)
       *   mat4.translate(dest, negativeOrigin);
       * ```
       * @category Static
       *
       * @param out - mat4 receiving operation result
       * @param q - Rotation quaternion
       * @param v - Translation vector
       * @param s - Scaling vector
       * @param o - The origin vector around which to scale and rotate
       * @returns `out`
       */
    }, {
      key: "fromRotationTranslationScaleOrigin",
      value: function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
        var x = q[0];
        var y = q[1];
        var z = q[2];
        var w = q[3];
        var x2 = x + x;
        var y2 = y + y;
        var z2 = z + z;
        var xx = x * x2;
        var xy = x * y2;
        var xz = x * z2;
        var yy = y * y2;
        var yz = y * z2;
        var zz = z * z2;
        var wx = w * x2;
        var wy = w * y2;
        var wz = w * z2;
        var sx = s[0];
        var sy = s[1];
        var sz = s[2];
        var ox = o[0];
        var oy = o[1];
        var oz = o[2];
        var out0 = (1 - (yy + zz)) * sx;
        var out1 = (xy + wz) * sx;
        var out2 = (xz - wy) * sx;
        var out4 = (xy - wz) * sy;
        var out5 = (1 - (xx + zz)) * sy;
        var out6 = (yz + wx) * sy;
        var out8 = (xz + wy) * sz;
        var out9 = (yz - wx) * sz;
        var out10 = (1 - (xx + yy)) * sz;
        out[0] = out0;
        out[1] = out1;
        out[2] = out2;
        out[3] = 0;
        out[4] = out4;
        out[5] = out5;
        out[6] = out6;
        out[7] = 0;
        out[8] = out8;
        out[9] = out9;
        out[10] = out10;
        out[11] = 0;
        out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
        out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
        out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
        out[15] = 1;
        return out;
      }
      /**
       * Calculates a 4x4 matrix from the given quaternion
       * @category Static
       *
       * @param out - mat4 receiving operation result
       * @param q - Quaternion to create matrix from
       * @returns `out`
       */
    }, {
      key: "fromQuat",
      value: function fromQuat(out, q) {
        var x = q[0];
        var y = q[1];
        var z = q[2];
        var w = q[3];
        var x2 = x + x;
        var y2 = y + y;
        var z2 = z + z;
        var xx = x * x2;
        var yx = y * x2;
        var yy = y * y2;
        var zx = z * x2;
        var zy = z * y2;
        var zz = z * z2;
        var wx = w * x2;
        var wy = w * y2;
        var wz = w * z2;
        out[0] = 1 - yy - zz;
        out[1] = yx + wz;
        out[2] = zx - wy;
        out[3] = 0;
        out[4] = yx - wz;
        out[5] = 1 - xx - zz;
        out[6] = zy + wx;
        out[7] = 0;
        out[8] = zx + wy;
        out[9] = zy - wx;
        out[10] = 1 - xx - yy;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
      }
      /**
       * Generates a frustum matrix with the given bounds
       * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
       * which matches WebGL/OpenGL's clip volume.
       * Passing null/undefined/no value for far will generate infinite projection matrix.
       * @category Static
       *
       * @param out - mat4 frustum matrix will be written into
       * @param left - Left bound of the frustum
       * @param right - Right bound of the frustum
       * @param bottom - Bottom bound of the frustum
       * @param top - Top bound of the frustum
       * @param near - Near bound of the frustum
       * @param far -  Far bound of the frustum, can be null or Infinity
       * @returns `out`
       */
    }, {
      key: "frustumNO",
      value: function frustumNO(out, left, right, bottom, top, near) {
        var far = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : Infinity;
        var rl = 1 / (right - left);
        var tb = 1 / (top - bottom);
        out[0] = near * 2 * rl;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = near * 2 * tb;
        out[6] = 0;
        out[7] = 0;
        out[8] = (right + left) * rl;
        out[9] = (top + bottom) * tb;
        out[11] = -1;
        out[12] = 0;
        out[13] = 0;
        out[15] = 0;
        if (far != null && far !== Infinity) {
          var nf = 1 / (near - far);
          out[10] = (far + near) * nf;
          out[14] = 2 * far * near * nf;
        } else {
          out[10] = -1;
          out[14] = -2 * near;
        }
        return out;
      }
      /**
       * Alias for {@link Mat4.frustumNO}
       * @category Static
       * @deprecated Use {@link Mat4.frustumNO} or {@link Mat4.frustumZO} explicitly
       */
    }, {
      key: "frustum",
      value: function frustum(out, left, right, bottom, top, near) {
        return out;
      }
      // eslint-disable-line @typescript-eslint/no-unused-vars
      /**
       * Generates a frustum matrix with the given bounds
       * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
       * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
       * Passing null/undefined/no value for far will generate infinite projection matrix.
       * @category Static
       *
       * @param out - mat4 frustum matrix will be written into
       * @param left - Left bound of the frustum
       * @param right - Right bound of the frustum
       * @param bottom - Bottom bound of the frustum
       * @param top - Top bound of the frustum
       * @param near - Near bound of the frustum
       * @param far - Far bound of the frustum, can be null or Infinity
       * @returns `out`
       */
    }, {
      key: "frustumZO",
      value: function frustumZO(out, left, right, bottom, top, near) {
        var far = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : Infinity;
        var rl = 1 / (right - left);
        var tb = 1 / (top - bottom);
        out[0] = near * 2 * rl;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = near * 2 * tb;
        out[6] = 0;
        out[7] = 0;
        out[8] = (right + left) * rl;
        out[9] = (top + bottom) * tb;
        out[11] = -1;
        out[12] = 0;
        out[13] = 0;
        out[15] = 0;
        if (far != null && far !== Infinity) {
          var nf = 1 / (near - far);
          out[10] = far * nf;
          out[14] = far * near * nf;
        } else {
          out[10] = -1;
          out[14] = -near;
        }
        return out;
      }
      /**
       * Generates a perspective projection matrix with the given bounds.
       * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
       * which matches WebGL/OpenGL's clip volume.
       * Passing null/undefined/no value for far will generate infinite projection matrix.
       * @category Static
       *
       * @param out - mat4 frustum matrix will be written into
       * @param fovy - Vertical field of view in radians
       * @param aspect - Aspect ratio. typically viewport width/height
       * @param near - Near bound of the frustum
       * @param far - Far bound of the frustum, can be null or Infinity
       * @returns `out`
       */
    }, {
      key: "perspectiveNO",
      value: function perspectiveNO(out, fovy, aspect, near) {
        var far = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Infinity;
        var f = 1 / Math.tan(fovy / 2);
        out[0] = f / aspect;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = f;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[11] = -1;
        out[12] = 0;
        out[13] = 0;
        out[15] = 0;
        if (far != null && far !== Infinity) {
          var nf = 1 / (near - far);
          out[10] = (far + near) * nf;
          out[14] = 2 * far * near * nf;
        } else {
          out[10] = -1;
          out[14] = -2 * near;
        }
        return out;
      }
      /**
       * Alias for {@link Mat4.perspectiveNO}
       * @category Static
       * @deprecated Use {@link Mat4.perspectiveNO} or {@link Mat4.perspectiveZO} explicitly
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "perspective",
      value: function perspective(out, fovy, aspect, near) {
        return out;
      }
      /**
       * Generates a perspective projection matrix suitable for WebGPU with the given bounds.
       * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
       * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
       * Passing null/undefined/no value for far will generate infinite projection matrix.
       * @category Static
       *
       * @param out - mat4 frustum matrix will be written into
       * @param fovy - Vertical field of view in radians
       * @param aspect - Aspect ratio. typically viewport width/height
       * @param near - Near bound of the frustum
       * @param far - Far bound of the frustum, can be null or Infinity
       * @returns `out`
       */
    }, {
      key: "perspectiveZO",
      value: function perspectiveZO(out, fovy, aspect, near) {
        var far = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Infinity;
        var f = 1 / Math.tan(fovy / 2);
        out[0] = f / aspect;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = f;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[11] = -1;
        out[12] = 0;
        out[13] = 0;
        out[15] = 0;
        if (far != null && far !== Infinity) {
          var nf = 1 / (near - far);
          out[10] = far * nf;
          out[14] = far * near * nf;
        } else {
          out[10] = -1;
          out[14] = -near;
        }
        return out;
      }
      /**
       * Generates a perspective projection matrix with the given field of view. This is primarily useful for generating
       * projection matrices to be used with the still experimental WebVR API.
       * @category Static
       *
       * @param out - mat4 frustum matrix will be written into
       * @param fov - Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
       * @param near - Near bound of the frustum
       * @param far - Far bound of the frustum
       * @returns `out`
       * @deprecated
       */
    }, {
      key: "perspectiveFromFieldOfView",
      value: function perspectiveFromFieldOfView(out, fov, near, far) {
        var upTan = Math.tan(fov.upDegrees * Math.PI / 180);
        var downTan = Math.tan(fov.downDegrees * Math.PI / 180);
        var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180);
        var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180);
        var xScale = 2 / (leftTan + rightTan);
        var yScale = 2 / (upTan + downTan);
        out[0] = xScale;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = yScale;
        out[6] = 0;
        out[7] = 0;
        out[8] = -((leftTan - rightTan) * xScale * 0.5);
        out[9] = (upTan - downTan) * yScale * 0.5;
        out[10] = far / (near - far);
        out[11] = -1;
        out[12] = 0;
        out[13] = 0;
        out[14] = far * near / (near - far);
        out[15] = 0;
        return out;
      }
      /**
       * Generates an orthogonal projection matrix with the given bounds. The near / far clip planes correspond to a
       * normalized device coordinate Z range of [-1, 1], which matches WebGL / OpenGLs clip volume.
       * @category Static
       *
       * @param out - mat4 frustum matrix will be written into
       * @param left - Left bound of the frustum
       * @param right - Right bound of the frustum
       * @param bottom - Bottom bound of the frustum
       * @param top - Top bound of the frustum
       * @param near - Near bound of the frustum
       * @param far - Far bound of the frustum
       * @returns `out`
       */
    }, {
      key: "orthoNO",
      value: function orthoNO(out, left, right, bottom, top, near, far) {
        var lr = 1 / (left - right);
        var bt = 1 / (bottom - top);
        var nf = 1 / (near - far);
        out[0] = -2 * lr;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = -2 * bt;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = 2 * nf;
        out[11] = 0;
        out[12] = (left + right) * lr;
        out[13] = (top + bottom) * bt;
        out[14] = (far + near) * nf;
        out[15] = 1;
        return out;
      }
      /**
       * Alias for {@link Mat4.orthoNO}
       * @category Static
       * @deprecated Use {@link Mat4.orthoNO} or {@link Mat4.orthoZO} explicitly
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "ortho",
      value: function ortho(out, left, right, bottom, top, near, far) {
        return out;
      }
      /**
       * Generates a orthogonal projection matrix with the given bounds. The near / far clip planes correspond to a
       * normalized device coordinate Z range of [0, 1], which matches WebGPU / Vulkan / DirectX / Metal's clip volume.
       * @category Static
       *
       * @param out - mat4 frustum matrix will be written into
       * @param left - Left bound of the frustum
       * @param right - Right bound of the frustum
       * @param bottom - Bottom bound of the frustum
       * @param top - Top bound of the frustum
       * @param near - Near bound of the frustum
       * @param far - Far bound of the frustum
       * @returns `out`
       */
    }, {
      key: "orthoZO",
      value: function orthoZO(out, left, right, bottom, top, near, far) {
        var lr = 1 / (left - right);
        var bt = 1 / (bottom - top);
        var nf = 1 / (near - far);
        out[0] = -2 * lr;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = -2 * bt;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = nf;
        out[11] = 0;
        out[12] = (left + right) * lr;
        out[13] = (top + bottom) * bt;
        out[14] = near * nf;
        out[15] = 1;
        return out;
      }
      /**
       * Generates a look-at matrix with the given eye position, focal point, and up axis. If you want a matrix that
       * actually makes an object look at another object, you should use targetTo instead.
       * @category Static
       *
       * @param out - mat4 frustum matrix will be written into
       * @param eye - Position of the viewer
       * @param center - Point the viewer is looking at
       * @param up - vec3 pointing up
       * @returns `out`
       */
    }, {
      key: "lookAt",
      value: function lookAt(out, eye, center, up) {
        var eyex = eye[0];
        var eyey = eye[1];
        var eyez = eye[2];
        var upx = up[0];
        var upy = up[1];
        var upz = up[2];
        var centerx = center[0];
        var centery = center[1];
        var centerz = center[2];
        if (Math.abs(eyex - centerx) < GLM_EPSILON && Math.abs(eyey - centery) < GLM_EPSILON && Math.abs(eyez - centerz) < GLM_EPSILON) {
          return _Mat4.identity(out);
        }
        var z0 = eyex - centerx;
        var z1 = eyey - centery;
        var z2 = eyez - centerz;
        var len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
        z0 *= len;
        z1 *= len;
        z2 *= len;
        var x0 = upy * z2 - upz * z1;
        var x1 = upz * z0 - upx * z2;
        var x2 = upx * z1 - upy * z0;
        len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
        if (!len) {
          x0 = 0;
          x1 = 0;
          x2 = 0;
        } else {
          len = 1 / len;
          x0 *= len;
          x1 *= len;
          x2 *= len;
        }
        var y0 = z1 * x2 - z2 * x1;
        var y1 = z2 * x0 - z0 * x2;
        var y2 = z0 * x1 - z1 * x0;
        len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
        if (!len) {
          y0 = 0;
          y1 = 0;
          y2 = 0;
        } else {
          len = 1 / len;
          y0 *= len;
          y1 *= len;
          y2 *= len;
        }
        out[0] = x0;
        out[1] = y0;
        out[2] = z0;
        out[3] = 0;
        out[4] = x1;
        out[5] = y1;
        out[6] = z1;
        out[7] = 0;
        out[8] = x2;
        out[9] = y2;
        out[10] = z2;
        out[11] = 0;
        out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
        out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
        out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
        out[15] = 1;
        return out;
      }
      /**
       * Generates a matrix that makes something look at something else.
       * @category Static
       *
       * @param out - mat4 frustum matrix will be written into
       * @param eye - Position of the viewer
       * @param target - Point the viewer is looking at
       * @param up - vec3 pointing up
       * @returns `out`
       */
    }, {
      key: "targetTo",
      value: function targetTo(out, eye, target, up) {
        var eyex = eye[0];
        var eyey = eye[1];
        var eyez = eye[2];
        var upx = up[0];
        var upy = up[1];
        var upz = up[2];
        var z0 = eyex - target[0];
        var z1 = eyey - target[1];
        var z2 = eyez - target[2];
        var len = z0 * z0 + z1 * z1 + z2 * z2;
        if (len > 0) {
          len = 1 / Math.sqrt(len);
          z0 *= len;
          z1 *= len;
          z2 *= len;
        }
        var x0 = upy * z2 - upz * z1;
        var x1 = upz * z0 - upx * z2;
        var x2 = upx * z1 - upy * z0;
        len = x0 * x0 + x1 * x1 + x2 * x2;
        if (len > 0) {
          len = 1 / Math.sqrt(len);
          x0 *= len;
          x1 *= len;
          x2 *= len;
        }
        out[0] = x0;
        out[1] = x1;
        out[2] = x2;
        out[3] = 0;
        out[4] = z1 * x2 - z2 * x1;
        out[5] = z2 * x0 - z0 * x2;
        out[6] = z0 * x1 - z1 * x0;
        out[7] = 0;
        out[8] = z0;
        out[9] = z1;
        out[10] = z2;
        out[11] = 0;
        out[12] = eyex;
        out[13] = eyey;
        out[14] = eyez;
        out[15] = 1;
        return out;
      }
      /**
       * Returns Frobenius norm of a {@link Mat4}
       * @category Static
       *
       * @param a - the matrix to calculate Frobenius norm of
       * @returns Frobenius norm
       */
    }, {
      key: "frob",
      value: function frob(a) {
        return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2] + a[3] * a[3] + a[4] * a[4] + a[5] * a[5] + a[6] * a[6] + a[7] * a[7] + a[8] * a[8] + a[9] * a[9] + a[10] * a[10] + a[11] * a[11] + a[12] * a[12] + a[13] * a[13] + a[14] * a[14] + a[15] * a[15]);
      }
      /**
       * Adds two {@link Mat4}'s
       * @category Static
       *
       * @param out - the receiving matrix
       * @param a - the first operand
       * @param b - the second operand
       * @returns `out`
       */
    }, {
      key: "add",
      value: function add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        out[3] = a[3] + b[3];
        out[4] = a[4] + b[4];
        out[5] = a[5] + b[5];
        out[6] = a[6] + b[6];
        out[7] = a[7] + b[7];
        out[8] = a[8] + b[8];
        out[9] = a[9] + b[9];
        out[10] = a[10] + b[10];
        out[11] = a[11] + b[11];
        out[12] = a[12] + b[12];
        out[13] = a[13] + b[13];
        out[14] = a[14] + b[14];
        out[15] = a[15] + b[15];
        return out;
      }
      /**
       * Subtracts matrix b from matrix a
       * @category Static
       *
       * @param out - the receiving matrix
       * @param a - the first operand
       * @param b - the second operand
       * @returns `out`
       */
    }, {
      key: "subtract",
      value: function subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        out[3] = a[3] - b[3];
        out[4] = a[4] - b[4];
        out[5] = a[5] - b[5];
        out[6] = a[6] - b[6];
        out[7] = a[7] - b[7];
        out[8] = a[8] - b[8];
        out[9] = a[9] - b[9];
        out[10] = a[10] - b[10];
        out[11] = a[11] - b[11];
        out[12] = a[12] - b[12];
        out[13] = a[13] - b[13];
        out[14] = a[14] - b[14];
        out[15] = a[15] - b[15];
        return out;
      }
      /**
       * Alias for {@link Mat4.subtract}
       * @category Static
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "sub",
      value: function sub(out, a, b) {
        return out;
      }
      /**
       * Multiply each element of the matrix by a scalar.
       * @category Static
       *
       * @param out - the receiving matrix
       * @param a - the matrix to scale
       * @param b - amount to scale the matrix's elements by
       * @returns `out`
       */
    }, {
      key: "multiplyScalar",
      value: function multiplyScalar(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        out[3] = a[3] * b;
        out[4] = a[4] * b;
        out[5] = a[5] * b;
        out[6] = a[6] * b;
        out[7] = a[7] * b;
        out[8] = a[8] * b;
        out[9] = a[9] * b;
        out[10] = a[10] * b;
        out[11] = a[11] * b;
        out[12] = a[12] * b;
        out[13] = a[13] * b;
        out[14] = a[14] * b;
        out[15] = a[15] * b;
        return out;
      }
      /**
       * Adds two mat4's after multiplying each element of the second operand by a scalar value.
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - the first operand
       * @param b - the second operand
       * @param scale - the amount to scale b's elements by before adding
       * @returns `out`
       */
    }, {
      key: "multiplyScalarAndAdd",
      value: function multiplyScalarAndAdd(out, a, b, scale) {
        out[0] = a[0] + b[0] * scale;
        out[1] = a[1] + b[1] * scale;
        out[2] = a[2] + b[2] * scale;
        out[3] = a[3] + b[3] * scale;
        out[4] = a[4] + b[4] * scale;
        out[5] = a[5] + b[5] * scale;
        out[6] = a[6] + b[6] * scale;
        out[7] = a[7] + b[7] * scale;
        out[8] = a[8] + b[8] * scale;
        out[9] = a[9] + b[9] * scale;
        out[10] = a[10] + b[10] * scale;
        out[11] = a[11] + b[11] * scale;
        out[12] = a[12] + b[12] * scale;
        out[13] = a[13] + b[13] * scale;
        out[14] = a[14] + b[14] * scale;
        out[15] = a[15] + b[15] * scale;
        return out;
      }
      /**
       * Returns whether two {@link Mat4}s have exactly the same elements in the same position (when compared with ===).
       * @category Static
       *
       * @param a - The first matrix.
       * @param b - The second matrix.
       * @returns True if the matrices are equal, false otherwise.
       */
    }, {
      key: "exactEquals",
      value: function exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
      }
      /**
       * Returns whether two {@link Mat4}s have approximately the same elements in the same position.
       * @category Static
       *
       * @param a - The first matrix.
       * @param b - The second matrix.
       * @returns True if the matrices are equal, false otherwise.
       */
    }, {
      key: "equals",
      value: function equals(a, b) {
        var a0 = a[0];
        var a1 = a[1];
        var a2 = a[2];
        var a3 = a[3];
        var a4 = a[4];
        var a5 = a[5];
        var a6 = a[6];
        var a7 = a[7];
        var a8 = a[8];
        var a9 = a[9];
        var a10 = a[10];
        var a11 = a[11];
        var a12 = a[12];
        var a13 = a[13];
        var a14 = a[14];
        var a15 = a[15];
        var b0 = b[0];
        var b1 = b[1];
        var b2 = b[2];
        var b3 = b[3];
        var b4 = b[4];
        var b5 = b[5];
        var b6 = b[6];
        var b7 = b[7];
        var b8 = b[8];
        var b9 = b[9];
        var b10 = b[10];
        var b11 = b[11];
        var b12 = b[12];
        var b13 = b[13];
        var b14 = b[14];
        var b15 = b[15];
        return Math.abs(a0 - b0) <= GLM_EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= GLM_EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= GLM_EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= GLM_EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= GLM_EPSILON * Math.max(1, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= GLM_EPSILON * Math.max(1, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= GLM_EPSILON * Math.max(1, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= GLM_EPSILON * Math.max(1, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= GLM_EPSILON * Math.max(1, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= GLM_EPSILON * Math.max(1, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= GLM_EPSILON * Math.max(1, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= GLM_EPSILON * Math.max(1, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= GLM_EPSILON * Math.max(1, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= GLM_EPSILON * Math.max(1, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= GLM_EPSILON * Math.max(1, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= GLM_EPSILON * Math.max(1, Math.abs(a15), Math.abs(b15));
      }
      /**
       * Returns a string representation of a {@link Mat4}
       * @category Static
       *
       * @param a - matrix to represent as a string
       * @returns string representation of the matrix
       */
    }, {
      key: "str",
      value: function str(a) {
        return "Mat4(".concat(a.join(", "), ")");
      }
    }]);
  }( /*#__PURE__*/_wrapNativeSuper(Float32Array));
  _IDENTITY_4X4 = new WeakMap();
  _TMP_VEC3 = new WeakMap();
  __privateAdd(_Mat4, _IDENTITY_4X4, new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]));
  /**
   * Temporary variable to prevent repeated allocations in the algorithms within Mat4.
   * These are declared as TypedArrays to aid in tree-shaking.
   */
  __privateAdd(_Mat4, _TMP_VEC3, new Float32Array(3));
  var Mat4 = _Mat4;
  Mat4.prototype.mul = Mat4.prototype.multiply;
  Mat4.sub = Mat4.subtract;
  Mat4.mul = Mat4.multiply;
  Mat4.frustum = Mat4.frustumNO;
  Mat4.perspective = Mat4.perspectiveNO;
  Mat4.ortho = Mat4.orthoNO;

  // src/_lib/f32/Vec3.ts
  var Vec3 = /*#__PURE__*/function (_Float32Array5) {
    /**
     * Create a {@link Vec3}.
     *
     * @category Constructor
     */
    function _Vec3() {
      var _this5;
      _classCallCheck(this, _Vec3);
      for (var _len9 = arguments.length, values = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        values[_key9] = arguments[_key9];
      }
      switch (values.length) {
        case 3:
          _this5 = _callSuper(this, _Vec3, [values]);
          break;
        case 2:
          _this5 = _callSuper(this, _Vec3, [values[0], values[1], 3]);
          break;
        case 1:
          {
            var v = values[0];
            if (typeof v === "number") {
              _this5 = _callSuper(this, _Vec3, [[v, v, v]]);
            } else {
              _this5 = _callSuper(this, _Vec3, [v, 0, 3]);
            }
            break;
          }
        default:
          _this5 = _callSuper(this, _Vec3, [3]);
          break;
      }
      return _assertThisInitialized(_this5);
    }
    // ============
    // Accessors
    // ============
    // Getters and setters to make component access read better.
    // These are likely to be a little bit slower than direct array access.
    /**
     * The x component of the vector. Equivalent to `this[0];`
     * @category Vector Components
     */
    _inherits(_Vec3, _Float32Array5);
    return _createClass(_Vec3, [{
      key: "x",
      get: function get() {
        return this[0];
      },
      set: function set(value) {
        this[0] = value;
      }
      /**
       * The y component of the vector. Equivalent to `this[1];`
       * @category Vector Components
       */
    }, {
      key: "y",
      get: function get() {
        return this[1];
      },
      set: function set(value) {
        this[1] = value;
      }
      /**
       * The z component of the vector. Equivalent to `this[2];`
       * @category Vector Components
       */
    }, {
      key: "z",
      get: function get() {
        return this[2];
      },
      set: function set(value) {
        this[2] = value;
      }
      // Alternate set of getters and setters in case this is being used to define
      // a color.
      /**
       * The r component of the vector. Equivalent to `this[0];`
       * @category Color Components
       */
    }, {
      key: "r",
      get: function get() {
        return this[0];
      },
      set: function set(value) {
        this[0] = value;
      }
      /**
       * The g component of the vector. Equivalent to `this[1];`
       * @category Color Components
       */
    }, {
      key: "g",
      get: function get() {
        return this[1];
      },
      set: function set(value) {
        this[1] = value;
      }
      /**
       * The b component of the vector. Equivalent to `this[2];`
       * @category Color Components
       */
    }, {
      key: "b",
      get: function get() {
        return this[2];
      },
      set: function set(value) {
        this[2] = value;
      }
      /**
       * The magnitude (length) of this.
       * Equivalent to `Vec3.magnitude(this);`
       *
       * Magnitude is used because the `length` attribute is already defined by
       * TypedArrays to mean the number of elements in the array.
       *
       * @category Accessors
       */
    }, {
      key: "magnitude",
      get: function get() {
        var x = this[0];
        var y = this[1];
        var z = this[2];
        return Math.sqrt(x * x + y * y + z * z);
      }
      /**
       * Alias for {@link Vec3.magnitude}
       *
       * @category Accessors
       */
    }, {
      key: "mag",
      get: function get() {
        return this.magnitude;
      }
      /**
       * The squared magnitude (length) of `this`.
       * Equivalent to `Vec3.squaredMagnitude(this);`
       *
       * @category Accessors
       */
    }, {
      key: "squaredMagnitude",
      get: function get() {
        var x = this[0];
        var y = this[1];
        var z = this[2];
        return x * x + y * y + z * z;
      }
      /**
       * Alias for {@link Vec3.squaredMagnitude}
       *
       * @category Accessors
       */
    }, {
      key: "sqrMag",
      get: function get() {
        return this.squaredMagnitude;
      }
      /**
       * A string representation of `this`
       * Equivalent to `Vec3.str(this);`
       *
       * @category Accessors
       */
    }, {
      key: "str",
      get: function get() {
        return _Vec3.str(this);
      }
      // ===================
      // Instances methods
      // ===================
      /**
       * Copy the values from another {@link Vec3} into `this`.
       * @category Methods
       *
       * @param a the source vector
       * @returns `this`
       */
    }, {
      key: "copy",
      value: function copy(a) {
        this.set(a);
        return this;
      }
      /**
       * Adds a {@link Vec3} to `this`.
       * Equivalent to `Vec3.add(this, this, b);`
       * @category Methods
       *
       * @param b - The vector to add to `this`
       * @returns `this`
       */
    }, {
      key: "add",
      value: function add(b) {
        this[0] += b[0];
        this[1] += b[1];
        this[2] += b[2];
        return this;
      }
      /**
       * Subtracts a {@link Vec3} from `this`.
       * Equivalent to `Vec3.subtract(this, this, b);`
       * @category Methods
       *
       * @param b - The vector to subtract from `this`
       * @returns `this`
       */
    }, {
      key: "subtract",
      value: function subtract(b) {
        this[0] -= b[0];
        this[1] -= b[1];
        this[2] -= b[2];
        return this;
      }
      /**
       * Alias for {@link Vec3.subtract}
       * @category Methods
       */
    }, {
      key: "sub",
      value: function sub(b) {
        return this;
      }
      // eslint-disable-line @typescript-eslint/no-unused-vars
      /**
       * Multiplies `this` by a {@link Vec3}.
       * Equivalent to `Vec3.multiply(this, this, b);`
       * @category Methods
       *
       * @param b - The vector to multiply `this` by
       * @returns `this`
       */
    }, {
      key: "multiply",
      value: function multiply(b) {
        this[0] *= b[0];
        this[1] *= b[1];
        this[2] *= b[2];
        return this;
      }
      /**
       * Alias for {@link Vec3.multiply}
       * @category Methods
       */
    }, {
      key: "mul",
      value: function mul(b) {
        return this;
      }
      // eslint-disable-line @typescript-eslint/no-unused-vars
      /**
       * Divides `this` by a {@link Vec3}.
       * Equivalent to `Vec3.divide(this, this, b);`
       * @category Methods
       *
       * @param b - The vector to divide `this` by
       * @returns `this`
       */
    }, {
      key: "divide",
      value: function divide(b) {
        this[0] /= b[0];
        this[1] /= b[1];
        this[2] /= b[2];
        return this;
      }
      /**
       * Alias for {@link Vec3.divide}
       * @category Methods
       */
    }, {
      key: "div",
      value: function div(b) {
        return this;
      }
      // eslint-disable-line @typescript-eslint/no-unused-vars
      /**
       * Scales `this` by a scalar number.
       * Equivalent to `Vec3.scale(this, this, b);`
       * @category Methods
       *
       * @param b - Amount to scale `this` by
       * @returns `this`
       */
    }, {
      key: "scale",
      value: function scale(b) {
        this[0] *= b;
        this[1] *= b;
        this[2] *= b;
        return this;
      }
      /**
       * Calculates `this` scaled by a scalar value then adds the result to `this`.
       * Equivalent to `Vec3.scaleAndAdd(this, this, b, scale);`
       * @category Methods
       *
       * @param b - The vector to add to `this`
       * @param scale - The amount to scale `b` by before adding
       * @returns `this`
       */
    }, {
      key: "scaleAndAdd",
      value: function scaleAndAdd(b, scale) {
        this[0] += b[0] * scale;
        this[1] += b[1] * scale;
        this[2] += b[2] * scale;
        return this;
      }
      /**
       * Calculates the Euclidean distance between another {@link Vec3} and `this`.
       * Equivalent to `Vec3.distance(this, b);`
       * @category Methods
       *
       * @param b - The vector to calculate the distance to
       * @returns Distance between `this` and `b`
       */
    }, {
      key: "distance",
      value: function distance(b) {
        return _Vec3.distance(this, b);
      }
      /**
       * Alias for {@link Vec3.distance}
       * @category Methods
       */
    }, {
      key: "dist",
      value: function dist(b) {
        return 0;
      }
      // eslint-disable-line @typescript-eslint/no-unused-vars
      /**
       * Calculates the squared Euclidean distance between another {@link Vec3} and `this`.
       * Equivalent to `Vec3.squaredDistance(this, b);`
       * @category Methods
       *
       * @param b The vector to calculate the squared distance to
       * @returns Squared distance between `this` and `b`
       */
    }, {
      key: "squaredDistance",
      value: function squaredDistance(b) {
        return _Vec3.squaredDistance(this, b);
      }
      /**
       * Alias for {@link Vec3.squaredDistance}
       * @category Methods
       */
    }, {
      key: "sqrDist",
      value: function sqrDist(b) {
        return 0;
      }
      // eslint-disable-line @typescript-eslint/no-unused-vars
      /**
       * Negates the components of `this`.
       * Equivalent to `Vec3.negate(this, this);`
       * @category Methods
       *
       * @returns `this`
       */
    }, {
      key: "negate",
      value: function negate() {
        this[0] *= -1;
        this[1] *= -1;
        this[2] *= -1;
        return this;
      }
      /**
       * Inverts the components of `this`.
       * Equivalent to `Vec3.inverse(this, this);`
       * @category Methods
       *
       * @returns `this`
       */
    }, {
      key: "invert",
      value: function invert() {
        this[0] = 1 / this[0];
        this[1] = 1 / this[1];
        this[2] = 1 / this[2];
        return this;
      }
      /**
       * Sets each component of `this` to its absolute value.
       * Equivalent to `Vec3.abs(this, this);`
       * @category Methods
       *
       * @returns `this`
       */
    }, {
      key: "abs",
      value: function abs() {
        this[0] = Math.abs(this[0]);
        this[1] = Math.abs(this[1]);
        this[2] = Math.abs(this[2]);
        return this;
      }
      /**
       * Calculates the dot product of this and another {@link Vec3}.
       * Equivalent to `Vec3.dot(this, b);`
       * @category Methods
       *
       * @param b - The second operand
       * @returns Dot product of `this` and `b`
       */
    }, {
      key: "dot",
      value: function dot(b) {
        return this[0] * b[0] + this[1] * b[1] + this[2] * b[2];
      }
      /**
       * Normalize `this`.
       * Equivalent to `Vec3.normalize(this, this);`
       * @category Methods
       *
       * @returns `this`
       */
    }, {
      key: "normalize",
      value: function normalize() {
        return _Vec3.normalize(this, this);
      }
      // ===================
      // Static accessors
      // ===================
      /**
       * @category Static
       *
       * @returns The number of bytes in a {@link Vec3}.
       */
    }], [{
      key: "BYTE_LENGTH",
      get: function get() {
        return 3 * Float32Array.BYTES_PER_ELEMENT;
      }
      // ===================
      // Static methods
      // ===================
      /**
       * Creates a new, empty vec3
       * @category Static
       *
       * @returns a new 3D vector
       */
    }, {
      key: "create",
      value: function create() {
        return new _Vec3();
      }
      /**
       * Creates a new vec3 initialized with values from an existing vector
       * @category Static
       *
       * @param a - vector to clone
       * @returns a new 3D vector
       */
    }, {
      key: "clone",
      value: function clone(a) {
        return new _Vec3(a);
      }
      /**
       * Calculates the magnitude (length) of a {@link Vec3}
       * @category Static
       *
       * @param a - Vector to calculate magnitude of
       * @returns Magnitude of a
       */
    }, {
      key: "magnitude",
      value: function magnitude(a) {
        var x = a[0];
        var y = a[1];
        var z = a[2];
        return Math.sqrt(x * x + y * y + z * z);
      }
      /**
       * Alias for {@link Vec3.magnitude}
       * @category Static
       */
    }, {
      key: "mag",
      value: function mag(a) {
        return 0;
      }
      // eslint-disable-line @typescript-eslint/no-unused-vars
      /**
       * Alias for {@link Vec3.magnitude}
       * @category Static
       * @deprecated Use {@link Vec3.magnitude} to avoid conflicts with builtin `length` methods/attribs
       *
       * @param a - vector to calculate length of
       * @returns length of a
       */
      // Length conflicts with Function.length
    }, {
      key: "length",
      value: function length(a) {
        return 0;
      }
      // eslint-disable-line @typescript-eslint/no-unused-vars
      /**
       * Alias for {@link Vec3.magnitude}
       * @category Static
       * @deprecated Use {@link Vec3.mag}
       */
    }, {
      key: "len",
      value: function len(a) {
        return 0;
      }
      // eslint-disable-line @typescript-eslint/no-unused-vars
      /**
       * Creates a new vec3 initialized with the given values
       * @category Static
       *
       * @param x - X component
       * @param y - Y component
       * @param z - Z component
       * @returns a new 3D vector
       */
    }, {
      key: "fromValues",
      value: function fromValues(x, y, z) {
        return new _Vec3(x, y, z);
      }
      /**
       * Copy the values from one vec3 to another
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - the source vector
       * @returns `out`
       */
    }, {
      key: "copy",
      value: function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        return out;
      }
      /**
       * Set the components of a vec3 to the given values
       * @category Static
       *
       * @param out - the receiving vector
       * @param x - X component
       * @param y - Y component
       * @param z - Z component
       * @returns `out`
       */
    }, {
      key: "set",
      value: function set(out, x, y, z) {
        out[0] = x;
        out[1] = y;
        out[2] = z;
        return out;
      }
      /**
       * Adds two {@link Vec3}s
       * @category Static
       *
       * @param out - The receiving vector
       * @param a - The first operand
       * @param b - The second operand
       * @returns `out`
       */
    }, {
      key: "add",
      value: function add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        return out;
      }
      /**
       * Subtracts vector b from vector a
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - the first operand
       * @param b - the second operand
       * @returns `out`
       */
    }, {
      key: "subtract",
      value: function subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        return out;
      }
      /**
       * Alias for {@link Vec3.subtract}
       * @category Static
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "sub",
      value: function sub(out, a, b) {
        return [0, 0, 0];
      }
      /**
       * Multiplies two vec3's
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - the first operand
       * @param b - the second operand
       * @returns `out`
       */
    }, {
      key: "multiply",
      value: function multiply(out, a, b) {
        out[0] = a[0] * b[0];
        out[1] = a[1] * b[1];
        out[2] = a[2] * b[2];
        return out;
      }
      /**
       * Alias for {@link Vec3.multiply}
       * @category Static
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "mul",
      value: function mul(out, a, b) {
        return [0, 0, 0];
      }
      /**
       * Divides two vec3's
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - the first operand
       * @param b - the second operand
       * @returns `out`
       */
    }, {
      key: "divide",
      value: function divide(out, a, b) {
        out[0] = a[0] / b[0];
        out[1] = a[1] / b[1];
        out[2] = a[2] / b[2];
        return out;
      }
      /**
       * Alias for {@link Vec3.divide}
       * @category Static
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "div",
      value: function div(out, a, b) {
        return [0, 0, 0];
      }
      /**
       * Math.ceil the components of a vec3
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - vector to ceil
       * @returns `out`
       */
    }, {
      key: "ceil",
      value: function ceil(out, a) {
        out[0] = Math.ceil(a[0]);
        out[1] = Math.ceil(a[1]);
        out[2] = Math.ceil(a[2]);
        return out;
      }
      /**
       * Math.floor the components of a vec3
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - vector to floor
       * @returns `out`
       */
    }, {
      key: "floor",
      value: function floor(out, a) {
        out[0] = Math.floor(a[0]);
        out[1] = Math.floor(a[1]);
        out[2] = Math.floor(a[2]);
        return out;
      }
      /**
       * Returns the minimum of two vec3's
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - the first operand
       * @param b - the second operand
       * @returns `out`
       */
    }, {
      key: "min",
      value: function min(out, a, b) {
        out[0] = Math.min(a[0], b[0]);
        out[1] = Math.min(a[1], b[1]);
        out[2] = Math.min(a[2], b[2]);
        return out;
      }
      /**
       * Returns the maximum of two vec3's
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - the first operand
       * @param b - the second operand
       * @returns `out`
       */
    }, {
      key: "max",
      value: function max(out, a, b) {
        out[0] = Math.max(a[0], b[0]);
        out[1] = Math.max(a[1], b[1]);
        out[2] = Math.max(a[2], b[2]);
        return out;
      }
      /**
       * symmetric round the components of a vec3
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - vector to round
       * @returns `out`
       */
      /*
        static round(out: Vec3Like, a: Readonly<Vec3Like>): Vec3Like {
        out[0] = glMatrix.round(a[0]);
        out[1] = glMatrix.round(a[1]);
        out[2] = glMatrix.round(a[2]);
        return out;
      }*/
      /**
       * Scales a vec3 by a scalar number
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - the vector to scale
       * @param scale - amount to scale the vector by
       * @returns `out`
       */
    }, {
      key: "scale",
      value: function scale(out, a, _scale) {
        out[0] = a[0] * _scale;
        out[1] = a[1] * _scale;
        out[2] = a[2] * _scale;
        return out;
      }
      /**
       * Adds two vec3's after scaling the second operand by a scalar value
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - the first operand
       * @param b - the second operand
       * @param scale - the amount to scale b by before adding
       * @returns `out`
       */
    }, {
      key: "scaleAndAdd",
      value: function scaleAndAdd(out, a, b, scale) {
        out[0] = a[0] + b[0] * scale;
        out[1] = a[1] + b[1] * scale;
        out[2] = a[2] + b[2] * scale;
        return out;
      }
      /**
       * Calculates the Euclidean distance between two vec3's
       * @category Static
       *
       * @param a - the first operand
       * @param b - the second operand
       * @returns distance between a and b
       */
    }, {
      key: "distance",
      value: function distance(a, b) {
        var x = b[0] - a[0];
        var y = b[1] - a[1];
        var z = b[2] - a[2];
        return Math.sqrt(x * x + y * y + z * z);
      }
      /**
       * Alias for {@link Vec3.distance}
       * @category Static
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "dist",
      value: function dist(a, b) {
        return 0;
      }
      /**
       * Calculates the squared Euclidean distance between two vec3's
       * @category Static
       *
       * @param a - the first operand
       * @param b - the second operand
       * @returns squared distance between a and b
       */
    }, {
      key: "squaredDistance",
      value: function squaredDistance(a, b) {
        var x = b[0] - a[0];
        var y = b[1] - a[1];
        var z = b[2] - a[2];
        return x * x + y * y + z * z;
      }
      /**
       * Alias for {@link Vec3.squaredDistance}
       * @category Static
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "sqrDist",
      value: function sqrDist(a, b) {
        return 0;
      }
      /**
       * Calculates the squared length of a vec3
       * @category Static
       *
       * @param a - vector to calculate squared length of
       * @returns squared length of a
       */
    }, {
      key: "squaredLength",
      value: function squaredLength(a) {
        var x = a[0];
        var y = a[1];
        var z = a[2];
        return x * x + y * y + z * z;
      }
      /**
       * Alias for {@link Vec3.squaredLength}
       * @category Static
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "sqrLen",
      value: function sqrLen(a, b) {
        return 0;
      }
      /**
       * Negates the components of a vec3
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - vector to negate
       * @returns `out`
       */
    }, {
      key: "negate",
      value: function negate(out, a) {
        out[0] = -a[0];
        out[1] = -a[1];
        out[2] = -a[2];
        return out;
      }
      /**
       * Returns the inverse of the components of a vec3
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - vector to invert
       * @returns `out`
       */
    }, {
      key: "inverse",
      value: function inverse(out, a) {
        out[0] = 1 / a[0];
        out[1] = 1 / a[1];
        out[2] = 1 / a[2];
        return out;
      }
      /**
       * Returns the absolute value of the components of a {@link Vec3}
       * @category Static
       *
       * @param out - The receiving vector
       * @param a - Vector to compute the absolute values of
       * @returns `out`
       */
    }, {
      key: "abs",
      value: function abs(out, a) {
        out[0] = Math.abs(a[0]);
        out[1] = Math.abs(a[1]);
        out[2] = Math.abs(a[2]);
        return out;
      }
      /**
       * Normalize a vec3
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - vector to normalize
       * @returns `out`
       */
    }, {
      key: "normalize",
      value: function normalize(out, a) {
        var x = a[0];
        var y = a[1];
        var z = a[2];
        var len = x * x + y * y + z * z;
        if (len > 0) {
          len = 1 / Math.sqrt(len);
        }
        out[0] = a[0] * len;
        out[1] = a[1] * len;
        out[2] = a[2] * len;
        return out;
      }
      /**
       * Calculates the dot product of two vec3's
       * @category Static
       *
       * @param a - the first operand
       * @param b - the second operand
       * @returns dot product of a and b
       */
    }, {
      key: "dot",
      value: function dot(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
      }
      /**
       * Computes the cross product of two vec3's
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - the first operand
       * @param b - the second operand
       * @returns `out`
       */
    }, {
      key: "cross",
      value: function cross(out, a, b) {
        var ax = a[0],
          ay = a[1],
          az = a[2];
        var bx = b[0],
          by = b[1],
          bz = b[2];
        out[0] = ay * bz - az * by;
        out[1] = az * bx - ax * bz;
        out[2] = ax * by - ay * bx;
        return out;
      }
      /**
       * Performs a linear interpolation between two vec3's
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - the first operand
       * @param b - the second operand
       * @param t - interpolation amount, in the range [0-1], between the two inputs
       * @returns `out`
       */
    }, {
      key: "lerp",
      value: function lerp(out, a, b, t) {
        var ax = a[0];
        var ay = a[1];
        var az = a[2];
        out[0] = ax + t * (b[0] - ax);
        out[1] = ay + t * (b[1] - ay);
        out[2] = az + t * (b[2] - az);
        return out;
      }
      /**
       * Performs a spherical linear interpolation between two vec3's
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - the first operand
       * @param b - the second operand
       * @param t - interpolation amount, in the range [0-1], between the two inputs
       * @returns `out`
       */
    }, {
      key: "slerp",
      value: function slerp(out, a, b, t) {
        var angle = Math.acos(Math.min(Math.max(_Vec3.dot(a, b), -1), 1));
        var sinTotal = Math.sin(angle);
        var ratioA = Math.sin((1 - t) * angle) / sinTotal;
        var ratioB = Math.sin(t * angle) / sinTotal;
        out[0] = ratioA * a[0] + ratioB * b[0];
        out[1] = ratioA * a[1] + ratioB * b[1];
        out[2] = ratioA * a[2] + ratioB * b[2];
        return out;
      }
      /**
       * Performs a hermite interpolation with two control points
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - the first operand
       * @param b - the second operand
       * @param c - the third operand
       * @param d - the fourth operand
       * @param t - interpolation amount, in the range [0-1], between the two inputs
       * @returns `out`
       */
    }, {
      key: "hermite",
      value: function hermite(out, a, b, c, d, t) {
        var factorTimes2 = t * t;
        var factor1 = factorTimes2 * (2 * t - 3) + 1;
        var factor2 = factorTimes2 * (t - 2) + t;
        var factor3 = factorTimes2 * (t - 1);
        var factor4 = factorTimes2 * (3 - 2 * t);
        out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
        out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
        out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
        return out;
      }
      /**
       * Performs a bezier interpolation with two control points
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - the first operand
       * @param b - the second operand
       * @param c - the third operand
       * @param d - the fourth operand
       * @param t - interpolation amount, in the range [0-1], between the two inputs
       * @returns `out`
       */
    }, {
      key: "bezier",
      value: function bezier(out, a, b, c, d, t) {
        var inverseFactor = 1 - t;
        var inverseFactorTimesTwo = inverseFactor * inverseFactor;
        var factorTimes2 = t * t;
        var factor1 = inverseFactorTimesTwo * inverseFactor;
        var factor2 = 3 * t * inverseFactorTimesTwo;
        var factor3 = 3 * factorTimes2 * inverseFactor;
        var factor4 = factorTimes2 * t;
        out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
        out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
        out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
        return out;
      }
      /**
       * Generates a random vector with the given scale
       * @category Static
       *
       * @param out - the receiving vector
       * @param {Number} [scale] Length of the resulting vector. If omitted, a unit vector will be returned
       * @returns `out`
       */
      /*
          static random(out: Vec3Like, scale) {
          scale = scale === undefined ? 1.0 : scale;
      
          let r = glMatrix.RANDOM() * 2.0 * Math.PI;
          let z = glMatrix.RANDOM() * 2.0 - 1.0;
          let zScale = Math.sqrt(1.0 - z * z) * scale;
      
          out[0] = Math.cos(r) * zScale;
          out[1] = Math.sin(r) * zScale;
          out[2] = z * scale;
          return out;
        }*/
      /**
       * Transforms the vec3 with a mat4.
       * 4th vector component is implicitly '1'
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - the vector to transform
       * @param m - matrix to transform with
       * @returns `out`
       */
    }, {
      key: "transformMat4",
      value: function transformMat4(out, a, m) {
        var x = a[0],
          y = a[1],
          z = a[2];
        var w = m[3] * x + m[7] * y + m[11] * z + m[15] || 1;
        out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
        out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
        out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
        return out;
      }
      /**
       * Transforms the vec3 with a mat3.
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - the vector to transform
       * @param m - the 3x3 matrix to transform with
       * @returns `out`
       */
    }, {
      key: "transformMat3",
      value: function transformMat3(out, a, m) {
        var x = a[0],
          y = a[1],
          z = a[2];
        out[0] = x * m[0] + y * m[3] + z * m[6];
        out[1] = x * m[1] + y * m[4] + z * m[7];
        out[2] = x * m[2] + y * m[5] + z * m[8];
        return out;
      }
      /**
       * Transforms the vec3 with a quat
       * Can also be used for dual quaternions. (Multiply it with the real part)
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - the vector to transform
       * @param q - quaternion to transform with
       * @returns `out`
       */
    }, {
      key: "transformQuat",
      value: function transformQuat(out, a, q) {
        var qx = q[0];
        var qy = q[1];
        var qz = q[2];
        var w2 = q[3] * 2;
        var x = a[0];
        var y = a[1];
        var z = a[2];
        var uvx = qy * z - qz * y;
        var uvy = qz * x - qx * z;
        var uvz = qx * y - qy * x;
        var uuvx = (qy * uvz - qz * uvy) * 2;
        var uuvy = (qz * uvx - qx * uvz) * 2;
        var uuvz = (qx * uvy - qy * uvx) * 2;
        out[0] = x + uvx * w2 + uuvx;
        out[1] = y + uvy * w2 + uuvy;
        out[2] = z + uvz * w2 + uuvz;
        return out;
      }
      /**
       * Rotate a 3D vector around the x-axis
       * @category Static
       *
       * @param out - The receiving vec3
       * @param a - The vec3 point to rotate
       * @param b - The origin of the rotation
       * @param rad - The angle of rotation in radians
       * @returns `out`
       */
    }, {
      key: "rotateX",
      value: function rotateX(out, a, b, rad) {
        var by = b[1];
        var bz = b[2];
        var py = a[1] - by;
        var pz = a[2] - bz;
        out[0] = a[0];
        out[1] = py * Math.cos(rad) - pz * Math.sin(rad) + by;
        out[2] = py * Math.sin(rad) + pz * Math.cos(rad) + bz;
        return out;
      }
      /**
       * Rotate a 3D vector around the y-axis
       * @category Static
       *
       * @param out - The receiving vec3
       * @param a - The vec3 point to rotate
       * @param b - The origin of the rotation
       * @param rad - The angle of rotation in radians
       * @returns `out`
       */
    }, {
      key: "rotateY",
      value: function rotateY(out, a, b, rad) {
        var bx = b[0];
        var bz = b[2];
        var px = a[0] - bx;
        var pz = a[2] - bz;
        out[0] = pz * Math.sin(rad) + px * Math.cos(rad) + bx;
        out[1] = a[1];
        out[2] = pz * Math.cos(rad) - px * Math.sin(rad) + bz;
        return out;
      }
      /**
       * Rotate a 3D vector around the z-axis
       * @category Static
       *
       * @param out - The receiving vec3
       * @param a - The vec3 point to rotate
       * @param b - The origin of the rotation
       * @param rad - The angle of rotation in radians
       * @returns `out`
       */
    }, {
      key: "rotateZ",
      value: function rotateZ(out, a, b, rad) {
        var bx = b[0];
        var by = b[1];
        var px = a[0] - bx;
        var py = a[1] - by;
        out[0] = px * Math.cos(rad) - py * Math.sin(rad) + bx;
        out[1] = px * Math.sin(rad) + py * Math.cos(rad) + by;
        out[2] = b[2];
        return out;
      }
      /**
       * Get the angle between two 3D vectors
       * @category Static
       *
       * @param a - The first operand
       * @param b - The second operand
       * @returns The angle in radians
       */
    }, {
      key: "angle",
      value: function angle(a, b) {
        var ax = a[0];
        var ay = a[1];
        var az = a[2];
        var bx = b[0];
        var by = b[1];
        var bz = b[2];
        var mag = Math.sqrt((ax * ax + ay * ay + az * az) * (bx * bx + by * by + bz * bz));
        var cosine = mag && _Vec3.dot(a, b) / mag;
        return Math.acos(Math.min(Math.max(cosine, -1), 1));
      }
      /**
       * Set the components of a vec3 to zero
       * @category Static
       *
       * @param out - the receiving vector
       * @returns `out`
       */
    }, {
      key: "zero",
      value: function zero(out) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
        return out;
      }
      /**
       * Returns a string representation of a vector
       * @category Static
       *
       * @param a - vector to represent as a string
       * @returns string representation of the vector
       */
    }, {
      key: "str",
      value: function str(a) {
        return "Vec3(".concat(a.join(", "), ")");
      }
      /**
       * Returns whether the vectors have exactly the same elements in the same position (when compared with ===)
       * @category Static
       *
       * @param a - The first vector.
       * @param b - The second vector.
       * @returns True if the vectors are equal, false otherwise.
       */
    }, {
      key: "exactEquals",
      value: function exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
      }
      /**
       * Returns whether the vectors have approximately the same elements in the same position.
       * @category Static
       *
       * @param a - The first vector.
       * @param b - The second vector.
       * @returns True if the vectors are equal, false otherwise.
       */
    }, {
      key: "equals",
      value: function equals(a, b) {
        var a0 = a[0];
        var a1 = a[1];
        var a2 = a[2];
        var b0 = b[0];
        var b1 = b[1];
        var b2 = b[2];
        return Math.abs(a0 - b0) <= GLM_EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= GLM_EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= GLM_EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2));
      }
    }]);
  }( /*#__PURE__*/_wrapNativeSuper(Float32Array));
  Vec3.prototype.sub = Vec3.prototype.subtract;
  Vec3.prototype.mul = Vec3.prototype.multiply;
  Vec3.prototype.div = Vec3.prototype.divide;
  Vec3.prototype.dist = Vec3.prototype.distance;
  Vec3.prototype.sqrDist = Vec3.prototype.squaredDistance;
  Vec3.sub = Vec3.subtract;
  Vec3.mul = Vec3.multiply;
  Vec3.div = Vec3.divide;
  Vec3.dist = Vec3.distance;
  Vec3.sqrDist = Vec3.squaredDistance;
  Vec3.sqrLen = Vec3.squaredLength;
  Vec3.mag = Vec3.magnitude;
  Vec3.length = Vec3.magnitude;
  Vec3.len = Vec3.magnitude;

  // src/_lib/f32/Vec4.ts
  var Vec4 = /*#__PURE__*/function (_Float32Array6) {
    /**
     * Create a {@link Vec4}.
     *
     * @category Constructor
     */
    function _Vec4() {
      var _this6;
      _classCallCheck(this, _Vec4);
      for (var _len10 = arguments.length, values = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        values[_key10] = arguments[_key10];
      }
      switch (values.length) {
        case 4:
          _this6 = _callSuper(this, _Vec4, [values]);
          break;
        case 2:
          _this6 = _callSuper(this, _Vec4, [values[0], values[1], 4]);
          break;
        case 1:
          {
            var v = values[0];
            if (typeof v === "number") {
              _this6 = _callSuper(this, _Vec4, [[v, v, v, v]]);
            } else {
              _this6 = _callSuper(this, _Vec4, [v, 0, 4]);
            }
            break;
          }
        default:
          _this6 = _callSuper(this, _Vec4, [4]);
          break;
      }
      return _assertThisInitialized(_this6);
    }
    // ============
    // Accessors
    // ============
    // Getters and setters to make component access read better.
    // These are likely to be a little bit slower than direct array access.
    /**
     * The x component of the vector. Equivalent to `this[0];`
     * @category Vector Components
     */
    _inherits(_Vec4, _Float32Array6);
    return _createClass(_Vec4, [{
      key: "x",
      get: function get() {
        return this[0];
      },
      set: function set(value) {
        this[0] = value;
      }
      /**
       * The y component of the vector. Equivalent to `this[1];`
       * @category Vector Components
       */
    }, {
      key: "y",
      get: function get() {
        return this[1];
      },
      set: function set(value) {
        this[1] = value;
      }
      /**
       * The z component of the vector. Equivalent to `this[2];`
       * @category Vector Components
       */
    }, {
      key: "z",
      get: function get() {
        return this[2];
      },
      set: function set(value) {
        this[2] = value;
      }
      /**
       * The w component of the vector. Equivalent to `this[3];`
       * @category Vector Components
       */
    }, {
      key: "w",
      get: function get() {
        return this[3];
      },
      set: function set(value) {
        this[3] = value;
      }
      // Alternate set of getters and setters in case this is being used to define
      // a color.
      /**
       * The r component of the vector. Equivalent to `this[0];`
       * @category Color Components
       */
    }, {
      key: "r",
      get: function get() {
        return this[0];
      },
      set: function set(value) {
        this[0] = value;
      }
      /**
       * The g component of the vector. Equivalent to `this[1];`
       * @category Color Components
       */
    }, {
      key: "g",
      get: function get() {
        return this[1];
      },
      set: function set(value) {
        this[1] = value;
      }
      /**
       * The b component of the vector. Equivalent to `this[2];`
       * @category Color Components
       */
    }, {
      key: "b",
      get: function get() {
        return this[2];
      },
      set: function set(value) {
        this[2] = value;
      }
      /**
       * The a component of the vector. Equivalent to `this[3];`
       * @category Color Components
       */
    }, {
      key: "a",
      get: function get() {
        return this[3];
      },
      set: function set(value) {
        this[3] = value;
      }
      /**
       * The magnitude (length) of this.
       * Equivalent to `Vec4.magnitude(this);`
       *
       * Magnitude is used because the `length` attribute is already defined by
       * TypedArrays to mean the number of elements in the array.
       *
       * @category Accessors
       */
    }, {
      key: "magnitude",
      get: function get() {
        var x = this[0];
        var y = this[1];
        var z = this[2];
        var w = this[3];
        return Math.sqrt(x * x + y * y + z * z + w * w);
      }
      /**
       * Alias for {@link Vec4.magnitude}
       *
       * @category Accessors
       */
    }, {
      key: "mag",
      get: function get() {
        return this.magnitude;
      }
      /**
       * A string representation of `this`
       * Equivalent to `Vec4.str(this);`
       *
       * @category Accessors
       */
    }, {
      key: "str",
      get: function get() {
        return _Vec4.str(this);
      }
      // ===================
      // Instances methods
      // ===================
      /**
       * Copy the values from another {@link Vec4} into `this`.
       * @category Methods
       *
       * @param a the source vector
       * @returns `this`
       */
    }, {
      key: "copy",
      value: function copy(a) {
        _get(_getPrototypeOf(_Vec4.prototype), "set", this).call(this, a);
        return this;
      }
      /**
       * Adds a {@link Vec4} to `this`.
       * Equivalent to `Vec4.add(this, this, b);`
       * @category Methods
       *
       * @param b - The vector to add to `this`
       * @returns `this`
       */
    }, {
      key: "add",
      value: function add(b) {
        this[0] += b[0];
        this[1] += b[1];
        this[2] += b[2];
        this[3] += b[3];
        return this;
      }
      /**
       * Subtracts a {@link Vec4} from `this`.
       * Equivalent to `Vec4.subtract(this, this, b);`
       * @category Methods
       *
       * @param b - The vector to subtract from `this`
       * @returns `this`
       */
    }, {
      key: "subtract",
      value: function subtract(b) {
        this[0] -= b[0];
        this[1] -= b[1];
        this[2] -= b[2];
        this[3] -= b[3];
        return this;
      }
      /**
       * Alias for {@link Vec4.subtract}
       * @category Methods
       */
    }, {
      key: "sub",
      value: function sub(b) {
        return this;
      }
      // eslint-disable-line @typescript-eslint/no-unused-vars
      /**
       * Multiplies `this` by a {@link Vec4}.
       * Equivalent to `Vec4.multiply(this, this, b);`
       * @category Methods
       *
       * @param b - The vector to multiply `this` by
       * @returns `this`
       */
    }, {
      key: "multiply",
      value: function multiply(b) {
        this[0] *= b[0];
        this[1] *= b[1];
        this[2] *= b[2];
        this[3] *= b[3];
        return this;
      }
      /**
       * Alias for {@link Vec4.multiply}
       * @category Methods
       */
    }, {
      key: "mul",
      value: function mul(b) {
        return this;
      }
      // eslint-disable-line @typescript-eslint/no-unused-vars
      /**
       * Divides `this` by a {@link Vec4}.
       * Equivalent to `Vec4.divide(this, this, b);`
       * @category Methods
       *
       * @param b - The vector to divide `this` by
       * @returns `this`
       */
    }, {
      key: "divide",
      value: function divide(b) {
        this[0] /= b[0];
        this[1] /= b[1];
        this[2] /= b[2];
        this[3] /= b[3];
        return this;
      }
      /**
       * Alias for {@link Vec4.divide}
       * @category Methods
       */
    }, {
      key: "div",
      value: function div(b) {
        return this;
      }
      // eslint-disable-line @typescript-eslint/no-unused-vars
      /**
       * Scales `this` by a scalar number.
       * Equivalent to `Vec4.scale(this, this, b);`
       * @category Methods
       *
       * @param b - Amount to scale `this` by
       * @returns `this`
       */
    }, {
      key: "scale",
      value: function scale(b) {
        this[0] *= b;
        this[1] *= b;
        this[2] *= b;
        this[3] *= b;
        return this;
      }
      /**
       * Calculates `this` scaled by a scalar value then adds the result to `this`.
       * Equivalent to `Vec4.scaleAndAdd(this, this, b, scale);`
       * @category Methods
       *
       * @param b - The vector to add to `this`
       * @param scale - The amount to scale `b` by before adding
       * @returns `this`
       */
    }, {
      key: "scaleAndAdd",
      value: function scaleAndAdd(b, scale) {
        this[0] += b[0] * scale;
        this[1] += b[1] * scale;
        this[2] += b[2] * scale;
        this[3] += b[3] * scale;
        return this;
      }
      /**
       * Calculates the Euclidean distance between another {@link Vec4} and `this`.
       * Equivalent to `Vec4.distance(this, b);`
       * @category Methods
       *
       * @param b - The vector to calculate the distance to
       * @returns Distance between `this` and `b`
       */
    }, {
      key: "distance",
      value: function distance(b) {
        return _Vec4.distance(this, b);
      }
      /**
       * Alias for {@link Vec4.distance}
       * @category Methods
       */
    }, {
      key: "dist",
      value: function dist(b) {
        return 0;
      }
      // eslint-disable-line @typescript-eslint/no-unused-vars
      /**
       * Calculates the squared Euclidean distance between another {@link Vec4} and `this`.
       * Equivalent to `Vec4.squaredDistance(this, b);`
       * @category Methods
       *
       * @param b The vector to calculate the squared distance to
       * @returns Squared distance between `this` and `b`
       */
    }, {
      key: "squaredDistance",
      value: function squaredDistance(b) {
        return _Vec4.squaredDistance(this, b);
      }
      /**
       * Alias for {@link Vec4.squaredDistance}
       * @category Methods
       */
    }, {
      key: "sqrDist",
      value: function sqrDist(b) {
        return 0;
      }
      // eslint-disable-line @typescript-eslint/no-unused-vars
      /**
       * Negates the components of `this`.
       * Equivalent to `Vec4.negate(this, this);`
       * @category Methods
       *
       * @returns `this`
       */
    }, {
      key: "negate",
      value: function negate() {
        this[0] *= -1;
        this[1] *= -1;
        this[2] *= -1;
        this[3] *= -1;
        return this;
      }
      /**
       * Inverts the components of `this`.
       * Equivalent to `Vec4.inverse(this, this);`
       * @category Methods
       *
       * @returns `this`
       */
    }, {
      key: "invert",
      value: function invert() {
        this[0] = 1 / this[0];
        this[1] = 1 / this[1];
        this[2] = 1 / this[2];
        this[3] = 1 / this[3];
        return this;
      }
      /**
       * Sets each component of `this` to it's absolute value.
       * Equivalent to `Vec4.abs(this, this);`
       * @category Methods
       *
       * @returns `this`
       */
    }, {
      key: "abs",
      value: function abs() {
        this[0] = Math.abs(this[0]);
        this[1] = Math.abs(this[1]);
        this[2] = Math.abs(this[2]);
        this[3] = Math.abs(this[3]);
        return this;
      }
      /**
       * Calculates the dot product of this and another {@link Vec4}.
       * Equivalent to `Vec4.dot(this, b);`
       * @category Methods
       *
       * @param b - The second operand
       * @returns Dot product of `this` and `b`
       */
    }, {
      key: "dot",
      value: function dot(b) {
        return this[0] * b[0] + this[1] * b[1] + this[2] * b[2] + this[3] * b[3];
      }
      /**
       * Normalize `this`.
       * Equivalent to `Vec4.normalize(this, this);`
       * @category Methods
       *
       * @returns `this`
       */
    }, {
      key: "normalize",
      value: function normalize() {
        return _Vec4.normalize(this, this);
      }
      // ===================
      // Static accessors
      // ===================
      /**
       * @category Static
       *
       * @returns The number of bytes in a {@link Vec4}.
       */
    }], [{
      key: "BYTE_LENGTH",
      get: function get() {
        return 4 * Float32Array.BYTES_PER_ELEMENT;
      }
      // ===================
      // Static methods
      // ===================
      /**
       * Creates a new, empty {@link Vec4}
       * @category Static
       *
       * @returns a new 4D vector
       */
    }, {
      key: "create",
      value: function create() {
        return new _Vec4();
      }
      /**
       * Creates a new {@link Vec4} initialized with values from an existing vector
       * @category Static
       *
       * @param a - vector to clone
       * @returns a new 4D vector
       */
    }, {
      key: "clone",
      value: function clone(a) {
        return new _Vec4(a);
      }
      /**
       * Creates a new {@link Vec4} initialized with the given values
       * @category Static
       *
       * @param x - X component
       * @param y - Y component
       * @param z - Z component
       * @param w - W component
       * @returns a new 4D vector
       */
    }, {
      key: "fromValues",
      value: function fromValues(x, y, z, w) {
        return new _Vec4(x, y, z, w);
      }
      /**
       * Copy the values from one {@link Vec4} to another
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - the source vector
       * @returns `out`
       */
    }, {
      key: "copy",
      value: function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        return out;
      }
      /**
       * Set the components of a {@link Vec4} to the given values
       * @category Static
       *
       * @param out - the receiving vector
       * @param x - X component
       * @param y - Y component
       * @param z - Z component
       * @param w - W component
       * @returns `out`
       */
    }, {
      key: "set",
      value: function set(out, x, y, z, w) {
        out[0] = x;
        out[1] = y;
        out[2] = z;
        out[3] = w;
        return out;
      }
      /**
       * Adds two {@link Vec4}s
       * @category Static
       *
       * @param out - The receiving vector
       * @param a - The first operand
       * @param b - The second operand
       * @returns `out`
       */
    }, {
      key: "add",
      value: function add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        out[3] = a[3] + b[3];
        return out;
      }
      /**
       * Subtracts vector b from vector a
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - the first operand
       * @param b - the second operand
       * @returns `out`
       */
    }, {
      key: "subtract",
      value: function subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        out[3] = a[3] - b[3];
        return out;
      }
      /**
       * Alias for {@link Vec4.subtract}
       * @category Static
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "sub",
      value: function sub(out, a, b) {
        return out;
      }
      /**
       * Multiplies two {@link Vec4}'s
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - the first operand
       * @param b - the second operand
       * @returns `out`
       */
    }, {
      key: "multiply",
      value: function multiply(out, a, b) {
        out[0] = a[0] * b[0];
        out[1] = a[1] * b[1];
        out[2] = a[2] * b[2];
        out[3] = a[3] * b[3];
        return out;
      }
      /**
       * Alias for {@link Vec4.multiply}
       * @category Static
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "mul",
      value: function mul(out, a, b) {
        return out;
      }
      /**
       * Divides two {@link Vec4}'s
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - the first operand
       * @param b - the second operand
       * @returns `out`
       */
    }, {
      key: "divide",
      value: function divide(out, a, b) {
        out[0] = a[0] / b[0];
        out[1] = a[1] / b[1];
        out[2] = a[2] / b[2];
        out[3] = a[3] / b[3];
        return out;
      }
      /**
       * Alias for {@link Vec4.divide}
       * @category Static
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "div",
      value: function div(out, a, b) {
        return out;
      }
      /**
       * Math.ceil the components of a {@link Vec4}
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - vector to ceil
       * @returns `out`
       */
    }, {
      key: "ceil",
      value: function ceil(out, a) {
        out[0] = Math.ceil(a[0]);
        out[1] = Math.ceil(a[1]);
        out[2] = Math.ceil(a[2]);
        out[3] = Math.ceil(a[3]);
        return out;
      }
      /**
       * Math.floor the components of a {@link Vec4}
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - vector to floor
       * @returns `out`
       */
    }, {
      key: "floor",
      value: function floor(out, a) {
        out[0] = Math.floor(a[0]);
        out[1] = Math.floor(a[1]);
        out[2] = Math.floor(a[2]);
        out[3] = Math.floor(a[3]);
        return out;
      }
      /**
       * Returns the minimum of two {@link Vec4}'s
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - the first operand
       * @param b - the second operand
       * @returns `out`
       */
    }, {
      key: "min",
      value: function min(out, a, b) {
        out[0] = Math.min(a[0], b[0]);
        out[1] = Math.min(a[1], b[1]);
        out[2] = Math.min(a[2], b[2]);
        out[3] = Math.min(a[3], b[3]);
        return out;
      }
      /**
       * Returns the maximum of two {@link Vec4}'s
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - the first operand
       * @param b - the second operand
       * @returns `out`
       */
    }, {
      key: "max",
      value: function max(out, a, b) {
        out[0] = Math.max(a[0], b[0]);
        out[1] = Math.max(a[1], b[1]);
        out[2] = Math.max(a[2], b[2]);
        out[3] = Math.max(a[3], b[3]);
        return out;
      }
      /**
       * Math.round the components of a {@link Vec4}
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - vector to round
       * @returns `out`
       */
    }, {
      key: "round",
      value: function round(out, a) {
        out[0] = Math.round(a[0]);
        out[1] = Math.round(a[1]);
        out[2] = Math.round(a[2]);
        out[3] = Math.round(a[3]);
        return out;
      }
      /**
       * Scales a {@link Vec4} by a scalar number
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - the vector to scale
       * @param scale - amount to scale the vector by
       * @returns `out`
       */
    }, {
      key: "scale",
      value: function scale(out, a, _scale2) {
        out[0] = a[0] * _scale2;
        out[1] = a[1] * _scale2;
        out[2] = a[2] * _scale2;
        out[3] = a[3] * _scale2;
        return out;
      }
      /**
       * Adds two {@link Vec4}'s after scaling the second operand by a scalar value
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - the first operand
       * @param b - the second operand
       * @param scale - the amount to scale b by before adding
       * @returns `out`
       */
    }, {
      key: "scaleAndAdd",
      value: function scaleAndAdd(out, a, b, scale) {
        out[0] = a[0] + b[0] * scale;
        out[1] = a[1] + b[1] * scale;
        out[2] = a[2] + b[2] * scale;
        out[3] = a[3] + b[3] * scale;
        return out;
      }
      /**
       * Calculates the Euclidean distance between two {@link Vec4}'s
       * @category Static
       *
       * @param a - the first operand
       * @param b - the second operand
       * @returns distance between a and b
       */
    }, {
      key: "distance",
      value: function distance(a, b) {
        var x = b[0] - a[0];
        var y = b[1] - a[1];
        var z = b[2] - a[2];
        var w = b[3] - a[3];
        return Math.hypot(x, y, z, w);
      }
      /**
       * Alias for {@link Vec4.distance}
       * @category Static
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "dist",
      value: function dist(a, b) {
        return 0;
      }
      /**
       * Calculates the squared Euclidean distance between two {@link Vec4}'s
       * @category Static
       *
       * @param a - the first operand
       * @param b - the second operand
       * @returns squared distance between a and b
       */
    }, {
      key: "squaredDistance",
      value: function squaredDistance(a, b) {
        var x = b[0] - a[0];
        var y = b[1] - a[1];
        var z = b[2] - a[2];
        var w = b[3] - a[3];
        return x * x + y * y + z * z + w * w;
      }
      /**
       * Alias for {@link Vec4.squaredDistance}
       * @category Static
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "sqrDist",
      value: function sqrDist(a, b) {
        return 0;
      }
      /**
       * Calculates the magnitude (length) of a {@link Vec4}
       * @category Static
       *
       * @param a - vector to calculate length of
       * @returns length of `a`
       */
    }, {
      key: "magnitude",
      value: function magnitude(a) {
        var x = a[0];
        var y = a[1];
        var z = a[2];
        var w = a[3];
        return Math.sqrt(x * x + y * y + z * z + w * w);
      }
      /**
       * Alias for {@link Vec4.magnitude}
       * @category Static
       */
    }, {
      key: "mag",
      value: function mag(a) {
        return 0;
      }
      // eslint-disable-line @typescript-eslint/no-unused-vars
      /**
       * Alias for {@link Vec4.magnitude}
       * @category Static
       * @deprecated Use {@link Vec4.magnitude} to avoid conflicts with builtin `length` methods/attribs
       */
      // Length conflicts with Function.length
    }, {
      key: "length",
      value: function length(a) {
        return 0;
      }
      // eslint-disable-line @typescript-eslint/no-unused-vars
      /**
       * Alias for {@link Vec4.magnitude}
       * @category Static
       * @deprecated Use {@link Vec4.mag}
       */
    }, {
      key: "len",
      value: function len(a) {
        return 0;
      }
      // eslint-disable-line @typescript-eslint/no-unused-vars
      /**
       * Calculates the squared length of a {@link Vec4}
       * @category Static
       *
       * @param a - vector to calculate squared length of
       * @returns squared length of a
       */
    }, {
      key: "squaredLength",
      value: function squaredLength(a) {
        var x = a[0];
        var y = a[1];
        var z = a[2];
        var w = a[3];
        return x * x + y * y + z * z + w * w;
      }
      /**
       * Alias for {@link Vec4.squaredLength}
       * @category Static
       */
    }, {
      key: "sqrLen",
      value: function sqrLen(a) {
        return 0;
      }
      // eslint-disable-line @typescript-eslint/no-unused-vars
      /**
       * Negates the components of a {@link Vec4}
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - vector to negate
       * @returns `out`
       */
    }, {
      key: "negate",
      value: function negate(out, a) {
        out[0] = -a[0];
        out[1] = -a[1];
        out[2] = -a[2];
        out[3] = -a[3];
        return out;
      }
      /**
       * Returns the inverse of the components of a {@link Vec4}
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - vector to invert
       * @returns `out`
       */
    }, {
      key: "inverse",
      value: function inverse(out, a) {
        out[0] = 1 / a[0];
        out[1] = 1 / a[1];
        out[2] = 1 / a[2];
        out[3] = 1 / a[3];
        return out;
      }
      /**
       * Returns the absolute value of the components of a {@link Vec4}
       * @category Static
       *
       * @param out - The receiving vector
       * @param a - Vector to compute the absolute values of
       * @returns `out`
       */
    }, {
      key: "abs",
      value: function abs(out, a) {
        out[0] = Math.abs(a[0]);
        out[1] = Math.abs(a[1]);
        out[2] = Math.abs(a[2]);
        out[3] = Math.abs(a[3]);
        return out;
      }
      /**
       * Normalize a {@link Vec4}
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - vector to normalize
       * @returns `out`
       */
    }, {
      key: "normalize",
      value: function normalize(out, a) {
        var x = a[0];
        var y = a[1];
        var z = a[2];
        var w = a[3];
        var len = x * x + y * y + z * z + w * w;
        if (len > 0) {
          len = 1 / Math.sqrt(len);
        }
        out[0] = x * len;
        out[1] = y * len;
        out[2] = z * len;
        out[3] = w * len;
        return out;
      }
      /**
       * Calculates the dot product of two {@link Vec4}'s
       * @category Static
       *
       * @param a - the first operand
       * @param b - the second operand
       * @returns dot product of a and b
       */
    }, {
      key: "dot",
      value: function dot(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
      }
      /**
       * Returns the cross-product of three vectors in a 4-dimensional space
       * @category Static
       *
       * @param out the receiving vector
       * @param u - the first vector
       * @param v - the second vector
       * @param w - the third vector
       * @returns result
       */
    }, {
      key: "cross",
      value: function cross(out, u, v, w) {
        var a = v[0] * w[1] - v[1] * w[0];
        var b = v[0] * w[2] - v[2] * w[0];
        var c = v[0] * w[3] - v[3] * w[0];
        var d = v[1] * w[2] - v[2] * w[1];
        var e = v[1] * w[3] - v[3] * w[1];
        var f = v[2] * w[3] - v[3] * w[2];
        var g = u[0];
        var h = u[1];
        var i = u[2];
        var j = u[3];
        out[0] = h * f - i * e + j * d;
        out[1] = -(g * f) + i * c - j * b;
        out[2] = g * e - h * c + j * a;
        out[3] = -(g * d) + h * b - i * a;
        return out;
      }
      /**
       * Performs a linear interpolation between two {@link Vec4}'s
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - the first operand
       * @param b - the second operand
       * @param t - interpolation amount, in the range [0-1], between the two inputs
       * @returns `out`
       */
    }, {
      key: "lerp",
      value: function lerp(out, a, b, t) {
        var ax = a[0];
        var ay = a[1];
        var az = a[2];
        var aw = a[3];
        out[0] = ax + t * (b[0] - ax);
        out[1] = ay + t * (b[1] - ay);
        out[2] = az + t * (b[2] - az);
        out[3] = aw + t * (b[3] - aw);
        return out;
      }
      /**
       * Generates a random vector with the given scale
       * @category Static
       *
       * @param out - the receiving vector
       * @param [scale] - Length of the resulting vector. If ommitted, a unit vector will be returned
       * @returns `out`
       */
      /*
          static random(out: Vec4Like, scale): Vec4Like {
          scale = scale || 1.0;
      
          // Marsaglia, George. Choosing a Point from the Surface of a
          // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
          // http://projecteuclid.org/euclid.aoms/1177692644;
          var v1, v2, v3, v4;
          var s1, s2;
          do {
            v1 = glMatrix.RANDOM() * 2 - 1;
            v2 = glMatrix.RANDOM() * 2 - 1;
            s1 = v1 * v1 + v2 * v2;
          } while (s1 >= 1);
          do {
            v3 = glMatrix.RANDOM() * 2 - 1;
            v4 = glMatrix.RANDOM() * 2 - 1;
            s2 = v3 * v3 + v4 * v4;
          } while (s2 >= 1);
      
          var d = Math.sqrt((1 - s1) / s2);
          out[0] = scale * v1;
          out[1] = scale * v2;
          out[2] = scale * v3 * d;
          out[3] = scale * v4 * d;
          return out;
        }*/
      /**
       * Transforms the {@link Vec4} with a {@link Mat4}.
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - the vector to transform
       * @param m - matrix to transform with
       * @returns `out`
       */
    }, {
      key: "transformMat4",
      value: function transformMat4(out, a, m) {
        var x = a[0];
        var y = a[1];
        var z = a[2];
        var w = a[3];
        out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
        out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
        out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
        out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
        return out;
      }
      /**
       * Transforms the {@link Vec4} with a {@link Quat}
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - the vector to transform
       * @param q - quaternion to transform with
       * @returns `out`
       */
    }, {
      key: "transformQuat",
      value: function transformQuat(out, a, q) {
        var x = a[0];
        var y = a[1];
        var z = a[2];
        var qx = q[0];
        var qy = q[1];
        var qz = q[2];
        var qw = q[3];
        var ix = qw * x + qy * z - qz * y;
        var iy = qw * y + qz * x - qx * z;
        var iz = qw * z + qx * y - qy * x;
        var iw = -qx * x - qy * y - qz * z;
        out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
        out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
        out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
        out[3] = a[3];
        return out;
      }
      /**
       * Set the components of a {@link Vec4} to zero
       * @category Static
       *
       * @param out - the receiving vector
       * @returns `out`
       */
    }, {
      key: "zero",
      value: function zero(out) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        return out;
      }
      /**
       * Returns a string representation of a {@link Vec4}
       * @category Static
       *
       * @param a - vector to represent as a string
       * @returns string representation of the vector
       */
    }, {
      key: "str",
      value: function str(a) {
        return "Vec4(".concat(a.join(", "), ")");
      }
      /**
       * Returns whether the vectors have exactly the same elements in the same position (when compared with ===)
       * @category Static
       *
       * @param a - The first vector.
       * @param b - The second vector.
       * @returns True if the vectors are equal, false otherwise.
       */
    }, {
      key: "exactEquals",
      value: function exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
      }
      /**
       * Returns whether the vectors have approximately the same elements in the same position.
       * @category Static
       *
       * @param a - The first vector.
       * @param b - The second vector.
       * @returns True if the vectors are equal, false otherwise.
       */
    }, {
      key: "equals",
      value: function equals(a, b) {
        var a0 = a[0];
        var a1 = a[1];
        var a2 = a[2];
        var a3 = a[3];
        var b0 = b[0];
        var b1 = b[1];
        var b2 = b[2];
        var b3 = b[3];
        return Math.abs(a0 - b0) <= GLM_EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= GLM_EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= GLM_EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= GLM_EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3));
      }
    }]);
  }( /*#__PURE__*/_wrapNativeSuper(Float32Array));
  Vec4.prototype.sub = Vec4.prototype.subtract;
  Vec4.prototype.mul = Vec4.prototype.multiply;
  Vec4.prototype.div = Vec4.prototype.divide;
  Vec4.prototype.dist = Vec4.prototype.distance;
  Vec4.prototype.sqrDist = Vec4.prototype.squaredDistance;
  Vec4.sub = Vec4.subtract;
  Vec4.mul = Vec4.multiply;
  Vec4.div = Vec4.divide;
  Vec4.dist = Vec4.distance;
  Vec4.sqrDist = Vec4.squaredDistance;
  Vec4.sqrLen = Vec4.squaredLength;
  Vec4.mag = Vec4.magnitude;
  Vec4.length = Vec4.magnitude;
  Vec4.len = Vec4.magnitude;

  // src/_lib/f32/Quat.ts
  var _DEFAULT_ANGLE_ORDER, _TMP_QUAT1, _TMP_QUAT2, _TMP_MAT3, _TMP_VEC32, _X_UNIT_VEC3, _Y_UNIT_VEC3;
  var _Quat = /*#__PURE__*/function (_Float32Array7) {
    /**
     * Create a {@link Quat}.
     *
     * @category Constructor
     */
    function _Quat() {
      var _this7;
      _classCallCheck(this, _Quat);
      for (var _len11 = arguments.length, values = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        values[_key11] = arguments[_key11];
      }
      switch (values.length) {
        case 4:
          _this7 = _callSuper(this, _Quat, [values]);
          break;
        case 2:
          _this7 = _callSuper(this, _Quat, [values[0], values[1], 4]);
          break;
        case 1:
          {
            var v = values[0];
            if (typeof v === "number") {
              _this7 = _callSuper(this, _Quat, [[v, v, v, v]]);
            } else {
              _this7 = _callSuper(this, _Quat, [v, 0, 4]);
            }
            break;
          }
        default:
          _this7 = _callSuper(this, _Quat, [4]);
          _this7[3] = 1;
          break;
      }
      return _assertThisInitialized(_this7);
    }
    // ============
    // Accessors
    // ============
    // Getters and setters to make component access read better.
    // These are likely to be a little bit slower than direct array access.
    /**
     * The x component of the quaternion. Equivalent to `this[0];`
     * @category Quaternion Components
     */
    _inherits(_Quat, _Float32Array7);
    return _createClass(_Quat, [{
      key: "x",
      get: function get() {
        return this[0];
      },
      set: function set(value) {
        this[0] = value;
      }
      /**
       * The y component of the quaternion. Equivalent to `this[1];`
       * @category Quaternion Components
       */
    }, {
      key: "y",
      get: function get() {
        return this[1];
      },
      set: function set(value) {
        this[1] = value;
      }
      /**
       * The z component of the quaternion. Equivalent to `this[2];`
       * @category Quaternion Components
       */
    }, {
      key: "z",
      get: function get() {
        return this[2];
      },
      set: function set(value) {
        this[2] = value;
      }
      /**
       * The w component of the quaternion. Equivalent to `this[3];`
       * @category Quaternion Components
       */
    }, {
      key: "w",
      get: function get() {
        return this[3];
      },
      set: function set(value) {
        this[3] = value;
      }
      /**
       * The magnitude (length) of this.
       * Equivalent to `Quat.magnitude(this);`
       *
       * Magnitude is used because the `length` attribute is already defined by
       * TypedArrays to mean the number of elements in the array.
       *
       * @category Accessors
       */
    }, {
      key: "magnitude",
      get: function get() {
        var x = this[0];
        var y = this[1];
        var z = this[2];
        var w = this[3];
        return Math.sqrt(x * x + y * y + z * z + w * w);
      }
      /**
       * Alias for {@link Quat.magnitude}
       *
       * @category Accessors
       */
    }, {
      key: "mag",
      get: function get() {
        return this.magnitude;
      }
      /**
       * A string representation of `this`
       * Equivalent to `Quat.str(this);`
       *
       * @category Accessors
       */
    }, {
      key: "str",
      get: function get() {
        return _Quat.str(this);
      }
      // ===================
      // Instances methods
      // ===================
      /**
       * Copy the values from another {@link Quat} into `this`.
       * @category Methods
       *
       * @param a the source quaternion
       * @returns `this`
       */
    }, {
      key: "copy",
      value: function copy(a) {
        _get(_getPrototypeOf(_Quat.prototype), "set", this).call(this, a);
        return this;
      }
      /**
       * Set `this` to the identity quaternion
       * Equivalent to Quat.identity(this)
       * @category Methods
       *
       * @returns `this`
       */
    }, {
      key: "identity",
      value: function identity() {
        this[0] = 0;
        this[1] = 0;
        this[2] = 0;
        this[3] = 1;
        return this;
      }
      /**
       * Multiplies `this` by a {@link Quat}.
       * Equivalent to `Quat.multiply(this, this, b);`
       * @category Methods
       *
       * @param b - The vector to multiply `this` by
       * @returns `this`
       */
    }, {
      key: "multiply",
      value: function multiply(b) {
        return _Quat.multiply(this, this, b);
      }
      /**
       * Alias for {@link Quat.multiply}
       * @category Methods
       */
    }, {
      key: "mul",
      value: function mul(b) {
        return this;
      }
      // eslint-disable-line @typescript-eslint/no-unused-vars
      /**
       * Rotates `this` by the given angle about the X axis
       * Equivalent to `Quat.rotateX(this, this, rad);`
       * @category Methods
       *
       * @param rad - angle (in radians) to rotate
       * @returns `this`
       */
    }, {
      key: "rotateX",
      value: function rotateX(rad) {
        return _Quat.rotateX(this, this, rad);
      }
      /**
       * Rotates `this` by the given angle about the Y axis
       * Equivalent to `Quat.rotateY(this, this, rad);`
       * @category Methods
       *
       * @param rad - angle (in radians) to rotate
       * @returns `this`
       */
    }, {
      key: "rotateY",
      value: function rotateY(rad) {
        return _Quat.rotateY(this, this, rad);
      }
      /**
       * Rotates `this` by the given angle about the Z axis
       * Equivalent to `Quat.rotateZ(this, this, rad);`
       * @category Methods
       *
       * @param rad - angle (in radians) to rotate
       * @returns `this`
       */
    }, {
      key: "rotateZ",
      value: function rotateZ(rad) {
        return _Quat.rotateZ(this, this, rad);
      }
      /**
       * Inverts `this`
       * Equivalent to `Quat.invert(this, this);`
       * @category Methods
       *
       * @returns `this`
       */
    }, {
      key: "invert",
      value: function invert() {
        return _Quat.invert(this, this);
      }
      /**
       * Scales `this` by a scalar number
       * Equivalent to `Quat.scale(this, this, scale);`
       * @category Methods
       *
       * @param scale - amount to scale the vector by
       * @returns `this`
       */
    }, {
      key: "scale",
      value: function scale(_scale3) {
        this[0] *= _scale3;
        this[1] *= _scale3;
        this[2] *= _scale3;
        this[3] *= _scale3;
        return this;
      }
      /**
       * Calculates the dot product of `this` and another {@link Quat}
       * Equivalent to `Quat.dot(this, b);`
       * @category Methods
       *
       * @param b - the second operand
       * @returns dot product of `this` and b
       */
    }, {
      key: "dot",
      value: function dot(b) {
        return _Quat.dot(this, b);
      }
      // ===================
      // Static accessors
      // ===================
      /**
       * @category Static
       *
       * @returns The number of bytes in a {@link Quat}.
       */
    }], [{
      key: "BYTE_LENGTH",
      get: function get() {
        return 4 * Float32Array.BYTES_PER_ELEMENT;
      }
      // ===================
      // Static methods
      // ===================
      /**
       * Creates a new identity quat
       * @category Static
       *
       * @returns a new quaternion
       */
    }, {
      key: "create",
      value: function create() {
        return new _Quat();
      }
      /**
       * Set a quat to the identity quaternion
       * @category Static
       *
       * @param out - the receiving quaternion
       * @returns `out`
       */
    }, {
      key: "identity",
      value: function identity(out) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
        out[3] = 1;
        return out;
      }
      /**
       * Sets a quat from the given angle and rotation axis,
       * then returns it.
       * @category Static
       *
       * @param out - the receiving quaternion
       * @param axis - the axis around which to rotate
       * @param rad - the angle in radians
       * @returns `out`
       **/
    }, {
      key: "setAxisAngle",
      value: function setAxisAngle(out, axis, rad) {
        rad *= 0.5;
        var s = Math.sin(rad);
        out[0] = s * axis[0];
        out[1] = s * axis[1];
        out[2] = s * axis[2];
        out[3] = Math.cos(rad);
        return out;
      }
      /**
       * Gets the rotation axis and angle for a given
       *  quaternion. If a quaternion is created with
       *  setAxisAngle, this method will return the same
       *  values as provided in the original parameter list
       *  OR functionally equivalent values.
       * Example: The quaternion formed by axis [0, 0, 1] and
       *  angle -90 is the same as the quaternion formed by
       *  [0, 0, 1] and 270. This method favors the latter.
       * @category Static
       *
       * @param out_axis - Vector receiving the axis of rotation
       * @param q - Quaternion to be decomposed
       * @return Angle, in radians, of the rotation
       */
    }, {
      key: "getAxisAngle",
      value: function getAxisAngle(out_axis, q) {
        var rad = Math.acos(q[3]) * 2;
        var s = Math.sin(rad / 2);
        if (s > GLM_EPSILON) {
          out_axis[0] = q[0] / s;
          out_axis[1] = q[1] / s;
          out_axis[2] = q[2] / s;
        } else {
          out_axis[0] = 1;
          out_axis[1] = 0;
          out_axis[2] = 0;
        }
        return rad;
      }
      /**
       * Gets the angular distance between two unit quaternions
       * @category Static
       *
       * @param  {ReadonlyQuat} a     Origin unit quaternion
       * @param  {ReadonlyQuat} b     Destination unit quaternion
       * @return {Number}     Angle, in radians, between the two quaternions
       */
    }, {
      key: "getAngle",
      value: function getAngle(a, b) {
        var dotproduct = _Quat.dot(a, b);
        return Math.acos(2 * dotproduct * dotproduct - 1);
      }
      /**
       * Multiplies two quaternions.
       * @category Static
       *
       * @param out - the receiving quaternion
       * @param a - the first operand
       * @param b - the second operand
       * @returns `out`
       */
    }, {
      key: "multiply",
      value: function multiply(out, a, b) {
        var ax = a[0];
        var ay = a[1];
        var az = a[2];
        var aw = a[3];
        var bx = b[0];
        var by = b[1];
        var bz = b[2];
        var bw = b[3];
        out[0] = ax * bw + aw * bx + ay * bz - az * by;
        out[1] = ay * bw + aw * by + az * bx - ax * bz;
        out[2] = az * bw + aw * bz + ax * by - ay * bx;
        out[3] = aw * bw - ax * bx - ay * by - az * bz;
        return out;
      }
      /**
       * Rotates a quaternion by the given angle about the X axis
       * @category Static
       *
       * @param out - quat receiving operation result
       * @param a - quat to rotate
       * @param rad - angle (in radians) to rotate
       * @returns `out`
       */
    }, {
      key: "rotateX",
      value: function rotateX(out, a, rad) {
        rad *= 0.5;
        var ax = a[0];
        var ay = a[1];
        var az = a[2];
        var aw = a[3];
        var bx = Math.sin(rad);
        var bw = Math.cos(rad);
        out[0] = ax * bw + aw * bx;
        out[1] = ay * bw + az * bx;
        out[2] = az * bw - ay * bx;
        out[3] = aw * bw - ax * bx;
        return out;
      }
      /**
       * Rotates a quaternion by the given angle about the Y axis
       * @category Static
       *
       * @param out - quat receiving operation result
       * @param a - quat to rotate
       * @param rad - angle (in radians) to rotate
       * @returns `out`
       */
    }, {
      key: "rotateY",
      value: function rotateY(out, a, rad) {
        rad *= 0.5;
        var ax = a[0];
        var ay = a[1];
        var az = a[2];
        var aw = a[3];
        var by = Math.sin(rad);
        var bw = Math.cos(rad);
        out[0] = ax * bw - az * by;
        out[1] = ay * bw + aw * by;
        out[2] = az * bw + ax * by;
        out[3] = aw * bw - ay * by;
        return out;
      }
      /**
       * Rotates a quaternion by the given angle about the Z axis
       * @category Static
       *
       * @param out - quat receiving operation result
       * @param a - quat to rotate
       * @param rad - angle (in radians) to rotate
       * @returns `out`
       */
    }, {
      key: "rotateZ",
      value: function rotateZ(out, a, rad) {
        rad *= 0.5;
        var ax = a[0];
        var ay = a[1];
        var az = a[2];
        var aw = a[3];
        var bz = Math.sin(rad);
        var bw = Math.cos(rad);
        out[0] = ax * bw + ay * bz;
        out[1] = ay * bw - ax * bz;
        out[2] = az * bw + aw * bz;
        out[3] = aw * bw - az * bz;
        return out;
      }
      /**
       * Calculates the W component of a quat from the X, Y, and Z components.
       * Assumes that quaternion is 1 unit in length.
       * Any existing W component will be ignored.
       * @category Static
       *
       * @param out - the receiving quaternion
       * @param a - quat to calculate W component of
       * @returns `out`
       */
    }, {
      key: "calculateW",
      value: function calculateW(out, a) {
        var x = a[0],
          y = a[1],
          z = a[2];
        out[0] = x;
        out[1] = y;
        out[2] = z;
        out[3] = Math.sqrt(Math.abs(1 - x * x - y * y - z * z));
        return out;
      }
      /**
       * Calculate the exponential of a unit quaternion.
       * @category Static
       *
       * @param out - the receiving quaternion
       * @param a - quat to calculate the exponential of
       * @returns `out`
       */
    }, {
      key: "exp",
      value: function exp(out, a) {
        var x = a[0],
          y = a[1],
          z = a[2],
          w = a[3];
        var r = Math.sqrt(x * x + y * y + z * z);
        var et = Math.exp(w);
        var s = r > 0 ? et * Math.sin(r) / r : 0;
        out[0] = x * s;
        out[1] = y * s;
        out[2] = z * s;
        out[3] = et * Math.cos(r);
        return out;
      }
      /**
       * Calculate the natural logarithm of a unit quaternion.
       * @category Static
       *
       * @param out - the receiving quaternion
       * @param a - quat to calculate the exponential of
       * @returns `out`
       */
    }, {
      key: "ln",
      value: function ln(out, a) {
        var x = a[0],
          y = a[1],
          z = a[2],
          w = a[3];
        var r = Math.sqrt(x * x + y * y + z * z);
        var t = r > 0 ? Math.atan2(r, w) / r : 0;
        out[0] = x * t;
        out[1] = y * t;
        out[2] = z * t;
        out[3] = 0.5 * Math.log(x * x + y * y + z * z + w * w);
        return out;
      }
      /**
       * Calculate the scalar power of a unit quaternion.
       * @category Static
       *
       * @param out - the receiving quaternion
       * @param a - quat to calculate the exponential of
       * @param b - amount to scale the quaternion by
       * @returns `out`
       */
    }, {
      key: "pow",
      value: function pow(out, a, b) {
        _Quat.ln(out, a);
        _Quat.scale(out, out, b);
        _Quat.exp(out, out);
        return out;
      }
      /**
       * Performs a spherical linear interpolation between two quat
       * @category Static
       *
       * @param out - the receiving quaternion
       * @param a - the first operand
       * @param b - the second operand
       * @param t - interpolation amount, in the range [0-1], between the two inputs
       * @returns `out`
       */
    }, {
      key: "slerp",
      value: function slerp(out, a, b, t) {
        var ax = a[0],
          ay = a[1],
          az = a[2],
          aw = a[3];
        var bx = b[0],
          by = b[1],
          bz = b[2],
          bw = b[3];
        var scale0;
        var scale1;
        var cosom = ax * bx + ay * by + az * bz + aw * bw;
        if (cosom < 0) {
          cosom = -cosom;
          bx = -bx;
          by = -by;
          bz = -bz;
          bw = -bw;
        }
        if (1 - cosom > GLM_EPSILON) {
          var omega = Math.acos(cosom);
          var sinom = Math.sin(omega);
          scale0 = Math.sin((1 - t) * omega) / sinom;
          scale1 = Math.sin(t * omega) / sinom;
        } else {
          scale0 = 1 - t;
          scale1 = t;
        }
        out[0] = scale0 * ax + scale1 * bx;
        out[1] = scale0 * ay + scale1 * by;
        out[2] = scale0 * az + scale1 * bz;
        out[3] = scale0 * aw + scale1 * bw;
        return out;
      }
      /**
       * Generates a random unit quaternion
       * @category Static
       *
       * @param out - the receiving quaternion
       * @returns `out`
       */
      /* static random(out: QuatLike): QuatLike {
          // Implementation of http://planning.cs.uiuc.edu/node198.html
          // TODO: Calling random 3 times is probably not the fastest solution
          let u1 = glMatrix.RANDOM();
          let u2 = glMatrix.RANDOM();
          let u3 = glMatrix.RANDOM();
      
          let sqrt1MinusU1 = Math.sqrt(1 - u1);
          let sqrtU1 = Math.sqrt(u1);
      
          out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
          out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
          out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
          out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
          return out;
        }*/
      /**
       * Calculates the inverse of a quat
       * @category Static
       *
       * @param out - the receiving quaternion
       * @param a - quat to calculate inverse of
       * @returns `out`
       */
    }, {
      key: "invert",
      value: function invert(out, a) {
        var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3];
        var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
        var invDot = dot ? 1 / dot : 0;
        out[0] = -a0 * invDot;
        out[1] = -a1 * invDot;
        out[2] = -a2 * invDot;
        out[3] = a3 * invDot;
        return out;
      }
      /**
       * Calculates the conjugate of a quat
       * If the quaternion is normalized, this function is faster than `quat.inverse` and produces the same result.
       * @category Static
       *
       * @param out - the receiving quaternion
       * @param a - quat to calculate conjugate of
       * @returns `out`
       */
    }, {
      key: "conjugate",
      value: function conjugate(out, a) {
        out[0] = -a[0];
        out[1] = -a[1];
        out[2] = -a[2];
        out[3] = a[3];
        return out;
      }
      /**
       * Creates a quaternion from the given 3x3 rotation matrix.
       *
       * NOTE: The resultant quaternion is not normalized, so you should be sure
       * to re-normalize the quaternion yourself where necessary.
       * @category Static
       *
       * @param out - the receiving quaternion
       * @param m - rotation matrix
       * @returns `out`
       */
    }, {
      key: "fromMat3",
      value: function fromMat3(out, m) {
        var fTrace = m[0] + m[4] + m[8];
        var fRoot;
        if (fTrace > 0) {
          fRoot = Math.sqrt(fTrace + 1);
          out[3] = 0.5 * fRoot;
          fRoot = 0.5 / fRoot;
          out[0] = (m[5] - m[7]) * fRoot;
          out[1] = (m[6] - m[2]) * fRoot;
          out[2] = (m[1] - m[3]) * fRoot;
        } else {
          var i = 0;
          if (m[4] > m[0]) {
            i = 1;
          }
          if (m[8] > m[i * 3 + i]) {
            i = 2;
          }
          var j = (i + 1) % 3;
          var k = (i + 2) % 3;
          fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1);
          out[i] = 0.5 * fRoot;
          fRoot = 0.5 / fRoot;
          out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
          out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
          out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
        }
        return out;
      }
      /**
       * Creates a quaternion from the given euler angle x, y, z.
       * @category Static
       *
       * @param out - the receiving quaternion
       * @param x - Angle to rotate around X axis in degrees.
       * @param y - Angle to rotate around Y axis in degrees.
       * @param z - Angle to rotate around Z axis in degrees.
       * @param {'xyz'|'xzy'|'yxz'|'yzx'|'zxy'|'zyx'} order - Intrinsic order for conversion, default is zyx.
       * @returns `out`
       */
    }, {
      key: "fromEuler",
      value: function fromEuler(out, x, y, z) {
        var order = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : __privateGet(_Quat, _DEFAULT_ANGLE_ORDER);
        var halfToRad = 0.5 * Math.PI / 180;
        x *= halfToRad;
        y *= halfToRad;
        z *= halfToRad;
        var sx = Math.sin(x);
        var cx = Math.cos(x);
        var sy = Math.sin(y);
        var cy = Math.cos(y);
        var sz = Math.sin(z);
        var cz = Math.cos(z);
        switch (order) {
          case "xyz":
            out[0] = sx * cy * cz + cx * sy * sz;
            out[1] = cx * sy * cz - sx * cy * sz;
            out[2] = cx * cy * sz + sx * sy * cz;
            out[3] = cx * cy * cz - sx * sy * sz;
            break;
          case "xzy":
            out[0] = sx * cy * cz - cx * sy * sz;
            out[1] = cx * sy * cz - sx * cy * sz;
            out[2] = cx * cy * sz + sx * sy * cz;
            out[3] = cx * cy * cz + sx * sy * sz;
            break;
          case "yxz":
            out[0] = sx * cy * cz + cx * sy * sz;
            out[1] = cx * sy * cz - sx * cy * sz;
            out[2] = cx * cy * sz - sx * sy * cz;
            out[3] = cx * cy * cz + sx * sy * sz;
            break;
          case "yzx":
            out[0] = sx * cy * cz + cx * sy * sz;
            out[1] = cx * sy * cz + sx * cy * sz;
            out[2] = cx * cy * sz - sx * sy * cz;
            out[3] = cx * cy * cz - sx * sy * sz;
            break;
          case "zxy":
            out[0] = sx * cy * cz - cx * sy * sz;
            out[1] = cx * sy * cz + sx * cy * sz;
            out[2] = cx * cy * sz + sx * sy * cz;
            out[3] = cx * cy * cz - sx * sy * sz;
            break;
          case "zyx":
            out[0] = sx * cy * cz - cx * sy * sz;
            out[1] = cx * sy * cz + sx * cy * sz;
            out[2] = cx * cy * sz - sx * sy * cz;
            out[3] = cx * cy * cz + sx * sy * sz;
            break;
          default:
            throw new Error("Unknown angle order ".concat(order));
        }
        return out;
      }
      /**
       * Returns a string representation of a quatenion
       * @category Static
       *
       * @param a - vector to represent as a string
       * @returns string representation of the vector
       */
    }, {
      key: "str",
      value: function str(a) {
        return "Quat(".concat(a.join(", "), ")");
      }
      /**
       * Creates a new quat initialized with values from an existing quaternion
       * @category Static
       *
       * @param a - quaternion to clone
       * @returns a new quaternion
       */
    }, {
      key: "clone",
      value: function clone(a) {
        return new _Quat(a);
      }
      /**
       * Creates a new quat initialized with the given values
       * @category Static
       *
       * @param x - X component
       * @param y - Y component
       * @param z - Z component
       * @param w - W component
       * @returns a new quaternion
       */
    }, {
      key: "fromValues",
      value: function fromValues(x, y, z, w) {
        return new _Quat(x, y, z, w);
      }
      /**
       * Copy the values from one quat to another
       * @category Static
       *
       * @param out - the receiving quaternion
       * @param a - the source quaternion
       * @returns `out`
       */
    }, {
      key: "copy",
      value: function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        return out;
      }
      /**
       * Set the components of a {@link Quat} to the given values
       * @category Static
       *
       * @param out - the receiving quaternion
       * @param x - X component
       * @param y - Y component
       * @param z - Z component
       * @param w - W component
       * @returns `out`
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "set",
      value: function set(out, x, y, z, w) {
        return out;
      }
      /**
       * Adds two {@link Quat}'s
       * @category Static
       *
       * @param out - the receiving quaternion
       * @param a - the first operand
       * @param b - the second operand
       * @returns `out`
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "add",
      value: function add(out, a, b) {
        return out;
      }
      /**
       * Alias for {@link Quat.multiply}
       * @category Static
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "mul",
      value: function mul(out, a, b) {
        return out;
      }
      /**
       * Scales a quat by a scalar number
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - the vector to scale
       * @param b - amount to scale the vector by
       * @returns `out`
       */
    }, {
      key: "scale",
      value: function scale(out, a, _scale4) {
        out[0] = a[0] * _scale4;
        out[1] = a[1] * _scale4;
        out[2] = a[2] * _scale4;
        out[3] = a[3] * _scale4;
        return out;
      }
      /**
       * Calculates the dot product of two quat's
       * @category Static
       *
       * @param a - the first operand
       * @param b - the second operand
       * @returns dot product of a and b
       */
    }, {
      key: "dot",
      value: function dot(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
      }
      /**
       * Performs a linear interpolation between two quat's
       * @category Static
       *
       * @param out - the receiving quaternion
       * @param a - the first operand
       * @param b - the second operand
       * @param t - interpolation amount, in the range [0-1], between the two inputs
       * @returns `out`
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "lerp",
      value: function lerp(out, a, b, t) {
        return out;
      }
      /**
       * Calculates the magnitude (length) of a {@link Quat}
       * @category Static
       *
       * @param a - quaternion to calculate length of
       * @returns length of `a`
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "magnitude",
      value: function magnitude(a) {
        return 0;
      }
      /**
       * Alias for {@link Quat.magnitude}
       * @category Static
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "mag",
      value: function mag(a) {
        return 0;
      }
      /**
       * Alias for {@link Quat.magnitude}
       * @category Static
       * @deprecated Use {@link Quat.magnitude} to avoid conflicts with builtin `length` methods/attribs
       */
      // Length conflicts with Function.length
    }, {
      key: "length",
      value: function length(a) {
        return 0;
      }
      // eslint-disable-line @typescript-eslint/no-unused-vars
      /**
       * Alias for {@link Quat.magnitude}
       * @category Static
       * @deprecated Use {@link Quat.mag}
       */
    }, {
      key: "len",
      value: function len(a) {
        return 0;
      }
      // eslint-disable-line @typescript-eslint/no-unused-vars
      /**
       * Calculates the squared length of a {@link Quat}
       * @category Static
       *
       * @param a - quaternion to calculate squared length of
       * @returns squared length of a
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "squaredLength",
      value: function squaredLength(a) {
        return 0;
      }
      /**
       * Alias for {@link Quat.squaredLength}
       * @category Static
       */
    }, {
      key: "sqrLen",
      value: function sqrLen(a) {
        return 0;
      }
      // eslint-disable-line @typescript-eslint/no-unused-vars
      /**
       * Normalize a {@link Quat}
       * @category Static
       *
       * @param out - the receiving quaternion
       * @param a - quaternion to normalize
       * @returns `out`
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "normalize",
      value: function normalize(out, a) {
        return out;
      }
      /**
       * Returns whether the quaternions have exactly the same elements in the same position (when compared with ===)
       * @category Static
       *
       * @param a - The first quaternion.
       * @param b - The second quaternion.
       * @returns True if the vectors are equal, false otherwise.
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "exactEquals",
      value: function exactEquals(a, b) {
        return false;
      }
      /**
       * Returns whether the quaternions have approximately the same elements in the same position.
       * @category Static
       *
       * @param a - The first vector.
       * @param b - The second vector.
       * @returns True if the vectors are equal, false otherwise.
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "equals",
      value: function equals(a, b) {
        return false;
      }
      /**
       * Sets a quaternion to represent the shortest rotation from one
       * vector to another.
       *
       * Both vectors are assumed to be unit length.
       * @category Static
       *
       * @param out - the receiving quaternion.
       * @param a - the initial vector
       * @param b - the destination vector
       * @returns `out`
       */
    }, {
      key: "rotationTo",
      value: function rotationTo(out, a, b) {
        var dot = Vec3.dot(a, b);
        if (dot < -0.999999) {
          Vec3.cross(__privateGet(_Quat, _TMP_VEC32), __privateGet(_Quat, _X_UNIT_VEC3), a);
          if (Vec3.mag(__privateGet(_Quat, _TMP_VEC32)) < 1e-6) {
            Vec3.cross(__privateGet(_Quat, _TMP_VEC32), __privateGet(_Quat, _Y_UNIT_VEC3), a);
          }
          Vec3.normalize(__privateGet(_Quat, _TMP_VEC32), __privateGet(_Quat, _TMP_VEC32));
          _Quat.setAxisAngle(out, __privateGet(_Quat, _TMP_VEC32), Math.PI);
          return out;
        } else if (dot > 0.999999) {
          out[0] = 0;
          out[1] = 0;
          out[2] = 0;
          out[3] = 1;
          return out;
        } else {
          Vec3.cross(__privateGet(_Quat, _TMP_VEC32), a, b);
          out[0] = __privateGet(_Quat, _TMP_VEC32)[0];
          out[1] = __privateGet(_Quat, _TMP_VEC32)[1];
          out[2] = __privateGet(_Quat, _TMP_VEC32)[2];
          out[3] = 1 + dot;
          return _Quat.normalize(out, out);
        }
      }
      /**
       * Performs a spherical linear interpolation with two control points
       * @category Static
       *
       * @param out - the receiving quaternion
       * @param a - the first operand
       * @param b - the second operand
       * @param c - the third operand
       * @param d - the fourth operand
       * @param t - interpolation amount, in the range [0-1], between the two inputs
       * @returns `out`
       */
    }, {
      key: "sqlerp",
      value: function sqlerp(out, a, b, c, d, t) {
        _Quat.slerp(__privateGet(_Quat, _TMP_QUAT1), a, d, t);
        _Quat.slerp(__privateGet(_Quat, _TMP_QUAT2), b, c, t);
        _Quat.slerp(out, __privateGet(_Quat, _TMP_QUAT1), __privateGet(_Quat, _TMP_QUAT2), 2 * t * (1 - t));
        return out;
      }
      /**
       * Sets the specified quaternion with values corresponding to the given
       * axes. Each axis is a vec3 and is expected to be unit length and
       * perpendicular to all other specified axes.
       * @category Static
       *
       * @param out - The receiving quaternion
       * @param view - the vector representing the viewing direction
       * @param right - the vector representing the local `right` direction
       * @param up - the vector representing the local `up` direction
       * @returns `out`
       */
    }, {
      key: "setAxes",
      value: function setAxes(out, view, right, up) {
        __privateGet(_Quat, _TMP_MAT3)[0] = right[0];
        __privateGet(_Quat, _TMP_MAT3)[3] = right[1];
        __privateGet(_Quat, _TMP_MAT3)[6] = right[2];
        __privateGet(_Quat, _TMP_MAT3)[1] = up[0];
        __privateGet(_Quat, _TMP_MAT3)[4] = up[1];
        __privateGet(_Quat, _TMP_MAT3)[7] = up[2];
        __privateGet(_Quat, _TMP_MAT3)[2] = -view[0];
        __privateGet(_Quat, _TMP_MAT3)[5] = -view[1];
        __privateGet(_Quat, _TMP_MAT3)[8] = -view[2];
        return _Quat.normalize(out, _Quat.fromMat3(out, __privateGet(_Quat, _TMP_MAT3)));
      }
    }]);
  }( /*#__PURE__*/_wrapNativeSuper(Float32Array));
  _DEFAULT_ANGLE_ORDER = new WeakMap();
  _TMP_QUAT1 = new WeakMap();
  _TMP_QUAT2 = new WeakMap();
  _TMP_MAT3 = new WeakMap();
  _TMP_VEC32 = new WeakMap();
  _X_UNIT_VEC3 = new WeakMap();
  _Y_UNIT_VEC3 = new WeakMap();
  __privateAdd(_Quat, _DEFAULT_ANGLE_ORDER, "zyx");
  // Temporary variables to prevent repeated allocations in the algorithms within Quat.
  // These are declared as TypedArrays to aid in tree-shaking.
  __privateAdd(_Quat, _TMP_QUAT1, new Float32Array(4));
  __privateAdd(_Quat, _TMP_QUAT2, new Float32Array(4));
  __privateAdd(_Quat, _TMP_MAT3, new Float32Array(9));
  __privateAdd(_Quat, _TMP_VEC32, new Float32Array(3));
  __privateAdd(_Quat, _X_UNIT_VEC3, new Float32Array([1, 0, 0]));
  __privateAdd(_Quat, _Y_UNIT_VEC3, new Float32Array([0, 1, 0]));
  var Quat = _Quat;
  Quat.set = Vec4.set;
  Quat.add = Vec4.add;
  Quat.lerp = Vec4.lerp;
  Quat.normalize = Vec4.normalize;
  Quat.squaredLength = Vec4.squaredLength;
  Quat.sqrLen = Vec4.squaredLength;
  Quat.exactEquals = Vec4.exactEquals;
  Quat.equals = Vec4.equals;
  Quat.magnitude = Vec4.magnitude;
  Quat.prototype.mul = Quat.prototype.multiply;
  Quat.mul = Quat.multiply;
  Quat.mag = Quat.magnitude;
  Quat.length = Quat.magnitude;
  Quat.len = Quat.magnitude;

  // src/_lib/f32/Quat2.ts
  var _TMP_QUAT, _TMP_VEC33;
  var _Quat2 = /*#__PURE__*/function (_Float32Array8) {
    /**
     * Create a {@link Quat2}.
     *
     * @category Constructor
     */
    function _Quat2() {
      var _this8;
      _classCallCheck(this, _Quat2);
      for (var _len12 = arguments.length, values = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
        values[_key12] = arguments[_key12];
      }
      switch (values.length) {
        case 8:
          _this8 = _callSuper(this, _Quat2, [values]);
          break;
        case 2:
          _this8 = _callSuper(this, _Quat2, [values[0], values[1], 8]);
          break;
        case 1:
          {
            var v = values[0];
            if (typeof v === "number") {
              _this8 = _callSuper(this, _Quat2, [[v, v, v, v, v, v, v, v]]);
            } else {
              _this8 = _callSuper(this, _Quat2, [v, 0, 8]);
            }
            break;
          }
        default:
          _this8 = _callSuper(this, _Quat2, [8]);
          _this8[3] = 1;
          break;
      }
      return _assertThisInitialized(_this8);
    }
    // ============
    // Accessors
    // ============
    /**
     * A string representation of `this`
     * Equivalent to `Quat2.str(this);`
     *
     * @category Accessors
     */
    _inherits(_Quat2, _Float32Array8);
    return _createClass(_Quat2, [{
      key: "str",
      get: function get() {
        return _Quat2.str(this);
      }
      // ===================
      // Instances methods
      // ===================
      /**
       * Copy the values from another {@link Quat2} into `this`.
       * @category Methods
       *
       * @param a the source dual quaternion
       * @returns `this`
       */
    }, {
      key: "copy",
      value: function copy(a) {
        _get(_getPrototypeOf(_Quat2.prototype), "set", this).call(this, a);
        return this;
      }
      // ===================
      // Static accessors
      // ===================
      /**
       * @category Static
       *
       * @returns The number of bytes in a {@link Quat2}.
       */
    }], [{
      key: "BYTE_LENGTH",
      get: function get() {
        return 8 * Float32Array.BYTES_PER_ELEMENT;
      }
      // ===================
      // Static methods
      // ===================
      /**
       * Creates a new identity {@link Quat2}
       * @category Static
       *
       * @returns a new dual quaternion [real -> rotation, dual -> translation]
       */
    }, {
      key: "create",
      value: function create() {
        return new _Quat2();
      }
      /**
       * Creates a {@link Quat2} quat initialized with values from an existing quaternion
       * @category Static
       *
       * @param a - dual quaternion to clone
       * @returns a new dual quaternion
       */
    }, {
      key: "clone",
      value: function clone(a) {
        return new _Quat2(a);
      }
      /**
       * Creates a new {@link Quat2}  initialized with the given values
       * @category Static
       *
       * @param x1 - 1st X component
       * @param y1 - 1st Y component
       * @param z1 - 1st Z component
       * @param w1 - 1st W component
       * @param x2 - 2nd X component
       * @param y2 - 2nd Y component
       * @param z2 - 2nd Z component
       * @param w2 - 2nd W component
       * @returns a new dual quaternion
       */
    }, {
      key: "fromValues",
      value: function fromValues(x1, y1, z1, w1, x2, y2, z2, w2) {
        return new _Quat2(x1, y1, z1, w1, x2, y2, z2, w2);
      }
      /**
       * Creates a new {@link Quat2} from the given values (quat and translation)
       * @category Static
       *
       * @param x1 - X component (rotation)
       * @param y1 - Y component (rotation)
       * @param z1 - Z component (rotation)
       * @param w1 - W component (rotation)
       * @param x2 - X component (translation)
       * @param y2 - Y component (translation)
       * @param z2 - Z component (translation)
       * @returns a new dual quaternion
       */
    }, {
      key: "fromRotationTranslationValues",
      value: function fromRotationTranslationValues(x1, y1, z1, w1, x2, y2, z2) {
        var ax = x2 * 0.5;
        var ay = y2 * 0.5;
        var az = z2 * 0.5;
        return new _Quat2(x1, y1, z1, w1, ax * w1 + ay * z1 - az * y1, ay * w1 + az * x1 - ax * z1, az * w1 + ax * y1 - ay * x1, -ax * x1 - ay * y1 - az * z1);
      }
      /**
       * Sets a {@link Quat2} from a quaternion and a translation
       * @category Static
       *
       * @param out - dual quaternion receiving operation result
       * @param q - a normalized quaternion
       * @param t - translation vector
       * @returns `out`
       */
    }, {
      key: "fromRotationTranslation",
      value: function fromRotationTranslation(out, q, t) {
        var ax = t[0] * 0.5;
        var ay = t[1] * 0.5;
        var az = t[2] * 0.5;
        var bx = q[0];
        var by = q[1];
        var bz = q[2];
        var bw = q[3];
        out[0] = bx;
        out[1] = by;
        out[2] = bz;
        out[3] = bw;
        out[4] = ax * bw + ay * bz - az * by;
        out[5] = ay * bw + az * bx - ax * bz;
        out[6] = az * bw + ax * by - ay * bx;
        out[7] = -ax * bx - ay * by - az * bz;
        return out;
      }
      /**
       * Sets a {@link Quat2} from a translation
       * @category Static
       *
       * @param out - dual quaternion receiving operation result
       * @param t - translation vector
       * @returns `out`
       */
    }, {
      key: "fromTranslation",
      value: function fromTranslation(out, t) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
        out[3] = 1;
        out[4] = t[0] * 0.5;
        out[5] = t[1] * 0.5;
        out[6] = t[2] * 0.5;
        out[7] = 0;
        return out;
      }
      /**
       * Sets a {@link Quat2} from a quaternion
       * @category Static
       *
       * @param out - dual quaternion receiving operation result
       * @param q - a normalized quaternion
       * @returns `out`
       */
    }, {
      key: "fromRotation",
      value: function fromRotation(out, q) {
        out[0] = q[0];
        out[1] = q[1];
        out[2] = q[2];
        out[3] = q[3];
        out[4] = 0;
        out[5] = 0;
        out[6] = 0;
        out[7] = 0;
        return out;
      }
      /**
       * Sets a {@link Quat2} from a quaternion
       * @category Static
       *
       * @param out - dual quaternion receiving operation result
       * @param a - the matrix
       * @returns `out`
       */
    }, {
      key: "fromMat4",
      value: function fromMat4(out, a) {
        Mat4.getRotation(__privateGet(_Quat2, _TMP_QUAT), a);
        Mat4.getTranslation(__privateGet(_Quat2, _TMP_VEC33), a);
        return _Quat2.fromRotationTranslation(out, __privateGet(_Quat2, _TMP_QUAT), __privateGet(_Quat2, _TMP_VEC33));
      }
      /**
       * Copy the values from one {@link Quat2} to another
       * @category Static
       *
       * @param out - the receiving dual quaternion
       * @param a - the source dual quaternion
       * @returns `out`
       */
    }, {
      key: "copy",
      value: function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        return out;
      }
      /**
       * Set a {@link Quat2} to the identity dual quaternion
       * @category Static
       *
       * @param out - the receiving dual quaternion
       * @returns `out`
       */
    }, {
      key: "identity",
      value: function identity(out) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
        out[3] = 1;
        out[4] = 0;
        out[5] = 0;
        out[6] = 0;
        out[7] = 0;
        return out;
      }
      /**
       * Set the components of a {@link Quat2} to the given values
       * @category Static
       *
       * @param out - the receiving vector
       * @param x1 - 1st X component
       * @param y1 - 1st Y component
       * @param z1 - 1st Z component
       * @param w1 - 1st W component
       * @param x2 - 2nd X component
       * @param y2 - 2nd Y component
       * @param z2 - 2nd Z component
       * @param w2 - 2nd W component
       * @returns `out`
       */
    }, {
      key: "set",
      value: function set(out, x1, y1, z1, w1, x2, y2, z2, w2) {
        out[0] = x1;
        out[1] = y1;
        out[2] = z1;
        out[3] = w1;
        out[4] = x2;
        out[5] = y2;
        out[6] = z2;
        out[7] = w2;
        return out;
      }
      /**
       * Gets the real part of a dual quat
       * @category Static
       *
       * @param out - real part
       * @param a - Dual Quaternion
       * @return `out`
       */
    }, {
      key: "getReal",
      value: function getReal(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        return out;
      }
      /**
       * Gets the dual part of a dual quat
       * @category Static
       *
       * @param out - dual part
       * @param a - Dual Quaternion
       * @return `out`
       */
    }, {
      key: "getDual",
      value: function getDual(out, a) {
        out[0] = a[4];
        out[1] = a[5];
        out[2] = a[6];
        out[3] = a[7];
        return out;
      }
      /**
       * Set the real component of a {@link Quat2} to the given quaternion
       * @category Static
       *
       * @param out - the receiving dual quaternion
       * @param a - a quaternion representing the real part
       * @return `out`
       */
    }, {
      key: "setReal",
      value: function setReal(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        return out;
      }
      /**
       * Set the dual component of a {@link Quat2} to the given quaternion
       * @category Static
       *
       * @param out - the receiving dual quaternion
       * @param a - a quaternion representing the dual part
       * @return `out`
       */
    }, {
      key: "setDual",
      value: function setDual(out, a) {
        out[4] = a[0];
        out[5] = a[1];
        out[6] = a[2];
        out[7] = a[3];
        return out;
      }
      /**
       * Gets the translation of a normalized {@link Quat2}
       * @category Static
       *
       * @param out - the receiving translation vector
       * @param a - Dual Quaternion to be decomposed
       * @return `out`
       */
    }, {
      key: "getTranslation",
      value: function getTranslation(out, a) {
        var ax = a[4];
        var ay = a[5];
        var az = a[6];
        var aw = a[7];
        var bx = -a[0];
        var by = -a[1];
        var bz = -a[2];
        var bw = a[3];
        out[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
        out[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
        out[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
        return out;
      }
      /**
       * Translates a {@link Quat2} by the given vector
       * @category Static
       *
       * @param out - the receiving dual quaternion
       * @param a - the dual quaternion to translate
       * @param v - vector to translate by
       * @returns `out`
       */
    }, {
      key: "translate",
      value: function translate(out, a, v) {
        var ax1 = a[0];
        var ay1 = a[1];
        var az1 = a[2];
        var aw1 = a[3];
        var bx1 = v[0] * 0.5;
        var by1 = v[1] * 0.5;
        var bz1 = v[2] * 0.5;
        var ax2 = a[4];
        var ay2 = a[5];
        var az2 = a[6];
        var aw2 = a[7];
        out[0] = ax1;
        out[1] = ay1;
        out[2] = az1;
        out[3] = aw1;
        out[4] = aw1 * bx1 + ay1 * bz1 - az1 * by1 + ax2;
        out[5] = aw1 * by1 + az1 * bx1 - ax1 * bz1 + ay2;
        out[6] = aw1 * bz1 + ax1 * by1 - ay1 * bx1 + az2;
        out[7] = -ax1 * bx1 - ay1 * by1 - az1 * bz1 + aw2;
        return out;
      }
      /**
       * Rotates a {@link Quat2} around the X axis
       * @category Static
       *
       * @param out - the receiving dual quaternion
       * @param a - the dual quaternion to rotate
       * @param rad - angle (in radians) to rotate
       * @returns `out`
       */
    }, {
      key: "rotateX",
      value: function rotateX(out, a, rad) {
        var bx = -a[0];
        var by = -a[1];
        var bz = -a[2];
        var bw = a[3];
        var ax = a[4];
        var ay = a[5];
        var az = a[6];
        var aw = a[7];
        var ax1 = ax * bw + aw * bx + ay * bz - az * by;
        var ay1 = ay * bw + aw * by + az * bx - ax * bz;
        var az1 = az * bw + aw * bz + ax * by - ay * bx;
        var aw1 = aw * bw - ax * bx - ay * by - az * bz;
        Quat.rotateX(out, a, rad);
        bx = out[0];
        by = out[1];
        bz = out[2];
        bw = out[3];
        out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
        out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
        out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
        out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
        return out;
      }
      /**
       * Rotates a {@link Quat2} around the Y axis
       * @category Static
       *
       * @param out - the receiving dual quaternion
       * @param a - the dual quaternion to rotate
       * @param rad - angle (in radians) to rotate
       * @returns `out`
       */
    }, {
      key: "rotateY",
      value: function rotateY(out, a, rad) {
        var bx = -a[0];
        var by = -a[1];
        var bz = -a[2];
        var bw = a[3];
        var ax = a[4];
        var ay = a[5];
        var az = a[6];
        var aw = a[7];
        var ax1 = ax * bw + aw * bx + ay * bz - az * by;
        var ay1 = ay * bw + aw * by + az * bx - ax * bz;
        var az1 = az * bw + aw * bz + ax * by - ay * bx;
        var aw1 = aw * bw - ax * bx - ay * by - az * bz;
        Quat.rotateY(out, a, rad);
        bx = out[0];
        by = out[1];
        bz = out[2];
        bw = out[3];
        out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
        out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
        out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
        out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
        return out;
      }
      /**
       * Rotates a {@link Quat2} around the Z axis
       * @category Static
       *
       * @param out - the receiving dual quaternion
       * @param a - the dual quaternion to rotate
       * @param rad - angle (in radians) to rotate
       * @returns `out`
       */
    }, {
      key: "rotateZ",
      value: function rotateZ(out, a, rad) {
        var bx = -a[0];
        var by = -a[1];
        var bz = -a[2];
        var bw = a[3];
        var ax = a[4];
        var ay = a[5];
        var az = a[6];
        var aw = a[7];
        var ax1 = ax * bw + aw * bx + ay * bz - az * by;
        var ay1 = ay * bw + aw * by + az * bx - ax * bz;
        var az1 = az * bw + aw * bz + ax * by - ay * bx;
        var aw1 = aw * bw - ax * bx - ay * by - az * bz;
        Quat.rotateZ(out, a, rad);
        bx = out[0];
        by = out[1];
        bz = out[2];
        bw = out[3];
        out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
        out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
        out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
        out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
        return out;
      }
      /**
       * Rotates a {@link Quat2} by a given quaternion (a * q)
       * @category Static
       *
       * @param out - the receiving dual quaternion
       * @param a - the dual quaternion to rotate
       * @param q - quaternion to rotate by
       * @returns `out`
       */
    }, {
      key: "rotateByQuatAppend",
      value: function rotateByQuatAppend(out, a, q) {
        var qx = q[0];
        var qy = q[1];
        var qz = q[2];
        var qw = q[3];
        var ax = a[0];
        var ay = a[1];
        var az = a[2];
        var aw = a[3];
        out[0] = ax * qw + aw * qx + ay * qz - az * qy;
        out[1] = ay * qw + aw * qy + az * qx - ax * qz;
        out[2] = az * qw + aw * qz + ax * qy - ay * qx;
        out[3] = aw * qw - ax * qx - ay * qy - az * qz;
        ax = a[4];
        ay = a[5];
        az = a[6];
        aw = a[7];
        out[4] = ax * qw + aw * qx + ay * qz - az * qy;
        out[5] = ay * qw + aw * qy + az * qx - ax * qz;
        out[6] = az * qw + aw * qz + ax * qy - ay * qx;
        out[7] = aw * qw - ax * qx - ay * qy - az * qz;
        return out;
      }
      /**
       * Rotates a {@link Quat2} by a given quaternion (q * a)
       * @category Static
       *
       * @param out - the receiving dual quaternion
       * @param q - quaternion to rotate by
       * @param a - the dual quaternion to rotate
       * @returns `out`
       */
    }, {
      key: "rotateByQuatPrepend",
      value: function rotateByQuatPrepend(out, q, a) {
        var qx = q[0];
        var qy = q[1];
        var qz = q[2];
        var qw = q[3];
        var bx = a[0];
        var by = a[1];
        var bz = a[2];
        var bw = a[3];
        out[0] = qx * bw + qw * bx + qy * bz - qz * by;
        out[1] = qy * bw + qw * by + qz * bx - qx * bz;
        out[2] = qz * bw + qw * bz + qx * by - qy * bx;
        out[3] = qw * bw - qx * bx - qy * by - qz * bz;
        bx = a[4];
        by = a[5];
        bz = a[6];
        bw = a[7];
        out[4] = qx * bw + qw * bx + qy * bz - qz * by;
        out[5] = qy * bw + qw * by + qz * bx - qx * bz;
        out[6] = qz * bw + qw * bz + qx * by - qy * bx;
        out[7] = qw * bw - qx * bx - qy * by - qz * bz;
        return out;
      }
      /**
       * Rotates a {@link Quat2} around a given axis. Does the normalization automatically
       * @category Static
       *
       * @param out - the receiving dual quaternion
       * @param a - the dual quaternion to rotate
       * @param axis - the axis to rotate around
       * @param rad - how far the rotation should be
       * @returns `out`
       */
    }, {
      key: "rotateAroundAxis",
      value: function rotateAroundAxis(out, a, axis, rad) {
        if (Math.abs(rad) < GLM_EPSILON) {
          return _Quat2.copy(out, a);
        }
        var axisLength = Math.sqrt(axis[0] * axis[0] + axis[1] * axis[1] + axis[2] * axis[2]);
        rad *= 0.5;
        var s = Math.sin(rad);
        var bx = s * axis[0] / axisLength;
        var by = s * axis[1] / axisLength;
        var bz = s * axis[2] / axisLength;
        var bw = Math.cos(rad);
        var ax1 = a[0];
        var ay1 = a[1];
        var az1 = a[2];
        var aw1 = a[3];
        out[0] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
        out[1] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
        out[2] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
        out[3] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
        var ax = a[4];
        var ay = a[5];
        var az = a[6];
        var aw = a[7];
        out[4] = ax * bw + aw * bx + ay * bz - az * by;
        out[5] = ay * bw + aw * by + az * bx - ax * bz;
        out[6] = az * bw + aw * bz + ax * by - ay * bx;
        out[7] = aw * bw - ax * bx - ay * by - az * bz;
        return out;
      }
      /**
       * Adds two {@link Quat2}s
       * @category Static
       *
       * @param out - the receiving dual quaternion
       * @param a - the first operand
       * @param b - the second operand
       * @returns `out`
       */
    }, {
      key: "add",
      value: function add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        out[3] = a[3] + b[3];
        out[4] = a[4] + b[4];
        out[5] = a[5] + b[5];
        out[6] = a[6] + b[6];
        out[7] = a[7] + b[7];
        return out;
      }
      /**
       * Multiplies two {@link Quat2}s
       * @category Static
       *
       * @param out - the receiving dual quaternion
       * @param a - the first operand
       * @param b - the second operand
       * @returns {quat2} out
       */
    }, {
      key: "multiply",
      value: function multiply(out, a, b) {
        var ax0 = a[0];
        var ay0 = a[1];
        var az0 = a[2];
        var aw0 = a[3];
        var bx1 = b[4];
        var by1 = b[5];
        var bz1 = b[6];
        var bw1 = b[7];
        var ax1 = a[4];
        var ay1 = a[5];
        var az1 = a[6];
        var aw1 = a[7];
        var bx0 = b[0];
        var by0 = b[1];
        var bz0 = b[2];
        var bw0 = b[3];
        out[0] = ax0 * bw0 + aw0 * bx0 + ay0 * bz0 - az0 * by0;
        out[1] = ay0 * bw0 + aw0 * by0 + az0 * bx0 - ax0 * bz0;
        out[2] = az0 * bw0 + aw0 * bz0 + ax0 * by0 - ay0 * bx0;
        out[3] = aw0 * bw0 - ax0 * bx0 - ay0 * by0 - az0 * bz0;
        out[4] = ax0 * bw1 + aw0 * bx1 + ay0 * bz1 - az0 * by1 + ax1 * bw0 + aw1 * bx0 + ay1 * bz0 - az1 * by0;
        out[5] = ay0 * bw1 + aw0 * by1 + az0 * bx1 - ax0 * bz1 + ay1 * bw0 + aw1 * by0 + az1 * bx0 - ax1 * bz0;
        out[6] = az0 * bw1 + aw0 * bz1 + ax0 * by1 - ay0 * bx1 + az1 * bw0 + aw1 * bz0 + ax1 * by0 - ay1 * bx0;
        out[7] = aw0 * bw1 - ax0 * bx1 - ay0 * by1 - az0 * bz1 + aw1 * bw0 - ax1 * bx0 - ay1 * by0 - az1 * bz0;
        return out;
      }
      /**
       * Alias for {@link Quat2.multiply}
       * @category Static
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "mul",
      value: function mul(out, a, b) {
        return out;
      }
      /**
       * Scales a {@link Quat2} by a scalar value
       * @category Static
       *
       * @param out - the receiving dual quaterion
       * @param a - the dual quaternion to scale
       * @param b - scalar value to scale the dual quaterion by
       * @returns `out`
       */
    }, {
      key: "scale",
      value: function scale(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        out[3] = a[3] * b;
        out[4] = a[4] * b;
        out[5] = a[5] * b;
        out[6] = a[6] * b;
        out[7] = a[7] * b;
        return out;
      }
      /**
       * Calculates the dot product of two {@link Quat2}s (The dot product of the real parts)
       * @category Static
       *
       * @param a - the first operand
       * @param b - the second operand
       * @returns dot product of a and b
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "dot",
      value: function dot(a, b) {
        return 0;
      }
      /**
       * Performs a linear interpolation between two {@link Quat2}s
       * NOTE: The resulting dual quaternions won't always be normalized (The error is most noticeable when `t = 0.5`)
       * @category Static
       *
       * @param out - the receiving dual quat
       * @param a - the first operand
       * @param b - the second operand
       * @param t - interpolation amount, in the range [0-1], between the two inputs
       * @returns `out`
       */
    }, {
      key: "lerp",
      value: function lerp(out, a, b, t) {
        var mt = 1 - t;
        if (_Quat2.dot(a, b) < 0) {
          t = -t;
        }
        out[0] = a[0] * mt + b[0] * t;
        out[1] = a[1] * mt + b[1] * t;
        out[2] = a[2] * mt + b[2] * t;
        out[3] = a[3] * mt + b[3] * t;
        out[4] = a[4] * mt + b[4] * t;
        out[5] = a[5] * mt + b[5] * t;
        out[6] = a[6] * mt + b[6] * t;
        out[7] = a[7] * mt + b[7] * t;
        return out;
      }
      /**
       * Calculates the inverse of a {@link Quat2}. If they are normalized, conjugate is cheaper
       * @category Static
       *
       * @param out - the receiving dual quaternion
       * @param a - dual quat to calculate inverse of
       * @returns `out`
       */
    }, {
      key: "invert",
      value: function invert(out, a) {
        var sqlen = _Quat2.squaredLength(a);
        out[0] = -a[0] / sqlen;
        out[1] = -a[1] / sqlen;
        out[2] = -a[2] / sqlen;
        out[3] = a[3] / sqlen;
        out[4] = -a[4] / sqlen;
        out[5] = -a[5] / sqlen;
        out[6] = -a[6] / sqlen;
        out[7] = a[7] / sqlen;
        return out;
      }
      /**
       * Calculates the conjugate of a {@link Quat2}. If the dual quaternion is normalized, this function is faster than
       * {@link Quat2.invert} and produces the same result.
       * @category Static
       *
       * @param out - the receiving dual quaternion
       * @param a - dual quaternion to calculate conjugate of
       * @returns `out`
       */
    }, {
      key: "conjugate",
      value: function conjugate(out, a) {
        out[0] = -a[0];
        out[1] = -a[1];
        out[2] = -a[2];
        out[3] = a[3];
        out[4] = -a[4];
        out[5] = -a[5];
        out[6] = -a[6];
        out[7] = a[7];
        return out;
      }
      /**
       * Calculates the magnitude (length) of a {@link Quat2}
       * @category Static
       *
       * @param a - dual quaternion to calculate length of
       * @returns length of `a`
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "magnitude",
      value: function magnitude(a) {
        return 0;
      }
      /**
       * Alias for {@link Quat2.magnitude}
       * @category Static
       */
    }, {
      key: "mag",
      value: function mag(a) {
        return 0;
      }
      // eslint-disable-line @typescript-eslint/no-unused-vars
      /**
       * Alias for {@link Quat2.magnitude}
       * @category Static
       * @deprecated Use {@link Quat2.magnitude} to avoid conflicts with builtin `length` methods/attribs
       */
      // Length conflicts with Function.length
    }, {
      key: "length",
      value: function length(a) {
        return 0;
      }
      // eslint-disable-line @typescript-eslint/no-unused-vars
      /**
       * Alias for {@link Quat2.magnitude}
       * @category Static
       * @deprecated Use {@link Quat2.mag}
       */
    }, {
      key: "len",
      value: function len(a) {
        return 0;
      }
      // eslint-disable-line @typescript-eslint/no-unused-vars
      /**
       * Calculates the squared length of a {@link Quat2}
       * @category Static
       *
       * @param a - dual quaternion to calculate squared length of
       * @returns squared length of a
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "squaredLength",
      value: function squaredLength(a) {
        return 0;
      }
      /**
       * Alias for {@link Quat2.squaredLength}
       * @category Static
       */
    }, {
      key: "sqrLen",
      value: function sqrLen(a) {
        return 0;
      }
      // eslint-disable-line @typescript-eslint/no-unused-vars
      /**
       * Normalize a {@link Quat2}
       * @category Static
       *
       * @param out - the receiving dual quaternion
       * @param a - dual quaternion to normalize
       * @returns `out`
       */
    }, {
      key: "normalize",
      value: function normalize(out, a) {
        var magnitude = _Quat2.squaredLength(a);
        if (magnitude > 0) {
          magnitude = Math.sqrt(magnitude);
          var a0 = a[0] / magnitude;
          var a1 = a[1] / magnitude;
          var a2 = a[2] / magnitude;
          var a3 = a[3] / magnitude;
          var b0 = a[4];
          var b1 = a[5];
          var b2 = a[6];
          var b3 = a[7];
          var a_dot_b = a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3;
          out[0] = a0;
          out[1] = a1;
          out[2] = a2;
          out[3] = a3;
          out[4] = (b0 - a0 * a_dot_b) / magnitude;
          out[5] = (b1 - a1 * a_dot_b) / magnitude;
          out[6] = (b2 - a2 * a_dot_b) / magnitude;
          out[7] = (b3 - a3 * a_dot_b) / magnitude;
        }
        return out;
      }
      /**
       * Returns a string representation of a {@link Quat2}
       * @category Static
       *
       * @param a - dual quaternion to represent as a string
       * @returns string representation of the vector
       */
    }, {
      key: "str",
      value: function str(a) {
        return "Quat2(".concat(a.join(", "), ")");
      }
      /**
       * Returns whether the {@link Quat2}s have exactly the same elements in the same position (when compared with ===)
       * @category Static
       *
       * @param a - The first dual quaternion.
       * @param b - The second dual quaternion.
       * @returns True if the dual quaternions are equal, false otherwise.
       */
    }, {
      key: "exactEquals",
      value: function exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7];
      }
      /**
       * Returns whether the {@link Quat2}s have approximately the same elements in the same position.
       * @category Static
       *
       * @param a - The first dual quaternion.
       * @param b - The second dual quaternion.
       * @returns True if the dual quaternions are equal, false otherwise.
       */
    }, {
      key: "equals",
      value: function equals(a, b) {
        var a0 = a[0];
        var a1 = a[1];
        var a2 = a[2];
        var a3 = a[3];
        var a4 = a[4];
        var a5 = a[5];
        var a6 = a[6];
        var a7 = a[7];
        var b0 = b[0];
        var b1 = b[1];
        var b2 = b[2];
        var b3 = b[3];
        var b4 = b[4];
        var b5 = b[5];
        var b6 = b[6];
        var b7 = b[7];
        return Math.abs(a0 - b0) <= GLM_EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= GLM_EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= GLM_EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= GLM_EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= GLM_EPSILON * Math.max(1, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= GLM_EPSILON * Math.max(1, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= GLM_EPSILON * Math.max(1, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= GLM_EPSILON * Math.max(1, Math.abs(a7), Math.abs(b7));
      }
    }]);
  }( /*#__PURE__*/_wrapNativeSuper(Float32Array));
  _TMP_QUAT = new WeakMap();
  _TMP_VEC33 = new WeakMap();
  // Temporary variables to prevent repeated allocations in the algorithms within Quat2.
  // These are declared as TypedArrays to aid in tree-shaking.
  __privateAdd(_Quat2, _TMP_QUAT, new Float32Array(4));
  __privateAdd(_Quat2, _TMP_VEC33, new Float32Array(3));
  var Quat2 = _Quat2;
  Quat2.dot = Quat.dot;
  Quat2.squaredLength = Quat.squaredLength;
  Quat2.sqrLen = Quat.squaredLength;
  Quat2.mag = Quat.magnitude;
  Quat2.length = Quat.magnitude;
  Quat2.len = Quat.magnitude;
  Quat2.mul = Quat2.multiply;

  // src/_lib/f32/Vec2.ts
  var Vec2 = /*#__PURE__*/function (_Float32Array9) {
    /**
     * Create a {@link Vec2}.
     *
     * @category Constructor
     */
    function _Vec2() {
      var _this9;
      _classCallCheck(this, _Vec2);
      switch (arguments.length) {
        case 2:
          {
            var v = arguments.length <= 0 ? undefined : arguments[0];
            if (typeof v === "number") {
              _this9 = _callSuper(this, _Vec2, [[v, arguments.length <= 1 ? undefined : arguments[1]]]);
            } else {
              _this9 = _callSuper(this, _Vec2, [v, arguments.length <= 1 ? undefined : arguments[1], 2]);
            }
            break;
          }
        case 1:
          {
            var _v = arguments.length <= 0 ? undefined : arguments[0];
            if (typeof _v === "number") {
              _this9 = _callSuper(this, _Vec2, [[_v, _v]]);
            } else {
              _this9 = _callSuper(this, _Vec2, [_v, 0, 2]);
            }
            break;
          }
        default:
          _this9 = _callSuper(this, _Vec2, [2]);
          break;
      }
      return _assertThisInitialized(_this9);
    }
    // ============
    // Accessors
    // ============
    // Getters and setters to make component access read better.
    // These are likely to be a little bit slower than direct array access.
    /**
     * The x component of the vector. Equivalent to `this[0];`
     * @category Vector Components
     */
    _inherits(_Vec2, _Float32Array9);
    return _createClass(_Vec2, [{
      key: "x",
      get: function get() {
        return this[0];
      },
      set: function set(value) {
        this[0] = value;
      }
      /**
       * The y component of the vector. Equivalent to `this[1];`
       * @category Vector Components
       */
    }, {
      key: "y",
      get: function get() {
        return this[1];
      },
      set: function set(value) {
        this[1] = value;
      }
      // Alternate set of getters and setters in case this is being used to define
      // a color.
      /**
       * The r component of the vector. Equivalent to `this[0];`
       * @category Color Components
       */
    }, {
      key: "r",
      get: function get() {
        return this[0];
      },
      set: function set(value) {
        this[0] = value;
      }
      /**
       * The g component of the vector. Equivalent to `this[1];`
       * @category Color Components
       */
    }, {
      key: "g",
      get: function get() {
        return this[1];
      },
      set: function set(value) {
        this[1] = value;
      }
      /**
       * The magnitude (length) of this.
       * Equivalent to `Vec2.magnitude(this);`
       *
       * Magnitude is used because the `length` attribute is already defined by
       * TypedArrays to mean the number of elements in the array.
       *
       * @category Accessors
       */
    }, {
      key: "magnitude",
      get: function get() {
        return Math.hypot(this[0], this[1]);
      }
      /**
       * Alias for {@link Vec2.magnitude}
       *
       * @category Accessors
       */
    }, {
      key: "mag",
      get: function get() {
        return this.magnitude;
      }
      /**
       * The squared magnitude (length) of `this`.
       * Equivalent to `Vec2.squaredMagnitude(this);`
       *
       * @category Accessors
       */
    }, {
      key: "squaredMagnitude",
      get: function get() {
        var x = this[0];
        var y = this[1];
        return x * x + y * y;
      }
      /**
       * Alias for {@link Vec2.squaredMagnitude}
       *
       * @category Accessors
       */
    }, {
      key: "sqrMag",
      get: function get() {
        return this.squaredMagnitude;
      }
      /**
       * A string representation of `this`
       * Equivalent to `Vec2.str(this);`
       *
       * @category Accessors
       */
    }, {
      key: "str",
      get: function get() {
        return _Vec2.str(this);
      }
      // ===================
      // Instances methods
      // ===================
      /**
       * Copy the values from another {@link Vec2} into `this`.
       * @category Methods
       *
       * @param a the source vector
       * @returns `this`
       */
    }, {
      key: "copy",
      value: function copy(a) {
        this.set(a);
        return this;
      }
      // Instead of zero(), use a.fill(0) for instances;
      /**
       * Adds a {@link Vec2} to `this`.
       * Equivalent to `Vec2.add(this, this, b);`
       * @category Methods
       *
       * @param b - The vector to add to `this`
       * @returns `this`
       */
    }, {
      key: "add",
      value: function add(b) {
        this[0] += b[0];
        this[1] += b[1];
        return this;
      }
      /**
       * Subtracts a {@link Vec2} from `this`.
       * Equivalent to `Vec2.subtract(this, this, b);`
       * @category Methods
       *
       * @param b - The vector to subtract from `this`
       * @returns `this`
       */
    }, {
      key: "subtract",
      value: function subtract(b) {
        this[0] -= b[0];
        this[1] -= b[1];
        return this;
      }
      /**
       * Alias for {@link Vec2.subtract}
       * @category Methods
       */
    }, {
      key: "sub",
      value: function sub(b) {
        return this;
      }
      // eslint-disable-line @typescript-eslint/no-unused-vars
      /**
       * Multiplies `this` by a {@link Vec2}.
       * Equivalent to `Vec2.multiply(this, this, b);`
       * @category Methods
       *
       * @param b - The vector to multiply `this` by
       * @returns `this`
       */
    }, {
      key: "multiply",
      value: function multiply(b) {
        this[0] *= b[0];
        this[1] *= b[1];
        return this;
      }
      /**
       * Alias for {@link Vec2.multiply}
       * @category Methods
       */
    }, {
      key: "mul",
      value: function mul(b) {
        return this;
      }
      // eslint-disable-line @typescript-eslint/no-unused-vars
      /**
       * Divides `this` by a {@link Vec2}.
       * Equivalent to `Vec2.divide(this, this, b);`
       * @category Methods
       *
       * @param b - The vector to divide `this` by
       * @returns `this`
       */
    }, {
      key: "divide",
      value: function divide(b) {
        this[0] /= b[0];
        this[1] /= b[1];
        return this;
      }
      /**
       * Alias for {@link Vec2.divide}
       * @category Methods
       */
    }, {
      key: "div",
      value: function div(b) {
        return this;
      }
      // eslint-disable-line @typescript-eslint/no-unused-vars
      /**
       * Scales `this` by a scalar number.
       * Equivalent to `Vec2.scale(this, this, b);`
       * @category Methods
       *
       * @param b - Amount to scale `this` by
       * @returns `this`
       */
    }, {
      key: "scale",
      value: function scale(b) {
        this[0] *= b;
        this[1] *= b;
        return this;
      }
      /**
       * Calculates `this` scaled by a scalar value then adds the result to `this`.
       * Equivalent to `Vec2.scaleAndAdd(this, this, b, scale);`
       * @category Methods
       *
       * @param b - The vector to add to `this`
       * @param scale - The amount to scale `b` by before adding
       * @returns `this`
       */
    }, {
      key: "scaleAndAdd",
      value: function scaleAndAdd(b, scale) {
        this[0] += b[0] * scale;
        this[1] += b[1] * scale;
        return this;
      }
      /**
       * Calculates the Euclidean distance between another {@link Vec2} and `this`.
       * Equivalent to `Vec2.distance(this, b);`
       * @category Methods
       *
       * @param b - The vector to calculate the distance to
       * @returns Distance between `this` and `b`
       */
    }, {
      key: "distance",
      value: function distance(b) {
        return _Vec2.distance(this, b);
      }
      /**
       * Alias for {@link Vec2.distance}
       * @category Methods
       */
    }, {
      key: "dist",
      value: function dist(b) {
        return 0;
      }
      // eslint-disable-line @typescript-eslint/no-unused-vars
      /**
       * Calculates the squared Euclidean distance between another {@link Vec2} and `this`.
       * Equivalent to `Vec2.squaredDistance(this, b);`
       * @category Methods
       *
       * @param b The vector to calculate the squared distance to
       * @returns Squared distance between `this` and `b`
       */
    }, {
      key: "squaredDistance",
      value: function squaredDistance(b) {
        return _Vec2.squaredDistance(this, b);
      }
      /**
       * Alias for {@link Vec2.squaredDistance}
       * @category Methods
       */
    }, {
      key: "sqrDist",
      value: function sqrDist(b) {
        return 0;
      }
      // eslint-disable-line @typescript-eslint/no-unused-vars
      /**
       * Negates the components of `this`.
       * Equivalent to `Vec2.negate(this, this);`
       * @category Methods
       *
       * @returns `this`
       */
    }, {
      key: "negate",
      value: function negate() {
        this[0] *= -1;
        this[1] *= -1;
        return this;
      }
      /**
       * Inverts the components of `this`.
       * Equivalent to `Vec2.inverse(this, this);`
       * @category Methods
       *
       * @returns `this`
       */
    }, {
      key: "invert",
      value: function invert() {
        this[0] = 1 / this[0];
        this[1] = 1 / this[1];
        return this;
      }
      /**
       * Sets each component of `this` to it's absolute value.
       * Equivalent to `Vec2.abs(this, this);`
       * @category Methods
       *
       * @returns `this`
       */
    }, {
      key: "abs",
      value: function abs() {
        this[0] = Math.abs(this[0]);
        this[1] = Math.abs(this[1]);
        return this;
      }
      /**
       * Calculates the dot product of this and another {@link Vec2}.
       * Equivalent to `Vec2.dot(this, b);`
       * @category Methods
       *
       * @param b - The second operand
       * @returns Dot product of `this` and `b`
       */
    }, {
      key: "dot",
      value: function dot(b) {
        return this[0] * b[0] + this[1] * b[1];
      }
      /**
       * Normalize `this`.
       * Equivalent to `Vec2.normalize(this, this);`
       * @category Methods
       *
       * @returns `this`
       */
    }, {
      key: "normalize",
      value: function normalize() {
        return _Vec2.normalize(this, this);
      }
      // ===================
      // Static accessors
      // ===================
      /**
       * @category Static
       *
       * @returns The number of bytes in a {@link Vec2}.
       */
    }], [{
      key: "BYTE_LENGTH",
      get: function get() {
        return 2 * Float32Array.BYTES_PER_ELEMENT;
      }
      // ===================
      // Static methods
      // ===================
      /**
       * Creates a new, empty {@link Vec2}
       * @category Static
       *
       * @returns A new 2D vector
       */
    }, {
      key: "create",
      value: function create() {
        return new _Vec2();
      }
      /**
       * Creates a new {@link Vec2} initialized with values from an existing vector
       * @category Static
       *
       * @param a - Vector to clone
       * @returns A new 2D vector
       */
    }, {
      key: "clone",
      value: function clone(a) {
        return new _Vec2(a);
      }
      /**
       * Creates a new {@link Vec2} initialized with the given values
       * @category Static
       *
       * @param x - X component
       * @param y - Y component
       * @returns A new 2D vector
       */
    }, {
      key: "fromValues",
      value: function fromValues(x, y) {
        return new _Vec2(x, y);
      }
      /**
       * Copy the values from one {@link Vec2} to another
       * @category Static
       *
       * @param out - the receiving vector
       * @param a - The source vector
       * @returns `out`
       */
    }, {
      key: "copy",
      value: function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        return out;
      }
      /**
       * Set the components of a {@link Vec2} to the given values
       * @category Static
       *
       * @param out - The receiving vector
       * @param x - X component
       * @param y - Y component
       * @returns `out`
       */
    }, {
      key: "set",
      value: function set(out, x, y) {
        out[0] = x;
        out[1] = y;
        return out;
      }
      /**
       * Adds two {@link Vec2}s
       * @category Static
       *
       * @param out - The receiving vector
       * @param a - The first operand
       * @param b - The second operand
       * @returns `out`
       */
    }, {
      key: "add",
      value: function add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        return out;
      }
      /**
       * Subtracts vector b from vector a
       * @category Static
       *
       * @param out - The receiving vector
       * @param a - The first operand
       * @param b - The second operand
       * @returns `out`
       */
    }, {
      key: "subtract",
      value: function subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        return out;
      }
      /**
       * Alias for {@link Vec2.subtract}
       * @category Static
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "sub",
      value: function sub(out, a, b) {
        return [0, 0];
      }
      /**
       * Multiplies two {@link Vec2}s
       * @category Static
       *
       * @param out - The receiving vector
       * @param a - The first operand
       * @param b - The second operand
       * @returns `out`
       */
    }, {
      key: "multiply",
      value: function multiply(out, a, b) {
        out[0] = a[0] * b[0];
        out[1] = a[1] * b[1];
        return out;
      }
      /**
       * Alias for {@link Vec2.multiply}
       * @category Static
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "mul",
      value: function mul(out, a, b) {
        return [0, 0];
      }
      /**
       * Divides two {@link Vec2}s
       * @category Static
       *
       * @param out - The receiving vector
       * @param a - The first operand
       * @param b - The second operand
       * @returns `out`
       */
    }, {
      key: "divide",
      value: function divide(out, a, b) {
        out[0] = a[0] / b[0];
        out[1] = a[1] / b[1];
        return out;
      }
      /**
       * Alias for {@link Vec2.divide}
       * @category Static
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "div",
      value: function div(out, a, b) {
        return [0, 0];
      }
      /**
       * Math.ceil the components of a {@link Vec2}
       * @category Static
       *
       * @param out - The receiving vector
       * @param a - Vector to ceil
       * @returns `out`
       */
    }, {
      key: "ceil",
      value: function ceil(out, a) {
        out[0] = Math.ceil(a[0]);
        out[1] = Math.ceil(a[1]);
        return out;
      }
      /**
       * Math.floor the components of a {@link Vec2}
       * @category Static
       *
       * @param out - The receiving vector
       * @param a - Vector to floor
       * @returns `out`
       */
    }, {
      key: "floor",
      value: function floor(out, a) {
        out[0] = Math.floor(a[0]);
        out[1] = Math.floor(a[1]);
        return out;
      }
      /**
       * Returns the minimum of two {@link Vec2}s
       * @category Static
       *
       * @param out - The receiving vector
       * @param a - The first operand
       * @param b - The second operand
       * @returns `out`
       */
    }, {
      key: "min",
      value: function min(out, a, b) {
        out[0] = Math.min(a[0], b[0]);
        out[1] = Math.min(a[1], b[1]);
        return out;
      }
      /**
       * Returns the maximum of two {@link Vec2}s
       * @category Static
       *
       * @param out - The receiving vector
       * @param a - The first operand
       * @param b - The second operand
       * @returns `out`
       */
    }, {
      key: "max",
      value: function max(out, a, b) {
        out[0] = Math.max(a[0], b[0]);
        out[1] = Math.max(a[1], b[1]);
        return out;
      }
      /**
       * Math.round the components of a {@link Vec2}
       * @category Static
       *
       * @param out - The receiving vector
       * @param a - Vector to round
       * @returns `out`
       */
    }, {
      key: "round",
      value: function round(out, a) {
        out[0] = Math.round(a[0]);
        out[1] = Math.round(a[1]);
        return out;
      }
      /**
       * Scales a {@link Vec2} by a scalar number
       * @category Static
       *
       * @param out - The receiving vector
       * @param a - The vector to scale
       * @param b - Amount to scale the vector by
       * @returns `out`
       */
    }, {
      key: "scale",
      value: function scale(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        return out;
      }
      /**
       * Adds two Vec2's after scaling the second operand by a scalar value
       * @category Static
       *
       * @param out - The receiving vector
       * @param a - The first operand
       * @param b - The second operand
       * @param scale - The amount to scale b by before adding
       * @returns `out`
       */
    }, {
      key: "scaleAndAdd",
      value: function scaleAndAdd(out, a, b, scale) {
        out[0] = a[0] + b[0] * scale;
        out[1] = a[1] + b[1] * scale;
        return out;
      }
      /**
       * Calculates the Euclidean distance between two {@link Vec2}s
       * @category Static
       *
       * @param a - The first operand
       * @param b - The second operand
       * @returns distance between `a` and `b`
       */
    }, {
      key: "distance",
      value: function distance(a, b) {
        return Math.hypot(b[0] - a[0], b[1] - a[1]);
      }
      /**
       * Alias for {@link Vec2.distance}
       * @category Static
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "dist",
      value: function dist(a, b) {
        return 0;
      }
      /**
       * Calculates the squared Euclidean distance between two {@link Vec2}s
       * @category Static
       *
       * @param a - The first operand
       * @param b - The second operand
       * @returns Squared distance between `a` and `b`
       */
    }, {
      key: "squaredDistance",
      value: function squaredDistance(a, b) {
        var x = b[0] - a[0];
        var y = b[1] - a[1];
        return x * x + y * y;
      }
      /**
       * Alias for {@link Vec2.distance}
       * @category Static
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "sqrDist",
      value: function sqrDist(a, b) {
        return 0;
      }
      /**
       * Calculates the magnitude (length) of a {@link Vec2}
       * @category Static
       *
       * @param a - Vector to calculate magnitude of
       * @returns Magnitude of a
       */
    }, {
      key: "magnitude",
      value: function magnitude(a) {
        var x = a[0];
        var y = a[1];
        return Math.sqrt(x * x + y * y);
      }
      /**
       * Alias for {@link Vec2.magnitude}
       * @category Static
       */
    }, {
      key: "mag",
      value: function mag(a) {
        return 0;
      }
      // eslint-disable-line @typescript-eslint/no-unused-vars
      /**
       * Alias for {@link Vec2.magnitude}
       * @category Static
       * @deprecated Use {@link Vec2.magnitude} to avoid conflicts with builtin `length` methods/attribs
       *
       * @param a - vector to calculate length of
       * @returns length of a
       */
      // Length conflicts with Function.length
    }, {
      key: "length",
      value: function length(a) {
        return 0;
      }
      // eslint-disable-line @typescript-eslint/no-unused-vars
      /**
       * Alias for {@link Vec2.magnitude}
       * @category Static
       * @deprecated Use {@link Vec2.mag}
       */
    }, {
      key: "len",
      value: function len(a) {
        return 0;
      }
      // eslint-disable-line @typescript-eslint/no-unused-vars
      /**
       * Calculates the squared length of a {@link Vec2}
       * @category Static
       *
       * @param a - Vector to calculate squared length of
       * @returns Squared length of a
       */
    }, {
      key: "squaredLength",
      value: function squaredLength(a) {
        var x = a[0];
        var y = a[1];
        return x * x + y * y;
      }
      /**
       * Alias for {@link Vec2.squaredLength}
       * @category Static
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      key: "sqrLen",
      value: function sqrLen(a, b) {
        return 0;
      }
      /**
       * Negates the components of a {@link Vec2}
       * @category Static
       *
       * @param out - The receiving vector
       * @param a - Vector to negate
       * @returns `out`
       */
    }, {
      key: "negate",
      value: function negate(out, a) {
        out[0] = -a[0];
        out[1] = -a[1];
        return out;
      }
      /**
       * Returns the inverse of the components of a {@link Vec2}
       * @category Static
       *
       * @param out - The receiving vector
       * @param a - Vector to invert
       * @returns `out`
       */
    }, {
      key: "inverse",
      value: function inverse(out, a) {
        out[0] = 1 / a[0];
        out[1] = 1 / a[1];
        return out;
      }
      /**
       * Returns the absolute value of the components of a {@link Vec2}
       * @category Static
       *
       * @param out - The receiving vector
       * @param a - Vector to compute the absolute values of
       * @returns `out`
       */
    }, {
      key: "abs",
      value: function abs(out, a) {
        out[0] = Math.abs(a[0]);
        out[1] = Math.abs(a[1]);
        return out;
      }
      /**
       * Normalize a {@link Vec2}
       * @category Static
       *
       * @param out - The receiving vector
       * @param a - Vector to normalize
       * @returns `out`
       */
    }, {
      key: "normalize",
      value: function normalize(out, a) {
        var x = a[0];
        var y = a[1];
        var len = x * x + y * y;
        if (len > 0) {
          len = 1 / Math.sqrt(len);
        }
        out[0] = a[0] * len;
        out[1] = a[1] * len;
        return out;
      }
      /**
       * Calculates the dot product of two {@link Vec2}s
       * @category Static
       *
       * @param a - The first operand
       * @param b - The second operand
       * @returns Dot product of `a` and `b`
       */
    }, {
      key: "dot",
      value: function dot(a, b) {
        return a[0] * b[0] + a[1] * b[1];
      }
      /**
       * Computes the cross product of two {@link Vec2}s
       * Note that the cross product must by definition produce a 3D vector.
       * For this reason there is also not instance equivalent for this function.
       * @category Static
       *
       * @param out - The receiving vector
       * @param a - The first operand
       * @param b - The second operand
       * @returns `out`
       */
    }, {
      key: "cross",
      value: function cross(out, a, b) {
        var z = a[0] * b[1] - a[1] * b[0];
        out[0] = out[1] = 0;
        out[2] = z;
        return out;
      }
      /**
       * Performs a linear interpolation between two {@link Vec2}s
       * @category Static
       *
       * @param out - The receiving vector
       * @param a - The first operand
       * @param b - The second operand
       * @param t - Interpolation amount, in the range [0-1], between the two inputs
       * @returns `out`
       */
    }, {
      key: "lerp",
      value: function lerp(out, a, b, t) {
        var ax = a[0];
        var ay = a[1];
        out[0] = ax + t * (b[0] - ax);
        out[1] = ay + t * (b[1] - ay);
        return out;
      }
      /**
       * Transforms the {@link Vec2} with a {@link Mat2}
       *
       * @param out - The receiving vector
       * @param a - The vector to transform
       * @param m - Matrix to transform with
       * @returns `out`
       * @category Static
       */
    }, {
      key: "transformMat2",
      value: function transformMat2(out, a, m) {
        var x = a[0];
        var y = a[1];
        out[0] = m[0] * x + m[2] * y;
        out[1] = m[1] * x + m[3] * y;
        return out;
      }
      /**
       * Transforms the {@link Vec2} with a {@link Mat2d}
       *
       * @param out - The receiving vector
       * @param a - The vector to transform
       * @param m - Matrix to transform with
       * @returns `out`
       * @category Static
       */
    }, {
      key: "transformMat2d",
      value: function transformMat2d(out, a, m) {
        var x = a[0];
        var y = a[1];
        out[0] = m[0] * x + m[2] * y + m[4];
        out[1] = m[1] * x + m[3] * y + m[5];
        return out;
      }
      /**
       * Transforms the {@link Vec2} with a {@link Mat3}
       * 3rd vector component is implicitly '1'
       *
       * @param out - The receiving vector
       * @param a - The vector to transform
       * @param m - Matrix to transform with
       * @returns `out`
       * @category Static
       */
    }, {
      key: "transformMat3",
      value: function transformMat3(out, a, m) {
        var x = a[0];
        var y = a[1];
        out[0] = m[0] * x + m[3] * y + m[6];
        out[1] = m[1] * x + m[4] * y + m[7];
        return out;
      }
      /**
       * Transforms the {@link Vec2} with a {@link Mat4}
       * 3rd vector component is implicitly '0'
       * 4th vector component is implicitly '1'
       *
       * @param out - The receiving vector
       * @param a - The vector to transform
       * @param m - Matrix to transform with
       * @returns `out`
       * @category Static
       */
    }, {
      key: "transformMat4",
      value: function transformMat4(out, a, m) {
        var x = a[0];
        var y = a[1];
        out[0] = m[0] * x + m[4] * y + m[12];
        out[1] = m[1] * x + m[5] * y + m[13];
        return out;
      }
      /**
       * Rotate a 2D vector
       * @category Static
       *
       * @param out - The receiving {@link Vec2}
       * @param a - The {@link Vec2} point to rotate
       * @param b - The origin of the rotation
       * @param rad - The angle of rotation in radians
       * @returns `out`
       */
    }, {
      key: "rotate",
      value: function rotate(out, a, b, rad) {
        var p0 = a[0] - b[0];
        var p1 = a[1] - b[1];
        var sinC = Math.sin(rad);
        var cosC = Math.cos(rad);
        out[0] = p0 * cosC - p1 * sinC + b[0];
        out[1] = p0 * sinC + p1 * cosC + b[1];
        return out;
      }
      /**
       * Get the angle between two 2D vectors
       * @category Static
       *
       * @param a - The first operand
       * @param b - The second operand
       * @returns The angle in radians
       */
    }, {
      key: "angle",
      value: function angle(a, b) {
        var x1 = a[0];
        var y1 = a[1];
        var x2 = b[0];
        var y2 = b[1];
        var mag = Math.sqrt(x1 * x1 + y1 * y1) * Math.sqrt(x2 * x2 + y2 * y2);
        var cosine = mag && (x1 * x2 + y1 * y2) / mag;
        return Math.acos(Math.min(Math.max(cosine, -1), 1));
      }
      /**
       * Set the components of a {@link Vec2} to zero
       * @category Static
       *
       * @param out - The receiving vector
       * @returns `out`
       */
    }, {
      key: "zero",
      value: function zero(out) {
        out[0] = 0;
        out[1] = 0;
        return out;
      }
      /**
       * Returns whether the vectors have exactly the same elements in the same position (when compared with ===)
       * @category Static
       *
       * @param a - The first vector.
       * @param b - The second vector.
       * @returns `true` if the vectors components are ===, `false` otherwise.
       */
    }, {
      key: "exactEquals",
      value: function exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1];
      }
      /**
       * Returns whether the vectors have approximately the same elements in the same position.
       * @category Static
       *
       * @param a - The first vector.
       * @param b - The second vector.
       * @returns `true` if the vectors are approximately equal, `false` otherwise.
       */
    }, {
      key: "equals",
      value: function equals(a, b) {
        var a0 = a[0];
        var a1 = a[1];
        var b0 = b[0];
        var b1 = b[1];
        return Math.abs(a0 - b0) <= GLM_EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= GLM_EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1));
      }
      /**
       * Returns a string representation of a vector
       * @category Static
       *
       * @param a - Vector to represent as a string
       * @returns String representation of the vector
       */
    }, {
      key: "str",
      value: function str(a) {
        return "Vec2(".concat(a.join(", "), ")");
      }
    }]);
  }( /*#__PURE__*/_wrapNativeSuper(Float32Array));
  Vec2.prototype.sub = Vec2.prototype.subtract;
  Vec2.prototype.mul = Vec2.prototype.multiply;
  Vec2.prototype.div = Vec2.prototype.divide;
  Vec2.prototype.dist = Vec2.prototype.distance;
  Vec2.prototype.sqrDist = Vec2.prototype.squaredDistance;
  Vec2.sub = Vec2.subtract;
  Vec2.mul = Vec2.multiply;
  Vec2.div = Vec2.divide;
  Vec2.dist = Vec2.distance;
  Vec2.sqrDist = Vec2.squaredDistance;
  Vec2.sqrLen = Vec2.squaredLength;
  Vec2.mag = Vec2.magnitude;
  Vec2.length = Vec2.magnitude;
  Vec2.len = Vec2.magnitude;

  // src/swizzle/index.ts
  var GLM_SWIZZLES_ENABLED_F32 = false;
  function EnableSwizzles() {
    if (GLM_SWIZZLES_ENABLED_F32) {
      return;
    }
    var VEC2_SWIZZLES = ["xx", "xy", "yx", "yy", "xxx", "xxy", "xyx", "xyy", "yxx", "yxy", "yyx", "yyy", "xxxx", "xxxy", "xxyx", "xxyy", "xyxx", "xyxy", "xyyx", "xyyy", "yxxx", "yxxy", "yxyx", "yxyy", "yyxx", "yyxy", "yyyx", "yyyy", "rr", "rg", "gr", "gg", "rrr", "rrg", "rgr", "rgg", "grr", "grg", "ggr", "ggg", "rrrr", "rrrg", "rrgr", "rrgg", "rgrr", "rgrg", "rggr", "rggg", "grrr", "grrg", "grgr", "grgg", "ggrr", "ggrg", "gggr", "gggg"];
    var VEC3_SWIZZLES = ["xz", "yz", "zx", "zy", "zz", "xxz", "xyz", "xzx", "xzy", "xzz", "yxz", "yyz", "yzx", "yzy", "yzz", "zxx", "zxy", "zxz", "zyx", "zyy", "zyz", "zzx", "zzy", "zzz", "xxxz", "xxyz", "xxzx", "xxzy", "xxzz", "xyxz", "xyyz", "xyzx", "xyzy", "xyzz", "xzxx", "xzxy", "xzxz", "xzyx", "xzyy", "xzyz", "xzzx", "xzzy", "xzzz", "yxxz", "yxyz", "yxzx", "yxzy", "yxzz", "yyxz", "yyyz", "yyzx", "yyzy", "yyzz", "yzxx", "yzxy", "yzxz", "yzyx", "yzyy", "yzyz", "yzzx", "yzzy", "yzzz", "zxxx", "zxxy", "zxxz", "zxyx", "zxyy", "zxyz", "zxzx", "zxzy", "zxzz", "zyxx", "zyxy", "zyxz", "zyyx", "zyyy", "zyyz", "zyzx", "zyzy", "zyzz", "zzxx", "zzxy", "zzxz", "zzyx", "zzyy", "zzyz", "zzzx", "zzzy", "zzzz", "rb", "gb", "br", "bg", "bb", "rrb", "rgb", "rbr", "rbg", "rbb", "grb", "ggb", "gbr", "gbg", "gbb", "brr", "brg", "brb", "bgr", "bgg", "bgb", "bbr", "bbg", "bbb", "rrrb", "rrgb", "rrbr", "rrbg", "rrbb", "rgrb", "rggb", "rgbr", "rgbg", "rgbb", "rbrr", "rbrg", "rbrb", "rbgr", "rbgg", "rbgb", "rbbr", "rbbg", "rbbb", "grrb", "grgb", "grbr", "grbg", "grbb", "ggrb", "gggb", "ggbr", "ggbg", "ggbb", "gbrr", "gbrg", "gbrb", "gbgr", "gbgg", "gbgb", "gbbr", "gbbg", "gbbb", "brrr", "brrg", "brrb", "brgr", "brgg", "brgb", "brbr", "brbg", "brbb", "bgrr", "bgrg", "bgrb", "bggr", "bggg", "bggb", "bgbr", "bgbg", "bgbb", "bbrr", "bbrg", "bbrb", "bbgr", "bbgg", "bbgb", "bbbr", "bbbg", "bbbb"];
    var VEC4_SWIZZLES = ["xw", "yw", "zw", "wx", "wy", "wz", "ww", "xxw", "xyw", "xzw", "xwx", "xwy", "xwz", "xww", "yxw", "yyw", "yzw", "ywx", "ywy", "ywz", "yww", "zxw", "zyw", "zzw", "zwx", "zwy", "zwz", "zww", "wxx", "wxy", "wxz", "wxw", "wyx", "wyy", "wyz", "wyw", "wzx", "wzy", "wzz", "wzw", "wwx", "wwy", "wwz", "www", "xxxw", "xxyw", "xxzw", "xxwx", "xxwy", "xxwz", "xxww", "xyxw", "xyyw", "xyzw", "xywx", "xywy", "xywz", "xyww", "xzxw", "xzyw", "xzzw", "xzwx", "xzwy", "xzwz", "xzww", "xwxx", "xwxy", "xwxz", "xwxw", "xwyx", "xwyy", "xwyz", "xwyw", "xwzx", "xwzy", "xwzz", "xwzw", "xwwx", "xwwy", "xwwz", "xwww", "yxxw", "yxyw", "yxzw", "yxwx", "yxwy", "yxwz", "yxww", "yyxw", "yyyw", "yyzw", "yywx", "yywy", "yywz", "yyww", "yzxw", "yzyw", "yzzw", "yzwx", "yzwy", "yzwz", "yzww", "ywxx", "ywxy", "ywxz", "ywxw", "ywyx", "ywyy", "ywyz", "ywyw", "ywzx", "ywzy", "ywzz", "ywzw", "ywwx", "ywwy", "ywwz", "ywww", "zxxw", "zxyw", "zxzw", "zxwx", "zxwy", "zxwz", "zxww", "zyxw", "zyyw", "zyzw", "zywx", "zywy", "zywz", "zyww", "zzxw", "zzyw", "zzzw", "zzwx", "zzwy", "zzwz", "zzww", "zwxx", "zwxy", "zwxz", "zwxw", "zwyx", "zwyy", "zwyz", "zwyw", "zwzx", "zwzy", "zwzz", "zwzw", "zwwx", "zwwy", "zwwz", "zwww", "wxxx", "wxxy", "wxxz", "wxxw", "wxyx", "wxyy", "wxyz", "wxyw", "wxzx", "wxzy", "wxzz", "wxzw", "wxwx", "wxwy", "wxwz", "wxww", "wyxx", "wyxy", "wyxz", "wyxw", "wyyx", "wyyy", "wyyz", "wyyw", "wyzx", "wyzy", "wyzz", "wyzw", "wywx", "wywy", "wywz", "wyww", "wzxx", "wzxy", "wzxz", "wzxw", "wzyx", "wzyy", "wzyz", "wzyw", "wzzx", "wzzy", "wzzz", "wzzw", "wzwx", "wzwy", "wzwz", "wzww", "wwxx", "wwxy", "wwxz", "wwxw", "wwyx", "wwyy", "wwyz", "wwyw", "wwzx", "wwzy", "wwzz", "wwzw", "wwwx", "wwwy", "wwwz", "wwww", "ra", "ga", "ba", "ar", "ag", "ab", "aa", "rra", "rga", "rba", "rar", "rag", "rab", "raa", "gra", "gga", "gba", "gar", "gag", "gab", "gaa", "bra", "bga", "bba", "bar", "bag", "bab", "baa", "arr", "arg", "arb", "ara", "agr", "agg", "agb", "aga", "abr", "abg", "abb", "aba", "aar", "aag", "aab", "aaa", "rrra", "rrga", "rrba", "rrar", "rrag", "rrab", "rraa", "rgra", "rgga", "rgba", "rgar", "rgag", "rgab", "rgaa", "rbra", "rbga", "rbba", "rbar", "rbag", "rbab", "rbaa", "rarr", "rarg", "rarb", "rara", "ragr", "ragg", "ragb", "raga", "rabr", "rabg", "rabb", "raba", "raar", "raag", "raab", "raaa", "grra", "grga", "grba", "grar", "grag", "grab", "graa", "ggra", "ggga", "ggba", "ggar", "ggag", "ggab", "ggaa", "gbra", "gbga", "gbba", "gbar", "gbag", "gbab", "gbaa", "garr", "garg", "garb", "gara", "gagr", "gagg", "gagb", "gaga", "gabr", "gabg", "gabb", "gaba", "gaar", "gaag", "gaab", "gaaa", "brra", "brga", "brba", "brar", "brag", "brab", "braa", "bgra", "bgga", "bgba", "bgar", "bgag", "bgab", "bgaa", "bbra", "bbga", "bbba", "bbar", "bbag", "bbab", "bbaa", "barr", "barg", "barb", "bara", "bagr", "bagg", "bagb", "baga", "babr", "babg", "babb", "baba", "baar", "baag", "baab", "baaa", "arrr", "arrg", "arrb", "arra", "argr", "argg", "argb", "arga", "arbr", "arbg", "arbb", "arba", "arar", "arag", "arab", "araa", "agrr", "agrg", "agrb", "agra", "aggr", "aggg", "aggb", "agga", "agbr", "agbg", "agbb", "agba", "agar", "agag", "agab", "agaa", "abrr", "abrg", "abrb", "abra", "abgr", "abgg", "abgb", "abga", "abbr", "abbg", "abbb", "abba", "abar", "abag", "abab", "abaa", "aarr", "aarg", "aarb", "aara", "aagr", "aagg", "aagb", "aaga", "aabr", "aabg", "aabb", "aaba", "aaar", "aaag", "aaab", "aaaa"];
    var SWIZZLE_INDEX = {
      x: 0,
      r: 0,
      y: 1,
      g: 1,
      z: 2,
      b: 2,
      w: 3,
      a: 3
    };
    function getSwizzleImpl(swizzle) {
      switch (swizzle.length) {
        case 2:
          return function () {
            return new Vec2(this[SWIZZLE_INDEX[swizzle[0]]], this[SWIZZLE_INDEX[swizzle[1]]]);
          };
        case 3:
          return function () {
            return new Vec3(this[SWIZZLE_INDEX[swizzle[0]]], this[SWIZZLE_INDEX[swizzle[1]]], this[SWIZZLE_INDEX[swizzle[2]]]);
          };
        case 4:
          return function () {
            return new Vec4(this[SWIZZLE_INDEX[swizzle[0]]], this[SWIZZLE_INDEX[swizzle[1]]], this[SWIZZLE_INDEX[swizzle[2]]], this[SWIZZLE_INDEX[swizzle[3]]]);
          };
      }
      throw new Error("Illegal swizzle length");
    }
    for (var _i = 0, _VEC2_SWIZZLES = VEC2_SWIZZLES; _i < _VEC2_SWIZZLES.length; _i++) {
      var swizzle = _VEC2_SWIZZLES[_i];
      var impl = getSwizzleImpl(swizzle);
      Object.defineProperty(Vec2.prototype, swizzle, {
        get: impl
      });
      Object.defineProperty(Vec3.prototype, swizzle, {
        get: impl
      });
      Object.defineProperty(Vec4.prototype, swizzle, {
        get: impl
      });
    }
    for (var _i2 = 0, _VEC3_SWIZZLES = VEC3_SWIZZLES; _i2 < _VEC3_SWIZZLES.length; _i2++) {
      var _swizzle = _VEC3_SWIZZLES[_i2];
      var _impl = getSwizzleImpl(_swizzle);
      Object.defineProperty(Vec3.prototype, _swizzle, {
        get: _impl
      });
      Object.defineProperty(Vec4.prototype, _swizzle, {
        get: _impl
      });
    }
    for (var _i3 = 0, _VEC4_SWIZZLES = VEC4_SWIZZLES; _i3 < _VEC4_SWIZZLES.length; _i3++) {
      var _swizzle2 = _VEC4_SWIZZLES[_i3];
      var _impl2 = getSwizzleImpl(_swizzle2);
      Object.defineProperty(Vec4.prototype, _swizzle2, {
        get: _impl2
      });
    }
    GLM_SWIZZLES_ENABLED_F32 = true;
  }

  // src/util/angleConversion.ts
  var GLM_DEG_TO_RAD = Math.PI / 180;
  var GLM_RAD_TO_DEG = 180 / Math.PI;
  function toDegree(value) {
    return value * GLM_RAD_TO_DEG;
  }
  function toRadian(value) {
    return value * GLM_DEG_TO_RAD;
  }

  exports.EnableSwizzles = EnableSwizzles;
  exports.Mat2 = Mat2;
  exports.Mat2d = Mat2d;
  exports.Mat3 = Mat3;
  exports.Mat4 = Mat4;
  exports.Quat = Quat;
  exports.Quat2 = Quat2;
  exports.Vec2 = Vec2;
  exports.Vec3 = Vec3;
  exports.Vec4 = Vec4;
  exports.mat2 = Mat2;
  exports.mat2d = Mat2d;
  exports.mat3 = Mat3;
  exports.mat4 = Mat4;
  exports.quat = Quat;
  exports.quat2 = Quat2;
  exports.toDegree = toDegree;
  exports.toRadian = toRadian;
  exports.vec2 = Vec2;
  exports.vec3 = Vec3;
  exports.vec4 = Vec4;

}));
//# sourceMappingURL=gl-matrix-f32.js.map
