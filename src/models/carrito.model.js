const mongoose = require("../config/database");

const schema_carrito = new mongoose.Schema({
    total: {
        type: Number,
        required: [true, "es obligatorio"]
    },
    cantidad: {
        type: Number,
        required: [true, "es obligatorio"]
    },
    fecha: {
        type: Date,
        required: [true, "es obligatorio"]
    },
}, { versionKey: false });

const carrito = mongoose.model("carrito", schema_carrito);
module.exports = carrito;
