const { Router } = require('express');//creamos constante llamada Router que integra express
const router = Router();//router ejecuta Router funcion
const ControllerGraficasA = require('../controller/ControllerGraficasA');

//cada que llegue una solicitud a router get se ejecutara algo.
router.get('/',ControllerGraficasA.index)//cada que se ejecute, le mandaremos el archivo que lleva el controlador y el index get tomara los datos
.post('/', ControllerGraficasA.agregar)//post enviar datos
.get('/:key/:value', ControllerGraficasA.buscar, ControllerGraficasA.mostrar)/*tomara los datos a buscar*/
.put('/:key/:value', ControllerGraficasA.buscar, ControllerGraficasA.actualizar)
.delete('/:key/:value', ControllerGraficasA.buscar, ControllerGraficasA.eliminar);

module.exports = router;