const mongoose = require("mongoose");
const type_of_classifySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'enter name.']
  },
  //العناية
  care: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Care',
    required: [true, 'type must belong to a care.']
  }],
  //الية الزراعة
  agriculture_mechanism: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Agriculture_mechanism',
    required: [true, 'type must belong to a Agriculture_mechanism.']

  }],
  //الافات
  pests: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Pests',
    required: [true, 'type must belong to a pests.']
  }],
  // المواسم
  seasons: [{
    type: String,
    enum: ['summer', 'winter', 'autumn', 'the spring'],
    default: 'summer',
  }],
  // القيمة الغذائية
  nutritional_value: [{
    type: String,
    enum: ['proteins', 'sugars', 'mineral salts', 'vitamins'],
    default: 'proteins',
  }],
  // طرق التخزين
  storage_method: [{
    type: String,
    enum: ['cooling', 'pickling', ' drying', 'sort', 'fill'],
    default: 'drying',
  }],
  //طرق الجني
  reep_method: [{
    type: String,
    enum: ['pick', 'harvest', 'rip'],
    default: 'pick',
  }],
  //اصناف النبات
  plant_varieties: [{
    type: String,
    enum: ['vegetable crops', 'fruit crops', 'oil crops', 'cereal crops', 'legume crops', 'decoration plant'],
    default: 'vegetable crops',
  }],
  //طرق الري
  irrigation: [{
    type: String,
    enum: ['spray', 'dotting', 'watering', 'immersion'],
    default: 'spray ',
  }],
  photo: {
    type: String,
    required: [true, 'enter photo.']

  },
  discription: {
    type: String,
    required: [true, 'enter photo.']

  }
},
  {
    timestamps: true
  });
const Type_of_classify = mongoose.model("Type_of_classify", type_of_classifySchema);
module.exports = Type_of_classify;
