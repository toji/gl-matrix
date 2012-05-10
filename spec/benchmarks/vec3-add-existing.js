/**

See also the `vec3-create.js` benchmark.

This benchmark attempts to address questions concerning the speed of
`Float32Array` vs standard `Array`. We also tested generic objects for
good measure, but as you will see, they were not ideal candidates.

In this benchmark, each test involves 3 arrays: two to be added together,
and a third to receive the result. First each test explicitly sets the
contents of the first two arrays, and then adds them together using
`vec3.add` and receiving the result into the third array. Thus, access
and assignment times are being evaluated.

RESULTS

    adding Float32Array x 25,975,000 ops/sec ±2.53% (50 runs sampled)
    adding Array x 15,510,462 ops/sec ±0.65% (62 runs sampled)
    adding generic object x 14,513,942 ops/sec ±0.50% (64 runs sampled)

Although `vec3-create.js` showed that Arrays are quicker to instantiate,
you can see that `Float32Array` blows the competition out of the water
when it comes to actually using it. See the results of `vec3-create.js`
for the final word on which type to use in your app.

**/

require("gl-matrix");

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

/* Pre-initialize each array type so that its allocation does not taint
the bechmark. */
var fa = new Float32Array(3), fb = new Float32Array(3), fc = new Float32Array(3);
var aa = [],                  ab = [],                  ac = [];
var oa = {},                  ob = {},                  oc = {};

// add tests
suite.add('adding Float32Array', function() {
    fa[0] = 1; fa[1] = 2; fa[2] = 3;
    fb[0] = 2; fb[1] = 3; fb[2] = 4;
    vec3.add(fa, fb, fc);
});

suite.add('adding Array', function() {
    aa[0] = 1; aa[1] = 2; aa[2] = 3;
    ab[0] = 2; ab[1] = 3; ab[2] = 4;
    vec3.add(aa, ab, ac);
});

suite.add('adding generic object', function() {
    oa[0] = 1; oa[1] = 2; oa[2] = 3;
    ob[0] = 2; ob[1] = 3; ob[2] = 4;
    vec3.add(oa, ob, oc);
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
