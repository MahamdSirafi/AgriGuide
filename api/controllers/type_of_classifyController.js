const Type_of_classify = require("../models/type_of_classifyModel");
const AppError = require("../utils/appError");
const handlerFactory = require("../utils/handlerFactory");
const catchAsync = require("../utils/catchAsync");
exports.gettype_of_classify = handlerFactory.getOne(Type_of_classify,{path:"pests"},{path:"care"},{path:"agriculture_mechanism"});
exports.createtype_of_classify = handlerFactory.createOne(Type_of_classify);
exports.updatetype_of_classify = handlerFactory.updateOne(Type_of_classify);
exports.deletetype_of_classify = handlerFactory.deleteOne(Type_of_classify);
exports.getAlltype_of_classify = handlerFactory.getAllpop(Type_of_classify,"pests care agriculture_mechanism");
exports.defult = catchAsync(async (req, res, next) => {
  //write your code here
  const doc = []
  if(!doc){
    return (new AppError("Message Error",400))
    }
  res.status(200).json({
    status: "success",
    doc,
  });
});
