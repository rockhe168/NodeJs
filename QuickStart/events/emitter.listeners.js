var EventEmitter = new require("events").EventEmitter;

var ee = new EventEmitter();


function GetOrderBasicInfo(request){
	console.info("获取订单基本信息....,This is Reqeust Parms:"+request);
}

function GetPassengerInfo(request){
	console.info("获取乘客信息信息...,This is Reqeust Parms:"+request);
}

function GetInvoiceInfo(request){
	console.info("获取订单发票信息...,This is Reqeust Parms:"+request);
}

function GetDevlieryInfo(request){
	console.info("获取订单配送信息...,This is Reqeust Parms:"+request);
}

function CanBooking(request){
	console.info("取消订单...,This is Reqeust Parms:"+request);
}

ee.on("bookForm",GetOrderBasicInfo);
ee.on("bookForm",GetPassengerInfo);
ee.on("bookForm",GetInvoiceInfo);
ee.on("bookForm",GetDevlieryInfo);
ee.on("saveOrder",CanBooking);

ee.emit("bookForm","TempOrderId=8888");
ee.emit("saveOrder","TempOrderId=8888");

console.info("---------------------------------------------------------------------------------------->");

var bookFormListeners =  ee.listeners("bookForm");

for (var i = bookFormListeners.length - 1; i >= 0; i--) {
	console.info(bookFormListeners[i]);
};

var saveOrderListeners = ee.listeners("saveOrder");

var saveOrderListenersLenght = saveOrderListeners.length;

for (var i = saveOrderListenersLenght - 1; i >= 0; i--) {
	console.info("saveOrder"+i+"-->"+bookFormListeners[i]);//默认调用toString()方法
};


