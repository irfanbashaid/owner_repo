var express = require('express');
var app     = express();
var port    = 	process.env.PORT || 8080;
var fileUpload = require('express-fileupload')
var fs = require('fs');
var openpgp = require('openpgp'); 
var ipfsAPI = require('ipfs-api')
const ipfs =ipfsAPI('ipfs.infura.io', '5001',{"protocol": 'https'})
openpgp.initWorker({ path:'openpgp.worker.js' }) 
app.use(express.static('GPG'));
var bodyParser = require('body-parser')
bodyParser.urlencoded({extended :false})

app.use(fileUpload());

var router = express.Router();
router.use(function(req, res, next) {
	console.log(req.method, req.url);
	next();	
});

router.get('/', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});

router.get('/Add.html', function(req, res) {
    res.sendFile(__dirname + "/" + "Add.html");
});

router.get('/view.html', function(req, res) {
    res.sendFile(__dirname + "/" + "view.html");
});

router.param('name', function(req, res, next, name) {
	console.log('doing name validations on ' + name);
	req.name = name;
	next();	
});

router.get('/hello/:name', function(req, res) {
	res.send('hello ' + req.name + '!');
});

app.use('/', router);

app.route('/Uploawding.htm')

	.get(function(req, res) {
        res.sendFile(__dirname + "/" + "Uploawding.htm")
	})

	.post(function(req, res) {
		if(req.files) {

			// console.log(req.files.file_name);
			
			var filename = req.files.file_name;
			var file = req.files.file_name.name;
			
			// console.log(file);

			let sampleFile = req.files.sampleFile;
			filename.mv("./upload/" + file,function(err){
				if(err){
					console.log("error in moving file");
				}
				else{
					console.log("file moved");
				var filepath = __dirname + "/upload/" + file;
				console.log(filepath);
				
					//hash generating
					var options, encrypted;
					fs.open(filepath, 'r+', function(err, fd) {
						if (err) {
						   return console.error(err);
						}
						console.log("File opened successfully!");
					fs.readFile(fd, function (err, data1) {
					
					   if (err) {
						  return console.error(err);
					   }
					   console.log("File readed");
					
					
					var file1=data1.toString();
					
					// console.log(file1);
					
					
					options = {
						data: file1, 
						passwords: ['secret stuff'],              
						armor: false                            
					};
					
					openpgp.encrypt(options).then(function(ciphertext) {

						// console.log("gdrtd",ciphertext)
						encrypted = ciphertext.message.packets.write(); 
						
						console.log("encrypted :",encrypted);
						
						
						//Converting to Buffer
						var file2=new Buffer(encrypted ,'utf8');
						console.log(file2);

						//Converting into Hash
						ipfs.files.add( file2,function(err,ipfsHash) {
							if(ipfsHash){
							   console.log("Generated hash:  " +ipfsHash[0].hash);
							 }
							 else{
								 console.log(err)
							 }    
						 });
						});
					});
					res.sendFile(__dirname + "/" + "Uploawding.htm");
				});
				

				}
			})
		}
		else{
			console.log("error in getting file");
		}
	});

app.listen(port);
console.log('localhost:' + port);