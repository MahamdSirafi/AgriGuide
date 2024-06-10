const Storage = require("../models/storageModel");
const AppError = require("../utils/appError");
const handlerFactory = require("../utils/handlerFactory");
const catchAsync = require("../utils/catchAsync");
exports.getstorage = handlerFactory.getOne(Storage);
exports.createstorage = handlerFactory.createOne(Storage);
exports.updatestorage = handlerFactory.updateOne(Storage);
exports.deletestorage = handlerFactory.deleteOne(Storage);
exports.getAllstorage = handlerFactory.getAll(Storage);
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
