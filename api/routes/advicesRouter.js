const carController = require("../controllers/advicesController");
const authMiddlewers = require("../middlewares/authMiddlewers");
const dynamicMiddleware = require("../middlewares/dynamicMiddleware");

const express = require("express");
const router = express.Router();
router.route("/").get(carController.getAlladvices).post(authMiddlewers.protect,
  dynamicMiddleware.addVarBody("user", "userId"), carController.createadvices);
router
  .route("/:id")
  .get(dynamicMiddleware.addQuery("active",true),dynamicMiddleware.addQuery("type_of_classify","id"),carController.getAlladvices)
  .patch(carController.updateadvices)
  .delete(carController.deleteadvices);
module.exports = router;
