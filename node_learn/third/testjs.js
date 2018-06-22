/*var fs = require('fs');

fs.appendFile('mynewf.txt','hello+1', function (error) {
  if (error) throw err;
  console.log('append!');
});*/
var fs = require('fs');


fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});