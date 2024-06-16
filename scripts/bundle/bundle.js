import * as esbuild from 'esbuild';
import * as fs from 'fs';
import { rollup } from 'rollup';
import { babel } from '@rollup/plugin-babel';
import { getFileList } from '@typhonjs-utils/file-util';

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

// ESBuild data ------------------------------------------------------------------------------------------------------

const bannerText = `// glMatrix - v${pkg.version}`;

const banner = { js: bannerText };

// Add the `package.json` imports as external for ESBuild removing the leading `#`.
const external = Object.keys(pkg.imports ?? {}).map((key) => key.slice(1));

// Rewrite `imports` from `package.json` with actual main / sub-path export path. ------------------------------------

// Retrieve a list of all `*.js` files from `./dist` and subdirectories.
const list = await getFileList({ dir: './dist', includeFile: /\.js$/, walk: true });

// Replace all instances of `#gl-matrix` with `gl-matrix` and add leading banner.
for (const file of list) {
   const filepath = `./dist/${file}`;
   let srcFile = fs.readFileSync(filepath, 'utf8');
   srcFile = srcFile.replaceAll('#gl-matrix', 'gl-matrix');
   fs.writeFileSync(filepath, `${banner.js}\n${srcFile}`);
}

// Common JS Bundles -------------------------------------------------------------------------------------------------

try {
  const promises = [];

  // `gl-matrix/classic` sub-path export.
  promises.push(esbuild.build({
    logLevel: 'info',
    entryPoints: ['dist/classic/index.js'],
    bundle: true,
    minify: false,
    sourcemap: true,
    banner,
    format: 'cjs',
    external,
    outfile: 'dist/classic/index.cjs',
  }));

  // `gl-matrix/common` sub-path export.
  promises.push(esbuild.build({
    logLevel: 'info',
    entryPoints: ['dist/common/index.js'],
    bundle: true,
    minify: false,
    sourcemap: true,
    banner,
    format: 'cjs',
    external,
    outfile: 'dist/common/index.cjs',
  }));

  // Main `gl-matrix` export.
  promises.push(esbuild.build({
    logLevel: 'info',
    entryPoints: ['dist/index.js'],
    bundle: true,
    minify: false,
    sourcemap: true,
    banner,
    format: 'cjs',
    external,
    outfile: 'dist/index.cjs',
  }));

  // `gl-matrix/f64` sub-path export.
  promises.push(esbuild.build({
    logLevel: 'info',
    entryPoints: ['dist/f64/index.js'],
    bundle: true,
    minify: false,
    sourcemap: true,
    banner,
    format: 'cjs',
    external,
    outfile: 'dist/f64/index.cjs',
  }));

  // `gl-matrix/swizzle` sub-path export.
  promises.push(esbuild.build({
    logLevel: 'info',
    entryPoints: ['dist/swizzle/index.js'],
    bundle: true,
    minify: false,
    sourcemap: true,
    banner,
    format: 'cjs',
    external,
    outfile: 'dist/swizzle/index.cjs',
  }));

  // `gl-matrix/swizzle/f64` sub-path export.
  promises.push(esbuild.build({
    logLevel: 'info',
    entryPoints: ['dist/swizzle/f64/index.js'],
    bundle: true,
    minify: false,
    sourcemap: true,
    banner,
    format: 'cjs',
    external,
    outfile: 'dist/swizzle/f64/index.cjs',
  }));

  // `gl-matrix/types` sub-path export.
  promises.push(esbuild.build({
    logLevel: 'info',
    entryPoints: ['dist/types/index.js'],
    bundle: true,
    minify: false,
    sourcemap: true,
    banner,
    format: 'cjs',
    external,
    outfile: 'dist/types/index.cjs',
  }));

  // `gl-matrix/types/swizzle` sub-path export.
  promises.push(esbuild.build({
    logLevel: 'info',
    entryPoints: ['dist/types/swizzle/index.js'],
    bundle: true,
    minify: false,
    sourcemap: true,
    banner,
    format: 'cjs',
    external,
    outfile: 'dist/types/swizzle/index.cjs',
  }));

  // `gl-matrix/types/swizzle/f64` sub-path export.
  promises.push(esbuild.build({
    logLevel: 'info',
    entryPoints: ['dist/types/swizzle/f64/index.js'],
    bundle: true,
    minify: false,
    sourcemap: true,
    banner,
    format: 'cjs',
    external,
    outfile: 'dist/types/swizzle/f64/index.cjs',
  }));

  // `gl-matrix/util` sub-path export.
  promises.push(esbuild.build({
    logLevel: 'info',
    entryPoints: ['dist/util/index.js'],
    bundle: true,
    minify: false,
    sourcemap: true,
    banner,
    format: 'cjs',
    external,
    outfile: 'dist/util/index.cjs',
  }));

// CDN ESM Bundles ---------------------------------------------------------------------------------------------------

// ESM 2022 ------------------------------------------

  // 2022 Standard Release (Float32)
  promises.push(esbuild.build({
    logLevel: 'info',
    entryPoints: ['scripts/bundle/cdn-entry-f32.ts'],
    bundle: true,
    minify: false,
    sourcemap: true,
    banner,
    format: 'esm',
    outfile: 'dist-cdn/esm/2022/gl-matrix-f32.js',
  }));

  // 2022 Standard Release (Float32) Minified
  promises.push(esbuild.build({
    logLevel: 'info',
    entryPoints: ['scripts/bundle/cdn-entry-f32.ts'],
    bundle: true,
    minify: true,
    sourcemap: true,
    banner,
    format: 'esm',
    outfile: 'dist-cdn/esm/2022/gl-matrix-f32.min.js',
  }));

  // 2022 Standard Release (Float64)
  promises.push(esbuild.build({
    logLevel: 'info',
    entryPoints: ['scripts/bundle/cdn-entry-f64.ts'],
    bundle: true,
    minify: false,
    sourcemap: true,
    banner,
    format: 'esm',
    outfile: 'dist-cdn/esm/2022/gl-matrix-f64.js',
  }));

  // 2022 Standard Release (Float64) Minified
  promises.push(esbuild.build({
    logLevel: 'info',
    entryPoints: ['scripts/bundle/cdn-entry-f64.ts'],
    bundle: true,
    minify: true,
    sourcemap: true,
    banner,
    format: 'esm',
    outfile: 'dist-cdn/esm/2022/gl-matrix-f64.min.js',
  }));

// ESM 2016 / ES6 ------------------------------------

  // ES6 Standard Release (Float32)
  promises.push(esbuild.build({
    logLevel: 'info',
    entryPoints: ['scripts/bundle/cdn-entry-f32.ts'],
    bundle: true,
    minify: false,
    sourcemap: true,
    target: 'es2016',
    banner,
    format: 'esm',
    outfile: 'dist-cdn/esm/2016/gl-matrix-f32.js',
  }));

  // ES6 Standard Release (Float32) Minified
  promises.push(esbuild.build({
    logLevel: 'info',
    entryPoints: ['scripts/bundle/cdn-entry-f32.ts'],
    bundle: true,
    minify: true,
    sourcemap: true,
    target: 'es2016',
    banner,
    format: 'esm',
    outfile: 'dist-cdn/esm/2016/gl-matrix-f32.min.js',
  }));

  // ES6 Standard Release (Float64)
  promises.push(esbuild.build({
    logLevel: 'info',
    entryPoints: ['scripts/bundle/cdn-entry-f64.ts'],
    bundle: true,
    minify: false,
    sourcemap: true,
    target: 'es2016',
    banner,
    format: 'esm',
    outfile: 'dist-cdn/esm/2016/gl-matrix-f64.js',
  }));

  // ES6 Standard Release (Float64) Minified
  promises.push(esbuild.build({
    logLevel: 'info',
    entryPoints: ['scripts/bundle/cdn-entry-f64.ts'],
    bundle: true,
    minify: true,
    sourcemap: true,
    target: 'es2016',
    banner,
    format: 'esm',
    outfile: 'dist-cdn/esm/2016/gl-matrix-f64.min.js',
  }));

  await Promise.allSettled(promises);

// Generate UMD bundles with Rollup ------------------

  const rollupConfigs = [
    // ES5 / UMD CDN Release (Float32)
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
        file: 'dist-cdn/umd/gl-matrix-f32.cjs',
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
        file: 'dist-cdn/umd/gl-matrix-f32.min.cjs',
        format: 'umd',
        generatedCode: 'es5',
        name: 'glMatrix',
        sourcemap: true
      }
    },

    // ES5 / UMD CDN Release (Float64)
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
        file: 'dist-cdn/umd/gl-matrix-f64.cjs',
        format: 'umd',
        generatedCode: 'es5',
        name: 'glMatrix',
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
        file: 'dist-cdn/umd/gl-matrix-f64.min.cjs',
        format: 'umd',
        generatedCode: 'es5',
        name: 'glMatrix',
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

