var Car = require('../models/car');
var Booking = require('../models/booking');


function bookingsIndex(req, res) {
  Booking.find(function(err, bookings) {
    if(err) return res.status(500).json({ message: err });
    return res.status(200).json(bookings);
  });
}

function bookingsCreate(req, res){
  Car.findById({id: req.body.carId}, function(err, car) {
    var booking = new Booking();
    booking.car = car;
    booking.startDate = req.body.startDate;
    booking.endDate = req.body.endDate;
    booking.save(function() {
      return res.status(200).send({car: car, booking: booking});
    });
  })
  
  booking.save(function(err){
    if (err) return res.status(500).send(err);
    res.status(201).send(booking);
  });
}

function bookingsShow(req, res) {
  Booking.findById(req.params.id, function(err, booking) {
    if(err) return res.status(500).json({ message: err });
    return res.status(200).json(booking);
  });
}

function bookingsUpdate(req, res) {
  Booking.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, booking) {
    if(err) return res.status(500).json({ message: err });
    return res.status(200).json(booking);
  });
}

function bookingsDelete(req, res) {
  Booking.findByIdAndRemove(req.params.id, function(err) {
    if(err) return res.status(500).json({ message: err });
    return res.status(204).send();
  });
}

module.exports = {
  index: bookingsIndex,
  create: bookingsCreate,
  show: bookingsShow,
  update: bookingsUpdate,
  delete: bookingsDelete
};