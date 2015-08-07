/**
 * @fileoverview gl-matrix - High performance matrix and vector operations
 * @author Brandon Jones
 * @author Colin MacKenzie IV
 * @version 2.3.1
 */

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

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
THE SOFTWARE. */

!function(t,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define(n);else{var r=n();for(var a in r)("object"==typeof exports?exports:t)[a]=r[a]}}(this,function(){return function(t){function n(a){if(r[a])return r[a].exports;var e=r[a]={exports:{},id:a,loaded:!1};return t[a].call(e.exports,e,e.exports,n),e.loaded=!0,e.exports}var r={};return n.m=t,n.c=r,n.p="",n(0)}([function(t,n,r){n.glMatrix=r(1),n.mat2=r(2),n.mat2d=r(3),n.mat3=r(4),n.mat4=r(5),n.quat=r(6),n.vec2=r(9),n.vec3=r(7),n.vec4=r(8)},function(t,n){var r={};r.EPSILON=1e-6,r.ARRAY_TYPE="undefined"!=typeof Float32Array?Float32Array:Array,r.RANDOM=Math.random,r.SIMD_AVAILABLE=r.ARRAY_TYPE!==Array&&"SIMD"in this,r.ENABLE_SIMD=!1,r.setMatrixArrayType=function(t){r.ARRAY_TYPE=t};var a=Math.PI/180;r.toRadian=function(t){return t*a},t.exports=r},function(t,n,r){var a=r(1),e={};e.create=function(){var t=new a.ARRAY_TYPE(4);return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t},e.clone=function(t){var n=new a.ARRAY_TYPE(4);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n},e.copy=function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t},e.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t},e.transpose=function(t,n){if(t===n){var r=n[1];t[1]=n[2],t[2]=r}else t[0]=n[0],t[1]=n[2],t[2]=n[1],t[3]=n[3];return t},e.invert=function(t,n){var r=n[0],a=n[1],e=n[2],o=n[3],u=r*o-e*a;return u?(u=1/u,t[0]=o*u,t[1]=-a*u,t[2]=-e*u,t[3]=r*u,t):null},e.adjoint=function(t,n){var r=n[0];return t[0]=n[3],t[1]=-n[1],t[2]=-n[2],t[3]=r,t},e.determinant=function(t){return t[0]*t[3]-t[2]*t[1]},e.multiply=function(t,n,r){var a=n[0],e=n[1],o=n[2],u=n[3],i=r[0],c=r[1],f=r[2],s=r[3];return t[0]=a*i+o*c,t[1]=e*i+u*c,t[2]=a*f+o*s,t[3]=e*f+u*s,t},e.mul=e.multiply,e.rotate=function(t,n,r){var a=n[0],e=n[1],o=n[2],u=n[3],i=Math.sin(r),c=Math.cos(r);return t[0]=a*c+o*i,t[1]=e*c+u*i,t[2]=a*-i+o*c,t[3]=e*-i+u*c,t},e.scale=function(t,n,r){var a=n[0],e=n[1],o=n[2],u=n[3],i=r[0],c=r[1];return t[0]=a*i,t[1]=e*i,t[2]=o*c,t[3]=u*c,t},e.fromRotation=function(t,n){var r=Math.sin(n),a=Math.cos(n);return t[0]=a,t[1]=r,t[2]=-r,t[3]=a,t},e.fromScaling=function(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=n[1],t},e.str=function(t){return"mat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},e.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2))},e.LDU=function(t,n,r,a){return t[2]=a[2]/a[0],r[0]=a[0],r[1]=a[1],r[3]=a[3]-t[2]*r[1],[t,n,r]},t.exports=e},function(t,n,r){var a=r(1),e={};e.create=function(){var t=new a.ARRAY_TYPE(6);return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t},e.clone=function(t){var n=new a.ARRAY_TYPE(6);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n},e.copy=function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t},e.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t},e.invert=function(t,n){var r=n[0],a=n[1],e=n[2],o=n[3],u=n[4],i=n[5],c=r*o-a*e;return c?(c=1/c,t[0]=o*c,t[1]=-a*c,t[2]=-e*c,t[3]=r*c,t[4]=(e*i-o*u)*c,t[5]=(a*u-r*i)*c,t):null},e.determinant=function(t){return t[0]*t[3]-t[1]*t[2]},e.multiply=function(t,n,r){var a=n[0],e=n[1],o=n[2],u=n[3],i=n[4],c=n[5],f=r[0],s=r[1],l=r[2],M=r[3],h=r[4],v=r[5];return t[0]=a*f+o*s,t[1]=e*f+u*s,t[2]=a*l+o*M,t[3]=e*l+u*M,t[4]=a*h+o*v+i,t[5]=e*h+u*v+c,t},e.mul=e.multiply,e.rotate=function(t,n,r){var a=n[0],e=n[1],o=n[2],u=n[3],i=n[4],c=n[5],f=Math.sin(r),s=Math.cos(r);return t[0]=a*s+o*f,t[1]=e*s+u*f,t[2]=a*-f+o*s,t[3]=e*-f+u*s,t[4]=i,t[5]=c,t},e.scale=function(t,n,r){var a=n[0],e=n[1],o=n[2],u=n[3],i=n[4],c=n[5],f=r[0],s=r[1];return t[0]=a*f,t[1]=e*f,t[2]=o*s,t[3]=u*s,t[4]=i,t[5]=c,t},e.translate=function(t,n,r){var a=n[0],e=n[1],o=n[2],u=n[3],i=n[4],c=n[5],f=r[0],s=r[1];return t[0]=a,t[1]=e,t[2]=o,t[3]=u,t[4]=a*f+o*s+i,t[5]=e*f+u*s+c,t},e.fromRotation=function(t,n){var r=Math.sin(n),a=Math.cos(n);return t[0]=a,t[1]=r,t[2]=-r,t[3]=a,t[4]=0,t[5]=0,t},e.fromScaling=function(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=n[1],t[4]=0,t[5]=0,t},e.fromTranslation=function(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=n[0],t[5]=n[1],t},e.str=function(t){return"mat2d("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+")"},e.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+1)},t.exports=e},function(t,n,r){var a=r(1),e={};e.create=function(){var t=new a.ARRAY_TYPE(9);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},e.fromMat4=function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[4],t[4]=n[5],t[5]=n[6],t[6]=n[8],t[7]=n[9],t[8]=n[10],t},e.clone=function(t){var n=new a.ARRAY_TYPE(9);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n},e.copy=function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t},e.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},e.transpose=function(t,n){if(t===n){var r=n[1],a=n[2],e=n[5];t[1]=n[3],t[2]=n[6],t[3]=r,t[5]=n[7],t[6]=a,t[7]=e}else t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8];return t},e.invert=function(t,n){var r=n[0],a=n[1],e=n[2],o=n[3],u=n[4],i=n[5],c=n[6],f=n[7],s=n[8],l=s*u-i*f,M=-s*o+i*c,h=f*o-u*c,v=r*l+a*M+e*h;return v?(v=1/v,t[0]=l*v,t[1]=(-s*a+e*f)*v,t[2]=(i*a-e*u)*v,t[3]=M*v,t[4]=(s*r-e*c)*v,t[5]=(-i*r+e*o)*v,t[6]=h*v,t[7]=(-f*r+a*c)*v,t[8]=(u*r-a*o)*v,t):null},e.adjoint=function(t,n){var r=n[0],a=n[1],e=n[2],o=n[3],u=n[4],i=n[5],c=n[6],f=n[7],s=n[8];return t[0]=u*s-i*f,t[1]=e*f-a*s,t[2]=a*i-e*u,t[3]=i*c-o*s,t[4]=r*s-e*c,t[5]=e*o-r*i,t[6]=o*f-u*c,t[7]=a*c-r*f,t[8]=r*u-a*o,t},e.determinant=function(t){var n=t[0],r=t[1],a=t[2],e=t[3],o=t[4],u=t[5],i=t[6],c=t[7],f=t[8];return n*(f*o-u*c)+r*(-f*e+u*i)+a*(c*e-o*i)},e.multiply=function(t,n,r){var a=n[0],e=n[1],o=n[2],u=n[3],i=n[4],c=n[5],f=n[6],s=n[7],l=n[8],M=r[0],h=r[1],v=r[2],m=r[3],d=r[4],p=r[5],x=r[6],D=r[7],I=r[8];return t[0]=M*a+h*u+v*f,t[1]=M*e+h*i+v*s,t[2]=M*o+h*c+v*l,t[3]=m*a+d*u+p*f,t[4]=m*e+d*i+p*s,t[5]=m*o+d*c+p*l,t[6]=x*a+D*u+I*f,t[7]=x*e+D*i+I*s,t[8]=x*o+D*c+I*l,t},e.mul=e.multiply,e.translate=function(t,n,r){var a=n[0],e=n[1],o=n[2],u=n[3],i=n[4],c=n[5],f=n[6],s=n[7],l=n[8],M=r[0],h=r[1];return t[0]=a,t[1]=e,t[2]=o,t[3]=u,t[4]=i,t[5]=c,t[6]=M*a+h*u+f,t[7]=M*e+h*i+s,t[8]=M*o+h*c+l,t},e.rotate=function(t,n,r){var a=n[0],e=n[1],o=n[2],u=n[3],i=n[4],c=n[5],f=n[6],s=n[7],l=n[8],M=Math.sin(r),h=Math.cos(r);return t[0]=h*a+M*u,t[1]=h*e+M*i,t[2]=h*o+M*c,t[3]=h*u-M*a,t[4]=h*i-M*e,t[5]=h*c-M*o,t[6]=f,t[7]=s,t[8]=l,t},e.scale=function(t,n,r){var a=r[0],e=r[1];return t[0]=a*n[0],t[1]=a*n[1],t[2]=a*n[2],t[3]=e*n[3],t[4]=e*n[4],t[5]=e*n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t},e.fromTranslation=function(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=n[0],t[7]=n[1],t[8]=1,t},e.fromRotation=function(t,n){var r=Math.sin(n),a=Math.cos(n);return t[0]=a,t[1]=r,t[2]=0,t[3]=-r,t[4]=a,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},e.fromScaling=function(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=n[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},e.fromMat2d=function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=0,t[3]=n[2],t[4]=n[3],t[5]=0,t[6]=n[4],t[7]=n[5],t[8]=1,t},e.fromQuat=function(t,n){var r=n[0],a=n[1],e=n[2],o=n[3],u=r+r,i=a+a,c=e+e,f=r*u,s=a*u,l=a*i,M=e*u,h=e*i,v=e*c,m=o*u,d=o*i,p=o*c;return t[0]=1-l-v,t[3]=s-p,t[6]=M+d,t[1]=s+p,t[4]=1-f-v,t[7]=h-m,t[2]=M-d,t[5]=h+m,t[8]=1-f-l,t},e.normalFromMat4=function(t,n){var r=n[0],a=n[1],e=n[2],o=n[3],u=n[4],i=n[5],c=n[6],f=n[7],s=n[8],l=n[9],M=n[10],h=n[11],v=n[12],m=n[13],d=n[14],p=n[15],x=r*i-a*u,D=r*c-e*u,I=r*f-o*u,S=a*c-e*i,A=a*f-o*i,R=e*f-o*c,F=s*m-l*v,w=s*d-M*v,g=s*p-h*v,q=l*d-M*m,y=l*p-h*m,Y=M*p-h*d,E=x*Y-D*y+I*q+S*g-A*w+R*F;return E?(E=1/E,t[0]=(i*Y-c*y+f*q)*E,t[1]=(c*g-u*Y-f*w)*E,t[2]=(u*y-i*g+f*F)*E,t[3]=(e*y-a*Y-o*q)*E,t[4]=(r*Y-e*g+o*w)*E,t[5]=(a*g-r*y-o*F)*E,t[6]=(m*R-d*A+p*S)*E,t[7]=(d*I-v*R-p*D)*E,t[8]=(v*A-m*I+p*x)*E,t):null},e.str=function(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"},e.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2))},t.exports=e},function(t,n,r){var a=r(1),e={SISD:{},SIMD:{}};e.create=function(){var t=new a.ARRAY_TYPE(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},e.clone=function(t){var n=new a.ARRAY_TYPE(16);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n},e.copy=function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t},e.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},e.transpose=function(t,n){if(t===n){var r=n[1],a=n[2],e=n[3],o=n[6],u=n[7],i=n[11];t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=r,t[6]=n[9],t[7]=n[13],t[8]=a,t[9]=o,t[11]=n[14],t[12]=e,t[13]=u,t[14]=i}else t[0]=n[0],t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=n[1],t[5]=n[5],t[6]=n[9],t[7]=n[13],t[8]=n[2],t[9]=n[6],t[10]=n[10],t[11]=n[14],t[12]=n[3],t[13]=n[7],t[14]=n[11],t[15]=n[15];return t},e.invert=function(t,n){var r=n[0],a=n[1],e=n[2],o=n[3],u=n[4],i=n[5],c=n[6],f=n[7],s=n[8],l=n[9],M=n[10],h=n[11],v=n[12],m=n[13],d=n[14],p=n[15],x=r*i-a*u,D=r*c-e*u,I=r*f-o*u,S=a*c-e*i,A=a*f-o*i,R=e*f-o*c,F=s*m-l*v,w=s*d-M*v,g=s*p-h*v,q=l*d-M*m,y=l*p-h*m,Y=M*p-h*d,E=x*Y-D*y+I*q+S*g-A*w+R*F;return E?(E=1/E,t[0]=(i*Y-c*y+f*q)*E,t[1]=(e*y-a*Y-o*q)*E,t[2]=(m*R-d*A+p*S)*E,t[3]=(M*A-l*R-h*S)*E,t[4]=(c*g-u*Y-f*w)*E,t[5]=(r*Y-e*g+o*w)*E,t[6]=(d*I-v*R-p*D)*E,t[7]=(s*R-M*I+h*D)*E,t[8]=(u*y-i*g+f*F)*E,t[9]=(a*g-r*y-o*F)*E,t[10]=(v*A-m*I+p*x)*E,t[11]=(l*I-s*A-h*x)*E,t[12]=(i*w-u*q-c*F)*E,t[13]=(r*q-a*w+e*F)*E,t[14]=(m*D-v*S-d*x)*E,t[15]=(s*S-l*D+M*x)*E,t):null},e.adjoint=function(t,n){var r=n[0],a=n[1],e=n[2],o=n[3],u=n[4],i=n[5],c=n[6],f=n[7],s=n[8],l=n[9],M=n[10],h=n[11],v=n[12],m=n[13],d=n[14],p=n[15];return t[0]=i*(M*p-h*d)-l*(c*p-f*d)+m*(c*h-f*M),t[1]=-(a*(M*p-h*d)-l*(e*p-o*d)+m*(e*h-o*M)),t[2]=a*(c*p-f*d)-i*(e*p-o*d)+m*(e*f-o*c),t[3]=-(a*(c*h-f*M)-i*(e*h-o*M)+l*(e*f-o*c)),t[4]=-(u*(M*p-h*d)-s*(c*p-f*d)+v*(c*h-f*M)),t[5]=r*(M*p-h*d)-s*(e*p-o*d)+v*(e*h-o*M),t[6]=-(r*(c*p-f*d)-u*(e*p-o*d)+v*(e*f-o*c)),t[7]=r*(c*h-f*M)-u*(e*h-o*M)+s*(e*f-o*c),t[8]=u*(l*p-h*m)-s*(i*p-f*m)+v*(i*h-f*l),t[9]=-(r*(l*p-h*m)-s*(a*p-o*m)+v*(a*h-o*l)),t[10]=r*(i*p-f*m)-u*(a*p-o*m)+v*(a*f-o*i),t[11]=-(r*(i*h-f*l)-u*(a*h-o*l)+s*(a*f-o*i)),t[12]=-(u*(l*d-M*m)-s*(i*d-c*m)+v*(i*M-c*l)),t[13]=r*(l*d-M*m)-s*(a*d-e*m)+v*(a*M-e*l),t[14]=-(r*(i*d-c*m)-u*(a*d-e*m)+v*(a*c-e*i)),t[15]=r*(i*M-c*l)-u*(a*M-e*l)+s*(a*c-e*i),t},e.determinant=function(t){var n=t[0],r=t[1],a=t[2],e=t[3],o=t[4],u=t[5],i=t[6],c=t[7],f=t[8],s=t[9],l=t[10],M=t[11],h=t[12],v=t[13],m=t[14],d=t[15],p=n*u-r*o,x=n*i-a*o,D=n*c-e*o,I=r*i-a*u,S=r*c-e*u,A=a*c-e*i,R=f*v-s*h,F=f*m-l*h,w=f*d-M*h,g=s*m-l*v,q=s*d-M*v,y=l*d-M*m;return p*y-x*q+D*g+I*w-S*F+A*R},e.SIMD.multiply=function(t,n,r){var a=SIMD.Float32x4.load(r,0),e=SIMD.Float32x4.load(r,4),o=SIMD.Float32x4.load(r,8),u=SIMD.Float32x4.load(r,12),i=SIMD.Float32x4.splat(n[0]),c=SIMD.Float32x4.mul(a,i);return i=SIMD.Float32x4.splat(n[1]),c=SIMD.Float32x4.add(SIMD.Float32x4.mul(e,i),c),i=SIMD.Float32x4.splat(n[2]),c=SIMD.Float32x4.add(SIMD.Float32x4.mul(o,i),c),i=SIMD.Float32x4.splat(n[3]),c=SIMD.Float32x4.add(SIMD.Float32x4.mul(u,i),c),SIMD.Float32x4.store(t,0,c),i=SIMD.Float32x4.splat(n[4]),c=SIMD.Float32x4.mul(a,i),i=SIMD.Float32x4.splat(n[5]),c=SIMD.Float32x4.add(SIMD.Float32x4.mul(e,i),c),i=SIMD.Float32x4.splat(n[6]),c=SIMD.Float32x4.add(SIMD.Float32x4.mul(o,i),c),i=SIMD.Float32x4.splat(n[7]),c=SIMD.Float32x4.add(SIMD.Float32x4.mul(u,i),c),SIMD.Float32x4.store(t,4,c),i=SIMD.Float32x4.splat(n[8]),c=SIMD.Float32x4.mul(a,i),i=SIMD.Float32x4.splat(n[9]),c=SIMD.Float32x4.add(SIMD.Float32x4.mul(e,i),c),i=SIMD.Float32x4.splat(n[10]),c=SIMD.Float32x4.add(SIMD.Float32x4.mul(o,i),c),i=SIMD.Float32x4.splat(n[11]),c=SIMD.Float32x4.add(SIMD.Float32x4.mul(u,i),c),SIMD.Float32x4.store(t,8,c),i=SIMD.Float32x4.splat(n[12]),c=SIMD.Float32x4.mul(a,i),i=SIMD.Float32x4.splat(n[13]),c=SIMD.Float32x4.add(SIMD.Float32x4.mul(e,i),c),i=SIMD.Float32x4.splat(n[14]),c=SIMD.Float32x4.add(SIMD.Float32x4.mul(o,i),c),i=SIMD.Float32x4.splat(n[15]),c=SIMD.Float32x4.add(SIMD.Float32x4.mul(u,i),c),SIMD.Float32x4.store(t,12,c),t},e.SISD.multiply=function(t,n,r){var a=n[0],e=n[1],o=n[2],u=n[3],i=n[4],c=n[5],f=n[6],s=n[7],l=n[8],M=n[9],h=n[10],v=n[11],m=n[12],d=n[13],p=n[14],x=n[15],D=r[0],I=r[1],S=r[2],A=r[3];return t[0]=D*a+I*i+S*l+A*m,t[1]=D*e+I*c+S*M+A*d,t[2]=D*o+I*f+S*h+A*p,t[3]=D*u+I*s+S*v+A*x,D=r[4],I=r[5],S=r[6],A=r[7],t[4]=D*a+I*i+S*l+A*m,t[5]=D*e+I*c+S*M+A*d,t[6]=D*o+I*f+S*h+A*p,t[7]=D*u+I*s+S*v+A*x,D=r[8],I=r[9],S=r[10],A=r[11],t[8]=D*a+I*i+S*l+A*m,t[9]=D*e+I*c+S*M+A*d,t[10]=D*o+I*f+S*h+A*p,t[11]=D*u+I*s+S*v+A*x,D=r[12],I=r[13],S=r[14],A=r[15],t[12]=D*a+I*i+S*l+A*m,t[13]=D*e+I*c+S*M+A*d,t[14]=D*o+I*f+S*h+A*p,t[15]=D*u+I*s+S*v+A*x,t},e.multiply=a.SIMD_AVAILABLE&&a.ENABLE_SIMD?e.SIMD.multiply:e.SISD.multiply,e.mul=e.multiply,e.translate=function(t,n,r){var a,e,o,u,i,c,f,s,l,M,h,v,m=r[0],d=r[1],p=r[2];return n===t?(t[12]=n[0]*m+n[4]*d+n[8]*p+n[12],t[13]=n[1]*m+n[5]*d+n[9]*p+n[13],t[14]=n[2]*m+n[6]*d+n[10]*p+n[14],t[15]=n[3]*m+n[7]*d+n[11]*p+n[15]):(a=n[0],e=n[1],o=n[2],u=n[3],i=n[4],c=n[5],f=n[6],s=n[7],l=n[8],M=n[9],h=n[10],v=n[11],t[0]=a,t[1]=e,t[2]=o,t[3]=u,t[4]=i,t[5]=c,t[6]=f,t[7]=s,t[8]=l,t[9]=M,t[10]=h,t[11]=v,t[12]=a*m+i*d+l*p+n[12],t[13]=e*m+c*d+M*p+n[13],t[14]=o*m+f*d+h*p+n[14],t[15]=u*m+s*d+v*p+n[15]),t},e.scale=function(t,n,r){var a=r[0],e=r[1],o=r[2];return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*e,t[5]=n[5]*e,t[6]=n[6]*e,t[7]=n[7]*e,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=n[11]*o,t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t},e.rotate=function(t,n,r,e){var o,u,i,c,f,s,l,M,h,v,m,d,p,x,D,I,S,A,R,F,w,g,q,y,Y=e[0],E=e[1],P=e[2],T=Math.sqrt(Y*Y+E*E+P*P);return Math.abs(T)<a.EPSILON?null:(T=1/T,Y*=T,E*=T,P*=T,o=Math.sin(r),u=Math.cos(r),i=1-u,c=n[0],f=n[1],s=n[2],l=n[3],M=n[4],h=n[5],v=n[6],m=n[7],d=n[8],p=n[9],x=n[10],D=n[11],I=Y*Y*i+u,S=E*Y*i+P*o,A=P*Y*i-E*o,R=Y*E*i-P*o,F=E*E*i+u,w=P*E*i+Y*o,g=Y*P*i+E*o,q=E*P*i-Y*o,y=P*P*i+u,t[0]=c*I+M*S+d*A,t[1]=f*I+h*S+p*A,t[2]=s*I+v*S+x*A,t[3]=l*I+m*S+D*A,t[4]=c*R+M*F+d*w,t[5]=f*R+h*F+p*w,t[6]=s*R+v*F+x*w,t[7]=l*R+m*F+D*w,t[8]=c*g+M*q+d*y,t[9]=f*g+h*q+p*y,t[10]=s*g+v*q+x*y,t[11]=l*g+m*q+D*y,n!==t&&(t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t)},e.rotateX=function(t,n,r){var a=Math.sin(r),e=Math.cos(r),o=n[4],u=n[5],i=n[6],c=n[7],f=n[8],s=n[9],l=n[10],M=n[11];return n!==t&&(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[4]=o*e+f*a,t[5]=u*e+s*a,t[6]=i*e+l*a,t[7]=c*e+M*a,t[8]=f*e-o*a,t[9]=s*e-u*a,t[10]=l*e-i*a,t[11]=M*e-c*a,t},e.rotateY=function(t,n,r){var a=Math.sin(r),e=Math.cos(r),o=n[0],u=n[1],i=n[2],c=n[3],f=n[8],s=n[9],l=n[10],M=n[11];return n!==t&&(t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=o*e-f*a,t[1]=u*e-s*a,t[2]=i*e-l*a,t[3]=c*e-M*a,t[8]=o*a+f*e,t[9]=u*a+s*e,t[10]=i*a+l*e,t[11]=c*a+M*e,t},e.rotateZ=function(t,n,r){var a=Math.sin(r),e=Math.cos(r),o=n[0],u=n[1],i=n[2],c=n[3],f=n[4],s=n[5],l=n[6],M=n[7];return n!==t&&(t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=o*e+f*a,t[1]=u*e+s*a,t[2]=i*e+l*a,t[3]=c*e+M*a,t[4]=f*e-o*a,t[5]=s*e-u*a,t[6]=l*e-i*a,t[7]=M*e-c*a,t},e.fromTranslation=function(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t},e.fromScaling=function(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},e.fromRotation=function(t,n,r){var e,o,u,i=r[0],c=r[1],f=r[2],s=Math.sqrt(i*i+c*c+f*f);return Math.abs(s)<a.EPSILON?null:(s=1/s,i*=s,c*=s,f*=s,e=Math.sin(n),o=Math.cos(n),u=1-o,t[0]=i*i*u+o,t[1]=c*i*u+f*e,t[2]=f*i*u-c*e,t[3]=0,t[4]=i*c*u-f*e,t[5]=c*c*u+o,t[6]=f*c*u+i*e,t[7]=0,t[8]=i*f*u+c*e,t[9]=c*f*u-i*e,t[10]=f*f*u+o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)},e.fromXRotation=function(t,n){var r=Math.sin(n),a=Math.cos(n);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=r,t[7]=0,t[8]=0,t[9]=-r,t[10]=a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},e.fromYRotation=function(t,n){var r=Math.sin(n),a=Math.cos(n);return t[0]=a,t[1]=0,t[2]=-r,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=r,t[9]=0,t[10]=a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},e.fromZRotation=function(t,n){var r=Math.sin(n),a=Math.cos(n);return t[0]=a,t[1]=r,t[2]=0,t[3]=0,t[4]=-r,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},e.fromRotationTranslation=function(t,n,r){var a=n[0],e=n[1],o=n[2],u=n[3],i=a+a,c=e+e,f=o+o,s=a*i,l=a*c,M=a*f,h=e*c,v=e*f,m=o*f,d=u*i,p=u*c,x=u*f;return t[0]=1-(h+m),t[1]=l+x,t[2]=M-p,t[3]=0,t[4]=l-x,t[5]=1-(s+m),t[6]=v+d,t[7]=0,t[8]=M+p,t[9]=v-d,t[10]=1-(s+h),t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t},e.fromRotationTranslationScale=function(t,n,r,a){var e=n[0],o=n[1],u=n[2],i=n[3],c=e+e,f=o+o,s=u+u,l=e*c,M=e*f,h=e*s,v=o*f,m=o*s,d=u*s,p=i*c,x=i*f,D=i*s,I=a[0],S=a[1],A=a[2];return t[0]=(1-(v+d))*I,t[1]=(M+D)*I,t[2]=(h-x)*I,t[3]=0,t[4]=(M-D)*S,t[5]=(1-(l+d))*S,t[6]=(m+p)*S,t[7]=0,t[8]=(h+x)*A,t[9]=(m-p)*A,t[10]=(1-(l+v))*A,t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t},e.fromRotationTranslationScaleOrigin=function(t,n,r,a,e){var o=n[0],u=n[1],i=n[2],c=n[3],f=o+o,s=u+u,l=i+i,M=o*f,h=o*s,v=o*l,m=u*s,d=u*l,p=i*l,x=c*f,D=c*s,I=c*l,S=a[0],A=a[1],R=a[2],F=e[0],w=e[1],g=e[2];return t[0]=(1-(m+p))*S,t[1]=(h+I)*S,t[2]=(v-D)*S,t[3]=0,t[4]=(h-I)*A,t[5]=(1-(M+p))*A,t[6]=(d+x)*A,t[7]=0,t[8]=(v+D)*R,t[9]=(d-x)*R,t[10]=(1-(M+m))*R,t[11]=0,t[12]=r[0]+F-(t[0]*F+t[4]*w+t[8]*g),t[13]=r[1]+w-(t[1]*F+t[5]*w+t[9]*g),t[14]=r[2]+g-(t[2]*F+t[6]*w+t[10]*g),t[15]=1,t},e.fromQuat=function(t,n){var r=n[0],a=n[1],e=n[2],o=n[3],u=r+r,i=a+a,c=e+e,f=r*u,s=a*u,l=a*i,M=e*u,h=e*i,v=e*c,m=o*u,d=o*i,p=o*c;return t[0]=1-l-v,t[1]=s+p,t[2]=M-d,t[3]=0,t[4]=s-p,t[5]=1-f-v,t[6]=h+m,t[7]=0,t[8]=M+d,t[9]=h-m,t[10]=1-f-l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},e.frustum=function(t,n,r,a,e,o,u){var i=1/(r-n),c=1/(e-a),f=1/(o-u);return t[0]=2*o*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*o*c,t[6]=0,t[7]=0,t[8]=(r+n)*i,t[9]=(e+a)*c,t[10]=(u+o)*f,t[11]=-1,t[12]=0,t[13]=0,t[14]=u*o*2*f,t[15]=0,t},e.perspective=function(t,n,r,a,e){var o=1/Math.tan(n/2),u=1/(a-e);return t[0]=o/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(e+a)*u,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*e*a*u,t[15]=0,t},e.perspectiveFromFieldOfView=function(t,n,r,a){var e=Math.tan(n.upDegrees*Math.PI/180),o=Math.tan(n.downDegrees*Math.PI/180),u=Math.tan(n.leftDegrees*Math.PI/180),i=Math.tan(n.rightDegrees*Math.PI/180),c=2/(u+i),f=2/(e+o);return t[0]=c,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=f,t[6]=0,t[7]=0,t[8]=-((u-i)*c*.5),t[9]=(e-o)*f*.5,t[10]=a/(r-a),t[11]=-1,t[12]=0,t[13]=0,t[14]=a*r/(r-a),t[15]=0,t},e.ortho=function(t,n,r,a,e,o,u){var i=1/(n-r),c=1/(a-e),f=1/(o-u);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*f,t[11]=0,t[12]=(n+r)*i,t[13]=(e+a)*c,t[14]=(u+o)*f,t[15]=1,t},e.lookAt=function(t,n,r,o){var u,i,c,f,s,l,M,h,v,m,d=n[0],p=n[1],x=n[2],D=o[0],I=o[1],S=o[2],A=r[0],R=r[1],F=r[2];return Math.abs(d-A)<a.EPSILON&&Math.abs(p-R)<a.EPSILON&&Math.abs(x-F)<a.EPSILON?e.identity(t):(M=d-A,h=p-R,v=x-F,m=1/Math.sqrt(M*M+h*h+v*v),M*=m,h*=m,v*=m,u=I*v-S*h,i=S*M-D*v,c=D*h-I*M,m=Math.sqrt(u*u+i*i+c*c),m?(m=1/m,u*=m,i*=m,c*=m):(u=0,i=0,c=0),f=h*c-v*i,s=v*u-M*c,l=M*i-h*u,m=Math.sqrt(f*f+s*s+l*l),m?(m=1/m,f*=m,s*=m,l*=m):(f=0,s=0,l=0),t[0]=u,t[1]=f,t[2]=M,t[3]=0,t[4]=i,t[5]=s,t[6]=h,t[7]=0,t[8]=c,t[9]=l,t[10]=v,t[11]=0,t[12]=-(u*d+i*p+c*x),t[13]=-(f*d+s*p+l*x),t[14]=-(M*d+h*p+v*x),t[15]=1,t)},e.str=function(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"},e.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2)+Math.pow(t[9],2)+Math.pow(t[10],2)+Math.pow(t[11],2)+Math.pow(t[12],2)+Math.pow(t[13],2)+Math.pow(t[14],2)+Math.pow(t[15],2))},t.exports=e},function(t,n,r){var a=r(1),e=r(4),o=r(7),u=r(8),i={};i.create=function(){var t=new a.ARRAY_TYPE(4);return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},i.rotationTo=function(){var t=o.create(),n=o.fromValues(1,0,0),r=o.fromValues(0,1,0);return function(a,e,u){var c=o.dot(e,u);return-.999999>c?(o.cross(t,n,e),o.length(t)<1e-6&&o.cross(t,r,e),o.normalize(t,t),i.setAxisAngle(a,t,Math.PI),a):c>.999999?(a[0]=0,a[1]=0,a[2]=0,a[3]=1,a):(o.cross(t,e,u),a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=1+c,i.normalize(a,a))}}(),i.setAxes=function(){var t=e.create();return function(n,r,a,e){return t[0]=a[0],t[3]=a[1],t[6]=a[2],t[1]=e[0],t[4]=e[1],t[7]=e[2],t[2]=-r[0],t[5]=-r[1],t[8]=-r[2],i.normalize(n,i.fromMat3(n,t))}}(),i.clone=u.clone,i.fromValues=u.fromValues,i.copy=u.copy,i.set=u.set,i.identity=function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},i.setAxisAngle=function(t,n,r){r=.5*r;var a=Math.sin(r);return t[0]=a*n[0],t[1]=a*n[1],t[2]=a*n[2],t[3]=Math.cos(r),t},i.add=u.add,i.multiply=function(t,n,r){var a=n[0],e=n[1],o=n[2],u=n[3],i=r[0],c=r[1],f=r[2],s=r[3];return t[0]=a*s+u*i+e*f-o*c,t[1]=e*s+u*c+o*i-a*f,t[2]=o*s+u*f+a*c-e*i,t[3]=u*s-a*i-e*c-o*f,t},i.mul=i.multiply,i.scale=u.scale,i.rotateX=function(t,n,r){r*=.5;var a=n[0],e=n[1],o=n[2],u=n[3],i=Math.sin(r),c=Math.cos(r);return t[0]=a*c+u*i,t[1]=e*c+o*i,t[2]=o*c-e*i,t[3]=u*c-a*i,t},i.rotateY=function(t,n,r){r*=.5;var a=n[0],e=n[1],o=n[2],u=n[3],i=Math.sin(r),c=Math.cos(r);return t[0]=a*c-o*i,t[1]=e*c+u*i,t[2]=o*c+a*i,t[3]=u*c-e*i,t},i.rotateZ=function(t,n,r){r*=.5;var a=n[0],e=n[1],o=n[2],u=n[3],i=Math.sin(r),c=Math.cos(r);return t[0]=a*c+e*i,t[1]=e*c-a*i,t[2]=o*c+u*i,t[3]=u*c-o*i,t},i.calculateW=function(t,n){var r=n[0],a=n[1],e=n[2];return t[0]=r,t[1]=a,t[2]=e,t[3]=Math.sqrt(Math.abs(1-r*r-a*a-e*e)),t},i.dot=u.dot,i.lerp=u.lerp,i.slerp=function(t,n,r,a){var e,o,u,i,c,f=n[0],s=n[1],l=n[2],M=n[3],h=r[0],v=r[1],m=r[2],d=r[3];return o=f*h+s*v+l*m+M*d,0>o&&(o=-o,h=-h,v=-v,m=-m,d=-d),1-o>1e-6?(e=Math.acos(o),u=Math.sin(e),i=Math.sin((1-a)*e)/u,c=Math.sin(a*e)/u):(i=1-a,c=a),t[0]=i*f+c*h,t[1]=i*s+c*v,t[2]=i*l+c*m,t[3]=i*M+c*d,t},i.sqlerp=function(){var t=i.create(),n=i.create();return function(r,a,e,o,u,c){return i.slerp(t,a,u,c),i.slerp(n,e,o,c),i.slerp(r,t,n,2*c*(1-c)),r}}(),i.invert=function(t,n){var r=n[0],a=n[1],e=n[2],o=n[3],u=r*r+a*a+e*e+o*o,i=u?1/u:0;return t[0]=-r*i,t[1]=-a*i,t[2]=-e*i,t[3]=o*i,t},i.conjugate=function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t},i.length=u.length,i.len=i.length,i.squaredLength=u.squaredLength,i.sqrLen=i.squaredLength,i.normalize=u.normalize,i.fromMat3=function(t,n){var r,a=n[0]+n[4]+n[8];if(a>0)r=Math.sqrt(a+1),t[3]=.5*r,r=.5/r,t[0]=(n[5]-n[7])*r,t[1]=(n[6]-n[2])*r,t[2]=(n[1]-n[3])*r;else{var e=0;n[4]>n[0]&&(e=1),n[8]>n[3*e+e]&&(e=2);var o=(e+1)%3,u=(e+2)%3;r=Math.sqrt(n[3*e+e]-n[3*o+o]-n[3*u+u]+1),t[e]=.5*r,r=.5/r,t[3]=(n[3*o+u]-n[3*u+o])*r,t[o]=(n[3*o+e]+n[3*e+o])*r,t[u]=(n[3*u+e]+n[3*e+u])*r}return t},i.str=function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},t.exports=i},function(t,n,r){var a=r(1),e={};e.create=function(){var t=new a.ARRAY_TYPE(3);return t[0]=0,t[1]=0,t[2]=0,t},e.clone=function(t){var n=new a.ARRAY_TYPE(3);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n},e.fromValues=function(t,n,r){var e=new a.ARRAY_TYPE(3);return e[0]=t,e[1]=n,e[2]=r,e},e.copy=function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t},e.set=function(t,n,r,a){return t[0]=n,t[1]=r,t[2]=a,t},e.add=function(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t},e.subtract=function(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t},e.sub=e.subtract,e.multiply=function(t,n,r){return t[0]=n[0]*r[0],t[1]=n[1]*r[1],t[2]=n[2]*r[2],t},e.mul=e.multiply,e.divide=function(t,n,r){return t[0]=n[0]/r[0],t[1]=n[1]/r[1],t[2]=n[2]/r[2],t},e.div=e.divide,e.min=function(t,n,r){return t[0]=Math.min(n[0],r[0]),t[1]=Math.min(n[1],r[1]),t[2]=Math.min(n[2],r[2]),t},e.max=function(t,n,r){return t[0]=Math.max(n[0],r[0]),t[1]=Math.max(n[1],r[1]),t[2]=Math.max(n[2],r[2]),t},e.scale=function(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t},e.scaleAndAdd=function(t,n,r,a){return t[0]=n[0]+r[0]*a,t[1]=n[1]+r[1]*a,t[2]=n[2]+r[2]*a,t},e.distance=function(t,n){var r=n[0]-t[0],a=n[1]-t[1],e=n[2]-t[2];return Math.sqrt(r*r+a*a+e*e)},e.dist=e.distance,e.squaredDistance=function(t,n){var r=n[0]-t[0],a=n[1]-t[1],e=n[2]-t[2];return r*r+a*a+e*e},e.sqrDist=e.squaredDistance,e.length=function(t){var n=t[0],r=t[1],a=t[2];return Math.sqrt(n*n+r*r+a*a)},e.len=e.length,e.squaredLength=function(t){var n=t[0],r=t[1],a=t[2];return n*n+r*r+a*a},e.sqrLen=e.squaredLength,e.negate=function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t},e.neg=e.negate,e.inverse=function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t},e.normalize=function(t,n){var r=n[0],a=n[1],e=n[2],o=r*r+a*a+e*e;return o>0&&(o=1/Math.sqrt(o),t[0]=n[0]*o,t[1]=n[1]*o,t[2]=n[2]*o),t},e.dot=function(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]},e.cross=function(t,n,r){var a=n[0],e=n[1],o=n[2],u=r[0],i=r[1],c=r[2];return t[0]=e*c-o*i,t[1]=o*u-a*c,t[2]=a*i-e*u,t},e.lerp=function(t,n,r,a){var e=n[0],o=n[1],u=n[2];return t[0]=e+a*(r[0]-e),t[1]=o+a*(r[1]-o),t[2]=u+a*(r[2]-u),t},e.hermite=function(t,n,r,a,e,o){var u=o*o,i=u*(2*o-3)+1,c=u*(o-2)+o,f=u*(o-1),s=u*(3-2*o);return t[0]=n[0]*i+r[0]*c+a[0]*f+e[0]*s,t[1]=n[1]*i+r[1]*c+a[1]*f+e[1]*s,t[2]=n[2]*i+r[2]*c+a[2]*f+e[2]*s,t},e.bezier=function(t,n,r,a,e,o){var u=1-o,i=u*u,c=o*o,f=i*u,s=3*o*i,l=3*c*u,M=c*o;return t[0]=n[0]*f+r[0]*s+a[0]*l+e[0]*M,t[1]=n[1]*f+r[1]*s+a[1]*l+e[1]*M,t[2]=n[2]*f+r[2]*s+a[2]*l+e[2]*M,t},e.random=function(t,n){n=n||1;var r=2*a.RANDOM()*Math.PI,e=2*a.RANDOM()-1,o=Math.sqrt(1-e*e)*n;return t[0]=Math.cos(r)*o,t[1]=Math.sin(r)*o,t[2]=e*n,t},e.transformMat4=function(t,n,r){var a=n[0],e=n[1],o=n[2],u=r[3]*a+r[7]*e+r[11]*o+r[15];return u=u||1,t[0]=(r[0]*a+r[4]*e+r[8]*o+r[12])/u,t[1]=(r[1]*a+r[5]*e+r[9]*o+r[13])/u,t[2]=(r[2]*a+r[6]*e+r[10]*o+r[14])/u,t},e.transformMat3=function(t,n,r){var a=n[0],e=n[1],o=n[2];return t[0]=a*r[0]+e*r[3]+o*r[6],t[1]=a*r[1]+e*r[4]+o*r[7],t[2]=a*r[2]+e*r[5]+o*r[8],t},e.transformQuat=function(t,n,r){var a=n[0],e=n[1],o=n[2],u=r[0],i=r[1],c=r[2],f=r[3],s=f*a+i*o-c*e,l=f*e+c*a-u*o,M=f*o+u*e-i*a,h=-u*a-i*e-c*o;return t[0]=s*f+h*-u+l*-c-M*-i,t[1]=l*f+h*-i+M*-u-s*-c,t[2]=M*f+h*-c+s*-i-l*-u,t},e.rotateX=function(t,n,r,a){var e=[],o=[];return e[0]=n[0]-r[0],e[1]=n[1]-r[1],e[2]=n[2]-r[2],o[0]=e[0],o[1]=e[1]*Math.cos(a)-e[2]*Math.sin(a),o[2]=e[1]*Math.sin(a)+e[2]*Math.cos(a),t[0]=o[0]+r[0],t[1]=o[1]+r[1],t[2]=o[2]+r[2],t},e.rotateY=function(t,n,r,a){var e=[],o=[];return e[0]=n[0]-r[0],e[1]=n[1]-r[1],e[2]=n[2]-r[2],o[0]=e[2]*Math.sin(a)+e[0]*Math.cos(a),o[1]=e[1],o[2]=e[2]*Math.cos(a)-e[0]*Math.sin(a),t[0]=o[0]+r[0],t[1]=o[1]+r[1],t[2]=o[2]+r[2],t},e.rotateZ=function(t,n,r,a){var e=[],o=[];return e[0]=n[0]-r[0],e[1]=n[1]-r[1],e[2]=n[2]-r[2],o[0]=e[0]*Math.cos(a)-e[1]*Math.sin(a),o[1]=e[0]*Math.sin(a)+e[1]*Math.cos(a),o[2]=e[2],t[0]=o[0]+r[0],t[1]=o[1]+r[1],t[2]=o[2]+r[2],t},e.forEach=function(){var t=e.create();return function(n,r,a,e,o,u){var i,c;for(r||(r=3),a||(a=0),c=e?Math.min(e*r+a,n.length):n.length,i=a;c>i;i+=r)t[0]=n[i],t[1]=n[i+1],t[2]=n[i+2],o(t,t,u),n[i]=t[0],n[i+1]=t[1],n[i+2]=t[2];return n}}(),e.angle=function(t,n){var r=e.fromValues(t[0],t[1],t[2]),a=e.fromValues(n[0],n[1],n[2]);e.normalize(r,r),e.normalize(a,a);var o=e.dot(r,a);return o>1?0:Math.acos(o)},e.str=function(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"},t.exports=e},function(t,n,r){var a=r(1),e={};e.create=function(){var t=new a.ARRAY_TYPE(4);return t[0]=0,t[1]=0,t[2]=0,t[3]=0,t},e.clone=function(t){var n=new a.ARRAY_TYPE(4);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n},e.fromValues=function(t,n,r,e){var o=new a.ARRAY_TYPE(4);return o[0]=t,o[1]=n,o[2]=r,o[3]=e,o},e.copy=function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t},e.set=function(t,n,r,a,e){return t[0]=n,t[1]=r,t[2]=a,t[3]=e,t},e.add=function(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t},e.subtract=function(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t[3]=n[3]-r[3],t},e.sub=e.subtract,e.multiply=function(t,n,r){return t[0]=n[0]*r[0],t[1]=n[1]*r[1],t[2]=n[2]*r[2],t[3]=n[3]*r[3],t},e.mul=e.multiply,e.divide=function(t,n,r){return t[0]=n[0]/r[0],t[1]=n[1]/r[1],t[2]=n[2]/r[2],t[3]=n[3]/r[3],t},e.div=e.divide,e.min=function(t,n,r){return t[0]=Math.min(n[0],r[0]),t[1]=Math.min(n[1],r[1]),t[2]=Math.min(n[2],r[2]),t[3]=Math.min(n[3],r[3]),t},e.max=function(t,n,r){return t[0]=Math.max(n[0],r[0]),t[1]=Math.max(n[1],r[1]),t[2]=Math.max(n[2],r[2]),t[3]=Math.max(n[3],r[3]),t},e.scale=function(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t},e.scaleAndAdd=function(t,n,r,a){return t[0]=n[0]+r[0]*a,t[1]=n[1]+r[1]*a,t[2]=n[2]+r[2]*a,t[3]=n[3]+r[3]*a,t},e.distance=function(t,n){var r=n[0]-t[0],a=n[1]-t[1],e=n[2]-t[2],o=n[3]-t[3];return Math.sqrt(r*r+a*a+e*e+o*o)},e.dist=e.distance,e.squaredDistance=function(t,n){var r=n[0]-t[0],a=n[1]-t[1],e=n[2]-t[2],o=n[3]-t[3];return r*r+a*a+e*e+o*o},e.sqrDist=e.squaredDistance,e.length=function(t){var n=t[0],r=t[1],a=t[2],e=t[3];return Math.sqrt(n*n+r*r+a*a+e*e)},e.len=e.length,e.squaredLength=function(t){var n=t[0],r=t[1],a=t[2],e=t[3];return n*n+r*r+a*a+e*e},e.sqrLen=e.squaredLength,e.negate=function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=-n[3],t},e.neg=e.negate,e.inverse=function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t[3]=1/n[3],t},e.normalize=function(t,n){var r=n[0],a=n[1],e=n[2],o=n[3],u=r*r+a*a+e*e+o*o;return u>0&&(u=1/Math.sqrt(u),t[0]=r*u,t[1]=a*u,t[2]=e*u,t[3]=o*u),t},e.dot=function(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]+t[3]*n[3]},e.lerp=function(t,n,r,a){var e=n[0],o=n[1],u=n[2],i=n[3];return t[0]=e+a*(r[0]-e),t[1]=o+a*(r[1]-o),t[2]=u+a*(r[2]-u),t[3]=i+a*(r[3]-i),t},e.random=function(t,n){return n=n||1,t[0]=a.RANDOM(),t[1]=a.RANDOM(),t[2]=a.RANDOM(),t[3]=a.RANDOM(),e.normalize(t,t),e.scale(t,t,n),t},e.transformMat4=function(t,n,r){var a=n[0],e=n[1],o=n[2],u=n[3];return t[0]=r[0]*a+r[4]*e+r[8]*o+r[12]*u,t[1]=r[1]*a+r[5]*e+r[9]*o+r[13]*u,t[2]=r[2]*a+r[6]*e+r[10]*o+r[14]*u,t[3]=r[3]*a+r[7]*e+r[11]*o+r[15]*u,t},e.transformQuat=function(t,n,r){var a=n[0],e=n[1],o=n[2],u=r[0],i=r[1],c=r[2],f=r[3],s=f*a+i*o-c*e,l=f*e+c*a-u*o,M=f*o+u*e-i*a,h=-u*a-i*e-c*o;return t[0]=s*f+h*-u+l*-c-M*-i,t[1]=l*f+h*-i+M*-u-s*-c,t[2]=M*f+h*-c+s*-i-l*-u,t[3]=n[3],t},e.forEach=function(){var t=e.create();return function(n,r,a,e,o,u){var i,c;for(r||(r=4),a||(a=0),c=e?Math.min(e*r+a,n.length):n.length,i=a;c>i;i+=r)t[0]=n[i],t[1]=n[i+1],t[2]=n[i+2],t[3]=n[i+3],o(t,t,u),n[i]=t[0],n[i+1]=t[1],n[i+2]=t[2],n[i+3]=t[3];return n}}(),e.str=function(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},t.exports=e},function(t,n,r){var a=r(1),e={};e.create=function(){var t=new a.ARRAY_TYPE(2);return t[0]=0,t[1]=0,t},e.clone=function(t){var n=new a.ARRAY_TYPE(2);return n[0]=t[0],n[1]=t[1],n},e.fromValues=function(t,n){var r=new a.ARRAY_TYPE(2);return r[0]=t,r[1]=n,r},e.copy=function(t,n){return t[0]=n[0],t[1]=n[1],t},e.set=function(t,n,r){return t[0]=n,t[1]=r,t},e.add=function(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t},e.subtract=function(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t},e.sub=e.subtract,e.multiply=function(t,n,r){
return t[0]=n[0]*r[0],t[1]=n[1]*r[1],t},e.mul=e.multiply,e.divide=function(t,n,r){return t[0]=n[0]/r[0],t[1]=n[1]/r[1],t},e.div=e.divide,e.min=function(t,n,r){return t[0]=Math.min(n[0],r[0]),t[1]=Math.min(n[1],r[1]),t},e.max=function(t,n,r){return t[0]=Math.max(n[0],r[0]),t[1]=Math.max(n[1],r[1]),t},e.scale=function(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t},e.scaleAndAdd=function(t,n,r,a){return t[0]=n[0]+r[0]*a,t[1]=n[1]+r[1]*a,t},e.distance=function(t,n){var r=n[0]-t[0],a=n[1]-t[1];return Math.sqrt(r*r+a*a)},e.dist=e.distance,e.squaredDistance=function(t,n){var r=n[0]-t[0],a=n[1]-t[1];return r*r+a*a},e.sqrDist=e.squaredDistance,e.length=function(t){var n=t[0],r=t[1];return Math.sqrt(n*n+r*r)},e.len=e.length,e.squaredLength=function(t){var n=t[0],r=t[1];return n*n+r*r},e.sqrLen=e.squaredLength,e.negate=function(t,n){return t[0]=-n[0],t[1]=-n[1],t},e.neg=e.negate,e.inverse=function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t},e.normalize=function(t,n){var r=n[0],a=n[1],e=r*r+a*a;return e>0&&(e=1/Math.sqrt(e),t[0]=n[0]*e,t[1]=n[1]*e),t},e.dot=function(t,n){return t[0]*n[0]+t[1]*n[1]},e.cross=function(t,n,r){var a=n[0]*r[1]-n[1]*r[0];return t[0]=t[1]=0,t[2]=a,t},e.lerp=function(t,n,r,a){var e=n[0],o=n[1];return t[0]=e+a*(r[0]-e),t[1]=o+a*(r[1]-o),t},e.random=function(t,n){n=n||1;var r=2*a.RANDOM()*Math.PI;return t[0]=Math.cos(r)*n,t[1]=Math.sin(r)*n,t},e.transformMat2=function(t,n,r){var a=n[0],e=n[1];return t[0]=r[0]*a+r[2]*e,t[1]=r[1]*a+r[3]*e,t},e.transformMat2d=function(t,n,r){var a=n[0],e=n[1];return t[0]=r[0]*a+r[2]*e+r[4],t[1]=r[1]*a+r[3]*e+r[5],t},e.transformMat3=function(t,n,r){var a=n[0],e=n[1];return t[0]=r[0]*a+r[3]*e+r[6],t[1]=r[1]*a+r[4]*e+r[7],t},e.transformMat4=function(t,n,r){var a=n[0],e=n[1];return t[0]=r[0]*a+r[4]*e+r[12],t[1]=r[1]*a+r[5]*e+r[13],t},e.forEach=function(){var t=e.create();return function(n,r,a,e,o,u){var i,c;for(r||(r=2),a||(a=0),c=e?Math.min(e*r+a,n.length):n.length,i=a;c>i;i+=r)t[0]=n[i],t[1]=n[i+1],o(t,t,u),n[i]=t[0],n[i+1]=t[1];return n}}(),e.str=function(t){return"vec2("+t[0]+", "+t[1]+")"},t.exports=e}])});