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

describe("mat3", function() {
    var out, matA, matB, identity, result;

    beforeEach(function() {
        matA = [1, 0, 0,
                0, 1, 0,
                1, 2, 1];

        matB = [1, 0, 0,
                0, 1, 0,
                3, 4, 1];

        out =  [0, 0, 0,
                0, 0, 0,
                0, 0, 0];

        identity = [1, 0, 0,
                    0, 1, 0,
                    0, 0, 1];
    });

    describe("create", function() {
        beforeEach(function() { result = mat3.create(); });
        it("should return a 9 element array initialized to a 3x3 identity matrix", function() { expect(result).toBeEqualish(identity); });
    });

    describe("clone", function() {
        beforeEach(function() { result = mat3.clone(matA); });
        it("should return a 9 element array initialized to the values in matA", function() { expect(result).toBeEqualish(matA); });
    });

    describe("copy", function() {
        beforeEach(function() { result = mat3.copy(out, matA); });
        it("should place values into out", function() { expect(out).toBeEqualish(matA); });
        it("should return out", function() { expect(result).toBe(out); });
    });

    describe("identity", function() {
        beforeEach(function() { result = mat3.identity(out); });
        it("should place values into out", function() { expect(result).toBeEqualish(identity); });
        it("should return out", function() { expect(result).toBe(out); });
    });

    describe("transpose", function() {
        describe("with a separate output matrix", function() {
            beforeEach(function() { result = mat3.transpose(out, matA); });
            
            it("should place values into out", function() { 
                expect(out).toBeEqualish([
                    1, 0, 1,
                    0, 1, 2,
                    0, 0, 1
                ]); 
            });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { 
                expect(matA).toBeEqualish([
                    1, 0, 0,
                    0, 1, 0,
                    1, 2, 1
                ]); 
            });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = mat3.transpose(matA, matA); });
            
            it("should place values into matA", function() { 
                expect(matA).toBeEqualish([
                    1, 0, 1,
                    0, 1, 2,
                    0, 0, 1
                ]); 
            });
            it("should return matA", function() { expect(result).toBe(matA); });
        });
    });

    describe("invert", function() {
        describe("with a separate output matrix", function() {
            beforeEach(function() { result = mat3.invert(out, matA); });
            
            it("should place values into out", function() { 
                expect(out).toBeEqualish([
                    1, 0, 0,
                    0, 1, 0,
                    -1, -2, 1
                ]);
            });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { 
                expect(matA).toBeEqualish([
                    1, 0, 0,
                    0, 1, 0,
                    1, 2, 1
                ]); 
            });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = mat3.invert(matA, matA); });
            
            it("should place values into matA", function() { 
                expect(matA).toBeEqualish([
                    1, 0, 0,
                    0, 1, 0,
                    -1, -2, 1
                ]); 
            });
            it("should return matA", function() { expect(result).toBe(matA); });
        });
    });

    describe("adjoint", function() {
        describe("with a separate output matrix", function() {
            beforeEach(function() { result = mat3.adjoint(out, matA); });
            
            it("should place values into out", function() { 
                expect(out).toBeEqualish([
                    1, 0, 0,
                    0, 1, 0,
                    -1, -2, 1
                ]);
            });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { 
                expect(matA).toBeEqualish([
                    1, 0, 0,
                    0, 1, 0,
                    1, 2, 1
                ]); 
            });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = mat3.adjoint(matA, matA); });
            
            it("should place values into matA", function() { 
                expect(matA).toBeEqualish([
                    1, 0, 0,
                    0, 1, 0,
                    -1, -2, 1
                ]); 
            });
            it("should return matA", function() { expect(result).toBe(matA); });
        });
    });

    describe("determinant", function() {
        beforeEach(function() { result = mat3.determinant(matA); });
        
        it("should return the determinant", function() { expect(result).toEqual(1); });
    });

    describe("multiply", function() {
        it("should have an alias called 'mul'", function() { expect(mat3.mul).toEqual(mat3.multiply); });

        describe("with a separate output matrix", function() {
            beforeEach(function() { result = mat3.multiply(out, matA, matB); });
            
            it("should place values into out", function() { 
                expect(out).toBeEqualish([
                    1, 0, 0,
                    0, 1, 0,
                    4, 6, 1
                ]); 
            });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { 
                expect(matA).toBeEqualish([
                    1, 0, 0,
                    0, 1, 0,
                    1, 2, 1
                ]); 
            });
            it("should not modify matB", function() {
                expect(matB).toBeEqualish([
                    1, 0, 0,
                    0, 1, 0,
                    3, 4, 1
                ]);
            });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = mat3.multiply(matA, matA, matB); });
            
            it("should place values into matA", function() {
                expect(matA).toBeEqualish([
                    1, 0, 0,
                    0, 1, 0,
                    4, 6, 1
                ]);
            });
            it("should return matA", function() { expect(result).toBe(matA); });
            it("should not modify matB", function() {
                expect(matB).toBeEqualish([
                    1, 0, 0,
                    0, 1, 0,
                    3, 4, 1
                ]);
            });
        });

        describe("when matB is the output matrix", function() {
            beforeEach(function() { result = mat3.multiply(matB, matA, matB); });
            
            it("should place values into matB", function() { 
                expect(matB).toBeEqualish([
                    1, 0, 0,
                    0, 1, 0,
                    4, 6, 1
                ]); 
            });
            it("should return matB", function() { expect(result).toBe(matB); });
            it("should not modify matA", function() { 
                expect(matA).toBeEqualish([
                    1, 0, 0,
                    0, 1, 0,
                    1, 2, 1
                ]);
            });
        });
    });

    describe("str", function() {
        beforeEach(function() { result = mat3.str(matA); });
        
        it("should return a string representation of the matrix", function() { expect(result).toEqual("mat3(1, 0, 0, 0, 1, 0, 1, 2, 1)"); });
    });
});