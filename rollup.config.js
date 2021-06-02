import fs from 'fs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';

import license from './utils/license-template.js';

const { version } = JSON.parse(fs.readFileSync(new URL('./package.json', import.meta.url)));

const input = './src/index.js';
const name = 'glMatrix';

const bannerPlugin = {
  banner: `/*!
@fileoverview gl-matrix - High performance matrix and vector operations
@author Brandon Jones
@author Colin MacKenzie IV
@version ${version}

${license}

*/`
}

export default [
  {
    input,
    output: { file: 'dist/gl-matrix.js', format: 'umd', name },
    plugins: [
      bannerPlugin,
      babel()
    ]
  },
  {
    input,
    output: { file: 'dist/gl-matrix-min.js', format: 'umd', name },
    plugins: [
      bannerPlugin,
      babel(),
      sizeSnapshot(),
      terser({
        output: { comments: /^!/ }
      })
    ]
  }
];
