/*
 * Copyright (c) 2012 Brandon Jones, Colin MacKenzie IV
 *
 * This software is provided 'as-is', without any express or implied
 * warranty. In no event will the authors be held liable for any damages
 * arising from the use of this software.
 *
 * Permission is granted to anyone to use this software for any purpose,
 * including commercial applications, and to alter it and redistribute it
 * freely, subject to the following restrictions:
 *
 *    1. The origin of this software must not be misrepresented; you must not
 *    claim that you wrote the original software. If you use this software
 *    in a product, an acknowledgment in the product documentation would be
 *    appreciated but is not required.
 *
 *    2. Altered source versions must be plainly marked as such, and must not
 *    be misrepresented as being the original software.
 *
 *    3. This notice may not be removed or altered from any source
 *    distribution.
 */
(function(){"use strict";var e={};typeof exports=="undefined"?e.exports=window:e.exports=exports,function(e){(function(){var t={};t.create=function(){return new Float32Array(2)},t.clone=function(e){var t=new Float32Array(2);return t[0]=e[0],t[1]=e[1],t},t.fromValues=function(e,t){var n=new Float32Array(2);return n[0]=e,n[1]=t,n},t.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e},t.add=function(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e},t.sub=t.subtract=function(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e},t.mul=t.multiply=function(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e},t.div=t.divide=function(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e},t.scale=function(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e},t.dist=t.distance=function(e,t){var n=t[0]-e[0],r=t[1]-e[1];return Math.sqrt(n*n+r*r)},t.sqrDist=t.squaredDistance=function(e,t){var n=t[0]-e[0],r=t[1]-e[1];return n*n+r*r},t.len=t.length=function(e){var t=e[0],n=e[1];return Math.sqrt(t*t+n*n)},t.sqrLen=t.squaredLength=function(e){var t=e[0],n=e[1];return t*t+n*n},t.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e},t.normalize=function(e,t){var n=t[0]*t[0]+t[1]*t[1];return n>0&&(n=Math.sqrt(n),e[0]=t[0]/n,e[1]=t[1]/n),e},t.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]},t.cross=function(e,t,n){var r=t[0]*n[1]-t[1]*n[0];return e[0]=e[1]=0,e[2]=r,e},t.lerp=function(e,t,n,r){var i=t[0],s=t[1];return e[0]=i+r*(n[0]-i),e[1]=s+r*(n[1]-s),e},t.str=function(e){return"vec2("+e[0]+", "+e[1]+")"},e.vec2=t})()}(e.exports)})();
