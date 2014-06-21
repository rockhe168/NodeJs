var express = require('express');
var router = express.Router();
var crypto = require('crypto');

router.get('/', function(req, res) {
  res.render('usecrypto', { title: '加密字符串示例' });
});

router.post('/',function(req,res){
	var userName = req.body.userName,
		pwd = req.body.Pwd;

	//生产生成口令的散列值

	var md5= crypto.createHash('md5');

	console.info('md5='+md5);

	var en_upwd = md5.update(pwd).digest('hex');

	console.info('加密后的密码:'+en_upwd);

	res.render('usecrypto', { title: '加密字符串示例' });
});


module.exports = router;