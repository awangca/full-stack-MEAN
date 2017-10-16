

var http= require('http');
var fs= require('fs');

var myReadStream= fs.createReadStream(__dirname + '/index.html', 'utf8');

var server = http.createServer(function(req,res){

	res.writeHead(200, {'content-type':'text/html'});
	myReadStream.pipe(res);

});

server.listen(8000, '127.0.0.1');
console.log('Awesome, now listening to port 8000');






