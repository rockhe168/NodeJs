

var EventEmitter = new require("events").EventEmitter;

var bookFormEmitter = new EventEmitter();

bookFormEmitter.on("bookForm",function(request){
	console.info("我来监听并处理获取订单基本信息....,This is Request Parms:"+request);
});

var getBookFormStatus1 = bookFormEmitter.emit("bookForm","TempOrderId=123456");

bookFormEmitter.on("bookForm",function(request){
	console.info("我是监听并处理获取乘客信息.....,This is Request Parms:"+request);
});

var getBookFormStatus2 = bookFormEmitter.emit("bookForm","再次触发bookForm，TempOrderId=123456");



var getEmitterStatus = bookFormEmitter.emit("NoExistEvent","这个不存在事件");

console.info("getBookFormStatus1="+getBookFormStatus1,"---->getBookFormStatus2="+getBookFormStatus2+"---->getEmitterStatus="+getEmitterStatus);