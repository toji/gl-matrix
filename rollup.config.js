import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import typescript from '@rollup/plugin-typescript';

const version = require('./package.json').version;
const license = require('./utils/license-template');

const input = './assembly/index.ts';
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
      typescript(),
      bannerPlugin,
      babel()
    ]
  },
  {
    input,
    output: { file: 'dist/gl-matrix-min.js', format: 'umd', name },
    plugins: [
      typescript(),
      bannerPlugin,
      babel(),
      sizeSnapshot(),
      terser({
        output: { comments: /^!/ }
      })
    ]
  }
];
