/**

When a new Float32Array object is created, it is initialized to 0's by
the browser. However, when a new Array object is created, its initial
values are undefined. When an Array object is used, in order to prevent
the code from breaking, we need to explicitly initialize values to 0.
However, this is a redundant operation with Float32Array.

This benchmark tests which is faster: checking whether an initial value
is 0, or just setting it outright.

RESULT

    Array with initial value test !== 0 x 8,384,375 ops/sec ±4.36% (50 runs sampled)
    Array with initial value test === undefined x 8,700,820 ops/sec ±1.76% (57 runs sampled)
    Array with unconditional assignment x 62,256,045 ops/sec ±1.05% (62 runs sampled)
    Float32Array with initial value test !== 0 x 36,787,772 ops/sec ±2.46% (60 runs sampled)
    Float32Array with initial value test === undefined x 58,934,796 ops/sec ±1.24% (63 runs sampled)
    Float32Array with unconditional assignment x 59,226,156 ops/sec ±0.76% (61 runs sampled)

Unconditional assignment is fastest in every case, so clearly it is not
faster to check the initial value than to simply mass assign everything
to 0.

Interestingly, when dealing with Float32Arrays, `=== undefined` is almost
twice as fast as `!== 0` and virtually as fast as no condition at all.

**/

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

/**
  Each test uses 2 arrays, a source and a destination.
  This is so we can test the initial value (array A) and assign
  0's to something (array B) without contaminating the test with
  object allocations, which we know from `vec3-create.js` are
  already faster with Arrays.
**/

var _array = new Array(4), _arrayB = new Array(4),
    _float32 = new Float32Array(4), _float32B = new Float32Array(4);

// add tests
suite.add('Array with initial value test !== 0', function() {
    if (_array[0] !== 0)
        _arrayB[0] = _arrayB[1] = _arrayB[2] = _arrayB[3] = 0;
});

suite.add('Array with initial value test === undefined', function() {
    if (_array[0] === undefined)
        _arrayB[0] = _arrayB[1] = _arrayB[2] = _arrayB[3] = 0;
});

suite.add('Array with unconditional assignment', function() {
    _arrayB[0] = _arrayB[1] = _arrayB[2] = _arrayB[3] = 0;
});

suite.add('Float32Array with initial value test !== 0', function() {
    if (_float32[0] !== 0)
        _float32B[0] = _float32B[1] = _float32B[2] = _float32B[3] = 0;
});

suite.add('Float32Array with initial value test === undefined', function() {
    if (_float32[0] === undefined)
        _float32B[0] = _float32B[1] = _float32B[2] = _float32B[3] = 0;
});

suite.add('Float32Array with unconditional assignment', function() {
    _float32B[0] = _float32B[1] = _float32B[2] = _float32B[3] = 0;
});

// add listeners
suite.on('cycle', function(event, bench) {
    console.log(String(bench));
});

suite.on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').pluck('name'));
});

// run async
suite.run({'async': true});
