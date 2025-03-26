const mongoose = require("../src/config/database");

const schema_servicio = new mongoose.Schema({
    titulo: {
        type: String,
        required: [true, "Es obligatorio"]
    },
    informacion: {
        type: String,
        required: [true, "Es obligatorio"]
    },
    precio: {
        type: Number,
        required: [true, "Es obligatorio"]
    },
    categoria: {
        type: String,
        required: [true, "Es obligatorio"]
    },
    requisito: {
        type: String,
        required: [true, "Es obligatorio"]
    },
    comision: {
        type: Number,
        required: [true, "Es obligatorio"],
        default: 0.10
    },
    idCliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cliente",
        required: [true, "Es obligatorio"]
    },
    idMunicipio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Municipio",
        required: [true, "Es obligatorio"]
    }
}, { versionKey: false });

const Servicio = mongoose.model("servicio", schema_servicio);
module.exports = Servicio;