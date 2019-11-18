const express = require('express');
const sendMessage = require('../services/telegramMethods/sendMessage');
const router = express.Router();


router.post('/webhook', function(req, res, next) {
  const message = req.body.message
  const sender = message.from
  const chatId = message.chat.id
  const text = `Здравствуйте, спасибо ${sender.first_name} ${sender.last_name} за приглашение. Я буду стараться поддерживать вежливую беседу с вами.`

  const responseCallback = function() {
    res.setHeader('Content-Type', 'application/json');
    res.json({ok: true});
  }

  sendMessage(chatId, text, responseCallback)
});

module.exports = router;
