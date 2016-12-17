var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');

var utils = require('../utils/index');
var usersSchema = require('../models/User')

if (!process.env.JWT_SECRET) {
  console.error('ERROR!: Please set JWT_SECRET before running the app. \n run: export JWT_SECRET=<some secret string> to set JWTSecret. ');
  process.exit();
}

router.post('/signup', function(req, res, next) {
  var user;
  var password = "qwerty";
  var hash = bcrypt.hashSync(password.trim(), 10);
  user = new usersSchema({
    username: 'robert',
    password: hash
  });
  user.save(function(err) {
    if (!err) {
      return console.log("You succesfully created " + user);
    } else {
      return console.log(err);
    }
  });
  res.send({user: user});
});

router.post('/signin', function(req, res, next) {
  usersSchema
    .findOne({username: req.body.username})
    .exec(function(err, user) {
      if (err) throw err;

      if (!user) {
        return res.status(404).json({
          error: true,
          message: "Username or password is wrong"
        })
      }

      bcrypt.compare(req.body.password, user.password, function(err, valid) {
        if (!valid) {
          return res.status(404).json({
            error: true,
            message: "Username or password is wrong"
          });
        }

        token = utils.generateToken(user);
        user = utils.getCleanUser(user);

        res.json({
          user: user,
          token: token
        });
      });
    });
});

router.get('/mefromtoken', function(req, res, next) {
  var token = req.body.token || req.query.token;
  if (!token) {
    return res.status(401).json({
      message: "Must pass token"
    })
  }

  jwt.verify(token, process.env.JWT_SECRET, function(err, user){
    if (err) throw err;
    usersSchema.findById({
      '_id': user._id
    }, function(err, user){
      if (err) throw err;

      user = utils.getCleanUser(user);

      res.json({
        user: user,
        token: token
      });

    });
  });
});

module.exports = router;
