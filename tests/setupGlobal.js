import { executeGenF64 } from '../scripts/gen-f64.js';

// Creates F64 source and tests once before Vitest execution. Use the NPM script `gen64` to trigger testing reruns.
export function setup() {
   executeGenF64();
}
