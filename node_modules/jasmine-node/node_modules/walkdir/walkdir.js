var EventEmitter = require('events').EventEmitter,
fs = require('fs'),
_path = require('path');

module.exports = walkdir;

walkdir.find = walkdir.walk = walkdir;

walkdir.sync = function(file,options){
  options = options || {};
  options.sync = true;
  return walkdir(file,options);

};

function walkdir(path,options,cb){

  if(typeof options == 'function') cb = options;

  options = options || {};

  var emitter = new EventEmitter(),
  allPaths = (options.return_object?{}:[]),
  resolved = false,
  inos = {},
  stop = 0,
  ended = 0, 
  jobs=0, 
  job = function(value) {
    jobs += value;
    if(value < 1 && !tick) {
      tick = 1;
      process.nextTick(function(){
        tick = 0;
        if(jobs <= 0 && !ended) {
          ended = 1;
          emitter.emit('end');
        }
      });
    }
  }, tick = 0;

  //mapping is stat functions to event names.	
  var statIs = [['isFile','file'],['isDirectory','directory'],['isSymbolicLink','link'],['isSocket','socket'],['isFIFO','fifo'],['isBlockDevice','blockdevice'],['isCharacterDevice','characterdevice']];

  var statter = function (path,first) {
    job(1);
    var statAction = function(err,stat) {
      job(-1);
      if(stop) return;

      // in sync mode i found that node will sometimes return a null stat and no error =(
      // this is reproduceable in file descriptors that no longer exist from this process
      // after a readdir on /proc/3321/task/3321/ for example. Where 3321 is this pid
      // node @ v0.6.10 
      if(err || !stat) { 
        emitter.emit('fail',path,err);
        return;
      }


      //if i have evented this inode already dont again.
      if(inos[stat.dev+'-'+stat.ino] && stat.ino) return;
      inos[stat.dev+'-'+stat.ino] = 1;

      if (first && stat.isDirectory()) {
        emitter.emit('targetdirectory',path,stat);
        return;
      }

      emitter.emit('path', path, stat);

      var i,name;

      for(var j=0,k=statIs.length;j<k;j++) {
        if(stat[statIs[j][0]]()) {
          emitter.emit(statIs[j][1],path,stat);
          break;
        }
      }
    };
    
    if(options.sync) {
      var stat,ex;
      try{
        stat = fs.lstatSync(path);
      } catch (e) {
        ex = e;
      }

      statAction(ex,stat);
    } else {
        fs.lstat(path,statAction);
    }
  },readdir = function(path,stat){
    if(!resolved) {
      path = _path.resolve(path);
      resolved = 1;
    }
    job(1);
    var readdirAction = function(err,files) {
      job(-1);
      if (err || !files || !files.length) {
        emitter.emit('fail',path,err);
        return;
      }
      if(path == '/') path='';
      for(var i=0,j=files.length;i<j;i++){
        statter(path+'/'+files[i]);
      }

    };

    //use same pattern for sync as async api
    if(options.sync) {
      var e,files;
      try {
          files = fs.readdirSync(path);
      } catch (e) { }

      readdirAction(e,files);
    } else {
      fs.readdir(path,readdirAction);
    }
  };

  if (options.follow_symlinks) {
    var linkAction = function(err,path){
      job(-1);
      statter(path);
    };

    emitter.on('link',function(path,stat){
      job(1);
      if(options.sync) {
        var lpath,ex;
        try {
          lpath = fs.readlinkSync(path);
        } catch(e) {
          ex = e;
        }
        linkAction(ex,_path.resolve(_path.dirname(path),lpath));

      } else {
        fs.readlink(path,function(err,lpath){
          linkAction(err,_path.resolve(_path.dirname(path),lpath));
        });
      }
    });
  }

  if (cb) {
    emitter.on('path',cb);
  }

  if (options.sync) {
    if(!options.no_return){
      emitter.on('path',function(path,stat){
        if(options.return_object) allPaths[path] = stat;
        else allPaths.push(path);
      });
    }
  }

  emitter.on('directory',readdir);
  //directory that was specified by argument.
  emitter.once('targetdirectory',readdir);
  //only a fail on the path specified by argument is fatal 
  emitter.once('fail',function(_path,err){
        //if the first dir fails its a real error
        if(path == _path) {
          emitter.emit('error',path,err);
        }
  });

  statter(path,1);
  if (options.sync) {
    return allPaths;
  } else {
    //support stopping everything.
    emitter.end = emitter.stop = function(){stop = 1;};
    return emitter;
  }

}
