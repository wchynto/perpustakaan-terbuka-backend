const mongoose = require("mongoose");

const Book = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  writer: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  book_cover: {
    type: String,
    required: true,
  },
  book_file: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("book", Book);
