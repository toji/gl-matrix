var walkdir = require('walkdir');
var collection = require('./spec-collection');
var path = require('path');
var fs = require('fs');
var child_process = require('child_process');

var baseArgv = [];

for(var i = 0; i < process.argv.length; i++) {
    if(process.argv[i] !== '--autotest') {
        baseArgv.push(process.argv[i]);
    }
}

var run_external = function(command, args, callback) {
    var child = child_process.spawn(command, args);
    child.stdout.on('data', function(data) {
        process.stdout.write(data);
    });
    child.stderr.on('data', function(data) {
        process.stderr.write(data);
    });
    if(typeof callback == 'function') {
        child.on('exit', callback);
    }
}

var run_everything = function() {
    // run the suite when it starts
    var argv = [].concat(baseArgv);
    run_external(argv.shift(), argv, function() { console.log(arguments) });
}

var last_run_succesful = true;

var watchFile = function(file, stat) {

    var file = path.normalize(file)

    var prevStats = stat;
    
    var watcher = fs.watch(file, function(ev) {

        if(!path.existsSync(file)) {
           watcher.close();
           return;
        }

        var currStats = fs.statSync( file );
    
        if(prevStats.mtime.getTime() != currStats.mtime.getTime()) {
            prevStats = currStats;

            // narrow down a pattern to reduce the specs runned
            var match = path.basename(file, path.extname(file)) + ".*";
            match = match.replace(new RegExp("spec", "i"), "");

            // so we need to rerun the jasmine suite
            var argv = [].concat(baseArgv, ["--match", match]);
            run_external(argv.shift(), argv, function(code) {
                // run everything if we fixed some bugs
                if(code == 0) {
                    if(!last_run_succesful) {
                        run_everything();
                    }
                    last_run_succesful = true;
                } else {
                    last_run_succesful = false;
                }
            });
        }
    });
}


exports.start = function(loadpath, pattern) {

    var finder = walkdir.find(loadpath);

    finder.on('file', function(file, stat) { 
        var basename = path.basename(file);

        if(pattern.test(basename)) {
            watchFile(file,stat);
        }

    });

    run_everything();
}
