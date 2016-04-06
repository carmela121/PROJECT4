var Car = require('../models/car');
var Booking = require('../models/booking');
var User = require('../models/user');

function carsAvailable(req, res) {

  if(!req.query.start || !req.query.end) {
    return res.status(400).json({ message: "Please supply a date range"});
  }

  var startDate = new Date(req.query.start);
  var endDate = new Date(req.query.end);

  Booking.find({ $and: [{ endDate: { $gte: startDate } }, { startDate: { $lte: endDate } }] }, function(err, bookings) {
    if (err) return res.status(500).send(err);

    carIds = bookings.map(function(booking) {
      return booking.car;
    });

    Car.find({ _id: { $nin: carIds }}, function(err, cars) {
      if (err) return res.status(500).send(err);
      return res.status(200).json(cars);
    });
  });
}

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
  delete: carsDelete,
  available: carsAvailable
};