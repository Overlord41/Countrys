const { Router } = require('express');
const { postActivity, postAddActivityCountry, getActivity } = require('../controllers/rutaActivity');

const router = Router();

router.post('/add', postActivity);
router.post('/combine', postAddActivityCountry);
router.get('/', getActivity);


module.exports = router;