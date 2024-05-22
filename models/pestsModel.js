const mongoose = require("mongoose");
const pestsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter the pests name'],
    trim: true,
  },
  symptoms_of_injury: {
    type: String,
    required: [true, 'Please enter the pests name'],
    trim: true,
  },
  photo: {
    type: String,
    required: [true, 'enter'],
    
  },
},{
  timestamps:true
});
const Pests = mongoose.model("Pests", pestsSchema);
module.exports = Pests;
