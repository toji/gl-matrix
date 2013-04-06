/*
* @class 3 Dimensional Plane
* @name plane3
*/
var plane3 = {};

/*
* Creates a new plane3
* @returns {normal, distance} a new 3D Plane
*/
plane3.create = function(){
  var out = {};

	//plane normal
	out.normal = [];
	out.normal[0] = 0;
	out.normal[1] = 1;
	out.normal[2] = 0;
	//plane distance from origin
	out.distance = 0;

	return out;
};

/*
* Creates a new plane3 initialized with the values passed.
* @param {Number} a X component of plane normal
* @param {Number} b Y component of plane normal
* @param {Number} c Z component of plane normal
* @param {Number} d Shortest distance from the plane to the origin.
* @returns {normal, distance} a new 3D Plane
* @note The plane normal is normalized before being returned.
*/
plane3.fromValues = function(a, b, c, d){
	var out = {};

	//plane normal
	out.normal = [];
	out.normal[0] = a;
	out.normal[1] = b;
	out.normal[2] = c;
	//plane distance from origin
	out.distance = d;

	//Normalize normal vector
	var len = Math.sqrt(a*a + b*b + c*c);
	if(len != 1){
		out.normal[0] /= len;
		out.normal[1] /= len;
		out.normal[2] /= len;
	}

	return out;
};

/*
* Creates a new plane3 from a normal and a point on the plane
* @param {Number} a X component of plane normal
* @param {Number} b Y component of plane normal
* @param {Number} c Z component of plane normal
* @param {Number} x X component of the point
* @param {Number} y Y component of the point
* @param {Number} z Z component of the point
* @returns {normal, distance} a new 3D Plane
* @note The plane normal is normalized before being returned.
*/
plane3.fromPoint = function(a, b, c, x, y, z){
	var out = {};

	//plane normal
	out.normal = [];
	out.normal[0] = a;
	out.normal[1] = b;
	out.normal[2] = c;

	//Normalize normal vector
	var len = Math.sqrt(a*a + b*b + c*c);
	if(len != 1){
		out.normal[0] /= len;
		out.normal[1] /= len;
		out.normal[2] /= len;
	}

	//plane distance from origin
	out.distance = (out.normal[0]*x) + (out.normal[1]*y) + (out.normal[2]*z);

	return out;
};

/*
* Creates a new plane3 initialized to the values of an existing plane3
* @param {plane3} p The plane3 to clone
* @returns {normal, distance} a new 3D Plane
*/
plane3.clone = function(p){
	var out = {};

	out.normal = [];
	out.normal[0] = p.normal[0];
	out.normal[1] = p.normal[1];
	out.normal[2] = p.normal[2];
	out.distance = p.distance;

	return out;
};

/*
* Copy the values of a plane3 to another.
* @param {plane3} out The receiving plane3
* @param {plane3} p The input plane3 to copy from
* @returns {plane3} out
*/
plane3.copy = function(out, p){
	out.normal[0] = p.normal[0];
	out.normal[1] = p.normal[1];
	out.normal[2] = p.normal[2];
	out.distance = p.distance;

	return out;
};

/*
* Set the values of an existing plane3
* @param {plane3} out The receiving plane3
* @param {Number} a X component of the plane normal
* @param {Number} b Y component of the plane normal
* @param {Number} c Z component of the plane normal
* @param {Number} d Shortest distance from the plane to the origin
* @returns {plane3} out
* @note the plane normal is normalized before being returned.
*/
plane3.set = function(out, a, b, c, d){
	out.normal[0] = a;
	out.normal[1] = b;
	out.normal[2] = c;
	out.distance = d;

	//Normalize normal vector
	var len = Math.sqrt(a*a + b*b + c*c);
	if(len != 1){
		out.normal[0] /= len;
		out.normal[1] /= len;
		out.normal[2] /= len;
	}

	return out;
};

/*
* Set the normal of an existing plane3
* @param {plane3} out The receiving plane3
* @param {Number} a X component of the plane normal
* @param {Number} b Y component of the plane normal
* @param {Number} c Z component of the plane normal
* @returns {plane3} out
* @note the plane normal is normalized before being returned.
*/
plane3.setNormal = function(out, a, b, c){
	out.normal[0] = a;
	out.normal[1] = b;
	out.normal[2] = c;

	//Normalize normal vector
	var len = Math.sqrt(a*a + b*b + c*c);
	if(len != 1){
		out.normal[0] /= len;
		out.normal[1] /= len;
		out.normal[2] /= len;
	}

	return out;
};

/*
* Set the distance of an existing plane3
* @param {plane3} out The receiving plane3
* @param {Number} d The distance from the plane to the origin
* @returns {plane3} out
*/
plane3.setDistance = function(out, d){
	out.distance = d;

	return out;
};

/*
* Normalize the normal of a plane3
* @param {plane3} out The receiving plane3
* @param {plane3} p The plane to normalize
* @returns {plane3} out
*/
plane3.normalize = function(out, p){
	var a = p.normal[0];
	var b = p.normal[1];
	var c = p.normal[2];

	var len = Math.sqrt(a*a + b*b + c*c);
	if(len != 1){
		out.normal[0] = a/len;
		out.normal[1] = b/len;
		out.normal[2] = c/len;
		out.distance = p.distance;
	}

	return out;
};

/*
* Classify a point against a plane.
* @param {plane3} p The plane3 to classify to
* @param {vec3} v The vec3 point to classify
* @returns {Number} The distance from the point to the plane
* @note if returns > 0 then the point is infront of the plane
*		if returns < 0 then the point is behind the plane
*       if returns 0 then the point is on the plane
*/
plane3.classifyVec3 = function(p, v){
	return (p.normal[0]*v[0] + p.normal[1]*v[1] + p.normal[2]*v[2] - p.distance);
};

/*
* Classify a point against a plane.
* @param {plane3} p The plane3 to classify to
* @param {Number} x X component of the point to classify
* @param {Number} y Y component of the point to classify
* @param {Number} z Z component of the point to classify
* @returns {Number} The distance from the point to the plane
* @note if returns > 0 then the point is infront of the plane
*		if returns < 0 then the point is behind the plane
*       if returns 0 then the point is on the plane
*/
plane3.classify = function(p, x, y, z){
	return (p.normal[0]*x + p.normal[1]*y + p.normal[2]*z - p.distance);
};

/*
* Returns a string representation of a plane3
* @param {plane3} p The plane3 to represent as a string
* @param {String} String representation of the plane3
*/
plane3.str = function(p){
	return ('plane3('+p.normal[0]+', '+p.normal[1]+','+p.normal[2]+', '+p.distance+')');
};
