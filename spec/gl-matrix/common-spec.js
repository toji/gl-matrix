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

describe("common", function() {
    describe("glm_sin", function() {
        it("should return equivalent output to Math.sin", function() { expect(glm_sin(1)).toBeCloseTo(Math.sin(1)); });
    });

    describe("glm_cos", function() {
        it("should return equivalent output to Math.cos", function() { expect(glm_cos(1)).toBeCloseTo(Math.cos(1)); });
    });

    describe("glm_tan", function() {
        it("should return equivalent output to Math.tan", function() { expect(glm_tan(1)).toBeCloseTo(Math.tan(1)); });
    });

    describe("glm_sqrt", function() {
        it("should return equivalent output to Math.tan", function() { expect(glm_sqrt(5)).toBeCloseTo(Math.sqrt(5)); });
    });

    describe("glm_invsqrt", function() {
        it("should return 1 / sqrt(n)", function() { expect(glm_invsqrt(5)).toBeCloseTo(1 / Math.sqrt(5)); });
    });
});