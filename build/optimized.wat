(module
 (type $i32_i32_=>_i32 (func (param i32 i32) (result i32)))
 (type $i32_=>_i32 (func (param i32) (result i32)))
 (type $i32_i32_i32_=>_i32 (func (param i32 i32 i32) (result i32)))
 (type $i32_i32_=>_none (func (param i32 i32)))
 (type $i32_i32_i32_=>_none (func (param i32 i32 i32)))
 (type $i32_=>_none (func (param i32)))
 (type $f64_f64_=>_i32 (func (param f64 f64) (result i32)))
 (type $none_=>_none (func))
 (type $i32_i32_i32_i32_=>_i32 (func (param i32 i32 i32 i32) (result i32)))
 (type $f64_i32_i32_=>_i32 (func (param f64 i32 i32) (result i32)))
 (type $i32_f64_=>_i32 (func (param i32 f64) (result i32)))
 (type $i32_f64_i32_=>_i32 (func (param i32 f64 i32) (result i32)))
 (type $none_=>_i32 (func (result i32)))
 (type $i32_i32_f64_=>_i32 (func (param i32 i32 f64) (result i32)))
 (type $none_=>_f64 (func (result f64)))
 (type $i32_=>_f64 (func (param i32) (result f64)))
 (type $f64_=>_f64 (func (param f64) (result f64)))
 (type $i32_i32_=>_f64 (func (param i32 i32) (result f64)))
 (type $i32_i32_i32_i32_=>_none (func (param i32 i32 i32 i32)))
 (type $i32_i32_f64_=>_none (func (param i32 i32 f64)))
 (type $f64_i32_i32_=>_none (func (param f64 i32 i32)))
 (type $i64_=>_i32 (func (param i64) (result i32)))
 (type $f64_=>_i32 (func (param f64) (result i32)))
 (type $i32_i32_i32_f64_=>_i32 (func (param i32 i32 i32 f64) (result i32)))
 (type $i32_i64_i32_i64_i32_i64_i32_=>_i32 (func (param i32 i64 i32 i64 i32 i64 i32) (result i32)))
 (type $i32_f64_i32_i32_=>_i32 (func (param i32 f64 i32 i32) (result i32)))
 (type $i32_f64_f64_f64_f64_=>_i32 (func (param i32 f64 f64 f64 f64) (result i32)))
 (type $f64_f64_f64_f64_=>_i32 (func (param f64 f64 f64 f64) (result i32)))
 (type $i64_=>_i64 (func (param i64) (result i64)))
 (type $f64_i32_i32_=>_f64 (func (param f64 i32 i32) (result f64)))
 (type $f64_f64_f64_=>_f64 (func (param f64 f64 f64) (result f64)))
 (type $f64_f64_f64_f64_f64_f64_f64_f64_f64_f64_f64_f64_f64_f64_f64_f64_=>_f64 (func (param f64 f64 f64 f64 f64 f64 f64 f64 f64 f64 f64 f64 f64 f64 f64 f64) (result f64)))
 (import "env" "seed" (func $~lib/builtins/seed (result f64)))
 (import "env" "abort" (func $~lib/builtins/abort (param i32 i32 i32 i32)))
 (import "Math" "hypot" (func $assembly/imports/MathUtil.hypot (param f64 f64 f64 f64 f64 f64 f64 f64 f64 f64 f64 f64 f64 f64 f64 f64) (result f64)))
 (import "Math" "max" (func $assembly/imports/MathUtil.max3 (param f64 f64 f64) (result f64)))
 (memory $0 1)
 (data (i32.const 1036) ",")
 (data (i32.const 1048) "\01\00\00\00\18\00\00\00~\00l\00i\00b\00/\00m\00a\00t\00h\00.\00t\00s")
 (data (i32.const 1084) "\1c")
 (data (i32.const 1096) "\03\00\00\00\08\00\00\00\01")
 (data (i32.const 1116) "\1c")
 (data (i32.const 1128) "\01\00\00\00\06\00\00\00z\00y\00x")
 (data (i32.const 1148) "<")
 (data (i32.const 1160) "\01\00\00\00$\00\00\00I\00n\00d\00e\00x\00 \00o\00u\00t\00 \00o\00f\00 \00r\00a\00n\00g\00e")
 (data (i32.const 1212) "<")
 (data (i32.const 1224) "\01\00\00\00$\00\00\00~\00l\00i\00b\00/\00t\00y\00p\00e\00d\00a\00r\00r\00a\00y\00.\00t\00s")
 (data (i32.const 1276) "\1c")
 (data (i32.const 1288) "\07\00\00\00\08\00\00\00\02")
 (data (i32.const 1308) "\1c")
 (data (i32.const 1320) "\07\00\00\00\08\00\00\00\03")
 (data (i32.const 1340) ",")
 (data (i32.const 1352) "\01\00\00\00\1c\00\00\00I\00n\00v\00a\00l\00i\00d\00 \00l\00e\00n\00g\00t\00h")
 (data (i32.const 1388) "<")
 (data (i32.const 1400) "\01\00\00\00&\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00b\00u\00f\00f\00e\00r\00.\00t\00s")
 (data (i32.const 1452) "<")
 (data (i32.const 1464) "\01\00\00\00(\00\00\00A\00l\00l\00o\00c\00a\00t\00i\00o\00n\00 \00t\00o\00o\00 \00l\00a\00r\00g\00e")
 (data (i32.const 1516) "<")
 (data (i32.const 1528) "\01\00\00\00 \00\00\00~\00l\00i\00b\00/\00r\00t\00/\00i\00t\00c\00m\00s\00.\00t\00s")
 (data (i32.const 1644) ",")
 (data (i32.const 1656) "\01\00\00\00\14\00\00\00~\00l\00i\00b\00/\00r\00t\00.\00t\00s")
 (data (i32.const 1724) "<")
 (data (i32.const 1736) "\01\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00r\00t\00/\00t\00l\00s\00f\00.\00t\00s")
 (data (i32.const 1788) "\1c")
 (data (i32.const 1800) "\01")
 (data (i32.const 1820) "\1c")
 (data (i32.const 1832) "\01\00\00\00\06\00\00\000\00.\000")
 (data (i32.const 1852) "\1c")
 (data (i32.const 1864) "\01\00\00\00\06\00\00\00N\00a\00N")
 (data (i32.const 1884) ",")
 (data (i32.const 1896) "\01\00\00\00\12\00\00\00-\00I\00n\00f\00i\00n\00i\00t\00y")
 (data (i32.const 1932) ",")
 (data (i32.const 1944) "\01\00\00\00\10\00\00\00I\00n\00f\00i\00n\00i\00t\00y")
 (data (i32.const 2040) "\88\02\1c\08\a0\d5\8f\fav\bf>\a2\7f\e1\ae\bav\acU0 \fb\16\8b\ea5\ce]J\89B\cf-;eU\aa\b0k\9a\dfE\1a=\03\cf\1a\e6\ca\c6\9a\c7\17\fep\abO\dc\bc\be\fc\b1w\ff\0c\d6kA\ef\91V\be<\fc\7f\90\ad\1f\d0\8d\83\9aU1(\\Q\d3\b5\c9\a6\ad\8f\acq\9d\cb\8b\ee#w\"\9c\eamSx@\91I\cc\aeW\ce\b6]y\12<\827V\fbM6\94\10\c2O\98H8o\ea\96\90\c7:\82%\cb\85t\d7\f4\97\bf\97\cd\cf\86\a0\e5\ac*\17\98\n4\ef\8e\b25*\fbg8\b2;?\c6\d2\df\d4\c8\84\ba\cd\d3\1a\'D\dd\c5\96\c9%\bb\ce\9fk\93\84\a5b}$l\ac\db\f6\da_\0dXf\ab\a3&\f1\c3\de\93\f8\e2\f3\b8\80\ff\aa\a8\ad\b5\b5\8bJ|l\05_b\87S0\c14`\ff\bc\c9U&\ba\91\8c\85N\96\bd~)p$w\f9\df\8f\b8\e5\b8\9f\bd\df\a6\94}t\88\cf_\a9\f8\cf\9b\a8\8f\93pD\b9k\15\0f\bf\f8\f0\08\8a\b611eU%\b0\cd\ac\7f{\d0\c6\e2?\99\06;+*\c4\10\\\e4\d3\92si\99$$\aa\0e\ca\00\83\f2\b5\87\fd\eb\1a\11\92d\08\e5\bc\cc\88Po\t\cc\bc\8c,e\19\e2X\17\b7\d1\00\00\00\00\00\00@\9c\00\00\00\00\10\a5\d4\e8\00\00b\ac\c5\ebx\ad\84\t\94\f8x9?\81\b3\15\07\c9{\ce\97\c0p\\\ea{\ce2~\8fh\80\e9\ab\a48\d2\d5E\"\9a\17&\'O\9f\'\fb\c4\d41\a2c\ed\a8\ad\c8\8c8e\de\b0\dbe\ab\1a\8e\08\c7\83\9a\1dqB\f9\1d]\c4X\e7\1b\a6,iM\92\ea\8dp\1ad\ee\01\daJw\ef\9a\99\a3m\a2\85k}\b4{x\t\f2w\18\ddy\a1\e4T\b4\c2\c5\9b[\92\86[\86=]\96\c8\c5S5\c8\b3\a0\97\fa\\\b4*\95\e3_\a0\99\bd\9fF\de%\8c9\db4\c2\9b\a5\\\9f\98\a3r\9a\c6\f6\ce\be\e9TS\bf\dc\b7\e2A\"\f2\17\f3\fc\88\a5x\\\d3\9b\ce \cc\dfS!{\f3Z\16\98:0\1f\97\dc\b5\a0\e2\96\b3\e3\\S\d1\d9\a8<D\a7\a4\d9|\9b\fb\10D\a4\a7LLv\bb\1a\9c@\b6\ef\8e\ab\8b,\84W\a6\10\ef\1f\d0)1\91\e9\e5\a4\10\9b\9d\0c\9c\a1\fb\9b\10\e7)\f4;b\d9 (\ac\85\cf\a7z^KD\80-\dd\ac\03@\e4!\bf\8f\ffD^/\9cg\8eA\b8\8c\9c\9d\173\d4\a9\1b\e3\b4\92\db\19\9e\d9w\df\ban\bf\96\ebk\ee\f0\9b;\02\87\af")
 (data (i32.const 2736) "<\fbW\fbr\fb\8c\fb\a7\fb\c1\fb\dc\fb\f6\fb\11\fc,\fcF\fca\fc{\fc\96\fc\b1\fc\cb\fc\e6\fc\00\fd\1b\fd5\fdP\fdk\fd\85\fd\a0\fd\ba\fd\d5\fd\ef\fd\n\fe%\fe?\feZ\fet\fe\8f\fe\a9\fe\c4\fe\df\fe\f9\fe\14\ff.\ffI\ffc\ff~\ff\99\ff\b3\ff\ce\ff\e8\ff\03\00\1e\008\00S\00m\00\88\00\a2\00\bd\00\d8\00\f2\00\0d\01\'\01B\01\\\01w\01\92\01\ac\01\c7\01\e1\01\fc\01\16\021\02L\02f\02\81\02\9b\02\b6\02\d0\02\eb\02\06\03 \03;\03U\03p\03\8b\03\a5\03\c0\03\da\03\f5\03\0f\04*\04")
 (data (i32.const 2912) "\01\00\00\00\n\00\00\00d\00\00\00\e8\03\00\00\10\'\00\00\a0\86\01\00@B\0f\00\80\96\98\00\00\e1\f5\05\00\ca\9a;")
 (data (i32.const 2956) "\1c")
 (data (i32.const 2968) "\01\00\00\00\02\00\00\00,")
 (data (i32.const 2992) "n\83\f9\a2\00\00\00\00\d1W\'\fc)\15DN\99\95b\db\c0\dd4\f5\abcQ\feA\90C<:n$\b7a\c5\bb\de\ea.I\06\e0\d2MB\1c\eb\1d\fe\1c\92\d1\t\f55\82\e8>\a7)\b1&p\9c\e9\84D\bb.9\d6\919A~_\b4\8b_\84\9c\f49S\83\ff\97\f8\1f;(\f9\bd\8b\11/\ef\0f\98\05\de\cf~6m\1fm\nZf?FO\b7\t\cb\'\c7\ba\'u-\ea_\9e\f79\07={\f1\e5\eb\b1_\fbk\ea\92R\8aF0\03V\08]\8d\1f \bc\cf\f0\abk{\fca\91\e3\a9\1d6\f4\9a_\85\99e\08\1b\e6^\80\d8\ff\8d@h\a0\14W\15\06\061\'sM")
 (data (i32.const 3196) "\1c")
 (data (i32.const 3208) "\01\00\00\00\n\00\00\00m\00a\00t\002\00(")
 (data (i32.const 3228) "\1c")
 (data (i32.const 3240) "\01\00\00\00\04\00\00\00,\00 ")
 (data (i32.const 3260) "\1c")
 (data (i32.const 3272) "\01\00\00\00\02\00\00\00)")
 (data (i32.const 3292) "\1c")
 (data (i32.const 3304) "\0b\00\00\00\08\00\00\00\04")
 (data (i32.const 3328) "\0c\00\00\00 \00\00\00\00\00\00\00 ")
 (data (i32.const 3364) "\01\1a\00\00\05\00\00\00\01\1a\00\00\02\00\00\00\01\1a\00\00\04")
 (data (i32.const 3396) "\01\1a\00\00\05\00\00\00\02A\00\00\00\00\00\00\02\t")
 (table $0 5 funcref)
 (elem (i32.const 1) $~lib/math/NativeMath.random $assembly/mat2/multiply $assembly/mat2/subtract $~lib/util/sort/COMPARATOR<f64>~anonymous|0)
 (global $~lib/math/random_seeded (mut i32) (i32.const 0))
 (global $~lib/math/random_state0_64 (mut i64) (i64.const 0))
 (global $~lib/math/random_state1_64 (mut i64) (i64.const 0))
 (global $~lib/math/random_state0_32 (mut i32) (i32.const 0))
 (global $~lib/math/random_state1_32 (mut i32) (i32.const 0))
 (global $assembly/mat2/mul i32 (i32.const 1296))
 (global $assembly/mat2/sub i32 (i32.const 1328))
 (global $~lib/rt/itcms/total (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/threshold (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/state (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/visitCount (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/pinSpace (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/iter (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/toSpace (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/white (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/fromSpace (mut i32) (i32.const 0))
 (global $~lib/rt/tlsf/ROOT (mut i32) (i32.const 0))
 (global $~argumentsLength (mut i32) (i32.const 0))
 (global $~lib/util/number/_frc_plus (mut i64) (i64.const 0))
 (global $~lib/util/number/_frc_minus (mut i64) (i64.const 0))
 (global $~lib/util/number/_exp (mut i32) (i32.const 0))
 (global $~lib/util/number/_K (mut i32) (i32.const 0))
 (global $~lib/util/number/_frc_pow (mut i64) (i64.const 0))
 (global $~lib/util/number/_exp_pow (mut i32) (i32.const 0))
 (global $~lib/math/rempio2_y0 (mut f64) (f64.const 0))
 (global $~lib/math/rempio2_y1 (mut f64) (f64.const 0))
 (global $~lib/math/res128_hi (mut i64) (i64.const 0))
 (global $assembly/mat2/ReadonlyVec2 i32 (i32.const 8))
 (global $assembly/mat2/mat2 i32 (i32.const 4))
 (global $assembly/mat2/ReadonlyMat2 i32 (i32.const 6))
 (global $~lib/memory/__stack_pointer (mut i32) (i32.const 19812))
 (export "ReadonlyVec2" (global $assembly/mat2/ReadonlyVec2))
 (export "mat2" (global $assembly/mat2/mat2))
 (export "default" (global $assembly/mat2/mat2))
 (export "ReadonlyMat2" (global $assembly/mat2/ReadonlyMat2))
 (export "create" (func $assembly/mat2/create))
 (export "fromValues" (func $assembly/mat2/fromValues))
 (export "mul" (global $assembly/mat2/mul))
 (export "sub" (global $assembly/mat2/sub))
 (export "memory" (memory $0))
 (export "__setArgumentsLength" (func $~setArgumentsLength))
 (export "ReadonlyVec2#get:buffer" (func $export:~lib/arraybuffer/ArrayBufferView#get:buffer))
 (export "ReadonlyVec2#get:dataStart" (func $export:~lib/arraybuffer/ArrayBufferView#get:dataStart))
 (export "ReadonlyVec2#get:byteLength" (func $export:~lib/arraybuffer/ArrayBufferView#get:byteLength))
 (export "ReadonlyVec2#get:byteOffset" (func $export:~lib/arraybuffer/ArrayBufferView#get:byteOffset))
 (export "ReadonlyVec2#constructor" (func $export:assembly/mat2/ReadonlyVec2#constructor))
 (export "ReadonlyVec2#get:length" (func $export:~lib/typedarray/Float64Array#get:length))
 (export "ReadonlyVec2#at" (func $export:~lib/typedarray/Float64Array#at))
 (export "ReadonlyVec2#includes" (func $export:~lib/typedarray/Float64Array#includes@varargs))
 (export "ReadonlyVec2#indexOf" (func $export:~lib/typedarray/Float64Array#indexOf@varargs))
 (export "ReadonlyVec2#lastIndexOf" (func $export:~lib/typedarray/Float64Array#lastIndexOf@varargs))
 (export "ReadonlyVec2#fill" (func $export:~lib/typedarray/Float64Array#fill@varargs))
 (export "ReadonlyVec2#sort" (func $export:~lib/typedarray/Float64Array#sort@varargs))
 (export "ReadonlyVec2#slice" (func $export:~lib/typedarray/Float64Array#slice@varargs))
 (export "ReadonlyVec2#subarray" (func $export:~lib/typedarray/Float64Array#subarray@varargs))
 (export "ReadonlyVec2#copyWithin" (func $export:~lib/typedarray/Float64Array#copyWithin@varargs))
 (export "ReadonlyVec2#map" (func $export:~lib/typedarray/Float64Array#map))
 (export "ReadonlyVec2#filter" (func $export:~lib/typedarray/Float64Array#filter))
 (export "ReadonlyVec2#findIndex" (func $export:~lib/typedarray/Float64Array#findIndex))
 (export "ReadonlyVec2#some" (func $export:~lib/typedarray/Float64Array#some))
 (export "ReadonlyVec2#every" (func $export:~lib/typedarray/Float64Array#every))
 (export "ReadonlyVec2#forEach" (func $export:~lib/typedarray/Float64Array#forEach))
 (export "ReadonlyVec2#reverse" (func $export:~lib/typedarray/Float64Array#reverse))
 (export "ReadonlyVec2#join" (func $export:~lib/typedarray/Float64Array#join@varargs))
 (export "ReadonlyVec2#toString" (func $export:~lib/typedarray/Float64Array#toString))
 (export "mat2#get:buffer" (func $export:~lib/arraybuffer/ArrayBufferView#get:buffer))
 (export "mat2#get:dataStart" (func $export:~lib/arraybuffer/ArrayBufferView#get:dataStart))
 (export "mat2#get:byteLength" (func $export:~lib/arraybuffer/ArrayBufferView#get:byteLength))
 (export "mat2#get:byteOffset" (func $export:~lib/arraybuffer/ArrayBufferView#get:byteOffset))
 (export "mat2#constructor" (func $export:assembly/mat2/mat2#constructor))
 (export "mat2#get:length" (func $export:~lib/typedarray/Float64Array#get:length))
 (export "mat2#at" (func $export:~lib/typedarray/Float64Array#at))
 (export "mat2#includes" (func $export:~lib/typedarray/Float64Array#includes@varargs))
 (export "mat2#indexOf" (func $export:~lib/typedarray/Float64Array#indexOf@varargs))
 (export "mat2#lastIndexOf" (func $export:~lib/typedarray/Float64Array#lastIndexOf@varargs))
 (export "mat2#fill" (func $export:~lib/typedarray/Float64Array#fill@varargs))
 (export "mat2#sort" (func $export:~lib/typedarray/Float64Array#sort@varargs))
 (export "mat2#slice" (func $export:~lib/typedarray/Float64Array#slice@varargs))
 (export "mat2#subarray" (func $export:~lib/typedarray/Float64Array#subarray@varargs))
 (export "mat2#copyWithin" (func $export:~lib/typedarray/Float64Array#copyWithin@varargs))
 (export "mat2#map" (func $export:~lib/typedarray/Float64Array#map))
 (export "mat2#filter" (func $export:~lib/typedarray/Float64Array#filter))
 (export "mat2#findIndex" (func $export:~lib/typedarray/Float64Array#findIndex))
 (export "mat2#some" (func $export:~lib/typedarray/Float64Array#some))
 (export "mat2#every" (func $export:~lib/typedarray/Float64Array#every))
 (export "mat2#forEach" (func $export:~lib/typedarray/Float64Array#forEach))
 (export "mat2#reverse" (func $export:~lib/typedarray/Float64Array#reverse))
 (export "mat2#join" (func $export:~lib/typedarray/Float64Array#join@varargs))
 (export "mat2#toString" (func $export:~lib/typedarray/Float64Array#toString))
 (export "default#get:buffer" (func $export:~lib/arraybuffer/ArrayBufferView#get:buffer))
 (export "default#get:dataStart" (func $export:~lib/arraybuffer/ArrayBufferView#get:dataStart))
 (export "default#get:byteLength" (func $export:~lib/arraybuffer/ArrayBufferView#get:byteLength))
 (export "default#get:byteOffset" (func $export:~lib/arraybuffer/ArrayBufferView#get:byteOffset))
 (export "default#constructor" (func $export:assembly/mat2/mat2#constructor))
 (export "default#get:length" (func $export:~lib/typedarray/Float64Array#get:length))
 (export "default#at" (func $export:~lib/typedarray/Float64Array#at))
 (export "default#includes" (func $export:~lib/typedarray/Float64Array#includes@varargs))
 (export "default#indexOf" (func $export:~lib/typedarray/Float64Array#indexOf@varargs))
 (export "default#lastIndexOf" (func $export:~lib/typedarray/Float64Array#lastIndexOf@varargs))
 (export "default#fill" (func $export:~lib/typedarray/Float64Array#fill@varargs))
 (export "default#sort" (func $export:~lib/typedarray/Float64Array#sort@varargs))
 (export "default#slice" (func $export:~lib/typedarray/Float64Array#slice@varargs))
 (export "default#subarray" (func $export:~lib/typedarray/Float64Array#subarray@varargs))
 (export "default#copyWithin" (func $export:~lib/typedarray/Float64Array#copyWithin@varargs))
 (export "default#map" (func $export:~lib/typedarray/Float64Array#map))
 (export "default#filter" (func $export:~lib/typedarray/Float64Array#filter))
 (export "default#findIndex" (func $export:~lib/typedarray/Float64Array#findIndex))
 (export "default#some" (func $export:~lib/typedarray/Float64Array#some))
 (export "default#every" (func $export:~lib/typedarray/Float64Array#every))
 (export "default#forEach" (func $export:~lib/typedarray/Float64Array#forEach))
 (export "default#reverse" (func $export:~lib/typedarray/Float64Array#reverse))
 (export "default#join" (func $export:~lib/typedarray/Float64Array#join@varargs))
 (export "default#toString" (func $export:~lib/typedarray/Float64Array#toString))
 (export "ReadonlyMat2#get:buffer" (func $export:~lib/arraybuffer/ArrayBufferView#get:buffer))
 (export "ReadonlyMat2#get:dataStart" (func $export:~lib/arraybuffer/ArrayBufferView#get:dataStart))
 (export "ReadonlyMat2#get:byteLength" (func $export:~lib/arraybuffer/ArrayBufferView#get:byteLength))
 (export "ReadonlyMat2#get:byteOffset" (func $export:~lib/arraybuffer/ArrayBufferView#get:byteOffset))
 (export "ReadonlyMat2#constructor" (func $export:assembly/mat2/ReadonlyMat2#constructor))
 (export "ReadonlyMat2#get:length" (func $export:~lib/typedarray/Float64Array#get:length))
 (export "ReadonlyMat2#at" (func $export:~lib/typedarray/Float64Array#at))
 (export "ReadonlyMat2#includes" (func $export:~lib/typedarray/Float64Array#includes@varargs))
 (export "ReadonlyMat2#indexOf" (func $export:~lib/typedarray/Float64Array#indexOf@varargs))
 (export "ReadonlyMat2#lastIndexOf" (func $export:~lib/typedarray/Float64Array#lastIndexOf@varargs))
 (export "ReadonlyMat2#fill" (func $export:~lib/typedarray/Float64Array#fill@varargs))
 (export "ReadonlyMat2#sort" (func $export:~lib/typedarray/Float64Array#sort@varargs))
 (export "ReadonlyMat2#slice" (func $export:~lib/typedarray/Float64Array#slice@varargs))
 (export "ReadonlyMat2#subarray" (func $export:~lib/typedarray/Float64Array#subarray@varargs))
 (export "ReadonlyMat2#copyWithin" (func $export:~lib/typedarray/Float64Array#copyWithin@varargs))
 (export "ReadonlyMat2#map" (func $export:~lib/typedarray/Float64Array#map))
 (export "ReadonlyMat2#filter" (func $export:~lib/typedarray/Float64Array#filter))
 (export "ReadonlyMat2#findIndex" (func $export:~lib/typedarray/Float64Array#findIndex))
 (export "ReadonlyMat2#some" (func $export:~lib/typedarray/Float64Array#some))
 (export "ReadonlyMat2#every" (func $export:~lib/typedarray/Float64Array#every))
 (export "ReadonlyMat2#forEach" (func $export:~lib/typedarray/Float64Array#forEach))
 (export "ReadonlyMat2#reverse" (func $export:~lib/typedarray/Float64Array#reverse))
 (export "ReadonlyMat2#join" (func $export:~lib/typedarray/Float64Array#join@varargs))
 (export "ReadonlyMat2#toString" (func $export:~lib/typedarray/Float64Array#toString))
 (export "clone" (func $export:assembly/mat2/clone))
 (export "copy" (func $export:assembly/mat2/copy))
 (export "identity" (func $export:assembly/mat2/identity))
 (export "set" (func $export:assembly/mat2/set))
 (export "transpose" (func $export:assembly/mat2/transpose))
 (export "invert" (func $export:assembly/mat2/invert))
 (export "adjoint" (func $export:assembly/mat2/adjoint))
 (export "determinant" (func $export:assembly/mat2/determinant))
 (export "multiply" (func $export:assembly/mat2/multiply))
 (export "rotate" (func $export:assembly/mat2/rotate))
 (export "scale" (func $export:assembly/mat2/scale))
 (export "fromRotation" (func $export:assembly/mat2/fromRotation))
 (export "fromScaling" (func $export:assembly/mat2/fromScaling))
 (export "str" (func $export:assembly/mat2/str))
 (export "frob" (func $export:assembly/mat2/frob))
 (export "LDU" (func $export:assembly/mat2/LDU))
 (export "add" (func $export:assembly/mat2/add))
 (export "subtract" (func $export:assembly/mat2/subtract))
 (export "exactEquals" (func $export:assembly/mat2/exactEquals))
 (export "equals" (func $export:assembly/mat2/equals))
 (export "multiplyScalar" (func $export:assembly/mat2/multiplyScalar))
 (export "multiplyScalarAndAdd" (func $export:assembly/mat2/multiplyScalarAndAdd))
 (start $~start)
 (func $~lib/math/murmurHash3 (param $0 i64) (result i64)
  local.get $0
  local.get $0
  i64.const 33
  i64.shr_u
  i64.xor
  i64.const -49064778989728563
  i64.mul
  local.tee $0
  local.get $0
  i64.const 33
  i64.shr_u
  i64.xor
  i64.const -4265267296055464877
  i64.mul
  local.tee $0
  local.get $0
  i64.const 33
  i64.shr_u
  i64.xor
 )
 (func $~lib/math/splitMix32 (param $0 i32) (result i32)
  local.get $0
  i32.const 1831565813
  i32.add
  local.tee $0
  local.get $0
  i32.const 15
  i32.shr_u
  i32.xor
  local.get $0
  i32.const 1
  i32.or
  i32.mul
  local.tee $0
  local.get $0
  local.get $0
  i32.const 61
  i32.or
  local.get $0
  local.get $0
  i32.const 7
  i32.shr_u
  i32.xor
  i32.mul
  i32.add
  i32.xor
  local.tee $0
  local.get $0
  i32.const 14
  i32.shr_u
  i32.xor
 )
 (func $~lib/math/NativeMath.random (result f64)
  (local $0 i64)
  (local $1 i64)
  global.get $~lib/math/random_seeded
  i32.eqz
  if
   call $~lib/builtins/seed
   i64.reinterpret_f64
   local.set $0
   i32.const 1
   global.set $~lib/math/random_seeded
   local.get $0
   call $~lib/math/murmurHash3
   global.set $~lib/math/random_state0_64
   global.get $~lib/math/random_state0_64
   i64.const -1
   i64.xor
   call $~lib/math/murmurHash3
   global.set $~lib/math/random_state1_64
   local.get $0
   i32.wrap_i64
   call $~lib/math/splitMix32
   global.set $~lib/math/random_state0_32
   global.get $~lib/math/random_state0_32
   call $~lib/math/splitMix32
   global.set $~lib/math/random_state1_32
   global.get $~lib/math/random_state1_32
   i32.const 0
   i32.ne
   i32.const 0
   global.get $~lib/math/random_state0_32
   i32.const 0
   global.get $~lib/math/random_state1_64
   i64.const 0
   i64.ne
   i32.const 0
   global.get $~lib/math/random_state0_64
   i64.const 0
   i64.ne
   select
   select
   select
   i32.eqz
   if
    i32.const 0
    i32.const 1056
    i32.const 1399
    i32.const 5
    call $~lib/builtins/abort
    unreachable
   end
  end
  global.get $~lib/math/random_state0_64
  local.set $1
  global.get $~lib/math/random_state1_64
  local.tee $0
  global.set $~lib/math/random_state0_64
  local.get $0
  local.get $1
  local.get $1
  i64.const 23
  i64.shl
  i64.xor
  local.tee $1
  local.get $1
  i64.const 17
  i64.shr_u
  i64.xor
  i64.xor
  local.get $0
  i64.const 26
  i64.shr_u
  i64.xor
  global.set $~lib/math/random_state1_64
  local.get $0
  i64.const 12
  i64.shr_u
  i64.const 4607182418800017408
  i64.or
  f64.reinterpret_i64
  f64.const 1
  f64.sub
 )
 (func $~lib/typedarray/Float64Array#__get (param $0 i32) (param $1 i32) (result f64)
  local.get $1
  local.get $0
  i32.load offset=8
  i32.const 3
  i32.shr_u
  i32.ge_u
  if
   i32.const 1168
   i32.const 1232
   i32.const 1374
   i32.const 64
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 3
  i32.shl
  i32.add
  f64.load
 )
 (func $~lib/typedarray/Float64Array#__set (param $0 i32) (param $1 i32) (param $2 f64)
  local.get $1
  local.get $0
  i32.load offset=8
  i32.const 3
  i32.shr_u
  i32.ge_u
  if
   i32.const 1168
   i32.const 1232
   i32.const 1385
   i32.const 64
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 3
  i32.shl
  i32.add
  local.get $2
  f64.store
 )
 (func $assembly/mat2/multiply (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 f64)
  (local $4 f64)
  (local $5 f64)
  (local $6 f64)
  (local $7 f64)
  (local $8 f64)
  (local $9 f64)
  (local $10 f64)
  local.get $1
  i32.const 0
  call $~lib/typedarray/Float64Array#__get
  local.set $3
  local.get $1
  i32.const 1
  call $~lib/typedarray/Float64Array#__get
  local.set $4
  local.get $1
  i32.const 2
  call $~lib/typedarray/Float64Array#__get
  local.set $5
  local.get $1
  i32.const 3
  call $~lib/typedarray/Float64Array#__get
  local.set $6
  local.get $2
  i32.const 0
  call $~lib/typedarray/Float64Array#__get
  local.set $7
  local.get $2
  i32.const 1
  call $~lib/typedarray/Float64Array#__get
  local.set $8
  local.get $2
  i32.const 2
  call $~lib/typedarray/Float64Array#__get
  local.set $9
  local.get $2
  i32.const 3
  call $~lib/typedarray/Float64Array#__get
  local.set $10
  local.get $0
  i32.const 0
  local.get $3
  local.get $7
  f64.mul
  local.get $5
  local.get $8
  f64.mul
  f64.add
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 1
  local.get $4
  local.get $7
  f64.mul
  local.get $6
  local.get $8
  f64.mul
  f64.add
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 2
  local.get $3
  local.get $9
  f64.mul
  local.get $5
  local.get $10
  f64.mul
  f64.add
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 3
  local.get $4
  local.get $9
  f64.mul
  local.get $6
  local.get $10
  f64.mul
  f64.add
  call $~lib/typedarray/Float64Array#__set
  local.get $0
 )
 (func $assembly/mat2/subtract (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  local.get $0
  i32.const 0
  local.get $1
  i32.const 0
  call $~lib/typedarray/Float64Array#__get
  local.get $2
  i32.const 0
  call $~lib/typedarray/Float64Array#__get
  f64.sub
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 1
  local.get $1
  i32.const 1
  call $~lib/typedarray/Float64Array#__get
  local.get $2
  i32.const 1
  call $~lib/typedarray/Float64Array#__get
  f64.sub
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 2
  local.get $1
  i32.const 2
  call $~lib/typedarray/Float64Array#__get
  local.get $2
  i32.const 2
  call $~lib/typedarray/Float64Array#__get
  f64.sub
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 3
  local.get $1
  i32.const 3
  call $~lib/typedarray/Float64Array#__get
  local.get $2
  i32.const 3
  call $~lib/typedarray/Float64Array#__get
  f64.sub
  call $~lib/typedarray/Float64Array#__set
  local.get $0
 )
 (func $~lib/rt/itcms/initLazy (param $0 i32) (result i32)
  local.get $0
  local.get $0
  i32.store offset=4
  local.get $0
  local.get $0
  i32.store offset=8
  local.get $0
 )
 (func $~lib/rt/itcms/visitRoots
  (local $0 i32)
  (local $1 i32)
  i32.const 1168
  call $~lib/rt/itcms/__visit
  i32.const 1360
  call $~lib/rt/itcms/__visit
  i32.const 1472
  call $~lib/rt/itcms/__visit
  i32.const 1136
  call $~lib/rt/itcms/__visit
  global.get $~lib/rt/itcms/pinSpace
  local.tee $1
  i32.load offset=4
  i32.const -4
  i32.and
  local.set $0
  loop $while-continue|0
   local.get $0
   local.get $1
   i32.ne
   if
    local.get $0
    i32.load offset=4
    i32.const 3
    i32.and
    i32.const 3
    i32.ne
    if
     i32.const 0
     i32.const 1536
     i32.const 159
     i32.const 16
     call $~lib/builtins/abort
     unreachable
    end
    local.get $0
    i32.const 20
    i32.add
    call $~lib/rt/__visit_members
    local.get $0
    i32.load offset=4
    i32.const -4
    i32.and
    local.set $0
    br $while-continue|0
   end
  end
 )
 (func $~lib/rt/itcms/Object#set:color (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  local.get $0
  i32.load offset=4
  i32.const -4
  i32.and
  i32.or
  i32.store offset=4
 )
 (func $~lib/rt/itcms/Object#set:next (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  local.get $0
  i32.load offset=4
  i32.const 3
  i32.and
  i32.or
  i32.store offset=4
 )
 (func $~lib/rt/itcms/Object#linkTo (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  local.get $1
  i32.load offset=8
  local.set $3
  local.get $0
  local.get $1
  local.get $2
  i32.or
  i32.store offset=4
  local.get $0
  local.get $3
  i32.store offset=8
  local.get $3
  local.get $0
  call $~lib/rt/itcms/Object#set:next
  local.get $1
  local.get $0
  i32.store offset=8
 )
 (func $~lib/rt/itcms/Object#makeGray (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  global.get $~lib/rt/itcms/iter
  i32.eq
  if
   local.get $0
   i32.load offset=8
   local.tee $1
   i32.eqz
   if
    i32.const 0
    i32.const 1536
    i32.const 147
    i32.const 30
    call $~lib/builtins/abort
    unreachable
   end
   local.get $1
   global.set $~lib/rt/itcms/iter
  end
  block $__inlined_func$~lib/rt/itcms/Object#unlink
   local.get $0
   i32.load offset=4
   i32.const -4
   i32.and
   local.tee $1
   i32.eqz
   if
    i32.const 0
    local.get $0
    i32.const 19812
    i32.lt_u
    local.get $0
    i32.load offset=8
    select
    i32.eqz
    if
     i32.const 0
     i32.const 1536
     i32.const 127
     i32.const 18
     call $~lib/builtins/abort
     unreachable
    end
    br $__inlined_func$~lib/rt/itcms/Object#unlink
   end
   local.get $0
   i32.load offset=8
   local.tee $2
   i32.eqz
   if
    i32.const 0
    i32.const 1536
    i32.const 131
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
   local.get $1
   local.get $2
   i32.store offset=8
   local.get $2
   local.get $1
   call $~lib/rt/itcms/Object#set:next
  end
  local.get $0
  global.get $~lib/rt/itcms/toSpace
  local.get $0
  i32.load offset=12
  local.tee $1
  i32.const 1
  i32.le_u
  if (result i32)
   i32.const 1
  else
   local.get $1
   i32.const 3328
   i32.load
   i32.gt_u
   if
    i32.const 1168
    i32.const 1664
    i32.const 22
    i32.const 28
    call $~lib/builtins/abort
    unreachable
   end
   local.get $1
   i32.const 3
   i32.shl
   i32.const 3332
   i32.add
   i32.load
   i32.const 32
   i32.and
  end
  if (result i32)
   global.get $~lib/rt/itcms/white
   i32.eqz
  else
   i32.const 2
  end
  call $~lib/rt/itcms/Object#linkTo
 )
 (func $~lib/rt/itcms/__visit (param $0 i32)
  local.get $0
  i32.eqz
  if
   return
  end
  global.get $~lib/rt/itcms/white
  local.get $0
  i32.const 20
  i32.sub
  local.tee $0
  i32.load offset=4
  i32.const 3
  i32.and
  i32.eq
  if
   local.get $0
   call $~lib/rt/itcms/Object#makeGray
   global.get $~lib/rt/itcms/visitCount
   i32.const 1
   i32.add
   global.set $~lib/rt/itcms/visitCount
  end
 )
 (func $~lib/rt/tlsf/removeBlock (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $1
  i32.load
  local.tee $2
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 1744
   i32.const 273
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  i32.const -4
  i32.and
  local.tee $2
  i32.const 1073741820
  i32.lt_u
  i32.const 0
  local.get $2
  i32.const 12
  i32.ge_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1744
   i32.const 275
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  i32.const 256
  i32.lt_u
  if
   local.get $2
   i32.const 4
   i32.shr_u
   local.set $2
  else
   local.get $2
   i32.const 31
   local.get $2
   i32.clz
   i32.sub
   local.tee $3
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
   local.set $2
   local.get $3
   i32.const 7
   i32.sub
   local.set $3
  end
  local.get $2
  i32.const 16
  i32.lt_u
  i32.const 0
  local.get $3
  i32.const 23
  i32.lt_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1744
   i32.const 288
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.load offset=8
  local.set $4
  local.get $1
  i32.load offset=4
  local.tee $5
  if
   local.get $5
   local.get $4
   i32.store offset=8
  end
  local.get $4
  if
   local.get $4
   local.get $5
   i32.store offset=4
  end
  local.get $1
  local.get $0
  local.get $2
  local.get $3
  i32.const 4
  i32.shl
  i32.add
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=96
  i32.eq
  if
   local.get $0
   local.get $2
   local.get $3
   i32.const 4
   i32.shl
   i32.add
   i32.const 2
   i32.shl
   i32.add
   local.get $4
   i32.store offset=96
   local.get $4
   i32.eqz
   if
    local.get $0
    local.get $3
    i32.const 2
    i32.shl
    i32.add
    local.tee $4
    i32.load offset=4
    i32.const -2
    local.get $2
    i32.rotl
    i32.and
    local.set $1
    local.get $4
    local.get $1
    i32.store offset=4
    local.get $1
    i32.eqz
    if
     local.get $0
     local.get $0
     i32.load
     i32.const -2
     local.get $3
     i32.rotl
     i32.and
     i32.store
    end
   end
  end
 )
 (func $~lib/rt/tlsf/insertBlock (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  local.get $1
  i32.eqz
  if
   i32.const 0
   i32.const 1744
   i32.const 201
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.load
  local.tee $4
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 1744
   i32.const 203
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.const 4
  i32.add
  local.get $1
  i32.load
  i32.const -4
  i32.and
  i32.add
  local.tee $5
  i32.load
  local.tee $2
  i32.const 1
  i32.and
  if
   local.get $4
   i32.const -4
   i32.and
   i32.const 4
   i32.add
   local.get $2
   i32.const -4
   i32.and
   i32.add
   local.tee $3
   i32.const 1073741820
   i32.lt_u
   if
    local.get $0
    local.get $5
    call $~lib/rt/tlsf/removeBlock
    local.get $1
    local.get $3
    local.get $4
    i32.const 3
    i32.and
    i32.or
    local.tee $4
    i32.store
    local.get $1
    i32.const 4
    i32.add
    local.get $1
    i32.load
    i32.const -4
    i32.and
    i32.add
    local.tee $5
    i32.load
    local.set $2
   end
  end
  local.get $4
  i32.const 2
  i32.and
  if
   local.get $1
   i32.const 4
   i32.sub
   i32.load
   local.tee $3
   i32.load
   local.tee $7
   i32.const 1
   i32.and
   i32.eqz
   if
    i32.const 0
    i32.const 1744
    i32.const 224
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
   local.get $7
   i32.const -4
   i32.and
   i32.const 4
   i32.add
   local.get $4
   i32.const -4
   i32.and
   i32.add
   local.tee $8
   i32.const 1073741820
   i32.lt_u
   if (result i32)
    local.get $0
    local.get $3
    call $~lib/rt/tlsf/removeBlock
    local.get $3
    local.get $8
    local.get $7
    i32.const 3
    i32.and
    i32.or
    local.tee $4
    i32.store
    local.get $3
   else
    local.get $1
   end
   local.set $1
  end
  local.get $5
  local.get $2
  i32.const 2
  i32.or
  i32.store
  local.get $4
  i32.const -4
  i32.and
  local.tee $3
  i32.const 1073741820
  i32.lt_u
  i32.const 0
  local.get $3
  i32.const 12
  i32.ge_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1744
   i32.const 239
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $5
  local.get $3
  local.get $1
  i32.const 4
  i32.add
  i32.add
  i32.ne
  if
   i32.const 0
   i32.const 1744
   i32.const 240
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $5
  i32.const 4
  i32.sub
  local.get $1
  i32.store
  local.get $3
  i32.const 256
  i32.lt_u
  if
   local.get $3
   i32.const 4
   i32.shr_u
   local.set $3
  else
   local.get $3
   i32.const 31
   local.get $3
   i32.clz
   i32.sub
   local.tee $4
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
   local.set $3
   local.get $4
   i32.const 7
   i32.sub
   local.set $6
  end
  local.get $3
  i32.const 16
  i32.lt_u
  i32.const 0
  local.get $6
  i32.const 23
  i32.lt_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1744
   i32.const 256
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $3
  local.get $6
  i32.const 4
  i32.shl
  i32.add
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=96
  local.set $4
  local.get $1
  i32.const 0
  i32.store offset=4
  local.get $1
  local.get $4
  i32.store offset=8
  local.get $4
  if
   local.get $4
   local.get $1
   i32.store offset=4
  end
  local.get $0
  local.get $3
  local.get $6
  i32.const 4
  i32.shl
  i32.add
  i32.const 2
  i32.shl
  i32.add
  local.get $1
  i32.store offset=96
  local.get $0
  local.get $0
  i32.load
  i32.const 1
  local.get $6
  i32.shl
  i32.or
  i32.store
  local.get $0
  local.get $6
  i32.const 2
  i32.shl
  i32.add
  local.tee $0
  local.get $0
  i32.load offset=4
  i32.const 1
  local.get $3
  i32.shl
  i32.or
  i32.store offset=4
 )
 (func $~lib/rt/tlsf/addMemory (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  local.get $2
  i32.gt_u
  if
   i32.const 0
   i32.const 1744
   i32.const 381
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.const 19
  i32.add
  i32.const -16
  i32.and
  i32.const 4
  i32.sub
  local.set $1
  local.get $2
  i32.const -16
  i32.and
  local.get $0
  i32.load offset=1568
  local.tee $2
  if
   local.get $1
   local.get $2
   i32.const 4
   i32.add
   i32.lt_u
   if
    i32.const 0
    i32.const 1744
    i32.const 388
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
   local.get $2
   local.get $1
   i32.const 16
   i32.sub
   i32.eq
   if
    local.get $2
    i32.load
    local.set $4
    local.get $1
    i32.const 16
    i32.sub
    local.set $1
   end
  else
   local.get $1
   local.get $0
   i32.const 1572
   i32.add
   i32.lt_u
   if
    i32.const 0
    i32.const 1744
    i32.const 401
    i32.const 5
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $1
  i32.sub
  local.tee $2
  i32.const 20
  i32.lt_u
  if
   return
  end
  local.get $1
  local.get $4
  i32.const 2
  i32.and
  local.get $2
  i32.const 8
  i32.sub
  local.tee $2
  i32.const 1
  i32.or
  i32.or
  i32.store
  local.get $1
  i32.const 0
  i32.store offset=4
  local.get $1
  i32.const 0
  i32.store offset=8
  local.get $2
  local.get $1
  i32.const 4
  i32.add
  i32.add
  local.tee $2
  i32.const 2
  i32.store
  local.get $0
  local.get $2
  i32.store offset=1568
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/insertBlock
 )
 (func $~lib/rt/tlsf/initialize
  (local $0 i32)
  (local $1 i32)
  memory.size
  local.tee $0
  i32.const 1
  i32.lt_s
  if (result i32)
   i32.const 1
   local.get $0
   i32.sub
   memory.grow
   i32.const 0
   i32.lt_s
  else
   i32.const 0
  end
  if
   unreachable
  end
  i32.const 19824
  i32.const 0
  i32.store
  i32.const 21392
  i32.const 0
  i32.store
  loop $for-loop|0
   local.get $1
   i32.const 23
   i32.lt_u
   if
    local.get $1
    i32.const 2
    i32.shl
    i32.const 19824
    i32.add
    i32.const 0
    i32.store offset=4
    i32.const 0
    local.set $0
    loop $for-loop|1
     local.get $0
     i32.const 16
     i32.lt_u
     if
      local.get $0
      local.get $1
      i32.const 4
      i32.shl
      i32.add
      i32.const 2
      i32.shl
      i32.const 19824
      i32.add
      i32.const 0
      i32.store offset=96
      local.get $0
      i32.const 1
      i32.add
      local.set $0
      br $for-loop|1
     end
    end
    local.get $1
    i32.const 1
    i32.add
    local.set $1
    br $for-loop|0
   end
  end
  i32.const 19824
  i32.const 21396
  memory.size
  i32.const 16
  i32.shl
  call $~lib/rt/tlsf/addMemory
  i32.const 19824
  global.set $~lib/rt/tlsf/ROOT
 )
 (func $~lib/rt/tlsf/__free (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  i32.const 19812
  i32.lt_u
  if
   return
  end
  global.get $~lib/rt/tlsf/ROOT
  i32.eqz
  if
   call $~lib/rt/tlsf/initialize
  end
  global.get $~lib/rt/tlsf/ROOT
  local.get $0
  i32.const 4
  i32.sub
  local.set $1
  local.get $0
  i32.const 15
  i32.and
  i32.eqz
  i32.const 0
  local.get $0
  select
  if (result i32)
   local.get $1
   i32.load
   i32.const 1
   i32.and
   i32.eqz
  else
   i32.const 0
  end
  i32.eqz
  if
   i32.const 0
   i32.const 1744
   i32.const 565
   i32.const 3
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  local.get $1
  i32.load
  i32.const 1
  i32.or
  i32.store
  local.get $1
  call $~lib/rt/tlsf/insertBlock
 )
 (func $~lib/rt/itcms/step (result i32)
  (local $0 i32)
  (local $1 i32)
  block $folding-inner0
   block $break|0
    block $case2|0
     block $case1|0
      block $case0|0
       global.get $~lib/rt/itcms/state
       br_table $case0|0 $case1|0 $case2|0 $break|0
      end
      i32.const 1
      global.set $~lib/rt/itcms/state
      i32.const 0
      global.set $~lib/rt/itcms/visitCount
      call $~lib/rt/itcms/visitRoots
      global.get $~lib/rt/itcms/toSpace
      global.set $~lib/rt/itcms/iter
      br $folding-inner0
     end
     global.get $~lib/rt/itcms/white
     i32.eqz
     local.set $1
     global.get $~lib/rt/itcms/iter
     i32.load offset=4
     i32.const -4
     i32.and
     local.set $0
     loop $while-continue|1
      local.get $0
      global.get $~lib/rt/itcms/toSpace
      i32.ne
      if
       local.get $0
       global.set $~lib/rt/itcms/iter
       local.get $1
       local.get $0
       i32.load offset=4
       i32.const 3
       i32.and
       i32.ne
       if
        local.get $0
        local.get $1
        call $~lib/rt/itcms/Object#set:color
        i32.const 0
        global.set $~lib/rt/itcms/visitCount
        local.get $0
        i32.const 20
        i32.add
        call $~lib/rt/__visit_members
        br $folding-inner0
       end
       local.get $0
       i32.load offset=4
       i32.const -4
       i32.and
       local.set $0
       br $while-continue|1
      end
     end
     i32.const 0
     global.set $~lib/rt/itcms/visitCount
     call $~lib/rt/itcms/visitRoots
     global.get $~lib/rt/itcms/toSpace
     global.get $~lib/rt/itcms/iter
     i32.load offset=4
     i32.const -4
     i32.and
     i32.eq
     if
      global.get $~lib/memory/__stack_pointer
      local.set $0
      loop $while-continue|0
       local.get $0
       i32.const 19812
       i32.lt_u
       if
        local.get $0
        i32.load
        call $~lib/rt/itcms/__visit
        local.get $0
        i32.const 4
        i32.add
        local.set $0
        br $while-continue|0
       end
      end
      global.get $~lib/rt/itcms/iter
      i32.load offset=4
      i32.const -4
      i32.and
      local.set $0
      loop $while-continue|2
       local.get $0
       global.get $~lib/rt/itcms/toSpace
       i32.ne
       if
        local.get $1
        local.get $0
        i32.load offset=4
        i32.const 3
        i32.and
        i32.ne
        if
         local.get $0
         local.get $1
         call $~lib/rt/itcms/Object#set:color
         local.get $0
         i32.const 20
         i32.add
         call $~lib/rt/__visit_members
        end
        local.get $0
        i32.load offset=4
        i32.const -4
        i32.and
        local.set $0
        br $while-continue|2
       end
      end
      global.get $~lib/rt/itcms/fromSpace
      local.set $0
      global.get $~lib/rt/itcms/toSpace
      global.set $~lib/rt/itcms/fromSpace
      local.get $0
      global.set $~lib/rt/itcms/toSpace
      local.get $1
      global.set $~lib/rt/itcms/white
      local.get $0
      i32.load offset=4
      i32.const -4
      i32.and
      global.set $~lib/rt/itcms/iter
      i32.const 2
      global.set $~lib/rt/itcms/state
     end
     br $folding-inner0
    end
    global.get $~lib/rt/itcms/iter
    local.tee $0
    global.get $~lib/rt/itcms/toSpace
    i32.ne
    if
     local.get $0
     i32.load offset=4
     i32.const -4
     i32.and
     global.set $~lib/rt/itcms/iter
     global.get $~lib/rt/itcms/white
     i32.eqz
     local.get $0
     i32.load offset=4
     i32.const 3
     i32.and
     i32.ne
     if
      i32.const 0
      i32.const 1536
      i32.const 228
      i32.const 20
      call $~lib/builtins/abort
      unreachable
     end
     local.get $0
     i32.const 19812
     i32.lt_u
     if
      local.get $0
      i32.const 0
      i32.store offset=4
      local.get $0
      i32.const 0
      i32.store offset=8
     else
      global.get $~lib/rt/itcms/total
      local.get $0
      i32.load
      i32.const -4
      i32.and
      i32.const 4
      i32.add
      i32.sub
      global.set $~lib/rt/itcms/total
      local.get $0
      i32.const 4
      i32.add
      call $~lib/rt/tlsf/__free
     end
     i32.const 10
     return
    end
    global.get $~lib/rt/itcms/toSpace
    global.get $~lib/rt/itcms/toSpace
    i32.store offset=4
    global.get $~lib/rt/itcms/toSpace
    global.get $~lib/rt/itcms/toSpace
    i32.store offset=8
    i32.const 0
    global.set $~lib/rt/itcms/state
   end
   i32.const 0
   return
  end
  global.get $~lib/rt/itcms/visitCount
 )
 (func $~lib/rt/tlsf/searchBlock (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  i32.const 256
  i32.lt_u
  if
   local.get $1
   i32.const 4
   i32.shr_u
   local.set $1
  else
   i32.const 31
   local.get $1
   i32.const 1
   i32.const 27
   local.get $1
   i32.clz
   i32.sub
   i32.shl
   i32.add
   i32.const 1
   i32.sub
   local.get $1
   local.get $1
   i32.const 536870910
   i32.lt_u
   select
   local.tee $1
   i32.clz
   i32.sub
   local.set $2
   local.get $1
   local.get $2
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
   local.set $1
   local.get $2
   i32.const 7
   i32.sub
   local.set $2
  end
  local.get $1
  i32.const 16
  i32.lt_u
  i32.const 0
  local.get $2
  i32.const 23
  i32.lt_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1744
   i32.const 334
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $2
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=4
  i32.const -1
  local.get $1
  i32.shl
  i32.and
  local.tee $1
  if (result i32)
   local.get $0
   local.get $1
   i32.ctz
   local.get $2
   i32.const 4
   i32.shl
   i32.add
   i32.const 2
   i32.shl
   i32.add
   i32.load offset=96
  else
   local.get $0
   i32.load
   i32.const -1
   local.get $2
   i32.const 1
   i32.add
   i32.shl
   i32.and
   local.tee $1
   if (result i32)
    local.get $0
    local.get $1
    i32.ctz
    local.tee $1
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=4
    local.tee $2
    i32.eqz
    if
     i32.const 0
     i32.const 1744
     i32.const 347
     i32.const 18
     call $~lib/builtins/abort
     unreachable
    end
    local.get $0
    local.get $2
    i32.ctz
    local.get $1
    i32.const 4
    i32.shl
    i32.add
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=96
   else
    i32.const 0
   end
  end
 )
 (func $~lib/rt/tlsf/allocateBlock (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  i32.const 1073741820
  i32.ge_u
  if
   i32.const 1472
   i32.const 1744
   i32.const 462
   i32.const 30
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.const 12
  local.get $1
  i32.const 19
  i32.add
  i32.const -16
  i32.and
  i32.const 4
  i32.sub
  local.get $1
  i32.const 12
  i32.le_u
  select
  local.tee $2
  call $~lib/rt/tlsf/searchBlock
  local.tee $1
  i32.eqz
  if
   i32.const 4
   memory.size
   local.tee $1
   i32.const 16
   i32.shl
   i32.const 4
   i32.sub
   local.get $0
   i32.load offset=1568
   i32.ne
   i32.shl
   local.get $2
   i32.const 1
   i32.const 27
   local.get $2
   i32.clz
   i32.sub
   i32.shl
   i32.const 1
   i32.sub
   i32.add
   local.get $2
   local.get $2
   i32.const 536870910
   i32.lt_u
   select
   i32.add
   i32.const 65535
   i32.add
   i32.const -65536
   i32.and
   i32.const 16
   i32.shr_u
   local.set $3
   local.get $1
   local.get $3
   local.get $1
   local.get $3
   i32.gt_s
   select
   memory.grow
   i32.const 0
   i32.lt_s
   if
    local.get $3
    memory.grow
    i32.const 0
    i32.lt_s
    if
     unreachable
    end
   end
   local.get $0
   local.get $1
   i32.const 16
   i32.shl
   memory.size
   i32.const 16
   i32.shl
   call $~lib/rt/tlsf/addMemory
   local.get $0
   local.get $2
   call $~lib/rt/tlsf/searchBlock
   local.tee $1
   i32.eqz
   if
    i32.const 0
    i32.const 1744
    i32.const 500
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $2
  local.get $1
  i32.load
  i32.const -4
  i32.and
  i32.gt_u
  if
   i32.const 0
   i32.const 1744
   i32.const 502
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/removeBlock
  local.get $1
  i32.load
  local.set $3
  local.get $2
  i32.const 4
  i32.add
  i32.const 15
  i32.and
  if
   i32.const 0
   i32.const 1744
   i32.const 361
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $3
  i32.const -4
  i32.and
  local.get $2
  i32.sub
  local.tee $4
  i32.const 16
  i32.ge_u
  if
   local.get $1
   local.get $2
   local.get $3
   i32.const 2
   i32.and
   i32.or
   i32.store
   local.get $2
   local.get $1
   i32.const 4
   i32.add
   i32.add
   local.tee $2
   local.get $4
   i32.const 4
   i32.sub
   i32.const 1
   i32.or
   i32.store
   local.get $0
   local.get $2
   call $~lib/rt/tlsf/insertBlock
  else
   local.get $1
   local.get $3
   i32.const -2
   i32.and
   i32.store
   local.get $1
   i32.const 4
   i32.add
   local.tee $0
   local.get $1
   i32.load
   i32.const -4
   i32.and
   i32.add
   local.get $0
   local.get $1
   i32.load
   i32.const -4
   i32.and
   i32.add
   i32.load
   i32.const -3
   i32.and
   i32.store
  end
  local.get $1
 )
 (func $~lib/rt/tlsf/__alloc (param $0 i32) (result i32)
  global.get $~lib/rt/tlsf/ROOT
  i32.eqz
  if
   call $~lib/rt/tlsf/initialize
  end
  global.get $~lib/rt/tlsf/ROOT
  local.get $0
  call $~lib/rt/tlsf/allocateBlock
  i32.const 4
  i32.add
 )
 (func $~lib/memory/memory.fill (param $0 i32) (param $1 i32)
  (local $2 i32)
  block $~lib/util/memory/memset|inlined.0
   local.get $1
   i32.eqz
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store8
   local.get $0
   local.get $1
   i32.add
   i32.const 4
   i32.sub
   local.tee $2
   i32.const 0
   i32.store8 offset=3
   local.get $1
   i32.const 2
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store8 offset=1
   local.get $0
   i32.const 0
   i32.store8 offset=2
   local.get $2
   i32.const 0
   i32.store8 offset=2
   local.get $2
   i32.const 0
   i32.store8 offset=1
   local.get $1
   i32.const 6
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store8 offset=3
   local.get $2
   i32.const 0
   i32.store8
   local.get $1
   i32.const 8
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   local.get $0
   i32.sub
   i32.const 3
   i32.and
   local.tee $2
   i32.add
   local.tee $0
   i32.const 0
   i32.store
   local.get $0
   local.get $1
   local.get $2
   i32.sub
   i32.const -4
   i32.and
   local.tee $2
   i32.add
   i32.const 28
   i32.sub
   local.tee $1
   i32.const 0
   i32.store offset=24
   local.get $2
   i32.const 8
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store offset=4
   local.get $0
   i32.const 0
   i32.store offset=8
   local.get $1
   i32.const 0
   i32.store offset=16
   local.get $1
   i32.const 0
   i32.store offset=20
   local.get $2
   i32.const 24
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store offset=12
   local.get $0
   i32.const 0
   i32.store offset=16
   local.get $0
   i32.const 0
   i32.store offset=20
   local.get $0
   i32.const 0
   i32.store offset=24
   local.get $1
   i32.const 0
   i32.store
   local.get $1
   i32.const 0
   i32.store offset=4
   local.get $1
   i32.const 0
   i32.store offset=8
   local.get $1
   i32.const 0
   i32.store offset=12
   local.get $0
   local.get $0
   i32.const 4
   i32.and
   i32.const 24
   i32.add
   local.tee $1
   i32.add
   local.set $0
   local.get $2
   local.get $1
   i32.sub
   local.set $1
   loop $while-continue|0
    local.get $1
    i32.const 32
    i32.ge_u
    if
     local.get $0
     i64.const 0
     i64.store
     local.get $0
     i64.const 0
     i64.store offset=8
     local.get $0
     i64.const 0
     i64.store offset=16
     local.get $0
     i64.const 0
     i64.store offset=24
     local.get $1
     i32.const 32
     i32.sub
     local.set $1
     local.get $0
     i32.const 32
     i32.add
     local.set $0
     br $while-continue|0
    end
   end
  end
 )
 (func $~lib/rt/itcms/__new (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $0
  i32.const 1073741804
  i32.ge_u
  if
   i32.const 1472
   i32.const 1536
   i32.const 260
   i32.const 31
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/rt/itcms/total
  global.get $~lib/rt/itcms/threshold
  i32.ge_u
  if
   block $__inlined_func$~lib/rt/itcms/interrupt
    i32.const 2048
    local.set $2
    loop $do-continue|0
     local.get $2
     call $~lib/rt/itcms/step
     i32.sub
     local.set $2
     global.get $~lib/rt/itcms/state
     i32.eqz
     if
      global.get $~lib/rt/itcms/total
      i64.extend_i32_u
      i64.const 200
      i64.mul
      i64.const 100
      i64.div_u
      i32.wrap_i64
      i32.const 1024
      i32.add
      global.set $~lib/rt/itcms/threshold
      br $__inlined_func$~lib/rt/itcms/interrupt
     end
     local.get $2
     i32.const 0
     i32.gt_s
     br_if $do-continue|0
    end
    global.get $~lib/rt/itcms/total
    global.get $~lib/rt/itcms/total
    global.get $~lib/rt/itcms/threshold
    i32.sub
    i32.const 1024
    i32.lt_u
    i32.const 10
    i32.shl
    i32.add
    global.set $~lib/rt/itcms/threshold
   end
  end
  local.get $0
  i32.const 16
  i32.add
  call $~lib/rt/tlsf/__alloc
  i32.const 4
  i32.sub
  local.tee $2
  local.get $1
  i32.store offset=12
  local.get $2
  local.get $0
  i32.store offset=16
  local.get $2
  global.get $~lib/rt/itcms/fromSpace
  global.get $~lib/rt/itcms/white
  call $~lib/rt/itcms/Object#linkTo
  global.get $~lib/rt/itcms/total
  local.get $2
  i32.load
  i32.const -4
  i32.and
  i32.const 4
  i32.add
  i32.add
  global.set $~lib/rt/itcms/total
  local.get $2
  i32.const 20
  i32.add
  local.tee $1
  local.get $0
  call $~lib/memory/memory.fill
  local.get $1
 )
 (func $~lib/rt/itcms/__link (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  i32.eqz
  if
   return
  end
  local.get $0
  i32.eqz
  if
   i32.const 0
   i32.const 1536
   i32.const 294
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/rt/itcms/white
  local.get $1
  i32.const 20
  i32.sub
  local.tee $1
  i32.load offset=4
  i32.const 3
  i32.and
  i32.eq
  if
   local.get $0
   i32.const 20
   i32.sub
   local.tee $0
   i32.load offset=4
   i32.const 3
   i32.and
   local.tee $3
   local.set $4
   local.get $3
   global.get $~lib/rt/itcms/white
   i32.eqz
   i32.eq
   if
    local.get $2
    if
     local.get $0
     call $~lib/rt/itcms/Object#makeGray
    else
     local.get $1
     call $~lib/rt/itcms/Object#makeGray
    end
   else
    global.get $~lib/rt/itcms/state
    i32.const 1
    i32.eq
    i32.const 0
    local.get $4
    i32.const 3
    i32.eq
    select
    if
     local.get $1
     call $~lib/rt/itcms/Object#makeGray
    end
   end
  end
 )
 (func $~lib/arraybuffer/ArrayBufferView#set:buffer (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/util/sort/weakHeapSort<f64> (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 f64)
  (local $6 i32)
  (local $7 f64)
  (local $8 i32)
  local.get $1
  i32.const 31
  i32.add
  i32.const 5
  i32.shr_u
  i32.const 2
  i32.shl
  local.tee $3
  call $~lib/rt/tlsf/__alloc
  local.tee $6
  local.get $3
  call $~lib/memory/memory.fill
  local.get $1
  i32.const 1
  i32.sub
  local.set $4
  loop $for-loop|0
   local.get $4
   i32.const 0
   i32.gt_s
   if
    local.get $4
    local.set $3
    loop $while-continue|1
     local.get $3
     i32.const 1
     i32.and
     local.get $6
     local.get $3
     i32.const 6
     i32.shr_u
     i32.const 2
     i32.shl
     i32.add
     i32.load
     local.get $3
     i32.const 1
     i32.shr_s
     i32.shr_u
     i32.const 1
     i32.and
     i32.eq
     if
      local.get $3
      i32.const 1
      i32.shr_s
      local.set $3
      br $while-continue|1
     end
    end
    local.get $0
    local.get $3
    i32.const 1
    i32.shr_s
    local.tee $3
    i32.const 3
    i32.shl
    i32.add
    f64.load
    local.set $5
    local.get $0
    local.get $4
    i32.const 3
    i32.shl
    i32.add
    f64.load
    local.set $7
    i32.const 2
    global.set $~argumentsLength
    local.get $5
    local.get $7
    local.get $2
    i32.load
    call_indirect $0 (type $f64_f64_=>_i32)
    i32.const 0
    i32.lt_s
    if
     local.get $6
     local.get $4
     i32.const 5
     i32.shr_u
     i32.const 2
     i32.shl
     i32.add
     local.tee $8
     local.get $8
     i32.load
     i32.const 1
     local.get $4
     i32.shl
     i32.xor
     i32.store
     local.get $0
     local.get $4
     i32.const 3
     i32.shl
     i32.add
     local.get $5
     f64.store
     local.get $0
     local.get $3
     i32.const 3
     i32.shl
     i32.add
     local.get $7
     f64.store
    end
    local.get $4
    i32.const 1
    i32.sub
    local.set $4
    br $for-loop|0
   end
  end
  local.get $1
  i32.const 1
  i32.sub
  local.set $4
  loop $for-loop|2
   local.get $4
   i32.const 2
   i32.ge_s
   if
    local.get $0
    f64.load
    local.set $5
    local.get $0
    local.get $0
    local.get $4
    i32.const 3
    i32.shl
    i32.add
    local.tee $1
    f64.load
    f64.store
    local.get $1
    local.get $5
    f64.store
    i32.const 1
    local.set $1
    loop $while-continue|3
     local.get $4
     local.get $6
     local.get $1
     i32.const 5
     i32.shr_u
     i32.const 2
     i32.shl
     i32.add
     i32.load
     local.get $1
     i32.shr_u
     i32.const 1
     i32.and
     local.get $1
     i32.const 1
     i32.shl
     i32.add
     local.tee $3
     i32.gt_s
     if
      local.get $3
      local.set $1
      br $while-continue|3
     end
    end
    loop $while-continue|4
     local.get $1
     i32.const 0
     i32.gt_s
     if
      local.get $0
      f64.load
      local.set $5
      local.get $0
      local.get $1
      i32.const 3
      i32.shl
      i32.add
      f64.load
      local.set $7
      i32.const 2
      global.set $~argumentsLength
      local.get $5
      local.get $7
      local.get $2
      i32.load
      call_indirect $0 (type $f64_f64_=>_i32)
      i32.const 0
      i32.lt_s
      if
       local.get $6
       local.get $1
       i32.const 5
       i32.shr_u
       i32.const 2
       i32.shl
       i32.add
       local.tee $3
       local.get $3
       i32.load
       i32.const 1
       local.get $1
       i32.shl
       i32.xor
       i32.store
       local.get $0
       local.get $1
       i32.const 3
       i32.shl
       i32.add
       local.get $5
       f64.store
       local.get $0
       local.get $7
       f64.store
      end
      local.get $1
      i32.const 1
      i32.shr_s
      local.set $1
      br $while-continue|4
     end
    end
    local.get $4
    i32.const 1
    i32.sub
    local.set $4
    br $for-loop|2
   end
  end
  local.get $6
  call $~lib/rt/tlsf/__free
  local.get $0
  f64.load offset=8
  local.set $5
  local.get $0
  local.get $0
  f64.load
  f64.store offset=8
  local.get $0
  local.get $5
  f64.store
 )
 (func $~lib/typedarray/Float64Array#sort (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 f64)
  (local $6 f64)
  (local $7 i32)
  (local $8 i32)
  block $~lib/typedarray/SORT<~lib/typedarray/Float64Array,f64>|inlined.0
   local.get $0
   local.tee $2
   i32.load offset=8
   i32.const 3
   i32.shr_u
   local.tee $8
   i32.const 1
   i32.le_u
   br_if $~lib/typedarray/SORT<~lib/typedarray/Float64Array,f64>|inlined.0
   local.get $2
   i32.load offset=4
   local.set $4
   local.get $8
   i32.const 2
   i32.eq
   if
    local.get $4
    f64.load offset=8
    local.set $5
    local.get $4
    f64.load
    local.set $6
    i32.const 2
    global.set $~argumentsLength
    local.get $5
    local.get $6
    local.get $1
    i32.load
    call_indirect $0 (type $f64_f64_=>_i32)
    i32.const 0
    i32.lt_s
    if
     local.get $4
     local.get $6
     f64.store offset=8
     local.get $4
     local.get $5
     f64.store
    end
    br $~lib/typedarray/SORT<~lib/typedarray/Float64Array,f64>|inlined.0
   end
   local.get $8
   i32.const 256
   i32.lt_u
   if
    local.get $1
    local.set $3
    loop $for-loop|0
     local.get $7
     local.get $8
     i32.lt_s
     if
      local.get $4
      local.get $7
      i32.const 3
      i32.shl
      i32.add
      f64.load
      local.set $5
      local.get $7
      i32.const 1
      i32.sub
      local.set $1
      loop $while-continue|1
       local.get $1
       i32.const 0
       i32.ge_s
       if
        block $while-break|1
         local.get $4
         local.get $1
         i32.const 3
         i32.shl
         i32.add
         f64.load
         local.set $6
         i32.const 2
         global.set $~argumentsLength
         local.get $5
         local.get $6
         local.get $3
         i32.load
         call_indirect $0 (type $f64_f64_=>_i32)
         i32.const 0
         i32.ge_s
         br_if $while-break|1
         local.get $1
         local.tee $0
         i32.const 1
         i32.sub
         local.set $1
         local.get $4
         local.get $0
         i32.const 1
         i32.add
         i32.const 3
         i32.shl
         i32.add
         local.get $6
         f64.store
         br $while-continue|1
        end
       end
      end
      local.get $4
      local.get $1
      i32.const 1
      i32.add
      i32.const 3
      i32.shl
      i32.add
      local.get $5
      f64.store
      local.get $7
      i32.const 1
      i32.add
      local.set $7
      br $for-loop|0
     end
    end
   else
    local.get $4
    local.get $8
    local.get $1
    call $~lib/util/sort/weakHeapSort<f64>
   end
  end
  local.get $2
 )
 (func $~lib/memory/memory.copy (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  block $~lib/util/memory/memmove|inlined.0
   local.get $2
   local.set $4
   local.get $0
   local.get $1
   i32.eq
   br_if $~lib/util/memory/memmove|inlined.0
   local.get $0
   local.get $1
   i32.lt_u
   if
    local.get $1
    i32.const 7
    i32.and
    local.get $0
    i32.const 7
    i32.and
    i32.eq
    if
     loop $while-continue|0
      local.get $0
      i32.const 7
      i32.and
      if
       local.get $4
       i32.eqz
       br_if $~lib/util/memory/memmove|inlined.0
       local.get $4
       i32.const 1
       i32.sub
       local.set $4
       local.get $0
       local.tee $2
       i32.const 1
       i32.add
       local.set $0
       local.get $1
       local.tee $3
       i32.const 1
       i32.add
       local.set $1
       local.get $2
       local.get $3
       i32.load8_u
       i32.store8
       br $while-continue|0
      end
     end
     loop $while-continue|1
      local.get $4
      i32.const 8
      i32.ge_u
      if
       local.get $0
       local.get $1
       i64.load
       i64.store
       local.get $4
       i32.const 8
       i32.sub
       local.set $4
       local.get $0
       i32.const 8
       i32.add
       local.set $0
       local.get $1
       i32.const 8
       i32.add
       local.set $1
       br $while-continue|1
      end
     end
    end
    loop $while-continue|2
     local.get $4
     if
      local.get $0
      local.tee $2
      i32.const 1
      i32.add
      local.set $0
      local.get $1
      local.tee $3
      i32.const 1
      i32.add
      local.set $1
      local.get $2
      local.get $3
      i32.load8_u
      i32.store8
      local.get $4
      i32.const 1
      i32.sub
      local.set $4
      br $while-continue|2
     end
    end
   else
    local.get $1
    i32.const 7
    i32.and
    local.get $0
    i32.const 7
    i32.and
    i32.eq
    if
     loop $while-continue|3
      local.get $0
      local.get $4
      i32.add
      i32.const 7
      i32.and
      if
       local.get $4
       i32.eqz
       br_if $~lib/util/memory/memmove|inlined.0
       local.get $4
       i32.const 1
       i32.sub
       local.tee $4
       local.get $0
       i32.add
       local.get $1
       local.get $4
       i32.add
       i32.load8_u
       i32.store8
       br $while-continue|3
      end
     end
     loop $while-continue|4
      local.get $4
      i32.const 8
      i32.ge_u
      if
       local.get $4
       i32.const 8
       i32.sub
       local.tee $4
       local.get $0
       i32.add
       local.get $1
       local.get $4
       i32.add
       i64.load
       i64.store
       br $while-continue|4
      end
     end
    end
    loop $while-continue|5
     local.get $4
     if
      local.get $4
      i32.const 1
      i32.sub
      local.tee $4
      local.get $0
      i32.add
      local.get $1
      local.get $4
      i32.add
      i32.load8_u
      i32.store8
      br $while-continue|5
     end
    end
   end
  end
 )
 (func $~lib/typedarray/Float64Array#copyWithin (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $3
  local.get $0
  i32.load offset=8
  i32.const 3
  i32.shr_u
  local.tee $4
  local.get $3
  local.get $4
  i32.lt_s
  select
  local.set $5
  local.get $0
  local.tee $3
  i32.load offset=4
  local.tee $6
  local.get $1
  i32.const 0
  i32.lt_s
  if (result i32)
   local.get $1
   local.get $4
   i32.add
   local.tee $0
   i32.const 0
   local.get $0
   i32.const 0
   i32.gt_s
   select
  else
   local.get $1
   local.get $4
   local.get $1
   local.get $4
   i32.lt_s
   select
  end
  local.tee $1
  i32.const 3
  i32.shl
  i32.add
  local.get $6
  local.get $2
  i32.const 0
  i32.lt_s
  if (result i32)
   local.get $2
   local.get $4
   i32.add
   local.tee $0
   i32.const 0
   local.get $0
   i32.const 0
   i32.gt_s
   select
  else
   local.get $2
   local.get $4
   local.get $2
   local.get $4
   i32.lt_s
   select
  end
  local.tee $0
  i32.const 3
  i32.shl
  i32.add
  local.get $5
  i32.const 0
  i32.lt_s
  if (result i32)
   local.get $4
   local.get $5
   i32.add
   local.tee $2
   i32.const 0
   local.get $2
   i32.const 0
   i32.gt_s
   select
  else
   local.get $5
   local.get $4
   local.get $4
   local.get $5
   i32.gt_s
   select
  end
  local.get $0
  i32.sub
  local.tee $2
  local.get $4
  local.get $1
  i32.sub
  local.tee $0
  local.get $0
  local.get $2
  i32.gt_s
  select
  i32.const 3
  i32.shl
  call $~lib/memory/memory.copy
  local.get $3
 )
 (func $~lib/util/number/decimalCount32 (param $0 i32) (result i32)
  local.get $0
  i32.const 10
  i32.ge_u
  i32.const 1
  i32.add
  local.get $0
  i32.const 10000
  i32.ge_u
  i32.const 3
  i32.add
  local.get $0
  i32.const 1000
  i32.ge_u
  i32.add
  local.get $0
  i32.const 100
  i32.lt_u
  select
  local.get $0
  i32.const 1000000
  i32.ge_u
  i32.const 6
  i32.add
  local.get $0
  i32.const 1000000000
  i32.ge_u
  i32.const 8
  i32.add
  local.get $0
  i32.const 100000000
  i32.ge_u
  i32.add
  local.get $0
  i32.const 10000000
  i32.lt_u
  select
  local.get $0
  i32.const 100000
  i32.lt_u
  select
 )
 (func $~lib/util/number/genDigits (param $0 i32) (param $1 i64) (param $2 i32) (param $3 i64) (param $4 i32) (param $5 i64) (param $6 i32) (result i32)
  (local $7 i64)
  (local $8 i64)
  (local $9 i32)
  (local $10 i64)
  (local $11 i32)
  (local $12 i64)
  (local $13 i64)
  local.get $3
  local.get $1
  i64.sub
  local.set $8
  local.get $3
  i64.const 1
  i32.const 0
  local.get $4
  i32.sub
  local.tee $11
  i64.extend_i32_s
  i64.shl
  local.tee $10
  i64.const 1
  i64.sub
  local.tee $12
  i64.and
  local.set $7
  local.get $3
  local.get $11
  i64.extend_i32_s
  i64.shr_u
  i32.wrap_i64
  local.tee $2
  call $~lib/util/number/decimalCount32
  local.set $9
  loop $while-continue|0
   local.get $9
   i32.const 0
   i32.gt_s
   if
    block $break|1
     block $case10|1
      block $case9|1
       block $case8|1
        block $case7|1
         block $case6|1
          block $case5|1
           block $case4|1
            block $case3|1
             block $case2|1
              block $case1|1
               block $case0|1
                local.get $9
                i32.const 1
                i32.sub
                br_table $case9|1 $case8|1 $case7|1 $case6|1 $case5|1 $case4|1 $case3|1 $case2|1 $case1|1 $case0|1 $case10|1
               end
               local.get $2
               i32.const 1000000000
               i32.div_u
               local.set $4
               local.get $2
               i32.const 1000000000
               i32.rem_u
               local.set $2
               br $break|1
              end
              local.get $2
              i32.const 100000000
              i32.div_u
              local.set $4
              local.get $2
              i32.const 100000000
              i32.rem_u
              local.set $2
              br $break|1
             end
             local.get $2
             i32.const 10000000
             i32.div_u
             local.set $4
             local.get $2
             i32.const 10000000
             i32.rem_u
             local.set $2
             br $break|1
            end
            local.get $2
            i32.const 1000000
            i32.div_u
            local.set $4
            local.get $2
            i32.const 1000000
            i32.rem_u
            local.set $2
            br $break|1
           end
           local.get $2
           i32.const 100000
           i32.div_u
           local.set $4
           local.get $2
           i32.const 100000
           i32.rem_u
           local.set $2
           br $break|1
          end
          local.get $2
          i32.const 10000
          i32.div_u
          local.set $4
          local.get $2
          i32.const 10000
          i32.rem_u
          local.set $2
          br $break|1
         end
         local.get $2
         i32.const 1000
         i32.div_u
         local.set $4
         local.get $2
         i32.const 1000
         i32.rem_u
         local.set $2
         br $break|1
        end
        local.get $2
        i32.const 100
        i32.div_u
        local.set $4
        local.get $2
        i32.const 100
        i32.rem_u
        local.set $2
        br $break|1
       end
       local.get $2
       i32.const 10
       i32.div_u
       local.set $4
       local.get $2
       i32.const 10
       i32.rem_u
       local.set $2
       br $break|1
      end
      local.get $2
      local.set $4
      i32.const 0
      local.set $2
      br $break|1
     end
     i32.const 0
     local.set $4
    end
    local.get $4
    local.get $6
    i32.or
    if
     local.get $0
     local.get $6
     i32.const 1
     i32.shl
     i32.add
     local.get $4
     i32.const 65535
     i32.and
     i32.const 48
     i32.add
     i32.store16
     local.get $6
     i32.const 1
     i32.add
     local.set $6
    end
    local.get $9
    i32.const 1
    i32.sub
    local.set $9
    local.get $5
    local.get $7
    local.get $2
    i64.extend_i32_u
    local.get $11
    i64.extend_i32_s
    i64.shl
    i64.add
    local.tee $1
    i64.ge_u
    if
     local.get $9
     global.get $~lib/util/number/_K
     i32.add
     global.set $~lib/util/number/_K
     local.get $9
     i32.const 2
     i32.shl
     i32.const 2912
     i32.add
     i64.load32_u
     local.get $11
     i64.extend_i32_s
     i64.shl
     local.set $10
     local.get $0
     local.get $6
     i32.const 1
     i32.sub
     i32.const 1
     i32.shl
     i32.add
     local.tee $0
     i32.load16_u
     local.set $2
     loop $while-continue|3
      i32.const 1
      local.get $8
      local.get $1
      i64.sub
      local.get $1
      local.get $10
      i64.add
      local.tee $3
      local.get $8
      i64.sub
      i64.gt_u
      local.get $3
      local.get $8
      i64.lt_u
      select
      i32.const 0
      local.get $10
      local.get $5
      local.get $1
      i64.sub
      i64.le_u
      i32.const 0
      local.get $1
      local.get $8
      i64.lt_u
      select
      select
      if
       local.get $2
       i32.const 1
       i32.sub
       local.set $2
       local.get $1
       local.get $10
       i64.add
       local.set $1
       br $while-continue|3
      end
     end
     local.get $0
     local.get $2
     i32.store16
     local.get $6
     return
    end
    br $while-continue|0
   end
  end
  local.get $11
  i64.extend_i32_s
  local.set $13
  loop $while-continue|4 (result i32)
   local.get $5
   i64.const 10
   i64.mul
   local.set $5
   local.get $7
   i64.const 10
   i64.mul
   local.tee $3
   local.get $13
   i64.shr_u
   local.tee $1
   local.get $6
   i64.extend_i32_s
   i64.or
   i64.const 0
   i64.ne
   if
    local.get $0
    local.get $6
    i32.const 1
    i32.shl
    i32.add
    local.get $1
    i32.wrap_i64
    i32.const 65535
    i32.and
    i32.const 48
    i32.add
    i32.store16
    local.get $6
    i32.const 1
    i32.add
    local.set $6
   end
   local.get $9
   i32.const 1
   i32.sub
   local.set $9
   local.get $3
   local.get $12
   i64.and
   local.tee $7
   local.get $5
   i64.ge_u
   br_if $while-continue|4
   local.get $9
   global.get $~lib/util/number/_K
   i32.add
   global.set $~lib/util/number/_K
   local.get $7
   local.set $1
   local.get $8
   i32.const 0
   local.get $9
   i32.sub
   i32.const 2
   i32.shl
   i32.const 2912
   i32.add
   i64.load32_u
   i64.mul
   local.set $8
   local.get $0
   local.get $6
   i32.const 1
   i32.sub
   i32.const 1
   i32.shl
   i32.add
   local.tee $0
   i32.load16_u
   local.set $2
   loop $while-continue|6
    i32.const 1
    local.get $8
    local.get $1
    i64.sub
    local.get $1
    local.get $10
    i64.add
    local.tee $3
    local.get $8
    i64.sub
    i64.gt_u
    local.get $3
    local.get $8
    i64.lt_u
    select
    i32.const 0
    local.get $10
    local.get $5
    local.get $1
    i64.sub
    i64.le_u
    i32.const 0
    local.get $1
    local.get $8
    i64.lt_u
    select
    select
    if
     local.get $2
     i32.const 1
     i32.sub
     local.set $2
     local.get $1
     local.get $10
     i64.add
     local.set $1
     br $while-continue|6
    end
   end
   local.get $0
   local.get $2
   i32.store16
   local.get $6
  end
 )
 (func $~lib/util/number/utoa_dec_simple<u32> (param $0 i32) (param $1 i32) (param $2 i32)
  loop $do-continue|0
   local.get $0
   local.get $2
   i32.const 1
   i32.sub
   local.tee $2
   i32.const 1
   i32.shl
   i32.add
   local.get $1
   i32.const 10
   i32.rem_u
   i32.const 48
   i32.add
   i32.store16
   local.get $1
   i32.const 10
   i32.div_u
   local.tee $1
   br_if $do-continue|0
  end
 )
 (func $~lib/util/number/prettify (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  local.get $2
  i32.eqz
  if
   local.get $0
   local.get $1
   i32.const 1
   i32.shl
   i32.add
   i32.const 3145774
   i32.store
   local.get $1
   i32.const 2
   i32.add
   return
  end
  local.get $1
  local.get $2
  i32.add
  local.tee $3
  i32.const 21
  i32.le_s
  i32.const 0
  local.get $1
  local.get $3
  i32.le_s
  select
  if (result i32)
   loop $for-loop|0
    local.get $1
    local.get $3
    i32.lt_s
    if
     local.get $0
     local.get $1
     i32.const 1
     i32.shl
     i32.add
     i32.const 48
     i32.store16
     local.get $1
     i32.const 1
     i32.add
     local.set $1
     br $for-loop|0
    end
   end
   local.get $0
   local.get $3
   i32.const 1
   i32.shl
   i32.add
   i32.const 3145774
   i32.store
   local.get $3
   i32.const 2
   i32.add
  else
   local.get $3
   i32.const 21
   i32.le_s
   i32.const 0
   local.get $3
   i32.const 0
   i32.gt_s
   select
   if (result i32)
    local.get $0
    local.get $3
    i32.const 1
    i32.shl
    i32.add
    local.tee $0
    i32.const 2
    i32.add
    local.get $0
    i32.const 0
    local.get $2
    i32.sub
    i32.const 1
    i32.shl
    call $~lib/memory/memory.copy
    local.get $0
    i32.const 46
    i32.store16
    local.get $1
    i32.const 1
    i32.add
   else
    local.get $3
    i32.const 0
    i32.le_s
    i32.const 0
    local.get $3
    i32.const -6
    i32.gt_s
    select
    if (result i32)
     local.get $0
     i32.const 2
     local.get $3
     i32.sub
     local.tee $3
     i32.const 1
     i32.shl
     i32.add
     local.get $0
     local.get $1
     i32.const 1
     i32.shl
     call $~lib/memory/memory.copy
     local.get $0
     i32.const 3014704
     i32.store
     i32.const 2
     local.set $2
     loop $for-loop|1
      local.get $2
      local.get $3
      i32.lt_s
      if
       local.get $0
       local.get $2
       i32.const 1
       i32.shl
       i32.add
       i32.const 48
       i32.store16
       local.get $2
       i32.const 1
       i32.add
       local.set $2
       br $for-loop|1
      end
     end
     local.get $1
     local.get $3
     i32.add
    else
     local.get $1
     i32.const 1
     i32.eq
     if (result i32)
      local.get $0
      i32.const 101
      i32.store16 offset=2
      local.get $0
      local.tee $1
      i32.const 4
      i32.add
      local.get $3
      i32.const 1
      i32.sub
      local.tee $0
      i32.const 0
      i32.lt_s
      local.tee $2
      if
       i32.const 0
       local.get $0
       i32.sub
       local.set $0
      end
      local.get $0
      local.get $0
      call $~lib/util/number/decimalCount32
      i32.const 1
      i32.add
      local.tee $0
      call $~lib/util/number/utoa_dec_simple<u32>
      local.get $1
      i32.const 45
      i32.const 43
      local.get $2
      select
      i32.store16 offset=4
      local.get $0
      i32.const 2
      i32.add
     else
      local.get $0
      i32.const 4
      i32.add
      local.get $0
      i32.const 2
      i32.add
      local.get $1
      i32.const 1
      i32.shl
      local.tee $2
      i32.const 2
      i32.sub
      call $~lib/memory/memory.copy
      local.get $0
      i32.const 46
      i32.store16 offset=2
      local.get $0
      local.get $2
      i32.add
      local.tee $0
      i32.const 101
      i32.store16 offset=2
      local.get $0
      local.tee $2
      i32.const 4
      i32.add
      local.get $3
      i32.const 1
      i32.sub
      local.tee $0
      i32.const 0
      i32.lt_s
      local.tee $3
      if
       i32.const 0
       local.get $0
       i32.sub
       local.set $0
      end
      local.get $0
      local.get $0
      call $~lib/util/number/decimalCount32
      i32.const 1
      i32.add
      local.tee $0
      call $~lib/util/number/utoa_dec_simple<u32>
      local.get $2
      i32.const 45
      i32.const 43
      local.get $3
      select
      i32.store16 offset=4
      local.get $0
      local.get $1
      i32.add
      i32.const 2
      i32.add
     end
    end
   end
  end
 )
 (func $~lib/util/number/dtoa_core (param $0 i32) (param $1 f64) (result i32)
  (local $2 i64)
  (local $3 i64)
  (local $4 i32)
  (local $5 i64)
  (local $6 i64)
  (local $7 i64)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  local.get $1
  f64.const 0
  f64.lt
  local.tee $9
  if (result f64)
   local.get $0
   i32.const 45
   i32.store16
   local.get $1
   f64.neg
  else
   local.get $1
  end
  i64.reinterpret_f64
  local.tee $2
  i64.const 9218868437227405312
  i64.and
  i64.const 52
  i64.shr_u
  i32.wrap_i64
  local.tee $8
  i32.const 0
  i32.ne
  i64.extend_i32_u
  i64.const 52
  i64.shl
  local.get $2
  i64.const 4503599627370495
  i64.and
  i64.add
  local.tee $3
  i64.const 1
  i64.shl
  i64.const 1
  i64.add
  local.tee $2
  local.get $2
  i64.clz
  i32.wrap_i64
  local.tee $4
  i64.extend_i32_s
  i64.shl
  global.set $~lib/util/number/_frc_plus
  local.get $8
  i32.const 1
  local.get $8
  select
  i32.const 1075
  i32.sub
  local.tee $8
  i32.const 1
  i32.sub
  local.get $4
  i32.sub
  local.set $4
  local.get $3
  local.get $3
  i64.const 4503599627370496
  i64.eq
  i32.const 1
  i32.add
  local.tee $10
  i64.extend_i32_s
  i64.shl
  i64.const 1
  i64.sub
  local.get $8
  local.get $10
  i32.sub
  local.get $4
  i32.sub
  i64.extend_i32_s
  i64.shl
  global.set $~lib/util/number/_frc_minus
  local.get $4
  global.set $~lib/util/number/_exp
  i32.const 348
  i32.const -61
  global.get $~lib/util/number/_exp
  i32.sub
  f64.convert_i32_s
  f64.const 0.30102999566398114
  f64.mul
  f64.const 347
  f64.add
  local.tee $1
  i32.trunc_f64_s
  local.tee $4
  local.get $1
  local.get $4
  f64.convert_i32_s
  f64.ne
  i32.add
  i32.const 3
  i32.shr_s
  i32.const 1
  i32.add
  local.tee $4
  i32.const 3
  i32.shl
  local.tee $10
  i32.sub
  global.set $~lib/util/number/_K
  local.get $10
  i32.const 2040
  i32.add
  i64.load
  global.set $~lib/util/number/_frc_pow
  local.get $4
  i32.const 1
  i32.shl
  i32.const 2736
  i32.add
  i32.load16_s
  global.set $~lib/util/number/_exp_pow
  global.get $~lib/util/number/_frc_pow
  local.tee $6
  i64.const 4294967295
  i64.and
  local.set $2
  local.get $6
  i64.const 32
  i64.shr_u
  local.tee $6
  global.get $~lib/util/number/_frc_plus
  local.tee $5
  i64.const 32
  i64.shr_u
  local.tee $7
  i64.mul
  local.get $2
  local.get $7
  i64.mul
  local.get $2
  local.get $5
  i64.const 4294967295
  i64.and
  local.tee $5
  i64.mul
  i64.const 32
  i64.shr_u
  i64.add
  local.tee $7
  i64.const 32
  i64.shr_u
  i64.add
  local.get $5
  local.get $6
  i64.mul
  local.get $7
  i64.const 4294967295
  i64.and
  i64.add
  i64.const 2147483647
  i64.add
  i64.const 32
  i64.shr_u
  i64.add
  i64.const 1
  i64.sub
  local.set $5
  local.get $0
  local.get $9
  i32.const 1
  i32.shl
  i32.add
  local.get $0
  local.get $6
  local.get $3
  local.get $3
  i64.clz
  i32.wrap_i64
  local.tee $0
  i64.extend_i32_s
  i64.shl
  local.tee $3
  i64.const 32
  i64.shr_u
  local.tee $7
  i64.mul
  local.get $2
  local.get $7
  i64.mul
  local.get $2
  local.get $3
  i64.const 4294967295
  i64.and
  local.tee $3
  i64.mul
  i64.const 32
  i64.shr_u
  i64.add
  local.tee $7
  i64.const 32
  i64.shr_u
  i64.add
  local.get $3
  local.get $6
  i64.mul
  local.get $7
  i64.const 4294967295
  i64.and
  i64.add
  i64.const 2147483647
  i64.add
  i64.const 32
  i64.shr_u
  i64.add
  global.get $~lib/util/number/_exp_pow
  local.tee $4
  local.get $8
  local.get $0
  i32.sub
  i32.add
  i32.const -64
  i32.sub
  local.get $5
  local.get $4
  global.get $~lib/util/number/_exp
  i32.add
  i32.const -64
  i32.sub
  local.get $5
  local.get $6
  global.get $~lib/util/number/_frc_minus
  local.tee $3
  i64.const 32
  i64.shr_u
  local.tee $5
  i64.mul
  local.get $2
  local.get $5
  i64.mul
  local.get $2
  local.get $3
  i64.const 4294967295
  i64.and
  local.tee $2
  i64.mul
  i64.const 32
  i64.shr_u
  i64.add
  local.tee $3
  i64.const 32
  i64.shr_u
  i64.add
  local.get $2
  local.get $6
  i64.mul
  local.get $3
  i64.const 4294967295
  i64.and
  i64.add
  i64.const 2147483647
  i64.add
  i64.const 32
  i64.shr_u
  i64.add
  i64.const 1
  i64.add
  i64.sub
  local.get $9
  call $~lib/util/number/genDigits
  local.get $9
  i32.sub
  global.get $~lib/util/number/_K
  call $~lib/util/number/prettify
  local.get $9
  i32.add
 )
 (func $~lib/util/number/dtoa_buffered (param $0 i32) (param $1 f64) (result i32)
  (local $2 i32)
  local.get $1
  f64.const 0
  f64.eq
  if
   local.get $0
   i32.const 48
   i32.store16
   local.get $0
   i32.const 46
   i32.store16 offset=2
   local.get $0
   i32.const 48
   i32.store16 offset=4
   i32.const 3
   return
  end
  local.get $1
  local.get $1
  f64.sub
  f64.const 0
  f64.ne
  if
   local.get $1
   local.get $1
   f64.ne
   if
    local.get $0
    i32.const 78
    i32.store16
    local.get $0
    i32.const 97
    i32.store16 offset=2
    local.get $0
    i32.const 78
    i32.store16 offset=4
    i32.const 3
    return
   else
    local.get $1
    f64.const 0
    f64.lt
    local.tee $2
    if
     local.get $0
     i32.const 45
     i32.store16
     local.get $0
     i32.const 2
     i32.add
     local.set $0
    end
    local.get $0
    i64.const 29555310648492105
    i64.store
    local.get $0
    i64.const 34058970405077102
    i64.store offset=8
    local.get $2
    i32.const 8
    i32.add
    return
   end
   unreachable
  end
  local.get $0
  local.get $1
  call $~lib/util/number/dtoa_core
 )
 (func $~lib/typedarray/Float64Array#join (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  i32.load offset=4
  local.get $0
  i32.load offset=8
  i32.const 3
  i32.shr_u
  local.get $1
  call $~lib/util/string/joinFloatArray<f64>
 )
 (func $~lib/math/pio2_large_quot (param $0 i64) (result i32)
  (local $1 i64)
  (local $2 i64)
  (local $3 i64)
  (local $4 i64)
  (local $5 i64)
  (local $6 i64)
  (local $7 i32)
  (local $8 i64)
  (local $9 i64)
  (local $10 i64)
  (local $11 i64)
  (local $12 f64)
  local.get $0
  i64.const 9223372036854775807
  i64.and
  i64.const 52
  i64.shr_u
  i64.const 1045
  i64.sub
  local.tee $4
  i64.const 6
  i64.shr_s
  i32.wrap_i64
  i32.const 3
  i32.shl
  i32.const 2992
  i32.add
  local.tee $7
  i64.load
  local.set $6
  local.get $7
  i64.load offset=8
  local.set $3
  local.get $7
  i64.load offset=16
  local.set $1
  local.get $4
  i64.const 63
  i64.and
  local.tee $4
  i64.const 0
  i64.ne
  if
   local.get $6
   local.get $4
   i64.shl
   local.get $3
   i64.const 64
   local.get $4
   i64.sub
   local.tee $2
   i64.shr_u
   i64.or
   local.set $6
   local.get $3
   local.get $4
   i64.shl
   local.get $1
   local.get $2
   i64.shr_u
   i64.or
   local.set $3
   local.get $1
   local.get $4
   i64.shl
   local.get $7
   i64.load offset=24
   local.get $2
   i64.shr_u
   i64.or
   local.set $1
  end
  local.get $0
  i64.const 4503599627370495
  i64.and
  i64.const 4503599627370496
  i64.or
  local.tee $4
  i64.const 4294967295
  i64.and
  local.tee $2
  local.get $3
  i64.const 32
  i64.shr_u
  local.tee $8
  i64.mul
  local.get $3
  i64.const 4294967295
  i64.and
  local.tee $5
  local.get $2
  i64.mul
  local.tee $9
  i64.const 32
  i64.shr_u
  i64.add
  local.set $3
  local.get $5
  local.get $4
  i64.const 32
  i64.shr_u
  local.tee $5
  i64.mul
  local.get $3
  i64.const 4294967295
  i64.and
  i64.add
  local.set $2
  local.get $5
  local.get $8
  i64.mul
  local.get $3
  i64.const 32
  i64.shr_u
  i64.add
  local.get $2
  i64.const 32
  i64.shr_u
  i64.add
  global.set $~lib/math/res128_hi
  local.get $4
  i64.const 32
  i64.shr_s
  local.get $1
  i64.const 32
  i64.shr_u
  i64.mul
  local.tee $3
  local.get $9
  i64.const 4294967295
  i64.and
  local.get $2
  i64.const 32
  i64.shl
  i64.add
  i64.add
  local.set $1
  local.get $1
  local.get $3
  i64.lt_u
  i64.extend_i32_u
  global.get $~lib/math/res128_hi
  local.get $4
  local.get $6
  i64.mul
  i64.add
  i64.add
  local.tee $8
  i64.const 2
  i64.shl
  local.get $1
  i64.const 62
  i64.shr_u
  i64.or
  local.tee $6
  i64.const 63
  i64.shr_s
  local.tee $4
  i64.const 1
  i64.shr_s
  local.get $6
  i64.xor
  local.tee $2
  i64.clz
  local.set $3
  local.get $2
  local.get $3
  i64.shl
  local.get $4
  local.get $1
  i64.const 2
  i64.shl
  i64.xor
  local.tee $5
  i64.const 64
  local.get $3
  i64.sub
  i64.shr_u
  i64.or
  local.tee $1
  i64.const 4294967295
  i64.and
  local.set $2
  local.get $1
  i64.const 32
  i64.shr_u
  local.tee $9
  i64.const 560513588
  i64.mul
  local.get $2
  i64.const 3373259426
  i64.mul
  local.get $2
  i64.const 560513588
  i64.mul
  local.tee $10
  i64.const 32
  i64.shr_u
  i64.add
  local.tee $11
  i64.const 4294967295
  i64.and
  i64.add
  local.set $2
  local.get $9
  i64.const 3373259426
  i64.mul
  local.get $11
  i64.const 32
  i64.shr_u
  i64.add
  local.get $2
  i64.const 32
  i64.shr_u
  i64.add
  global.set $~lib/math/res128_hi
  local.get $10
  i64.const 4294967295
  i64.and
  local.get $2
  i64.const 32
  i64.shl
  i64.add
  local.tee $2
  local.get $1
  f64.convert_i64_u
  f64.const 3.753184150245214e-04
  f64.mul
  local.get $5
  local.get $3
  i64.shl
  f64.convert_i64_u
  f64.const 3.834951969714103e-04
  f64.mul
  f64.add
  i64.trunc_f64_u
  local.tee $1
  i64.lt_u
  i64.extend_i32_u
  global.get $~lib/math/res128_hi
  local.tee $5
  i64.const 11
  i64.shr_u
  i64.add
  f64.convert_i64_u
  global.set $~lib/math/rempio2_y0
  local.get $1
  local.get $5
  i64.const 53
  i64.shl
  local.get $2
  i64.const 11
  i64.shr_u
  i64.or
  i64.add
  f64.convert_i64_u
  f64.const 5.421010862427522e-20
  f64.mul
  global.set $~lib/math/rempio2_y1
  global.get $~lib/math/rempio2_y0
  i64.const 4372995238176751616
  local.get $3
  i64.const 52
  i64.shl
  i64.sub
  local.get $0
  local.get $6
  i64.xor
  i64.const -9223372036854775808
  i64.and
  i64.or
  f64.reinterpret_i64
  local.tee $12
  f64.mul
  global.set $~lib/math/rempio2_y0
  global.get $~lib/math/rempio2_y1
  local.get $12
  f64.mul
  global.set $~lib/math/rempio2_y1
  local.get $8
  i64.const 62
  i64.shr_s
  local.get $4
  i64.sub
  i32.wrap_i64
 )
 (func $~lib/math/NativeMath.sin (param $0 f64) (result f64)
  (local $1 f64)
  (local $2 i64)
  (local $3 f64)
  (local $4 f64)
  (local $5 i32)
  (local $6 i32)
  (local $7 f64)
  local.get $0
  i64.reinterpret_f64
  local.tee $2
  i64.const 32
  i64.shr_u
  i32.wrap_i64
  local.tee $5
  i32.const 31
  i32.shr_u
  local.set $6
  local.get $5
  i32.const 2147483647
  i32.and
  local.tee $5
  i32.const 1072243195
  i32.le_u
  if
   local.get $5
   i32.const 1045430272
   i32.lt_u
   if
    local.get $0
    return
   end
   local.get $0
   local.get $0
   local.get $0
   f64.mul
   local.tee $3
   local.get $0
   f64.mul
   local.get $3
   local.get $3
   local.get $3
   f64.const 2.7557313707070068e-06
   f64.mul
   f64.const -1.984126982985795e-04
   f64.add
   f64.mul
   f64.const 0.00833333333332249
   f64.add
   local.get $3
   local.get $3
   local.get $3
   f64.mul
   f64.mul
   local.get $3
   f64.const 1.58969099521155e-10
   f64.mul
   f64.const -2.5050760253406863e-08
   f64.add
   f64.mul
   f64.add
   f64.mul
   f64.const -0.16666666666666632
   f64.add
   f64.mul
   f64.add
   return
  end
  local.get $5
  i32.const 2146435072
  i32.ge_u
  if
   local.get $0
   local.get $0
   f64.sub
   return
  end
  block $~lib/math/rempio2|inlined.0 (result i32)
   local.get $2
   i64.const 32
   i64.shr_u
   i32.wrap_i64
   i32.const 2147483647
   i32.and
   local.tee $5
   i32.const 1094263291
   i32.lt_u
   if
    local.get $5
    i32.const 20
    i32.shr_u
    local.tee $6
    local.get $0
    local.get $0
    f64.const 0.6366197723675814
    f64.mul
    f64.nearest
    local.tee $3
    f64.const 1.5707963267341256
    f64.mul
    f64.sub
    local.tee $0
    local.get $3
    f64.const 6.077100506506192e-11
    f64.mul
    local.tee $4
    f64.sub
    local.tee $1
    i64.reinterpret_f64
    i64.const 32
    i64.shr_u
    i32.wrap_i64
    i32.const 20
    i32.shr_u
    i32.const 2047
    i32.and
    i32.sub
    i32.const 16
    i32.gt_u
    if
     local.get $3
     f64.const 2.0222662487959506e-21
     f64.mul
     local.get $0
     local.get $0
     local.get $3
     f64.const 6.077100506303966e-11
     f64.mul
     local.tee $4
     f64.sub
     local.tee $0
     f64.sub
     local.get $4
     f64.sub
     f64.sub
     local.set $4
     local.get $6
     local.get $0
     local.get $4
     f64.sub
     local.tee $1
     i64.reinterpret_f64
     i64.const 32
     i64.shr_u
     i32.wrap_i64
     i32.const 20
     i32.shr_u
     i32.const 2047
     i32.and
     i32.sub
     i32.const 49
     i32.gt_u
     if (result f64)
      local.get $3
      f64.const 8.4784276603689e-32
      f64.mul
      local.get $0
      local.get $0
      local.get $3
      f64.const 2.0222662487111665e-21
      f64.mul
      local.tee $4
      f64.sub
      local.tee $0
      f64.sub
      local.get $4
      f64.sub
      f64.sub
      local.set $4
      local.get $0
      local.get $4
      f64.sub
     else
      local.get $1
     end
     local.set $1
    end
    local.get $1
    global.set $~lib/math/rempio2_y0
    local.get $0
    local.get $1
    f64.sub
    local.get $4
    f64.sub
    global.set $~lib/math/rempio2_y1
    local.get $3
    i32.trunc_f64_s
    br $~lib/math/rempio2|inlined.0
   end
   i32.const 0
   local.get $2
   call $~lib/math/pio2_large_quot
   local.tee $5
   i32.sub
   local.get $5
   local.get $6
   select
  end
  local.set $6
  global.get $~lib/math/rempio2_y0
  local.set $3
  global.get $~lib/math/rempio2_y1
  local.set $4
  local.get $6
  i32.const 1
  i32.and
  if (result f64)
   f64.const 1
   local.get $3
   local.get $3
   f64.mul
   local.tee $0
   f64.const 0.5
   f64.mul
   local.tee $1
   f64.sub
   local.tee $7
   f64.const 1
   local.get $7
   f64.sub
   local.get $1
   f64.sub
   local.get $0
   local.get $0
   local.get $0
   local.get $0
   f64.const 2.480158728947673e-05
   f64.mul
   f64.const -0.001388888888887411
   f64.add
   f64.mul
   f64.const 0.0416666666666666
   f64.add
   f64.mul
   local.get $0
   local.get $0
   f64.mul
   local.tee $1
   local.get $1
   f64.mul
   local.get $0
   local.get $0
   f64.const -1.1359647557788195e-11
   f64.mul
   f64.const 2.087572321298175e-09
   f64.add
   f64.mul
   f64.const -2.7557314351390663e-07
   f64.add
   f64.mul
   f64.add
   f64.mul
   local.get $3
   local.get $4
   f64.mul
   f64.sub
   f64.add
   f64.add
  else
   local.get $3
   local.get $3
   f64.mul
   local.tee $0
   local.get $3
   f64.mul
   local.set $1
   local.get $3
   local.get $0
   local.get $4
   f64.const 0.5
   f64.mul
   local.get $1
   local.get $0
   local.get $0
   f64.const 2.7557313707070068e-06
   f64.mul
   f64.const -1.984126982985795e-04
   f64.add
   f64.mul
   f64.const 0.00833333333332249
   f64.add
   local.get $0
   local.get $0
   local.get $0
   f64.mul
   f64.mul
   local.get $0
   f64.const 1.58969099521155e-10
   f64.mul
   f64.const -2.5050760253406863e-08
   f64.add
   f64.mul
   f64.add
   f64.mul
   f64.sub
   f64.mul
   local.get $4
   f64.sub
   local.get $1
   f64.const -0.16666666666666632
   f64.mul
   f64.sub
   f64.sub
  end
  local.tee $0
  f64.neg
  local.get $0
  local.get $6
  i32.const 2
  i32.and
  select
 )
 (func $~lib/math/NativeMath.cos (param $0 f64) (result f64)
  (local $1 f64)
  (local $2 i64)
  (local $3 f64)
  (local $4 f64)
  (local $5 i32)
  (local $6 i32)
  (local $7 f64)
  local.get $0
  i64.reinterpret_f64
  local.tee $2
  i64.const 32
  i64.shr_u
  i32.wrap_i64
  local.tee $5
  i32.const 31
  i32.shr_u
  local.set $6
  local.get $5
  i32.const 2147483647
  i32.and
  local.tee $5
  i32.const 1072243195
  i32.le_u
  if
   local.get $5
   i32.const 1044816030
   i32.lt_u
   if
    f64.const 1
    return
   end
   f64.const 1
   local.get $0
   local.get $0
   f64.mul
   local.tee $3
   f64.const 0.5
   f64.mul
   local.tee $4
   f64.sub
   local.tee $1
   f64.const 1
   local.get $1
   f64.sub
   local.get $4
   f64.sub
   local.get $3
   local.get $3
   local.get $3
   local.get $3
   f64.const 2.480158728947673e-05
   f64.mul
   f64.const -0.001388888888887411
   f64.add
   f64.mul
   f64.const 0.0416666666666666
   f64.add
   f64.mul
   local.get $3
   local.get $3
   f64.mul
   local.tee $4
   local.get $4
   f64.mul
   local.get $3
   local.get $3
   f64.const -1.1359647557788195e-11
   f64.mul
   f64.const 2.087572321298175e-09
   f64.add
   f64.mul
   f64.const -2.7557314351390663e-07
   f64.add
   f64.mul
   f64.add
   f64.mul
   local.get $0
   f64.const 0
   f64.mul
   f64.sub
   f64.add
   f64.add
   return
  end
  local.get $5
  i32.const 2146435072
  i32.ge_u
  if
   local.get $0
   local.get $0
   f64.sub
   return
  end
  block $~lib/math/rempio2|inlined.1 (result i32)
   local.get $2
   i64.const 32
   i64.shr_u
   i32.wrap_i64
   i32.const 2147483647
   i32.and
   local.tee $5
   i32.const 1094263291
   i32.lt_u
   if
    local.get $5
    i32.const 20
    i32.shr_u
    local.tee $6
    local.get $0
    local.get $0
    f64.const 0.6366197723675814
    f64.mul
    f64.nearest
    local.tee $3
    f64.const 1.5707963267341256
    f64.mul
    f64.sub
    local.tee $0
    local.get $3
    f64.const 6.077100506506192e-11
    f64.mul
    local.tee $4
    f64.sub
    local.tee $1
    i64.reinterpret_f64
    i64.const 32
    i64.shr_u
    i32.wrap_i64
    i32.const 20
    i32.shr_u
    i32.const 2047
    i32.and
    i32.sub
    i32.const 16
    i32.gt_u
    if
     local.get $3
     f64.const 2.0222662487959506e-21
     f64.mul
     local.get $0
     local.get $0
     local.get $3
     f64.const 6.077100506303966e-11
     f64.mul
     local.tee $4
     f64.sub
     local.tee $0
     f64.sub
     local.get $4
     f64.sub
     f64.sub
     local.set $4
     local.get $6
     local.get $0
     local.get $4
     f64.sub
     local.tee $1
     i64.reinterpret_f64
     i64.const 32
     i64.shr_u
     i32.wrap_i64
     i32.const 20
     i32.shr_u
     i32.const 2047
     i32.and
     i32.sub
     i32.const 49
     i32.gt_u
     if (result f64)
      local.get $3
      f64.const 8.4784276603689e-32
      f64.mul
      local.get $0
      local.get $0
      local.get $3
      f64.const 2.0222662487111665e-21
      f64.mul
      local.tee $4
      f64.sub
      local.tee $0
      f64.sub
      local.get $4
      f64.sub
      f64.sub
      local.set $4
      local.get $0
      local.get $4
      f64.sub
     else
      local.get $1
     end
     local.set $1
    end
    local.get $1
    global.set $~lib/math/rempio2_y0
    local.get $0
    local.get $1
    f64.sub
    local.get $4
    f64.sub
    global.set $~lib/math/rempio2_y1
    local.get $3
    i32.trunc_f64_s
    br $~lib/math/rempio2|inlined.1
   end
   i32.const 0
   local.get $2
   call $~lib/math/pio2_large_quot
   local.tee $5
   i32.sub
   local.get $5
   local.get $6
   select
  end
  local.set $6
  global.get $~lib/math/rempio2_y0
  local.set $3
  global.get $~lib/math/rempio2_y1
  local.set $4
  local.get $6
  i32.const 1
  i32.and
  if (result f64)
   local.get $3
   local.get $3
   f64.mul
   local.tee $0
   local.get $3
   f64.mul
   local.set $1
   local.get $3
   local.get $0
   local.get $4
   f64.const 0.5
   f64.mul
   local.get $1
   local.get $0
   local.get $0
   f64.const 2.7557313707070068e-06
   f64.mul
   f64.const -1.984126982985795e-04
   f64.add
   f64.mul
   f64.const 0.00833333333332249
   f64.add
   local.get $0
   local.get $0
   local.get $0
   f64.mul
   f64.mul
   local.get $0
   f64.const 1.58969099521155e-10
   f64.mul
   f64.const -2.5050760253406863e-08
   f64.add
   f64.mul
   f64.add
   f64.mul
   f64.sub
   f64.mul
   local.get $4
   f64.sub
   local.get $1
   f64.const -0.16666666666666632
   f64.mul
   f64.sub
   f64.sub
  else
   f64.const 1
   local.get $3
   local.get $3
   f64.mul
   local.tee $0
   f64.const 0.5
   f64.mul
   local.tee $1
   f64.sub
   local.tee $7
   f64.const 1
   local.get $7
   f64.sub
   local.get $1
   f64.sub
   local.get $0
   local.get $0
   local.get $0
   local.get $0
   f64.const 2.480158728947673e-05
   f64.mul
   f64.const -0.001388888888887411
   f64.add
   f64.mul
   f64.const 0.0416666666666666
   f64.add
   f64.mul
   local.get $0
   local.get $0
   f64.mul
   local.tee $1
   local.get $1
   f64.mul
   local.get $0
   local.get $0
   f64.const -1.1359647557788195e-11
   f64.mul
   f64.const 2.087572321298175e-09
   f64.add
   f64.mul
   f64.const -2.7557314351390663e-07
   f64.add
   f64.mul
   f64.add
   f64.mul
   local.get $3
   local.get $4
   f64.mul
   f64.sub
   f64.add
   f64.add
  end
  local.tee $0
  f64.neg
  local.get $0
  local.get $6
  i32.const 1
  i32.add
  i32.const 2
  i32.and
  select
 )
 (func $~lib/string/String.__concat (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  block $__inlined_func$~lib/string/String#concat
   local.get $1
   i32.const 20
   i32.sub
   i32.load offset=16
   i32.const 1
   i32.shr_u
   i32.const 1
   i32.shl
   local.tee $4
   local.get $0
   local.tee $2
   i32.const 20
   i32.sub
   i32.load offset=16
   i32.const 1
   i32.shr_u
   i32.const 1
   i32.shl
   local.tee $3
   i32.add
   local.tee $0
   i32.eqz
   if
    global.get $~lib/memory/__stack_pointer
    i32.const 4
    i32.add
    global.set $~lib/memory/__stack_pointer
    i32.const 1808
    local.set $0
    br $__inlined_func$~lib/string/String#concat
   end
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.const 1
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
   local.get $0
   local.get $2
   local.get $3
   call $~lib/memory/memory.copy
   local.get $0
   local.get $3
   i32.add
   local.get $1
   local.get $4
   call $~lib/memory/memory.copy
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
  end
  local.get $0
 )
 (func $~lib/array/Array<assembly/mat2/ReadonlyMat2>#__uset (param $0 i32) (param $1 i32) (param $2 i32)
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  local.get $2
  i32.store
  local.get $0
  local.get $2
  i32.const 1
  call $~lib/rt/itcms/__link
 )
 (func $assembly/mat2/equals (param $0 i32) (param $1 i32) (result i32)
  (local $2 f64)
  (local $3 f64)
  (local $4 f64)
  (local $5 f64)
  (local $6 f64)
  (local $7 f64)
  (local $8 f64)
  (local $9 f64)
  local.get $0
  i32.const 0
  call $~lib/typedarray/Float64Array#__get
  local.set $2
  local.get $0
  i32.const 1
  call $~lib/typedarray/Float64Array#__get
  local.set $3
  local.get $0
  i32.const 2
  call $~lib/typedarray/Float64Array#__get
  local.set $4
  local.get $0
  i32.const 3
  call $~lib/typedarray/Float64Array#__get
  local.set $5
  local.get $1
  i32.const 0
  call $~lib/typedarray/Float64Array#__get
  local.set $6
  local.get $1
  i32.const 1
  call $~lib/typedarray/Float64Array#__get
  local.set $7
  local.get $1
  i32.const 2
  call $~lib/typedarray/Float64Array#__get
  local.set $8
  local.get $1
  i32.const 3
  call $~lib/typedarray/Float64Array#__get
  local.set $9
  local.get $2
  local.get $6
  f64.sub
  f64.abs
  f64.const 1
  local.get $2
  f64.abs
  local.get $6
  f64.abs
  call $assembly/imports/MathUtil.max3
  f64.const 1e-06
  f64.mul
  f64.le
  if (result i32)
   local.get $3
   local.get $7
   f64.sub
   f64.abs
   f64.const 1
   local.get $3
   f64.abs
   local.get $7
   f64.abs
   call $assembly/imports/MathUtil.max3
   f64.const 1e-06
   f64.mul
   f64.le
  else
   i32.const 0
  end
  if (result i32)
   local.get $4
   local.get $8
   f64.sub
   f64.abs
   f64.const 1
   local.get $4
   f64.abs
   local.get $8
   f64.abs
   call $assembly/imports/MathUtil.max3
   f64.const 1e-06
   f64.mul
   f64.le
  else
   i32.const 0
  end
  if (result i32)
   local.get $5
   local.get $9
   f64.sub
   f64.abs
   f64.const 1
   local.get $5
   f64.abs
   local.get $9
   f64.abs
   call $assembly/imports/MathUtil.max3
   f64.const 1e-06
   f64.mul
   f64.le
  else
   i32.const 0
  end
 )
 (func $~lib/util/sort/COMPARATOR<f64>~anonymous|0 (param $0 f64) (param $1 f64) (result i32)
  (local $2 i64)
  (local $3 i64)
  local.get $0
  i64.reinterpret_f64
  local.tee $2
  local.get $2
  i64.const 63
  i64.shr_s
  i64.const 1
  i64.shr_u
  i64.xor
  local.tee $2
  local.get $1
  i64.reinterpret_f64
  local.tee $3
  local.get $3
  i64.const 63
  i64.shr_s
  i64.const 1
  i64.shr_u
  i64.xor
  local.tee $3
  i64.gt_s
  local.get $2
  local.get $3
  i64.lt_s
  i32.sub
 )
 (func $~lib/rt/__visit_members (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  block $folding-inner3
   block $folding-inner2
    block $folding-inner0
     block $invalid
      block $~lib/array/Array<i32>
       block $~lib/array/Array<assembly/mat2/ReadonlyMat2>
        block $~lib/string/String
         block $~lib/arraybuffer/ArrayBuffer
          local.get $0
          i32.const 8
          i32.sub
          i32.load
          br_table $~lib/arraybuffer/ArrayBuffer $~lib/string/String $folding-inner2 $folding-inner0 $folding-inner3 $folding-inner2 $folding-inner3 $folding-inner0 $folding-inner3 $~lib/array/Array<assembly/mat2/ReadonlyMat2> $~lib/array/Array<i32> $folding-inner0 $invalid
         end
         return
        end
        return
       end
       local.get $0
       i32.load offset=4
       local.tee $1
       local.get $0
       i32.load offset=12
       i32.const 2
       i32.shl
       i32.add
       local.set $2
       loop $while-continue|0
        local.get $1
        local.get $2
        i32.lt_u
        if
         local.get $1
         i32.load
         local.tee $3
         if
          local.get $3
          call $~lib/rt/itcms/__visit
         end
         local.get $1
         i32.const 4
         i32.add
         local.set $1
         br $while-continue|0
        end
       end
       local.get $0
       i32.load
       call $~lib/rt/itcms/__visit
       return
      end
      local.get $0
      i32.load
      call $~lib/rt/itcms/__visit
      return
     end
     unreachable
    end
    local.get $0
    i32.load offset=4
    call $~lib/rt/itcms/__visit
    return
   end
   local.get $0
   i32.load
   local.tee $0
   if
    local.get $0
    call $~lib/rt/itcms/__visit
   end
   return
  end
  local.get $0
  i32.load
  local.tee $0
  if
   local.get $0
   call $~lib/rt/itcms/__visit
  end
 )
 (func $~setArgumentsLength (param $0 i32)
  local.get $0
  global.set $~argumentsLength
 )
 (func $~start
  memory.size
  i32.const 16
  i32.shl
  i32.const 19812
  i32.sub
  i32.const 1
  i32.shr_u
  global.set $~lib/rt/itcms/threshold
  i32.const 1584
  call $~lib/rt/itcms/initLazy
  global.set $~lib/rt/itcms/pinSpace
  i32.const 1616
  call $~lib/rt/itcms/initLazy
  global.set $~lib/rt/itcms/toSpace
  i32.const 1696
  call $~lib/rt/itcms/initLazy
  global.set $~lib/rt/itcms/fromSpace
 )
 (func $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 3428
  i32.lt_s
  if
   i32.const 19840
   i32.const 19888
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
 )
 (func $assembly/mat2/str (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const -64
  i32.add
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=16
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=24
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=32
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=40
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=48
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=56
  global.get $~lib/memory/__stack_pointer
  i32.const 3216
  i32.store offset=56
  local.get $0
  i32.const 0
  call $~lib/typedarray/Float64Array#__get
  call $~lib/util/number/dtoa
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=60
  i32.const 3216
  local.get $1
  call $~lib/string/String.__concat
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=48
  global.get $~lib/memory/__stack_pointer
  i32.const 3248
  i32.store offset=52
  local.get $1
  i32.const 3248
  call $~lib/string/String.__concat
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=40
  local.get $0
  i32.const 1
  call $~lib/typedarray/Float64Array#__get
  call $~lib/util/number/dtoa
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store offset=44
  local.get $1
  local.get $2
  call $~lib/string/String.__concat
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=32
  global.get $~lib/memory/__stack_pointer
  i32.const 3248
  i32.store offset=36
  local.get $1
  i32.const 3248
  call $~lib/string/String.__concat
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=24
  local.get $0
  i32.const 2
  call $~lib/typedarray/Float64Array#__get
  call $~lib/util/number/dtoa
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store offset=28
  local.get $1
  local.get $2
  call $~lib/string/String.__concat
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=16
  global.get $~lib/memory/__stack_pointer
  i32.const 3248
  i32.store offset=20
  local.get $1
  i32.const 3248
  call $~lib/string/String.__concat
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=8
  local.get $0
  i32.const 3
  call $~lib/typedarray/Float64Array#__get
  call $~lib/util/number/dtoa
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=12
  local.get $1
  local.get $0
  call $~lib/string/String.__concat
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 3280
  i32.store offset=4
  local.get $0
  i32.const 3280
  call $~lib/string/String.__concat
  global.get $~lib/memory/__stack_pointer
  i32.const -64
  i32.sub
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/typedarray/Float64Array#constructor (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.const 5
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  global.get $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.const 2
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  i32.const 0
  call $~lib/arraybuffer/ArrayBufferView#set:buffer
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  i32.const 0
  i32.store offset=8
  local.get $1
  i32.const 134217727
  i32.gt_u
  if
   i32.const 1360
   i32.const 1408
   i32.const 18
   i32.const 57
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.const 3
  i32.shl
  local.tee $2
  i32.const 0
  call $~lib/rt/itcms/__new
  local.tee $1
  i32.store offset=4
  local.get $1
  local.get $2
  call $~lib/memory/memory.fill
  local.get $0
  local.get $1
  call $~lib/arraybuffer/ArrayBufferView#set:buffer
  local.get $0
  local.get $1
  i32.store offset=4
  local.get $0
  local.get $2
  i32.store offset=8
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $~lib/typedarray/Float64Array#slice (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.load offset=8
  i32.const 3
  i32.shr_u
  local.set $3
  local.get $1
  i32.const 0
  i32.lt_s
  if (result i32)
   local.get $1
   local.get $3
   i32.add
   local.tee $1
   i32.const 0
   local.get $1
   i32.const 0
   i32.gt_s
   select
  else
   local.get $1
   local.get $3
   local.get $1
   local.get $3
   i32.lt_s
   select
  end
  local.set $1
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  local.get $2
  i32.const 0
  i32.lt_s
  if (result i32)
   local.get $2
   local.get $3
   i32.add
   local.tee $2
   i32.const 0
   local.get $2
   i32.const 0
   i32.gt_s
   select
  else
   local.get $2
   local.get $3
   local.get $2
   local.get $3
   i32.lt_s
   select
  end
  local.get $1
  i32.sub
  local.tee $2
  i32.const 0
  local.get $2
  i32.const 0
  i32.gt_s
  select
  local.tee $2
  call $~lib/typedarray/Float64Array#constructor
  local.tee $3
  i32.store
  local.get $3
  i32.load offset=4
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 3
  i32.shl
  i32.add
  local.get $2
  i32.const 3
  i32.shl
  call $~lib/memory/memory.copy
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $3
 )
 (func $~lib/typedarray/Float64Array#subarray (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  local.tee $3
  i32.load offset=8
  i32.const 3
  i32.shr_u
  local.set $4
  local.get $1
  i32.const 0
  i32.lt_s
  if (result i32)
   local.get $1
   local.get $4
   i32.add
   local.tee $0
   i32.const 0
   local.get $0
   i32.const 0
   i32.gt_s
   select
  else
   local.get $1
   local.get $4
   local.get $1
   local.get $4
   i32.lt_s
   select
  end
  local.set $0
  local.get $2
  i32.const 0
  i32.lt_s
  if (result i32)
   local.get $2
   local.get $4
   i32.add
   local.tee $1
   i32.const 0
   local.get $1
   i32.const 0
   i32.gt_s
   select
  else
   local.get $2
   local.get $4
   local.get $2
   local.get $4
   i32.lt_s
   select
  end
  local.set $2
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.const 5
  call $~lib/rt/itcms/__new
  local.tee $1
  i32.store
  local.get $1
  local.get $3
  i32.load
  local.tee $4
  i32.store
  local.get $1
  local.get $4
  i32.const 0
  call $~lib/rt/itcms/__link
  local.get $1
  local.get $3
  i32.load offset=4
  local.get $0
  i32.const 3
  i32.shl
  i32.add
  i32.store offset=4
  local.get $1
  local.get $2
  local.get $0
  local.get $0
  local.get $2
  i32.lt_s
  select
  local.get $0
  i32.sub
  i32.const 3
  i32.shl
  i32.store offset=8
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $~lib/typedarray/Float64Array#map (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 f64)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $0
  i32.load offset=8
  i32.const 3
  i32.shr_u
  local.set $5
  local.get $0
  i32.load offset=4
  local.set $6
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.const 5
  call $~lib/rt/itcms/__new
  local.tee $2
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $5
  i32.const 3
  i32.shl
  local.tee $7
  i32.const 0
  call $~lib/rt/itcms/__new
  local.tee $3
  i32.store offset=4
  loop $for-loop|0
   local.get $4
   local.get $5
   i32.lt_s
   if
    local.get $6
    local.get $4
    i32.const 3
    i32.shl
    local.tee $8
    i32.add
    f64.load
    local.set $9
    i32.const 3
    global.set $~argumentsLength
    local.get $3
    local.get $8
    i32.add
    local.get $9
    local.get $4
    local.get $0
    local.get $1
    i32.load
    call_indirect $0 (type $f64_i32_i32_=>_f64)
    f64.store
    local.get $4
    i32.const 1
    i32.add
    local.set $4
    br $for-loop|0
   end
  end
  local.get $2
  local.get $3
  i32.store
  local.get $2
  local.get $3
  i32.const 0
  call $~lib/rt/itcms/__link
  local.get $2
  local.get $3
  i32.store offset=4
  local.get $2
  local.get $7
  i32.store offset=8
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $2
 )
 (func $~lib/typedarray/Float64Array#filter (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 f64)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $0
  i32.load offset=8
  i32.const 3
  i32.shr_u
  local.set $4
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.const 5
  call $~lib/rt/itcms/__new
  local.tee $5
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.const 3
  i32.shl
  i32.const 0
  call $~lib/rt/itcms/__new
  local.tee $3
  i32.store offset=4
  local.get $0
  i32.load offset=4
  local.set $6
  loop $for-loop|0
   local.get $4
   local.get $7
   i32.gt_s
   if
    local.get $6
    local.get $7
    i32.const 3
    i32.shl
    i32.add
    f64.load
    local.set $8
    i32.const 3
    global.set $~argumentsLength
    local.get $8
    local.get $7
    local.get $0
    local.get $1
    i32.load
    call_indirect $0 (type $f64_i32_i32_=>_i32)
    if
     local.get $3
     local.get $2
     i32.const 3
     i32.shl
     i32.add
     local.get $8
     f64.store
     local.get $2
     i32.const 1
     i32.add
     local.set $2
    end
    local.get $7
    i32.const 1
    i32.add
    local.set $7
    br $for-loop|0
   end
  end
  local.get $3
  local.set $0
  block $__inlined_func$~lib/rt/itcms/__renew
   local.get $2
   i32.const 3
   i32.shl
   local.tee $3
   local.tee $4
   local.get $0
   i32.const 20
   i32.sub
   local.tee $6
   i32.load
   i32.const -4
   i32.and
   i32.const 16
   i32.sub
   i32.le_u
   if
    local.get $6
    local.get $4
    i32.store offset=16
    br $__inlined_func$~lib/rt/itcms/__renew
   end
   local.get $4
   local.get $6
   i32.load offset=12
   call $~lib/rt/itcms/__new
   local.tee $1
   local.get $0
   local.get $4
   local.get $6
   i32.load offset=16
   local.tee $0
   local.get $0
   local.get $4
   i32.gt_u
   select
   call $~lib/memory/memory.copy
   local.get $1
   local.set $0
  end
  local.get $5
  local.get $0
  i32.store
  local.get $5
  local.get $0
  i32.const 0
  call $~lib/rt/itcms/__link
  local.get $5
  local.get $3
  i32.store offset=8
  local.get $5
  local.get $0
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $5
 )
 (func $~lib/util/number/dtoa (param $0 f64) (result i32)
  (local $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  f64.const 0
  f64.eq
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   i32.const 1840
   return
  end
  local.get $0
  local.get $0
  f64.sub
  f64.const 0
  f64.ne
  if
   local.get $0
   local.get $0
   f64.ne
   if
    global.get $~lib/memory/__stack_pointer
    i32.const 4
    i32.add
    global.set $~lib/memory/__stack_pointer
    i32.const 1872
    return
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   i32.const 1904
   i32.const 1952
   local.get $0
   f64.const 0
   f64.lt
   select
   return
  end
  i32.const 1984
  local.get $0
  call $~lib/util/number/dtoa_core
  i32.const 1
  i32.shl
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.const 1
  call $~lib/rt/itcms/__new
  local.tee $2
  i32.store
  local.get $2
  i32.const 1984
  local.get $1
  call $~lib/memory/memory.copy
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $2
 )
 (func $~lib/string/String#substring (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  i32.const 0
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 1
  i32.shr_u
  local.tee $2
  local.get $2
  i32.const 0
  i32.gt_s
  select
  local.tee $3
  local.get $1
  i32.const 0
  local.get $1
  i32.const 0
  i32.gt_s
  select
  local.tee $1
  local.get $2
  local.get $1
  local.get $2
  i32.lt_s
  select
  local.tee $1
  local.get $1
  local.get $3
  i32.lt_s
  select
  i32.const 1
  i32.shl
  local.tee $4
  local.get $3
  local.get $1
  local.get $1
  local.get $3
  i32.gt_s
  select
  i32.const 1
  i32.shl
  local.tee $1
  i32.sub
  local.tee $3
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   i32.const 1808
   return
  end
  i32.const 0
  local.get $4
  local.get $2
  i32.const 1
  i32.shl
  i32.eq
  local.get $1
  select
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $0
   return
  end
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.const 1
  call $~lib/rt/itcms/__new
  local.tee $2
  i32.store
  local.get $2
  local.get $0
  local.get $1
  i32.add
  local.get $3
  call $~lib/memory/memory.copy
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $2
 )
 (func $~lib/util/string/joinFloatArray<f64> (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $1
  i32.const 1
  i32.sub
  local.tee $4
  i32.const 0
  i32.lt_s
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   i32.const 1808
   return
  end
  block $folding-inner0
   local.get $4
   i32.eqz
   if
    local.get $0
    f64.load
    call $~lib/util/number/dtoa
    local.set $0
    br $folding-inner0
   end
   global.get $~lib/memory/__stack_pointer
   local.get $4
   local.get $2
   i32.const 20
   i32.sub
   i32.load offset=16
   i32.const 1
   i32.shr_u
   local.tee $5
   i32.const 28
   i32.add
   i32.mul
   i32.const 28
   i32.add
   local.tee $7
   i32.const 1
   i32.shl
   i32.const 1
   call $~lib/rt/itcms/__new
   local.tee $1
   i32.store
   loop $for-loop|0
    local.get $4
    local.get $6
    i32.gt_s
    if
     local.get $1
     local.get $3
     i32.const 1
     i32.shl
     i32.add
     local.get $0
     local.get $6
     i32.const 3
     i32.shl
     i32.add
     f64.load
     call $~lib/util/number/dtoa_buffered
     local.get $3
     i32.add
     local.set $3
     local.get $5
     if
      local.get $1
      local.get $3
      i32.const 1
      i32.shl
      i32.add
      local.get $2
      local.get $5
      i32.const 1
      i32.shl
      call $~lib/memory/memory.copy
      local.get $3
      local.get $5
      i32.add
      local.set $3
     end
     local.get $6
     i32.const 1
     i32.add
     local.set $6
     br $for-loop|0
    end
   end
   local.get $7
   local.get $1
   local.get $3
   i32.const 1
   i32.shl
   i32.add
   local.get $0
   local.get $4
   i32.const 3
   i32.shl
   i32.add
   f64.load
   call $~lib/util/number/dtoa_buffered
   local.get $3
   i32.add
   local.tee $0
   i32.gt_s
   if
    local.get $1
    local.get $0
    call $~lib/string/String#substring
    local.set $0
    br $folding-inner0
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $1
   return
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $assembly/mat2/mat2#constructor (param $0 i32) (param $1 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.const 4
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  local.get $1
  call $~lib/typedarray/Float64Array#constructor
  local.tee $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $assembly/mat2/create (result i32)
  (local $0 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.const 4
  call $assembly/mat2/mat2#constructor
  local.tee $0
  i32.store
  local.get $0
  i32.const 1
  f64.const 0
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 2
  f64.const 0
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 0
  f64.const 1
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 3
  f64.const 1
  call $~lib/typedarray/Float64Array#__set
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $assembly/mat2/fromValues (param $0 f64) (param $1 f64) (param $2 f64) (param $3 f64) (result i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.const 4
  call $assembly/mat2/mat2#constructor
  local.tee $4
  i32.store
  local.get $4
  i32.const 0
  local.get $0
  call $~lib/typedarray/Float64Array#__set
  local.get $4
  i32.const 1
  local.get $1
  call $~lib/typedarray/Float64Array#__set
  local.get $4
  i32.const 2
  local.get $2
  call $~lib/typedarray/Float64Array#__set
  local.get $4
  i32.const 3
  local.get $3
  call $~lib/typedarray/Float64Array#__set
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $4
 )
 (func $assembly/mat2/LDU (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  (local $4 i32)
  (local $5 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $0
  i32.const 2
  local.get $3
  i32.const 2
  call $~lib/typedarray/Float64Array#__get
  local.get $3
  i32.const 0
  call $~lib/typedarray/Float64Array#__get
  f64.div
  call $~lib/typedarray/Float64Array#__set
  local.get $2
  i32.const 0
  local.get $3
  i32.const 0
  call $~lib/typedarray/Float64Array#__get
  call $~lib/typedarray/Float64Array#__set
  local.get $2
  i32.const 1
  local.get $3
  i32.const 1
  call $~lib/typedarray/Float64Array#__get
  call $~lib/typedarray/Float64Array#__set
  local.get $2
  i32.const 3
  local.get $3
  i32.const 3
  call $~lib/typedarray/Float64Array#__get
  local.get $0
  i32.const 2
  call $~lib/typedarray/Float64Array#__get
  local.get $2
  i32.const 1
  call $~lib/typedarray/Float64Array#__get
  f64.mul
  f64.sub
  call $~lib/typedarray/Float64Array#__set
  global.get $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.const 0
  call $~lib/rt/itcms/__new
  local.tee $4
  i32.store
  i32.const 16
  i32.const 9
  call $~lib/rt/itcms/__new
  local.tee $3
  local.get $4
  i32.store
  local.get $3
  local.get $4
  i32.const 0
  call $~lib/rt/itcms/__link
  local.get $3
  local.get $4
  i32.store offset=4
  local.get $3
  i32.const 12
  i32.store offset=8
  local.get $3
  i32.const 3
  i32.store offset=12
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $3
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.load offset=4
  i32.store offset=4
  local.get $3
  i32.const 0
  local.get $0
  call $~lib/array/Array<assembly/mat2/ReadonlyMat2>#__uset
  local.get $3
  i32.const 1
  local.get $1
  call $~lib/array/Array<assembly/mat2/ReadonlyMat2>#__uset
  local.get $3
  i32.const 2
  local.get $2
  call $~lib/array/Array<assembly/mat2/ReadonlyMat2>#__uset
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $3
 )
 (func $export:~lib/arraybuffer/ArrayBufferView#get:buffer (param $0 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.load
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $export:~lib/arraybuffer/ArrayBufferView#get:dataStart (param $0 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.load offset=4
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $export:~lib/arraybuffer/ArrayBufferView#get:byteLength (param $0 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.load offset=8
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $export:~lib/arraybuffer/ArrayBufferView#get:byteOffset (param $0 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.load offset=4
  local.get $0
  i32.load
  i32.sub
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $export:assembly/mat2/ReadonlyVec2#constructor (param $0 i32) (param $1 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.const 8
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  local.get $1
  call $~lib/typedarray/Float64Array#constructor
  local.tee $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $export:~lib/typedarray/Float64Array#get:length (param $0 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.load offset=8
  i32.const 3
  i32.shr_u
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $export:~lib/typedarray/Float64Array#at (param $0 i32) (param $1 i32) (result f64)
  (local $2 i32)
  (local $3 f64)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $1
  i32.const 0
  local.get $0
  local.tee $2
  i32.load offset=8
  i32.const 3
  i32.shr_u
  local.tee $0
  local.get $1
  i32.const 0
  i32.ge_s
  select
  i32.add
  local.set $1
  local.get $0
  local.get $1
  i32.le_u
  if
   i32.const 1168
   i32.const 1232
   i32.const 1397
   i32.const 33
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  i32.load offset=4
  local.get $1
  i32.const 3
  i32.shl
  i32.add
  f64.load
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $export:~lib/typedarray/Float64Array#includes@varargs (param $0 i32) (param $1 f64) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 f64)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  block $1of1
   block $0of1
    block $outOfRange
     global.get $~argumentsLength
     i32.const 1
     i32.sub
     br_table $0of1 $1of1 $outOfRange
    end
    unreachable
   end
   i32.const 0
   local.set $2
  end
  block $~lib/typedarray/INCLUDES<~lib/typedarray/Float64Array,f64>|inlined.0 (result i32)
   i32.const 0
   local.get $2
   local.get $0
   i32.load offset=8
   i32.const 3
   i32.shr_u
   local.tee $3
   i32.ge_s
   i32.const 1
   local.get $3
   select
   br_if $~lib/typedarray/INCLUDES<~lib/typedarray/Float64Array,f64>|inlined.0
   drop
   local.get $2
   i32.const 0
   i32.lt_s
   if
    local.get $2
    local.get $3
    i32.add
    local.tee $2
    i32.const 0
    local.get $2
    i32.const 0
    i32.gt_s
    select
    local.set $2
   end
   local.get $0
   i32.load offset=4
   local.set $0
   loop $while-continue|0
    local.get $2
    local.get $3
    i32.lt_s
    if
     i32.const 1
     i32.const 1
     local.get $0
     local.get $2
     i32.const 3
     i32.shl
     i32.add
     f64.load
     local.tee $4
     local.get $4
     f64.ne
     local.get $1
     local.get $1
     f64.ne
     i32.and
     local.get $1
     local.get $4
     f64.eq
     select
     br_if $~lib/typedarray/INCLUDES<~lib/typedarray/Float64Array,f64>|inlined.0
     drop
     local.get $2
     i32.const 1
     i32.add
     local.set $2
     br $while-continue|0
    end
   end
   i32.const 0
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $export:~lib/typedarray/Float64Array#indexOf@varargs (param $0 i32) (param $1 f64) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  block $1of1
   block $0of1
    block $outOfRange
     global.get $~argumentsLength
     i32.const 1
     i32.sub
     br_table $0of1 $1of1 $outOfRange
    end
    unreachable
   end
   i32.const 0
   local.set $2
  end
  i32.const -1
  local.set $3
  block $~lib/typedarray/INDEX_OF<~lib/typedarray/Float64Array,f64>|inlined.0
   local.get $2
   local.get $0
   i32.load offset=8
   i32.const 3
   i32.shr_u
   local.tee $4
   i32.ge_s
   i32.const 1
   local.get $4
   select
   br_if $~lib/typedarray/INDEX_OF<~lib/typedarray/Float64Array,f64>|inlined.0
   local.get $2
   i32.const 0
   i32.lt_s
   if
    local.get $2
    local.get $4
    i32.add
    local.tee $2
    i32.const 0
    local.get $2
    i32.const 0
    i32.gt_s
    select
    local.set $2
   end
   local.get $0
   i32.load offset=4
   local.set $0
   loop $while-continue|0
    local.get $2
    local.get $4
    i32.lt_s
    if
     local.get $1
     local.get $0
     local.get $2
     local.tee $3
     i32.const 3
     i32.shl
     i32.add
     f64.load
     f64.eq
     br_if $~lib/typedarray/INDEX_OF<~lib/typedarray/Float64Array,f64>|inlined.0
     local.get $3
     i32.const 1
     i32.add
     local.set $2
     br $while-continue|0
    end
   end
   i32.const -1
   local.set $3
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $3
 )
 (func $export:~lib/typedarray/Float64Array#lastIndexOf@varargs (param $0 i32) (param $1 f64) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  block $1of1
   block $0of1
    block $outOfRange
     global.get $~argumentsLength
     i32.const 1
     i32.sub
     br_table $0of1 $1of1 $outOfRange
    end
    unreachable
   end
   local.get $0
   i32.load offset=8
   i32.const 3
   i32.shr_u
   local.set $2
  end
  local.get $0
  local.set $3
  i32.const -1
  local.set $0
  block $~lib/typedarray/LAST_INDEX_OF<~lib/typedarray/Float64Array,f64>|inlined.0
   local.get $3
   i32.load offset=8
   i32.const 3
   i32.shr_u
   local.tee $4
   i32.eqz
   br_if $~lib/typedarray/LAST_INDEX_OF<~lib/typedarray/Float64Array,f64>|inlined.0
   local.get $2
   local.get $4
   i32.add
   local.get $4
   i32.const 1
   i32.sub
   local.get $2
   local.get $2
   local.get $4
   i32.ge_s
   select
   local.get $2
   i32.const 0
   i32.lt_s
   select
   local.set $0
   local.get $3
   i32.load offset=4
   local.set $2
   loop $while-continue|0
    local.get $0
    i32.const 0
    i32.ge_s
    if
     local.get $1
     local.get $2
     local.get $0
     i32.const 3
     i32.shl
     i32.add
     f64.load
     f64.eq
     br_if $~lib/typedarray/LAST_INDEX_OF<~lib/typedarray/Float64Array,f64>|inlined.0
     local.get $0
     i32.const 1
     i32.sub
     local.set $0
     br $while-continue|0
    end
   end
   i32.const -1
   local.set $0
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $export:~lib/typedarray/Float64Array#fill@varargs (param $0 i32) (param $1 f64) (param $2 i32) (param $3 i32) (result i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  block $2of2
   block $1of2
    block $0of2
     block $outOfRange
      global.get $~argumentsLength
      i32.const 1
      i32.sub
      br_table $0of2 $1of2 $2of2 $outOfRange
     end
     unreachable
    end
    i32.const 0
    local.set $2
   end
   i32.const 2147483647
   local.set $3
  end
  local.get $0
  local.tee $4
  i32.load offset=4
  local.set $6
  local.get $0
  i32.load offset=8
  i32.const 3
  i32.shr_u
  local.set $5
  local.get $2
  i32.const 0
  i32.lt_s
  if (result i32)
   local.get $2
   local.get $5
   i32.add
   local.tee $0
   i32.const 0
   local.get $0
   i32.const 0
   i32.gt_s
   select
  else
   local.get $2
   local.get $5
   local.get $2
   local.get $5
   i32.lt_s
   select
  end
  local.set $0
  local.get $3
  i32.const 0
  i32.lt_s
  if (result i32)
   local.get $3
   local.get $5
   i32.add
   local.tee $2
   i32.const 0
   local.get $2
   i32.const 0
   i32.gt_s
   select
  else
   local.get $3
   local.get $5
   local.get $3
   local.get $5
   i32.lt_s
   select
  end
  local.set $2
  loop $for-loop|0
   local.get $0
   local.get $2
   i32.lt_s
   if
    local.get $6
    local.get $0
    i32.const 3
    i32.shl
    i32.add
    local.get $1
    f64.store
    local.get $0
    i32.const 1
    i32.add
    local.set $0
    br $for-loop|0
   end
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $4
 )
 (func $export:~lib/typedarray/Float64Array#sort@varargs (param $0 i32) (param $1 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  block $1of1
   block $0of1
    block $outOfRange
     global.get $~argumentsLength
     br_table $0of1 $1of1 $outOfRange
    end
    unreachable
   end
   i32.const 3312
   local.set $1
   global.get $~lib/memory/__stack_pointer
   i32.const 3312
   i32.store
  end
  local.get $0
  local.get $1
  call $~lib/typedarray/Float64Array#sort
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $export:~lib/typedarray/Float64Array#slice@varargs (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  block $2of2
   block $1of2
    block $0of2
     block $outOfRange
      global.get $~argumentsLength
      br_table $0of2 $1of2 $2of2 $outOfRange
     end
     unreachable
    end
    i32.const 0
    local.set $1
   end
   i32.const 2147483647
   local.set $2
  end
  local.get $0
  local.get $1
  local.get $2
  call $~lib/typedarray/Float64Array#slice
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $export:~lib/typedarray/Float64Array#subarray@varargs (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  block $2of2
   block $1of2
    block $0of2
     block $outOfRange
      global.get $~argumentsLength
      br_table $0of2 $1of2 $2of2 $outOfRange
     end
     unreachable
    end
    i32.const 0
    local.set $1
   end
   i32.const 2147483647
   local.set $2
  end
  local.get $0
  local.get $1
  local.get $2
  call $~lib/typedarray/Float64Array#subarray
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $export:~lib/typedarray/Float64Array#copyWithin@varargs (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  block $1of1
   block $0of1
    block $outOfRange
     global.get $~argumentsLength
     i32.const 2
     i32.sub
     br_table $0of1 $1of1 $outOfRange
    end
    unreachable
   end
   i32.const 2147483647
   local.set $3
  end
  local.get $0
  local.get $1
  local.get $2
  local.get $3
  call $~lib/typedarray/Float64Array#copyWithin
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $export:~lib/typedarray/Float64Array#map (param $0 i32) (param $1 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $0
  local.get $1
  call $~lib/typedarray/Float64Array#map
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $export:~lib/typedarray/Float64Array#filter (param $0 i32) (param $1 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $0
  local.get $1
  call $~lib/typedarray/Float64Array#filter
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $export:~lib/typedarray/Float64Array#findIndex (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 f64)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $0
  i32.load offset=4
  local.set $3
  local.get $0
  i32.load offset=8
  i32.const 3
  i32.shr_u
  local.set $4
  block $~lib/typedarray/FIND_INDEX<~lib/typedarray/Float64Array,f64>|inlined.0
   loop $for-loop|0
    local.get $2
    local.get $4
    i32.lt_s
    if
     local.get $3
     local.get $2
     i32.const 3
     i32.shl
     i32.add
     f64.load
     i32.const 3
     global.set $~argumentsLength
     local.get $2
     local.get $0
     local.get $1
     i32.load
     call_indirect $0 (type $f64_i32_i32_=>_i32)
     br_if $~lib/typedarray/FIND_INDEX<~lib/typedarray/Float64Array,f64>|inlined.0
     local.get $2
     i32.const 1
     i32.add
     local.set $2
     br $for-loop|0
    end
   end
   i32.const -1
   local.set $2
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $2
 )
 (func $export:~lib/typedarray/Float64Array#some (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 f64)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  block $~lib/typedarray/SOME<~lib/typedarray/Float64Array,f64>|inlined.0 (result i32)
   local.get $0
   i32.load offset=4
   local.set $3
   local.get $0
   i32.load offset=8
   i32.const 3
   i32.shr_u
   local.set $4
   loop $for-loop|0
    local.get $2
    local.get $4
    i32.lt_s
    if
     local.get $3
     local.get $2
     i32.const 3
     i32.shl
     i32.add
     f64.load
     local.set $5
     i32.const 3
     global.set $~argumentsLength
     i32.const 1
     local.get $5
     local.get $2
     local.get $0
     local.get $1
     i32.load
     call_indirect $0 (type $f64_i32_i32_=>_i32)
     br_if $~lib/typedarray/SOME<~lib/typedarray/Float64Array,f64>|inlined.0
     drop
     local.get $2
     i32.const 1
     i32.add
     local.set $2
     br $for-loop|0
    end
   end
   i32.const 0
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $export:~lib/typedarray/Float64Array#every (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 f64)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  block $~lib/typedarray/EVERY<~lib/typedarray/Float64Array,f64>|inlined.0 (result i32)
   local.get $0
   i32.load offset=4
   local.set $3
   local.get $0
   i32.load offset=8
   i32.const 3
   i32.shr_u
   local.set $4
   loop $for-loop|0
    local.get $2
    local.get $4
    i32.lt_s
    if
     local.get $3
     local.get $2
     i32.const 3
     i32.shl
     i32.add
     f64.load
     local.set $5
     i32.const 3
     global.set $~argumentsLength
     i32.const 0
     local.get $5
     local.get $2
     local.get $0
     local.get $1
     i32.load
     call_indirect $0 (type $f64_i32_i32_=>_i32)
     i32.eqz
     br_if $~lib/typedarray/EVERY<~lib/typedarray/Float64Array,f64>|inlined.0
     drop
     local.get $2
     i32.const 1
     i32.add
     local.set $2
     br $for-loop|0
    end
   end
   i32.const 1
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $export:~lib/typedarray/Float64Array#forEach (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 f64)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $0
  i32.load offset=4
  local.set $3
  local.get $0
  i32.load offset=8
  i32.const 3
  i32.shr_u
  local.set $4
  loop $for-loop|0
   local.get $2
   local.get $4
   i32.lt_s
   if
    local.get $3
    local.get $2
    i32.const 3
    i32.shl
    i32.add
    f64.load
    i32.const 3
    global.set $~argumentsLength
    local.get $2
    local.get $0
    local.get $1
    i32.load
    call_indirect $0 (type $f64_i32_i32_=>_none)
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    br $for-loop|0
   end
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $export:~lib/typedarray/Float64Array#reverse (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 f64)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.load offset=4
  local.set $4
  local.get $0
  i32.load offset=8
  i32.const 3
  i32.shr_u
  i32.const 1
  i32.sub
  local.set $2
  loop $for-loop|0
   local.get $1
   local.get $2
   i32.lt_u
   if
    local.get $4
    local.get $1
    i32.const 3
    i32.shl
    i32.add
    local.tee $3
    f64.load
    local.set $5
    local.get $3
    local.get $4
    local.get $2
    i32.const 3
    i32.shl
    i32.add
    local.tee $3
    f64.load
    f64.store
    local.get $3
    local.get $5
    f64.store
    local.get $1
    i32.const 1
    i32.add
    local.set $1
    local.get $2
    i32.const 1
    i32.sub
    local.set $2
    br $for-loop|0
   end
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $export:~lib/typedarray/Float64Array#join@varargs (param $0 i32) (param $1 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  block $1of1
   block $0of1
    block $outOfRange
     global.get $~argumentsLength
     br_table $0of1 $1of1 $outOfRange
    end
    unreachable
   end
   i32.const 2976
   local.set $1
   global.get $~lib/memory/__stack_pointer
   i32.const 2976
   i32.store
  end
  local.get $0
  local.get $1
  call $~lib/typedarray/Float64Array#join
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $export:~lib/typedarray/Float64Array#toString (param $0 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 2976
  i32.store
  local.get $0
  i32.const 2976
  call $~lib/typedarray/Float64Array#join
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $export:assembly/mat2/mat2#constructor (param $0 i32) (param $1 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  local.get $1
  call $assembly/mat2/mat2#constructor
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $export:assembly/mat2/ReadonlyMat2#constructor (param $0 i32) (param $1 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.const 6
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  local.get $1
  call $assembly/mat2/mat2#constructor
  local.tee $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $export:assembly/mat2/clone (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.const 4
  call $assembly/mat2/mat2#constructor
  local.tee $1
  i32.store
  local.get $1
  i32.const 0
  local.get $0
  i32.const 0
  call $~lib/typedarray/Float64Array#__get
  call $~lib/typedarray/Float64Array#__set
  local.get $1
  i32.const 1
  local.get $0
  i32.const 1
  call $~lib/typedarray/Float64Array#__get
  call $~lib/typedarray/Float64Array#__set
  local.get $1
  i32.const 2
  local.get $0
  i32.const 2
  call $~lib/typedarray/Float64Array#__get
  call $~lib/typedarray/Float64Array#__set
  local.get $1
  i32.const 3
  local.get $0
  i32.const 3
  call $~lib/typedarray/Float64Array#__get
  call $~lib/typedarray/Float64Array#__set
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $export:assembly/mat2/copy (param $0 i32) (param $1 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $0
  i32.const 0
  local.get $1
  i32.const 0
  call $~lib/typedarray/Float64Array#__get
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 1
  local.get $1
  i32.const 1
  call $~lib/typedarray/Float64Array#__get
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 2
  local.get $1
  i32.const 2
  call $~lib/typedarray/Float64Array#__get
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 3
  local.get $1
  i32.const 3
  call $~lib/typedarray/Float64Array#__get
  call $~lib/typedarray/Float64Array#__set
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $export:assembly/mat2/identity (param $0 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.const 0
  f64.const 1
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 1
  f64.const 0
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 2
  f64.const 0
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 3
  f64.const 1
  call $~lib/typedarray/Float64Array#__set
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $export:assembly/mat2/set (param $0 i32) (param $1 f64) (param $2 f64) (param $3 f64) (param $4 f64) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.const 0
  local.get $1
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 1
  local.get $2
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 2
  local.get $3
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 3
  local.get $4
  call $~lib/typedarray/Float64Array#__set
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $export:assembly/mat2/transpose (param $0 i32) (param $1 i32) (result i32)
  (local $2 f64)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $0
  local.get $1
  i32.eq
  if
   local.get $1
   i32.const 1
   call $~lib/typedarray/Float64Array#__get
   local.set $2
   local.get $0
   i32.const 1
   local.get $1
   i32.const 2
   call $~lib/typedarray/Float64Array#__get
   call $~lib/typedarray/Float64Array#__set
   local.get $0
   i32.const 2
   local.get $2
   call $~lib/typedarray/Float64Array#__set
  else
   local.get $0
   i32.const 0
   local.get $1
   i32.const 0
   call $~lib/typedarray/Float64Array#__get
   call $~lib/typedarray/Float64Array#__set
   local.get $0
   i32.const 1
   local.get $1
   i32.const 2
   call $~lib/typedarray/Float64Array#__get
   call $~lib/typedarray/Float64Array#__set
   local.get $0
   i32.const 2
   local.get $1
   i32.const 1
   call $~lib/typedarray/Float64Array#__get
   call $~lib/typedarray/Float64Array#__set
   local.get $0
   i32.const 3
   local.get $1
   i32.const 3
   call $~lib/typedarray/Float64Array#__get
   call $~lib/typedarray/Float64Array#__set
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $export:assembly/mat2/invert (param $0 i32) (param $1 i32) (result i32)
  (local $2 f64)
  (local $3 f64)
  (local $4 f64)
  (local $5 f64)
  (local $6 f64)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  call $~lib/typedarray/Float64Array#__get
  local.set $3
  local.get $1
  i32.const 1
  call $~lib/typedarray/Float64Array#__get
  local.set $4
  local.get $1
  i32.const 2
  call $~lib/typedarray/Float64Array#__get
  local.set $5
  block $__inlined_func$assembly/mat2/invert
   local.get $3
   local.get $1
   i32.const 3
   call $~lib/typedarray/Float64Array#__get
   local.tee $2
   f64.mul
   local.get $5
   local.get $4
   f64.mul
   f64.sub
   local.tee $6
   i64.reinterpret_f64
   i64.const 1
   i64.shl
   i64.const 2
   i64.sub
   i64.const -9007199254740994
   i64.gt_u
   if
    i32.const 0
    local.set $0
    br $__inlined_func$assembly/mat2/invert
   end
   local.get $0
   i32.const 0
   local.get $2
   f64.const 1
   local.get $6
   f64.div
   local.tee $2
   f64.mul
   call $~lib/typedarray/Float64Array#__set
   local.get $0
   i32.const 1
   local.get $4
   f64.neg
   local.get $2
   f64.mul
   call $~lib/typedarray/Float64Array#__set
   local.get $0
   i32.const 2
   local.get $5
   f64.neg
   local.get $2
   f64.mul
   call $~lib/typedarray/Float64Array#__set
   local.get $0
   i32.const 3
   local.get $3
   local.get $2
   f64.mul
   call $~lib/typedarray/Float64Array#__set
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $export:assembly/mat2/adjoint (param $0 i32) (param $1 i32) (result i32)
  (local $2 f64)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  call $~lib/typedarray/Float64Array#__get
  local.set $2
  local.get $0
  i32.const 0
  local.get $1
  i32.const 3
  call $~lib/typedarray/Float64Array#__get
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 1
  local.get $1
  i32.const 1
  call $~lib/typedarray/Float64Array#__get
  f64.neg
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 2
  local.get $1
  i32.const 2
  call $~lib/typedarray/Float64Array#__get
  f64.neg
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 3
  local.get $2
  call $~lib/typedarray/Float64Array#__set
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $export:assembly/mat2/determinant (param $0 i32) (result f64)
  (local $1 f64)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.const 0
  call $~lib/typedarray/Float64Array#__get
  local.get $0
  i32.const 3
  call $~lib/typedarray/Float64Array#__get
  f64.mul
  local.get $0
  i32.const 2
  call $~lib/typedarray/Float64Array#__get
  local.get $0
  i32.const 1
  call $~lib/typedarray/Float64Array#__get
  f64.mul
  f64.sub
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $export:assembly/mat2/multiply (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store offset=8
  local.get $0
  local.get $1
  local.get $2
  call $assembly/mat2/multiply
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $export:assembly/mat2/rotate (param $0 i32) (param $1 i32) (param $2 f64) (result i32)
  (local $3 f64)
  (local $4 f64)
  (local $5 f64)
  (local $6 f64)
  (local $7 f64)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  call $~lib/typedarray/Float64Array#__get
  local.set $4
  local.get $1
  i32.const 1
  call $~lib/typedarray/Float64Array#__get
  local.set $5
  local.get $1
  i32.const 2
  call $~lib/typedarray/Float64Array#__get
  local.set $6
  local.get $1
  i32.const 3
  call $~lib/typedarray/Float64Array#__get
  local.set $7
  local.get $2
  call $~lib/math/NativeMath.sin
  local.set $3
  local.get $0
  i32.const 0
  local.get $4
  local.get $2
  call $~lib/math/NativeMath.cos
  local.tee $2
  f64.mul
  local.get $6
  local.get $3
  f64.mul
  f64.add
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 1
  local.get $5
  local.get $2
  f64.mul
  local.get $7
  local.get $3
  f64.mul
  f64.add
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 2
  local.get $4
  local.get $3
  f64.neg
  f64.mul
  local.get $6
  local.get $2
  f64.mul
  f64.add
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 3
  local.get $5
  local.get $3
  f64.neg
  f64.mul
  local.get $7
  local.get $2
  f64.mul
  f64.add
  call $~lib/typedarray/Float64Array#__set
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $export:assembly/mat2/scale (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 f64)
  (local $4 f64)
  (local $5 f64)
  (local $6 f64)
  (local $7 f64)
  (local $8 f64)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store offset=8
  local.get $1
  i32.const 0
  call $~lib/typedarray/Float64Array#__get
  local.set $5
  local.get $1
  i32.const 1
  call $~lib/typedarray/Float64Array#__get
  local.set $6
  local.get $1
  i32.const 2
  call $~lib/typedarray/Float64Array#__get
  local.set $7
  local.get $1
  i32.const 3
  call $~lib/typedarray/Float64Array#__get
  local.set $8
  local.get $2
  i32.const 0
  call $~lib/typedarray/Float64Array#__get
  local.set $3
  local.get $2
  i32.const 1
  call $~lib/typedarray/Float64Array#__get
  local.set $4
  local.get $0
  i32.const 0
  local.get $5
  local.get $3
  f64.mul
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 1
  local.get $6
  local.get $3
  f64.mul
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 2
  local.get $7
  local.get $4
  f64.mul
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 3
  local.get $8
  local.get $4
  f64.mul
  call $~lib/typedarray/Float64Array#__set
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $export:assembly/mat2/fromRotation (param $0 i32) (param $1 f64) (result i32)
  (local $2 f64)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $1
  call $~lib/math/NativeMath.sin
  local.set $2
  local.get $0
  i32.const 0
  local.get $1
  call $~lib/math/NativeMath.cos
  local.tee $1
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 1
  local.get $2
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 2
  local.get $2
  f64.neg
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 3
  local.get $1
  call $~lib/typedarray/Float64Array#__set
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $export:assembly/mat2/fromScaling (param $0 i32) (param $1 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $0
  i32.const 0
  local.get $1
  i32.const 0
  call $~lib/typedarray/Float64Array#__get
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 1
  f64.const 0
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 2
  f64.const 0
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 3
  local.get $1
  i32.const 1
  call $~lib/typedarray/Float64Array#__get
  call $~lib/typedarray/Float64Array#__set
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $export:assembly/mat2/str (param $0 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  call $assembly/mat2/str
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $export:assembly/mat2/frob (param $0 i32) (result f64)
  (local $1 f64)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.const 0
  call $~lib/typedarray/Float64Array#__get
  local.get $0
  i32.const 1
  call $~lib/typedarray/Float64Array#__get
  local.get $0
  i32.const 2
  call $~lib/typedarray/Float64Array#__get
  local.get $0
  i32.const 3
  call $~lib/typedarray/Float64Array#__get
  f64.const 0
  f64.const 0
  f64.const 0
  f64.const 0
  f64.const 0
  f64.const 0
  f64.const 0
  f64.const 0
  f64.const 0
  f64.const 0
  f64.const 0
  f64.const 0
  call $assembly/imports/MathUtil.hypot
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $export:assembly/mat2/LDU (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=12
  local.get $0
  local.get $1
  local.get $2
  local.get $3
  call $assembly/mat2/LDU
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $export:assembly/mat2/add (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store offset=8
  local.get $0
  i32.const 0
  local.get $1
  i32.const 0
  call $~lib/typedarray/Float64Array#__get
  local.get $2
  i32.const 0
  call $~lib/typedarray/Float64Array#__get
  f64.add
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 1
  local.get $1
  i32.const 1
  call $~lib/typedarray/Float64Array#__get
  local.get $2
  i32.const 1
  call $~lib/typedarray/Float64Array#__get
  f64.add
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 2
  local.get $1
  i32.const 2
  call $~lib/typedarray/Float64Array#__get
  local.get $2
  i32.const 2
  call $~lib/typedarray/Float64Array#__get
  f64.add
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 3
  local.get $1
  i32.const 3
  call $~lib/typedarray/Float64Array#__get
  local.get $2
  i32.const 3
  call $~lib/typedarray/Float64Array#__get
  f64.add
  call $~lib/typedarray/Float64Array#__set
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $export:assembly/mat2/subtract (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store offset=8
  local.get $0
  local.get $1
  local.get $2
  call $assembly/mat2/subtract
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $export:assembly/mat2/exactEquals (param $0 i32) (param $1 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $0
  i32.const 0
  call $~lib/typedarray/Float64Array#__get
  local.get $1
  i32.const 0
  call $~lib/typedarray/Float64Array#__get
  f64.eq
  if (result i32)
   local.get $0
   i32.const 1
   call $~lib/typedarray/Float64Array#__get
   local.get $1
   i32.const 1
   call $~lib/typedarray/Float64Array#__get
   f64.eq
  else
   i32.const 0
  end
  if (result i32)
   local.get $0
   i32.const 2
   call $~lib/typedarray/Float64Array#__get
   local.get $1
   i32.const 2
   call $~lib/typedarray/Float64Array#__get
   f64.eq
  else
   i32.const 0
  end
  if (result i32)
   local.get $0
   i32.const 3
   call $~lib/typedarray/Float64Array#__get
   local.get $1
   i32.const 3
   call $~lib/typedarray/Float64Array#__get
   f64.eq
  else
   i32.const 0
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $export:assembly/mat2/equals (param $0 i32) (param $1 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $0
  local.get $1
  call $assembly/mat2/equals
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $export:assembly/mat2/multiplyScalar (param $0 i32) (param $1 i32) (param $2 f64) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $0
  i32.const 0
  local.get $1
  i32.const 0
  call $~lib/typedarray/Float64Array#__get
  local.get $2
  f64.mul
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 1
  local.get $1
  i32.const 1
  call $~lib/typedarray/Float64Array#__get
  local.get $2
  f64.mul
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 2
  local.get $1
  i32.const 2
  call $~lib/typedarray/Float64Array#__get
  local.get $2
  f64.mul
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 3
  local.get $1
  i32.const 3
  call $~lib/typedarray/Float64Array#__get
  local.get $2
  f64.mul
  call $~lib/typedarray/Float64Array#__set
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $export:assembly/mat2/multiplyScalarAndAdd (param $0 i32) (param $1 i32) (param $2 i32) (param $3 f64) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store offset=8
  local.get $0
  i32.const 0
  local.get $1
  i32.const 0
  call $~lib/typedarray/Float64Array#__get
  local.get $2
  i32.const 0
  call $~lib/typedarray/Float64Array#__get
  local.get $3
  f64.mul
  f64.add
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 1
  local.get $1
  i32.const 1
  call $~lib/typedarray/Float64Array#__get
  local.get $2
  i32.const 1
  call $~lib/typedarray/Float64Array#__get
  local.get $3
  f64.mul
  f64.add
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 2
  local.get $1
  i32.const 2
  call $~lib/typedarray/Float64Array#__get
  local.get $2
  i32.const 2
  call $~lib/typedarray/Float64Array#__get
  local.get $3
  f64.mul
  f64.add
  call $~lib/typedarray/Float64Array#__set
  local.get $0
  i32.const 3
  local.get $1
  i32.const 3
  call $~lib/typedarray/Float64Array#__get
  local.get $2
  i32.const 3
  call $~lib/typedarray/Float64Array#__get
  local.get $3
  f64.mul
  f64.add
  call $~lib/typedarray/Float64Array#__set
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
)
