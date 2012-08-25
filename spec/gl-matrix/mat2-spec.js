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

    beforeEach(function() { matA = [1, 2, 3, 4]; matB = [5, 6, 7, 8]; out = [0, 0, 0, 0]; });

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

    describe("inverse", function() {
        describe("with a separate output matrix", function() {
            beforeEach(function() { result = mat2.inverse(out, matA); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([-2, 1, 1.5, -0.5]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeEqualish([1, 2, 3, 4]); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = mat2.inverse(matA, matA); });
            
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