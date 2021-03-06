const express = require('express');
const router = express.Router();

const home = require('./home');
const userpost  = require('./userpost');
const profile = require('./profile');
const feed = require('./feed');
const chat = require('./chat');
const error = require('./error');

router.use('/', home);
router.use('/feed', feed);
router.use('/userpost', userpost);
router.use('/profile', profile);
router.use('/chat', chat);
router.use('*', error);

module.exports = router;