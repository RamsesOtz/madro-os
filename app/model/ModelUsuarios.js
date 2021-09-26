const mongoose=require('mongoose');

const usuariosSchema = new mongoose.Schema({
    id_usuario:{
        type: Number,
        required:true
    },
    nombre_usuario:{
        type: String,
        required:true
    },
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
})

const Usuarios = mongoose.model('usuarios', usuariosSchema);

module.exports = Usuarios;