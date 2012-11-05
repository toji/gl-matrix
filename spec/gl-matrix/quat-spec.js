/* Copyright (c) 2012, Brandon Jones, Colin MacKenzie IV. All rights reserved.

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

describe("quat", function() {
    var out, quatA, quatB, result;

    beforeEach(function() { quatA = [1, 2, 3, 4]; quatB = [5, 6, 7, 8]; out = [0, 0, 0, 0]; });

    describe("create", function() {
        beforeEach(function() { result = quat.create(); });
        it("should return a 4 element array initialized to an identity quaternion", function() { expect(result).toBeEqualish([0, 0, 0, 1]); });
    });

    describe("clone", function() {
        beforeEach(function() { result = quat.clone(quatA); });
        it("should return a 4 element array initialized to the values in quatA", function() { expect(result).toBeEqualish(quatA); });
    });

    describe("fromValues", function() {
        beforeEach(function() { result = quat.fromValues(1, 2, 3, 4); });
        it("should return a 4 element array initialized to the values passed", function() { expect(result).toBeEqualish([1, 2, 3, 4]); });
    });

    describe("copy", function() {
        beforeEach(function() { result = quat.copy(out, quatA); });
        it("should place values into out", function() { expect(out).toBeEqualish([1, 2, 3, 4]); });
        it("should return out", function() { expect(result).toBe(out); });
    });

    describe("set", function() {
        beforeEach(function() { result = quat.set(out, 1, 2, 3, 4); });
        it("should place values into out", function() { expect(out).toBeEqualish([1, 2, 3, 4]); });
        it("should return out", function() { expect(result).toBe(out); });
    });

    describe("identity", function() {
        beforeEach(function() { result = quat.identity(out); });
        it("should place values into out", function() { expect(result).toBeEqualish([0, 0, 0, 1]); });
        it("should return out", function() { expect(result).toBe(out); });
    });

    describe("setAxisAngle", function() {
        beforeEach(function() { result = quat.setAxisAngle(out, [1, 0, 0], Math.PI * 0.5); });
        it("should place values into out", function() { expect(result).toBeEqualish([0.707106, 0, 0, 0.707106]); });
        it("should return out", function() { expect(result).toBe(out); });
    });
    
    describe("add", function() {
        describe("with a separate output quaternion", function() {
            beforeEach(function() { result = quat.add(out, quatA, quatB); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([6, 8, 10, 12]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quatA", function() { expect(quatA).toBeEqualish([1, 2, 3, 4]); });
            it("should not modify quatB", function() { expect(quatB).toBeEqualish([5, 6, 7, 8]); });
        });

        describe("when quatA is the output quaternion", function() {
            beforeEach(function() { result = quat.add(quatA, quatA, quatB); });
            
            it("should place values into quatA", function() { expect(quatA).toBeEqualish([6, 8, 10, 12]); });
            it("should return quatA", function() { expect(result).toBe(quatA); });
            it("should not modify quatB", function() { expect(quatB).toBeEqualish([5, 6, 7, 8]); });
        });

        describe("when quatB is the output quaternion", function() {
            beforeEach(function() { result = quat.add(quatB, quatA, quatB); });
            
            it("should place values into quatB", function() { expect(quatB).toBeEqualish([6, 8, 10, 12]); });
            it("should return quatB", function() { expect(result).toBe(quatB); });
            it("should not modify quatA", function() { expect(quatA).toBeEqualish([1, 2, 3, 4]); });
        });
    });

    describe("multiply", function() {
        it("should have an alias called 'mul'", function() { expect(quat.mul).toEqual(quat.multiply); });

        describe("with a separate output quaternion", function() {
            beforeEach(function() { result = quat.multiply(out, quatA, quatB); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([24, 48, 48, -6]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quatA", function() { expect(quatA).toBeEqualish([1, 2, 3, 4]); });
            it("should not modify quatB", function() { expect(quatB).toBeEqualish([5, 6, 7, 8]); });
        });

        describe("when quatA is the output quaternion", function() {
            beforeEach(function() { result = quat.multiply(quatA, quatA, quatB); });
            
            it("should place values into quatA", function() { expect(quatA).toBeEqualish([24, 48, 48, -6]); });
            it("should return quatA", function() { expect(result).toBe(quatA); });
            it("should not modify quatB", function() { expect(quatB).toBeEqualish([5, 6, 7, 8]); });
        });

        describe("when quatB is the output quaternion", function() {
            beforeEach(function() { result = quat.multiply(quatB, quatA, quatB); });
            
            it("should place values into quatB", function() { expect(quatB).toBeEqualish([24, 48, 48, -6]); });
            it("should return quatB", function() { expect(result).toBe(quatB); });
            it("should not modify quatA", function() { expect(quatA).toBeEqualish([1, 2, 3, 4]); });
        });
    });

    describe("scale", function() {
        describe("with a separate output quaternion", function() {
            beforeEach(function() { result = quat.scale(out, quatA, 2); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([2, 4, 6, 8]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quatA", function() { expect(quatA).toBeEqualish([1, 2, 3, 4]); });
        });

        describe("when quatA is the output quaternion", function() {
            beforeEach(function() { result = quat.scale(quatA, quatA, 2); });
            
            it("should place values into quatA", function() { expect(quatA).toBeEqualish([2, 4, 6, 8]); });
            it("should return quatA", function() { expect(result).toBe(quatA); });
        });
    });

    describe("length", function() {
        it("should have an alias called 'len'", function() { expect(quat.len).toEqual(quat.length); });

        beforeEach(function() { result = quat.length(quatA); });
        
        it("should return the length", function() { expect(result).toBeCloseTo(5.477225); });
    });

    describe("squaredLength", function() {
        it("should have an alias called 'sqrLen'", function() { expect(quat.sqrLen).toEqual(quat.squaredLength); });

        beforeEach(function() { result = quat.squaredLength(quatA); });
        
        it("should return the squared length", function() { expect(result).toEqual(30); });
    });

    describe("normalize", function() {
        beforeEach(function() { quatA = [5, 0, 0, 0]; });

        describe("with a separate output quaternion", function() {
            beforeEach(function() { result = quat.normalize(out, quatA); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([1, 0, 0, 0]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quatA", function() { expect(quatA).toBeEqualish([5, 0, 0, 0]); });
        });

        describe("when quatA is the output quaternion", function() {
            beforeEach(function() { result = quat.normalize(quatA, quatA); });
            
            it("should place values into quatA", function() { expect(quatA).toBeEqualish([1, 0, 0, 0]); });
            it("should return quatA", function() { expect(result).toBe(quatA); });
        });
    });

    describe("lerp", function() {
        describe("with a separate output quaternion", function() {
            beforeEach(function() { result = quat.lerp(out, quatA, quatB, 0.5); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([3, 4, 5, 6]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quatA", function() { expect(quatA).toBeEqualish([1, 2, 3, 4]); });
            it("should not modify quatB", function() { expect(quatB).toBeEqualish([5, 6, 7, 8]); });
        });

        describe("when quatA is the output quaternion", function() {
            beforeEach(function() { result = quat.lerp(quatA, quatA, quatB, 0.5); });
            
            it("should place values into quatA", function() { expect(quatA).toBeEqualish([3, 4, 5, 6]); });
            it("should return quatA", function() { expect(result).toBe(quatA); });
            it("should not modify quatB", function() { expect(quatB).toBeEqualish([5, 6, 7, 8]); });
        });

        describe("when quatB is the output quaternion", function() {
            beforeEach(function() { result = quat.lerp(quatB, quatA, quatB, 0.5); });
            
            it("should place values into quatB", function() { expect(quatB).toBeEqualish([3, 4, 5, 6]); });
            it("should return quatB", function() { expect(result).toBe(quatB); });
            it("should not modify quatA", function() { expect(quatA).toBeEqualish([1, 2, 3, 4]); });
        });
    });

    /*describe("slerp", function() {
        describe("with a separate output quaternion", function() {
            beforeEach(function() { result = quat.slerp(out, quatA, quatB, 0.5); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([3, 4, 5, 6]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quatA", function() { expect(quatA).toBeEqualish([1, 2, 3, 4]); });
            it("should not modify quatB", function() { expect(quatB).toBeEqualish([5, 6, 7, 8]); });
        });

        describe("when quatA is the output quaternion", function() {
            beforeEach(function() { result = quat.slerp(quatA, quatA, quatB, 0.5); });
            
            it("should place values into quatA", function() { expect(quatA).toBeEqualish([3, 4, 5, 6]); });
            it("should return quatA", function() { expect(result).toBe(quatA); });
            it("should not modify quatB", function() { expect(quatB).toBeEqualish([5, 6, 7, 8]); });
        });

        describe("when quatB is the output quaternion", function() {
            beforeEach(function() { result = quat.slerp(quatB, quatA, quatB, 0.5); });
            
            it("should place values into quatB", function() { expect(quatB).toBeEqualish([3, 4, 5, 6]); });
            it("should return quatB", function() { expect(result).toBe(quatB); });
            it("should not modify quatA", function() { expect(quatA).toBeEqualish([1, 2, 3, 4]); });
        });
    });*/

    // TODO: slerp, calcuateW, rotateX, rotateY, rotateZ

    describe("invert", function() {
        describe("with a separate output quaternion", function() {
            beforeEach(function() { result = quat.invert(out, quatA); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([-0.033333, -0.066666, -0.1, 0.133333]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quatA", function() { expect(quatA).toBeEqualish([1, 2, 3, 4]); });
        });

        describe("when quatA is the output quaternion", function() {
            beforeEach(function() { result = quat.invert(quatA, quatA); });
            
            it("should place values into quatA", function() { expect(quatA).toBeEqualish([-0.033333, -0.066666, -0.1, 0.133333]); });
            it("should return quatA", function() { expect(result).toBe(quatA); });
        });
    });

    describe("conjugate", function() {
        describe("with a separate output quaternion", function() {
            beforeEach(function() { result = quat.conjugate(out, quatA); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([-1, -2, -3, 4]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quatA", function() { expect(quatA).toBeEqualish([1, 2, 3, 4]); });
        });

        describe("when quatA is the output quaternion", function() {
            beforeEach(function() { result = quat.conjugate(quatA, quatA); });
            
            it("should place values into quatA", function() { expect(quatA).toBeEqualish([-1, -2, -3, 4]); });
            it("should return quatA", function() { expect(result).toBe(quatA); });
        });
    });

    describe("str", function() {
        beforeEach(function() { result = quat.str(quatA); });
        
        it("should return a string representation of the quaternion", function() { expect(result).toEqual("quat(1, 2, 3, 4)"); });
    });
});
