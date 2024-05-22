const type_of_classifyController = require("../controllers/type_of_classifyController");
const dynamicMiddleware = require("../middlewares/dynamicMiddleware");
  const express = require("express");
  const router = express.Router();
  router.route("/getAllpests").get(dynamicMiddleware.addQuery("fields","pests,-care,-agriculture_mechanism"),type_of_classifyController.getAlltype_of_classify)
  router.route("/").get(type_of_classifyController.getAlltype_of_classify).post(type_of_classifyController.createtype_of_classify);
  router
    .route("/:id")
    .get(type_of_classifyController.gettype_of_classify)
    .patch(type_of_classifyController.updatetype_of_classify)
    .delete(type_of_classifyController.deletetype_of_classify);
  module.exports = router;
  