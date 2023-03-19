const express = require('express');
const router = express.Router();

const publishController = require('../controllers/publish_controller');

router.post('/', publishController.addWork);

module.exports = router;