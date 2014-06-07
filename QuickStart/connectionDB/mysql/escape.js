/*
防止Sql注入
*/

var mysql = require('mysql');

var pool = mysql.createPool({
    host: '192.168.0.200',     
    user: 'root',
    password:'abcd',
    port:'3306',
    database:'nodesample'
});

pool.getConnection(function(err,connection){
    
    connection.query('SELECT * FROM userinfo WHERE id = ' + '5 OR ID = 6',function(err,result){
        //console.log(err);
        console.log(result);
        connection.release();
    });

    connection.query('SELECT * FROM userinfo WHERE id = ' + pool.escape('5 OR ID = 6') ,function(err,result){
        //console.log(err);
        console.log(result);
        connection.release();
    });
})