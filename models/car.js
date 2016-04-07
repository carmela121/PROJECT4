var mongoose = require('mongoose');


var carSchema = mongoose.Schema({
  year:  { type: String, required: true },
  make:  { type: String, required: true },
  model: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  miles: { type: Number, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
});


module.exports = mongoose.model("Car", carSchema);