[![NPM Version](https://img.shields.io/npm/v/gl-matrix.svg)](https://www.npmjs.com/package/gl-matrix)
[![License](https://img.shields.io/badge/license-MIT-yellowgreen.svg?style=flat)](https://github.com/typhonjs-svelte/trie-search/blob/main/LICENSE)
[![Build Status](https://github.com/toji/gl-matrix/workflows/CI/CD/badge.svg)](#)
[![Coverage](https://img.shields.io/codecov/c/github/toji/gl-matrix.svg)](https://codecov.io/github/toji/gl-matrix)
[![API Docs](https://img.shields.io/badge/API%20Documentation-476ff0)](https://glmatrix.net/docs/v4/)

`gl-matrix` is a versatile and high-performance JavaScript / TypeScript library for vector and matrix operations,
optimized for real-time 3D graphics APIs such as WebGL and WebGPU.

Javascript has evolved into a language capable of handling realtime 3D graphics and computationally intensive tasks such
as physics simulations. These types of applications demand high performance vector and matrix math which is something
that Javascript doesn't provide by default. `gl-matrix` to the rescue!

`gl-matrix` is designed to perform vector and matrix operations stupidly fast! By hand-tuning each function for maximum
performance and encouraging efficient usage patterns through API conventions `gl-matrix` will help you get the most out
of your Javascript engine in the browser or preferred Javascript runtime.

## What's new in 4.0?
`gl-matrix` 4.0 is the result of a lot of excellent feedback from the community, and features:

- Revamped and consistent API (not backward compatible with 3.x, see: Classic API)
- Even more optimizations!
- Written in Typescript.
- A cleaner code base, broken up by type.
- A more complete unit testing suite.
