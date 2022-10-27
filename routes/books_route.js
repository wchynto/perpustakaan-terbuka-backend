const express = require("express");
const {
  getAllBook,
  getBookById,
  getBookByTitle,
  addNewBook,
  deleteBook,
} = require("../controllers/books_controller");
const { storage } = require("../config/multer_config");

const multer = require("multer");

const router = express.Router();

router.get("/books", getAllBook);
router.get("/books/:id", getBookById);
router.get("/books/title/:title", getBookByTitle);
router.post(
  "/books/upload",
  multer({ storage: storage }).fields([
    { name: "book_cover", maxCount: 1 },
    { name: "book_file", maxCount: 1 },
  ]),
  addNewBook
);
router.delete("/books/delete/", deleteBook);

module.exports = router;
