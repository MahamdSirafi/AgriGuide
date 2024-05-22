const agriculture_mechanismController = require("../controllers/agriculture_mechanismController");
  const express = require("express");
  const router = express.Router();
  router.route("/").get(agriculture_mechanismController.getAllagriculture_mechanism).post(agriculture_mechanismController.createagriculture_mechanism);
  router
    .route("/:id")
    .get(agriculture_mechanismController.getagriculture_mechanism)
    .patch(agriculture_mechanismController.updateagriculture_mechanism)
    .delete(agriculture_mechanismController.deleteagriculture_mechanism);
  module.exports = router;
  