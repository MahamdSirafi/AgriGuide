const Advices = require("../models/advicesModel");
const AppError = require("../utils/appError");
const handlerFactory = require("../utils/handlerFactory");
const catchAsync = require("../utils/catchAsync");
exports.getadvices = handlerFactory.getOne(Advices);
exports.createadvices = handlerFactory.createOne(Advices);
exports.updateadvices = handlerFactory.updateOne(Advices);
exports.deleteadvices = handlerFactory.deleteOne(Advices);
exports.getAlladvices = handlerFactory.getAllpop1(Advices, { path: "user", select: "name role" });

