interface IndexedCollection extends Iterable<number> {
    readonly length: number;
    [index: number]: number;
}

// prettier-ignore
declare type mat2 =
  | [number, number, 
     number, number]
  | IndexedCollection;

// prettier-ignore
declare type mat2d =
  | [number, number, 
     number, number, 
     number, number]
  | IndexedCollection;

// prettier-ignore
declare type mat3 =
  | [number, number, number, 
     number, number, number, 
     number, number, number]
  | IndexedCollection;

// prettier-ignore
declare type mat4 =
  | [number, number, number, number,
     number, number, number, number,
     number, number, number, number,
     number, number, number, number]
  | IndexedCollection;

declare type quat = [number, number, number, number] | IndexedCollection;

// prettier-ignore
declare type quat2 =
  | [number, number, number, number, 
    number, number, number, number]
  | IndexedCollection;

declare type vec2 = [number, number] | IndexedCollection;
declare type vec3 = [number, number, number] | IndexedCollection;
declare type vec4 = [number, number, number, number] | IndexedCollection;

// prettier-ignore
declare type ReadonlyMat2 =
  | readonly [
      number, number,
      number, number
    ]
  | IndexedCollection;

// prettier-ignore
declare type ReadonlyMat2d =
  | readonly [
      number, number,
      number, number,
      number, number
    ]
  | IndexedCollection;

// prettier-ignore
declare type ReadonlyMat3 =
  | readonly [
      number, number, number,
      number, number, number,
      number, number, number
    ]
  | IndexedCollection;

// prettier-ignore
declare type ReadonlyMat4 =
  | readonly [
      number, number, number, number,
      number, number, number, number,
      number, number, number, number,
      number, number, number, number
    ]
  | IndexedCollection;

declare type ReadonlyQuat =
  | readonly [number, number, number, number]
  | IndexedCollection;

declare type ReadonlyQuat2 =
  | readonly [number, number, number, number, number, number, number, number]
  | IndexedCollection;

declare type ReadonlyVec2 = readonly [number, number] | IndexedCollection;
declare type ReadonlyVec3 = readonly [number, number, number] | IndexedCollection;
declare type ReadonlyVec4 =
  | readonly [number, number, number, number]
  | IndexedCollection;
