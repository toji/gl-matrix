---
title: 2. Using Typescript
category: API Usage
---
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
