'use strict';

const { request } = require('express');
const Alumno=require('../models/alumno');

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
exports.update=function(req,res){
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
        Alumno.update(req.params.id, alumno,function(err,alumno){
            console.log("modificando alumnos",req.body);
            if(err){
                res.send(err);
            }
            req.flash('message', 'Alumno modificado correctamente');
            res.redirect('/');
        });
    }
};

exports.findById=function(req,res){
    Alumno.findById(request.params.id, function(err,alumno){
        if(err){
            res.send(err);
        }
        res.json(alumno);
    })
}