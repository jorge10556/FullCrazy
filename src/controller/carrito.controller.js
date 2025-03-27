const modelo_carrito = require('../models/carrito.model');


exports.obtener_todos = async (req, res) => {
    try {
        let carritos = await modelo_carrito.find();
        res.status(200).json(carritos);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener carritos", error });
    }
};


exports.crear = async (req, res) => {
    try {
        let nuevo_carrito = new modelo_carrito({
            total: req.body.total,
            cantidad: req.body.cantidad,
            fecha: req.body.fecha,
        });

        await nuevo_carrito.save();
        res.status(200).json({ mensaje: "Carrito agregado correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al agregar el carrito", error });
    }
};



exports.actualizar = async (req, res) => {
    try {
        const carrito_editado = {
            _id: req.params.id,
            total: req.body.total,
            cantidad: req.body.cantidad,
            fecha: req.body.fecha,
        };

        let actualizacion = await modelo_carrito.findByIdAndUpdate(req.params.id, carrito_editado, { new: true });

        if (actualizacion) {
            res.status(200).json({ mensaje: "Carrito actualizado correctamente", carrito: actualizacion });
        } else {
            res.status(404).json({ mensaje: "Carrito no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar el carrito", error });
    }
};



exports.eliminar = async (req, res) => {
    try {
        const id = req.params.id;

        let eliminacion = await modelo_carrito.findByIdAndDelete(id);

        if (eliminacion) {
            res.status(200).json({ mensaje: "Carrito eliminado correctamente", carrito: eliminacion });
        } else {
            res.status(404).json({ mensaje: "Carrito no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar el carrito", error });
    }
};