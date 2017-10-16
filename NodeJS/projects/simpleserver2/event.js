var events = require('events');


// ****functions work like jQuery*****
// element.on('click', function () {
// 	// body...
// })
// 
var myEmiter = new events.EventEmitter();
var util = require('util');

var person= function(name){
	this.name =name;
};

util.inherits(person, events.EventEmitter);

var james= new person('james');
var lucy= new person('lucy');
var irvine= new person('irvine');
var people=[james, lucy, irvine];

people.forEach(function(person){
	person.on('speak', function(message){
		console.log(person.name+ ' said: '+message);
	});
});	

james.emit('speak','hey dudes');
lucy.emit('speak','nice to meet everyone');
// myEmiter.on('someEvent', function(message){
// 	console.log(message);
// })

// myEmiter.emit('someEvent', 'the event was emitted');
