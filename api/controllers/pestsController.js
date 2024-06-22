const Pests = require("../models/pestsModel");
const AppError = require("../utils/appError");
const handlerFactory = require("../utils/handlerFactory");
const catchAsync = require("../utils/catchAsync");
exports.getpests = handlerFactory.getOne(Pests);
exports.createpests = handlerFactory.createOne(Pests);
exports.updatepests = handlerFactory.updateOne(Pests);
exports.deletepests = handlerFactory.deleteOne(Pests);
exports.getAllpests = handlerFactory.getAll(Pests);
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
