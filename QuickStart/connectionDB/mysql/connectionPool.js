var mysql = require('mysql');

var pool  = mysql.createPool({
  host     : '127.0.0.1',       
  user     : 'root',              
  password : '123456',       
  port: '3306',                   
  database: 'nodesample'  
});

pool.getConnection(function(err, connection) {

    connection.query( 'SELECT * FROM userinfo;', function(err, result) {    
        console.log(result);
        connection.release();
    });

    connection.query( 'SELECT * FROM userinfo;', function(err, result) {
        
        console.log(result);
        connection.release();

    });
});