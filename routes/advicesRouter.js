const carController = require("../controllers/advicesController");
  const express = require("express");
  const router = express.Router();
  router.route("/").get(carController.getAlladvices).post(carController.createadvices);
  router
    .route("/:id")
    .get(carController.getadvices)
    .patch(carController.updateadvices)
    .delete(carController.deleteadvices);
  module.exports = router;
  