const express = require('express');
const router = express.Router();
const error = require('../controllers/error');

router.get('/', error.index);

module.exports = router;