// prettier-ignore
declare type mat2 =
  | [number, number, 
     number, number]
  | Float32Array;

// prettier-ignore
declare type mat2d =
  | [number, number, 
     number, number, 
     number, number]
  | Float32Array;

// prettier-ignore
declare type mat3 =
  | [number, number, number, 
     number, number, number, 
     number, number, number]
  | Float32Array;

// prettier-ignore
declare type mat4 =
  | [number, number, number, number,
     number, number, number, number,
     number, number, number, number,
     number, number, number, number]
  | Float32Array;

declare type quat = [number, number, number, number] | Float32Array;

// prettier-ignore
declare type quat2 =
  | [number, number, number, number, 
    number, number, number, number]
  | Float32Array;

declare type vec2 = [number, number] | Float32Array;
declare type vec3 = [number, number, number] | Float32Array;
declare type vec4 = [number, number, number, number] | Float32Array;
