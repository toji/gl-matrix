import wasm from './optimized.wasm';

var modules;

(async (...imports) => {
  wasm(imports).then(instance => {
    modules = instance.exports;
  });
})();

export const {
  glMatrix,
  mat2, mat2d, mat3, mat4,
  quat, quat2,
  vec2, vec3, vec4
} = modules;