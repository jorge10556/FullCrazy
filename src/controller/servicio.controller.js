const Servicio = require("../src/models/servicio.model");

exports.obtener_todos = async (req, res) => {
    try {
        let servicios = await Servicio.find();
        res.status(200).json(servicios);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener servicios", error });
    }
};

exports.crear = async (req, res) => {
    try {
        let nuevo_servicio = new Servicio({
            titulo: req.body.titulo,
            informacion: req.body.informacion,
            precio: req.body.precio,
            categoria: req.body.categoria,
            requisito: req.body.requisito,
            comision: req.body.comision,
            idCliente: req.body.idCliente,
            idMunicipio: req.body.idMunicipio
        });
        
        let servicioGuardado = await nuevo_servicio.save();
        res.status(200).json({ mensaje: "Servicio agregado correctamente", servicio: servicioGuardado });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al crear el servicio", error });
    }
};

exports.actualizar = async (req, res) => {
    try {
        const servicio_editado = {
            titulo: req.body.titulo,
            informacion: req.body.informacion,
            precio: req.body.precio,
            categoria: req.body.categoria,
            requisito: req.body.requisito,
            comision: req.body.comision,
            idCliente: req.body.idCliente,
            idMunicipio: req.body.idMunicipio
        };

        let actualizacion = await Servicio.findByIdAndUpdate(req.params.id, servicio_editado, { new: true });

        if (actualizacion) {
            res.status(200).json({ mensaje: "Servicio actualizado correctamente", servicio: actualizacion });
        } else {
            res.status(404).json({ mensaje: "Servicio no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar el servicio", error });
    }
};

exports.eliminar = async (req, res) => {
    try {
        let eliminacion = await Servicio.findByIdAndDelete(req.params.id);

        if (eliminacion) {
            res.status(200).json({ mensaje: "Servicio eliminado correctamente", servicio: eliminacion });
        } else {
            res.status(404).json({ mensaje: "Servicio no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar el servicio", error });
    }
};
