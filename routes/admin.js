const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin_controller');

router.post('/signup', adminController.signUp);
router.get('/signin', adminController.signIn);

module.exports = router;