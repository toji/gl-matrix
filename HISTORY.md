Version History
===============

Note that anything with _Issue ##_ next to it refers to issues reported on the old [Google Code](http://code.google.com/p/glmatrix) repository

Version 1.1 (11/28/2011)
------------------------------------

* Added unit tests by sinisterchipmunk. (Thank you!)
* Added mat4.fromTranslationRotation
* Calling mat3/4.identity with zero arguments will now create a new identity matrix (Thanks to Kos)
* Fixed issue with mat4 values being set to NaN or Infinity when attempting to invert a non-invertable matrix.

Version 1.0 (10/06/2011)
------------------------------------

* Moved to GitHub to keep my projects in one place and give me a bit more sanity
* Along with the move, feels like a good time to move to official "1.0" status!
* File name is now "gl-matrix" for consistency with naming conventions in some of my other projects
* Non-minified code should now validate as cleanly as is reasonable with JSLint
* _Issue 39_ Removed assignment to invalid index in mat3.create
* _Issue 45_ Fixed an incorrect comment
* _Issue 49_ Fixed typo in quat4.inverse
* _Issue 54_ Fixed a pretty broken quat4.slerp
* _Issue 60_ Fixed transposed matrix being returned from quat4.toMat3/4
* _Issue 61_ Fixed issue in mat3.toMat4 if source and dest are the same

Version 0.9.5 (1.0 RC2) (02/27/2011)
------------------------------------

* _Issue 24_ Fixed bug in mat4.lookat (Thanks to Drew Whitehouse)
* _Issue 29_ Fixed bug in mat4.scale (Thanks to jeroom)
* _Issue 30_ Flipped mat4.ortho to match the glOrtho implementation (Thanks to orphansandoligarchs)
* _Issue 32_ Added vec3.lerp and quat4.slerp functions (Thanks to Denis Rangel)
* _Issue 33_ Fixed a (really stupid) bug in mat4.multiplyVec4 (Thanks to Jeremy Mlazarus)
* _Issue 36_ Added mat3.transpose at the suggestion of shooskx

Version 0.9.4 (1.0 RC1) (07/02/2010)
------------------------------------

* Added documentation comments to all functions
* Added mat3.identity
* Added quat4.str
* Some minor whitespace formatting to be more consistent across the file
* Updated mat4.frustum, mat4.perspective, mat4.ortho, and mat4.lookat to all return new matricies if dest is not specified
* Updated parameter names on quat4.multiply for consistency
* _Issue 1_ Changed default array type to Float32Array. WebGLFloatArray and Array still used as fallbacks.
* _Issue 16_ changed q[x] = -q[x] to q[x] *= -1 in quat4.inverse
* _Issue 17_ changed x = x / y to x /= y
* _Issue 18_ started reusing len variables instead of creating new vars for inverse length
* _Issue 23_ (In Progress) Added unit test folder, need to expand test suite. (Thanks to Drew Whitehouse)
* _Issue 24_ in mat4.lookat changed mat4.identity() to mat4.identity(dest), added quat4.create
* _Issue 25_ added dest parameter to quat4.normalize

Version 0.9.3 (06/14/2010)
--------------------------

* _Issue 14_ Removed bitshifiting optimization when it was pointed out that this method fails for non-integers

Version 0.9.2 (06/12/2010)
--------------------------

* Probably the last release before 1.0, syntax may still change.
* mat4.inverse3x3 renamed to mat4.toInverseMat3 for consistency
* Added mat4.toMat3
* Added mat3.toMat4
* Added Quaternion functions
* Started appending version numbers to the file name
* _Issue 10_ Minimized version now generated with Google's Closure Compiler
* _Issue 5_ Changed instances of var == 0 to !var
* _Issue 12_ Corrected issue with vec3.cross crossing the first vector with itself
* _Issue 13_ Optimized mat4.lookAt
* _Issue 7_ Replaced some multiplies with bit-shifts

Version 0.9 (06/05/2010)
------------------------

* Added a packed version (glMatrix-min.js)
* Merged (!dest) and (dest == src) checks where possible, and changed the inner code of these scenarios to write directly to the source matrix (saves one assignment and speeds up the check)
* Added earlier returns wherever possible
* Re-implemented inverse(), which now re-uses several calculations and can run much faster
* Rearranged some of the logic of inverse3x3() to prevent unnecessary assignments and calculations
* Corrected issue with multiplyVec3() multiplying against a transposed matrix.
* Added multiplyVec4().
* Broke special case rotation (rotation along the X, Y, or Z axis) optimizations out into their own functions: rotateX(), 'rotateY(), and rotateZ(). This speeds up both the special cases and the general case rotation. rotate() will no longer optimize the special case rotations.
* While reordering rotation code also discovered a few more minor optimizations that could be applied.
* Added mat4.lookAt() (Unoptimized)
* Added mat4.str() for debugging use.
* Added vec3.direction().

Version 0.8
-----------

* Initial Release (Because no-one wants to use a 0.1 product!)