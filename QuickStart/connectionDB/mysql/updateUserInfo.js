var mysql  = require('mysql');  

var connection = mysql.createConnection({     
  host     : '127.0.0.1',       
  user     : 'root',              
  password : '123456',       
  port: '3306',                   
  database: 'nodesample', 
}); 

connection.connect();

var userModSql = 'UPDATE userinfo SET UserName = ?,UserPass = ? WHERE Id = ?';
var userModSql_Params = ['何湘红', '5678',1];
//改
connection.query(userModSql,userModSql_Params,function (err, result) {
   if(err){
         console.log('[UPDATE ERROR] - ',err.message);
         return;
   }        
  console.log('--------------------------UPDATE----------------------------');
  console.log('UPDATE affectedRows',result.affectedRows);
  console.log('-----------------------------------------------------------------\n\n');
});

connection.end();