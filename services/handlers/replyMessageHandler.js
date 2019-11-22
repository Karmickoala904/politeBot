const sendMessage = require('../telegramMethods/sendMessage');
const redisClient = require('../../db/redis');

const replyMessageHandler = function(from, chat, text, message_id) {
  redisClient.get(`politeBot:${chat.id}:timeout`, function(err, reply) {
    if (!reply) {
      replyText = `Я убежден, что ${text} для балбесов.`
      sendMessage(chat.id, replyText, {reply_to_message_id: message_id} )
      redisClient.set(`politeBot:${chat.id}:timeout`, true, 'EX', 10)
    }
  })
}

module.exports = replyMessageHandler;
