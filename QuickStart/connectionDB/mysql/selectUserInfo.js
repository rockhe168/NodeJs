var mysql  = require('mysql');  

var connection = mysql.createConnection({     
  host     : '127.0.0.1',       
  user     : 'root',              
  password : '123456',       
  port: '3306',                   
  database: 'nodesample', 
}); 

connection.connect();

var  userGetSql = 'SELECT * FROM userinfo';
//查
connection.query(userGetSql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }        

       console.log('--------------------------SELECT----------------------------');
       console.log(result);        
       console.log('-----------------------------------------------------------------\n\n');  
});

connection.end();