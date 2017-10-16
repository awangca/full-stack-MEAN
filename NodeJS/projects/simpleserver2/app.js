
//***** modules for stuff.js*****
// var stuff=require('./stuff');

// console.log(stuff.counter(['sean','crystal','rudy']));
// console.log(stuff.adder(5,6));


//***** modules for event.js*****
var events = require('events');

var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent',function(message){

	console.log(message);
})

myEmitter.emit('someEvent','the event was emitted');