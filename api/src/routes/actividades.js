const { Router } = require('express');
const { postActivity, postAddActivityCountry } = require('../controllers/rutaActivity');

const router = Router();

router.post('/add', postActivity);
router.post('/combine', postAddActivityCountry);


module.exports = router;