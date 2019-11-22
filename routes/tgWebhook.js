const express = require('express');
const router = express.Router();
const invitationHandler = require('../services/handlers/invitationHandler');
const replyMessageHandler = require('../services/handlers/replyMessageHandler');

router.post('/webhook', function(req, res, next) {
  const message = req.body.message
  const { from, chat, text, new_chat_member, message_id } = message
  console.log(message);

  if (!!new_chat_member) invitationHandler(from, chat, new_chat_member)
  if (text) replyMessageHandler(from, chat, text, message_id)


  res.setHeader('Content-Type', 'application/json');
  res.json({ok: true});
});

module.exports = router;
