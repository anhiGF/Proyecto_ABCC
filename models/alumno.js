'use strict';
const conexion= require('../config/database.js');

let Alumno=function (alumno) {
    this.num_control= alumno.num_control;
    this.nombre= alumno.nombre;
    this.primerap= alumno.primerap;
    this.segundoap= alumno.segundoap;
    this.fecha_nac= alumno.fecha_nac;
    this.semestre= alumno.semestre;
    this.carrera= alumno.carrera;
};

//  ALTAS
Alumno.create= function (nuevoA, res) {
    conexion.query("INSERT INTO alumnos SET ?",nuevoA,function (err,r) {
        if (err) {
            console.log('Error ',err);
            res(err,null);
        }else{
            console.log(res);
            result(null, res);
        }
    });
};

//bajas
Alumno.delete = function (nc,result) {
    conexion.query("DELETE FROM alumnos WHERE num_control=?",[nc],function(err,res){
        if (err) {
            console.log('Error ',err);
            res(err,null);
        }else{
            console.log(res);
            result(null, res);
        }
    });
};

//cambios
Alumno.update=function(id,alumno,result){
    conexion.query("UPDATE alumnos SET nombre=?, primerap=?,segundoap=?, fecha_nac =?,semestre=?, carrera=? WWHERE num_control=?",[alumno.nombre,alumno.primerap,alumno.segundoap,alumno.fecha_nac,alumno.semestre,alumno.carrera,alumno.num_control],
        function (err,res) {
            if (err) {
                console.log('Error ',err);
                res(err,null);
            }else{
                console.log(res);
                result(null, res);
            }
        });
};

//consultas
Alumno.findById=function (nc,result) {
    conexion.query("Select * from alumnos where num_control=?",nc,function (err,res) {
        if (err) {
            console.log('Error ',err);
            res(err,null);
        }else{
            console.log(res);
            result(null, res);
        }
    });
};

Alumno.findAll=function (result) {
    conexion.query("Select * from alumnos ",function (err,res) {
        if (err) {
            console.log('Error ',err);
            res(err,null);
        }else{
            console.log(res);
            result(null, res);
        }
    });
};


module.exports=Alumno;