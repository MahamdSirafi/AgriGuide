const storageController = require('../controllers/storageController');
const authMiddlewers = require('./../middlewares/authMiddlewers');
const express = require('express');
const router = express.Router();
router.use(authMiddlewers.protect);
router
  .route('/')
  .get(storageController.getAllstorage)
  .post(storageController.createstorage);
router
  .route('/:id')
  .get(storageController.getstorage)
  .patch(storageController.updatestorage)
  .delete(storageController.deletestorage);
module.exports = router;
