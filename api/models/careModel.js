const mongoose = require('mongoose');
const careSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter the care name'],
      trim: true,
    },
    discrption: {
      type: String,
      required: [true, 'Please enter the care name'],
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Care = mongoose.model('Care', careSchema);
module.exports = Care;
