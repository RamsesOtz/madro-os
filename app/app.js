const morgan = require('morgan');
const express = require('express');
const passport = require('passport');
const session = require('express-session');//importamos expres-session
const routes = require('./routes/routes');
const RouteFichas = require('./routes/RouteFichas');
const RouteUsuarios = require('./routes/RouteUsuarios');
const RouteGraficasA = require('./routes/RouteGraficasA');
const path = require('path');
const flash = require('connect-flash');

const app = express();
require('./passport/local-auth');
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

/*middleware*/
app.use(morgan('dev'));
/*poder recivir datos desde el cliente*/
//app.use(express.urlencoded({extended: false}));/*.urlencoded{nos permite resivir datos desde un formulario no permite imagenes}*/
app.use(session({
    //aseguramos que este archivo no sea bulnerable
    secret: 'sQ.12345@pochito.',
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());//initialize: nos sirve para inicializar Passport
app.use(passport.session());//almacena la sesion

app.use((req, res, next) => {
    //obtener metodo
    app.locals.RegistrarMensaje = req.flash('RegistrarMensaje');//tomara el mensaj guardado en RegistrarMensaje y despues lo guardara en : app.locals.RegistrarMensaje de forma global.
    app.locals.IniciarMensaje = req.flash('IniciarMensaje');
    app.locals.user = req.user;//obtiene el usuario
    next();//callback: para que continue con la ejecucion de las demas rutas.
});//nos ayuda a usar el mensaje con la dependencia connect-flash, en todas las vistas.


app.use('/', routes);//inicair sesion
app.use('/Registrar', routes);//registrar
app.use('/fichas', RouteFichas);
app.use('/usuarios', RouteUsuarios);
app.use('/graficasA', RouteGraficasA);

module.exports = app;/* */