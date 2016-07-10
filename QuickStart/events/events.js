
const EventEmitter = require('events');
const util = require('util');

//ES6   class MyEmitter extends EventEmitter {}
function MyEmitter() {
  EventEmitter.call(this);
}
util.inherits(MyEmitter, EventEmitter);


const myEmitter = new MyEmitter();
myEmitter.on('event', (a, b) => {
  console.log(a, b, this);
    // Prints: a b {}

  // this happens async
  setImmediate(() => {
    console.log('this happens asynchronously');
  });
});
myEmitter.emit('event', 'a-->', 'b--->');



//--->Error events
myEmitter.on('error', (err) => {
  console.log('whoops! there was an error');
});

process.on('uncaughtException', (err) => {
  console.log('whoops! there was an error');
});
myEmitter.emit('error',new Error('sisisiisisi'));


//-------------->Handling events only once
var m = 0;
myEmitter.once('addOnce', () => {
  console.log(++m);
});
myEmitter.emit('addOnce');
  // Prints: 1
myEmitter.emit('addOnce');
  // Ignored


console.log(MyEmitter.super_);

console.log(EventEmitter.prototype);

