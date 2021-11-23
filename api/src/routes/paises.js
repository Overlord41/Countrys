const { Router } = require('express');
const { rutaPaises, rutaIdPais } = require('../controllers/rutaPaises');

const router = Router();


router.get('/', rutaPaises);
router.get('/:id', rutaIdPais);


module.exports = router;