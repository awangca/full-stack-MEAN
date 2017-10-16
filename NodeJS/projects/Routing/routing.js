

var http= require('http');
var fs= require('fs');


var server = http.createServer(function(req,res){

	console.log('request was made: '+ req.url);
	res.writeHead(200, {'content-type':'text/html'});
	if(req.url==='/home' || req.url==='/'){

		res.writeHead(200, {'content-type': 'text/html'});
		fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);

	}  else if (req.url==='/contact') {

			res.writeHead(200, {'content-type': 'text/html'});
			fs.createReadStream(__dirname + '/contact.html', 'utf8').pipe(res);

	}

	else {
			res.writeHead(404, {'content-type': 'text/html'});
			fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(res);

	}

});

server.listen(8000, '127.0.0.1');
console.log('Awesome, now listening to port 8000');






