const express = require('express');
const router = express.Router();
const userpost = require('../controllers/userpost');

router.get('/', userpost.index);
router.post('/', userpost.userpost);

module.exports = router;