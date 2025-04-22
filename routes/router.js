const exp = require('express');
const router = exp.Router();
const modelo_carrito = require('../src/controller/carrito.controller');


router.get('/carritos', modelo_carrito.obtener_todos);
router.post('/carritos_agregar', modelo_carrito.crear);
router.put('/carritos/:id', modelo_carrito.actualizar);
router.delete('/carritos_eliminar/:id', modelo_carrito.eliminar)

router.get('/clientes', modelo_cliente.obtener_todos);
router.post('/clientes_agregar', modelo_cliente.crear);
router.put('/clientes/:id', modelo_cliente.actualizar);
router.delete('/clientes_eliminar/:id', modelo_cliente.eliminar)

router.get('/inicio', (req, res) => {
    res.send("Bienvenido a la API de FullCrazy");
});


module.exports = router;