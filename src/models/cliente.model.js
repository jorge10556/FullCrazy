const mongoose = require("../config/database");

const SchemaCliente = new mongoose.Schema({
    nombre: {
        type: Text,
        required: [true, "es obligatorio"]
    },
    apellido: {
        type: Text,
        required: [true, "es obligatorio"]
    },
    rol: {
        type: Text,
        enum: ['cliente', 'director', 'administrador'],
        required: [true, "es obligatorio"] 
    },
    tipo_documento: {
        type: Text,
        enum: ['CC', 'TI', 'CE', 'PA'],
        required: [true, "es obligatorio"] 
    },
    numero_documento: {
        type: Number,
        required: [true, "es obligatorio"] 
    },
    telefono: {
        type: Number,
        required: [true, "es obligatorio"] 
    },
    email: {
        type: Text,
        required: [true, "es obligatorio"] 
    },
    contrasena: {
        type: Text,
        required: [true, "es obligatorio"] 
    },
}, { versionKey: false });


const clientes = mongoose.model("cliente", SchemaCliente);
module.exports = clientes;
