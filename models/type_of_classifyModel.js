const mongoose = require('mongoose');
const type_of_classifySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'enter name.'],
    },
    // المواسم
    planting_date:
    {
      type: String,
      required: [true, 'ادخل وصف عن المواسم'],
    },

    //طرق الري
    irrigation:
    {
      type: String,
      required: [true, 'ادخل وصف عن طريقة الري'],


    },
    //طرق الجني
    reep_method:
    {
      type: String,
      required: [true, 'ادخل وصف عن طريقة الجني'],

    },

    photo: {
      type: String,
      required: [true, 'ادخل صورة'],
    },
    discription: {
      type: String,
      required: [true, 'ادخل وصف'],
    },
    //العناية
    care: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Care',
        required: [true, 'type must belong to a care.'],
      },
    ],
    //الية الزراعة
    agriculture_mechanism: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Agriculture_mechanism',
        required: [true, 'type must belong to a Agriculture_mechanism.'],
      },
    ],
    //الافات
    pests: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Pests',
        required: [true, 'type must belong to a pests.'],
      },
    ],
    // طرق التخزين
    storage_method:
    {

      type: mongoose.Schema.ObjectId,
      ref: 'Storage',
      required: [true, 'type must belong to a storage methode.'],
    },



    // القيمة الغذائية
    nutritional_value: [
      {
        type: String,
        enum: ['proteins', 'sugars', 'mineral salts', 'vitamins'],
        default: '',
      },
    ],



    //اصناف النبات
    plant_varieties: [
      {
        type: String,
        enum: [
          'vegetable crops',
          'fruit crops',
          'oil crops',
          'cereal crops',
          'legume crops',
          'decoration plant',
        ],
        default: '',
      },
    ],

  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Type_of_classify = mongoose.model(
  'Type_of_classify',
  type_of_classifySchema
);
module.exports = Type_of_classify;
