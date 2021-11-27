const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');//importamos libreria 

const usuariosSchema = new mongoose.Schema({
    /*nombre_usuario:{
        type: String,
        required:true
    },*/
    correo:{
        type: String,
        required:true
    },
    pass:{
        type: String,
        required:true
    },
    privilegio:{
        type: Number,
        default:1
    }
});

/*metodo para Ciframos datos*/
usuariosSchema.methods.encryptPassword = (pass) => {
    //return: nos devuelve el resultado de la encriptacion
    return bcrypt.hashSync(pass, bcrypt.genSaltSync(10));//hashSync: recibe la contraseña y luego le decimos cuantas veces queremos que ejecute un algoritmo pra cifrarla.
    //se ejecuta en modo Sync: un metodo que nos hace esperar el resultado.

};//metodo que recibe una contraseña y cuando reciba la contraseña la manda al modulo bcrypt para luego cifrar la contraseña

/*metodo comparar datos al iniciar sesion*/
usuariosSchema.methods.comparePassword = function(pass) {
    //return: nos devuelve el resultado
    return bcrypt.compareSync(pass, this.pass);//compareSync: nos permite comparar la contraseña del usuario con el dato que el usuario a usado.
};//metodo que recibe la contraseña del usuariosSchema y lo compara con la contraseña ingreso para iniciar sesion.

const Usuarios = mongoose.model('usuarios', usuariosSchema);

module.exports = Usuarios;