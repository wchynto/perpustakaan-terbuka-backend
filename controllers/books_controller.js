const Book = require("../models/book_model");

const getAllBook = async (req, res) => {
  try {
    const books = await User.find();
    res.status(200).send(books);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getBookById = async (req, res) => {
  try {
    let { id } = req.params;
    const book = await Book.findById(id);
    res.status(200).send(book);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getBookByTitle = async (req, res) => {
  try {
    let { title } = req.params;
    const book = await Book.find({ $or: [{ nama: new RegExp(title, "i") }] });
    res.status(200).send(book);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const addNewBook = async (req, res) => {
  try {
    const fullUrl = req.protocol + "://" + req.get("host");
    req.body.book_cover =
      fullUrl + `/uploads/book_covers/${req.files.book_cover[0].filename}`;
    req.body.book_file =
      fullUrl + `/uploads/book_files/${req.files.book_file[0].filename}`;
    await Book.create(req.body);
    res.status(200).send("success add data to database");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteBook = async (req, res) => {
  try {
    let { id } = req.params;
    await Book.remove(id);
    res.status(200).send("success deleted book");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getAllBook,
  getBookById,
  getBookByTitle,
  addNewBook,
  deleteBook,
};
