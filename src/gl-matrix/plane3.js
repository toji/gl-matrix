/*
* @class 3D Plane - A 3D plane described by a vec3 normal and a distance from origin.
* @name plane3
*/
var plane3 = {};

/**
* Creates a new plane
*
* @returns {plane3} a new 3D plane
*/
plane3.create = function(){
    var out = {};
    out.normal = new GLMAT_ARRAY_TYPE(3);
    out.dist = 0.0;

    out.normal[0] = 0;
    out.normal[1] = 1;
    out.normal[2] = 0;

    return out;
};

/**
* Normalize a plane normal & its distance
*
* @param {plane3} out the receiving plane
* @param {plane3} a the source plane
* @returns {plane3} the normalized plane
*/
plane3.normalize = function(out, a){
    var len = vec3.length(a.normal);
  
    vec3.normalize(out.normal, a.normal);
    out.dist = a.dist / len;

    return out;
};

/**
* Classify a point to a plane
*
* @param {plane3} a the plane to classify to
* @param {vec3} v the vec3 point to classify
* @returns {Number} distance of the vec3 point to plane,
*                   if positive then the point is front of the plane.
*                   if negative then the point is behind the plane.
*                   if 0 then point lies on plane.
*/
plane3.classifyVec3 = function(a, v){
    return ((a.normal[0]*v[0]) + (a.normal[1]*v[1]) + (a.normal[2]*v[2]) + a.dist);
};
