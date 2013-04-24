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

describe("vec3", function() {
    var out, vecA, vecB, result;

    beforeEach(function() { vecA = [1, 2, 3]; vecB = [4, 5, 6]; out = [0, 0, 0]; });

    describe('transformMat4', function() {
        var matr;
        describe("with an identity", function() {
            beforeEach(function() { matr = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ] });

            beforeEach(function() { result = vec3.transformMat4(out, vecA, matr); });

            it("should produce the input", function() {
                expect(out).toBeEqualish([1, 2, 3]);
            });

            it("should return out", function() { expect(result).toBe(out); });
        });

        describe("with a lookAt", function() {
            beforeEach(function() { matr = mat4.lookAt(mat4.create(), [5, 6, 7], [2, 6, 7], [0, 1, 0]); });

            beforeEach(function() { result = vec3.transformMat4(out, vecA, matr); });

            it("should rotate and translate the input", function() {
                expect(out).toBeEqualish([ 4, -4, -4 ]);
            });

            it("should return out", function() { expect(result).toBe(out); });
        });
    });

    describe('transformMat3', function() {
        var matr;
        describe("with an identity", function() {
            beforeEach(function() { matr = [1, 0, 0, 0, 1, 0, 0, 0, 1 ] });

            beforeEach(function() { result = vec3.transformMat3(out, vecA, matr); });

            it("should produce the input", function() {
                expect(out).toBeEqualish([1, 2, 3]);
            });

            it("should return out", function() { expect(result).toBe(out); });
        });

        describe("with 90deg about X", function() {
            beforeEach(function() {
                result = vec3.transformMat3(out, [0,1,0], [1,0,0,0,0,1,0,-1,0]);
            });

            it("should produce correct output", function() {
                expect(out).toBeEqualish([0,0,1]);
            });
        });

        describe("with 90deg about Y", function() {
            beforeEach(function() {
                result = vec3.transformMat3(out, [1,0,0], [0,0,-1,0,1,0,1,0,0]);
            });

            it("should produce correct output", function() {
                expect(out).toBeEqualish([0,0,-1]);
            });
        });

        describe("with 90deg about Z", function() {
            beforeEach(function() {
                result = vec3.transformMat3(out, [1,0,0], [0,1,0,-1,0,0,0,0,1]);
            });

            it("should produce correct output", function() {
                expect(out).toBeEqualish([0,1,0]);
            });
        });

        describe("with a lookAt normal matrix", function() {
            beforeEach(function() {
                matr = mat4.lookAt(mat4.create(), [5, 6, 7], [2, 6, 7], [0, 1, 0]);
                var n = mat3.create();
                matr = mat3.transpose(n, mat3.invert(n, mat3.fromMat4(n, matr)));
            });

            beforeEach(function() { result = vec3.transformMat3(out, [1,0,0], matr); });

            it("should rotate the input", function() {
                expect(out).toBeEqualish([ 0,0,1 ]);
            });

            it("should return out", function() { expect(result).toBe(out); });
        });
    });

    describe("create", function() {
        beforeEach(function() { result = vec3.create(); });
        it("should return a 3 element array initialized to 0s", function() { expect(result).toBeEqualish([0, 0, 0]); });
    });

    describe("clone", function() {
        beforeEach(function() { result = vec3.clone(vecA); });
        it("should return a 3 element array initialized to the values in vecA", function() { expect(result).toBeEqualish(vecA); });
    });

    describe("fromValues", function() {
        beforeEach(function() { result = vec3.fromValues(1, 2, 3); });
        it("should return a 3 element array initialized to the values passed", function() { expect(result).toBeEqualish([1, 2, 3]); });
    });

    describe("copy", function() {
        beforeEach(function() { result = vec3.copy(out, vecA); });
        it("should place values into out", function() { expect(out).toBeEqualish([1, 2, 3]); });
        it("should return out", function() { expect(result).toBe(out); });
    });

    describe("set", function() {
        beforeEach(function() { result = vec3.set(out, 1, 2, 3); });
        it("should place values into out", function() { expect(out).toBeEqualish([1, 2, 3]); });
        it("should return out", function() { expect(result).toBe(out); });
    });
    
    describe("add", function() {
        describe("with a separate output vector", function() {
            beforeEach(function() { result = vec3.add(out, vecA, vecB); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([5, 7, 9]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2, 3]); });
            it("should not modify vecB", function() { expect(vecB).toBeEqualish([4, 5, 6]); });
        });

        describe("when vecA is the output vector", function() {
            beforeEach(function() { result = vec3.add(vecA, vecA, vecB); });
            
            it("should place values into vecA", function() { expect(vecA).toBeEqualish([5, 7, 9]); });
            it("should return vecA", function() { expect(result).toBe(vecA); });
            it("should not modify vecB", function() { expect(vecB).toBeEqualish([4, 5, 6]); });
        });

        describe("when vecB is the output vector", function() {
            beforeEach(function() { result = vec3.add(vecB, vecA, vecB); });
            
            it("should place values into vecB", function() { expect(vecB).toBeEqualish([5, 7, 9]); });
            it("should return vecB", function() { expect(result).toBe(vecB); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2, 3]); });
        });
    });
    
    describe("subtract", function() {
        it("should have an alias called 'sub'", function() { expect(vec3.sub).toEqual(vec3.subtract); });

        describe("with a separate output vector", function() {
            beforeEach(function() { result = vec3.subtract(out, vecA, vecB); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([-3, -3, -3]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2, 3]); });
            it("should not modify vecB", function() { expect(vecB).toBeEqualish([4, 5, 6]); });
        });

        describe("when vecA is the output vector", function() {
            beforeEach(function() { result = vec3.subtract(vecA, vecA, vecB); });
            
            it("should place values into vecA", function() { expect(vecA).toBeEqualish([-3, -3, -3]); });
            it("should return vecA", function() { expect(result).toBe(vecA); });
            it("should not modify vecB", function() { expect(vecB).toBeEqualish([4, 5, 6]); });
        });

        describe("when vecB is the output vector", function() {
            beforeEach(function() { result = vec3.subtract(vecB, vecA, vecB); });
            
            it("should place values into vecB", function() { expect(vecB).toBeEqualish([-3, -3, -3]); });
            it("should return vecB", function() { expect(result).toBe(vecB); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2, 3]); });
        });
    });

    describe("multiply", function() {
        it("should have an alias called 'mul'", function() { expect(vec3.mul).toEqual(vec3.multiply); });

        describe("with a separate output vector", function() {
            beforeEach(function() { result = vec3.multiply(out, vecA, vecB); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([4, 10, 18]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2, 3]); });
            it("should not modify vecB", function() { expect(vecB).toBeEqualish([4, 5, 6]); });
        });

        describe("when vecA is the output vector", function() {
            beforeEach(function() { result = vec3.multiply(vecA, vecA, vecB); });
            
            it("should place values into vecA", function() { expect(vecA).toBeEqualish([4, 10, 18]); });
            it("should return vecA", function() { expect(result).toBe(vecA); });
            it("should not modify vecB", function() { expect(vecB).toBeEqualish([4, 5, 6]); });
        });

        describe("when vecB is the output vector", function() {
            beforeEach(function() { result = vec3.multiply(vecB, vecA, vecB); });
            
            it("should place values into vecB", function() { expect(vecB).toBeEqualish([4, 10, 18]); });
            it("should return vecB", function() { expect(result).toBe(vecB); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2, 3]); });
        });
    });

    describe("divide", function() {
        it("should have an alias called 'div'", function() { expect(vec3.div).toEqual(vec3.divide); });

        describe("with a separate output vector", function() {
            beforeEach(function() { result = vec3.divide(out, vecA, vecB); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([0.25, 0.4, 0.5]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2, 3]); });
            it("should not modify vecB", function() { expect(vecB).toBeEqualish([4, 5, 6]); });
        });

        describe("when vecA is the output vector", function() {
            beforeEach(function() { result = vec3.divide(vecA, vecA, vecB); });
            
            it("should place values into vecA", function() { expect(vecA).toBeEqualish([0.25, 0.4, 0.5]); });
            it("should return vecA", function() { expect(result).toBe(vecA); });
            it("should not modify vecB", function() { expect(vecB).toBeEqualish([4, 5, 6]); });
        });

        describe("when vecB is the output vector", function() {
            beforeEach(function() { result = vec3.divide(vecB, vecA, vecB); });
            
            it("should place values into vecB", function() { expect(vecB).toBeEqualish([0.25, 0.4, 0.5]); });
            it("should return vecB", function() { expect(result).toBe(vecB); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2, 3]); });
        });
    });

    describe("min", function() {
        beforeEach(function() { vecA = [1, 3, 1]; vecB = [3, 1, 3]; });

        describe("with a separate output vector", function() {
            beforeEach(function() { result = vec3.min(out, vecA, vecB); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([1, 1, 1]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 3, 1]); });
            it("should not modify vecB", function() { expect(vecB).toBeEqualish([3, 1, 3]); });
        });

        describe("when vecA is the output vector", function() {
            beforeEach(function() { result = vec3.min(vecA, vecA, vecB); });
            
            it("should place values into vecA", function() { expect(vecA).toBeEqualish([1, 1, 1]); });
            it("should return vecA", function() { expect(result).toBe(vecA); });
            it("should not modify vecB", function() { expect(vecB).toBeEqualish([3, 1, 3]); });
        });

        describe("when vecB is the output vector", function() {
            beforeEach(function() { result = vec3.min(vecB, vecA, vecB); });
            
            it("should place values into vecB", function() { expect(vecB).toBeEqualish([1, 1, 1]); });
            it("should return vecB", function() { expect(result).toBe(vecB); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 3, 1]); });
        });
    });

    describe("max", function() {
        beforeEach(function() { vecA = [1, 3, 1]; vecB = [3, 1, 3]; });

        describe("with a separate output vector", function() {
            beforeEach(function() { result = vec3.max(out, vecA, vecB); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([3, 3, 3]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 3, 1]); });
            it("should not modify vecB", function() { expect(vecB).toBeEqualish([3, 1, 3]); });
        });

        describe("when vecA is the output vector", function() {
            beforeEach(function() { result = vec3.max(vecA, vecA, vecB); });
            
            it("should place values into vecA", function() { expect(vecA).toBeEqualish([3, 3, 3]); });
            it("should return vecA", function() { expect(result).toBe(vecA); });
            it("should not modify vecB", function() { expect(vecB).toBeEqualish([3, 1, 3]); });
        });

        describe("when vecB is the output vector", function() {
            beforeEach(function() { result = vec3.max(vecB, vecA, vecB); });
            
            it("should place values into vecB", function() { expect(vecB).toBeEqualish([3, 3, 3]); });
            it("should return vecB", function() { expect(result).toBe(vecB); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 3, 1]); });
        });
    });

    describe("scale", function() {
        describe("with a separate output vector", function() {
            beforeEach(function() { result = vec3.scale(out, vecA, 2); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([2, 4, 6]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2, 3]); });
        });

        describe("when vecA is the output vector", function() {
            beforeEach(function() { result = vec3.scale(vecA, vecA, 2); });
            
            it("should place values into vecA", function() { expect(vecA).toBeEqualish([2, 4, 6]); });
            it("should return vecA", function() { expect(result).toBe(vecA); });
        });
    });

    describe("scaleAndAdd", function() {
        describe("with a separate output vector", function() {
            beforeEach(function() { result = vec3.scaleAndAdd(out, vecA, vecB, 0.5); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([3, 4.5, 6]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2, 3]); });
            it("should not modify vecB", function() { expect(vecB).toBeEqualish([4, 5, 6]); });
        });

        describe("when vecA is the output vector", function() {
            beforeEach(function() { result = vec3.scaleAndAdd(vecA, vecA, vecB, 0.5); });
            
            it("should place values into vecA", function() { expect(vecA).toBeEqualish([3, 4.5, 6]); });
            it("should return vecA", function() { expect(result).toBe(vecA); });
            it("should not modify vecB", function() { expect(vecB).toBeEqualish([4, 5, 6]); });
        });

        describe("when vecB is the output vector", function() {
            beforeEach(function() { result = vec3.scaleAndAdd(vecB, vecA, vecB, 0.5); });
            
            it("should place values into vecB", function() { expect(vecB).toBeEqualish([3, 4.5, 6]); });
            it("should return vecB", function() { expect(result).toBe(vecB); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2, 3]); });
        });
    });

    describe("distance", function() {
        it("should have an alias called 'dist'", function() { expect(vec3.dist).toEqual(vec3.distance); });

        beforeEach(function() { result = vec3.distance(vecA, vecB); });
        
        it("should return the distance", function() { expect(result).toBeCloseTo(5.196152); });
    });

    describe("squaredDistance", function() {
        it("should have an alias called 'sqrDist'", function() { expect(vec3.sqrDist).toEqual(vec3.squaredDistance); });

        beforeEach(function() { result = vec3.squaredDistance(vecA, vecB); });
        
        it("should return the squared distance", function() { expect(result).toEqual(27); });
    });

    describe("length", function() {
        it("should have an alias called 'len'", function() { expect(vec3.len).toEqual(vec3.length); });

        beforeEach(function() { result = vec3.length(vecA); });
        
        it("should return the length", function() { expect(result).toBeCloseTo(3.741657); });
    });

    describe("squaredLength", function() {
        it("should have an alias called 'sqrLen'", function() { expect(vec3.sqrLen).toEqual(vec3.squaredLength); });

        beforeEach(function() { result = vec3.squaredLength(vecA); });
        
        it("should return the squared length", function() { expect(result).toEqual(14); });
    });

    describe("negate", function() {
        describe("with a separate output vector", function() {
            beforeEach(function() { result = vec3.negate(out, vecA); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([-1, -2, -3]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2, 3]); });
        });

        describe("when vecA is the output vector", function() {
            beforeEach(function() { result = vec3.negate(vecA, vecA); });
            
            it("should place values into vecA", function() { expect(vecA).toBeEqualish([-1, -2, -3]); });
            it("should return vecA", function() { expect(result).toBe(vecA); });
        });
    });

    describe("normalize", function() {
        beforeEach(function() { vecA = [5, 0, 0]; });

        describe("with a separate output vector", function() {
            beforeEach(function() { result = vec3.normalize(out, vecA); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([1, 0, 0]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([5, 0, 0]); });
        });

        describe("when vecA is the output vector", function() {
            beforeEach(function() { result = vec3.normalize(vecA, vecA); });
            
            it("should place values into vecA", function() { expect(vecA).toBeEqualish([1, 0, 0]); });
            it("should return vecA", function() { expect(result).toBe(vecA); });
        });
    });

    describe("dot", function() {
        beforeEach(function() { result = vec3.dot(vecA, vecB); });
        
        it("should return the dot product", function() { expect(result).toEqual(32); });
        it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2, 3]); });
        it("should not modify vecB", function() { expect(vecB).toBeEqualish([4, 5, 6]); });
    });

    describe("cross", function() {
        describe("with a separate output vector", function() {
            beforeEach(function() { result = vec3.cross(out, vecA, vecB); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([-3, 6, -3]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2, 3]); });
            it("should not modify vecB", function() { expect(vecB).toBeEqualish([4, 5, 6]); });
        });

        describe("when vecA is the output vector", function() {
            beforeEach(function() { result = vec3.cross(vecA, vecA, vecB); });
            
            it("should place values into vecA", function() { expect(vecA).toBeEqualish([-3, 6, -3]); });
            it("should return vecA", function() { expect(result).toBe(vecA); });
            it("should not modify vecB", function() { expect(vecB).toBeEqualish([4, 5, 6]); });
        });

        describe("when vecB is the output vector", function() {
            beforeEach(function() { result = vec3.cross(vecB, vecA, vecB); });
            
            it("should place values into vecB", function() { expect(vecB).toBeEqualish([-3, 6, -3]); });
            it("should return vecB", function() { expect(result).toBe(vecB); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2, 3]); });
        });
    });

    describe("lerp", function() {
        describe("with a separate output vector", function() {
            beforeEach(function() { result = vec3.lerp(out, vecA, vecB, 0.5); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([2.5, 3.5, 4.5]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2, 3]); });
            it("should not modify vecB", function() { expect(vecB).toBeEqualish([4, 5, 6]); });
        });

        describe("when vecA is the output vector", function() {
            beforeEach(function() { result = vec3.lerp(vecA, vecA, vecB, 0.5); });
            
            it("should place values into vecA", function() { expect(vecA).toBeEqualish([2.5, 3.5, 4.5]); });
            it("should return vecA", function() { expect(result).toBe(vecA); });
            it("should not modify vecB", function() { expect(vecB).toBeEqualish([4, 5, 6]); });
        });

        describe("when vecB is the output vector", function() {
            beforeEach(function() { result = vec3.lerp(vecB, vecA, vecB, 0.5); });
            
            it("should place values into vecB", function() { expect(vecB).toBeEqualish([2.5, 3.5, 4.5]); });
            it("should return vecB", function() { expect(result).toBe(vecB); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2, 3]); });
        });
    });

    describe("random", function() {
        describe("with no scale", function() {
            beforeEach(function() { result = vec3.random(out); });
            
            it("should result in a unit length vector", function() { expect(vec3.length(out)).toBeCloseTo(1.0); });
            it("should return out", function() { expect(result).toBe(out); });
        });

        describe("with a scale", function() {
            beforeEach(function() { result = vec3.random(out, 5.0); });
            
            it("should result in a unit length vector", function() { expect(vec3.length(out)).toBeCloseTo(5.0); });
            it("should return out", function() { expect(result).toBe(out); });
        });
    });

    describe("forEach", function() {
        var vecArray;

        beforeEach(function() {
            vecArray = [
                1, 2, 3,
                4, 5, 6,
                0, 0, 0
            ];
        });

        describe("when performing operations that take no extra arguments", function() {
            beforeEach(function() { result = vec3.forEach(vecArray, 0, 0, 0, vec3.normalize); });
            
            it("should update all values", function() { 
                expect(vecArray).toBeEqualish([
                    0.267261, 0.534522, 0.801783, 
                    0.455842, 0.569802, 0.683763, 
                    0, 0, 0
                ]); 
            });
            it("should return vecArray", function() { expect(result).toBe(vecArray); });
        });

        describe("when performing operations that takes one extra arguments", function() {
            beforeEach(function() { result = vec3.forEach(vecArray, 0, 0, 0, vec3.add, vecA); });
            
            it("should update all values", function() {
                expect(vecArray).toBeEqualish([
                    2, 4, 6,
                    5, 7, 9,
                    1, 2, 3
                ]); 
            });
            it("should return vecArray", function() { expect(result).toBe(vecArray); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2, 3]); });
        });

        describe("when specifying an offset", function() {
            beforeEach(function() { result = vec3.forEach(vecArray, 0, 3, 0, vec3.add, vecA); });
            
            it("should update all values except the first vector", function() {
                expect(vecArray).toBeEqualish([
                    1, 2, 3,
                    5, 7, 9,
                    1, 2, 3
                ]); 
            });
            it("should return vecArray", function() { expect(result).toBe(vecArray); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2, 3]); });
        });

        describe("when specifying a count", function() {
            beforeEach(function() { result = vec3.forEach(vecArray, 0, 0, 2, vec3.add, vecA); });
            
            it("should update all values except the last vector", function() {
                expect(vecArray).toBeEqualish([
                    2, 4, 6,
                    5, 7, 9,
                    0, 0, 0
                ]); 
            });
            it("should return vecArray", function() { expect(result).toBe(vecArray); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2, 3]); });
        });

        describe("when specifying a stride", function() {
            beforeEach(function() { result = vec3.forEach(vecArray, 6, 0, 0, vec3.add, vecA); });
            
            it("should update all values except the second vector", function() {
                expect(vecArray).toBeEqualish([
                    2, 4, 6,
                    4, 5, 6,
                    1, 2, 3
                ]); 
            });
            it("should return vecArray", function() { expect(result).toBe(vecArray); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2, 3]); });
        });

        describe("when calling a function that does not modify the out variable", function() {
            beforeEach(function() { 
                result = vec3.forEach(vecArray, 0, 0, 0, function(out, vec) {}); 
            });
            
            it("values should remain unchanged", function() {
                expect(vecArray).toBeEqualish([
                    1, 2, 3,
                    4, 5, 6,
                    0, 0, 0
                ]); 
            });
            it("should return vecArray", function() { expect(result).toBe(vecArray); });
        });
    });

    describe("str", function() {
        beforeEach(function() { result = vec3.str(vecA); });
        
        it("should return a string representation of the vector", function() { expect(result).toEqual("vec3(1, 2, 3)"); });
    });
});
