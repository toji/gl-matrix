---
title: 5. CommonJS
category: API Usage
---
## CommonJS

This package supports both ES Module and CommonJS formats. For CommonJS usage, replace `import` statements with
`require`. All functionality remains consistent across both module systems.

## Using Float32Array

The version 4 release offers a new class based API.

```js
const { Vec3 } = require('gl-matrix');

const vec = new Vec3(0, 1, 2);
```

## Using Float64Array

If your use case requires additional precision beyond 32-bit floats used by default you can instead use a
64-bit version of the library by importing from the `gl-matrix/f64` sub-path export.

```js
const { Vec3 } = require('gl-matrix/f64');

const vec = new Vec3(0, 1, 2);
```
