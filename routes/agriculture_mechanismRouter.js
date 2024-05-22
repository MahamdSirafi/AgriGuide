const agriculture_mechanismController = require("../controllers/agriculture_mechanismController");
const authMiddlewers = require("../middlewares/authMiddlewers");

  const express = require("express");
  const router = express.Router();
  router.route("/").get(agriculture_mechanismController.getAllagriculture_mechanism).post(authMiddlewers.protect,authMiddlewers.restrictTo("admin"),agriculture_mechanismController.createagriculture_mechanism);
  router
    .route("/:id")
    .get(agriculture_mechanismController.getagriculture_mechanism)
    .patch(authMiddlewers.protect,authMiddlewers.restrictTo("admin"),agriculture_mechanismController.updateagriculture_mechanism)
    .delete(authMiddlewers.protect,authMiddlewers.restrictTo("admin"),agriculture_mechanismController.deleteagriculture_mechanism);
  module.exports = router;
  