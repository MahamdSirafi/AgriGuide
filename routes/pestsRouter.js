const pestsController = require("../controllers/pestsController");
const authMiddlewers = require("../middlewares/authMiddlewers");
const dynamicMiddleware = require("../middlewares/dynamicMiddleware");
const { uploadpest } = require("../middlewares/pestImgMiddlewers");
const express = require("express");
const router = express.Router();
router.route("/").get(pestsController.getAllpests).post(authMiddlewers.protect, authMiddlewers.restrictTo("admin"),
  uploadpest,
  dynamicMiddleware.setPathImginBody("pest", "photo")
  , pestsController.createpests);
router
  .route("/:id")
  .get(pestsController.getpests)
  .patch(authMiddlewers.protect, authMiddlewers.restrictTo("admin"),
    uploadpest,
    dynamicMiddleware.setPathImginBody("pest", "photo"),
    pestsController.updatepests)
  .delete(authMiddlewers.protect, authMiddlewers.restrictTo("admin"), pestsController.deletepests);
module.exports = router;
