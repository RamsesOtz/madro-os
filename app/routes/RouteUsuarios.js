const { Router } = require('express');//creamos constante llamada Router que integra express
const router = Router();//router ejecuta Router funcion
const ControllerUsuarios = require('../controller/ControllerUsuarios');

//cada que llegue una solicitud a router get se ejecutara algo.
router.get('/',ControllerUsuarios.index)//cada que se ejecute, le mandaremos el archivo que lleva el controlador y el index get tomara los datos
.post('/', ControllerUsuarios.agregar)//post enviar datos
.get('/:key/:value', ControllerUsuarios.buscar, ControllerUsuarios.mostrar)/*tomara los datos a buscar*/
.put('/:key/:value', ControllerUsuarios.buscar, ControllerUsuarios.actualizar)
.delete('/:key/:value', ControllerUsuarios.buscar, ControllerUsuarios.eliminar);

module.exports = router;