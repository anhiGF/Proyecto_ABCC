'use strict';
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

conexion.connect(function (err) {
    if (err) {
       throw err; 
    }else{
        console.log('conexion a db exitosa');
    }
});
module.exports=conexion;
