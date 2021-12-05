const { Router } = require('express');
const { rutaPaises, rutaIdPais, rutaPrueba } = require('../controllers/rutaPaises');

const router = Router();


// router.get('/listact', rutaPrueba);
router.get('/', rutaPaises);
router.get('/:id', rutaIdPais);


module.exports = router;