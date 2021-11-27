const { Router } = require('express');//creamos constante llamada Router que integra express
const router = Router();//router ejecuta Router funcion
const Passport = require('passport');


//cada que llegue una solicitud a router get se ejecutara.
router.get('/Registrar', (req,res, next) => {
    res.render('registrar');
});/*envia datos del registro*/

router.post('/Registrar', Passport.authenticate('authReg', {
    successRedirect: '/Dashboard',//redicciona a una ruta ya validando el usuario
    failureRedirect: '/Registrar', //si se hay algun error redireccionara a la ruta de Registrar
    passReqToCallback: true //nos permite registrar mas datos para recibirlos con un req
}));/*autenticamos usuario con metodo auth que esta en el archivo local-auth.js*/

router.get('/', (req,res, next) => {
    res.render('iniciar');
});

router.post('/', Passport.authenticate('authInit', {
    successRedirect: '/Dashboard',//redicciona a una ruta ya validando el usuario
    failureRedirect: '/', //si se hay algun error redireccionara a la ruta de Registrar
    passReqToCallback: true //nos permite registrar mas datos para recibirlos con un req
}));/*revisa datos ingresados para iniciar sesion*/

//cerrar Sesion
router.get('/Cerrar', (req, res, next) => {
    req.logout();
    res.redirect('/');
});



//nos permite autenticarnos para no permitir entrar al dashboard si no estas registrado
function isAuthenticated(req, res, next) {
    if(req.isAuthenticated()){//si el usuario esta autenticado, continuara con la siguiente ruta: return next()
        return next();
    }
    //si el usuario no esta autenticado
    res.redirect('/');//nos enviara a la ruta de Iniciar Sesion
} //se ejecuta cada que creamos una ruta

/*SOLO ACEDE SI UN USUARIO HA SIDO AUTENTICADO*/
router.get('/Dashboard', isAuthenticated, (req, res, next) => {
    res.render('dashboard');
});

module.exports = router;