require("gl-matrix");
Benchmark = typeof(Benchmark) === 'undefined' ? require('benchmark') : Benchmark;
var suite = new Benchmark.Suite;

setMatrixArrayType(Array);
var mat3A = mat3.create([1, 2, 0, 3, 4, 0, 5, 6, 1]), mat3B = mat3.create([7, 8, 0, 9, 10, 0, 11, 12, 1]), mat3C = mat3.create();
var mat2A = mat2d.create([1, 2, 3, 4, 5, 6]), mat2B = mat2d.create([7, 8, 9, 10, 11, 12]), mat2C = mat2d.create();
var vec2A = vec2.create([2, 3]);
var vec2B = vec2.create([2, 3]);


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

suite.add('mat3.multiplyVec2', function() {
    mat3.multiplyVec2(mat3A, vec2A);
});

suite.add('mat2d.multiplyVec2', function() {
    mat2d.multiplyVec2(mat2A, vec2B);
});

// add listeners
suite.on('cycle', function(event, bench) {
    console.log(String(bench));
});

suite.on('complete', function() {
	function matcher(ending){
		var regex = new RegExp(ending+"$");
		return function(a){
			return regex.test(a.name);
		}
	}
	var sets = "multiply,create,inverse,multiplyVec2".split(',');
	for(var i = 0; i < sets.length; ++i){
		var set = sets[i];
    	console.log('Fastest '+set+' is ' + this.filter(matcher(set)).filter('fastest').pluck('name'));
	}
});

// run async
suite.run({'async': true});
