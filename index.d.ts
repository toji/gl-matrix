type TypedArray
    = Float64Array
    | Float32Array
    | Int32Array
    | Int16Array
    | Int8Array
    | Uint32Array
    | Uint16Array
    | Uint8Array;

type Vec2 = [number, number] | number[] | TypedArray;
type Vec3 = [number, number, number] | number[] | TypedArray;
type Vec4 = [number, number, number, number] | number[] | TypedArray;
type Mat2 = TypedArray;
type Mat2d = TypedArray;
type Mat3 = TypedArray;
type Mat4 = TypedArray;
type Quat = [number, number, number] | number[] | TypedArray;

declare module '@2gis/gl-matrix/vec2' {
        /**
     * Creates a new, empty vec2
     *
     * @returns a new 2D vector
     */
    export function create(): Vec2;

    /**
     * Creates a new vec2 initialized with values from an existing vector
     *
     * @param a a vector to clone
     * @returns a new 2D vector
     */
    export function clone(a: Vec2): Vec2;

    /**
     * Creates a new vec2 initialized with the given values
     *
     * @param x X component
     * @param y Y component
     * @returns a new 2D vector
     */
    export function fromValues(x: number, y: number): Vec2;

    /**
     * Copy the values from one vec2 to another
     *
     * @param out the receiving vector
     * @param a the source vector
     * @returns out
     */
    export function copy(out: Vec2, a: Vec2): Vec2;

    /**
     * Set the components of a vec2 to the given values
     *
     * @param out the receiving vector
     * @param x X component
     * @param y Y component
     * @returns out
     */
    export function set(out: Vec2, x: number, y: number): Vec2;

    /**
     * Adds two vec2's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function add(out: Vec2, a: Vec2, b: Vec2): Vec2;

    /**
     * Subtracts vector b from vector a
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function subtract(out: Vec2, a: Vec2, b: Vec2): Vec2;

    /**
     * Subtracts vector b from vector a
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function sub(out: Vec2, a: Vec2, b: Vec2): Vec2;

    /**
     * Multiplies two vec2's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function multiply(out: Vec2, a: Vec2, b: Vec2): Vec2;

    /**
     * Multiplies two vec2's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function mul(out: Vec2, a: Vec2, b: Vec2): Vec2;

    /**
     * Divides two vec2's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function divide(out: Vec2, a: Vec2, b: Vec2): Vec2;

    /**
     * Divides two vec2's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function div(out: Vec2, a: Vec2, b: Vec2): Vec2;

    /**
     * Math.ceil the components of a vec2
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a vector to ceil
     * @returns {vec2} out
     */
    export function ceil(out: Vec2, a: Vec2): Vec2;

    /**
     * Math.floor the components of a vec2
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a vector to floor
     * @returns {vec2} out
     */
    export function floor (out: Vec2, a: Vec2): Vec2;

    /**
     * Returns the minimum of two vec2's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function min(out: Vec2, a: Vec2, b: Vec2): Vec2;

    /**
     * Returns the maximum of two vec2's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function max(out: Vec2, a: Vec2, b: Vec2): Vec2;

    /**
     * Math.round the components of a vec2
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a vector to round
     * @returns {vec2} out
     */
    export function round(out: Vec2, a: Vec2): Vec2;


    /**
     * Scales a vec2 by a scalar number
     *
     * @param out the receiving vector
     * @param a the vector to scale
     * @param b amount to scale the vector by
     * @returns out
     */
    export function scale(out: Vec2, a: Vec2, b: number): Vec2;

    /**
     * Adds two vec2's after scaling the second operand by a scalar value
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @param scale the amount to scale b by before adding
     * @returns out
     */
    export function scaleAndAdd(out: Vec2, a: Vec2, b: Vec2, scale: number): Vec2;

    /**
     * Calculates the euclidian distance between two vec2's
     *
     * @param a the first operand
     * @param b the second operand
     * @returns distance between a and b
     */
    export function distance(a: Vec2, b: Vec2): number;

    /**
     * Calculates the euclidian distance between two vec2's
     *
     * @param a the first operand
     * @param b the second operand
     * @returns distance between a and b
     */
    export function dist(a: Vec2, b: Vec2): number;

    /**
     * Calculates the squared euclidian distance between two vec2's
     *
     * @param a the first operand
     * @param b the second operand
     * @returns squared distance between a and b
     */
    export function squaredDistance(a: Vec2, b: Vec2): number;

    /**
     * Calculates the squared euclidian distance between two vec2's
     *
     * @param a the first operand
     * @param b the second operand
     * @returns squared distance between a and b
     */
    export function sqrDist(a: Vec2, b: Vec2): number;

    /**
     * Calculates the length of a vec2
     *
     * @param a vector to calculate length of
     * @returns length of a
     */
    export function length(a: Vec2): number;

    /**
     * Calculates the length of a vec2
     *
     * @param a vector to calculate length of
     * @returns length of a
     */
    export function len(a: Vec2): number;

    /**
     * Calculates the squared length of a vec2
     *
     * @param a vector to calculate squared length of
     * @returns squared length of a
     */
    export function squaredLength(a: Vec2): number;

    /**
     * Calculates the squared length of a vec2
     *
     * @param a vector to calculate squared length of
     * @returns squared length of a
     */
    export function sqrLen(a: Vec2): number;

    /**
     * Negates the components of a vec2
     *
     * @param out the receiving vector
     * @param a vector to negate
     * @returns out
     */
    export function negate(out: Vec2, a: Vec2): Vec2;

    /**
     * Returns the inverse of the components of a vec2
     *
     * @param out the receiving vector
     * @param a vector to invert
     * @returns out
     */
    export function inverse(out: Vec2, a: Vec2): Vec2;

    /**
     * Normalize a vec2
     *
     * @param out the receiving vector
     * @param a vector to normalize
     * @returns out
     */
    export function normalize(out: Vec2, a: Vec2): Vec2;

    /**
     * Calculates the dot product of two vec2's
     *
     * @param a the first operand
     * @param b the second operand
     * @returns dot product of a and b
     */
    export function dot(a: Vec2, b: Vec2): number;

    /**
     * Computes the cross product of two vec2's
     * Note that the cross product must by definition produce a 3D vector
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function cross(out: Vec2, a: Vec2, b: Vec2): Vec2;

    /**
     * Performs a linear interpolation between two vec2's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @param t interpolation amount between the two inputs
     * @returns out
     */
    export function lerp(out: Vec2, a: Vec2, b: Vec2, t: number): Vec2;

    /**
     * Generates a random unit vector
     *
     * @param out the receiving vector
     * @returns out
     */
    export function random(out: Vec2): Vec2;

    /**
     * Generates a random vector with the given scale
     *
     * @param out the receiving vector
     * @param scale Length of the resulting vector. If ommitted, a unit vector will be returned
     * @returns out
     */
    export function random(out: Vec2, scale: number): Vec2;

    /**
     * Transforms the vec2 with a mat2
     *
     * @param out the receiving vector
     * @param a the vector to transform
     * @param m matrix to transform with
     * @returns out
     */
    export function transformMat2(out: Vec2, a: Vec2, m: Mat2): Vec2;

    /**
     * Transforms the vec2 with a mat2d
     *
     * @param out the receiving vector
     * @param a the vector to transform
     * @param m matrix to transform with
     * @returns out
     */
    export function transformMat2d(out: Vec2, a: Vec2, m: Mat2d): Vec2;

    /**
     * Transforms the vec2 with a mat3
     * 3rd vector component is implicitly '1'
     *
     * @param out the receiving vector
     * @param a the vector to transform
     * @param m matrix to transform with
     * @returns out
     */
    export function transformMat3(out: Vec2, a: Vec2, m: Mat3): Vec2;

    /**
     * Transforms the vec2 with a mat4
     * 3rd vector component is implicitly '0'
     * 4th vector component is implicitly '1'
     *
     * @param out the receiving vector
     * @param a the vector to transform
     * @param m matrix to transform with
     * @returns out
     */
    export function transformMat4(out: Vec2, a: Vec2, m: Mat4): Vec2;

    /**
     * Perform some operation over an array of vec2s.
     *
     * @param a the array of vectors to iterate over
     * @param stride Number of elements between the start of each vec2. If 0 assumes tightly packed
     * @param offset Number of elements to skip at the beginning of the array
     * @param count Number of vec2s to iterate over. If 0 iterates over entire array
     * @param fn Function to call for each vector in the array
     * @param arg additional argument to pass to fn
     * @returns a
     */
    export function forEach(a: Float32Array, stride: number, offset: number, count: number,
                            fn: (a: Vec2, b: Vec2, arg: any) => void, arg: any): Float32Array;

    /**
     * Perform some operation over an array of vec2s.
     *
     * @param a the array of vectors to iterate over
     * @param stride Number of elements between the start of each vec2. If 0 assumes tightly packed
     * @param offset Number of elements to skip at the beginning of the array
     * @param count Number of vec2s to iterate over. If 0 iterates over entire array
     * @param fn Function to call for each vector in the array
     * @returns a
     */
    export function forEach(a: Float32Array, stride: number, offset: number, count: number,
                            fn: (a: Vec2, b: Vec2) => void): Float32Array;

    /**
     * Returns a string representation of a vector
     *
     * @param a vector to represent as a string
     * @returns string representation of the vector
     */
    export function str(a: Vec2): string;

    /**
     * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
     *
     * @param {vec2} a The first vector.
     * @param {vec2} b The second vector.
     * @returns {boolean} True if the vectors are equal, false otherwise.
     */
    export function exactEquals (a: Vec2, b: Vec2): boolean;

    /**
     * Returns whether or not the vectors have approximately the same elements in the same position.
     *
     * @param {vec2} a The first vector.
     * @param {vec2} b The second vector.
     * @returns {boolean} True if the vectors are equal, false otherwise.
     */
    export function equals (a: Vec2, b: Vec2): boolean;
}

declare module '@2gis/gl-matrix/vec3' {
    /**
     * Creates a new, empty vec3
     *
     * @returns a new 3D vector
     */
    export function create(): Vec3;

    /**
     * Creates a new vec3 initialized with values from an existing vector
     *
     * @param a vector to clone
     * @returns a new 3D vector
     */
    export function clone(a: Vec3): Vec3;

    /**
     * Creates a new vec3 initialized with the given values
     *
     * @param x X component
     * @param y Y component
     * @param z Z component
     * @returns a new 3D vector
     */
    export function fromValues(x: number, y: number, z: number): Vec3;

    /**
     * Copy the values from one vec3 to another
     *
     * @param out the receiving vector
     * @param a the source vector
     * @returns out
     */
    export function copy(out: Vec3, a: Vec3): Vec3;

    /**
     * Set the components of a vec3 to the given values
     *
     * @param out the receiving vector
     * @param x X component
     * @param y Y component
     * @param z Z component
     * @returns out
     */
    export function set(out: Vec3, x: number, y: number, z: number): Vec3;

    /**
     * Adds two vec3's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function add(out: Vec3, a: Vec3, b: Vec3): Vec3;

    /**
     * Subtracts vector b from vector a
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function subtract(out: Vec3, a: Vec3, b: Vec3): Vec3;

    /**
     * Subtracts vector b from vector a
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function sub(out: Vec3, a: Vec3, b: Vec3): Vec3

    /**
     * Multiplies two vec3's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function multiply(out: Vec3, a: Vec3, b: Vec3): Vec3;

    /**
     * Multiplies two vec3's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function mul(out: Vec3, a: Vec3, b: Vec3): Vec3;

    /**
     * Divides two vec3's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function divide(out: Vec3, a: Vec3, b: Vec3): Vec3;

    /**
     * Divides two vec3's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function div(out: Vec3, a: Vec3, b: Vec3): Vec3;

    /**
     * Math.ceil the components of a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to ceil
     * @returns {vec3} out
     */
    export function ceil (out: Vec3, a: Vec3): Vec3;

    /**
     * Math.floor the components of a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to floor
     * @returns {vec3} out
     */
    export function floor (out: Vec3, a: Vec3): Vec3;

    /**
     * Returns the minimum of two vec3's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function min(out: Vec3, a: Vec3, b: Vec3): Vec3;

    /**
     * Returns the maximum of two vec3's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function max(out: Vec3, a: Vec3, b: Vec3): Vec3;

    /**
     * Math.round the components of a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to round
     * @returns {vec3} out
     */
    export function round (out: Vec3, a: Vec3): Vec3

    /**
     * Scales a vec3 by a scalar number
     *
     * @param out the receiving vector
     * @param a the vector to scale
     * @param b amount to scale the vector by
     * @returns out
     */
    export function scale(out: Vec3, a: Vec3, b: number): Vec3;

    /**
     * Adds two vec3's after scaling the second operand by a scalar value
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @param scale the amount to scale b by before adding
     * @returns out
     */
    export function scaleAndAdd(out: Vec3, a: Vec3, b: Vec3, scale: number): Vec3;

    /**
     * Calculates the euclidian distance between two vec3's
     *
     * @param a the first operand
     * @param b the second operand
     * @returns distance between a and b
     */
    export function distance(a: Vec3, b: Vec3): number;

    /**
     * Calculates the euclidian distance between two vec3's
     *
     * @param a the first operand
     * @param b the second operand
     * @returns distance between a and b
     */
    export function dist(a: Vec3, b: Vec3): number;

    /**
     * Calculates the squared euclidian distance between two vec3's
     *
     * @param a the first operand
     * @param b the second operand
     * @returns squared distance between a and b
     */
    export function squaredDistance(a: Vec3, b: Vec3): number;

    /**
     * Calculates the squared euclidian distance between two vec3's
     *
     * @param a the first operand
     * @param b the second operand
     * @returns squared distance between a and b
     */
    export function sqrDist(a: Vec3, b: Vec3): number;

    /**
     * Calculates the length of a vec3
     *
     * @param a vector to calculate length of
     * @returns length of a
     */
    export function length(a: Vec3): number;

    /**
     * Calculates the length of a vec3
     *
     * @param a vector to calculate length of
     * @returns length of a
     */
    export function len(a: Vec3): number;

    /**
     * Calculates the squared length of a vec3
     *
     * @param a vector to calculate squared length of
     * @returns squared length of a
     */
    export function squaredLength(a: Vec3): number;

    /**
     * Calculates the squared length of a vec3
     *
     * @param a vector to calculate squared length of
     * @returns squared length of a
     */
    export function sqrLen(a: Vec3): number;

    /**
     * Negates the components of a vec3
     *
     * @param out the receiving vector
     * @param a vector to negate
     * @returns out
     */
    export function negate(out: Vec3, a: Vec3): Vec3;

    /**
     * Returns the inverse of the components of a vec3
     *
     * @param out the receiving vector
     * @param a vector to invert
     * @returns out
     */
    export function inverse(out: Vec3, a: Vec3): Vec3;

    /**
     * Normalize a vec3
     *
     * @param out the receiving vector
     * @param a vector to normalize
     * @returns out
     */
    export function normalize(out: Vec3, a: Vec3): Vec3;

    /**
     * Calculates the dot product of two vec3's
     *
     * @param a the first operand
     * @param b the second operand
     * @returns dot product of a and b
     */
    export function dot(a: Vec3, b: Vec3): number;

    /**
     * Computes the cross product of two vec3's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function cross(out: Vec3, a: Vec3, b: Vec3): Vec3;

    /**
     * Performs a linear interpolation between two vec3's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @param t interpolation amount between the two inputs
     * @returns out
     */
    export function lerp(out: Vec3, a: Vec3, b: Vec3, t: number): Vec3;

    /**
     * Performs a hermite interpolation with two control points
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @param {vec3} c the third operand
     * @param {vec3} d the fourth operand
     * @param {number} t interpolation amount between the two inputs
     * @returns {vec3} out
     */
    export function hermite (out: Vec3, a: Vec3, b: Vec3, c: Vec3, d: Vec3, t: number): Vec3;

    /**
     * Performs a bezier interpolation with two control points
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @param {vec3} c the third operand
     * @param {vec3} d the fourth operand
     * @param {number} t interpolation amount between the two inputs
     * @returns {vec3} out
     */
    export function bezier (out: Vec3, a: Vec3, b: Vec3, c: Vec3, d: Vec3, t: number): Vec3;

    /**
     * Generates a random unit vector
     *
     * @param out the receiving vector
     * @returns out
     */
    export function random(out: Vec3): Vec3;

    /**
     * Generates a random vector with the given scale
     *
     * @param out the receiving vector
     * @param [scale] Length of the resulting vector. If omitted, a unit vector will be returned
     * @returns out
     */
    export function random(out: Vec3, scale: number): Vec3;

    /**
     * Transforms the vec3 with a mat3.
     *
     * @param out the receiving vector
     * @param a the vector to transform
     * @param m the 3x3 matrix to transform with
     * @returns out
     */
    export function transformMat3(out: Vec3, a: Vec3, m: Mat3): Vec3;

    /**
     * Transforms the vec3 with a mat4.
     * 4th vector component is implicitly '1'
     *
     * @param out the receiving vector
     * @param a the vector to transform
     * @param m matrix to transform with
     * @returns out
     */
    export function transformMat4(out: Vec3, a: Vec3, m: Mat4): Vec3;

        /**
     * Transforms the vec3 with a quat
     *
     * @param out the receiving vector
     * @param a the vector to transform
     * @param q quaternion to transform with
     * @returns out
     */
    export function transformQuat(out: Vec3, a: Vec3, q: Quat): Vec3;


    /**
     * Rotate a 3D vector around the x-axis
     * @param out The receiving vec3
     * @param a The vec3 point to rotate
     * @param b The origin of the rotation
     * @param c The angle of rotation
     * @returns out
     */
    export function rotateX(out: Vec3, a: Vec3, b: Vec3, c: number): Vec3;

    /**
     * Rotate a 3D vector around the y-axis
     * @param out The receiving vec3
     * @param a The vec3 point to rotate
     * @param b The origin of the rotation
     * @param c The angle of rotation
     * @returns out
     */
    export function rotateY(out: Vec3, a: Vec3, b: Vec3, c: number): Vec3;

    /**
     * Rotate a 3D vector around the z-axis
     * @param out The receiving vec3
     * @param a The vec3 point to rotate
     * @param b The origin of the rotation
     * @param c The angle of rotation
     * @returns out
     */
    export function rotateZ(out: Vec3, a: Vec3, b: Vec3, c: number): Vec3;

    /**
     * Perform some operation over an array of vec3s.
     *
     * @param a the array of vectors to iterate over
     * @param stride Number of elements between the start of each vec3. If 0 assumes tightly packed
     * @param offset Number of elements to skip at the beginning of the array
     * @param count Number of vec3s to iterate over. If 0 iterates over entire array
     * @param fn Function to call for each vector in the array
     * @param arg additional argument to pass to fn
     * @returns a
     * @function
     */
    export function forEach(a: Float32Array, stride: number, offset: number, count: number,
                            fn: (a: Vec3, b: Vec3, arg: any) => void, arg: any): Float32Array;

    /**
     * Perform some operation over an array of vec3s.
     *
     * @param a the array of vectors to iterate over
     * @param stride Number of elements between the start of each vec3. If 0 assumes tightly packed
     * @param offset Number of elements to skip at the beginning of the array
     * @param count Number of vec3s to iterate over. If 0 iterates over entire array
     * @param fn Function to call for each vector in the array
     * @returns a
     * @function
     */
    export function forEach(a: Float32Array, stride: number, offset: number, count: number,
                            fn: (a: Vec3, b: Vec3) => void): Float32Array;

    /**
     * Get the angle between two 3D vectors
     * @param a The first operand
     * @param b The second operand
     * @returns The angle in radians
     */
    export function angle(a: Vec3, b: Vec3): number;

    /**
     * Returns a string representation of a vector
     *
     * @param a vector to represent as a string
     * @returns string representation of the vector
     */
    export function str(a: Vec3): string;

    /**
     * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
     *
     * @param {vec3} a The first vector.
     * @param {vec3} b The second vector.
     * @returns {boolean} True if the vectors are equal, false otherwise.
     */
    export function exactEquals (a: Vec3, b: Vec3): boolean

    /**
     * Returns whether or not the vectors have approximately the same elements in the same position.
     *
     * @param {vec3} a The first vector.
     * @param {vec3} b The second vector.
     * @returns {boolean} True if the vectors are equal, false otherwise.
     */
    export function equals (a: Vec3, b: Vec3): boolean
}


declare module '@2gis/gl-matrix/vec4' {
    /**
     * Creates a new, empty vec4
     *
     * @returns a new 4D vector
     */
    export function create(): Vec4;

    /**
     * Creates a new vec4 initialized with values from an existing vector
     *
     * @param a vector to clone
     * @returns a new 4D vector
     */
    export function clone(a: Vec4): Vec4;

    /**
     * Creates a new vec4 initialized with the given values
     *
     * @param x X component
     * @param y Y component
     * @param z Z component
     * @param w W component
     * @returns a new 4D vector
     */
    export function fromValues(x: number, y: number, z: number, w: number): Vec4;

    /**
     * Copy the values from one vec4 to another
     *
     * @param out the receiving vector
     * @param a the source vector
     * @returns out
     */
    export function copy(out: Vec4, a: Vec4): Vec4;

    /**
     * Set the components of a vec4 to the given values
     *
     * @param out the receiving vector
     * @param x X component
     * @param y Y component
     * @param z Z component
     * @param w W component
     * @returns out
     */
    export function set(out: Vec4, x: number, y: number, z: number, w: number): Vec4;

    /**
     * Adds two vec4's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function add(out: Vec4, a: Vec4, b: Vec4): Vec4;

    /**
     * Subtracts vector b from vector a
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function subtract(out: Vec4, a: Vec4, b: Vec4): Vec4;

    /**
     * Subtracts vector b from vector a
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function sub(out: Vec4, a: Vec4, b: Vec4): Vec4;

    /**
     * Multiplies two vec4's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function multiply(out: Vec4, a: Vec4, b: Vec4): Vec4;

    /**
     * Multiplies two vec4's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function mul(out: Vec4, a: Vec4, b: Vec4): Vec4;

    /**
     * Divides two vec4's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function divide(out: Vec4, a: Vec4, b: Vec4): Vec4;

    /**
     * Divides two vec4's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function div(out: Vec4, a: Vec4, b: Vec4): Vec4;

    /**
     * Math.ceil the components of a vec4
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a vector to ceil
     * @returns {vec4} out
     */
    export function ceil (out: Vec4, a: Vec4): Vec4;

    /**
     * Math.floor the components of a vec4
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a vector to floor
     * @returns {vec4} out
     */
    export function floor (out: Vec4, a: Vec4): Vec4;

    /**
     * Returns the minimum of two vec4's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function min(out: Vec4, a: Vec4, b: Vec4): Vec4;

    /**
     * Returns the maximum of two vec4's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function max(out: Vec4, a: Vec4, b: Vec4): Vec4;

    /**
     * Math.round the components of a vec4
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a vector to round
     * @returns {vec4} out
     */
    export function round (out: Vec4, a: Vec4): Vec4;

    /**
     * Scales a vec4 by a scalar number
     *
     * @param out the receiving vector
     * @param a the vector to scale
     * @param b amount to scale the vector by
     * @returns out
     */
    export function scale(out: Vec4, a: Vec4, b: number): Vec4;

    /**
     * Adds two vec4's after scaling the second operand by a scalar value
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @param scale the amount to scale b by before adding
     * @returns out
     */
    export function scaleAndAdd(out: Vec4, a: Vec4, b: Vec4, scale: number): Vec4;

    /**
     * Calculates the euclidian distance between two vec4's
     *
     * @param a the first operand
     * @param b the second operand
     * @returns distance between a and b
     */
    export function distance(a: Vec4, b: Vec4): number;

    /**
     * Calculates the euclidian distance between two vec4's
     *
     * @param a the first operand
     * @param b the second operand
     * @returns distance between a and b
     */
    export function dist(a: Vec4, b: Vec4): number;

    /**
     * Calculates the squared euclidian distance between two vec4's
     *
     * @param a the first operand
     * @param b the second operand
     * @returns squared distance between a and b
     */
    export function squaredDistance(a: Vec4, b: Vec4): number;

    /**
     * Calculates the squared euclidian distance between two vec4's
     *
     * @param a the first operand
     * @param b the second operand
     * @returns squared distance between a and b
     */
    export function sqrDist(a: Vec4, b: Vec4): number;

    /**
     * Calculates the length of a vec4
     *
     * @param a vector to calculate length of
     * @returns length of a
     */
    export function length(a: Vec4): number;

    /**
     * Calculates the length of a vec4
     *
     * @param a vector to calculate length of
     * @returns length of a
     */
    export function len(a: Vec4): number;

    /**
     * Calculates the squared length of a vec4
     *
     * @param a vector to calculate squared length of
     * @returns squared length of a
     */
    export function squaredLength(a: Vec4): number;

    /**
     * Calculates the squared length of a vec4
     *
     * @param a vector to calculate squared length of
     * @returns squared length of a
     */
    export function sqrLen(a: Vec4): number;

    /**
     * Negates the components of a vec4
     *
     * @param out the receiving vector
     * @param a vector to negate
     * @returns out
     */
    export function negate(out: Vec4, a: Vec4): Vec4;

    /**
     * Returns the inverse of the components of a vec4
     *
     * @param out the receiving vector
     * @param a vector to invert
     * @returns out
     */
    export function inverse(out: Vec4, a: Vec4): Vec4;

    /**
     * Normalize a vec4
     *
     * @param out the receiving vector
     * @param a vector to normalize
     * @returns out
     */
    export function normalize(out: Vec4, a: Vec4): Vec4;

    /**
     * Calculates the dot product of two vec4's
     *
     * @param a the first operand
     * @param b the second operand
     * @returns dot product of a and b
     */
    export function dot(a: Vec4, b: Vec4): number;

    /**
     * Performs a linear interpolation between two vec4's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @param t interpolation amount between the two inputs
     * @returns out
     */
    export function lerp(out: Vec4, a: Vec4, b: Vec4, t: number): Vec4;

    /**
     * Generates a random unit vector
     *
     * @param out the receiving vector
     * @returns out
     */
    export function random(out: Vec4): Vec4;

    /**
     * Generates a random vector with the given scale
     *
     * @param out the receiving vector
     * @param scale length of the resulting vector. If ommitted, a unit vector will be returned
     * @returns out
     */
    export function random(out: Vec4, scale: number): Vec4;

    /**
     * Transforms the vec4 with a mat4.
     *
     * @param out the receiving vector
     * @param a the vector to transform
     * @param m matrix to transform with
     * @returns out
     */
    export function transformMat4(out: Vec4, a: Vec4, m: Mat4): Vec4;

    /**
     * Transforms the vec4 with a quat
     *
     * @param out the receiving vector
     * @param a the vector to transform
     * @param q quaternion to transform with
     * @returns out
     */

    export function transformQuat(out: Vec4, a: Vec4, q: Quat): Vec4;

    /**
     * Perform some operation over an array of vec4s.
     *
     * @param a the array of vectors to iterate over
     * @param stride Number of elements between the start of each vec4. If 0 assumes tightly packed
     * @param offset Number of elements to skip at the beginning of the array
     * @param count Number of vec4s to iterate over. If 0 iterates over entire array
     * @param fn Function to call for each vector in the array
     * @param arg additional argument to pass to fn
     * @returns a
     * @function
     */
    export function forEach(a: Float32Array, stride: number, offset: number, count: number,
                            fn: (a: Vec4, b: Vec4, arg: any) => void, arg: any): Float32Array;

    /**
     * Perform some operation over an array of vec4s.
     *
     * @param a the array of vectors to iterate over
     * @param stride Number of elements between the start of each vec4. If 0 assumes tightly packed
     * @param offset Number of elements to skip at the beginning of the array
     * @param count Number of vec4s to iterate over. If 0 iterates over entire array
     * @param fn Function to call for each vector in the array
     * @returns a
     * @function
     */
    export function forEach(a: Float32Array, stride: number, offset: number, count: number,
                            fn: (a: Vec4, b: Vec4) => void): Float32Array;

    /**
     * Returns a string representation of a vector
     *
     * @param a vector to represent as a string
     * @returns string representation of the vector
     */
    export function str(a: Vec4): string;

    /**
     * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
     *
     * @param {vec4} a The first vector.
     * @param {vec4} b The second vector.
     * @returns {boolean} True if the vectors are equal, false otherwise.
     */
    export function exactEquals (a: Vec4, b: Vec4): boolean;

    /**
     * Returns whether or not the vectors have approximately the same elements in the same position.
     *
     * @param {vec4} a The first vector.
     * @param {vec4} b The second vector.
     * @returns {boolean} True if the vectors are equal, false otherwise.
     */
    export function equals (a: Vec4, b: Vec4): boolean;
}

declare module '@2gis/gl-matrix/mat2' {
    /**
     * Creates a new identity mat2
     *
     * @returns a new 2x2 matrix
     */
    export function create(): Mat2;

    /**
     * Creates a new mat2 initialized with values from an existing matrix
     *
     * @param a matrix to clone
     * @returns a new 2x2 matrix
     */
    export function clone(a: Mat2): Mat2;

    /**
     * Copy the values from one mat2 to another
     *
     * @param out the receiving matrix
     * @param a the source matrix
     * @returns out
     */
    export function copy(out: Mat2, a: Mat2): Mat2;

    /**
     * Set a mat2 to the identity matrix
     *
     * @param out the receiving matrix
     * @returns out
     */
    export function identity(out: Mat2): Mat2;

    /**
     * Create a new mat2 with the given values
     *
     * @param {number} m00 Component in column 0, row 0 position (index 0)
     * @param {number} m01 Component in column 0, row 1 position (index 1)
     * @param {number} m10 Component in column 1, row 0 position (index 2)
     * @param {number} m11 Component in column 1, row 1 position (index 3)
     * @returns {mat2} out A new 2x2 matrix
     */
    export function fromValues(m00: number, m01: number, m10: number, m11: number): Mat2;

    /**
     * Set the components of a mat2 to the given values
     *
     * @param {mat2} out the receiving matrix
     * @param {number} m00 Component in column 0, row 0 position (index 0)
     * @param {number} m01 Component in column 0, row 1 position (index 1)
     * @param {number} m10 Component in column 1, row 0 position (index 2)
     * @param {number} m11 Component in column 1, row 1 position (index 3)
     * @returns {mat2} out
     */
    export function set(out: Mat2, m00: number, m01: number, m10: number, m11: number): Mat2;

    /**
     * Transpose the values of a mat2
     *
     * @param out the receiving matrix
     * @param a the source matrix
     * @returns out
     */
    export function transpose(out: Mat2, a: Mat2): Mat2;

    /**
     * Inverts a mat2
     *
     * @param out the receiving matrix
     * @param a the source matrix
     * @returns out
     */
    export function invert(out: Mat2, a: Mat2): Mat2 | null;

    /**
     * Calculates the adjugate of a mat2
     *
     * @param out the receiving matrix
     * @param a the source matrix
     * @returns out
     */
    export function adjoint(out: Mat2, a: Mat2): Mat2;

    /**
     * Calculates the determinant of a mat2
     *
     * @param a the source matrix
     * @returns determinant of a
     */
    export function determinant(a: Mat2): number;

    /**
     * Multiplies two mat2's
     *
     * @param out the receiving matrix
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function multiply(out: Mat2, a: Mat2, b: Mat2): Mat2;

    /**
     * Multiplies two mat2's
     *
     * @param out the receiving matrix
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function mul(out: Mat2, a: Mat2, b: Mat2): Mat2;

    /**
     * Rotates a mat2 by the given angle
     *
     * @param out the receiving matrix
     * @param a the matrix to rotate
     * @param rad the angle to rotate the matrix by
     * @returns out
     */
    export function rotate(out: Mat2, a: Mat2, rad: number): Mat2;

    /**
     * Scales the mat2 by the dimensions in the given vec2
     *
     * @param out the receiving matrix
     * @param a the matrix to rotate
     * @param v the vec2 to scale the matrix by
     * @returns out
     **/
    export function scale(out: Mat2, a: Mat2, v: Vec2): Mat2;

    /**
     * Creates a matrix from a given angle
     * This is equivalent to (but much faster than):
     *
     *     mat2.identity(dest);
     *     mat2.rotate(dest, dest, rad);
     *
     * @param {mat2} out mat2 receiving operation result
     * @param {number} rad the angle to rotate the matrix by
     * @returns {mat2} out
     */
    export function fromRotation(out: Mat2, rad: number): Mat2;

    /**
     * Creates a matrix from a vector scaling
     * This is equivalent to (but much faster than):
     *
     *     mat2.identity(dest);
     *     mat2.scale(dest, dest, vec);
     *
     * @param {mat2} out mat2 receiving operation result
     * @param {vec2} v Scaling vector
     * @returns {mat2} out
     */
    export function fromScaling(out: Mat2, v: Vec2): Mat2;

    /**
     * Returns a string representation of a mat2
     *
     * @param a matrix to represent as a string
     * @returns string representation of the matrix
     */
    export function str(a: Mat2): string;

    /**
     * Returns Frobenius norm of a mat2
     *
     * @param a the matrix to calculate Frobenius norm of
     * @returns Frobenius norm
     */
    export function frob(a: Mat2): number;

    /**
     * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
     * @param L the lower triangular matrix
     * @param D the diagonal matrix
     * @param U the upper triangular matrix
     * @param a the input matrix to factorize
     */
    export function LDU(L: Mat2, D: Mat2, U: Mat2, a: Mat2): Mat2;

    /**
     * Adds two mat2's
     *
     * @param {mat2} out the receiving matrix
     * @param {mat2} a the first operand
     * @param {mat2} b the second operand
     * @returns {mat2} out
     */
    export function add(out: Mat2, a: Mat2, b: Mat2): Mat2;

    /**
     * Subtracts matrix b from matrix a
     *
     * @param {mat2} out the receiving matrix
     * @param {mat2} a the first operand
     * @param {mat2} b the second operand
     * @returns {mat2} out
     */
    export function subtract (out: Mat2, a: Mat2, b: Mat2): Mat2;

    /**
     * Subtracts matrix b from matrix a
     *
     * @param {mat2} out the receiving matrix
     * @param {mat2} a the first operand
     * @param {mat2} b the second operand
     * @returns {mat2} out
     */
    export function sub (out: Mat2, a: Mat2, b: Mat2): Mat2;

    /**
     * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
     *
     * @param {mat2} a The first matrix.
     * @param {mat2} b The second matrix.
     * @returns {boolean} True if the matrices are equal, false otherwise.
     */
    export function exactEquals (a: Mat2, b: Mat2): boolean;

    /**
     * Returns whether or not the matrices have approximately the same elements in the same position.
     *
     * @param {mat2} a The first matrix.
     * @param {mat2} b The second matrix.
     * @returns {boolean} True if the matrices are equal, false otherwise.
     */
    export function equals (a: Mat2, b: Mat2): boolean;

    /**
     * Multiply each element of the matrix by a scalar.
     *
     * @param {mat2} out the receiving matrix
     * @param {mat2} a the matrix to scale
     * @param {number} b amount to scale the matrix's elements by
     * @returns {mat2} out
     */
    export function multiplyScalar (out: Mat2, a: Mat2, b: number): Mat2

    /**
     * Adds two mat2's after multiplying each element of the second operand by a scalar value.
     *
     * @param {mat2} out the receiving vector
     * @param {mat2} a the first operand
     * @param {mat2} b the second operand
     * @param {number} scale the amount to scale b's elements by before adding
     * @returns {mat2} out
     */
    export function multiplyScalarAndAdd (out: Mat2, a: Mat2, b: Mat2, scale: number): Mat2
}

declare module '@2gis/gl-matrix/mat2d' {
    /**
     * Creates a new identity mat2d
     *
     * @returns a new 2x3 matrix
     */
    export function create(): Mat2d;

    /**
     * Creates a new mat2d initialized with values from an existing matrix
     *
     * @param a matrix to clone
     * @returns a new 2x3 matrix
     */
    export function clone(a: Mat2d): Mat2d;

    /**
     * Copy the values from one mat2d to another
     *
     * @param out the receiving matrix
     * @param a the source matrix
     * @returns out
     */
    export function copy(out: Mat2d, a: Mat2d): Mat2d;

    /**
     * Set a mat2d to the identity matrix
     *
     * @param out the receiving matrix
     * @returns out
     */
    export function identity(out: Mat2d): Mat2d;

    /**
     * Create a new mat2d with the given values
     *
     * @param {number} a Component A (index 0)
     * @param {number} b Component B (index 1)
     * @param {number} c Component C (index 2)
     * @param {number} d Component D (index 3)
     * @param {number} tx Component TX (index 4)
     * @param {number} ty Component TY (index 5)
     * @returns {mat2d} A new mat2d
     */
    export function fromValues (a: number, b: number, c: number, d: number, tx: number, ty: number): Mat2d


    /**
     * Set the components of a mat2d to the given values
     *
     * @param {mat2d} out the receiving matrix
     * @param {number} a Component A (index 0)
     * @param {number} b Component B (index 1)
     * @param {number} c Component C (index 2)
     * @param {number} d Component D (index 3)
     * @param {number} tx Component TX (index 4)
     * @param {number} ty Component TY (index 5)
     * @returns {mat2d} out
     */
    export function set (out: Mat2d, a: number, b: number, c: number, d: number, tx: number, ty: number): Mat2d

    /**
     * Inverts a mat2d
     *
     * @param out the receiving matrix
     * @param a the source matrix
     * @returns out
     */
    export function invert(out: Mat2d, a: Mat2d): Mat2d | null;

    /**
     * Calculates the determinant of a mat2d
     *
     * @param a the source matrix
     * @returns determinant of a
     */
    export function determinant(a: Mat2d): number;

    /**
     * Multiplies two mat2d's
     *
     * @param out the receiving matrix
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function multiply(out: Mat2d, a: Mat2d, b: Mat2d): Mat2d;

    /**
     * Multiplies two mat2d's
     *
     * @param out the receiving matrix
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function mul(out: Mat2d, a: Mat2d, b: Mat2d): Mat2d;

    /**
     * Rotates a mat2d by the given angle
     *
     * @param out the receiving matrix
     * @param a the matrix to rotate
     * @param rad the angle to rotate the matrix by
     * @returns out
     */
    export function rotate(out: Mat2d, a: Mat2d, rad: number): Mat2d;

    /**
     * Scales the mat2d by the dimensions in the given vec2
     *
     * @param out the receiving matrix
     * @param a the matrix to translate
     * @param v the vec2 to scale the matrix by
     * @returns out
     **/
    export function scale(out: Mat2d, a: Mat2d, v: Vec2): Mat2d;

    /**
     * Translates the mat2d by the dimensions in the given vec2
     *
     * @param out the receiving matrix
     * @param a the matrix to translate
     * @param v the vec2 to translate the matrix by
     * @returns out
     **/
    export function translate(out: Mat2d, a: Mat2d, v: Vec2): Mat2d;

    /**
     * Creates a matrix from a given angle
     * This is equivalent to (but much faster than):
     *
     *     mat2d.identity(dest);
     *     mat2d.rotate(dest, dest, rad);
     *
     * @param {mat2d} out mat2d receiving operation result
     * @param {number} rad the angle to rotate the matrix by
     * @returns {mat2d} out
     */
    export function fromRotation (out: Mat2d, rad: number): Mat2d;

    /**
     * Creates a matrix from a vector scaling
     * This is equivalent to (but much faster than):
     *
     *     mat2d.identity(dest);
     *     mat2d.scale(dest, dest, vec);
     *
     * @param {mat2d} out mat2d receiving operation result
     * @param {vec2} v Scaling vector
     * @returns {mat2d} out
     */
    export function fromScaling (out: Mat2d, v: Vec2): Mat2d;

    /**
     * Creates a matrix from a vector translation
     * This is equivalent to (but much faster than):
     *
     *     mat2d.identity(dest);
     *     mat2d.translate(dest, dest, vec);
     *
     * @param {mat2d} out mat2d receiving operation result
     * @param {vec2} v Translation vector
     * @returns {mat2d} out
     */
    export function fromTranslation (out: Mat2d, v: Vec2): Mat2d

    /**
     * Returns a string representation of a mat2d
     *
     * @param a matrix to represent as a string
     * @returns string representation of the matrix
     */
    export function str(a: Mat2d): string;

    /**
     * Returns Frobenius norm of a mat2d
     *
     * @param a the matrix to calculate Frobenius norm of
     * @returns Frobenius norm
     */
    export function frob(a: Mat2d): number;

    /**
     * Adds two mat2d's
     *
     * @param {mat2d} out the receiving matrix
     * @param {mat2d} a the first operand
     * @param {mat2d} b the second operand
     * @returns {mat2d} out
     */
    export function add (out: Mat2d, a: Mat2d, b: Mat2d): Mat2d

    /**
     * Subtracts matrix b from matrix a
     *
     * @param {mat2d} out the receiving matrix
     * @param {mat2d} a the first operand
     * @param {mat2d} b the second operand
     * @returns {mat2d} out
     */
    export function subtract(out: Mat2d, a: Mat2d, b: Mat2d): Mat2d

    /**
     * Subtracts matrix b from matrix a
     *
     * @param {mat2d} out the receiving matrix
     * @param {mat2d} a the first operand
     * @param {mat2d} b the second operand
     * @returns {mat2d} out
     */
    export function sub(out: Mat2d, a: Mat2d, b: Mat2d): Mat2d

    /**
     * Multiply each element of the matrix by a scalar.
     *
     * @param {mat2d} out the receiving matrix
     * @param {mat2d} a the matrix to scale
     * @param {number} b amount to scale the matrix's elements by
     * @returns {mat2d} out
     */
    export function multiplyScalar (out: Mat2d, a: Mat2d, b: number): Mat2d;

    /**
     * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
     *
     * @param {mat2d} out the receiving vector
     * @param {mat2d} a the first operand
     * @param {mat2d} b the second operand
     * @param {number} scale the amount to scale b's elements by before adding
     * @returns {mat2d} out
     */
    export function multiplyScalarAndAdd (out: Mat2d, a: Mat2d, b: Mat2d, scale: number): Mat2d

    /**
     * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
     *
     * @param {mat2d} a The first matrix.
     * @param {mat2d} b The second matrix.
     * @returns {boolean} True if the matrices are equal, false otherwise.
     */
    export function exactEquals (a: Mat2d, b: Mat2d): boolean;

    /**
     * Returns whether or not the matrices have approximately the same elements in the same position.
     *
     * @param {mat2d} a The first matrix.
     * @param {mat2d} b The second matrix.
     * @returns {boolean} True if the matrices are equal, false otherwise.
     */
    export function equals (a: Mat2d, b: Mat2d): boolean
}

declare module '@2gis/gl-matrix/mat3' {
    /**
     * Creates a new identity mat3
     *
     * @returns a new 3x3 matrix
     */
    export function create(): Mat3;

    /**
     * Copies the upper-left 3x3 values into the given mat3.
     *
     * @param {mat3} out the receiving 3x3 matrix
     * @param {mat4} a   the source 4x4 matrix
     * @returns {mat3} out
     */
    export function fromMat4(out: Mat3, a: Mat4): Mat3

    /**
     * Creates a new mat3 initialized with values from an existing matrix
     *
     * @param a matrix to clone
     * @returns a new 3x3 matrix
     */
    export function clone(a: Mat3): Mat3;

    /**
     * Copy the values from one mat3 to another
     *
     * @param out the receiving matrix
     * @param a the source matrix
     * @returns out
     */
    export function copy(out: Mat3, a: Mat3): Mat3;

    /**
     * Create a new mat3 with the given values
     *
     * @param {number} m00 Component in column 0, row 0 position (index 0)
     * @param {number} m01 Component in column 0, row 1 position (index 1)
     * @param {number} m02 Component in column 0, row 2 position (index 2)
     * @param {number} m10 Component in column 1, row 0 position (index 3)
     * @param {number} m11 Component in column 1, row 1 position (index 4)
     * @param {number} m12 Component in column 1, row 2 position (index 5)
     * @param {number} m20 Component in column 2, row 0 position (index 6)
     * @param {number} m21 Component in column 2, row 1 position (index 7)
     * @param {number} m22 Component in column 2, row 2 position (index 8)
     * @returns {mat3} A new mat3
     */
    export function fromValues(m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number): Mat3;


    /**
     * Set the components of a mat3 to the given values
     *
     * @param {mat3} out the receiving matrix
     * @param {number} m00 Component in column 0, row 0 position (index 0)
     * @param {number} m01 Component in column 0, row 1 position (index 1)
     * @param {number} m02 Component in column 0, row 2 position (index 2)
     * @param {number} m10 Component in column 1, row 0 position (index 3)
     * @param {number} m11 Component in column 1, row 1 position (index 4)
     * @param {number} m12 Component in column 1, row 2 position (index 5)
     * @param {number} m20 Component in column 2, row 0 position (index 6)
     * @param {number} m21 Component in column 2, row 1 position (index 7)
     * @param {number} m22 Component in column 2, row 2 position (index 8)
     * @returns {mat3} out
     */
    export function set(out: Mat3, m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number): Mat3

    /**
     * Set a mat3 to the identity matrix
     *
     * @param out the receiving matrix
     * @returns out
     */
    export function identity(out: Mat3): Mat3;

    /**
     * Transpose the values of a mat3
     *
     * @param out the receiving matrix
     * @param a the source matrix
     * @returns out
     */
    export function transpose(out: Mat3, a: Mat3): Mat3;

    /**
     * Inverts a mat3
     *
     * @param out the receiving matrix
     * @param a the source matrix
     * @returns out
     */
    export function invert(out: Mat3, a: Mat3): Mat3 | null;

    /**
     * Calculates the adjugate of a mat3
     *
     * @param out the receiving matrix
     * @param a the source matrix
     * @returns out
     */
    export function adjoint(out: Mat3, a: Mat3): Mat3;

    /**
     * Calculates the determinant of a mat3
     *
     * @param a the source matrix
     * @returns determinant of a
     */
    export function determinant(a: Mat3): number;

    /**
     * Multiplies two mat3's
     *
     * @param out the receiving matrix
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function multiply(out: Mat3, a: Mat3, b: Mat3): Mat3;

    /**
     * Multiplies two mat3's
     *
     * @param out the receiving matrix
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function mul(out: Mat3, a: Mat3, b: Mat3): Mat3;


    /**
     * Translate a mat3 by the given vector
     *
     * @param out the receiving matrix
     * @param a the matrix to translate
     * @param v vector to translate by
     * @returns out
     */
    export function translate(out: Mat3, a: Mat3, v: Vec3): Mat3;

    /**
     * Rotates a mat3 by the given angle
     *
     * @param out the receiving matrix
     * @param a the matrix to rotate
     * @param rad the angle to rotate the matrix by
     * @returns out
     */
    export function rotate(out: Mat3, a: Mat3, rad: number): Mat3;

    /**
     * Scales the mat3 by the dimensions in the given vec2
     *
     * @param out the receiving matrix
     * @param a the matrix to rotate
     * @param v the vec2 to scale the matrix by
     * @returns out
     **/
    export function scale(out: Mat3, a: Mat3, v: Vec2): Mat3;

    /**
     * Creates a matrix from a vector translation
     * This is equivalent to (but much faster than):
     *
     *     mat3.identity(dest);
     *     mat3.translate(dest, dest, vec);
     *
     * @param {mat3} out mat3 receiving operation result
     * @param {vec2} v Translation vector
     * @returns {mat3} out
     */
    export function fromTranslation(out: Mat3, v: Vec2): Mat3

    /**
     * Creates a matrix from a given angle
     * This is equivalent to (but much faster than):
     *
     *     mat3.identity(dest);
     *     mat3.rotate(dest, dest, rad);
     *
     * @param {mat3} out mat3 receiving operation result
     * @param {number} rad the angle to rotate the matrix by
     * @returns {mat3} out
     */
    export function fromRotation(out: Mat3, rad: number): Mat3

    /**
     * Creates a matrix from a vector scaling
     * This is equivalent to (but much faster than):
     *
     *     mat3.identity(dest);
     *     mat3.scale(dest, dest, vec);
     *
     * @param {mat3} out mat3 receiving operation result
     * @param {vec2} v Scaling vector
     * @returns {mat3} out
     */
    export function fromScaling(out: Mat3, v: Vec2): Mat3

    /**
     * Copies the values from a mat2d into a mat3
     *
     * @param out the receiving matrix
     * @param {mat2d} a the matrix to copy
     * @returns out
     **/
    export function fromMat2d(out: Mat3, a: Mat2d): Mat3;

    /**
     * Calculates a 3x3 matrix from the given quaternion
     *
     * @param out mat3 receiving operation result
     * @param q Quaternion to create matrix from
     *
     * @returns out
     */
    export function fromQuat(out: Mat3, q: Quat): Mat3;

    /**
     * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
     *
     * @param out mat3 receiving operation result
     * @param a Mat4 to derive the normal matrix from
     *
     * @returns out
     */
    export function normalFromMat4(out: Mat3, a: Mat4): Mat3 | null;

    /**
     * Returns a string representation of a mat3
     *
     * @param mat matrix to represent as a string
     * @returns string representation of the matrix
     */
    export function str(mat: Mat3): string;

    /**
     * Returns Frobenius norm of a mat3
     *
     * @param a the matrix to calculate Frobenius norm of
     * @returns Frobenius norm
     */
    export function frob(a: Mat3): number;

    /**
     * Adds two mat3's
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the first operand
     * @param {mat3} b the second operand
     * @returns {mat3} out
     */
    export function add(out: Mat3, a: Mat3, b: Mat3): Mat3

    /**
     * Subtracts matrix b from matrix a
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the first operand
     * @param {mat3} b the second operand
     * @returns {mat3} out
     */
    export function subtract(out: Mat3, a: Mat3, b: Mat3): Mat3

    /**
     * Subtracts matrix b from matrix a
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the first operand
     * @param {mat3} b the second operand
     * @returns {mat3} out
     */
    export function sub(out: Mat3, a: Mat3, b: Mat3): Mat3

    /**
     * Multiply each element of the matrix by a scalar.
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the matrix to scale
     * @param {number} b amount to scale the matrix's elements by
     * @returns {mat3} out
     */
    export function multiplyScalar(out: Mat3, a: Mat3, b: number): Mat3

    /**
     * Adds two mat3's after multiplying each element of the second operand by a scalar value.
     *
     * @param {mat3} out the receiving vector
     * @param {mat3} a the first operand
     * @param {mat3} b the second operand
     * @param {number} scale the amount to scale b's elements by before adding
     * @returns {mat3} out
     */
    export function multiplyScalarAndAdd(out: Mat3, a: Mat3, b: Mat3, scale: number): Mat3

    /**
     * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
     *
     * @param {mat3} a The first matrix.
     * @param {mat3} b The second matrix.
     * @returns {boolean} True if the matrices are equal, false otherwise.
     */
    export function exactEquals(a: Mat3, b: Mat3): boolean;

    /**
     * Returns whether or not the matrices have approximately the same elements in the same position.
     *
     * @param {mat3} a The first matrix.
     * @param {mat3} b The second matrix.
     * @returns {boolean} True if the matrices are equal, false otherwise.
     */
    export function equals(a: Mat3, b: Mat3): boolean
}

declare module '@2gis/gl-matrix/mat4' {
    /**
     * Creates a new identity mat4
     *
     * @returns a new 4x4 matrix
     */
    export function create(): Mat4;

    /**
     * Creates a new mat4 initialized with values from an existing matrix
     *
     * @param a matrix to clone
     * @returns a new 4x4 matrix
     */
    export function clone(a: Mat4): Mat4;

    /**
     * Copy the values from one mat4 to another
     *
     * @param out the receiving matrix
     * @param a the source matrix
     * @returns out
     */
    export function copy(out: Mat4, a: Mat4): Mat4;


    /**
     * Create a new mat4 with the given values
     *
     * @param {number} m00 Component in column 0, row 0 position (index 0)
     * @param {number} m01 Component in column 0, row 1 position (index 1)
     * @param {number} m02 Component in column 0, row 2 position (index 2)
     * @param {number} m03 Component in column 0, row 3 position (index 3)
     * @param {number} m10 Component in column 1, row 0 position (index 4)
     * @param {number} m11 Component in column 1, row 1 position (index 5)
     * @param {number} m12 Component in column 1, row 2 position (index 6)
     * @param {number} m13 Component in column 1, row 3 position (index 7)
     * @param {number} m20 Component in column 2, row 0 position (index 8)
     * @param {number} m21 Component in column 2, row 1 position (index 9)
     * @param {number} m22 Component in column 2, row 2 position (index 10)
     * @param {number} m23 Component in column 2, row 3 position (index 11)
     * @param {number} m30 Component in column 3, row 0 position (index 12)
     * @param {number} m31 Component in column 3, row 1 position (index 13)
     * @param {number} m32 Component in column 3, row 2 position (index 14)
     * @param {number} m33 Component in column 3, row 3 position (index 15)
     * @returns {mat4} A new mat4
     */
    export function fromValues(m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number, m30: number, m31: number, m32: number, m33: number): Mat4;

    /**
     * Set the components of a mat4 to the given values
     *
     * @param {mat4} out the receiving matrix
     * @param {number} m00 Component in column 0, row 0 position (index 0)
     * @param {number} m01 Component in column 0, row 1 position (index 1)
     * @param {number} m02 Component in column 0, row 2 position (index 2)
     * @param {number} m03 Component in column 0, row 3 position (index 3)
     * @param {number} m10 Component in column 1, row 0 position (index 4)
     * @param {number} m11 Component in column 1, row 1 position (index 5)
     * @param {number} m12 Component in column 1, row 2 position (index 6)
     * @param {number} m13 Component in column 1, row 3 position (index 7)
     * @param {number} m20 Component in column 2, row 0 position (index 8)
     * @param {number} m21 Component in column 2, row 1 position (index 9)
     * @param {number} m22 Component in column 2, row 2 position (index 10)
     * @param {number} m23 Component in column 2, row 3 position (index 11)
     * @param {number} m30 Component in column 3, row 0 position (index 12)
     * @param {number} m31 Component in column 3, row 1 position (index 13)
     * @param {number} m32 Component in column 3, row 2 position (index 14)
     * @param {number} m33 Component in column 3, row 3 position (index 15)
     * @returns {mat4} out
     */
    export function set(out: Mat4, m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number, m30: number, m31: number, m32: number, m33: number): Mat4;

    /**
     * Set a mat4 to the identity matrix
     *
     * @param out the receiving matrix
     * @returns out
     */
    export function identity(out: Mat4): Mat4;

    /**
     * Transpose the values of a mat4
     *
     * @param out the receiving matrix
     * @param a the source matrix
     * @returns out
     */
    export function transpose(out: Mat4, a: Mat4): Mat4;

    /**
     * Inverts a mat4
     *
     * @param out the receiving matrix
     * @param a the source matrix
     * @returns out
     */
    export function invert(out: Mat4, a: Mat4): Mat4 | null;

    /**
     * Calculates the adjugate of a mat4
     *
     * @param out the receiving matrix
     * @param a the source matrix
     * @returns out
     */
    export function adjoint(out: Mat4, a: Mat4): Mat4;

    /**
     * Calculates the determinant of a mat4
     *
     * @param a the source matrix
     * @returns determinant of a
     */
    export function determinant(a: Mat4): number;

    /**
     * Multiplies two mat4's
     *
     * @param out the receiving matrix
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function multiply(out: Mat4, a: Mat4, b: Mat4): Mat4;

    /**
     * Multiplies two mat4's
     *
     * @param out the receiving matrix
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function mul(out: Mat4, a: Mat4, b: Mat4): Mat4;

    /**
     * Translate a mat4 by the given vector
     *
     * @param out the receiving matrix
     * @param a the matrix to translate
     * @param v vector to translate by
     * @returns out
     */
    export function translate(out: Mat4, a: Mat4, v: Vec3): Mat4;

    /**
     * Scales the mat4 by the dimensions in the given vec3
     *
     * @param out the receiving matrix
     * @param a the matrix to scale
     * @param v the vec3 to scale the matrix by
     * @returns out
     **/
    export function scale(out: Mat4, a: Mat4, v: Vec3): Mat4;

    /**
     * Rotates a mat4 by the given angle
     *
     * @param out the receiving matrix
     * @param a the matrix to rotate
     * @param rad the angle to rotate the matrix by
     * @param axis the axis to rotate around
     * @returns out
     */
    export function rotate(out: Mat4, a: Mat4, rad: number, axis: Vec3): Mat4;

    /**
     * Rotates a matrix by the given angle around the X axis
     *
     * @param out the receiving matrix
     * @param a the matrix to rotate
     * @param rad the angle to rotate the matrix by
     * @returns out
     */
    export function rotateX(out: Mat4, a: Mat4, rad: number): Mat4;

    /**
     * Rotates a matrix by the given angle around the Y axis
     *
     * @param out the receiving matrix
     * @param a the matrix to rotate
     * @param rad the angle to rotate the matrix by
     * @returns out
     */
    export function rotateY(out: Mat4, a: Mat4, rad: number): Mat4;

    /**
     * Rotates a matrix by the given angle around the Z axis
     *
     * @param out the receiving matrix
     * @param a the matrix to rotate
     * @param rad the angle to rotate the matrix by
     * @returns out
     */
    export function rotateZ(out: Mat4, a: Mat4, rad: number): Mat4;

    /**
     * Creates a matrix from a vector translation
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.translate(dest, dest, vec);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {vec3} v Translation vector
     * @returns {mat4} out
     */
    export function fromTranslation(out: Mat4, v: Vec3): Mat4

    /**
     * Creates a matrix from a vector scaling
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.scale(dest, dest, vec);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {vec3} v Scaling vector
     * @returns {mat4} out
     */
    export function fromScaling(out: Mat4, v: Vec3): Mat4

    /**
     * Creates a matrix from a given angle around a given axis
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.rotate(dest, dest, rad, axis);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {number} rad the angle to rotate the matrix by
     * @param {vec3} axis the axis to rotate around
     * @returns {mat4} out
     */
    export function fromRotation(out: Mat4, rad: number, axis: Vec3): Mat4

    /**
     * Creates a matrix from the given angle around the X axis
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.rotateX(dest, dest, rad);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */
    export function fromXRotation(out: Mat4, rad: number): Mat4

    /**
     * Creates a matrix from the given angle around the Y axis
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.rotateY(dest, dest, rad);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */
    export function fromYRotation(out: Mat4, rad: number): Mat4


    /**
     * Creates a matrix from the given angle around the Z axis
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.rotateZ(dest, dest, rad);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */
    export function fromZRotation(out: Mat4, rad: number): Mat4

    /**
     * Creates a matrix from a quaternion rotation and vector translation
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.translate(dest, vec);
     *     var quatMat = mat4.create();
     *     quat4.toMat4(quat, quatMat);
     *     mat4.multiply(dest, quatMat);
     *
     * @param out mat4 receiving operation result
     * @param q Rotation quaternion
     * @param v Translation vector
     * @returns out
     */
    export function fromRotationTranslation(out: Mat4, q: Quat, v: Vec3): Mat4;

    /**
     * Returns the translation vector component of a transformation
     *  matrix. If a matrix is built with fromRotationTranslation,
     *  the returned vector will be the same as the translation vector
     *  originally supplied.
     * @param  {vec3} out Vector to receive translation component
     * @param  {mat4} mat Matrix to be decomposed (input)
     * @return {vec3} out
     */
    export function getTranslation(out: Vec3, mat: Mat4): Vec3;

    /**
     * Returns the scaling factor component of a transformation matrix.
     * If a matrix is built with fromRotationTranslationScale with a
     * normalized Quaternion parameter, the returned vector will be
     * the same as the scaling vector originally supplied.
     * @param {vec3} out Vector to receive scaling factor component
     * @param {mat4} mat Matrix to be decomposed (input)
     * @return {vec3} out
     */
    export function getScaling(out: Vec3, mat: Mat4): Vec3;

    /**
     * Returns a quaternion representing the rotational component
     *  of a transformation matrix. If a matrix is built with
     *  fromRotationTranslation, the returned quaternion will be the
     *  same as the quaternion originally supplied.
     * @param {quat} out Quaternion to receive the rotation component
     * @param {mat4} mat Matrix to be decomposed (input)
     * @return {quat} out
     */
    export function getRotation(out: Quat, mat: Mat4): Quat;

    /**
     * Creates a matrix from a quaternion rotation, vector translation and vector scale
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.translate(dest, vec);
     *     var quatMat = mat4.create();
     *     quat4.toMat4(quat, quatMat);
     *     mat4.multiply(dest, quatMat);
     *     mat4.scale(dest, scale)
     *
     * @param out mat4 receiving operation result
     * @param q Rotation quaternion
     * @param v Translation vector
     * @param s Scaling vector
     * @returns out
     */
    export function fromRotationTranslationScale(out: Mat4, q: Quat, v: Vec3, s: Vec3): Mat4;

    /**
     * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.translate(dest, vec);
     *     mat4.translate(dest, origin);
     *     var quatMat = mat4.create();
     *     quat4.toMat4(quat, quatMat);
     *     mat4.multiply(dest, quatMat);
     *     mat4.scale(dest, scale)
     *     mat4.translate(dest, negativeOrigin);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {quat} q Rotation quaternion
     * @param {vec3} v Translation vector
     * @param {vec3} s Scaling vector
     * @param {vec3} o The origin vector around which to scale and rotate
     * @returns {mat4} out
     */
    export function fromRotationTranslationScaleOrigin(out: Mat4, q: Quat, v: Vec3, s: Vec3, o: Vec3): Mat4

    /**
     * Calculates a 4x4 matrix from the given quaternion
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {quat} q Quaternion to create matrix from
     *
     * @returns {mat4} out
     */
    export function fromQuat(out: Mat4, q: Quat): Mat4

    /**
     * Generates a frustum matrix with the given bounds
     *
     * @param out mat4 frustum matrix will be written into
     * @param left Left bound of the frustum
     * @param right Right bound of the frustum
     * @param bottom Bottom bound of the frustum
     * @param top Top bound of the frustum
     * @param near Near bound of the frustum
     * @param far Far bound of the frustum
     * @returns out
     */
    export function frustum(out: Mat4, left: number, right: number,
                            bottom: number, top: number, near: number, far: number): Mat4;

    /**
     * Generates a perspective projection matrix with the given bounds
     *
     * @param out mat4 frustum matrix will be written into
     * @param fovy Vertical field of view in radians
     * @param aspect Aspect ratio. typically viewport width/height
     * @param near Near bound of the frustum
     * @param far Far bound of the frustum
     * @returns out
     */
    export function perspective(out: Mat4, fovy: number, aspect: number,
                                near: number, far: number): Mat4;

    /**
     * Generates a perspective projection matrix with the given field of view.
     * This is primarily useful for generating projection matrices to be used
     * with the still experimental WebVR API.
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
     * @param {number} near Near bound of the frustum
     * @param {number} far Far bound of the frustum
     * @returns {mat4} out
     */
    export function perspectiveFromFieldOfView(out: Mat4,
                                                fov:{upDegrees: number, downDegrees: number, leftDegrees: number, rightDegrees: number},
                                                near: number, far: number): Mat4

    /**
     * Generates a orthogonal projection matrix with the given bounds
     *
     * @param out mat4 frustum matrix will be written into
     * @param left Left bound of the frustum
     * @param right Right bound of the frustum
     * @param bottom Bottom bound of the frustum
     * @param top Top bound of the frustum
     * @param near Near bound of the frustum
     * @param far Far bound of the frustum
     * @returns out
     */
    export function ortho(out: Mat4, left: number, right: number,
                        bottom: number, top: number, near: number, far: number): Mat4;

    /**
     * Generates a look-at matrix with the given eye position, focal point, and up axis
     *
     * @param out mat4 frustum matrix will be written into
     * @param eye Position of the viewer
     * @param center Point the viewer is looking at
     * @param up vec3 pointing up
     * @returns out
     */
    export function lookAt(out: Mat4, eye: Vec3, center: Vec3, up: Vec3): Mat4;

    /**
     * Returns a string representation of a mat4
     *
     * @param mat matrix to represent as a string
     * @returns string representation of the matrix
     */
    export function str(mat: Mat4): string;

    /**
     * Returns Frobenius norm of a mat4
     *
     * @param a the matrix to calculate Frobenius norm of
     * @returns Frobenius norm
     */
    export function frob(a: Mat4): number;

    /**
     * Adds two mat4's
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the first operand
     * @param {mat4} b the second operand
     * @returns {mat4} out
     */
    export function add(out: Mat4, a: Mat4, b: Mat4): Mat4

    /**
     * Subtracts matrix b from matrix a
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the first operand
     * @param {mat4} b the second operand
     * @returns {mat4} out
     */
    export function subtract(out: Mat4, a: Mat4, b: Mat4): Mat4

    /**
     * Subtracts matrix b from matrix a
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the first operand
     * @param {mat4} b the second operand
     * @returns {mat4} out
     */
    export function sub(out: Mat4, a: Mat4, b: Mat4): Mat4

    /**
     * Multiply each element of the matrix by a scalar.
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to scale
     * @param {number} b amount to scale the matrix's elements by
     * @returns {mat4} out
     */
    export function multiplyScalar(out: Mat4, a: Mat4, b: number): Mat4

    /**
     * Adds two mat4's after multiplying each element of the second operand by a scalar value.
     *
     * @param {mat4} out the receiving vector
     * @param {mat4} a the first operand
     * @param {mat4} b the second operand
     * @param {number} scale the amount to scale b's elements by before adding
     * @returns {mat4} out
     */
    export function multiplyScalarAndAdd (out: Mat4, a: Mat4, b: Mat4, scale: number): Mat4

    /**
     * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
     *
     * @param {mat4} a The first matrix.
     * @param {mat4} b The second matrix.
     * @returns {boolean} True if the matrices are equal, false otherwise.
     */
    export function exactEquals (a: Mat4, b: Mat4): boolean

    /**
     * Returns whether or not the matrices have approximately the same elements in the same position.
     *
     * @param {mat4} a The first matrix.
     * @param {mat4} b The second matrix.
     * @returns {boolean} True if the matrices are equal, false otherwise.
     */
    export function equals (a: Mat4, b: Mat4): boolean

    export interface MVPView {
        x: number; // Coordinate X of the beginning of the bound
        y: number; // Coordinate y of the beginning of the bound
        width: number; // Width of the bound
        height: number; // Height of the bound
    }

    /**
     * Create a MVP matrix from center, eye with perspective projection
     * @param {mat4} out mat4 receiving operation result
     * @param {number} fov Vertical field of view in radians
     * @param {number} near Near bound of the frustum
     * @param {number} far Far bound of the frustum
     * @param {vec2} size Width and height of viewport
     * @param {vec3} target Point the viewer is looking at
     * @param {vec3} eye Position of the viewer
     * @param {?MVPView} view Visible bound in the screen
     */
    export function mvpFromTargetEyeView(out: Mat4, fov: number, near: number, far: number, size: Vec2, target: Vec3,
        eye: Vec3, view: MVPView)

    /**
     * Create a matrix from a vector translation and vector scale
     * @param {mat4} out mat4 receiving operation result
     * @param {vec3} t Translation
     * @param {vec3} s Scale
     */
    export function fromTranslationScale(out: Mat4, t: Vec3, s: Vec3)
}

declare module '@2gis/gl-matrix/quat' {
    /**
     * Creates a new identity quat
     *
     * @returns a new quaternion
     */
    export function create(): Quat;

    /**
     * Creates a new quat initialized with values from an existing quaternion
     *
     * @param a quaternion to clone
     * @returns a new quaternion
     * @function
     */
    export function clone(a: Quat): Quat;

    /**
     * Creates a new quat initialized with the given values
     *
     * @param x X component
     * @param y Y component
     * @param z Z component
     * @param w W component
     * @returns a new quaternion
     * @function
     */
    export function fromValues(x: number, y: number, z: number, w: number): Quat;

    /**
     * Copy the values from one quat to another
     *
     * @param out the receiving quaternion
     * @param a the source quaternion
     * @returns out
     * @function
     */
    export function copy(out: Quat, a: Quat): Quat;

    /**
     * Set the components of a quat to the given values
     *
     * @param out the receiving quaternion
     * @param x X component
     * @param y Y component
     * @param z Z component
     * @param w W component
     * @returns out
     * @function
     */
    export function set(out: Quat, x: number, y: number, z: number, w: number): Quat;

    /**
     * Set a quat to the identity quaternion
     *
     * @param out the receiving quaternion
     * @returns out
     */
    export function identity(out: Quat): Quat;

    /**
     * Sets a quaternion to represent the shortest rotation from one
     * vector to another.
     *
     * Both vectors are assumed to be unit length.
     *
     * @param {quat} out the receiving quaternion.
     * @param {vec3} a the initial vector
     * @param {vec3} b the destination vector
     * @returns {quat} out
     */
    export function rotationTo (out: Quat, a: Vec3, b: Vec3): Quat;

    /**
     * Sets the specified quaternion with values corresponding to the given
     * axes. Each axis is a vec3 and is expected to be unit length and
     * perpendicular to all other specified axes.
     *
     * @param {vec3} view  the vector representing the viewing direction
     * @param {vec3} right the vector representing the local "right" direction
     * @param {vec3} up    the vector representing the local "up" direction
     * @returns {quat} out
     */
    export function setAxes (out: Quat, view: Vec3, right: Vec3, up: Vec3): Quat



    /**
     * Sets a quat from the given angle and rotation axis,
     * then returns it.
     *
     * @param out the receiving quaternion
     * @param axis the axis around which to rotate
     * @param rad the angle in radians
     * @returns out
     **/
    export function setAxisAngle(out: Quat, axis: Vec3, rad: number): Quat;

    /**
     * Gets the rotation axis and angle for a given
     *  quaternion. If a quaternion is created with
     *  setAxisAngle, this method will return the same
     *  values as providied in the original parameter list
     *  OR functionally equivalent values.
     * Example: The quaternion formed by axis [0, 0, 1] and
     *  angle -90 is the same as the quaternion formed by
     *  [0, 0, 1] and 270. This method favors the latter.
     * @param  {vec3} out_axis  Vector receiving the axis of rotation
     * @param  {quat} q     Quaternion to be decomposed
     * @return {number}     Angle, in radians, of the rotation
     */
    export function getAxisAngle (out_axis: Vec3, q: Quat): number

    /**
     * Adds two quat's
     *
     * @param out the receiving quaternion
     * @param a the first operand
     * @param b the second operand
     * @returns out
     * @function
     */
    export function add(out: Quat, a: Quat, b: Quat): Quat;

    /**
     * Multiplies two quat's
     *
     * @param out the receiving quaternion
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function multiply(out: Quat, a: Quat, b: Quat): Quat;

    /**
     * Multiplies two quat's
     *
     * @param out the receiving quaternion
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function mul(out: Quat, a: Quat, b: Quat): Quat;

    /**
     * Scales a quat by a scalar number
     *
     * @param out the receiving vector
     * @param a the vector to scale
     * @param b amount to scale the vector by
     * @returns out
     * @function
     */
    export function scale(out: Quat, a: Quat, b: number): Quat;

    /**
     * Calculates the length of a quat
     *
     * @param a vector to calculate length of
     * @returns length of a
     * @function
     */
    export function length(a: Quat): number;

    /**
     * Calculates the length of a quat
     *
     * @param a vector to calculate length of
     * @returns length of a
     * @function
     */
    export function len(a: Quat): number;

    /**
     * Calculates the squared length of a quat
     *
     * @param a vector to calculate squared length of
     * @returns squared length of a
     * @function
     */
    export function squaredLength(a: Quat): number;

    /**
     * Calculates the squared length of a quat
     *
     * @param a vector to calculate squared length of
     * @returns squared length of a
     * @function
     */
    export function sqrLen(a: Quat): number;

    /**
     * Normalize a quat
     *
     * @param out the receiving quaternion
     * @param a quaternion to normalize
     * @returns out
     * @function
     */
    export function normalize(out: Quat, a: Quat): Quat;

    /**
     * Calculates the dot product of two quat's
     *
     * @param a the first operand
     * @param b the second operand
     * @returns dot product of a and b
     * @function
     */
    export function dot(a: Quat, b: Quat): number;

    /**
     * Performs a linear interpolation between two quat's
     *
     * @param out the receiving quaternion
     * @param a the first operand
     * @param b the second operand
     * @param t interpolation amount between the two inputs
     * @returns out
     * @function
     */
    export function lerp(out: Quat, a: Quat, b: Quat, t: number): Quat;

    /**
     * Performs a spherical linear interpolation between two quat
     *
     * @param out the receiving quaternion
     * @param a the first operand
     * @param b the second operand
     * @param t interpolation amount between the two inputs
     * @returns out
     */
    export function slerp(out: Quat, a: Quat, b: Quat, t: number): Quat;

    /**
     * Performs a spherical linear interpolation with two control points
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a the first operand
     * @param {quat} b the second operand
     * @param {quat} c the third operand
     * @param {quat} d the fourth operand
     * @param {number} t interpolation amount
     * @returns {quat} out
     */
    export function sqlerp(out: Quat, a: Quat, b: Quat, c: Quat, d: Quat, t: number): Quat;

    /**
     * Calculates the inverse of a quat
     *
     * @param out the receiving quaternion
     * @param a quat to calculate inverse of
     * @returns out
     */
    export function invert(out: Quat, a: Quat): Quat;

    /**
     * Calculates the conjugate of a quat
     * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
     *
     * @param out the receiving quaternion
     * @param a quat to calculate conjugate of
     * @returns out
     */
    export function conjugate(out: Quat, a: Quat): Quat;

    /**
     * Returns a string representation of a quaternion
     *
     * @param a quat to represent as a string
     * @returns string representation of the quat
     */
    export function str(a: Quat): string;

    /**
     * Rotates a quaternion by the given angle about the X axis
     *
     * @param out quat receiving operation result
     * @param a quat to rotate
     * @param rad angle (in radians) to rotate
     * @returns out
     */
    export function rotateX(out: Quat, a: Quat, rad: number): Quat;

    /**
     * Rotates a quaternion by the given angle about the Y axis
     *
     * @param out quat receiving operation result
     * @param a quat to rotate
     * @param rad angle (in radians) to rotate
     * @returns out
     */
    export function rotateY(out: Quat, a: Quat, rad: number): Quat;

    /**
     * Rotates a quaternion by the given angle about the Z axis
     *
     * @param out quat receiving operation result
     * @param a quat to rotate
     * @param rad angle (in radians) to rotate
     * @returns out
     */
    export function rotateZ(out: Quat, a: Quat, rad: number): Quat;

    /**
     * Creates a quaternion from the given 3x3 rotation matrix.
     *
     * NOTE: The resultant quaternion is not normalized, so you should be sure
     * to renormalize the quaternion yourself where necessary.
     *
     * @param out the receiving quaternion
     * @param m rotation matrix
     * @returns out
     * @function
     */
    export function fromMat3(out: Quat, m: Mat3): Quat;

    /**
     * Sets the specified quaternion with values corresponding to the given
     * axes. Each axis is a vec3 and is expected to be unit length and
     * perpendicular to all other specified axes.
     *
     * @param out the receiving quat
     * @param view  the vector representing the viewing direction
     * @param right the vector representing the local "right" direction
     * @param up    the vector representing the local "up" direction
     * @returns out
     */
    export function setAxes(out: Quat, view: Vec3, right: Vec3, up: Vec3): Quat;

    /**
     * Sets a quaternion to represent the shortest rotation from one
     * vector to another.
     *
     * Both vectors are assumed to be unit length.
     *
     * @param out the receiving quaternion.
     * @param a the initial vector
     * @param b the destination vector
     * @returns out
     */
    export function rotationTo(out: Quat, a: Vec3, b: Vec3): Quat;

    /**
     * Calculates the W component of a quat from the X, Y, and Z components.
     * Assumes that quaternion is 1 unit in length.
     * Any existing W component will be ignored.
     *
     * @param out the receiving quaternion
     * @param a quat to calculate W component of
     * @returns out
     */
    export function calculateW(out: Quat, a: Quat): Quat;

    /**
     * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
     *
     * @param {quat} a The first vector.
     * @param {quat} b The second vector.
     * @returns {boolean} True if the quaternions are equal, false otherwise.
     */
    export function exactEquals (a: Quat, b: Quat): boolean;

    /**
     * Returns whether or not the quaternions have approximately the same elements in the same position.
     *
     * @param {quat} a The first vector.
     * @param {quat} b The second vector.
     * @returns {boolean} True if the quaternions are equal, false otherwise.
     */
    export function equals (a: Quat, b: Quat): boolean;
}
