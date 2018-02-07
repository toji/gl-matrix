/**
 * @fileoverview gl-matrix - High performance matrix and vector operations
 * @author Brandon Jones
 * @author Colin MacKenzie IV
 * @version 2.4.0
 */

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */
// END HEADER

import * as glMatrix from "./gl-matrix/common.js";
import * as mat2 from "./gl-matrix/mat2.js";
import * as mat2d from "./gl-matrix/mat2d.js";
import * as mat3 from "./gl-matrix/mat3.js";
import * as mat4 from "./gl-matrix/mat4.js";
import * as quat from "./gl-matrix/quat.js";
import * as vec2 from "./gl-matrix/vec2.js";
import * as vec3 from "./gl-matrix/vec3.js";
import * as vec4 from "./gl-matrix/vec4.js";

export {
  glMatrix,
  mat2, mat2d, mat3, mat4,
  quat,
  vec2, vec3, vec4,
};