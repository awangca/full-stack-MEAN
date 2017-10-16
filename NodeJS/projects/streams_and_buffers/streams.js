

// writable streams
// readable streams
// duplex 

var http= require('http');
var fs= require('fs');

var myReadStream= fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream= fs.createWriteStream(__dirname+'/output.txt');

// read from a file
myReadStream.on('data', function (chunk) {
	// body...
	console.log('new chunk received:');
	// console.log(chunk); // print out vuffers
	// console.log(chunk.toString()+ '\n');  // print out contents

	// write to a file
	myWriteStream.write(chunk);
	console.log('written successfully');

})


