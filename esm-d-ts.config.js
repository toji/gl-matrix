/**
 * Generates bundled type declaration for main and all sub-path exports: classic / common / f64 / swizzle, etc.
 */

// Enables handling `imports` from `package.json` as local package paths transforming them and marking them external in
// bundling.
const importsLocal = true;

// The ambient module declaration names need explicit replacement. This option performs a regex replacement on the
// final bundle.
const dtsReplace = { '#gl-matrix': 'gl-matrix' };

// The ambient module declarations are repurposed for the all-inclusive CDN bundles and the `declare module` wrapper
// needs to be removed.
const dtsReplaceCDN = { "declare module '[^']*' \\{([\\s\\S]*?)^\\}": '$1' };

/** @type {import('@typhonjs-build-test/esm-d-ts').GenerateConfig[]} */
const configs = [
   // Bundles main and all sub-path export types configured in `package.json` exports.
   { input: './src/index.ts', output: './dist/index.d.mts', importsLocal },
   { input: './src/classic/index.ts', output: './dist/classic/index.d.mts', importsLocal },
   { input: './src/common/index.ts', output: './dist/common/index.d.mts', importsLocal },
   { input: './src/f64/index.ts', output: './dist/f64/index.d.mts', importsLocal },
   { input: './src/swizzle/index.ts', output: './dist/swizzle/index.d.mts', importsLocal },
   { input: './src/swizzle/f64/index.ts', output: './dist/swizzle/f64/index.d.mts', importsLocal },
   { input: './src/types/index.ts', output: './dist/types/index.d.mts', importsLocal },
   { input: './src/types/swizzle/index.ts', output: './dist/types/swizzle/index.d.mts', importsLocal, dtsReplace },
   { input: './src/types/swizzle/f64/index.ts', output: './dist/types/swizzle/f64/index.d.mts', importsLocal, dtsReplace },
   { input: './src/util/index.ts', output: './dist/util/index.d.mts', importsLocal },

   // Bundles CDN types.
   { input: './src/cdn/index.ts', output: './dist-cdn/types/gl-matrix-f32.d.mts', dtsReplace: dtsReplaceCDN  },
   { input: './src/cdn/f64/index.ts', output: './dist-cdn/types/gl-matrix-f64.d.mts', dtsReplace: dtsReplaceCDN }
];

export default configs;
