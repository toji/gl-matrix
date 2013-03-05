/*
 * Copyright (c) 2012 Brandon Jones
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

/*
 * This file contains a couple of self-contained camera classes. The cameras
 * handle user input internally and produce a view matrix that can be applied
 * to the rendered scene.
 */

"use strict";

function axisDeadzone(value) {
    return Math.abs(value) > 0.35 ? value : 0;
}

/**
 * A OrbitCamera is one that always points at a central point and orbits around at a fixed radius
 * This type of camera is good for displaying individual models
 */
var OrbitCamera = function (element) {
    this._distance = vec3.fromValues(0, 0, -32);
    this._center = vec3.create();
    this._viewMat = mat4.create();
    this._yUp = true;

    this.orbitX = 0;
    this.orbitY = 0;
    this.maxOrbitX = Math.PI * 0.5;
    this.minOrbitX = -Math.PI * 0.5;
    this.maxOrbitY = Math.PI;
    this.minOrbitY = -Math.PI;
    this.constrainXOrbit = true;
    this.constrainYOrbit = false;
    
    this.maxDistance = 512;
    this.minDistance = 16;
    this.distanceStep = 1.0;
    this.constrainDistance = true;

    this._dirty = true;

    this.element = null;

    this.initEventHandlers();

    this.hook(element);
};

OrbitCamera.prototype.initEventHandlers = function () {
    var self = this, moving = false,
        lastX, lastY;

    this.mouseDownHandler = function (event) {
        if (event.which === 1) {
            moving = true;
        }
        lastX = event.pageX;
        lastY = event.pageY;
    };

    this.mouseMoveHandler = function (event) {
        if (moving) {
            var xDelta = event.pageX  - lastX,
                yDelta = event.pageY  - lastY;

            lastX = event.pageX;
            lastY = event.pageY;

            self.orbit(xDelta * 0.025, yDelta * 0.025);
        }
    };

    this.mouseWheelHandler = function (event) {
        if(this.minDistance == this.maxDistance) { return; }
        self.setDistance(-self._distance[2] + (event.wheelDeltaY * self.distanceStep));
        event.preventDefault();
    };

    this.touchStartHandler = function (event) {
        var touches = event.touches;
        switch(touches.length) {
            case 1: // Single finger looks around
                moving = true;
                lastX = touches[0].pageX;
                lastY = touches[0].pageY;
                break;
            case 2:
                // Two fingers zoom, maybe?
                break;
            default:
                return;
        }
        event.stopPropagation();
        event.preventDefault();
    };

    this.touchMoveHandler = function(event) {
        var touches = event.touches;
        if(moving) {
            var xDelta = touches[0].pageX  - lastX,
                yDelta = touches[0].pageY  - lastY;

            lastX = touches[0].pageX;
            lastY = touches[0].pageY;

            self.orbit(xDelta * 0.005, yDelta * 0.005);
        }
        event.stopPropagation();
        event.preventDefault();
    };

    this.moveEndHandler = function (event) {
        moving = false;
        event.stopPropagation();
        event.preventDefault();
    };
};

OrbitCamera.prototype.hook = function (element) {
    if(!element) { return; }
    if(this.element) { this.unhook; }

    this.element = element;

    this.element.addEventListener('mousedown', this.mouseDownHandler, false);
    this.element.addEventListener('mousemove', this.mouseMoveHandler, false);
    this.element.addEventListener('mousewheel', this.mouseWheelHandler, false);
    this.element.addEventListener('mouseup', this.moveEndHandler, false);

    this.element.addEventListener('touchstart', this.touchStartHandler, false);
    this.element.addEventListener('touchmove', this.touchMoveHandler, false);
    this.element.addEventListener('touchend', this.moveEndHandler, false);
};

OrbitCamera.prototype.unhook = function () {
    if(!this.element) { return; }

    this.element.removeEventListener('mousedown', this.mouseDownHandler, false);
    this.element.removeEventListener('mousemove', this.mouseMoveHandler, false);
    this.element.removeEventListener('mousewheel', this.mouseWheelHandler, false);
    this.element.removeEventListener('mouseup', this.moveEndHandler, false);

    this.element.removeEventListener('touchstart', this.touchStartHandler, false);
    this.element.removeEventListener('touchmove', this.touchMoveHandler, false);
    this.element.removeEventListener('touchend', this.moveEndHandler, false);

    this.element = null;
};

OrbitCamera.prototype.orbit = function (xDelta, yDelta) {
    if(xDelta || yDelta) {

        this.orbitY += xDelta;

        if(this.constrainYOrbit) {
            this.orbitY = Math.min(Math.max(this.orbitY, this.minOrbitY), this.maxOrbitY);
        } else {
            while (this.orbitY < -Math.PI) {
                this.orbitY += Math.PI * 2;
            }
            while (this.orbitY >= Math.PI) {
                this.orbitY -= Math.PI * 2;
            }
        }

        this.orbitX += yDelta;

        if(this.constrainXOrbit) {
            this.orbitX = Math.min(Math.max(this.orbitX, this.minOrbitX), this.maxOrbitX);
        } else {
            while (this.orbitX < -Math.PI) {
                this.orbitX += Math.PI * 2;
            }
            while (this.orbitX >= Math.PI) {
                this.orbitX -= Math.PI * 2;
            }
        }

        this._dirty = true;
    }
};

OrbitCamera.prototype.getCenter = function (out) {
    return vec3.set(out, -this._center[0], -this._center[1], -this._center[2]);
};

OrbitCamera.prototype.setCenter = function (value) {
    vec3.set(this._center, -value[0], -value[1], -value[2]);
    this._dirty = true;
};

OrbitCamera.prototype.getDistance = function () {
    return -this._distance[2];
};

OrbitCamera.prototype.setDistance = function (value) {
    this._distance[2] = -value;
    if(this.constrainDistance) {
        this._distance[2] = Math.min(Math.max(-this._distance[2], this.minDistance), this.maxDistance) * -1.0;
    }
    this._dirty = true;
};

OrbitCamera.prototype.getYUp = function () {
    return this._yUp;
};

OrbitCamera.prototype.setYUp = function (value) {
    this._yUp = value;
    this._dirty = true;
};

OrbitCamera.prototype.getViewMat = function () {
    if (this._dirty) {
        var mv = this._viewMat;
        mat4.identity(mv);
        mat4.translate(mv, mv, this._distance);
        mat4.rotateX(mv, mv, this.orbitX);
        mat4.rotateY(mv, mv, this.orbitY);
        mat4.rotateX(mv, mv, -Math.PI * 0.5);
        mat4.translate(mv, mv, this._center);
        if(this._yUp) { mat4.rotateX(mv, mv, Math.PI * 0.5); }
        
        this._dirty = false;
    }

    return this._viewMat;
};

OrbitCamera.prototype.update = function () {
    var pad, i;
    for (i = 0; i < navigator.gamepads.length; ++i) {
        pad = navigator.gamepads[i];
        if(pad) {
            if(pad.id.indexOf("Space Navigator") != -1) {
                this.orbit(axisDeadzone(pad.axes[4]) * -0.05, axisDeadzone(pad.axes[3]) * -0.05);
            } else {
                this.orbit(axisDeadzone(pad.axes[0]) * 0.05, axisDeadzone(pad.axes[1]) * 0.05);
                this.orbit(axisDeadzone(pad.axes[2]) * 0.05, axisDeadzone(pad.axes[3]) * 0.05);
            }
        }
    }
};