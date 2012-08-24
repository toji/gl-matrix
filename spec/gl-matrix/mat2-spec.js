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

describe("mat2", function() {
    var out, matA, matB, result;

    beforeEach(function() { matA = [1, 2, 3, 4]; vecB = [5, 6, 7, 8]; out = [0, 0, 0, 0]; });

    describe("create", function() {
        beforeEach(function() { result = mat2.create(); });
        it("should return a 4 element array initialized to a 2x2 identity matrix", function() { expect(result).toBeEqualish([1, 0, 0, 1]); });
    });

    describe("clone", function() {
        beforeEach(function() { result = mat2.clone(matA); });
        it("should return a 2 element array initialized to the values in matA", function() { expect(result).toBeEqualish(matA); });
    });

    describe("copy", function() {
        beforeEach(function() { result = mat2.copy(out, matA); });
        it("should place values into out", function() { expect(out).toBeEqualish([1, 2, 3, 4]); });
        it("should return out", function() { expect(result).toBe(out); });
    });

    describe("identity", function() {
        beforeEach(function() { result = mat2.identity(out); });
        it("should place values into out", function() { expect(result).toBeEqualish([1, 0, 0, 1]); });
        it("should return out", function() { expect(result).toBe(out); });
    });
});