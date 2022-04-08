const express = require('express');
const router = express.Router();
const home = require('./home');
const userpost  = require('./userpost');
const profile = require('./profile');
const error = require('./error');

router.use('/', home);

router.use('/userpost', userpost);
router.use('/profile', profile);
router.use('*', error);

module.exports = router;