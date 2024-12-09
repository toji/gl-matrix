import type * as libF32 from './gl-matrix-f32.d.cts';

declare global {
   const glMatrix: typeof libF32;
}

export {};
