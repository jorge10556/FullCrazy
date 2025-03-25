const exp = require('express');
const router = exp.Router();
const modelo_carrito = require('../controller/carrito.controller')

router.get('/carrito', modelo_carrito.crear);


module.exports = router;