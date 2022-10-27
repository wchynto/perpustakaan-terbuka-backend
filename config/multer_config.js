const multer = require("multer");
const { dirname } = require("path");
const path = require("path");
const rootPath = dirname(require.main.filename);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
      cb(null, path.join(rootPath, "/uploads/book_files"));
    } else {
      cb(null, path.join(rootPath, "/uploads/book_covers"));
    }
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

module.exports = {
  storage,
};
