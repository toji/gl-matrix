glMatrix
=======================

With the the increasing popularity of WebGL comes the need for javascript libraries that 
handle matrix and vector operations. glMatrix is designed to handle those operations at 
stupidly fast speeds!

General Matrix Operations
-------------------------
Most matrix operations share a similar format:

    mat4.operation(srcMatrix, otherOperands, destMatrix (optional));

For all functions following this format the operation will be applied to the values in srcMatrix and the result will be written into destMatrix, which will also be returned. If destMatrix is not specified the result will be written into srcMatrix, if destMatrix is specified srcMatrix will not be altered.

Any 4x4 matrix functions expect sequences at least 16 elements in length as inputs when taking a matrix.

Function Documentation
----------------------
Documentation for the individual functions can be found [here](http://toji.github.com/gl-matrix/doc/)

Examples
--------
Creating and using a perspective matrix

    var persp = mat4.create();
    mat4.perspective(45, 4/3, 1, 100, persp);
    
    gl.uniformMatrix4fv(perspectiveUniform, false, persp);

Performing multiple transforms on a matrix

    var modelView = mat4.create();
    
    mat4.identity(modelView); // Set to identity
    mat4.translate(modelView, [0, 0, -10]); // Translate back 10 units
    mat4.rotate(modelView, Math.PI/2, [0, 1, 0]); // Rotate 90 degrees around the Y axis
    mat4.scale(modelView, [2, 2, 2]); // Scale by 200%

Updating a destination matrix

    var modelViewPersp = mat4.create();

    mat4.multiply(modelView, persp, modelViewPersp); // Sets modelViewPersp to modelView * persp 

Tranforming a point

    var cameraPos = [0, 0, 0];
    var newPos = [0, 0, 0];

    mat4.multiplyVec3(modelView, cameraPos); // Result is written into cameraPos
    mat4.multiplyVec3(modelView, cameraPos, newPos); // Result is written into newPos