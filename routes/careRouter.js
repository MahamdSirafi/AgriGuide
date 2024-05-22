const careController = require("../controllers/careController");
const authMiddlewers = require("../middlewares/authMiddlewers");
const express = require("express");
const router = express.Router();
router.route("/").get(careController.getAllcare).post(authMiddlewers.protect, authMiddlewers.restrictTo("admin"), careController.createcare);
router
  .route("/:id")
  .get(careController.getcare)
  .patch(authMiddlewers.protect, authMiddlewers.restrictTo("admin"), careController.updatecare)
  .delete(authMiddlewers.protect, authMiddlewers.restrictTo("admin"), careController.deletecare);
module.exports = router;
