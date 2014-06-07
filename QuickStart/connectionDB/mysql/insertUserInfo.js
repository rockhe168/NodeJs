var mysql  = require('mysql');  

var connection = mysql.createConnection({     
  host     : '127.0.0.1',       
  user     : 'root',              
  password : '123456',       
  port: '3306',                   
  database: 'nodesample', 
}); 

connection.connect();

var  userAddSql = 'INSERT INTO userinfo(Id,UserName,UserPass) VALUES(0,?,?)';
var  userAddSql_Params = ['Rock', 'abcd'];
//增
connection.query(userAddSql,userAddSql_Params,function (err, result) {
        if(err){
         console.log('[INSERT ERROR] - ',err.message);
         return;
        }        

       console.log('--------------------------INSERT----------------------------');
       //console.log('INSERT ID:',result.insertId);        
       console.log('INSERT ID:',result);        
       console.log('-----------------------------------------------------------------\n\n');  
});

connection.end();