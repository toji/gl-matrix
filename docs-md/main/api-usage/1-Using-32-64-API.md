---
title: 1. Float 32 / 64 Versions
category: API Usage
---
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
