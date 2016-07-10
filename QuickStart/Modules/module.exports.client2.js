
var counter = require("./module.exports.counter");

console.info("我也来调用模块[module.exports.counter]");


counter.printNextCount();
counter.printNextCount();


var counter2 = require("./module.exports.counter");
counter2.printNextCount();

/*
	通过module.exports.counter1.js , 由次出可得结论， require每次都会创建一个新的实例
*/
