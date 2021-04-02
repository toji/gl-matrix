import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import { terser } from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import wasm from '@rollup/plugin-wasm';

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
    input: './loader/index.js',
    output: { file: 'dist/wasm/index.js', format: 'umd', name },
    plugins: [
      replace({ preventAssignment: true }),
      wasm({ sourceMap: true }),
    ]
  },
  {
    input: './build/loader-debug.js',
    output: { file: 'dist/gl-matrix-loader-debug.js', format: 'umd', name },
    plugins: [
      replace({ preventAssignment: true }),
      wasm({ sourceMap: true }),
      bannerPlugin
    ]
  },
  {
    input: './build/loader-release.js',
    output: { file: 'dist/gl-matrix-loader-release.js', format: 'umd', name },
    plugins: [
      replace({ preventAssignment: true }),
      wasm({ sourceMap: true }),
      bannerPlugin
    ]
  },
  {
    input,
    output: { file: 'dist/gl-matrix.js', format: 'umd', name },
    plugins: [
      replace({ preventAssignment: true }),
      typescript({ tsconfig: 'assembly/tsconfig.json'}),
      bannerPlugin
    ]
  },
  {
    input,
    output: { file: 'dist/gl-matrix-min.js', format: 'umd', name },
    plugins: [
      replace({ preventAssignment: true }),
      typescript({ tsconfig: 'assembly/tsconfig.json'}),
      terser({
        output: { comments: /^!/ }
      }),
      sizeSnapshot(),
      bannerPlugin
    ]
  }
];
