const express = require('express');
const router = express.Router();
const serviMessage = require('./../../services/messages');

router.route('/')
.get((req, res) => {
    res.status(200).send(serviMessage.messagesArray)
})
.post((req, res) => {
    const form = {
        id: serviMessage.mssgArrayLength(),
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        country: req.body.country,
        messages: req.body.messages
    }
    serviMessage.newFormEntry(form);
    res.status(200).send(`${JSON.stringify(serviMessage.messagesArray)}`)
});

module.exports = router;