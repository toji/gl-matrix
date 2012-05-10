/**

There's ongoing debate as to exactly which object type to use for vector and
matrix math, and every so often someone will raise the question again.

So this benchmark is here to try and definitively answer the question of which
array type to use.

RESULTS

    new Float32Array(3) x 75,101 ops/sec ±4.38% (52 runs sampled)
    new Array(3) x 14,740,880 ops/sec ±3.18% (49 runs sampled)
    {0:0, 1:0, 2:0} x 10,599,171 ops/sec ±1.14% (60 runs sampled)

Not only is `Array` the fastest, it's ungodly fast compared to `Float32Array`.
However, let's not get too carried away here. The results of this test led me
to write `vec3-add-existing.js`, which showed that although `Float32Array` is
slow to create, it's **much** faster for actual math than `Array`.

Generic objects were thrown in there for good measure; you can see that they are
faster to instantiate than `Float32Array`, but slower than `Array` and therefore
worse candidates than either of the others.

The answer, then, comes down to how you plan to use the library. If you create
a lot of temporary objects, then you should start your app out with
`setMatrixArrayType(Array);` so that you can leverage the rapid creation of
`Array` objects.

However, if you cache your objects so they aren't unnecessarily garbage collected,
and make use of them at every opportunity, then it's clear that not needing to
re-create the objects every frame is going to play very nicely with `Float32Array`.

Since it's generally better practice NOT to create objects unnecessarily, it is
the authors' opinions that gl-matrix should continue to default to `Float32Array`.

I doubt we've seen the end of this debate.

**/

var path = require('path');
var original = require("gl-matrix");

// force load a second gl-matrix which uses Array
delete require.cache[path.normalize(path.join(__dirname, '../../gl-matrix.js'))];
var vanilla = require("gl-matrix");
vanilla.setMatrixArrayType(Array);

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

// add tests
suite.add('new Float32Array(3)', function() {
    original.vec3.create();
});

suite.add('new Array(3)', function() {
    vanilla.vec3.create();
});

suite.add('{0:0, 1:0, 2:0}', function() {
    var result = {0: 0, 1: 0, 2: 0};
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
