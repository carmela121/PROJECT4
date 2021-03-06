var mongoose = require('mongoose');
var User = require('../models/user');
var Car = require('../models/car');
var db = require('./database');

mongoose.connect(db.uri);

User.collection.drop();
Car.collection.drop();

User.create([{
  username: "Sandokan",
  email: "test4@gmail.com",
  password: "password",
  profileImage: "http://www.lifeedited.com/wp-content/uploads/2012/03/graham-hill-headshot.jpg",
  passwordConfirmation: "password"
},{
  username: "Lylo",
  email: "test5@gmail.com",
  password: "password",
  profileImage: "http://static1.squarespace.com/static/50de3e1fe4b0a05702aa9cda/t/50eb2245e4b0404f3771bbcb/1357589992287/ss_profile.jpg",
  passwordConfirmation: "password"
},{
  username: "Sandy",
  email: "test6@gmail.com",
  password: "password",
  profileImage: "http://www.binarytradingforum.com/core/image.php?userid=27&dateline=1355305878",
  passwordConfirmation: "password"
  },{
    username: "Beth",
    email: "test7@gmail.com",
    password: "password",
    profileImage: "http://www.sashajacques.co.uk/images-headshots/2010-headshot-8460-copy.jpg",
    passwordConfirmation: "password"


  }], function(err, users) {
  if(err) console.error(err);
  else console.log(users);

  Car.create([{
  year: "2013",
  make: "BMW",
  model: "Series 3",
  price: 53,
  image: "http://zombdrive.com/images/2013-bmw-3-series-12.jpg",
  miles: 10000,
  postCode: "E2 8FS",
  user: users[0]
  },{
  year: "2006",
  make: "LAND ROVER",
  model: "Sport",
  price: 70,
  image: "http://media.caranddriver.com/images/06q3/267360/2006-land-rover-range-rover-sport-hse-photo-5038-s-429x262.jpg",
  miles: 10000,
  postCode: "E2 8FS",
  user: users[1]
  },{
  year: "2015",
  make: "Tesla",
  model: "S",
  price: 60,
  image: "http://media.caranddriver.com/images/14q4/638369/2015-tesla-model-s-p85d-first-drive-review-car-and-driver-photo-648964-s-original.jpg",
  miles: 10000,
  postCode: "E2 8FS",
  user: users[2]
  },{
  year: "2013",
  make: "Ford",
  model: "Fiesta",
  price: 45,
  image: "http://static.usnews.rankingsandreviews.com/images/Auto/izmo/350753/2013_ford_fiesta_angularfront.jpg",
  miles: 10000,
  postCode: "E2 8FS",
  user: users[0]
  },{
  year: "2013",
  make: "Porsche",
  model: "Cayman",
  price: 100,
  image: "http://s3.caradvice.com.au/wp-content/uploads/2013/02/Porsche-Cayman-profile-blue-driving.jpg",
  miles: 10000,
  postCode: "E2 8FS",
  user: users[3]


  }], function(err, cars) {
    if(err) console.error(err);
    else console.log(cars);
    mongoose.connection.close();
  });
});







