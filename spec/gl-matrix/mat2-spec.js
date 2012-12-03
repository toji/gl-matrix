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

describe("mat2", function() {
    var out, matA, matB, identity, result;

    beforeEach(function() {
        matA = [1, 2,
                3, 4];

        matB = [5, 6,
                7, 8];

        out =  [0, 0,
                0, 0];

        identity = [1, 0,
                    0, 1];
    });

    describe("create", function() {
        beforeEach(function() { result = mat2.create(); });
        it("should return a 4 element array initialized to a 2x2 identity matrix", function() { expect(result).toBeEqualish(identity); });
    });

    describe("clone", function() {
        beforeEach(function() { result = mat2.clone(matA); });
        it("should return a 4 element array initialized to the values in matA", function() { expect(result).toBeEqualish(matA); });
    });

    describe("copy", function() {
        beforeEach(function() { result = mat2.copy(out, matA); });
        it("should place values into out", function() { expect(out).toBeEqualish(matA); });
        it("should return out", function() { expect(result).toBe(out); });
    });

    describe("identity", function() {
        beforeEach(function() { result = mat2.identity(out); });
        it("should place values into out", function() { expect(result).toBeEqualish(identity); });
        it("should return out", function() { expect(result).toBe(out); });
    });

    describe("transpose", function() {
        describe("with a separate output matrix", function() {
            beforeEach(function() { result = mat2.transpose(out, matA); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([1, 3, 2, 4]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeEqualish([1, 2, 3, 4]); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = mat2.transpose(matA, matA); });
            
            it("should place values into matA", function() { expect(matA).toBeEqualish([1, 3, 2, 4]); });
            it("should return matA", function() { expect(result).toBe(matA); });
        });
    });

    describe("invert", function() {
        describe("with a separate output matrix", function() {
            beforeEach(function() { result = mat2.invert(out, matA); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([-2, 1, 1.5, -0.5]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeEqualish([1, 2, 3, 4]); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = mat2.invert(matA, matA); });
            
            it("should place values into matA", function() { expect(matA).toBeEqualish([-2, 1, 1.5, -0.5]); });
            it("should return matA", function() { expect(result).toBe(matA); });
        });
    });

    describe("adjoint", function() {
        describe("with a separate output matrix", function() {
            beforeEach(function() { result = mat2.adjoint(out, matA); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([4, -2, -3, 1]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeEqualish([1, 2, 3, 4]); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = mat2.adjoint(matA, matA); });
            
            it("should place values into matA", function() { expect(matA).toBeEqualish([4, -2, -3, 1]); });
            it("should return matA", function() { expect(result).toBe(matA); });
        });
    });

    describe("determinant", function() {
        beforeEach(function() { result = mat2.determinant(matA); });
        
        it("should return the determinant", function() { expect(result).toEqual(-2); });
    });

    describe("multiply", function() {
        it("should have an alias called 'mul'", function() { expect(mat2.mul).toEqual(mat2.multiply); });

        describe("with a separate output matrix", function() {
            beforeEach(function() { result = mat2.multiply(out, matA, matB); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([19, 22, 43, 50]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeEqualish([1, 2, 3, 4]); });
            it("should not modify matB", function() { expect(matB).toBeEqualish([5, 6, 7, 8]); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = mat2.multiply(matA, matA, matB); });
            
            it("should place values into matA", function() { expect(matA).toBeEqualish([19, 22, 43, 50]); });
            it("should return matA", function() { expect(result).toBe(matA); });
            it("should not modify matB", function() { expect(matB).toBeEqualish([5, 6, 7, 8]); });
        });

        describe("when matB is the output matrix", function() {
            beforeEach(function() { result = mat2.multiply(matB, matA, matB); });
            
            it("should place values into matB", function() { expect(matB).toBeEqualish([19, 22, 43, 50]); });
            it("should return matB", function() { expect(result).toBe(matB); });
            it("should not modify matA", function() { expect(matA).toBeEqualish([1, 2, 3, 4]); });
        });
    });

    describe("rotate", function() {
        describe("with a separate output matrix", function() {
            beforeEach(function() { result = mat2.rotate(out, matA, Math.PI * 0.5); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([2, -1, 4, -3]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeEqualish([1, 2, 3, 4]); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = mat2.rotate(matA, matA, Math.PI * 0.5); });
            
            it("should place values into matA", function() { expect(matA).toBeEqualish([2, -1, 4, -3]); });
            it("should return matA", function() { expect(result).toBe(matA); });
        });
    });

    describe("scale", function() {
        var vecA;
        beforeEach(function() { vecA = [2, 3]; });

        describe("with a separate output matrix", function() {
            beforeEach(function() { result = mat2.scale(out, matA, vecA); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([2, 6, 6, 12]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeEqualish([1, 2, 3, 4]); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = mat2.scale(matA, matA, vecA); });
            
            it("should place values into matA", function() { expect(matA).toBeEqualish([2, 6, 6, 12]); });
            it("should return matA", function() { expect(result).toBe(matA); });
        });
    });

    describe("str", function() {
        beforeEach(function() { result = mat2.str(matA); });
        
        it("should return a string representation of the matrix", function() { expect(result).toEqual("mat2(1, 2, 3, 4)"); });
    });
});