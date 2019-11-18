const request = require('request');
const sendMessage =  function(chat_id, message, callback) {
  const url = `${process.env.BASE_TG_URL}/${process.env.BOT_ID}/sendMessage`
  const payload = {
    chat_id: chat_id,
    text: message
  }
  console.log(payload);

  request.post(url, { json: payload }, (err, res, body) => {
    console.log(res)
    // TODO write some code here
    callback();
  })
}

module.exports = sendMessage;
