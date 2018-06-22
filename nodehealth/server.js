
var express= require('express');
var openpgp = require('openpgp'); 
var ipfsAPI = require('ipfs-api')
var bodyParser = require('body-parser')
bodyParser.urlencoded({extended :false})
var $ = require('jQuery');
 var app = express();
 var fs = require("fs");
 const ipfs =ipfsAPI('ipfs.infura.io', '5001',{"protocol": 'https'})
app.use(express.static("HealthCare"));
openpgp.initWorker({ path:'openpgp.worker.js' }) 
app.use(express.static('GPG'));


app.get("/",function(req,res){
    res.sendFile(__dirname + "/" + "index.html");
})
app.get("/Add.html",function(req,res){
    res.sendFile(__dirname + "/" + "Add.html");

})

app.get("/Uploawding.htm",function(req,res){
res.sendFile(__dirname + "/" + "Uploawding.htm")

})

app.get("/view.html",function(req,res){
    res.sendFile(__dirname + "/" + "view.html")
    
    })

app.post("/hashgenerating",function(req,res){
    var options, encrypted;
    console.log(req.query.pname);
    console.log(req.query.bday);
    console.log(req.query.files);
    fs.open('img.jpg', 'r+', function(err, fd) {
        if (err) {
           return console.error(err);
        }
        console.log("File opened successfully!");
        console.log("Going to read the file");
    fs.readFile(fd, function (err, data1) {
    
       if (err) {
          return console.error(err);
       }
       console.log("Asynchronous read: " + data1);
    
    
    var file1=data1;
    
    console.log(file1);
    
    
    options = {
        data: file1, 
        passwords: ['secret stuff'],              
        armor: false                            
    };
    
    openpgp.encrypt(options).then(function(ciphertext) {
        console.log("gdrtd",ciphertext)
        encrypted = ciphertext.message.packets.write(); 
        console.log("encrypt",encrypted);
        var file2=new Buffer(encrypted ,'utf8');
        console.log(file2);
        ipfs.files.add( file2,function(err,ipfsHash) {
            if(ipfsHash){
               console.log(ipfsHash[0].hash);
             }
             else{
                 console.log(err)
             }    
         });
        });
    });
    res.sendFile(__dirname + "/" + "Uploawding.htm");
});

        // option = {
        //     message: openpgp.message.read(encrypted), 
        //     passwords: ['secret stuff'],              
        //     // format: 'string'                         
        // };
        
        // openpgp.decrypt(option).then(function(plaintext) {
           
        //     fs.writeFile("img1.jpg", plaintext.data, function (err) {
        //         if (err) throw err;
        //         console.log(plaintext.data);
        //       });
        //       return plaintext.data
        //     // console.log("Decrypted Data: "+plaintext.data);
    
        //     // return plaintext.data // Uint8Array([0x01, 0x01, 0x01])
        //  });
    //      });
    //   });
    // });
  
});



var server = app.listen(4000, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("localhost:4000")
});
