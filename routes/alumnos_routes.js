const express=require('express');
const router = express.Router();

const alumno_controller=require('../controllers/alumno_controller');

//ruta para mostrar todos los alumnos
router.get('/',alumno_controller.findAll);

//altas
router.post('/',alumno_controller.create);

//consultaralumno
router.get('/:id',alumno_controller.findById);

//modificar alumno
router.post('/:id',alumno_controller.update);

//eliminar alumno
router.post('/eliminar/:id',alumno_controller.delete);

module.exports=router;