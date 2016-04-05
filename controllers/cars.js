var Car = require('../models/car');
var User = require('../models/user');


function carsIndex(req, res) {
  Car.find(function(err, cars) {
    if(err) return res.status(500).json({ message: err });
    return res.status(200).json(cars);
  });
}

function carsCreate(req, res){
  var car = new Car(req.body);
  car.save(function(err){
    if (err) return res.status(500).send(err);
    var name = req.body.user;
    User.findByIdAndUpdate(req.body.user, { $push: { cars: car } }, function(err, user){
      if(err) return res.status(500).json({ message: err });
      res.status(201).send(car);
    });
  });
}

function carsShow(req, res) {
  Car.findById(req.params.id, function(err, car) {
    if(err) return res.status(500).json({ message: err });
    return res.status(200).json(car);
  });
}



function carsUpdate(req, res) {
  Car.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, car) {
    if(err) return res.status(500).json({ message: err });
    return res.status(200).json(car);
  });
}

function carsDelete(req, res) {
  Car.findByIdAndRemove(req.params.id, function(err) {
    if(err) return res.status(500).json({ message: err });
    return res.status(204).send();
  });
}

module.exports = {
  index: carsIndex,
  create: carsCreate,
  show: carsShow,
  update: carsUpdate,
  delete: carsDelete

};