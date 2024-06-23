[![NPM Version](https://img.shields.io/npm/v/gl-matrix.svg)](https://www.npmjs.com/package/gl-matrix)
[![License](https://img.shields.io/badge/license-MIT-yellowgreen.svg?style=flat)](https://github.com/typhonjs-svelte/trie-search/blob/main/LICENSE)
[![Build Status](https://github.com/toji/gl-matrix/workflows/CI/CD/badge.svg)](#)
[![Coverage](https://img.shields.io/codecov/c/github/toji/gl-matrix.svg)](https://codecov.io/github/toji/gl-matrix)
[![API Docs](https://img.shields.io/badge/API%20Documentation-476ff0)](https://glmatrix.net/docs/v4/)

`gl-matrix` is a versatile and high-performance JavaScript / TypeScript library for vector and matrix operations,
optimized for real-time 3D graphics APIs such as WebGL and WebGPU.

This documentation resource separates the CDN / pre-built distribution resources from the main Node distribution API
documentation. Additional, information regarding using `gl-matrix` with modern ESM CDNs and capabilities such as
[import maps](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap) and enabling type
declarations when developing web apps with the CDN resources is forthcoming, so stay tuned as these docs will be updated
in the next beta release.

---

There are multiple distribution methods to utilize `gl-matrix` from legacy module systems like
[RequireJS](https://requirejs.org/) to modern ES Module (ESM) oriented CDNs. If you are not using Node / NPM and
bundling `gl-matrix` directly into your project / product various pre-built versions are available on most CDNs that
automatically make NPM package available for consumption online in a web application deployment.

Pre-built ESM and ES5 / UMD bundles are available in the `/dist-cdn` directory checked into the `gl-matrix` repo.
The `gl-matrix/cdn` and `gl-matrix/cdn/f64` exports are linked to the types and pre-built all-inclusive CDN ESM
bundles. `gl-matrix/types/cdn/umd` and `gl-matrix/types/cdn/umd/64` provide type declarations for the UMD bundles when
used as an `IIFE`.



