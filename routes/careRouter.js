const careController = require("../controllers/careController");
  const express = require("express");
  const router = express.Router();
  router.route("/").get(careController.getAllcare).post(careController.createcare);
  router
    .route("/:id")
    .get(careController.getcare)
    .patch(careController.updatecare)
    .delete(careController.deletecare);
  module.exports = router;
  