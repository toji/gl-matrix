require("gl-matrix");
Benchmark = typeof(Benchmark) === 'undefined' ? require('benchmark') : Benchmark;
var suite = new Benchmark.Suite;

setMatrixArrayType(Array);
var mat3A = mat3.create([1, 2, 0, 3, 4, 0, 5, 6, 1]), mat3B = mat3.create([7, 8, 0, 9, 10, 0, 11, 12, 1]), mat3C = mat3.create();
var mat2A = mat2d.create([1, 2, 3, 4, 5, 6]), mat2B = mat2d.create([7, 8, 9, 10, 11, 12]), mat2C = mat2d.create();


// add tests
suite.add('mat3.multiply', function() {
    mat3.multiply(mat3A, mat3B, mat3C);
});

suite.add('mat2d.multiply', function() {
    mat2d.multiply(mat2A, mat2B, mat2C);
});

suite.add('mat3.create', function() {
    mat3.create();
});

suite.add('mat2d.create', function() {
    mat2d.create();
});

suite.add('mat3.inverse', function() {
    mat3.inverse(mat3A);
});

suite.add('mat2d.inverse', function() {
    mat2d.inverse(mat2A);
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
