/*var forhttp = require('http');
var asser = require('assert');
var a=23;
var b=34;
asser(b > a);
forhttp.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('a');
    res.end("a"+(a+b));
}).listen(1111);
console.log(a);;*/
var http = require('http');
//var exp = require('./mymodule');
var hostname='127.0.0.1';
var port=1212;
const server=http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("hi"+exp.mytime());
    res.end();
});
server.listen(1111);