var mongoose = require('mongoose');

var carSchema = mongoose.Schema({
  year:  { type: String, required: true },
  make:  { type: String, required: true },
  model: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String, required: true },
  miles: { type: String, required: true },
  users: [{ type: mongoose.Schema.ObjectId, ref: 'User' }]
});


module.exports = mongoose.model("Car", carSchema);