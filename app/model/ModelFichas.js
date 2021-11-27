const mongoose=require('mongoose');

const fichasSchema = new mongoose.Schema({
    especie:{
        type: [Number],
        required:true
    },
    estados:{
        type: [Number],
        required:true
    },
    n_habito:{
        type: [Number],
        required:true
    },
    color_flor:{
        type: [Number],
        required:true
    },
    vello_hojas:{
        type: [Number],
        required:true
    },
    numero:{
        type: Number,
        required:true
    },
    nombre:{
        type: String,
        required:true
    },
    habito:{
        type: String,
        required:true
    },
    corteza_ramas:{
        type: String,
        required:true
    },
    peciolos:{
        type: String,
        required:true
    },
    hojas:{
        type: String,
        required:true
    },
    haz:{
        type: String,
        required:true
    },
    enves:{
        type: String,
        required:true
    },
    flores:{
        type: String,
        required:true
    }
})

const Fichas = mongoose.model('fichas', fichasSchema);

module.exports = Fichas;