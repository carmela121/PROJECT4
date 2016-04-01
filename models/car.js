var mongoose = require('mongoose');

var carSchema = mongoose.Schema({
  model: { type: String, required: true },
  year:    { type: String, required: true },
  passangers: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String, required: false }
});

module.exports = mongoose.model("Car", carSchema);