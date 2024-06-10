const mongoose = require("mongoose");
const storageSchema = new mongoose.Schema({
   
    name : {
      required : [true , 'must enter name'],
      type : String,
    },
    discrption : {
      required : [true , 'must enter discrption'],
      type : String,
    },
    
},{
      timestamps: true,
      versionKey: false
    });
    const Storage = mongoose.model("Storage", storageSchema);
    module.exports = Storage;
    