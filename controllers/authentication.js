var User = require('../models/user');
var jwt  = require('jsonwebtoken');
var secret = require('../config/tokens').secret;

function register(req, res) {
  User.create(req.body, function(err, user) {
    console.log(user)
    if(err) {
      if(err.code && (err.code === 11000 || err.code === 11001)) {
        var attribute = err.message.match(/\$([a-z]+)_/)[1];
        err = "An account with that " + attribute + " already exists";
      }
      return res.status(400).json({ message: err.toString() });
    }

    var payload = { _id: user._id, username: user.username, profileImage: user.profileImage };
    var token = jwt.sign(payload, secret, "24h");
    return res.status(200).json({ message: "Thanks for registering", user: user, token: token });
  });
}

function login(req, res) {
  console.log(req.body);
  User.findOne({ email: req.body.email }, function(err, user) {
    if(err) return res.send(500).json({ message: err });
    if(!user || !user.validatePassword(req.body.password)) return res.status(401).json({ message: "Unauthorized" });

    var payload = { _id: user._id, username: user.username, profileImage: user.profileImage };
    var token = jwt.sign(payload, secret, "24h");
    return res.status(200).json({ message: "Login successful", user: user, token: token });
  });
}

module.exports = {
  login: login,
  register: register
};