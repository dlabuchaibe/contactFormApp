const express = require('express');
const router = express.Router();

const messages = require('./../api/controller/messages');

router.use('/messages', messages);

module.exports = router;