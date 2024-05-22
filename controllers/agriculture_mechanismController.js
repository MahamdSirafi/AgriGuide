const Agriculture_mechanism = require("../models/agriculture_mechanismModel");
const AppError = require("../utils/appError");
const handlerFactory = require("../utils/handlerFactory");
const catchAsync = require("../utils/catchAsync");
exports.getagriculture_mechanism = handlerFactory.getOne(Agriculture_mechanism);
exports.createagriculture_mechanism = handlerFactory.createOne(Agriculture_mechanism);
exports.updateagriculture_mechanism = handlerFactory.updateOne(Agriculture_mechanism);
exports.deleteagriculture_mechanism = handlerFactory.deleteOne(Agriculture_mechanism);
exports.getAllagriculture_mechanism = handlerFactory.getAll(Agriculture_mechanism);
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
