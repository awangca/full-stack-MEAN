var express = require('express');

var app = express();

app.get('/', function(req,res){
	res.send('this is the homepage for gmofeng' );

});

app.get('/contact', function(req,res){
	res.send('this is the contact page for gmofeng' );

});

// app.get('/profile/:id', function(req,res){
// 	res.send('you sent a request to  see a profle with the ID of ' + req.params.id);

// });


//  !!!!!!!!!!not able to show correct answer on browser!!!!!!!!!!!!!!!!!!!!!!
app.get('/user/:id', function(req, res) {
  res.send('user ' + req.params.id);
});


app.listen(3000);