var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
fs.readFile('petshop.html', function(err,data)
{
//    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();

});
}).listen(1111);
console.log('connected:127.0.0.1:1111');