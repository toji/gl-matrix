/* Copyright (c) 2013, Brandon Jones. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

"use strict";

var Shader = function() {
  this.vs = null;
  this.fs = null;
  this.program = null;
  this.attribute = {};
  this.uniform = {};
};

// These are the attribute locations used for every shader
// Values may overlap, but overlapping attributes cannot be used in the
// same shader
Shader.AttribLocation = {
  Position: 0,
  Normal: 1,
  Texcoord: 2
};

Shader.prototype.compile = function(gl, source, type) {
  var shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    var typeString = "";
    switch(type) {
      case gl.VERTEX_SHADER: typeString = "VERTEX_SHADER"; break;
      case gl.FRAGMENT_SHADER: typeString = "FRAGMENT_SHADER"; break;
    }
    console.error(typeString, gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return false;
  }

  switch(type) {
    case gl.VERTEX_SHADER: this.vs = shader; break;
    case gl.FRAGMENT_SHADER: this.fs = shader; break;
  }

  return true;
};

Shader.prototype.link = function(gl) {
  this.program = gl.createProgram();

  gl.attachShader(this.program, this.vs);
  gl.attachShader(this.program, this.fs);

  this.bindAttribLocations(gl);

  gl.linkProgram(this.program);

  if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
    console.error("Shader program failed to link");
    gl.deleteProgram(this.program);
    gl.deleteShader(this.vs);
    gl.deleteShader(this.fs);
    return false;
  }

  this.findAttribsAndUniforms(gl);

  return true;
};

Shader.prototype.build = function(gl, vertexShaderSource, fragmentShaderSource) {
  if(!this.compile(gl, vertexShaderSource, gl.VERTEX_SHADER))
    return false;

  if(!this.compile(gl, fragmentShaderSource, gl.FRAGMENT_SHADER))
    return false;
  
  return this.link(gl);
};

Shader.prototype.loadShaderFromUrl = function(gl, url, type, callback) {
  var self = this;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.overrideMimeType("text/plain; charset=x-user-defined");
  xhr.onload = function() {
    if(!self.compile(gl, xhr.responseText, type) && callback) {
      callback(false, self);
      return;
    }

    if(self.vs && self.fs) {
      var success = self.link(gl);
      if(callback) {
        callback(success, self);
      }
    }
  };
  xhr.send();
};

Shader.prototype.buildFromUrl = function(gl, vertexShaderUrl, fragmentShaderUrl, callback) {
  this.loadShaderFromUrl(gl, vertexShaderUrl, gl.VERTEX_SHADER, callback);
  this.loadShaderFromUrl(gl, fragmentShaderUrl, gl.FRAGMENT_SHADER, callback);
};

Shader.prototype.loadShaderFromElement = function(gl, id, type) {
    var sourceElement = document.getElementById(id);
    if (!sourceElement) {
      return false;
    }
    
    var source = "";
    var el = sourceElement.firstChild;
    while (el) {
      if (el.nodeType == 3)
          source += el.textContent;
      el = el.nextSibling;
    }
    
    if(!this.compile(gl, source, type))
        return false;

    return true;
};

Shader.prototype.buildFromElements = function(gl, vertexShaderId, fragmentShaderId) {
  if(!this.loadShaderFromElement(gl, vertexShaderId, gl.VERTEX_SHADER))
    return false;

  if(!this.loadShaderFromElement(gl, fragmentShaderId, gl.FRAGMENT_SHADER))
    return false;
  
  return this.link(gl);
};

Shader.prototype.bindAttribLocations = function(gl) {
  var attrib;
  for(attrib in Shader.AttribLocation) {
    gl.bindAttribLocation(this.program, Shader.AttribLocation[attrib], attrib);
  }
};

Shader.prototype.findAttribsAndUniforms = function(gl) {
  var i, attrib, uniform, count, name;
  count = gl.getProgramParameter(this.program, gl.ACTIVE_ATTRIBUTES);
  for (i = 0; i < count; i++) {
    attrib = gl.getActiveAttrib(this.program, i);
    this.attribute[attrib.name] = gl.getAttribLocation(this.program, attrib.name);
  }

  count = gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS);
  for (i = 0; i < count; i++) {
    uniform = gl.getActiveUniform(this.program, i);
    name = uniform.name.replace("[0]", "");
    this.uniform[name] = gl.getUniformLocation(this.program, name);
  }
};
