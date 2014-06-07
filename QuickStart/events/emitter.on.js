
/*
    调用events模块，获取events.EventEmitter对象
*/
var EventEmitter = new require('events').EventEmitter;

var ee = new EventEmitter();

/*
    EventEmitter.on(event, listener) 为事件注册一个监听
    参数1：event  字符串，事件名
    参数2：回调函数
*/
ee.on('some_events',function(foo,bar){

	console.log("第一个监听,参数foo="+foo+",bar="+bar);	
});


console.log('第一轮');
ee.emit('some_events','Rock','He');

console.log("第二轮");
ee.emit("some_events","刘","德华");