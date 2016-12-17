var mongoose = require('mongoose');

var User = mongoose.Schema(
  {
    username: String,
    password: String,
  }
)

module.exports = mongoose.model('User', User);
