'use strict';

const { request } = require('express');
const Alumno=require('../models/alumno');

//crear nuevo alumno
exports.create=function(req,res){
    console.log(req.body.num_control);
    console.log(req.body.nombre);
    console.log(req.body.primerap);
    console.log(req.body.segundoap);
    console.log(req.body.fecha_nac);
    console.log(req.body.semestre);
    console.log(req.body.carrera);

    //verificar que no venga vacio
    if(req.body.constructor===Object&&Object.keys(req.body).length===0){
        res.status(400).send({error:true,Message:'falta informacion'});
    }else{
        const a={
            num_control:req.body.num_control,
            nombre:req.body.nombre,
            primerap:req.body.primerap,
            segundoap: req.body.segundoap,
            fecha_nac: req.body.fecha_nac,
            semestre: req.body.semestre,
            carrera: req.body.carrera
        }
        const alumno=new Alumno(a);
        Alumno.create(alumno,function(err,alumno){
            console.log("guardando alumnos",req.body);
            if(err){
                res.send(err);
            }
            req.flash('message', 'Alumno creado correctamente');
            res.redirect('/');
        });
    }
};

//bajas solo un alumno
exports.delete=function(req,res){
    Alumno.delete(req.params.id,function(err){
        if(err){
            res.send(err);
        }
        req.flash('message', 'Alumno eliminado correctamente');
        res.redirect('/');
    });
};

//modificar nuevo alumno
exports.update = function(req, res) {
    Alumno.findById(req.params.id, function(err, alumno) {    

      console.log("actualizar: " + req.body.num_control);
      console.log("actualizar: " + req.body.nombre);
      console.log("actualizar: " + req.body.primer_ap);
      console.log("actualizar: " + req.body.segundo_ap);
      console.log("actualizar: " + req.body.fecha_nac);
      console.log("actualizar: " + req.body.semestre);
      console.log("actualizar: " + req.body.carrera);
    
      const a = {
        Num_Control : req.body.num_control,
        Nombre : req.body.nombre,
        Primer_Ap : req.body.primer_ap,
        Segundo_Ap : req.body.segundo_ap,
        Fecha_Nac : req.body.fecha_nac,
        Semestre : req.body.semestre,
        Carrera : req.body.carrera  
    }

      Alumno.update(req.params.id, new Alumno(a), function(err, alumno) {      
        req.flash('message', 'Alumno ACTUALIZADO Correctamente !');
        res.redirect('/');
      });
    });     
  
};
//buscar alumnos
exports.findById=function(req,res){
    Alumno.findById(request.params.id, function(err,alumno){
        if(err){
            res.send(err);
        }
        res.json(alumno);
    })
}

//mostrar todos los alumnos en la vista principal
exports.findAll=function(req,res){
    Alumno.findAll(function(err,alumnos){
        if(err){
            res.send(err);
        }
        console.log("Alumnos:", alumnos);
        res.status(200).send(alumnos);
    });
};