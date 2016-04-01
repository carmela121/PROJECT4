var mongoose = require('mongoose');
var User = require('../models/user');
var db = require('./database');

mongoose.connect(db.uri);

User.collection.drop();

User.create([{
  username: "mickyginger",
  email: "mike.hayden@ga.co",
  password: "password",
  passwordConfirmation: "password"
},{
  username: "theBoyRane",
  email: "rane.gowan@ga.co",
  password: "password",
  passwordConfirmation: "password"
},{
  username: "oholdme",
  email: "ollie.holden@ga.co",
  password: "password",
  passwordConfirmation: "password"
}], function(err, users) {
  if(err) console.error(err);
  else console.log(users);
  mongoose.connection.close();
});

