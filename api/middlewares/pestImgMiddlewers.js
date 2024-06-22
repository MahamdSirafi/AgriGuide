const multer = require('multer');
const AppError = require('../utils/appError');
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/img/pest');
  },
  filename: (req, file, cb) => {
    // const ext = file.mimetype.split('/')[1];
    cb(null, `pest-${file.originalname}`);
  },
});
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only images.', 400), false);
  }
};
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});
exports.uploadpest = upload.single('photo');