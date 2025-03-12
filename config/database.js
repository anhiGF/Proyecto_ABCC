'use strict';
const mysql = require('mysql');

const conexion = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password:'ARNIAK123',
    database: 'db_express_2025'
});

conexion.connect(function (err) {
    if (err) {
       throw err; 
    }else{
        console.log('conexion a db exitosa');
    }
});
module.exports=conexion;