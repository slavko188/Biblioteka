const { Schema, model } = require("mongoose");

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publishYear: {
    type: Number,
    required: true,
  },
  // createdAt: {
  //   type: Date,
  //   default: () => new Date().getTime(),
  // },
});

const BookModel = model("books-library", BookSchema);
module.exports = BookModel;
