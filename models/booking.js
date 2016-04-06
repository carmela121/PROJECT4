var mongoose = require('mongoose');

var bookingSchema = mongoose.Schema({
  startDate: Date,
  endDate: Date,
  car: { type: mongoose.Schema.ObjectId },
  user: { type: mongoose.Schema.ObjectId }
});

module.exports = mongoose.model("Booking", bookingSchema);