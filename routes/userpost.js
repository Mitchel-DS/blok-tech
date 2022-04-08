const express = require('express');
const router = express.Router();
const userpostController = require('../controllers/userpost');

router.get('/', userpostController.index);
router.post('/', userpostController.userpost);

module.exports = router;