// This script file generates a copy of the library which uses Float64Array as
// the base class for each type for greater precision.

import * as fs from 'fs';
import * as path from 'path';

const SRC_PATH = './src';
const TEST_PATH = './tests';
const OUT_PATH = './f64';

let FILES_TO_COPY_WITHOUT_UPDATE = [
  'common.ts',
  'index.ts',
  'swizzle.ts',
]

function copyFileWithSearchAndReplace(srcPath, dstPath, searchValue, replaceValue) {
  // Write out the typescript implementation to the src file
  const srcFile = fs.readFileSync(srcPath, 'utf8');
  const updatedSrc = srcFile.replace(searchValue, replaceValue);
  fs.writeFileSync(dstPath, updatedSrc);
}

function copyDir(srcDir) {
  const src_files = fs.readdirSync(srcDir);
  fs.mkdirSync(path.join(OUT_PATH, srcDir), { recursive: true });

  for (const file of src_files) {
    const srcPath = path.join(srcDir, file);
    const outPath = path.join(OUT_PATH, srcPath);
    console.log(`Copying from ${srcPath} to ${outPath}`);

    if (FILES_TO_COPY_WITHOUT_UPDATE.includes(file)) {
      fs.copyFileSync(srcPath, outPath);
    } else {
      copyFileWithSearchAndReplace(srcPath, outPath, /Float32Array/g, 'Float64Array');
    }
  }
}

// Copy src
copyDir(SRC_PATH);

// Copy tests
copyDir(TEST_PATH);
