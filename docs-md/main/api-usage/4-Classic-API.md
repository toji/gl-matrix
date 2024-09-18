---
title: 4. Classic API
category: API Usage
---
## Classic API

To facilitate easier adoption of version 4 of `gl-matrix` and maintain essential compatability with existing codebases the modern
API can be accessed via remapped exports matching the version 3 API from the `gl-matrix/classic` sub-path export. The
only change required is altering imports from `gl-matrix` to `gl-matrix/classic`.

```js
import { vec3 } from 'gl-matrix/classic';

const vec = vec3.create();
```
