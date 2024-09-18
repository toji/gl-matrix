---
title: 1. Matrix Formatting
category: Notes
---
## Matrix formatting
`gl-matrix` is modeled after the needs of WebGL, which in turn uses matrix conventions set by OpenGL. Specifically, a
4x4 matrix is an array of 16 contiguous floats with the 13th, 14th, and 15th elements representing the X, Y, and Z,
translation components.

This may lead to some confusion when referencing OpenGL documentation, however, which represents out all matrices in
column-major format. This means that while in code a matrix may be typed out as:

```
[1, 0, 0, 0,
0, 1, 0, 0,
0, 0, 1, 0,
x, y, z, 0]
```

The same matrix in the OpenGL documentation is written as:

```
1 0 0 x
0 1 0 y
0 0 1 z
0 0 0 0
```

Please rest assured, however, that they are the same thing! This is not unique to `gl-matrix`, either, as OpenGL
developers have long been confused by the apparent lack of consistency between the memory layout and the documentation.
