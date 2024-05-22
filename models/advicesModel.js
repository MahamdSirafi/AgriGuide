const mongoose = require("mongoose");
const advicesSchema = new mongoose.Schema({
  description: {
    type: String,
    required: [true, 'Please enter the description'],
    trim: true,
  },
  type_of_classify:[{
          type: mongoose.Schema.ObjectId,
          ref:'Type_of_classify',
                required: [true, ' the advice must belong to a type .']
        }],
        
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, ''],
    },
  
},{
  timestamps:true
});
const Advices = mongoose.model("Advices", advicesSchema);
module.exports = Advices;
