const modelo_carrito = require('../src/models/carrito.model')

exports.crear = async (req,res)=>{
    let nuevo_carrito = new modelo_carrito({
        "total": req.body.total,
        "cantidad": req.body.cantidad,
        "fecha": req.body.fecha,

    })
    res.json(await nuevo_carrito.save());
}