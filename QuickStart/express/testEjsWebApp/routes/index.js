var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', 
  					{ 
  						title: '<h1>Express</h1>',
  						users:[{username:'Rock'},{username:'alice'},{username:'你好，NodeJs，俺来了...'}] 
  					});
});

module.exports = router;
