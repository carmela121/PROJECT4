var mongoose = require('mongoose');

var carSchema = mongoose.Schema({
  year:  { type: String, required: true },
  make:  { type: String, required: true },
  model: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String, required: true },
  miles: { type: String, required: true },
  postCode: { type: String, required: true }
});

module.exports = mongoose.model("Car", carSchema);