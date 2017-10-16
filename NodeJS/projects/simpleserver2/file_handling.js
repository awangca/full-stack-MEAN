var fs = require('fs');


// *******Part One*******
// fs.readFile('file_handling.txt',function (err,data) {
// 	// body...\
// 	if (err) {
// 		console.log(err);

// 	}
// 	else {
// 		console.log("Async data is "+data.toString());
// 	}
// });

// var data = fs.readFileSync('file_handling.txt');
// console.log("Sync data: "+data.toString());
// console.log("*******this is the end**********");


// *******Part Two*******

// var readMe = fs.readFileSync('file_handling.txt', 'utf8');
// fs.writeFileSync('file_handling_output.txt',readMe);

//*******Part Three*******

// fs.rmdirSync('stuff');
fs.mkdir('stuff',function(){
	fs.readFile('file_handling.txt','utf8',function(err,data){
		fs.writeFile('./stuff/writeMe.txt',data);
	});
});