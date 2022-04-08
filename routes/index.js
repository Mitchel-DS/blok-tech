const express = require('express');
const router = express.Router();
const home = require('./home');
const userpost  = require('./userpost');

router.use('/', home);
router.use('/userpost', userpost);

module.exports = router;