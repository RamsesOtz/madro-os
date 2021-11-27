const Passport = require('passport');//importamos la libreria de passport
const LocalStrategy = require('passport-local').Strategy;//nos permite dar distintos roles y los nombra Strategy

const User = require('../model/ModelUsuarios');

/*Metodo para serializar y des-searlizar* (PARA PODER NAVEGAR CON SESIONES)*/
    //serealiza
Passport.serializeUser((user, done) => {//metodo serializeUser: que resive usuario y un callback: done determinado
    done(null, user.id);//almacena el id, obteniendolo desde el usuario. 
});//una vez que se tiene el usuario vamos a guardarlo en un archivo para que las distintas paginas no pidan la ventanade logeo cuando se cambia de pagina. 
   
    //des-seraliza
Passport.deserializeUser(async (id, done) => {//metodo deserializeUser: que resive un id y un callback: done
    //buscam el usuario por el id obtenido y recibe el id del usuario
    const user = await User.findById(id);//como es un metodo Async usamos metodo await para hacerlo en Sync.
    done(null, user);//terminamos proceso con done sin error y con el usuario.
});
    



/*Funcion que nos dira que hacer cuando obtenga el resultado de los datos del usuario*/
//auth: metodo de autenticacion| new LocalStrategy:solo le da el nombre a nuestro metodo y se usa passport para autenticarlo
//LocalStrategy: recibe 2 parametros: ({objeto de configuracion: tipo de dato que reciviremos desde el clliente}, "() => {}Callback de ejecucion: nos ayuda a saber que aremos con los datos")
Passport.use('authReg', new LocalStrategy({
        usernameField: 'correo',
        passwordField: 'pass', //dato que se usara para autenticar el usuario
        passReqToCallback: true //nos permite registrar mas datos para recibirlos con un req
}, async (req, correo, pass, done) => {
    //realizamos busqueda de correos para saber si ya existe o no
    const user = await User.findOne({correo: correo});//findOne busca solo los datos de una persona
    /*correo: correo-el campo de correo del documento coinsida con correo que estamos resiviendo*/
        //validamos
        if(user){//si resivimos un usuario y ya existe regresamos un mensaje
            return done(null, false, req.flash('RegistrarMensaje', '* CORREO ELECTRONICO EXISTENTE.'));//RegistrarMensaje: variable  donde se guardara nuestro mensaje
        }else{
            //declaramos un nuevo usuario
            const newUser = new User();//usuario sin datos
            newUser.correo = correo;
            newUser.pass = newUser.encryptPassword(pass);
            //para guardar el usuario
            await newUser.save();//metodo Async: lleva tiempo para que se guarde en la BD, pero con el await hacemos que sea como Sync
            
            //devolvemos la respuesta
            done(null, newUser);//cuando el usuario inicie sesion con el modulo Passport,
                            //creara un nuevo usuario, luego lo guardara Mus.save y
                            //terminara el proceso devolviendome un null para un error
                            //y el usuario que a registrado.
        }

}));//done: parametro para devolvr una respuesta al cliente


//LOGIN
Passport.use('authInit', new LocalStrategy({
    //tomamos los datos cuando se loge
    usernameField: 'correo',
    passwordField: 'pass', //dato que se usara para autenticar el usuario
    passReqToCallback: true //nos permite registrar mas datos para recibirlos con un req
}, async (req, correo, pass, done) => {
    //comprobacion si el usuario existe o no mediante el correo electronico
    const user = await User.findOne({correo: correo});//buscar un usuario por su correo.
    //validamos
    if(!user){
        return done(null, false, req.flash('IniciarMensaje', '* USUARIO NO ENCONTRADO'));
    }
    //si la contraseña no coincide
    if(!user.comparePassword(pass)){
        return done(null, false, req.flash('IniciarMensaje', '* CONTRASEÑA INCORRECTA'));
    }
    //validamos si el correo y contraseña son correctos
    done(null, user);

}));