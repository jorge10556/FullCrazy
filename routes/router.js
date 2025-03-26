const exp = require('express');
const router = exp.Router();
const modelo_carrito = require('../src/controller/carrito.controller');


router.get('/carrito', modelo_carrito.obtener_todos);
router.post('/carrito', modelo_carrito.crear)


router.get('/', (req, res) => {
    res.send("Bienvenido a la API de FullCrazy");
});


module.exports = router;