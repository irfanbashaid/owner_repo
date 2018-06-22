var ipfsAPI = require('ipfs-api')
var fs = require('fs');
const ipfs =ipfsAPI('ipfs.infura.io', '5001',{"protocol": 'https'})

    fs.open('process_post.html', 'r+', function(err, fd) {
        if (err) {
                    return console.error(err);
                }
        console.log("File opened successfully!");
        console.log("Going to read the file");

    fs.readFile(fd, function (err, data) {
        if (err) {
                    return console.error(err);
                }
        console.log("Asynchronous read: " + data);

    var file=data.toString();
    var buf=new Buffer( file,"utf8");
    console.log(buf);

    ipfs.files.add( buf,function(err,ipfsHash) {
        if(ipfsHash){
                        console.log(ipfsHash[0].hash);
                    }
                else{
                        console.log(err)
                    }
        });
    });
});