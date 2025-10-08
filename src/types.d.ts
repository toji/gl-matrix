/**
 * Users can augment this interface to override the default array type
 * 
 * @example
 * declare module "gl-matrix" { 
 *   interface Overrides { 
 *     ArrayType: Float64Array 
 *   } 
 * }
 */
interface Overrides { }

/**
 * Users can override `ArrayType` by augmenting `gl-matrix` module
 * 
 * @example
 * declare module "gl-matrix" { 
 *   interface Overrides { 
 *     ArrayType: Float64Array 
 *   } 
 * }
 */
declare type ArrayType = Overrides extends { ArrayType: infer T } ? T : Float32Array

interface IndexedCollection extends Iterable<number> {
  readonly length: number;
  [index: number]: number;
}

declare namespace Tuple {
  // prettier-ignore
  export type Mat2 = [
    number, number,
    number, number
  ]
  // prettier-ignore
  export type Mat2d = [
    number, number,
    number, number,
    number, number
  ]
  // prettier-ignore
  export type Mat3 = [
    number, number, number,
    number, number, number,
    number, number, number
  ]
  // prettier-ignore
  export type Mat4 = [
    number, number, number, number,
    number, number, number, number,
    number, number, number, number,
    number, number, number, number
  ]
  export type Quat = [number, number, number, number]
  // prettier-ignore
  export type Quat2 = [
    number, number, number, number,
    number, number, number, number
  ]
  export type Vec2 = [number, number]
  export type Vec3 = [number, number, number]
  export type Vec4 = [number, number, number, number]

  // prettier-ignore
  export type ReadonlyMat2 = readonly [
    number, number,
    number, number
  ]
  // prettier-ignore
  export type ReadonlyMat2d = readonly [
    number, number,
    number, number,
    number, number
  ]
  // prettier-ignore
  export type ReadonlyMat3 = readonly [
    number, number, number,
    number, number, number,
    number, number, number
  ]
  // prettier-ignore
  export type ReadonlyMat4 = readonly [
    number, number, number, number,
    number, number, number, number,
    number, number, number, number,
    number, number, number, number
  ]
  export type ReadonlyQuat = readonly [number, number, number, number]
  // prettier-ignore
  export type ReadonlyQuat2 = readonly [
    number, number, number, number,
    number, number, number, number
  ]
  export type ReadonlyVec2 = readonly [number, number]
  export type ReadonlyVec3 = readonly [number, number, number];
  export type ReadonlyVec4 = readonly [number, number, number, number];
}

/**
 * Return type utilities. Narrows Array<number> to Tuple types, preserves other types.
 *
 * @example
 * const result = mat4.copy([], mat4.create()); // Tuple.Mat4
 * const result2 = mat4.copy(new Float32Array(16), mat4.create()); // Float32Array
 */
declare namespace ReturnType { 
  export type Mat2<T extends IndexedCollection> = T extends Array<number> ? Tuple.Mat2 : T
  export type Mat2d<T extends IndexedCollection> = T extends Array<number> ? Tuple.Mat2d : T
  export type Mat3<T extends IndexedCollection> = T extends Array<number> ? Tuple.Mat3 : T
  export type Mat4<T extends IndexedCollection> = T extends Array<number> ? Tuple.Mat4 : T
  export type Quat<T extends IndexedCollection> = T extends Array<number> ? Tuple.Quat : T
  export type Quat2<T extends IndexedCollection> = T extends Array<number> ? Tuple.Quat2 : T
  export type Vec2<T extends IndexedCollection> = T extends Array<number> ? Tuple.Vec2 : T
  export type Vec3<T extends IndexedCollection> = T extends Array<number> ? Tuple.Vec3 : T
  export type Vec4<T extends IndexedCollection> = T extends Array<number> ? Tuple.Vec4 : T
}

declare type mat2 = IndexedCollection | Tuple.Mat2;
declare type mat2d = IndexedCollection | Tuple.Mat2d;
declare type mat3 = IndexedCollection | Tuple.Mat3;
declare type mat4 = IndexedCollection | Tuple.Mat4;
declare type quat = IndexedCollection | Tuple.Quat;
declare type quat2 = IndexedCollection | Tuple.Quat2;
declare type vec2 = IndexedCollection | Tuple.Vec2;
declare type vec3 = IndexedCollection | Tuple.Vec3;
declare type vec4 = IndexedCollection | Tuple.Vec4;

declare type ReadonlyMat2 = IndexedCollection | Tuple.ReadonlyMat2;
declare type ReadonlyMat2d = IndexedCollection | Tuple.ReadonlyMat2d;
declare type ReadonlyMat3 = IndexedCollection | Tuple.ReadonlyMat3;
declare type ReadonlyMat4 = IndexedCollection | Tuple.ReadonlyMat4;
declare type ReadonlyQuat = IndexedCollection | Tuple.ReadonlyQuat;
declare type ReadonlyQuat2 = IndexedCollection | Tuple.ReadonlyQuat2;
declare type ReadonlyVec2 = IndexedCollection | Tuple.ReadonlyVec2;
declare type ReadonlyVec3 = IndexedCollection | Tuple.ReadonlyVec3;
declare type ReadonlyVec4 = IndexedCollection | Tuple.ReadonlyVec4;
