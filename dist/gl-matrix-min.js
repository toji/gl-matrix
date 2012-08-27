/**
 * @fileoverview gl-matrix - High performance matrix and vector operations for WebGL
 * @author Brandon Jones
 * @author Colin MacKenzie IV
 * @version 2.0.0
 */
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
(function(){"use strict";var e={};typeof exports=="undefined"?e.exports=window:e.exports=exports,function(e){var t=e.glm_invsqrt=function(){if(typeof Float32Array!="undefined"){var e=new Float32Array(1),t=new Int32Array(e.buffer);return function(n){var r=n*.5;e[0]=n,t[0]=1597463007-(t[0]>>1);var i=e[0];return i*(1.5-r*i*i)}}return function(e){return 1/Math.sqrt(e)}}(),n={};n.create=function(){return new Float32Array(2)},n.clone=function(e){var t=new Float32Array(2);return t[0]=e[0],t[1]=e[1],t},n.fromValues=function(e,t){var n=new Float32Array(2);return n[0]=e,n[1]=t,n},n.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e},n.set=function(e,t,n){return e[0]=t,e[1]=n,e},n.add=function(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e},n.sub=n.subtract=function(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e},n.mul=n.multiply=function(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e},n.div=n.divide=function(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e},n.min=function(e,t,n){return e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e},n.max=function(e,t,n){return e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e},n.scale=function(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e},n.dist=n.distance=function(e,t){var n=t[0]-e[0],r=t[1]-e[1];return Math.sqrt(n*n+r*r)},n.sqrDist=n.squaredDistance=function(e,t){var n=t[0]-e[0],r=t[1]-e[1];return n*n+r*r},n.len=n.length=function(e){var t=e[0],n=e[1];return Math.sqrt(t*t+n*n)},n.sqrLen=n.squaredLength=function(e){var t=e[0],n=e[1];return t*t+n*n},n.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e},n.normalize=function(e,t){var n=t[0]*t[0]+t[1]*t[1];return n>0&&(n=1/Math.sqrt(n),e[0]=t[0]*n,e[1]=t[1]*n),e},n.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]},n.cross=function(e,t,n){var r=t[0]*n[1]-t[1]*n[0];return e[0]=e[1]=0,e[2]=r,e},n.lerp=function(e,t,n,r){var i=t[0],s=t[1];return e[0]=i+r*(n[0]-i),e[1]=s+r*(n[1]-s),e},n.transform=function(e,t,n){var r=t[0],i=t[1];return e[0]=r*n[0]+i*n[1],e[1]=r*n[2]+i*n[3],e},n.str=function(e){return"vec2("+e[0]+", "+e[1]+")"},e.vec2=n;var r={},i=new Float32Array([1,0,0,1]);r.create=function(){return new Float32Array(i)},r.clone=function(e){var t=new Float32Array(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t},r.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e},r.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e},r.transpose=function(e,t){if(e===t){var n=t[1];e[1]=t[2],e[2]=n}else e[0]=t[0],e[1]=t[2],e[2]=t[1],e[3]=t[3];return e},r.inverse=function(e,t){var n=t[0],r=t[1],i=t[2],s=t[3],o=n*s-i*r;return o?(o=1/o,e[0]=s*o,e[1]=-r*o,e[2]=-i*o,e[3]=n*o,e):null},r.adjoint=function(e,t){var n=t[0];return e[0]=t[3],e[1]=-t[1],e[2]=-t[2],e[3]=n,e},r.determinant=function(e){return e[0]*e[3]-e[2]*e[1]},r.mul=r.multiply=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=n[0],a=n[1],f=n[2],l=n[3];return e[0]=r*u+i*f,e[1]=r*a+i*l,e[2]=s*u+o*f,e[3]=s*a+o*l,e},r.rotate=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=Math.sin(n),a=Math.cos(n);return e[0]=r*a+i*u,e[1]=r*-u+i*a,e[2]=s*a+o*u,e[3]=s*-u+o*a,e},r.scale=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=n[0],a=n[1];return e[0]=r*u,e[1]=i*a,e[2]=s*u,e[3]=o*a,e},r.str=function(e){return"mat2("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},e.mat2=r}(e.exports)})();
