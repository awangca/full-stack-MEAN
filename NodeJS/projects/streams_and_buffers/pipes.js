

// writable streams
// readable streams
// duplex 

var http= require('http');
var fs= require('fs');

var myReadStream= fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
// var myWriteStream= fs.createWriteStream(__dirname+'/output.txt');

var server = http.createServer(function(req,res){

	console.log('request was made: ' + req.url+ '\n');
	res.writeHead(200, {'content-type':'text/plain'});
	myReadStream.pipe(res);

});

server.listen(8000, '127.0.0.1');
console.log('Awesome, now listening to port 8000');






