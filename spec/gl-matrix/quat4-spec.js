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

describe("quat4", function() {
    var out, quatA, quatB, result;

    beforeEach(function() { quatA = [1, 2, 3, 4]; quatB = [5, 6, 7, 8]; out = [0, 0, 0, 0]; });

    describe("create", function() {
        beforeEach(function() { result = quat4.create(); });
        it("should return a 4 element array initialized to an identity quaternion", function() { expect(result).toBeEqualish([0, 0, 0, 1]); });
    });

    describe("clone", function() {
        beforeEach(function() { result = quat4.clone(quatA); });
        it("should return a 4 element array initialized to the values in quatA", function() { expect(result).toBeEqualish(quatA); });
    });

    describe("fromValues", function() {
        beforeEach(function() { result = quat4.fromValues(1, 2, 3, 4); });
        it("should return a 4 element array initialized to the values passed", function() { expect(result).toBeEqualish([1, 2, 3, 4]); });
    });

    describe("copy", function() {
        beforeEach(function() { result = quat4.copy(out, quatA); });
        it("should place values into out", function() { expect(out).toBeEqualish([1, 2, 3, 4]); });
        it("should return out", function() { expect(result).toBe(out); });
    });

    describe("set", function() {
        beforeEach(function() { result = quat4.set(out, 1, 2, 3, 4); });
        it("should place values into out", function() { expect(out).toBeEqualish([1, 2, 3, 4]); });
        it("should return out", function() { expect(result).toBe(out); });
    });

    describe("identity", function() {
        beforeEach(function() { result = quat4.identity(out); });
        it("should place values into out", function() { expect(result).toBeEqualish([0, 0, 0, 1]); });
        it("should return out", function() { expect(result).toBe(out); });
    });

    describe("setAxisAngle", function() {
        beforeEach(function() { result = quat4.setAxisAngle(out, [1, 0, 0], Math.PI * 0.5); });
        it("should place values into out", function() { expect(result).toBeEqualish([0.707106, 0, 0, 0.707106]); });
        it("should return out", function() { expect(result).toBe(out); });
    });
    
    describe("add", function() {
        describe("with a separate output quaternion", function() {
            beforeEach(function() { result = quat4.add(out, quatA, quatB); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([6, 8, 10, 12]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quatA", function() { expect(quatA).toBeEqualish([1, 2, 3, 4]); });
            it("should not modify quatB", function() { expect(quatB).toBeEqualish([5, 6, 7, 8]); });
        });

        describe("when quatA is the output quaternion", function() {
            beforeEach(function() { result = quat4.add(quatA, quatA, quatB); });
            
            it("should place values into quatA", function() { expect(quatA).toBeEqualish([6, 8, 10, 12]); });
            it("should return quatA", function() { expect(result).toBe(quatA); });
            it("should not modify quatB", function() { expect(quatB).toBeEqualish([5, 6, 7, 8]); });
        });

        describe("when quatB is the output quaternion", function() {
            beforeEach(function() { result = quat4.add(quatB, quatA, quatB); });
            
            it("should place values into quatB", function() { expect(quatB).toBeEqualish([6, 8, 10, 12]); });
            it("should return quatB", function() { expect(result).toBe(quatB); });
            it("should not modify quatA", function() { expect(quatA).toBeEqualish([1, 2, 3, 4]); });
        });
    });

    describe("multiply", function() {
        it("should have an alias called 'mul'", function() { expect(quat4.mul).toEqual(quat4.multiply); });

        describe("with a separate output quaternion", function() {
            beforeEach(function() { result = quat4.multiply(out, quatA, quatB); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([24, 48, 48, -6]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quatA", function() { expect(quatA).toBeEqualish([1, 2, 3, 4]); });
            it("should not modify quatB", function() { expect(quatB).toBeEqualish([5, 6, 7, 8]); });
        });

        describe("when quatA is the output quaternion", function() {
            beforeEach(function() { result = quat4.multiply(quatA, quatA, quatB); });
            
            it("should place values into quatA", function() { expect(quatA).toBeEqualish([24, 48, 48, -6]); });
            it("should return quatA", function() { expect(result).toBe(quatA); });
            it("should not modify quatB", function() { expect(quatB).toBeEqualish([5, 6, 7, 8]); });
        });

        describe("when quatB is the output quaternion", function() {
            beforeEach(function() { result = quat4.multiply(quatB, quatA, quatB); });
            
            it("should place values into quatB", function() { expect(quatB).toBeEqualish([24, 48, 48, -6]); });
            it("should return quatB", function() { expect(result).toBe(quatB); });
            it("should not modify quatA", function() { expect(quatA).toBeEqualish([1, 2, 3, 4]); });
        });
    });

    describe("scale", function() {
        describe("with a separate output quaternion", function() {
            beforeEach(function() { result = quat4.scale(out, quatA, 2); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([2, 4, 6, 8]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quatA", function() { expect(quatA).toBeEqualish([1, 2, 3, 4]); });
        });

        describe("when quatA is the output quaternion", function() {
            beforeEach(function() { result = quat4.scale(quatA, quatA, 2); });
            
            it("should place values into quatA", function() { expect(quatA).toBeEqualish([2, 4, 6, 8]); });
            it("should return quatA", function() { expect(result).toBe(quatA); });
        });
    });

    describe("length", function() {
        it("should have an alias called 'len'", function() { expect(quat4.len).toEqual(quat4.length); });

        beforeEach(function() { result = quat4.length(quatA); });
        
        it("should return the length", function() { expect(result).toBeCloseTo(5.477225); });
    });

    describe("squaredLength", function() {
        it("should have an alias called 'sqrLen'", function() { expect(quat4.sqrLen).toEqual(quat4.squaredLength); });

        beforeEach(function() { result = quat4.squaredLength(quatA); });
        
        it("should return the squared length", function() { expect(result).toEqual(30); });
    });

    describe("normalize", function() {
        beforeEach(function() { quatA = [5, 0, 0, 0]; });

        describe("with a separate output quaternion", function() {
            beforeEach(function() { result = quat4.normalize(out, quatA); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([1, 0, 0, 0]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quatA", function() { expect(quatA).toBeEqualish([5, 0, 0, 0]); });
        });

        describe("when quatA is the output quaternion", function() {
            beforeEach(function() { result = quat4.normalize(quatA, quatA); });
            
            it("should place values into quatA", function() { expect(quatA).toBeEqualish([1, 0, 0, 0]); });
            it("should return quatA", function() { expect(result).toBe(quatA); });
        });
    });

    describe("lerp", function() {
        describe("with a separate output quaternion", function() {
            beforeEach(function() { result = quat4.lerp(out, quatA, quatB, 0.5); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([3, 4, 5, 6]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quatA", function() { expect(quatA).toBeEqualish([1, 2, 3, 4]); });
            it("should not modify quatB", function() { expect(quatB).toBeEqualish([5, 6, 7, 8]); });
        });

        describe("when quatA is the output quaternion", function() {
            beforeEach(function() { result = quat4.lerp(quatA, quatA, quatB, 0.5); });
            
            it("should place values into quatA", function() { expect(quatA).toBeEqualish([3, 4, 5, 6]); });
            it("should return quatA", function() { expect(result).toBe(quatA); });
            it("should not modify quatB", function() { expect(quatB).toBeEqualish([5, 6, 7, 8]); });
        });

        describe("when quatB is the output quaternion", function() {
            beforeEach(function() { result = quat4.lerp(quatB, quatA, quatB, 0.5); });
            
            it("should place values into quatB", function() { expect(quatB).toBeEqualish([3, 4, 5, 6]); });
            it("should return quatB", function() { expect(result).toBe(quatB); });
            it("should not modify quatA", function() { expect(quatA).toBeEqualish([1, 2, 3, 4]); });
        });
    });

    /*describe("slerp", function() {
        describe("with a separate output quaternion", function() {
            beforeEach(function() { result = quat4.slerp(out, quatA, quatB, 0.5); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([3, 4, 5, 6]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quatA", function() { expect(quatA).toBeEqualish([1, 2, 3, 4]); });
            it("should not modify quatB", function() { expect(quatB).toBeEqualish([5, 6, 7, 8]); });
        });

        describe("when quatA is the output quaternion", function() {
            beforeEach(function() { result = quat4.slerp(quatA, quatA, quatB, 0.5); });
            
            it("should place values into quatA", function() { expect(quatA).toBeEqualish([3, 4, 5, 6]); });
            it("should return quatA", function() { expect(result).toBe(quatA); });
            it("should not modify quatB", function() { expect(quatB).toBeEqualish([5, 6, 7, 8]); });
        });

        describe("when quatB is the output quaternion", function() {
            beforeEach(function() { result = quat4.slerp(quatB, quatA, quatB, 0.5); });
            
            it("should place values into quatB", function() { expect(quatB).toBeEqualish([3, 4, 5, 6]); });
            it("should return quatB", function() { expect(result).toBe(quatB); });
            it("should not modify quatA", function() { expect(quatA).toBeEqualish([1, 2, 3, 4]); });
        });
    });*/

    // TODO: slerp, calcuateW, rotateX, rotateY, rotateZ

    describe("invert", function() {
        describe("with a separate output quaternion", function() {
            beforeEach(function() { result = quat4.invert(out, quatA); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([-0.033333, -0.066666, -0.1, 0.133333]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quatA", function() { expect(quatA).toBeEqualish([1, 2, 3, 4]); });
        });

        describe("when quatA is the output quaternion", function() {
            beforeEach(function() { result = quat4.invert(quatA, quatA); });
            
            it("should place values into quatA", function() { expect(quatA).toBeEqualish([-0.033333, -0.066666, -0.1, 0.133333]); });
            it("should return quatA", function() { expect(result).toBe(quatA); });
        });
    });

    describe("conjugate", function() {
        describe("with a separate output quaternion", function() {
            beforeEach(function() { result = quat4.conjugate(out, quatA); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([-1, -2, -3, 4]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quatA", function() { expect(quatA).toBeEqualish([1, 2, 3, 4]); });
        });

        describe("when quatA is the output quaternion", function() {
            beforeEach(function() { result = quat4.conjugate(quatA, quatA); });
            
            it("should place values into quatA", function() { expect(quatA).toBeEqualish([-1, -2, -3, 4]); });
            it("should return quatA", function() { expect(result).toBe(quatA); });
        });
    });

    describe("str", function() {
        beforeEach(function() { result = quat4.str(quatA); });
        
        it("should return a string representation of the quaternion", function() { expect(result).toEqual("quat4(1, 2, 3, 4)"); });
    });
});
