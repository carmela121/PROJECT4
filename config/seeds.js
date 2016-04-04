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

Car.collection.drop();

Car.create([{
year: "2013",
make: "BMW",
model: "Series 3",
price: "£53",
image: "http://zombdrive.com/images/2013-bmw-3-series-12.jpg",
miles: "10,000"
},{
year: "2006",
make: "LAND ROVER",
model: "Sport",
price: "£70",
image: "http://media.caranddriver.com/images/06q3/267360/2006-land-rover-range-rover-sport-hse-photo-5038-s-429x262.jpg",
miles: "10,000"
},{
year: "2015",
make: "Tesla",
model: "S",
price: "£60",
image: "http://media.caranddriver.com/images/14q4/638369/2015-tesla-model-s-p85d-first-drive-review-car-and-driver-photo-648964-s-original.jpg",
miles: "10,000"

}], function(err, cars) {
  if(err) console.error(err);
  else console.log(cars);
  mongoose.connection.close();
});


