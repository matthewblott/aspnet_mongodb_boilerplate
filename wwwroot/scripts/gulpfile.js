var gulp = require('gulp');
var process = require('child_process');

// Commands
var watchify = 'watchify -t [ hbsfy -e html ] app-dev.js -o app.js -d -v';
var mongod = 'mongod --dbpath ~/Dev/mongoDB/data/db --httpinterface --rest';
var kestrel = 'k kestrel';


gulp.task('default', function() {

  process.exec('', function(err, stdout, stderr){
    console.log(stdout);
  });

  process.exec(mongod, function(err, stdout, stderr){
    console.log(stdout);
  });

  process.exec(watchify, function(err, stdout, stderr){
    console.log(stdout);
  });

  process.exec(kestrel, function(err, stdout, stderr){
    console.log(stdout);
  });

});