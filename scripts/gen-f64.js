// This script file generates a copy of the library which uses Float64Array as
// the base class for each type for greater precision.

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const SRC_F32_PATH = './src/_lib/f32';
const SRC_F64_PATH = './src/_lib/f64';

const TEST_F32_PATH = './tests/f32';
const TEST_F64_PATH = './tests/f64';

/**
 * @param {string}  srcPath - Source path.
 * @param {string}  dstPath - Destination path.
 * @param {[[RegExp, string]]}  replacement - An array of replacement pairs.
 */
function copyFileWithSearchAndReplace(srcPath, dstPath, replacement) {
  // Write out the typescript implementation to the src file.
  let srcFile = fs.readFileSync(srcPath, 'utf8');

  for (const replace of replacement) {
    srcFile = srcFile.replace(replace[0], replace[1]);
  }

  fs.writeFileSync(dstPath, srcFile);
}

function copyDir(srcDir, outDir) {
  const src_files = fs.readdirSync(srcDir);
  fs.mkdirSync(outDir, { recursive: true });

  for (const file of src_files) {
    const srcPath = path.join(srcDir, file);
    const outPath = path.join(outDir, file);
    console.log(`Copying from ${srcPath} to ${outPath}`);

    copyFileWithSearchAndReplace(srcPath, outPath, [
      [/EnableSwizzles/g, 'EnableSwizzlesF64'],
      [/Float32Array/g, 'Float64Array'],
      [/['"]#gl-matrix['"]/g, '\'#gl-matrix/f64\''],
      [/['"]#gl-matrix\/swizzle['"]/g, '\'#gl-matrix/swizzle/f64\'']
    ]);
  }
}

// Export this function to be run in Vitest global setup.
export function executeGenF64() {
  // Clean any existing files
  fs.rmSync(SRC_F64_PATH, { recursive: true, force: true });
  fs.rmSync(TEST_F64_PATH, { recursive: true, force: true });

  // Copy src
  copyDir(SRC_F32_PATH, SRC_F64_PATH);

  // Copy tests
  copyDir(TEST_F32_PATH, TEST_F64_PATH);
}

// Execute immediately when run directly by NPM run as a script.
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  executeGenF64();
}
