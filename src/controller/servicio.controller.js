

const Servicio = require("../src/models/servicio.model");

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
        res.json(servicioGuardado);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al crear el servicio", error });
    }
};