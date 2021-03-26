interface IndexedCollection extends Iterable<f64> {
    readonly length: f64;
    [key: f64]: f64;
}

// prettier-ignore
declare type mat2 =
  | [f64, f64, 
     f64, f64]
  | IndexedCollection;

// prettier-ignore
declare type mat2d =
  | [f64, f64, 
     f64, f64, 
     f64, f64]
  | IndexedCollection;

// prettier-ignore
declare type mat3 =
  | [f64, f64, f64, 
     f64, f64, f64, 
     f64, f64, f64]
  | IndexedCollection;

// prettier-ignore
declare type mat4 =
  | [f64, f64, f64, f64,
     f64, f64, f64, f64,
     f64, f64, f64, f64,
     f64, f64, f64, f64]
  | IndexedCollection;

declare type quat = [f64, f64, f64, f64] | IndexedCollection;

// prettier-ignore
declare type quat2 =
  | [f64, f64, f64, f64, 
    f64, f64, f64, f64]
  | IndexedCollection;

declare type vec2 = [f64, f64] | IndexedCollection;
declare type vec3 = [f64, f64, f64] | IndexedCollection;
declare type vec4 = [f64, f64, f64, f64] | IndexedCollection;

// prettier-ignore
declare type ReadonlyMat2 =
  | readonly [
      f64, f64,
      f64, f64
    ]
  | IndexedCollection;

// prettier-ignore
declare type ReadonlyMat2d =
  | readonly [
      f64, f64,
      f64, f64,
      f64, f64
    ]
  | IndexedCollection;

// prettier-ignore
declare type ReadonlyMat3 =
  | readonly [
      f64, f64, f64,
      f64, f64, f64,
      f64, f64, f64
    ]
  | IndexedCollection;

// prettier-ignore
declare type ReadonlyMat4 =
  | readonly [
      f64, f64, f64, f64,
      f64, f64, f64, f64,
      f64, f64, f64, f64,
      f64, f64, f64, f64
    ]
  | IndexedCollection;

declare type ReadonlyQuat =
  | readonly [f64, f64, f64, f64]
  | IndexedCollection;

declare type ReadonlyQuat2 =
  | readonly [f64, f64, f64, f64, f64, f64, f64, f64]
  | IndexedCollection;

declare type ReadonlyVec2 = readonly [f64, f64] | IndexedCollection;
declare type ReadonlyVec3 = readonly [f64, f64, f64] | IndexedCollection;
declare type ReadonlyVec4 =
  | readonly [f64, f64, f64, f64]
  | IndexedCollection;
