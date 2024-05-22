const pestsController = require("../controllers/pestsController");
  const express = require("express");
  const router = express.Router();
  router.route("/").get(pestsController.getAllpests).post(pestsController.createpests);
  router
    .route("/:id")
    .get(pestsController.getpests)
    .patch(pestsController.updatepests)
    .delete(pestsController.deletepests);
  module.exports = router;
  