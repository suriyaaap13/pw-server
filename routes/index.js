const express = require('express');
const router = express.Router();

router.get('/admin', require('./admin'));
router.get('/publish', require('./publish'));

module.exports = router;