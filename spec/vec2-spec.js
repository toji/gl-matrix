describe("vec2", function() {
    var out, vecA, vecB, result;

    beforeEach(function() { vecA = [1, 2]; vecB = [3, 4]; out = [0, 0]; });
    
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
        describe("with a separate output vector", function() {
            beforeEach(function() { result = vec2.normalize(out, vecA); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([0.4472135, 0.8944271]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify vecA", function() { expect(vecA).toBeEqualish([1, 2]); });
        });

        describe("when vecA is the output vector", function() {
            beforeEach(function() { result = vec2.normalize(vecA, vecA); });
            
            it("should place values into vecA", function() { expect(vecA).toBeEqualish([0.4472135, 0.8944271]); });
            it("should return vecA", function() { expect(result).toBe(vecA); });
        });
    });

    describe("dot", function() {
        beforeEach(function() { result = vec2.squaredLength(vecA); });
        
        it("should return the dot product", function() { expect(result).toEqual(5); });
    });
});
