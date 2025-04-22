const modelo_cliente= require('../models/cliente.model');


exports.obtener_todos = async (req, res) => {
    try {
        let clientes = await modelo_cliente.find();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener clientes", error });
    }
};


exports.crear = async (req, res) => {
    try {
        let nuevo_cliente = new modelo_cliente({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            rol: req.body.rol,
            tipo_documento: req.body.tipo_documento,
            numero_documento: req.body.numero_documento,
            telefono: req.body.telefono,
            email: req.body.email,
            contrasena: req.body.contrasena,
        });

        await nuevo_cliente.save();
        res.status(200).json({ mensaje: "cliente agregado correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al agregar el cliente", error });
    }
};



exports.actualizar = async (req, res) => {
    try {
        const cliente_editado = {
            _id: req.params.id,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            rol: req.body.rol,
            tipo_documento: req.body.tipo_documento,
            numero_documento: req.body.numero_documento,
            telefono: req.body.telefono,
            email: req.body.email,
            contrasena: req.body.contrasena,
        };

        let actualizacion = await modelo_cliente.findByIdAndUpdate(req.params.id, cliente_editado, { new: true });

        if (actualizacion) {
            res.status(200).json({ mensaje: "cliente actualizado correctamente", cliente: actualizacion });
        } else {
            res.status(404).json({ mensaje: "cliente no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar el cliente", error });
    }
};



exports.eliminar = async (req, res) => {
    try {
        const id = req.params.id;

        let eliminacion = await modelo_cliente.findByIdAndDelete(id);

        if (eliminacion) {
            res.status(200).json({ mensaje: "cliente eliminado correctamente", cliente: eliminacion });
        } else {
            res.status(404).json({ mensaje: "cliente no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar el cliente", error });
    }
};