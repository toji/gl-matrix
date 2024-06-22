import * as esbuild from 'esbuild';
import * as fs from 'fs';
import { rollup } from 'rollup';
import { babel } from '@rollup/plugin-babel';

import { executeGenF64 } from './gen-f64.js';

// Generate 64-bit source --------------------------------------------------------------------------------------------

executeGenF64();

// ESBuild data ------------------------------------------------------------------------------------------------------

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

const bannerText = `// gl-matrix - v${pkg.version} - A high performance matrix and vector library.
// @author Brandon Jones
// @author Colin MacKenzie IV
// @license MIT (https://github.com/toji/gl-matrix/blob/master/LICENSE.md)`;

const banner = { js: bannerText };

// Add the `package.json` imports as alias mapping for ESBuild removing the leading `#`.
const alias = Object.assign({}, ...Object.keys(pkg.imports).map((key) => ({ [key]: key.slice(1) })));

// Add the `package.json` imports as external for ESBuild removing the leading `#`.
const external = Object.keys(pkg.imports).map((key) => key.slice(1));

// Bundling ----------------------------------------------------------------------------------------------------------

try {
  const promises = [];

  // Main package / sub-path exports ---------------------------------------------------------------------------------

  const mainEsbuildOptions = {
    logLevel: 'info',
    entryPoints: [
      { in: 'src/index.ts', out: 'index' },                                      // gl-matrix
      { in: 'src/classic/index.ts', out: 'classic/index' },                      // gl-matrix/classic
      { in: 'src/common/index.ts', out: 'common/index' },                        // gl-matrix/common
      { in: 'src/f64/index.ts', out: 'f64/index' },                              // gl-matrix/f64
      { in: 'src/swizzle/index.ts', out: 'swizzle/index' },                      // gl-matrix/swizzle
      { in: 'src/swizzle/f64/index.ts', out: 'swizzle/f64/index' },              // gl-matrix/swizzle/f64
      { in: 'src/types/index.ts', out: 'types/index' },                          // gl-matrix/types
      { in: 'src/types/swizzle/index.ts', out: 'types/swizzle/index' },          // gl-matrix/types
      { in: 'src/types/swizzle/f64/index.ts', out: 'types/swizzle/f64/index' },  // gl-matrix/types
      { in: 'src/util/index.ts', out: 'util/index' },                            // gl-matrix/util
    ],
    bundle: true,
    minify: false,
    sourcemap: true,
    banner,
    format: 'esm',
    outdir: 'dist',
    external,               // Do not bundle across package paths.
    alias
  };

  promises.push(esbuild.build(mainEsbuildOptions));

  // Minified main ESM bundles ------

  mainEsbuildOptions.minify = true;
  mainEsbuildOptions.outExtension = { '.js': '.min.js' };

  promises.push(esbuild.build(mainEsbuildOptions));

  // CJS bundles --------------------

  mainEsbuildOptions.minify = false;
  mainEsbuildOptions.format = 'cjs';
  mainEsbuildOptions.outExtension = { '.js': '.cjs' };

  promises.push(esbuild.build(mainEsbuildOptions));

// CDN ESM Bundles ---------------------------------------------------------------------------------------------------

  const cdnEsbuildOptions = {
    logLevel: 'info',
    entryPoints: [
      { in: 'src/cdn/index.ts', out: 'gl-matrix-f32' },     // 32-bit
      { in: 'src/cdn/f64/index.ts', out: 'gl-matrix-f64' }, // 64-bit
    ],
    bundle: true,
    minify: false,
    sourcemap: true,
    banner,
    format: 'esm',
    outdir: 'dist-cdn/esm/2022',
  };

  promises.push(esbuild.build(cdnEsbuildOptions));

  // Minified 2022 CDN bundles ------

  cdnEsbuildOptions.minify = true;
  cdnEsbuildOptions.outExtension = { '.js': '.min.js' };

  promises.push(esbuild.build(cdnEsbuildOptions));

  // Minified 2016 CDN bundles ------

  cdnEsbuildOptions.outdir = 'dist-cdn/esm/2016';
  cdnEsbuildOptions.target = 'es2016';

  promises.push(esbuild.build(cdnEsbuildOptions));

  // 2016 CDN bundles ---------------

  cdnEsbuildOptions.minify = false;
  cdnEsbuildOptions.outExtension = void 0;

  promises.push(esbuild.build(cdnEsbuildOptions));

  // Await all ESBuild promises before continuing.
  await Promise.allSettled(promises);

// Generate UMD bundles with Rollup ----------------------------------------------------------------------------------

  const rollupConfigs = [
    // ES5 / UMD CDN Release (32-bit)
    {
      input: {
        input: 'dist-cdn/esm/2016/gl-matrix-f32.js',
        plugins: [
          babel({
            babelHelpers: 'bundled',
            presets: ['@babel/preset-env']
          })
        ]
      },
      output: {
        banner: bannerText,
        file: 'dist-cdn/umd/gl-matrix-f32.js',
        format: 'umd',
        generatedCode: 'es5',
        name: 'glMatrix',
        sourcemap: true
      }
    },
    {
      input: {
        input: 'dist-cdn/esm/2016/gl-matrix-f32.min.js',
        plugins: [
          babel({
            babelHelpers: 'bundled',
            presets: ['@babel/preset-env']
          })
        ]
      },
      output: {
        banner: bannerText,
        file: 'dist-cdn/umd/gl-matrix-f32.min.js',
        format: 'umd',
        generatedCode: 'es5',
        name: 'glMatrix',
        sourcemap: true
      }
    },

    // ES5 / UMD CDN Release (64-bit)
    {
      input: {
        input: 'dist-cdn/esm/2016/gl-matrix-f64.js',
        plugins: [
          babel({
            babelHelpers: 'bundled',
            presets: ['@babel/preset-env']
          })
        ]
      },
      output: {
        banner: bannerText,
        file: 'dist-cdn/umd/gl-matrix-f64.js',
        format: 'umd',
        generatedCode: 'es5',
        name: 'glMatrixF64',
        sourcemap: true
      }
    },
    {
      input: {
        input: 'dist-cdn/esm/2016/gl-matrix-f64.min.js',
        plugins: [
          babel({
            babelHelpers: 'bundled',
            presets: ['@babel/preset-env']
          })
        ]
      },
      output: {
        banner: bannerText,
        file: 'dist-cdn/umd/gl-matrix-f64.min.js',
        format: 'umd',
        generatedCode: 'es5',
        name: 'glMatrixF64',
        sourcemap: true
      }
    }
  ];

  for (const config of rollupConfigs) {
    console.log(`Generating UMD bundle: ${config.input.input}`);

    const bundle = await rollup(config.input);
    await bundle.write(config.output);
    await bundle.close();
  }
}
catch(err) {
  console.error(err);
  process.exit(1);
}
