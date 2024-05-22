const Advices = require("../models/advicesModel");
const AppError = require("../utils/appError");
const handlerFactory = require("../utils/handlerFactory");
const catchAsync = require("../utils/catchAsync");
exports.getadvices = handlerFactory.getOne(Advices);
exports.createadvices = handlerFactory.createOne(Advices);
exports.updateadvices = handlerFactory.updateOne(Advices);
exports.deleteadvices = handlerFactory.deleteOne(Advices);
exports.getAlladvices = handlerFactory.getAll(Advices);
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
