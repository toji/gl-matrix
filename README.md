[![NPM Version](https://img.shields.io/npm/v/gl-matrix.svg)](https://www.npmjs.com/package/gl-matrix)
[![License](https://img.shields.io/badge/license-MIT-yellowgreen.svg?style=flat)](https://github.com/typhonjs-svelte/trie-search/blob/main/LICENSE)
[![Build Status](https://github.com/toji/gl-matrix/workflows/CI/CD/badge.svg)](#)
[![Coverage](https://img.shields.io/codecov/c/github/toji/gl-matrix.svg)](https://codecov.io/github/toji/gl-matrix)
[![API Docs](https://img.shields.io/badge/API%20Documentation-476ff0)](https://glmatrix.net/docs/v4/)

`gl-matrix` is a versatile and high-performance JavaScript / TypeScript library for vector and matrix operations, 
optimized for real-time 3D graphics APIs such as WebGL and WebGPU.

## Using Float32Array

The version 4 release offers a new class based API.

```js
import { Vec3 } from 'gl-matrix';

const vec = new Vec3(0, 1, 2);
```

## Using Float64Array

If your use case requires additional precision beyond 32-bit floats used by default you can instead use a 
64-bit version of the library by importing from the `gl-matrix/f64` sub-path export.

```js
import { Vec3 } from 'gl-matrix/f64';

const vec = new Vec3(0, 1, 2);
```

If you have a need to mix and match the 64-bit and 32-bit versions you can do so by importing them as different names.

```js
import { Vec3 as Vec3F32 } from 'gl-matrix';
import { Vec3 as Vec3F64 } from 'gl-matrix/f64';
```

All API calls are identical between the two versions and the only difference is the type of TypedArray which the classes extend.

## Using Typescript / Type Aliases

All Typescript type aliases are shared across library variants and located in the `gl-matrix/types` sub-path export.

For Typescript:
```ts
import type { Vec3Like } from 'gl-matrix/types';
```

For JSDoc using the new Typescript 5.5 `@import` tag:
```js
/**
 * @import { Vec3Like } from 'gl-matrix/types'
 */
```

For JSDoc using the older `import types` Typescript mechanism:
```js
/**
 * @type {import('gl-matrix/types').Vec3Like}
 */
```

## Classic API

To facilitate easier adoption of version 4 of `gl-matrix` and maintain essential compatability with existing codebases the modern
API can be accessed via remapped exports matching the version 3 API from the `gl-matrix/classic` sub-path export. The
only change required is altering imports from `gl-matrix` to `gl-matrix/classic`.

```js
import { vec3 } from 'gl-matrix/classic';

const vec = vec3.create();
```

## Enabling Swizzling

To enable additional swizzle accessors for vector classes invoke the `EnableSwizzles` function from 
the `gl-matrix/swizzle` sub-path export.

```ts
import { Vec3 } from 'gl-matrix';
import { EnableSwizzles } from 'gl-matrix/swizzle';

EnableSwizzles();

const vec = new Vec3(0, 1, 2);
const vecSwizzled = vec.zyx; // Returns a new Vec3(2, 1, 0). 
```

To enable the 64-bit swizzle accessors use the `gl-matrix/swizzle/f64` sub-path export and invoke `EnableSwizzlesF64`.

```ts
import { Vec3 } from 'gl-matrix/f64';
import { EnableSwizzlesF64 } from 'gl-matrix/swizzle/f64';

EnableSwizzlesF64();

const vec = new Vec3(0, 1, 2);
const vecSwizzled = vec.zyx; // Returns a new Vec3(2, 1, 0). 
```

Additionally, you may enable ambient module declarations for the respective 32-bit or 64-bit 
vector classes when enabling swizzling. This is accomplished by using `side effect` imports as follows. 

```ts
// For `gl-matrix` / 32-bit vector classes.
import 'gl-matrix/types/swizzle';

// For `gl-matrix/f64` / 64-bit vector classes.
import 'gl-matrix/types/swizzle/f64';
```

## CommonJS

This package supports both ES Module and CommonJS formats. For CommonJS usage, replace `import` statements with 
`require`. All functionality remains consistent across both module systems.
