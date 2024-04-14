## Fast, flexible vector and matrix math for JavaScript

[![NPM Version](https://img.shields.io/npm/v/gl-matrix.svg)](https://www.npmjs.com/package/gl-matrix)
[![Build Status](https://travis-ci.org/toji/gl-matrix.svg)](https://travis-ci.org/toji/gl-matrix)

glMatrix is a high performance, very flexible library for vector and matrix operations in JavaScript/TypeScript, designed for the needs of realtime 3D graphics APIs like WebGL and WebGPU.

## Docs

Documentation is available at [https://glmatrix.net/docs/v4/](https://glmatrix.net/docs/v4/)

## Using Float64Array

If your use case requires additional precision beyond the default 32-bit floats used by default, you can instead use a 64-bit verions of the library by importing from the `f64/` directory of your chosen build type. For example:

```js
import { Vec3 } from './gl-matrix/dist/esm/f64/vec3.js';
```

If you have a need to mix and match the 64 bit and 32 bit versions, you can do so by importing them as different names:

```js
import { Vec3 as Vec3F32 } from './gl-matrix/dist/esm/vec3.js';
import { Vec3 as Vec3F64 } from './gl-matrix/dist/esm/f64/vec3.js';
```

All API calls are identical between the two versions, the only difference is the type of TypedArray which the classes extend.