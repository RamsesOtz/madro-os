/*Este Archivo hace la conexion en basse a lo que contiene el archivo config.js*/
const CONFIG = require('./config');
const mongoose = require('mongoose');

module.exports = {
    connection:null,
    connect: function(){
        if(this.connection) return this.connect;
        return mongoose.connect(CONFIG.DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(conexion =>{
            this.connection = conexion;
            console.log('la conexion se realizo de manera correcta');
        }).catch(error => console.log(error));
    }
}