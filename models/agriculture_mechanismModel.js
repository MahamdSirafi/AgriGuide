const mongoose = require("mongoose");
const agriculture_mechanismSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter the agriculture_mechanism'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Please enter the description'],
    trim: true,
  },
  
},{
  timestamps:true,
  versionKey: false,
});
const Agriculture_mechanism = mongoose.model("Agriculture_mechanism", agriculture_mechanismSchema);
module.exports = Agriculture_mechanism;
