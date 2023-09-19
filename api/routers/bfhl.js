const bfhl = require('../controllers/bfhl.js');
const router = require("express").Router();

router.post('/', bfhl.AddData);
router.get('/', bfhl.GetOpCode);

module.exports = router;