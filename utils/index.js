var jwt = require("jsonwebtoken");

function generateToken(user) {
  var u = {
    name: user.name,
    _id: user._id
  };

  return token = jwt.sign(u, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 12 //expires in 12 hours
  })
}

function getCleanUser(user) {
  if (!user) return {};

  var u = user.toJSON();
  console.log(u);
  return {
    username: u.username,
    id: u._id
  }
}

module.exports = {
  generateToken: generateToken,
  getCleanUser: getCleanUser
}
