const sendMessage = require('../telegramMethods/sendMessage');

const invitationHandler = function(from, chat, new_chat_member, callback) {
  const { is_bot, id } = new_chat_member
  const { first_name, last_name } = from
  if (is_bot && id == 1004847453) {
    const replyText = `Здравствуйте, спасибо ${first_name} ${last_name} за приглашение. Я буду стараться поддерживать вежливую беседу с вами.`
    sendMessage(chat.id, replyText, callback)
  }
}

module.exports = invitationHandler;
