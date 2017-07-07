/*
* @fileoverview gl-matrix - High performance matrix and vector operations
* @author Brandon Jones
* @author Colin MacKenzie IV
* @version 2.3.2
*
* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/

import glMatrix from "./gl-matrix/common";
import mat2 from "./gl-matrix/mat2";
import mat2d from "./gl-matrix/mat2d";
import mat3 from "./gl-matrix/mat3";
import mat4 from "./gl-matrix/mat4";
import quat from "./gl-matrix/quat";
import vec2 from "./gl-matrix/vec2";
import vec3 from "./gl-matrix/vec3";
import vec4 from "./gl-matrix/vec4";

window.glMatrix = glMatrix;
window.mat2 = mat2;
window.mat2d = mat2d;
window.mat3 = mat3;
window.mat4 = mat4;
window.quat = quat;
window.vec2 = vec2;
window.vec3 = vec3;
window.vec4 = vec4;

// TODO: Ideally we'd do this instead.
/*export {
  glMatrix,
  mat2,
  mat2d,
  mat3,
  mat4,
  quat,
  vec2,
  vec3,
  vec4,
};*/