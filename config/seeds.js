var mongoose = require('mongoose');
var User = require('../models/user');
var db = require('./database');

mongoose.connect(db.uri);

User.collection.drop();

User.create([{
  username: "test4",
  email: "test4@gmail.com",
  password: "password",
  profileImage: "https://assets.entrepreneur.com/content/16x9/822/20150406145944-dos-donts-taking-perfect-linkedin-profile-picture-selfie-mobile-camera-2.jpeg",
  passwordConfirmation: "password"
},{
  username: "test5",
  email: "test5@gmail.com",
  password: "password",
  profileImage: "http://static1.squarespace.com/static/50de3e1fe4b0a05702aa9cda/t/50eb2245e4b0404f3771bbcb/1357589992287/ss_profile.jpg",
  passwordConfirmation: "password"
},{
  username: "test6",
  email: "test6@gmail.com",
  password: "password",
  profileImage: "http://giftedcoin.com/ProfileUploads/121_Natalia-Pic-profile-e1333318973427.jpg",
  passwordConfirmation: "password"
}], function(err, users) {
  if(err) console.error(err);
  else console.log(users);
  mongoose.connection.close();
});

