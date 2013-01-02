glMatrix
=======================

Javascript has evolved into a lanugage capable of handling realtime 3D graphics, 
via WebGL, and computationally intensive tasks such as physics simulations.
These types of applications demand high performance vector and matrix math,
which is something that Javascript doesn't provide by default.
glMatrix to the rescue!

glMatrix is designed to perform vector and matrix operations stupidly fast! By
hand-tuning each function for maximum performance and encouraging efficient
usage patterns through API conventions, glMatrix will help you get the most out
of your browsers Javascript engine.

Documentation
----------------------
Documentation for all glMatrix functions can be found [here](http://glmatrix.net/docs/2.0.0/)

What's new in 2.0?
-------------------------
glMatrix 2.0 is the result of a lot of excellent feedback from the community,
and features:

 - Revamped and consistent API (not backward compatible with 1.x, sorry!)
 - New functions for each type, based on request.
 - New array operations: vec(2/3/4).forEach
 - Even more optimizations!
 - A cleaner code base, broken up by type.
 - A more complete unit testing suite.

Looking for an older version?
-----------------------------
You can download previous versions of glMatrix [here](https://github.com/toji/gl-matrix/tags)

A note about Matrix formatting
------------------------------
glMatrix is modeled after the needs of WebGL, which in turn uses matrix
conventions set by [OpenGL](http://www.opengl.org/archives/resources/faq/technical/transformations.htm).
Specifically, a 4x4 matrix is an array of 16 contiguous floats with the 13th,
14th, and 15th elements representing the X, Y, and Z, translation components.

This may lead to some confusion when referencing OpenGL documentation, however,
which represents out all matricies in column-major format. This means that while
in code a matrix may be typed out as:

    [1, 0, 0, 0,
     0, 1, 0, 0,
     0, 0, 1, 0,
     x, y, z, 0]

The same matrix in the [OpenGL documentation](http://www.opengl.org/sdk/docs/man2/xhtml/glTranslate.xml)
is written as:

    1 0 0 x
    0 1 0 y
    0 0 1 z
    0 0 0 0

Please rest assured, however, that they are the same thing! This is not unique
to glMatrix, either, as OpenGL developers have long been confused by the
apparent lack of consistency between the memory layout and the documentation.

Sorry about that, but there's not much I can do about it.