const mongoose=require('mongoose');

const graficasASchema = new mongoose.Schema({
    G_a_especie:{
        type: Number,
        required:true
    },
    G_a_clasifi:{
        type: String,
        required:true
    },
    G_a_estado:{
        type: [String],
        required:true
    },
    G_a_nombre:{
        type: String,
        required:true
    },
    G_a_habito:{
        type: [String],
        required:true
    },
    G_a_corteza_alta_tronco_y_ramas:{
        type: [String],
        required:true
    },
    G_a_corteza_ramillas:{
        type: [String],
        required:true
    },
    G_a_hoja_peciolos:{
        type: [String],
        required:true
    },
    G_a_hoja_enves:{
        type: [String],
        required:true
    },
    G_a_color_flor:{
        type: [String],
        required:true
    }
})

const GraficasA = mongoose.model('graficas_arbutus', graficasASchema);

module.exports = GraficasA;