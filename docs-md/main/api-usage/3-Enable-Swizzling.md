---
title: 3. Enabling Swizzling
category: API Usage
---
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
