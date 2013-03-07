/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

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

"use strict"

var activeExample = null;

// We only maintain a single WebGL canvas that gets swapped with the
// others as you move from example to example. This prevents us from
// needing to re-allocate the resources for each example, and avoids
// possible limits on canvas count in various browsers.
var glCanvas = document.createElement("canvas");
var gl = glCanvas.getContext("experimental-webgl", {preserveDrawingBuffer: true}); // TODO: More robustness, please!
gl.disable(gl.CULL_FACE);
gl.clearDepth(1.0);
gl.enable(gl.DEPTH_TEST);

var defaultShader = new Shader();
defaultShader.buildFromElements(gl, "default-vs", "default-fs");

var floorVerts = new Float32Array([
	-25, -5, -25, 0, 1, 0,
	-25, -5,  25, 0, 1, 0,
	 25, -5, -25, 0, 1, 0,

	 25, -5, -25, 0, 1, 0,
	-25, -5,  25, 0, 1, 0,
	 25, -5,  25, 0, 1, 0,
]);

var floorBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, floorBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(floorVerts), gl.STATIC_DRAW);

var cubeVerts = [
    //x    y    z  nx  ny  nz
    // Front
    -1,  1,  1,  0,  0,  1,
     1,  1,  1,  0,  0,  1,
    -1, -1,  1,  0,  0,  1,
     1, -1,  1,  0,  0,  1,
  
    //Back  
     1,  1, -1,  0,  0, -1,
    -1,  1, -1,  0,  0, -1,
     1, -1, -1,  0,  0, -1,
    -1, -1, -1,  0,  0, -1,
  
    //Left 
    -1,  1, -1, -1,  0,  0,
    -1,  1,  1, -1,  0,  0,
    -1, -1, -1, -1,  0,  0,
    -1, -1,  1, -1,  0,  0,
  
    //Right  
     1,  1,  1,  1,  0,  0,
     1,  1, -1,  1,  0,  0,
     1, -1,  1,  1,  0,  0,
     1, -1, -1,  1,  0,  0,
   
    //Top   
    -1,  1,  1,  0,  1,  0,
     1,  1,  1,  0,  1,  0,
    -1,  1, -1,  0,  1,  0,
     1,  1, -1,  0,  1,  0,
 
    //Bottom 
     1, -1,  1,  0, -1,  0,
    -1, -1,  1,  0, -1,  0,
     1, -1, -1,  0, -1,  0,
    -1, -1, -1,  0, -1,  0,
];

var cubeIndices = [
    0, 1, 2,
    2, 1, 3,

    4, 5, 6,
    6, 5, 7,

    8, 9, 10,
    10, 9, 11,

    12, 13, 14,
    14, 13, 15,

    16, 17, 18,
    18, 17, 19,

    20, 21, 22,
    22, 21, 23
];

var cubeVertBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cubeVerts), gl.STATIC_DRAW);

var cubeIndexBuffer = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeIndexBuffer);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeIndices), gl.STATIC_DRAW);

var cubeIndexCount = cubeIndices.length;

function defaultProjectionFn(out, width, height, ts) {
  var fieldOfView = Math.PI / 4; // 45 degrees 
  var aspectRatio = width / height;
  var near = 0.1;
  var far = 100.0;

  mat4.perspective(out, fieldOfView, aspectRatio, near, far);
}

function defaultTransformFn(out, time) {}

function LiveExample(element) {
	this.ts = 0;
	this.element = element;
	this.projectionFn = defaultProjectionFn;
	this.transformFn = defaultTransformFn;
  
  var codePre = this.element.querySelector("pre");

	this.image = new Image();
	this.element.insertBefore(this.image, codePre);

	var sampleCode = codePre.innerText;
	this.codeMirror = CodeMirror(function(elt) {
		codePre.parentNode.replaceChild(elt, codePre);
	}, {
		lineNumbers: true,
		matchBrackets: true,
		value: sampleCode
	});
	this.updateScript(sampleCode);
	this.originalScript = sampleCode;

	var self = this;
	
	// Script evaluation
	var timeout;
	function onScriptChange() {
		if(timeout) { clearTimeout(timeout); }

		// Rate-limit the times that we re-evaluate the example code
		timeout = setTimeout(function() {
			timeout = null;
			self.updateScript(self.codeMirror.getValue()); 
		}, 250);
	}
	this.codeMirror.on("change", onScriptChange, false);

	// Activation hooks
	function activateExample() { self.activate(); }
	function deactivateExample() { self.deactivate(); }
	
	this.image.addEventListener("mouseover", activateExample, false);
	//this.element.addEventListener("mouseout", deactivateExample, false);

	this.codeMirror.on("focus", activateExample, false);
	//this.codeMirror.on("blur", deactivateExample, false);

	this.projMat = mat4.create();
	this.modelMat = mat4.create();

	this.camera = new OrbitCamera(glCanvas);
	this.camera.maxDistance = 10;
	this.camera.minDistance = 10;
	this.camera.setDistance(10);
  this.camera.orbit(0, 0.2);
  this.camera.minOrbitX = -0.5;

	this.activate();
	this.draw(0);
	gl.finish();
	this.deactivate();
}

LiveExample.prototype.activate = function() {
	if(activeExample == this) { return; }
	
	if(activeExample) {
		activeExample.deactivate();
	}

	activeExample = this;
	this.element.replaceChild(glCanvas, this.image);
	glCanvas.width = glCanvas.clientWidth * window.devicePixelRatio;
	glCanvas.height = glCanvas.clientHeight * window.devicePixelRatio;
	gl.viewport(0, 0, glCanvas.width, glCanvas.height);
	this.camera.hook(glCanvas);
}

LiveExample.prototype.deactivate = function() {
	if(activeExample != this) { return; }
	this.image.src = glCanvas.toDataURL();
	this.element.replaceChild(this.image, glCanvas);
	this.camera.unhook();
	activeExample = null;
}

LiveExample.prototype.updateScript = function(script) {
	var wrapper = "(function() {\n\n" + script + "\n\n";
	wrapper += " 	if(typeof projection === undefined) { var projection = defaultProjectionFn; }\n";
	wrapper += " 	if(typeof transform === undefined) { var transform = defaultTransformFn; }\n";
	wrapper += "	return { projection: projection, transform: transform };\n";
	wrapper += "})();";
	
	try {
		var ret = eval(wrapper);

		if(ret) {
			this.projectionFn = ret.projection ? ret.projection : defaultProjectionFn;
			this.transformFn = ret.transform ? ret.transform : defaultTransformFn;
			return;
		}
	} catch(ex) {
		console.log(ex.message);
		// Error occurred, how to log?
	}

	this.projectionFn = defaultProjectionFn;
	this.transformFn = defaultTransformFn;
}

var floorColor = vec4.fromValues(0.8, 0.8, 0.8, 1.0);
var objColor = vec4.fromValues(1.0, 1.0, 1.0, 1.0);
var normalMat = mat3.create();

LiveExample.prototype.draw = function(frameTime) {
	this.ts += frameTime;
	var ts = this.ts;

	gl.clearColor(0.8, 0.8, 1.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.useProgram(defaultShader.program);
    
	// Update View
	this.camera.update();
	var viewMat = this.camera.getViewMat();
	gl.uniformMatrix4fv(defaultShader.uniform.viewMat, false, viewMat);

	// Update perspective
	mat4.identity(this.projMat);
	this.projectionFn(this.projMat, glCanvas.width, glCanvas.height, ts);
	gl.uniformMatrix4fv(defaultShader.uniform.projectionMat, false, this.projMat);

	// Initialize Model
	mat4.identity(this.modelMat);
	gl.uniformMatrix4fv(defaultShader.uniform.modelMat, false, this.modelMat);
    
    mat3.identity(normalMat);
    gl.uniformMatrix3fv(defaultShader.uniform.normalMat, false, normalMat);

	// Draw the floor
	gl.uniform4fv(defaultShader.uniform.color, floorColor);

	gl.bindBuffer(gl.ARRAY_BUFFER, floorBuffer);
    gl.enableVertexAttribArray(defaultShader.attribute.Position);
    gl.enableVertexAttribArray(defaultShader.attribute.Normal);
    gl.vertexAttribPointer(defaultShader.attribute.Position, 3, gl.FLOAT, false, 24, 0);
    gl.vertexAttribPointer(defaultShader.attribute.Normal, 3, gl.FLOAT, false, 24, 12);

    gl.drawArrays(gl.TRIANGLES, 0, 6);

	// Update Model
	this.transformFn(this.modelMat, ts);
	gl.uniformMatrix4fv(defaultShader.uniform.modelMat, false, this.modelMat);
    
    mat3.normalMatfromMat4(normalMat, this.modelMat);
    gl.uniformMatrix3fv(defaultShader.uniform.normalMat, false, normalMat);

	// Draw the monkey!
	gl.uniform4fv(defaultShader.uniform.color, objColor);

	gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertBuffer);
    gl.enableVertexAttribArray(defaultShader.attribute.Position);
    gl.enableVertexAttribArray(defaultShader.attribute.Normal);
    gl.vertexAttribPointer(defaultShader.attribute.Position, 3, gl.FLOAT, false, 24, 0);
    gl.vertexAttribPointer(defaultShader.attribute.Normal, 3, gl.FLOAT, false, 24, 12);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeIndexBuffer);
    gl.drawElements(gl.TRIANGLES, cubeIndexCount, gl.UNSIGNED_SHORT, 0);
}

function setupExamples() {
	var examples = document.querySelectorAll(".live-example");

	var i;
	for(i = 0; i < examples.length; ++i) {
	  var liveExample = new LiveExample(examples[i]);
	}

	webkitRequestAnimationFrame(drawLoop, glCanvas);
}

var lastTime = -1;
function drawLoop(ts) {
	webkitRequestAnimationFrame(drawLoop, glCanvas);

	if(lastTime < 0) { lastTime = ts; }
	var frameTime = ts - lastTime;
	if(activeExample) {
		activeExample.draw((frameTime / 1000) * Math.PI);
	}
	lastTime = ts;
}

// If the screen is too small (likely mobile) then don't bother with the
// live examples, they'll be too hard to see. The code examples will still
// be visible, though!
if(screen.width > 720) {
	window.addEventListener("load", setupExamples, false);
}