const http = require('http');
const server =http.createServer();

const express = require('express');
const bodyParser=require('body-parser');
const path= require('path');
const session = require ('express-session');
const flash = require('express-flash');

const app = express();

app.use(session({secret:'mySecret',resave:false, saveUninitialized:false}));
app.use(flash());
app.use('/public',express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/css',express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js',express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
//renderizado del front end
app.get('/',(req,res)=>{
    let message = req.flash('message');
    res.render('index',{
        data:message
    });
});

app.get('/altas_cambios',(req,res)=>{
    res.render('altas_cambios');
});

app.get('/consultas',(req,res)=>{
    res.render('consultas');
});

const rutas_alumnos=require('./routes/alumnos_routes');

app.use('/alumnos',rutas_alumnos);

/*
function servidor(peticion,respuesta){
    respuesta.writeHead(200,{'content-type': 'text/plain'});
    respuesta.write('prueba inicial');
    respuesta.end();
}

server.on('request', servidor);*/
server.listen(port, function () {
    console.log('servidor escuchando en puerto 3000');
});