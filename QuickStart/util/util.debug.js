const util = require('util');

var debuglog = util.debuglog('foo');

var bar = 123;
debuglog('hello from foo [%d]', bar);

//console.log(NODE_DEBUG);:-)

exports.puts = util.deprecate(() => {
  for (var i = 0, len = arguments.length; i < len; ++i) {
    process.stdout.write(arguments[i] + '\n');
  }
}, 'util.puts: Use console.log instead');


util.isArray([]);


util.isArray(new Array);

console.log(util.isArray([]));
console.log(util.isArray(new Array));

console.log(util.isPrimitive({}));
console.log(util.isPrimitive(Object));
console.log(util.isPrimitive(Symbol));


