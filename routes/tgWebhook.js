var express = require('express');
var router = express.Router();

router.get('/webhook', function(req, res, next) {
  res.send('hellova')
});

module.exports = router;
