var mongoose = require('mongoose');
var User = require('../models/user');
var db = require('./database');

mongoose.connect(db.uri);

User.collection.drop();

User.create([{
  username: "test1",
  email: "test1@gmail.com",
  password: "password",
  passwordConfirmation: "password"
},{
  username: "test2",
  email: "test2@gmail.com",
  password: "password",
  passwordConfirmation: "password"
},{
  username: "test3",
  email: "test3@gmail.com",
  password: "password",
  passwordConfirmation: "password"
}], function(err, users) {
  if(err) console.error(err);
  else console.log(users);
  mongoose.connection.close();
});

