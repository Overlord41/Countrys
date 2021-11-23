const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const paises = require('./paises');
const actividades = require('./actividades');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', paises)
router.use('/activity', actividades)

module.exports = router;