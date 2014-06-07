
/**
** 自定义一个模块
*/

var outputVal = 0;//输出值
var increment =1;//增量

function setInitOutPutValue (value) {
	outputVal = value;
};

function setIncrement(value){
	increment = value;
}

function printNextCount(){
	outputVal += increment;
	console.info(outputVal);
}

function printOutputValue(){
	console.info(outputVal);
}

exports.setInitOutPutValue = setInitOutPutValue;
exports.setIncrement = setIncrement;

module.exports.printNextCount = printNextCount;

/*
可以这样理解， module.exports === 此对象的原型 proptery,  还exports 是对这个原型的一个引用
*/