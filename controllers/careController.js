const Care = require("../models/careModel");
const AppError = require("../utils/appError");
const handlerFactory = require("../utils/handlerFactory");
const catchAsync = require("../utils/catchAsync");
exports.getcare = handlerFactory.getOne(Care);
exports.createcare = handlerFactory.createOne(Care);
exports.updatecare = handlerFactory.updateOne(Care);
exports.deletecare = handlerFactory.deleteOne(Care);
exports.getAllcare = handlerFactory.getAll(Care);
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
