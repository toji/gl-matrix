import * as esbuild from 'esbuild';
import * as fs from 'fs';
import { getFileList } from '@typhonjs-utils/file-util';

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

// ESBuild data ------------------------------------------------------------------------------------------------------

const banner = { js: `// glMatrix - v${pkg.version}` };

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

// `gl-matrix/classic` sub-path export.
esbuild.build({
  logLevel: 'info',
  entryPoints: ['dist/classic/index.js'],
  bundle: true,
  minify: false,
  sourcemap: true,
  banner,
  format: 'cjs',
  external,
  outfile: 'dist/classic/index.cjs',
}).catch(() => process.exit(1));

// `gl-matrix/common` sub-path export.
esbuild.build({
  logLevel: 'info',
  entryPoints: ['dist/common/index.js'],
  bundle: true,
  minify: false,
  sourcemap: true,
  banner,
  format: 'cjs',
  external,
  outfile: 'dist/common/index.cjs',
}).catch(() => process.exit(1));

// Main `gl-matrix` export.
esbuild.build({
  logLevel: 'info',
  entryPoints: ['dist/index.js'],
  bundle: true,
  minify: false,
  sourcemap: true,
  banner,
  format: 'cjs',
  external,
  outfile: 'dist/index.cjs',
}).catch(() => process.exit(1));

// `gl-matrix/f64` sub-path export.
esbuild.build({
  logLevel: 'info',
  entryPoints: ['dist/f64/index.js'],
  bundle: true,
  minify: false,
  sourcemap: true,
  banner,
  format: 'cjs',
  external,
  outfile: 'dist/f64/index.cjs',
}).catch(() => process.exit(1));

// `gl-matrix/swizzle` sub-path export.
esbuild.build({
  logLevel: 'info',
  entryPoints: ['dist/swizzle/index.js'],
  bundle: true,
  minify: false,
  sourcemap: true,
  banner,
  format: 'cjs',
  external,
  outfile: 'dist/swizzle/index.cjs',
}).catch(() => process.exit(1));

// `gl-matrix/swizzle/f64` sub-path export.
esbuild.build({
  logLevel: 'info',
  entryPoints: ['dist/swizzle/f64/index.js'],
  bundle: true,
  minify: false,
  sourcemap: true,
  banner,
  format: 'cjs',
  external,
  outfile: 'dist/swizzle/f64/index.cjs',
}).catch(() => process.exit(1));

// `gl-matrix/types` sub-path export.
esbuild.build({
  logLevel: 'info',
  entryPoints: ['dist/types/index.js'],
  bundle: true,
  minify: false,
  sourcemap: true,
  banner,
  format: 'cjs',
  external,
  outfile: 'dist/types/index.cjs',
}).catch(() => process.exit(1));

// `gl-matrix/types/swizzle` sub-path export.
esbuild.build({
  logLevel: 'info',
  entryPoints: ['dist/types/swizzle/index.js'],
  bundle: true,
  minify: false,
  sourcemap: true,
  banner,
  format: 'cjs',
  external,
  outfile: 'dist/types/swizzle/index.cjs',
}).catch(() => process.exit(1));

// `gl-matrix/types/swizzle/f64` sub-path export.
esbuild.build({
  logLevel: 'info',
  entryPoints: ['dist/types/swizzle/f64/index.js'],
  bundle: true,
  minify: false,
  sourcemap: true,
  banner,
  format: 'cjs',
  external,
  outfile: 'dist/types/swizzle/f64/index.cjs',
}).catch(() => process.exit(1));

// `gl-matrix/util` sub-path export.
esbuild.build({
  logLevel: 'info',
  entryPoints: ['dist/util/index.js'],
  bundle: true,
  minify: false,
  sourcemap: true,
  banner,
  format: 'cjs',
  external,
  outfile: 'dist/util/index.cjs',
}).catch(() => process.exit(1));
