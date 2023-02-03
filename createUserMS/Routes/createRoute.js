const {Router}= require('express');
const { crearUsuario } = require('../Controllers/createController');

const router = Router();

router.post('/',crearUsuario)


module.exports = router;
