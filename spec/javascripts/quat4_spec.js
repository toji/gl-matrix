describe("quat4", function() {
  var dest;
  beforeEach(function() { dest = quat4.create(); });
  
  describe("fromRotationMatrix", function() {
    var mat;
    beforeEach(function() { mat = mat3.create([1, 0, 0, 0, 0, -1, 0, 1, 0]); });
    
    describe("with a dest quat4", function() {
      it("should return dest", function() {
        expect(quat4.fromRotationMatrix(mat, dest)).toBe(dest);
      });
      
      it("should set dest to the correct value", function() {
        quat4.fromRotationMatrix(mat, dest);
        expect(dest).toBeEqualish([0.707106, 0, 0, 0.707106]);
      });
      
      it("should not modify mat", function() {
        expect(mat).toBeEqualish([1, 0, 0, 0, 0, -1, 0, 1, 0]);
      });
    });
    
    describe("without a dest quat4", function() {
      it("should return a new quat4", function() {
        expect(quat4.fromRotationMatrix(mat)).toBeEqualish([0.707106, 0, 0, 0.707106]);
      });

      it("should not modify mat", function() {
        expect(mat).toBeEqualish([1, 0, 0, 0, 0, -1, 0, 1, 0]);
      });
    });
    
    it("should be aliased as mat3.toQuat4", function() {
      expect(mat3.toQuat4(mat)).toBeEqualish([0.707106, 0, 0, 0.707106]);
    });
  });
  
  describe("fromAxes", function() {
    var view, right, up, dest;
    beforeEach(function() {
      right = vec3.create([1,  0, 0]);
      up    = vec3.create([0,  0, 1]);
      view  = vec3.create([0, -1, 0]);
      dest  = quat4.create();
    });
    
    describe("with a dest quat4", function() {
      it("should not modify view", function() {
        quat4.fromAxes(view, right, up, dest);
        expect(view).toBeEqualish([0, -1, 0]);
      });

      it("should not modify up", function() {
        quat4.fromAxes(view, right, up, dest);
        expect(up).toBeEqualish([0, 0, 1]);
      });

      it("should not modify right", function() {
        quat4.fromAxes(view, right, up, dest);
        expect(right).toBeEqualish([1, 0, 0]);
      });
      
      it("should return dest", function() {
        expect(quat4.fromAxes(view, right, up, dest)).toBe(dest);
      });
      
      it("should set correct quat4 values", function() {
        quat4.fromAxes(view, right, up, dest);
        expect(dest).toBeEqualish([0.707106, 0, 0, 0.707106]);
      });
    });
    
    describe("without a dest quat4", function() {
      it("should not modify view", function() {
        quat4.fromAxes(view, right, up, dest);
        expect(view).toBeEqualish([0, -1, 0]);
      });

      it("should not modify up", function() {
        quat4.fromAxes(view, right, up, dest);
        expect(up).toBeEqualish([0, 0, 1]);
      });

      it("should not modify right", function() {
        quat4.fromAxes(view, right, up, dest);
        expect(right).toBeEqualish([1, 0, 0]);
      });
      
      it("should return correct quat4 values", function() {
        expect(quat4.fromAxes(view, right, up)).toBeEqualish([0.707106, 0, 0, 0.707106]);
      });
    });
  });
  
  describe("identity", function() {
    describe("with a dest quat4", function() {
      it("should return dest", function() {
        expect(quat4.identity(dest)).toBe(dest);
      });
      
      it("should set dest to identity", function() {
        quat4.identity(dest);
        expect(dest).toBeEqualish([0, 0, 0, 1]);
      });
    });
    
    describe("with no dest", function() {
      it("should return a new identity quat4", function() {
        expect(quat4.identity()).toBeEqualish([0, 0, 0, 1]);
      });
    });
  });
  
  describe("fromAngleAxis", function() {
    var axis, angle;
    
    beforeEach(function() {
      angle = 0.466;
      axis = vec3.create([0.627, 0, 0.778]);
    });
    
    describe("with a dest quat4", function() {
      it("should set the value of dest", function() {
        quat4.fromAngleAxis(angle, axis, dest);
        expect(dest).toBeEqualish([0.144772, 0, 0.179638, 0.972978]);
      });
      
      it("should return dest", function() {
        expect(quat4.fromAngleAxis(angle, axis, dest)).toBe(dest);
      });
      
      it("should not modify axis", function() {
        quat4.fromAngleAxis(angle, axis, dest);
        expect(axis).toBeEqualish([0.627, 0, 0.778]);
      });
    });
    
    describe("without a dest quat4", function() {
      it("should return the correct quat4", function() {
        expect(quat4.fromAngleAxis(angle, axis)).toBeEqualish([0.144772, 0, 0.179638, 0.972978]);
      });
      
      it("should not modify axis", function() {
        quat4.fromAngleAxis(angle, axis, dest);
        expect(axis).toBeEqualish([0.627, 0, 0.778]);
      });
    });
  });
  
  describe("toAngleAxis", function() {
    var quat;
    
    beforeEach(function() {
      quat = quat4.create([0.144772, 0, 0.179638, 0.972978]);
    });
    
    describe("with a dest vec4", function() {
      var dest;
      
      beforeEach(function() { dest = [0,0,0,0]; });
      
      it("should set the value of dest", function() {
        quat4.toAngleAxis(quat, dest);
        expect(dest).toBeEqualish([0.627490, 0, 0.778611, 0.466000]);
      });
      
      it("should return dest", function() {
        expect(quat4.toAngleAxis(quat, dest)).toBe(dest);
      });
      
      it("should not modify quat", function() {
        quat4.toAngleAxis(quat, dest);
        expect(quat).toBeEqualish([0.144772, 0, 0.179638, 0.972978]);
      });
    });
    
    describe("without a dest vec4", function() {
      it("should return the correct values", function() {
        expect(quat4.toAngleAxis(quat)).toBeEqualish([0.627490, 0, 0.778611, 0.466000]);
      });
      
      it("should modify quat", function() {
        quat4.toAngleAxis(quat);
        expect(quat).toBeEqualish([0.627490, 0, 0.778611, 0.466000]);
      });
    });
  });
});
