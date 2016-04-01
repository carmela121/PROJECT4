var Car = require('../models/car');


function carsIndex(req, res) {
  Car.find(function(err, cars) {
    if(err) return res.status(500).json({ message: err });
    return res.status(200).json(cars);
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
  show: carsShow,
  update: carsUpdate,
  delete: carsDelete

};