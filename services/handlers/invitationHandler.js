const sendMessage = require('../telegramMethods/sendMessage');

const invitationHandler = function(from, chat, new_chat_member) {
  const { is_bot, id } = new_chat_member

  if (is_bot && id == 1004847453) {
    const replyText = `Здравствуйте! Спасибо ${from.first_name} ${from. last_name} за приглашение. Я буду стараться поддерживать вежливую беседу с вами.`
    sendMessage(chat.id, replyText)
  }

  if (!is_bot) {
    const replyText = `Здравствуйте ${new_chat_member.first_name} ${new_chat_member.last_name}! Добро пожаловать в вежливую беседу. @${new_chat_member.username}`
    sendMessage(chat.id, replyText)
  }
}

module.exports = invitationHandler;
