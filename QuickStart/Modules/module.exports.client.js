
var counter = require("./module.exports.counter");

console.info("第一次调用模块[module.exports.counter]");

counter.printNextCount();
counter.setInitOutPutValue(5);
counter.setIncrement(10);
counter.printNextCount();
counter.printNextCount();

console.info("第二次调用模块[moudle.exports.counter]");
