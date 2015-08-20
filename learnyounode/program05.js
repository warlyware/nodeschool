var fs = require('fs');
var path = require('path');
var directory = process.argv[2];
var fileType = process.argv[3];
var fileList;

fs.readdir(directory, function(err, list) {
  fileList = list.filter(function(file) {
    // console.log(path.extname(file));
    return path.extname(file) === '.' + fileType;
  });

  fileList.forEach(function(file) {
    console.log(file);
  });

});
