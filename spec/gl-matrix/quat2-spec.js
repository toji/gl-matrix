/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

describe("quat2", function() {
    var quat = require("../../src/gl-matrix/quat.js");
    var quat2 = require("../../src/gl-matrix/quat2.js");
    var mat4 = require("../../src/gl-matrix/mat4.js");

    var out, outVec, quat2A, quat2B, result, resultVec, outQuat;
    var vec, id, deg90;

    beforeEach(function() {
        quat2A = [1, 2, 3, 4, 2, 5, 6, -2]; 
        quat2B = [5, 6, 7, 8, 9, 8, 6, -4];
        out = [0, 0, 0, 0, 0, 0, 0, 0];
        outVec = [0, 0, 0];
        outQuat = [0, 0, 0, 0];
        vec = [1, 1, -1];
        id = [0, 0, 0, 1, 0, 0, 0, 0];
        deg90 = Math.PI / 2;
    });
    /**
rotate
lerp
slerp
 */
    describe("translate", function() {
        var matrixA = mat4.create(), matOut = mat4.create(), quatOut = quat2.create();
        beforeEach(function() {
              //quat2A only seems to work when created using this function?
              quat2B = quat2.fromRotationTranslation(quat2A, [1,2,3,4], [-5, 4, 10]);
              quat2.normalize(quat2A, quat2A);
              mat4.fromQuat2(matrixA, quat2A);
            });
        describe("with a separate output quaternion", function() {
            beforeEach(function() { 
                    result = quat2.translate(out, quat2A, vec);
                    //Same thing with a matrix
                    mat4.translate(matOut, matrixA, vec);
                    quat2.fromMat4(quatOut, matOut);
                });
            
            it("should place values into out", function() { expect(out).toBeEqualishQuat2New(quatOut); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quat2A", function() { expect(quat2A).toBeEqualishQuat2New(quat2B); });
            it("should not modify vec", function() { expect(vec).toBeEqualish([1,1,-1]); });
        });

        describe("when quat2A is the output quaternion", function() {
            beforeEach(function() { 
                    result = quat2.translate(quat2A, quat2A, vec);
                    //Same thing with a matrix
                    mat4.translate(matOut, matrixA, vec);
                    quat2.fromMat4(quatOut, matOut);
                });
            
            it("should place values into quat2A", function() { expect(quat2A).toBeEqualishQuat2New(quatOut); });
            it("should return quat2A", function() { expect(result).toBe(quat2A); });
        });
    });
    
    describe("rotateAroundAxis", function() {
        var matrixA = mat4.create(), matOut = mat4.create(), quatOut = quat2.create(), ax = [1,4,2];
        beforeEach(function() {
              //quat2A only seems to work when created using this function?
              quat2B = quat2.fromRotationTranslation(quat2A, [1,2,3,4], [-5, 4, 10]);
              quat2.normalize(quat2A, quat2A);
              mat4.fromQuat2(matrixA, quat2A);
            });
        describe("with a separate output quaternion", function() {
            beforeEach(function() { 
                    result = quat2.rotateAroundAxis(out, quat2A, ax, 5);
                    //Same thing with a matrix
                    mat4.rotate(matOut, matrixA, 5, ax);

                    quat2.fromMat4(quatOut, matOut);
                });
            
            it("should place values into out", function() { expect(out).toBeEqualishQuat2New(quatOut); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quat2A", function() { expect(quat2A).toBeEqualishQuat2New(quat2B); });
            it("should not modify ax", function() { expect(ax).toBeEqualish([1, 4, 2]); });
        });

        describe("when quat2A is the output quaternion", function() {
            beforeEach(function() { 
                    result = quat2.rotateAroundAxis(quat2A, quat2A, ax, 5);
                    //Same thing with a matrix

                    mat4.rotate(matOut, matrixA, 5, ax);
                    quat2.fromMat4(quatOut, matOut);
                });
            
            it("should place values into quat2A", function() { expect(quat2A).toBeEqualishQuat2New(quatOut); });
            it("should return quat2A", function() { expect(result).toBe(quat2A); });
        });
    });
    
    describe("rotateByQuatAppend", function() {
        var correctResult = quat2.create();
        var rotationQuat = quat2.create();
        beforeEach(function() {
            rotationQuat[0] = 2;
            rotationQuat[1] = 5;
            rotationQuat[2] = 2;
            rotationQuat[3] = -10;
            quat2.multiply(correctResult, quat2A, rotationQuat);
        })
        describe("with a separate output quaternion", function() {
            beforeEach(function() {
                result = quat2.rotateByQuatAppend(out, quat2A, [2, 5, 2, -10]);
            });
            
            it("should place values into out", function() { expect(out).toBeEqualishQuat2New(correctResult); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quat2A", function() { expect(quat2A).toBeEqualishQuat2New([1, 2, 3, 4, 2, 5, 6, -2]); });
            it("should not modify the rotation quaternion", function() { expect(rotationQuat).toBeEqualishQuat2New([2,5,2,-10,0,0,0,0]); });
        });

        describe("when quat2A is the output quaternion", function() {
            beforeEach(function() { result = quat2.rotateByQuatAppend(quat2A, quat2A, [2, 5, 2, -10]); });
            
            it("should place values into quat2A", function() { expect(quat2A).toBeEqualishQuat2New(correctResult); });
            it("should return quat2A", function() { expect(result).toBe(quat2A); });
            it("should not modify the rotation quaternion", function() { expect(rotationQuat).toBeEqualishQuat2New([2,5,2,-10,0,0,0,0]); });
        });
    });
    
    describe("rotateByQuatPrepend", function() {
        var correctResult = quat2.create();
        var rotationQuat = quat2.create();
        beforeEach(function() {
            rotationQuat[0] = 2;
            rotationQuat[1] = 5;
            rotationQuat[2] = 2;
            rotationQuat[3] = -10;
            quat2.multiply(correctResult, rotationQuat, quat2A);
        })
        describe("with a separate output quaternion", function() {
            beforeEach(function() {
                result = quat2.rotateByQuatPrepend(out, quat2.getReal(outQuat, rotationQuat), quat2A);
            });
            
            it("should place values into out", function() { expect(out).toBeEqualishQuat2New(correctResult); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quat2A", function() { expect(quat2A).toBeEqualishQuat2New([1, 2, 3, 4, 2, 5, 6, -2]); });
            it("should not modify the rotation quaternion", function() { expect(rotationQuat).toBeEqualishQuat2New([2,5,2,-10,0,0,0,0]); });
        });

        describe("when quat2A is the output quaternion", function() {
            beforeEach(function() { result = quat2.rotateByQuatPrepend(quat2A, quat2.getReal(outQuat, rotationQuat), quat2A); });
            
            it("should place values into quat2A", function() { expect(quat2A).toBeEqualishQuat2New(correctResult); });
            it("should return quat2A", function() { expect(result).toBe(quat2A); });
            it("should not modify the rotation quaternion", function() { expect(rotationQuat).toBeEqualishQuat2New([2,5,2,-10,0,0,0,0]); });
        });
    });
    
    describe("rotateX", function() {
        var matrixA = mat4.create(), matOut = mat4.create(), quatOut = quat2.create();
        beforeEach(function() {
              //quat2A only seems to work when created using this function?
              quat2B = quat2.fromRotationTranslation(quat2A, [1,2,3,4], [-5, 4, 10]);
              quat2.normalize(quat2A, quat2A);
              mat4.fromQuat2(matrixA, quat2A);
            });
        describe("with a separate output quaternion", function() {
            beforeEach(function() { 
                    result = quat2.rotateX(out, quat2A, 5);
                    //Same thing with a matrix
                    mat4.rotateX(matOut, matrixA, 5);
                    quat2.fromMat4(quatOut, matOut);
                });
            
            it("should place values into out", function() { expect(out).toBeEqualishQuat2New(quatOut); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quat2A", function() { expect(quat2A).toBeEqualishQuat2New(quat2B); });
        });

        describe("when quat2A is the output quaternion", function() {
            beforeEach(function() { 
                    result = quat2.rotateX(quat2A, quat2A, 5);
                    //Same thing with a matrix
                    mat4.rotateX(matOut, matrixA, 5);
                    quat2.fromMat4(quatOut, matOut);
                });
            
            it("should place values into quat2A", function() { expect(quat2A).toBeEqualishQuat2New(quatOut); });
            it("should return quat2A", function() { expect(result).toBe(quat2A); });
        });
    });
    
    describe("rotateY", function() {
        var matrixA = mat4.create(), matOut = mat4.create(), quatOut = quat2.create();
        beforeEach(function() {
              //quat2A only seems to work when created using this function?
              quat2B = quat2.fromRotationTranslation(quat2A, [1,2,3,4], [5, 4, -10]);
              quat2.normalize(quat2A, quat2A);
              mat4.fromQuat2(matrixA, quat2A);
            });
            
        describe("with a separate output quaternion", function() {
            beforeEach(function() { 
                    result = quat2.rotateY(out, quat2A, -2);
                    //Same thing with a matrix
                    mat4.rotateY(matOut, matrixA, -2);
                    quat2.fromMat4(quatOut, matOut);
                });
            
            it("should place values into out", function() { expect(out).toBeEqualishQuat2New(quatOut); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quat2A", function() { expect(quat2A).toBeEqualishQuat2New(quat2B); });
        });

        describe("when quat2A is the output quaternion", function() {
            beforeEach(function() { 
                    result = quat2.rotateY(quat2A, quat2A, -2);
                    //Same thing with a matrix
                    mat4.rotateY(matOut, matrixA, -2);
                    quat2.fromMat4(quatOut, matOut);
                });
            
            it("should place values into quat2A", function() { expect(quat2A).toBeEqualishQuat2New(quatOut); });
            it("should return quat2A", function() { expect(result).toBe(quat2A); });
        });
    });
    
    describe("rotateZ", function() {
        var matrixA = mat4.create(), matOut = mat4.create(), quatOut = quat2.create();
        beforeEach(function() {
              //quat2A only seems to work when created using this function?
              quat2B = quat2.fromRotationTranslation(quat2A, [1,0,3,-4], [0, -4, -10]);
              quat2.normalize(quat2A, quat2A);
              mat4.fromQuat2(matrixA, quat2A);
            });
        describe("with a separate output quaternion", function() {
            beforeEach(function() { 
                    result = quat2.rotateZ(out, quat2A, 1);
                    //Same thing with a matrix
                    mat4.rotateZ(matOut, matrixA, 1);
                    quat2.fromMat4(quatOut, matOut);
                });
            
            it("should place values into out", function() { expect(out).toBeEqualishQuat2New(quatOut); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quat2A", function() { expect(quat2A).toBeEqualishQuat2New(quat2B); });
        });

        describe("when quat2A is the output quaternion", function() {
            beforeEach(function() { 
                    result = quat2.rotateZ(quat2A, quat2A, 1);
                    //Same thing with a matrix
                    mat4.rotateZ(matOut, matrixA, 1);
                    quat2.fromMat4(quatOut, matOut);
                });
            
            it("should place values into quat2A", function() { expect(quat2A).toBeEqualishQuat2New(quatOut); });
            it("should return quat2A", function() { expect(result).toBe(quat2A); });
        });
    });
    
    describe("from/toMat4", function() {
        var matRes = mat4.create(), matOut = mat4.create();
        describe("quat to matrix and back", function() {
            beforeEach(function() {
                //only seems to work when created with this function
                quat2.fromRotationTranslation(quat2A, [1,2,3,4], [1,-5,3]);

                matRes = mat4.fromQuat2(matOut, quat2A);
                
                result = quat2.fromMat4(out, matRes);
            });
            
            it("should return out", function() { expect(result).toBe(out); });
            it("should return matOut", function() { expect(matRes).toBe(matOut); });
            it("should not modify quat2A", function() { expect(quat2A).toBeEqualishQuat2New([1, 2, 3, 4,  -8.5, -10, 9.5, 0 ]); });
            
            it("should be equal to the starting dual quat", function() {
                expect(quat2A[0]).toBeEqualish(result[0]);
            });
            
            it("should be equal to the starting dual quat", function() {
                expect(quat2A[1]).toBeEqualish(result[1]);
            });
            
        });
    });

    describe("create", function() {
        beforeEach(function() { result = quat2.create(); });
        it("should return 2 4 element arrays initialized to an identity dual quaternion", function() { expect(result).toBeEqualishQuat2New([0, 0, 0, 1, 0, 0, 0, 0]); });
    });

    describe("clone", function() {
        beforeEach(function() { result = quat2.clone(quat2A); });
        it("should return 2 4 element arrays initialized to the values in quat2A", function() { expect(result).toBeEqualishQuat2New(quat2A); });
    });

    describe("fromValues", function() {
        beforeEach(function() { result = quat2.fromValues(1, 2, 3, 4, 5, 7, 8, -2); });
        it("should return 2 4 element arrays initialized to the values passedd to the values passed", function() { 
            expect(result).toBeEqualishQuat2New([1, 2, 3, 4, 5, 7, 8, -2]); 
        });
    });
    
    describe("copy", function() {
        beforeEach(function() { result = quat2.copy(out, quat2A); });
        it("should place values into out", function() { expect(out).toBeEqualishQuat2New([1, 2, 3, 4, 2, 5, 6, -2]); });
        it("should return out", function() { expect(result).toBe(out); });
    });

    describe("set", function() {
        beforeEach(function() { result = quat2.set(out, 1, 2, 3, 4, 2, 5, 6, -2); });
        it("should place values into out", function() { expect(out).toBeEqualishQuat2New([1, 2, 3, 4, 2, 5, 6, -2]); });
        it("should return out", function() { expect(result).toBe(out); });
    });

    describe("identity", function() {
        beforeEach(function() { result = quat2.identity(out); });
        it("should place values into out", function() { expect(result).toBeEqualishQuat2New([0, 0, 0, 1, 0, 0, 0, 0]); });
        it("should return out", function() { expect(result).toBe(out); });
    });

    describe("add", function() {
        describe("with a separate output dual quaternion", function() {
            beforeEach(function() { result = quat2.add(out, quat2A, quat2B); });
            
            it("should place values into out", function() { expect(out).toBeEqualishQuat2New([6, 8, 10, 12, 11, 13, 12, -6]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quat2A", function() { expect(quat2A).toBeEqualishQuat2New([1, 2, 3, 4, 2, 5, 6, -2]); });
            it("should not modify quat2B", function() { expect(quat2B).toBeEqualishQuat2New([5, 6, 7, 8, 9, 8, 6, -4]); });
        });

        describe("when quat2A is the output dual quaternion", function() {
            beforeEach(function() { result = quat2.add(quat2A, quat2A, quat2B); });
            
            it("should place values into quat2A", function() { expect(quat2A).toBeEqualishQuat2New([6, 8, 10, 12, 11, 13, 12, -6]); });
            it("should return quat2A", function() { expect(result).toBe(quat2A); });
            it("should not modify quat2B", function() { expect(quat2B).toBeEqualishQuat2New([5, 6, 7, 8, 9, 8, 6, -4])});
        });

        describe("when quat2B is the output dual quaternion", function() {
            beforeEach(function() { result = quat2.add(quat2B, quat2A, quat2B); });
            
            it("should place values into quat2B", function() { expect(quat2B).toBeEqualishQuat2New([6, 8, 10, 12, 11, 13, 12, -6]); });
            it("should return quat2B", function() { expect(result).toBe(quat2B); });
            it("should not modify quat2A", function() { expect(quat2A).toBeEqualishQuat2New([1, 2, 3, 4, 2, 5, 6, -2]); });
        });
    });

    describe("multiply", function() {
        it("should have an alias called 'mul'", function() { expect(quat2.mul).toEqual(quat2.multiply); });

        describe("with a separate output quaternion", function() {
            beforeEach(function() { result = quat2.multiply(out, quat2A, quat2B); });
            
            it("should place values into out", function() { expect(out).toBeEqualishQuat2New([24, 48, 48, -6,  25, 89, 23, -157 ]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quat2A", function() { expect(quat2A).toBeEqualishQuat2New([1, 2, 3, 4, 2, 5, 6, -2]); });
            it("should not modify quat2B", function() { expect(quat2B).toBeEqualishQuat2New([5, 6, 7, 8, 9, 8, 6, -4]); });
        });

        describe("when quat2A is the output quaternion", function() {
            beforeEach(function() { result = quat2.multiply(quat2A, quat2A, quat2B); });
            
            it("should place values into quat2A", function() { expect(quat2A).toBeEqualishQuat2New([24, 48, 48, -6,  25, 89, 23, -157 ]); });
            it("should return quat2A", function() { expect(result).toBe(quat2A); });
            it("should not modify quat2B", function() { expect(quat2B).toBeEqualishQuat2New([5, 6, 7, 8, 9, 8, 6, -4]); });
        });

        describe("when quat2B is the output quaternion", function() {
            beforeEach(function() { result = quat2.multiply(quat2B, quat2A, quat2B); });
            
            it("should place values into quat2B", function() { expect(quat2B).toBeEqualishQuat2New([24, 48, 48, -6,  25, 89, 23, -157 ]); });
            it("should return quat2B", function() { expect(result).toBe(quat2B); });
            it("should not modify quat2A", function() { expect(quat2A).toBeEqualishQuat2New([1, 2, 3, 4, 2, 5, 6, -2]); });
        });
        
        describe("same as matrix multiplication", function() {
            var matrixA = mat4.create(), matrixB = mat4.create();
            var matOut = mat4.create(), quatOut = quat2.create();
           beforeEach(function() {
              //quat2A and quat2B only seem to work when created using this function?
              quat2.fromRotationTranslation(quat2A, [1,2,3,4], [-5, 4, 10]);
              quat2.normalize(quat2A, quat2A);
              mat4.fromQuat2(matrixA, quat2A);
              
              quat2.fromRotationTranslation(quat2B, [5, 6, 7, 8], [9, 8, 6]);
              quat2.normalize(quat2B, quat2B);
              mat4.fromQuat2(matrixB, quat2B);
              
            });
            it("the matrices should be equal to the dual quaternions", function() {
                var testQuat = quat2.create();
                quat2.fromMat4(testQuat, matrixA);
                expect(testQuat).toBeEqualishQuat2New(quat2A);
                
                quat2.fromMat4(testQuat, matrixB);
                expect(testQuat).toBeEqualishQuat2New(quat2B);
            });
            
            it("should be equal to the matrix multiplication", function() {
                quat2.multiply(out, quat2A, quat2B);
                mat4.mul(matOut, matrixA, matrixB);
                quat2.fromMat4(quatOut, matOut);
                expect(out).toBeEqualishQuat2New(quatOut);
            });
           
        });
    });

    describe("scale", function() {
        describe("with a separate output dual quaternion", function() {
            beforeEach(function() { result = quat2.scale(out, quat2A, 2); });
            it("should place values into out", function() { expect(out).toBeEqualishQuat2New([2, 4, 6, 8, 4, 10, 12, -4]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quat2A", function() { expect(quat2A).toBeEqualishQuat2New([1, 2, 3, 4, 2, 5, 6, -2]); });
        });
        
        describe("when quat2A is the output dual quaternion", function() {
            beforeEach(function() { result = quat2.scale(quat2A, quat2A, 2); });
            
            it("should place values into quat2A", function() { expect(quat2A).toBeEqualishQuat2New([2, 4, 6, 8, 4, 10, 12, -4]); });
            it("should return quat2A", function() { expect(result).toBe(quat2A); });
        });
    });

    describe("length", function() {
        it("should have an alias called 'len'", function() { expect(quat2.len).toEqual(quat2.length); });

        beforeEach(function() { result = quat2.length(quat2A); });
        
        it("should return the length", function() { expect(result).toBeCloseTo(5.477225); });
    });

    describe("squaredLength", function() {
        it("should have an alias called 'sqrLen'", function() { expect(quat2.sqrLen).toEqual(quat2.squaredLength); });

        beforeEach(function() { result = quat2.squaredLength(quat2A); });
        
        it("should return the squared length", function() { expect(result).toEqual(30); });
    });
    
    describe("fromRotation", function() {
        beforeEach(function() { result = quat2.fromRotation(out, [1, 2, 3, 4]); });
        it("should place values into out", function() { expect(out).toBeEqualishQuat2New([1, 2, 3, 4, 0, 0, 0, 0]); });
        it("should return out", function() { expect(result).toBe(out); });
        it("should not modify the quaternion", function() { expect(quat2A).toBeEqualishQuat2New([1, 2, 3, 4, 2, 5, 6, -2]); });
    });
    
    describe("fromTranslation", function(){
        beforeEach(function() { vec = [1, 2, 3]; result = quat2.fromTranslation(out, vec); });
        it("should place values into out", function() { expect(out).toBeEqualishQuat2New([0, 0, 0, 1, 0.5, 1, 1.5, 0]); });
        it("should return out", function() { expect(result).toBe(out); });
        it("should not modify the vector", function() { expect(vec).toBeEqualish([1, 2, 3]); });
    });
    
    describe("fromRotationTranslation", function() {
        beforeEach(function() { 
            vec = [1, 2, 3]; 
            result = quat2.fromRotationTranslation(out, [1, 2, 3, 4], vec); 
        });
        it("should place values into out", function() { expect(out).toBeEqualishQuat2New([1, 2, 3, 4,  2, 4, 6, -7]); });
        it("should return out", function() { expect(result).toBe(out); });
        it("should not modify the quaternion", function() { expect(quat2.getReal(outQuat, quat2A)).toBeEqualish([1, 2, 3, 4]); });
        it("should not modify the vector", function() { expect(vec).toBeEqualish([1, 2, 3]); });
        it("should have a translation that can be retrieved with getTranslation", function() {
            var t = [0, 0, 0];
            quat2.normalize(out, out);
            quat2.getTranslation(t, out);

            expect(t).toBeEqualish([1, 2, 3]);
        });
    });
    
    describe("fromRotationTranslationValues", function() {
        beforeEach(function() { result = quat2.fromRotationTranslationValues(1,2,3,4, 1,2,3); });
        it("should return the correct result", function() { expect(result).toBeEqualishQuat2New([1, 2, 3, 4,  2, 4, 6, -7]); });
        it("should have a translation that can be retrieved with getTranslation", function() {
            var t = [0, 0, 0];
            quat2.normalize(result, result);
            quat2.getTranslation(t, result);
            expect(t).toBeEqualish([1, 2, 3]); 
        });
    });
    
    describe("getTranslation", function() {
        describe("without a real part", function() {
           beforeEach(function() {
               quat2.fromTranslation(out, [1,2,3]);
               resultVec = quat2.getTranslation(outVec, out);
           });
           describe("not normalized", function() {
                    it("should return the same translation value", function() { expect(outVec).toBeEqualish([1, 2, 3]); });
                    it("should return out", function() { expect(outVec).toBe(resultVec); });
               });
           describe("normalized", function() {
                it("should return the same translation value", function() { 
                    quat2.normalize(outVec, outVec);
                    expect(outVec).toBeEqualish([1, 2, 3]); 
                });
           });
        });
        describe("with a real part", function() {
            beforeEach(function() {
                quat2.fromRotationTranslation(out, [2, 4, 6, 2], [1, 2, 3]);
                resultVec = quat2.getTranslation(outVec, out);
            });
            describe("not normalized", function() {
                    it("should not return the same translation value", function() { expect(outVec).not.toBeEqualish([1, 2, 3]); });
                    it("should return out", function() { expect(outVec).toBe(resultVec); });
               });
            describe("normalized", function() {
                it("should return the same translation value", function() { 
                    quat2.normalize(out, out);
                    quat2.getTranslation(outVec, out);
                    expect(outVec).toBeEqualish([1, 2, 3]); 
                });
           });
        });
    });
    
    describe("normalize", function() {
        describe("when it is normalizing quat2A", function() {
            beforeEach(function() { 
                quat2A = [1, 2, 3, 4, 2, 5, 6, -2];
                quat2.normalize(out, quat2A);
            });
            it("both parts should have been normalized", function() { expect(out).toBeEqualishQuat2New([1/5.47722558, 2/5.47722558, 3/5.47722558, 4/5.47722558, 2/5.47722558, 5/5.47722558, 6/5.47722558, -2/5.47722558]); });
        });
        
        beforeEach(function() { quat2A = [5, 0, 0, 0, 0, 0, 0, 0]; });

        describe("with a separate output quaternion", function() {
            beforeEach(function() { result = quat2.normalize(out, quat2A); });
            
            it("should place values into out", function() { expect(out).toBeEqualishQuat2New([1, 0, 0, 0, 0, 0, 0, 0]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quat2A", function() { expect(quat2A).toBeEqualishQuat2New([5, 0, 0, 0, 0, 0, 0, 0]); });
        });

        describe("when quat2A is the output quaternion", function() {
            beforeEach(function() { result = quat2.normalize(quat2A, quat2A); });
            
            it("should place values into quat2A", function() { expect(quat2A).toBeEqualishQuat2New([1, 0, 0, 0, 0, 0, 0, 0]); });
            it("should return quat2A", function() { expect(result).toBe(quat2A); });
        });
        
        describe("when it contains a translation", function() {
            beforeEach(function() { 
                quat2.set(out, 5, 0, 0, 0, 1, 2, 3, 5);
                quat2.normalize(out, out);
            });
            it("both parts should have been normalized", function() { expect(out).toBeEqualishQuat2New([1, 0, 0, 0, 1/5, 2/5, 3/5, 5/5]); });
        });
    });

    describe("lerp", function() {
        describe("with a separate output quaternion", function() {
            beforeEach(function() { result = quat2.lerp(out, quat2A, quat2B, 0.7); });
            
            it("should place values into out", function() { expect(out).toBeEqualishQuat2New([3.8, 4.8, 5.8, 6.8, 6.9, 7.1, 6.0, -3.4]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quat2A", function() { expect(quat2A).toBeEqualishQuat2New([1, 2, 3, 4, 2, 5, 6, -2]); });
            it("should not modify quat2B", function() { expect(quat2B).toBeEqualishQuat2New([5, 6, 7, 8, 9, 8, 6, -4]); });
        });
        
        describe("when quat2A is the output quaternion", function() {
            beforeEach(function() { result = quat2.lerp(quat2A, quat2A, quat2B, 0.5); });
            
            it("should place values into quat2A", function() { expect(quat2A).toBeEqualishQuat2New([3, 4, 5, 6,5.5, 6.5, 6, -3]); });
            it("should return quat2A", function() { expect(result).toBe(quat2A); });
            it("should not modify quat2B", function() { expect(quat2B).toBeEqualishQuat2New([5, 6, 7, 8, 9, 8, 6, -4]); });
        });

        describe("when quat2B is the output quaternion", function() {
            beforeEach(function() { result = quat2.lerp(quat2B, quat2A, quat2B, 0.5); });
            
            it("should place values into quat2B", function() { expect(quat2B).toBeEqualishQuat2New([3, 4, 5, 6,5.5, 6.5, 6, -3]); });
            it("should return quat2B", function() { expect(result).toBe(quat2B); });
            it("should not modify quat2A", function() { expect(quat2A).toBeEqualishQuat2New([1, 2, 3, 4, 2, 5, 6, -2]); });
        });
        
        describe("shortest path", function() {
            beforeEach(function() { result = quat2.lerp(out, [1, 2, 3, -4, 2, 5, 6, -2], [5, -6, 7, 8, 9, 8, 6, -4], 0.4); });
            it("should pick the shorter path", function() { expect(out).toBeEqualishQuat2New([ -1.4, 3.6, -1, -5.6, -2.4, -0.2, 1.2, 0.4 ]); });
        });
    });

    /*
describe("slerp", function() {
        describe("with a separate output quaternion", function() {
            beforeEach(function() { result = quat2.slerp(out, quat2A, quat2B, 0.5); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([3, 4, 5, 6]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quat2A", function() { expect(quat2A).toBeEqualish([1, 2, 3, 4]); });
            it("should not modify quat2B", function() { expect(quat2B).toBeEqualish([5, 6, 7, 8]); });
        });

        describe("when quat2A is the output quaternion", function() {
            beforeEach(function() { result = quat2.slerp(quat2A, quat2A, quat2B, 0.5); });
            
            it("should place values into quat2A", function() { expect(quat2A).toBeEqualish([3, 4, 5, 6]); });
            it("should return quat2A", function() { expect(result).toBe(quat2A); });
            it("should not modify quat2B", function() { expect(quat2B).toBeEqualish([5, 6, 7, 8]); });
        });

        describe("when quat2B is the output quaternion", function() {
            beforeEach(function() { result = quat.slerp(quat2B, quat2A, quat2B, 0.5); });
            
            it("should place values into quat2B", function() { expect(quat2B).toBeEqualish([3, 4, 5, 6]); });
            it("should return quat2B", function() { expect(result).toBe(quat2B); });
            it("should not modify quat2A", function() { expect(quat2A).toBeEqualish([1, 2, 3, 4]); });
        });
    });*/

    // TODO: slerp, calcuateW
    describe("dot", function() {
        describe("with a separate output dual quaternion", function() {
            beforeEach(function() { result = quat2.dot(quat2A, quat2B); });
            it("should return the dot product", function() { expect(result).toBeEqualish(70); });
            it("should not modify quat2A", function() { expect(quat2A).toBeEqualishQuat2New([1, 2, 3, 4, 2, 5, 6, -2]); });
            it("should not modify quat2B", function() { expect(quat2B).toBeEqualishQuat2New([5, 6, 7, 8, 9, 8, 6, -4]); });
        });
    });
    
    //TODO: Not sure if this is correct
    describe("invert", function() {
        describe("with a separate output dual quaternion", function() {
            beforeEach(function() { result = quat2.invert(out, quat2A); });
            
            //it("should place values into out", function() { expect(out).toBeEqualishQuat2New([-0.0333333333, -0.06666666666, -0.1, 0.13333333333, 2/30, 5/30, 6/30, 2/30]); });
            it("should place values into out", function() { expect(out).toBeEqualishQuat2New([-0.0333333333, -0.06666666666, -0.1, 0.13333333333, -2/30, -5/30, -6/30, -2/30]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quat2A", function() { expect(quat2A).toBeEqualishQuat2New([1, 2, 3, 4, 2, 5, 6, -2]); });
            it("the real part should be equal to a inverted quaternion", function() {
                quat.invert(outQuat, [1, 2, 3, 4]);
                
                expect(quat2.getReal(outQuat, out)).toBeEqualish(outQuat);
            });
        });

        describe("when quat2A is the output quaternion", function() {
            beforeEach(function() { result = quat2.invert(quat2A, quat2A); });
            
            it("should place values into quat2A", function() { expect(quat2A).toBeEqualish([-0.0333333333, -0.06666666666, -0.1, 0.13333333333, -2/30, -5/30, -6/30, -2/30]); });
            it("should return quat2A", function() { expect(result).toBe(quat2A); });
            
        });
    });
    
    describe("get real/dual", function() {
        describe("get real", function() {
            beforeEach(function() { result = quat2.getReal(outQuat, quat2A); });
            
            it("should place values into out", function() { expect(outQuat).toBeEqualish([1, 2, 3, 4]); });
            it("should return out", function() { expect(result).toBe(outQuat); });
            it("should not modify quat2A", function() { expect(quat2A).toBeEqualishQuat2New([1, 2, 3, 4, 2, 5, 6, -2]); });
        });
        
        describe("get dual", function() {
            beforeEach(function() { result = quat2.getDual(outQuat, quat2A); });
            
            it("should place values into out", function() { expect(outQuat).toBeEqualish([2, 5, 6, -2]); });
            it("should return out", function() { expect(result).toBe(outQuat); });
            it("should not modify quat2A", function() { expect(quat2A).toBeEqualishQuat2New([1, 2, 3, 4, 2, 5, 6, -2]); });
        });
    });
    
    describe("set real/dual", function() {
        describe("set real", function() {
            beforeEach(function() { 
                outQuat = [4, 6, 8, -100];
                result = quat2.setReal(quat2A, outQuat); 
            });
            
            it("should place values into out", function() { expect(quat2A).toBeEqualishQuat2New([4, 6, 8, -100, 2, 5, 6, -2]); });
            it("should return out", function() { expect(result).toBe(quat2A); });
            it("should not modify outQuat", function() { expect(outQuat).toBeEqualish([4, 6, 8, -100]); });
        });
        
        describe("set dual", function() {
            beforeEach(function() {
                outQuat = [4.3, 6, 8, -100];
                result = quat2.setDual(quat2A, outQuat);
            });
            
            it("should place values into out", function() { expect(quat2A).toBeEqualishQuat2New([1, 2, 3, 4, 4.3, 6, 8, -100]); });
            it("should return out", function() { expect(result).toBe(quat2A); });
            it("should not modify outQuat", function() { expect(outQuat).toBeEqualish([4.3, 6, 8, -100]); });
        });
    });
    
    describe("conjugate", function() {
        describe("with a separate output dual quaternion", function() {
            beforeEach(function() { result = quat2.conjugate(out, quat2A); });
            
            it("should place values into out", function() { expect(out).toBeEqualishQuat2New([-1, -2, -3, 4, -2, -5, -6, -2]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify quat2A", function() { expect(quat2A).toBeEqualishQuat2New([1, 2, 3, 4, 2, 5, 6, -2]); });
        });

        describe("when quat2A is the output dual quaternion", function() {
            beforeEach(function() { result = quat2.conjugate(quat2A, quat2A); });
            
            it("should place values into quat2A", function() { expect(quat2A).toBeEqualishQuat2New([-1, -2, -3, 4, -2, -5, -6, -2]); });
            it("should return quat2A", function() { expect(result).toBe(quat2A); });
        });
    });

    describe("str", function() {
        beforeEach(function() { result = quat2.str(quat2A); });
        
        it("should return a string representation of the quaternion", function() { expect(result).toEqual("quat2(1, 2, 3, 4, 2, 5, 6, -2)"); });
    });
    
    describe("exactEquals", function() {
        var quat2C, r0, r1;
        beforeEach(function() {
            quat2A = [0, 1, 2, 3, 4, 5, 6, 7];
            quat2B = [0, 1, 2, 3, 4, 5, 6, 7];
            quat2C = [1, 2, 3, 4, 5, 6, 7, 8];
            r0 = quat2.exactEquals(quat2A, quat2B);
            r1 = quat2.exactEquals(quat2A, quat2C);
        });

        it("should return true for identical quaternions", function() { expect(r0).toBe(true); });
        it("should return false for different quaternions", function() { expect(r1).toBe(false); });
        it("should not modify quat2A", function() { expect(quat2A).toBeEqualishQuat2New([0, 1, 2, 3, 4, 5, 6, 7]); });
        it("should not modify quat2B", function() { expect(quat2B).toBeEqualishQuat2New([0, 1, 2, 3, 4, 5, 6, 7]); });
    });

    describe("equals", function() {
        var quat2C, quat2D, r0, r1, r2;
        beforeEach(function() {
            quat2A = [0, 1, 2, 3, 4, 5, 6, 7];
            quat2B = [0, 1, 2, 3, 4, 5, 6, 7];
            quat2C = [1, 2, 3, 4, 5, 6, 7, 8];
            quat2D = [1e-16, 1, 2, 3, 4, 5, 6, 7];
            r0 = quat2.equals(quat2A, quat2B);
            r1 = quat2.equals(quat2A, quat2C);
            r2 = quat2.equals(quat2A, quat2D);
        });
        it("should return true for identical dual quaternions", function() { expect(r0).toBe(true); });
        it("should return false for different dual quaternions", function() { expect(r1).toBe(false); });
        it("should return true for close but not identical quaternions", function() { expect(r2).toBe(true); });
        it("should not modify quat2A", function() { expect(quat2A).toBeEqualishQuat2New([0, 1, 2, 3, 4, 5, 6, 7]); });
        it("should not modify quat2B", function() { expect(quat2B).toBeEqualishQuat2New([0, 1, 2, 3, 4, 5, 6, 7]); });
    });
    
});
