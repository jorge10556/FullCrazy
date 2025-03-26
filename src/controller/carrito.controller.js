
// exports.crear = async (req,res)=>{
//     let nuevo_carrito = new modelo_carrito({
//         "total": req.body.total,
//         "cantidad": req.body.cantidad,
//         "fecha": req.body.fecha,

//     });
//     res.json(await nuevo_carrito.save());
//     if (nuevo_carrito)
//         res.status(200).json({"mensaje": "carrito agregado"})
//     else
//         res.status(404).json({"mensaje": "carrito no agregado"})
// };


const modelo_carrito = require('../models/carrito.model'); 

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


exports.obtener_todos = async (req, res) => {
    try {
        let carritos = await modelo_carrito.find(); 
        res.status(200).json(carritos);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener carritos", error });
    }
};