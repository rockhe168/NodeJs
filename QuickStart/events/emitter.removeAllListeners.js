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


ee.removeAllListeners("bookForm");

function Handler(request){
	if(request.indexOf("1")<0){
		ee.removeListener("bookForm", GetOrderBasicInfo);
	}

	if(request.indexOf("2")<0){
		ee.removeListener("bookForm", GetPassengerInfo);
	}

	if(request.indexOf("7")<0){
		ee.removeListener("bookForm", GetInvoiceInfo);
	}

	if(request.indexOf("3")<0){
		ee.removeListener("bookForm", GetDevlieryInfo);
	}

	ee.emit("bookForm","TempOrderId=8888");
}

Handler("1,3");
ee.emit("saveOrder","TempOrderId=8888");


console.info("---------------------------------------------------------------------------------------->");
ee.removeAllListeners();

Handler("1,3");
ee.emit("saveOrder","TempOrderId=8888");