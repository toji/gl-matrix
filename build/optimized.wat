(module
 (type $f64_f64_=>_i32 (func (param f64 f64) (result i32)))
 (type $f64_=>_f64 (func (param f64) (result f64)))
 (type $f64_f64_f64_=>_f64 (func (param f64 f64 f64) (result f64)))
 (import "Math" "max" (func $src/as/imports/MathUtil.max3 (param f64 f64 f64) (result f64)))
 (memory $0 1)
 (data (i32.const 1036) ",")
 (data (i32.const 1048) "\01\00\00\00\18\00\00\00~\00l\00i\00b\00/\00m\00a\00t\00h\00.\00t\00s")
 (data (i32.const 1084) "\1c")
 (data (i32.const 1096) "\03\00\00\00\08\00\00\00\01")
 (data (i32.const 1116) "\1c")
 (data (i32.const 1128) "\01\00\00\00\06\00\00\00z\00y\00x")
 (data (i32.const 1148) "\1c")
 (data (i32.const 1160) "\04\00\00\00\08\00\00\00\02")
 (global $src/as/common/EPSILON f64 (f64.const 1e-06))
 (global $src/as/common/RANDOM i32 (i32.const 1104))
 (global $src/as/common/ANGLE_ORDER i32 (i32.const 1136))
 (export "EPSILON" (global $src/as/common/EPSILON))
 (export "RANDOM" (global $src/as/common/RANDOM))
 (export "ANGLE_ORDER" (global $src/as/common/ANGLE_ORDER))
 (export "toRadian" (func $src/as/common/toRadian))
 (export "equals" (func $src/as/common/equals))
 (export "memory" (memory $0))
 (func $src/as/common/toRadian (param $0 f64) (result f64)
  local.get $0
  f64.const 0.017453292519943295
  f64.mul
 )
 (func $src/as/common/equals (param $0 f64) (param $1 f64) (result i32)
  local.get $0
  local.get $1
  f64.sub
  f64.abs
  f64.const 1
  local.get $0
  f64.abs
  local.get $1
  f64.abs
  call $src/as/imports/MathUtil.max3
  f64.const 1e-06
  f64.mul
  f64.le
 )
)
