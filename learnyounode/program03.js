var fs = require('fs');

var data = fs.readFileSync(process.argv[2],'utf8');
var strData = data.toString();
var result = strData.split('\n');
console.log(result.length - 1);
