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

describe("mat2d", function() {
    var out, matA, matB, identity, result;

    beforeEach(function() {
        matA = [1, 2,
                3, 4,
                5, 6];

        oldA = [1, 2,
                3, 4,
                5, 6];

        matB = [7, 8,
                9, 10,
                11, 12];

        oldB = [7, 8,
                9, 10,
                11, 12];

        out =  [0, 0,
                0, 0,
                0, 0];

        identity = [1, 0,
                    0, 1,
                    0, 0];
    });

    describe("create", function() {
        beforeEach(function() { result = mat2d.create(); });
        it("should return a 6 element array initialized to a 2x3 identity matrix", function() { expect(result).toBeEqualish(identity); });
    });

    describe("clone", function() {
        beforeEach(function() { result = mat2d.clone(matA); });
        it("should return a 6 element array initialized to the values in matA", function() { expect(result).toBeEqualish(matA); });
    });

    describe("copy", function() {
        beforeEach(function() { result = mat2d.copy(out, matA); });
        it("should place values into out", function() { expect(out).toBeEqualish(matA); });
        it("should return out", function() { expect(result).toBe(out); });
    });

    describe("identity", function() {
        beforeEach(function() { result = mat2d.identity(out); });
        it("should place values into out", function() { expect(result).toBeEqualish(identity); });
        it("should return out", function() { expect(result).toBe(out); });
    });

    describe("invert", function() {
        describe("with a separate output matrix", function() {
            beforeEach(function() { result = mat2d.invert(out, matA); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([ -2, 1, 1.5, -0.5, 1, -2 ]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeEqualish(oldA); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = mat2d.invert(matA, matA); });
            
            it("should place values into matA", function() { expect(matA).toBeEqualish([ -2, 1, 1.5, -0.5, 1, -2 ]); });
            it("should return matA", function() { expect(result).toBe(matA); });
        });
    });

    describe("determinant", function() {
        beforeEach(function() { result = mat2d.determinant(matA); });
        
        it("should return the determinant", function() { expect(result).toEqual(-2); });
    });

    describe("multiply", function() {
        it("should have an alias called 'mul'", function() { expect(mat2d.mul).toEqual(mat2d.multiply); });

        describe("with a separate output matrix", function() {
            beforeEach(function() { result = mat2d.multiply(out, matA, matB); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([31, 46, 39, 58, 52, 76]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeEqualish(oldA); });
            it("should not modify matB", function() { expect(matB).toBeEqualish(oldB); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = mat2d.multiply(matA, matA, matB); });
            
            it("should place values into matA", function() { expect(matA).toBeEqualish([31, 46, 39, 58, 52, 76]); });
            it("should return matA", function() { expect(result).toBe(matA); });
            it("should not modify matB", function() { expect(matB).toBeEqualish(oldB); });
        });

        describe("when matB is the output matrix", function() {
            beforeEach(function() { result = mat2d.multiply(matB, matA, matB); });
            
            it("should place values into matB", function() { expect(matB).toBeEqualish([31, 46, 39, 58, 52, 76]); });
            it("should return matB", function() { expect(result).toBe(matB); });
            it("should not modify matA", function() { expect(matA).toBeEqualish(oldA); });
        });
    });

    describe("rotate", function() {
        describe("with a separate output matrix", function() {
            beforeEach(function() { result = mat2d.rotate(out, matA, Math.PI * 0.5); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([3, 4, -1, -2, 5, 6]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeEqualish(oldA); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = mat2d.rotate(matA, matA, Math.PI * 0.5); });
            
            it("should place values into matA", function() { expect(matA).toBeEqualish([3, 4, -1, -2, 5, 6]); });
            it("should return matA", function() { expect(result).toBe(matA); });
        });
    });

    describe("scale", function() {
        var vecA;
        beforeEach(function() { vecA = [2, 3]; });

        describe("with a separate output matrix", function() {
            beforeEach(function() { result = mat2d.scale(out, matA, vecA); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([2, 4, 9, 12, 5, 6]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeEqualish(oldA); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = mat2d.scale(matA, matA, vecA); });
            
            it("should place values into matA", function() { expect(matA).toBeEqualish([2, 4, 9, 12, 5, 6]); });
            it("should return matA", function() { expect(result).toBe(matA); });
        });
    });

    describe("translate", function() {
        var vecA;
        beforeEach(function() { vecA = [2, 3]; });

        describe("with a separate output matrix", function() {
            beforeEach(function() { result = mat2d.translate(out, matA, vecA); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([1, 2, 3, 4, 16, 22]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeEqualish(oldA); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = mat2d.translate(matA, matA, vecA); });
            
            it("should place values into matA", function() { expect(matA).toBeEqualish([1, 2, 3, 4, 16, 22]); });
            it("should return matA", function() { expect(result).toBe(matA); });
        });
    });

    describe("str", function() {
        beforeEach(function() { result = mat2d.str(matA); });
        
        it("should return a string representation of the matrix", function() { expect(result).toEqual("mat2d(1, 2, 3, 4, 5, 6)"); });
    });

   describe("frob", function() {
        beforeEach(function() { result = mat2d.frob(matA); });
        it("should return the Frobenius Norm of the matrix", function() { expect(result).toEqual( Math.sqrt(Math.pow(1, 2) + Math.pow(2, 2) + Math.pow(3, 2) + Math.pow(4, 2) + Math.pow(5, 2) + Math.pow(6, 2) + 1)); });
   });

});
