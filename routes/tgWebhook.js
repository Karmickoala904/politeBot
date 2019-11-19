const express = require('express');
const router = express.Router();
const invitationHandler = require('../services/handlers/invitationHandler');

router.post('/webhook', function(req, res, next) {
  const message = req.body.message
  const { from, chat, text, new_chat_member } = message
  console.log(message);

  const responseCallback = function() {
    res.setHeader('Content-Type', 'application/json');
    res.json({ok: true});
  }

  if (!!new_chat_member) {
    invitationHandler(from, chat, new_chat_member, responseCallback)
  } else {
    responseCallback()
  }
});

module.exports = router;
