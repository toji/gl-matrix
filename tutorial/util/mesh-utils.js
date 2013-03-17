/* Copyright (c) 2013, Brandon Jones. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

"use strict";

var generateNormals = (function() {
  var a = vec3.create();
  var b = vec3.create();
  var c = vec3.create();

  var ab = vec3.create();
  var ac = vec3.create();
  var n = vec3.create();

  function getVertexFromIndex(out, vertexArray, stride, offset, index) {
    out[0] = vertexArray[(index*stride)+offset];
    out[1] = vertexArray[(index*stride)+offset+1];
    out[2] = vertexArray[(index*stride)+offset+2];
  }

  return function(vertexArray, stride, offset, count, indexArray) {
    var normalArray = new Float32Array(3 * count);

    var i, j;
    var idx0, idx1, idx2;
    var indexCount = indexArray.length;
    for(i = 0; i < indexCount; i+=3) {
      idx0 = indexArray[i];
      idx1 = indexArray[i+1];
      idx2 = indexArray[i+2];

      getVertexFromIndex(a, vertexArray, stride, offset, idx0);
      getVertexFromIndex(b, vertexArray, stride, offset, idx1);
      getVertexFromIndex(c, vertexArray, stride, offset, idx2);

      // Generate the normal
      vec3.subtract(ab, b, a);
      vec3.subtract(ac, c, a);
      vec3.cross(n, ab, ac);

      normalArray[(idx0 * 3)] += n[0];
      normalArray[(idx0 * 3)+1] += n[1];
      normalArray[(idx0 * 3)+2] += n[2];

      normalArray[(idx1 * 3)] += n[0];
      normalArray[(idx1 * 3)+1] += n[1];
      normalArray[(idx1 * 3)+2] += n[2];

      normalArray[(idx2 * 3)] += n[0];
      normalArray[(idx2 * 3)+1] += n[1];
      normalArray[(idx2 * 3)+2] += n[2];
    }

    vec3.forEach(normalArray, 3, 0, count, vec3.normalize);

    return normalArray;
  };
})();