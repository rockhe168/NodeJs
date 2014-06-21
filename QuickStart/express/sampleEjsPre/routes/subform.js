var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

  res.render('subform', { title: '提交表单及接收参数示例' });
});

router.post('/',function(req,res){
	var userName = req.body.UserName;
  pwd = req.body.Pwd;
  userName2=req.param('UserName');
  pwd2 = req.param('Pwd');

  console.log('req.query用户名:'+userName);
  console.log('req.query密码:'+pwd);
  console.log('req.param用户名:'+userName2);
  console.log('req.param密码:'+pwd2);

  res.render('subform', { title: '提交表单及接收参数示例' });
})

module.exports = router;