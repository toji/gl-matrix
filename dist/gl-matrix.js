
/*!
@fileoverview gl-matrix - High performance matrix and vector operations
@author Brandon Jones
@author Colin MacKenzie IV
@version 3.3.0

Copyright (c) 2015-2021, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function (factory) {
	typeof define === 'function' && define.amd ? define(factory) :
	factory();
}((function () { 'use strict';

	exports.__esModule = true;
	exports.vec4 = exports.vec3 = exports.vec2 = exports.quat2 = exports.quat = exports.mat4 = exports.mat3 = exports.mat2d = exports.mat2 = exports.glMatrix = void 0; /// <reference path="index.d.ts" />

	var glMatrix = require("./common");

	exports.glMatrix = glMatrix;

	var mat2 = require("./mat2");

	exports.mat2 = mat2;

	var mat2d = require("./mat2d");

	exports.mat2d = mat2d;

	var mat3 = require("./mat3");

	exports.mat3 = mat3;

	var mat4 = require("./mat4");

	exports.mat4 = mat4;

	var quat = require("./quat");

	exports.quat = quat;

	var quat2 = require("./quat2");

	exports.quat2 = quat2;

	var vec2 = require("./vec2");

	exports.vec2 = vec2;

	var vec3 = require("./vec3");

	exports.vec3 = vec3;

	var vec4 = require("./vec4");

	exports.vec4 = vec4;

})));
