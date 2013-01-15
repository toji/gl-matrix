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

describe("vec2", function() {
    var out, vecA, vecB, result;

    beforeEach(function() { vecA = [1, 2]; vecB = [3, 4]; out = [0, 0]; });

    describe("create", function() {
        beforeEach(function() { result = vec2.create(); });
        it("should return a 2 element array initialized to 0s", function() { expect(result).toBeEqualish([0, 0]); });
    });

    describe("clone", function() {
        beforeEach(function() { result = vec2.clone(vecA); });
        it("should return a 2 element array initialized to the values in vecA", function() { expect(result).toBeEqualish(vecA); });
    });

    describe("fromValues", function() {
        beforeEach(function() { result = vec2.fromValues(1, 2); });
        it("should return a 2 element array initialized to the values passed", function() { expect(result).toBeEqualish([1, 2]); });
    });

    describe("copy", function() {
        beforeEach(function() { result = vec2.copy(out, vecA); });
        it("should place values into out", function() { expect(out).toBeEqualish([1, 2]); });
        it("should return out", function() { expect(result).toBe(out); });
    });

    describe("set", function() {
        beforeEach(function() { result = vec2.set(out, 1, 2); });
        it("should place values into out", function() { expect(out).toBeEqualish([1, 2]); });
        it("should return out", function() { expect(result).toBe(out); });
    });
    
    describe("add", function() {
        describe("with a separate output vector", function() {
            beforeEach(function() { result = vec2.add(out, vecA, vecB); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([4, 6]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
            it("should not modify vecB", function() { expect(vecB).toBeEqualish([3, 4]); });
        });

        describe("when vecA is the output vector", function() {
            beforeEach(function() { result = vec2.add(vecA, vecA, vecB); });
            
            it("should place values into vecA", function() { expect(vecA).toBeEqualish([4, 6]); });
            it("should return vecA", function() { expect(result).toBe(vecA); });
            it("should not modify vecB", function() { expect(vecB).toBeEqualish([3, 4]); });
        });

        describe("when vecB is the output vector", function() {
            beforeEach(function() { result = vec2.add(vecB, vecA, vecB); });
            
            it("should place values into vecB", function() { expect(vecB).toBeEqualish([4, 6]); });
            it("should return vecB", function() { expect(result).toBe(vecB); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
        });
    });
    
    describe("subtract", function() {
        it("should have an alias called 'sub'", function() { expect(vec2.sub).toEqual(vec2.subtract); });

        describe("with a separate output vector", function() {
            beforeEach(function() { result = vec2.subtract(out, vecA, vecB); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([-2, -2]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
            it("should not modify vecB", function() { expect(vecB).toBeEqualish([3, 4]); });
        });

        describe("when vecA is the output vector", function() {
            beforeEach(function() { result = vec2.subtract(vecA, vecA, vecB); });
            
            it("should place values into vecA", function() { expect(vecA).toBeEqualish([-2, -2]); });
            it("should return vecA", function() { expect(result).toBe(vecA); });
            it("should not modify vecB", function() { expect(vecB).toBeEqualish([3, 4]); });
        });

        describe("when vecB is the output vector", function() {
            beforeEach(function() { result = vec2.subtract(vecB, vecA, vecB); });
            
            it("should place values into vecB", function() { expect(vecB).toBeEqualish([-2, -2]); });
            it("should return vecB", function() { expect(result).toBe(vecB); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
        });
    });

    describe("multiply", function() {
        it("should have an alias called 'mul'", function() { expect(vec2.mul).toEqual(vec2.multiply); });

        describe("with a separate output vector", function() {
            beforeEach(function() { result = vec2.multiply(out, vecA, vecB); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([3, 8]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
            it("should not modify vecB", function() { expect(vecB).toBeEqualish([3, 4]); });
        });

        describe("when vecA is the output vector", function() {
            beforeEach(function() { result = vec2.multiply(vecA, vecA, vecB); });
            
            it("should place values into vecA", function() { expect(vecA).toBeEqualish([3, 8]); });
            it("should return vecA", function() { expect(result).toBe(vecA); });
            it("should not modify vecB", function() { expect(vecB).toBeEqualish([3, 4]); });
        });

        describe("when vecB is the output vector", function() {
            beforeEach(function() { result = vec2.multiply(vecB, vecA, vecB); });
            
            it("should place values into vecB", function() { expect(vecB).toBeEqualish([3, 8]); });
            it("should return vecB", function() { expect(result).toBe(vecB); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
        });
    });

    describe("divide", function() {
        it("should have an alias called 'div'", function() { expect(vec2.div).toEqual(vec2.divide); });

        describe("with a separate output vector", function() {
            beforeEach(function() { result = vec2.divide(out, vecA, vecB); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([0.3333333, 0.5]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
            it("should not modify vecB", function() { expect(vecB).toBeEqualish([3, 4]); });
        });

        describe("when vecA is the output vector", function() {
            beforeEach(function() { result = vec2.divide(vecA, vecA, vecB); });
            
            it("should place values into vecA", function() { expect(vecA).toBeEqualish([0.3333333, 0.5]); });
            it("should return vecA", function() { expect(result).toBe(vecA); });
            it("should not modify vecB", function() { expect(vecB).toBeEqualish([3, 4]); });
        });

        describe("when vecB is the output vector", function() {
            beforeEach(function() { result = vec2.divide(vecB, vecA, vecB); });
            
            it("should place values into vecB", function() { expect(vecB).toBeEqualish([0.3333333, 0.5]); });
            it("should return vecB", function() { expect(result).toBe(vecB); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
        });
    });

    describe("min", function() {
        beforeEach(function() { vecA = [1, 4]; vecB = [3, 2]; });

        describe("with a separate output vector", function() {
            beforeEach(function() { result = vec2.min(out, vecA, vecB); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([1, 2]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 4]); });
            it("should not modify vecB", function() { expect(vecB).toBeEqualish([3, 2]); });
        });

        describe("when vecA is the output vector", function() {
            beforeEach(function() { result = vec2.min(vecA, vecA, vecB); });
            
            it("should place values into vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
            it("should return vecA", function() { expect(result).toBe(vecA); });
            it("should not modify vecB", function() { expect(vecB).toBeEqualish([3, 2]); });
        });

        describe("when vecB is the output vector", function() {
            beforeEach(function() { result = vec2.min(vecB, vecA, vecB); });
            
            it("should place values into vecB", function() { expect(vecB).toBeEqualish([1, 2]); });
            it("should return vecB", function() { expect(result).toBe(vecB); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 4]); });
        });
    });

    describe("max", function() {
        beforeEach(function() { vecA = [1, 4]; vecB = [3, 2]; });

        describe("with a separate output vector", function() {
            beforeEach(function() { result = vec2.max(out, vecA, vecB); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([3, 4]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 4]); });
            it("should not modify vecB", function() { expect(vecB).toBeEqualish([3, 2]); });
        });

        describe("when vecA is the output vector", function() {
            beforeEach(function() { result = vec2.max(vecA, vecA, vecB); });
            
            it("should place values into vecA", function() { expect(vecA).toBeEqualish([3, 4]); });
            it("should return vecA", function() { expect(result).toBe(vecA); });
            it("should not modify vecB", function() { expect(vecB).toBeEqualish([3, 2]); });
        });

        describe("when vecB is the output vector", function() {
            beforeEach(function() { result = vec2.max(vecB, vecA, vecB); });
            
            it("should place values into vecB", function() { expect(vecB).toBeEqualish([3, 4]); });
            it("should return vecB", function() { expect(result).toBe(vecB); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 4]); });
        });
    });

    describe("scale", function() {
        describe("with a separate output vector", function() {
            beforeEach(function() { result = vec2.scale(out, vecA, 2); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([2, 4]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
        });

        describe("when vecA is the output vector", function() {
            beforeEach(function() { result = vec2.scale(vecA, vecA, 2); });
            
            it("should place values into vecA", function() { expect(vecA).toBeEqualish([2, 4]); });
            it("should return vecA", function() { expect(result).toBe(vecA); });
        });
    });

    describe("distance", function() {
        it("should have an alias called 'dist'", function() { expect(vec2.dist).toEqual(vec2.distance); });

        beforeEach(function() { result = vec2.distance(vecA, vecB); });
        
        it("should return the distance", function() { expect(result).toBeCloseTo(2.828427); });
    });

    describe("squaredDistance", function() {
        it("should have an alias called 'sqrDist'", function() { expect(vec2.sqrDist).toEqual(vec2.squaredDistance); });

        beforeEach(function() { result = vec2.squaredDistance(vecA, vecB); });
        
        it("should return the squared distance", function() { expect(result).toEqual(8); });
    });

    describe("length", function() {
        it("should have an alias called 'len'", function() { expect(vec2.len).toEqual(vec2.length); });

        beforeEach(function() { result = vec2.length(vecA); });
        
        it("should return the length", function() { expect(result).toBeCloseTo(2.236067); });
    });

    describe("squaredLength", function() {
        it("should have an alias called 'sqrLen'", function() { expect(vec2.sqrLen).toEqual(vec2.squaredLength); });

        beforeEach(function() { result = vec2.squaredLength(vecA); });
        
        it("should return the squared length", function() { expect(result).toEqual(5); });
    });

    describe("negate", function() {
        describe("with a separate output vector", function() {
            beforeEach(function() { result = vec2.negate(out, vecA); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([-1, -2]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
        });

        describe("when vecA is the output vector", function() {
            beforeEach(function() { result = vec2.negate(vecA, vecA); });
            
            it("should place values into vecA", function() { expect(vecA).toBeEqualish([-1, -2]); });
            it("should return vecA", function() { expect(result).toBe(vecA); });
        });
    });

    describe("normalize", function() {
        beforeEach(function() { vecA = [5, 0]; });

        describe("with a separate output vector", function() {
            beforeEach(function() { result = vec2.normalize(out, vecA); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([1, 0]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([5, 0]); });
        });

        describe("when vecA is the output vector", function() {
            beforeEach(function() { result = vec2.normalize(vecA, vecA); });
            
            it("should place values into vecA", function() { expect(vecA).toBeEqualish([1, 0]); });
            it("should return vecA", function() { expect(result).toBe(vecA); });
        });
    });

    describe("dot", function() {
        beforeEach(function() { result = vec2.dot(vecA, vecB); });
        
        it("should return the dot product", function() { expect(result).toEqual(11); });
        it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
        it("should not modify vecB", function() { expect(vecB).toBeEqualish([3, 4]); });
    });

    describe("cross", function() {
        var out3;

        beforeEach(function() {
            out3 = [0, 0, 0];
            result = vec2.cross(out3, vecA, vecB);
        });

        it("should place values into out", function() { expect(out3).toBeEqualish([0, 0, -2]); });
        it("should return out", function() { expect(result).toBe(out3); });
        it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
        it("should not modify vecB", function() { expect(vecB).toBeEqualish([3, 4]); });
    });

    describe("lerp", function() {
        describe("with a separate output vector", function() {
            beforeEach(function() { result = vec2.lerp(out, vecA, vecB, 0.5); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([2, 3]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
            it("should not modify vecB", function() { expect(vecB).toBeEqualish([3, 4]); });
        });

        describe("when vecA is the output vector", function() {
            beforeEach(function() { result = vec2.lerp(vecA, vecA, vecB, 0.5); });
            
            it("should place values into vecA", function() { expect(vecA).toBeEqualish([2, 3]); });
            it("should return vecA", function() { expect(result).toBe(vecA); });
            it("should not modify vecB", function() { expect(vecB).toBeEqualish([3, 4]); });
        });

        describe("when vecB is the output vector", function() {
            beforeEach(function() { result = vec2.lerp(vecB, vecA, vecB, 0.5); });
            
            it("should place values into vecB", function() { expect(vecB).toBeEqualish([2, 3]); });
            it("should return vecB", function() { expect(result).toBe(vecB); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
        });
    });

    describe("transformMat2", function() {
        var matA;
        beforeEach(function() { matA = [1, 2, 3, 4]; });

        describe("with a separate output vector", function() {
            beforeEach(function() { result = vec2.transformMat2(out, vecA, matA); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([5, 11]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
            it("should not modify matA", function() { expect(matA).toBeEqualish([1, 2, 3, 4]); });
        });

        describe("when vecA is the output vector", function() {
            beforeEach(function() { result = vec2.transformMat2(vecA, vecA, matA); });
            
            it("should place values into vecA", function() { expect(vecA).toBeEqualish([5, 11]); });
            it("should return vecA", function() { expect(result).toBe(vecA); });
            it("should not modify matA", function() { expect(matA).toBeEqualish([1, 2, 3, 4]); });
        });
    });

    describe("transformMat2d", function() {
        var matA;
        beforeEach(function() { matA = [1, 2, 3, 4, 5, 6]; });

        describe("with a separate output vector", function() {
            beforeEach(function() { result = vec2.transformMat2d(out, vecA, matA); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([12, 16]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
            it("should not modify matA", function() { expect(matA).toBeEqualish([1, 2, 3, 4, 5, 6]); });
        });

        describe("when vecA is the output vector", function() {
            beforeEach(function() { result = vec2.transformMat2d(vecA, vecA, matA); });
            
            it("should place values into vecA", function() { expect(vecA).toBeEqualish([12, 16]); });
            it("should return vecA", function() { expect(result).toBe(vecA); });
            it("should not modify matA", function() { expect(matA).toBeEqualish([1, 2, 3, 4, 5, 6]); });
        });
    });

    describe("forEach", function() {
        var vecArray;

        beforeEach(function() {
            vecArray = [
                1, 2,
                3, 4,
                0, 0
            ];
        });

        describe("when performing operations that take no extra arguments", function() {
            beforeEach(function() { result = vec2.forEach(vecArray, 0, 0, 0, vec2.normalize); });
            
            it("should update all values", function() { 
                expect(vecArray).toBeEqualish([
                    0.447214, 0.894427,
                    0.6, 0.8,
                    0, 0
                ]); 
            });
            it("should return vecArray", function() { expect(result).toBe(vecArray); });
        });

        describe("when performing operations that takes one extra arguments", function() {
            beforeEach(function() { result = vec2.forEach(vecArray, 0, 0, 0, vec2.add, vecA); });
            
            it("should update all values", function() {
                expect(vecArray).toBeEqualish([
                    2, 4,
                    4, 6,
                    1, 2
                ]); 
            });
            it("should return vecArray", function() { expect(result).toBe(vecArray); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
        });

        describe("when specifying an offset", function() {
            beforeEach(function() { result = vec2.forEach(vecArray, 0, 2, 0, vec2.add, vecA); });
            
            it("should update all values except the first vector", function() {
                expect(vecArray).toBeEqualish([
                    1, 2,
                    4, 6,
                    1, 2
                ]); 
            });
            it("should return vecArray", function() { expect(result).toBe(vecArray); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
        });

        describe("when specifying a count", function() {
            beforeEach(function() { result = vec2.forEach(vecArray, 0, 0, 2, vec2.add, vecA); });
            
            it("should update all values except the last vector", function() {
                expect(vecArray).toBeEqualish([
                    2, 4,
                    4, 6,
                    0, 0
                ]); 
            });
            it("should return vecArray", function() { expect(result).toBe(vecArray); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
        });

        describe("when specifying a stride", function() {
            beforeEach(function() { result = vec2.forEach(vecArray, 4, 0, 0, vec2.add, vecA); });
            
            it("should update all values except the second vector", function() {
                expect(vecArray).toBeEqualish([
                    2, 4,
                    3, 4,
                    1, 2
                ]); 
            });
            it("should return vecArray", function() { expect(result).toBe(vecArray); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
        });

        describe("when calling a function that does not modify the out variable", function() {
            beforeEach(function() { 
                result = vec2.forEach(vecArray, 0, 0, 0, function(out, vec) {}); 
            });
            
            it("values should remain unchanged", function() {
                expect(vecArray).toBeEqualish([
                    1, 2,
                    3, 4,
                    0, 0,
                ]); 
            });
            it("should return vecArray", function() { expect(result).toBe(vecArray); });
        });
    });

    describe("str", function() {
        beforeEach(function() { result = vec2.str(vecA); });
        
        it("should return a string representation of the vector", function() { expect(result).toEqual("vec2(1, 2)"); });
    });
});
