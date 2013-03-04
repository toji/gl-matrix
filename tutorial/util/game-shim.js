/**
 * @fileoverview game-shim - Shims to normalize gaming-related APIs to their respective specs
 * @author Brandon Jones
 * @version 1.0
 */

/* Copyright (c) 2012, Brandon Jones. All rights reserved.

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

(function(global) {
    "use strict";

    var elementPrototype = (global.HTMLElement || global.Element)["prototype"];
    var getter;

    var GameShim = global.GameShim = {
        supports: {
            fullscreen: true,
            pointerLock: true,
            gamepad: true,
            highResTimer: true
        }
    };
    
    //=====================
    // Animation
    //=====================
    
    // window.requestAnimaionFrame, credit: Erik Moller
    // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
    (function() {
        var lastTime = 0;
        var vendors = ["webkit", "moz", "ms", "o"];
        var x;

        for(x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x]+"RequestAnimationFrame"];
        }

        window.cancelAnimationFrame = window.cancelAnimationFrame || window.cancelRequestAnimationFrame; // Check for older syntax
        for(x = 0; x < vendors.length && !window.cancelAnimationFrame; ++x) {
            window.cancelAnimationFrame = window[vendors[x]+"CancelAnimationFrame"] || window[vendors[x]+"CancelRequestAnimationFrame"];
        }

        // Manual fallbacks
        if (!window.requestAnimationFrame) {
            window.requestAnimationFrame = function(callback, element) {
                var currTime = Date.now();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                  timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };
        }

        if (!window.cancelAnimationFrame) {
            window.cancelAnimationFrame = function(id) {
                clearTimeout(id);
            };
        }
        
        // window.animationStartTime
        if(!window.animationStartTime) {
            getter = (function() {
                for(x = 0; x < vendors.length; ++x) {
                    if(window[vendors[x] + "AnimationStartTime"]) {
                        return function() { return window[vendors[x] + "AnimationStartTime"]; };
                    }
                }

                return function() { return Date.now(); };
            })();

            Object.defineProperty(window, "animationStartTime", {
                enumerable: true, configurable: false, writeable: false,
                get: getter
            });
        }
    }());
    
    //=====================
    // Fullscreen
    //=====================
    
    // document.fullscreenEnabled
    if(!document.hasOwnProperty("fullscreenEnabled")) {
        getter = (function() {
            // These are the functions that match the spec, and should be preferred
            if("webkitIsFullScreen" in document) {
                return function() { return document.webkitFullscreenEnabled; };
            }
            if("mozFullScreenEnabled" in document) {
                return function() { return document.mozFullScreenEnabled; };
            }

            GameShim.supports.fullscreen = false;
            return function() { return false; }; // not supported, never fullscreen
        })();
        
        Object.defineProperty(document, "fullscreenEnabled", {
            enumerable: true, configurable: false, writeable: false,
            get: getter
        });
    }
    
    if(!document.hasOwnProperty("fullscreenElement")) {
        getter = (function() {
            // These are the functions that match the spec, and should be preferred
            var i=0, name=["webkitCurrentFullScreenElement", "webkitFullscreenElement", "mozFullScreenElement"];
            for (; i<name.length; i++)
            {
                if (name[i] in document)
                {
                    return function() { return document[name[i]]; };
                }
            }
            return function() { return null; }; // not supported
        })();
        
        Object.defineProperty(document, "fullscreenElement", {
            enumerable: true, configurable: false, writeable: false,
            get: getter
        });
    }
    
    // Document event: fullscreenchange
    function fullscreenchange(oldEvent) {
        var newEvent = document.createEvent("CustomEvent");
        newEvent.initCustomEvent("fullscreenchange", true, false, null);
        // TODO: Any need for variable copy?
        document.dispatchEvent(newEvent);
    }
    document.addEventListener("webkitfullscreenchange", fullscreenchange, false);
    document.addEventListener("mozfullscreenchange", fullscreenchange, false);
    
    // Document event: fullscreenerror
    function fullscreenerror(oldEvent) {
        var newEvent = document.createEvent("CustomEvent");
        newEvent.initCustomEvent("fullscreenerror", true, false, null);
        // TODO: Any need for variable copy?
        document.dispatchEvent(newEvent);
    }
    document.addEventListener("webkitfullscreenerror", fullscreenerror, false);
    document.addEventListener("mozfullscreenerror", fullscreenerror, false);
    
    // element.requestFullScreen
    if(!elementPrototype.requestFullscreen) {
        elementPrototype.requestFullscreen = (function() {
            if(elementPrototype.webkitRequestFullScreen) {
                return function() {
                    this.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
                };
            }

            if(elementPrototype.mozRequestFullScreen) {
                return function() {
                    this.mozRequestFullScreen();
                };
            }
            
            return function(){ /* unsupported, fail silently */ };
        })();
    }
    
    // document.exitFullscreen
    if(!document.exitFullscreen) {
        document.exitFullscreen = (function() {
            return  document.webkitExitFullscreen ||
                    document.mozCancelFullScreen ||
                    function(){ /* unsupported, fail silently */ };
        })();
    }
    
    //=====================
    // Pointer Lock
    //=====================
    
    var mouseEventPrototype = global.MouseEvent.prototype;
    
    if(!("movementX" in mouseEventPrototype)) {
        Object.defineProperty(mouseEventPrototype, "movementX", {
            enumerable: true, configurable: false, writeable: false,
            get: function() { return this.webkitMovementX || this.mozMovementX || 0; }
        });
    }
    
    if(!("movementY" in mouseEventPrototype)) {
        Object.defineProperty(mouseEventPrototype, "movementY", {
            enumerable: true, configurable: false, writeable: false,
            get: function() { return this.webkitMovementY || this.mozMovementY || 0; }
        });
    }
    
    // Navigator pointer is not the right interface according to spec.
    // Here for backwards compatibility only
    if(!navigator.pointer) {
        navigator.pointer = navigator.webkitPointer || navigator.mozPointer;
    }

    // Document event: pointerlockchange
    function pointerlockchange(oldEvent) {
        var newEvent = document.createEvent("CustomEvent");
        newEvent.initCustomEvent("pointerlockchange", true, false, null);
        document.dispatchEvent(newEvent);
    }
    document.addEventListener("webkitpointerlockchange", pointerlockchange, false);
    document.addEventListener("webkitpointerlocklost", pointerlockchange, false);
    document.addEventListener("mozpointerlockchange", pointerlockchange, false);
    document.addEventListener("mozpointerlocklost", pointerlockchange, false);

    // Document event: pointerlockerror
    function pointerlockerror(oldEvent) {
        var newEvent = document.createEvent("CustomEvent");
        newEvent.initCustomEvent("pointerlockerror", true, false, null);
        document.dispatchEvent(newEvent);
    }
    document.addEventListener("webkitpointerlockerror", pointerlockerror, false);
    document.addEventListener("mozpointerlockerror", pointerlockerror, false);
    
    if(!document.hasOwnProperty("pointerLockElement")) {
        getter = (function() {
            // These are the functions that match the spec, and should be preferred
            if("webkitPointerLockElement" in document) {
                return function() { return document.webkitPointerLockElement; };
            }
            if("mozPointerLockElement" in document) {
                return function() { return document.mozPointerLockElement; };
            }
            return function() { return null; }; // not supported
        })();
        
        Object.defineProperty(document, "pointerLockElement", {
            enumerable: true, configurable: false, writeable: false,
            get: getter
        });
    }
    
    // element.requestPointerLock
    if(!elementPrototype.requestPointerLock) {
        elementPrototype.requestPointerLock = (function() {
            if(elementPrototype.webkitRequestPointerLock) {
                return function() {
                    this.webkitRequestPointerLock();
                };
            }

            if(elementPrototype.mozRequestPointerLock) {
                return function() {
                    this.mozRequestPointerLock();
                };
            }

            if(navigator.pointer) {
                return function() {
                    var elem = this;
                    navigator.pointer.lock(elem, pointerlockchange, pointerlockerror);
                };
            }

            GameShim.supports.pointerLock = false;

            return function(){}; // not supported
        })();
    }
    
    // document.exitPointerLock
    if(!document.exitPointerLock) {
        document.exitPointerLock = (function() {
            return  document.webkitExitPointerLock ||
                    document.mozExitPointerLock ||
                    function(){
                        if(navigator.pointer) {
                            var elem = this;
                            navigator.pointer.unlock();
                        }
                    };
        })();
    }
    
    //=====================
    // Gamepad
    //=====================
    
    if(!navigator.gamepads) {
        getter = (function() {
            // These are the functions that match the spec, and should be preferred
            if("webkitGamepads" in navigator) {
                return function() { return navigator.webkitGamepads; };
            }
            if("mozGamepads" in navigator) {
                return function() { return navigator.mozGamepads; };
            }
            
            GameShim.supports.gamepad = false;
            var gamepads = [];
            return function() { return gamepads; }; // not supported, return empty array
        })();
        
        Object.defineProperty(navigator, "gamepads", {
            enumerable: true, configurable: false, writeable: false,
            get: getter
        });
    }

    //=======================
    // High Resolution Timer
    //=======================

    if(!window.performance) {
        window.performance = {};
    }

    if(!window.performance.timing) {
        window.performance.timing = {
            navigationStart: Date.now() // Terrible approximation, I know. Sorry.
        };
    }

    if(!window.performance.now) {
        window.performance.now = (function() {
            // FYI: Mozilla supports high-res timers without prefixes.

            if(window.performance.webkitNow) {
                return window.performance.webkitNow;
            }

            GameShim.supports.highResTimer = false;

            return function(){ // not supported, return a low-resolution approximation
                return Date.now() - window.performance.timing.navigationStart;
            };
        })();
    }
    
})((typeof(exports) != 'undefined') ? global : window); // Account for CommonJS environments
