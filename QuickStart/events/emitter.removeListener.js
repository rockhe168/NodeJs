var EventEmitter = new require("events").EventEmitter;

var bookFormEmitter = new EventEmitter();


function GetOrderBasicInfo(reqeust){
	console.info("获取订单基本信息....,This is Reqeust Parms:"+reqeust);
}

function GetPassengerInfo(reqeust){
	console.info("获取乘客信息信息...,This is Reqeust Parms:"+reqeust);
}

function GetInvoiceInfo(reqeust){
	console.info("获取订单发票信息...,This is Reqeust Parms:"+reqeust);
}

function GetDevlieryInfo(reqeust){
	console.info("获取订单配送信息...,This is Reqeust Parms:"+reqeust);
}


bookFormEmitter.on("bookForm",GetOrderBasicInfo);
bookFormEmitter.on("bookForm",GetPassengerInfo);
bookFormEmitter.on("bookForm",GetInvoiceInfo);
bookFormEmitter.on("bookForm",GetDevlieryInfo);


bookFormEmitter.emit("bookForm","TempOrderId=8888");

console.info("---------------------------------------------------------------------------------------->");


function Handler(request){
	if(request.indexOf("1")<0){
		bookFormEmitter.removeListener("bookForm", GetOrderBasicInfo);
	}

	if(request.indexOf("2")<0){
		bookFormEmitter.removeListener("bookForm", GetPassengerInfo);
	}

	if(request.indexOf("7")<0){
		bookFormEmitter.removeListener("bookForm", GetInvoiceInfo);
	}

	if(request.indexOf("3")<0){
		bookFormEmitter.removeListener("bookForm", GetDevlieryInfo);
	}

	bookFormEmitter.emit("bookForm","TempOrderId=8888");
}

Handler("1,3");

