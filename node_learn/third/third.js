const expres = require('express');
//var imp=require('./fanatichtml.html');
var fhs=require('fs');
const app = expres()
app.get('/',function get1(req,res){
    res.write();
    res.end();});
app.get('/next',function re(req, res) {
    fhs.readFile('fanatichtml.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    })});
app.listen(3000,function refd(){console.log('Successfull')});
//app.listen(8080);
//console.log('connected');
/*var fs = require('fs');
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});*/