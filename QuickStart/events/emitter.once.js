
var EventEmitter = new require("events").EventEmitter;

var saveOrderEmitter = new EventEmitter();


saveOrderEmitter.once("saveOrder",function(request){
	console.info("我是监听并调用OMD的，反正一个请求我只执行一次.....,This is Request Parms:"+request);
});


var saveOrderStatus1 = saveOrderEmitter.emit("saveOrder","TempOrderId=1245638, ProductName:'三亚8日游！'");
var saveOrderStatus2 = saveOrderEmitter.emit("saveOrder","TempOrderId=1245638, ProductName:'三亚8日游！'");


console.info("saveOrderStatus1="+saveOrderStatus1,"---->saveOrderStatus2="+saveOrderStatus2);