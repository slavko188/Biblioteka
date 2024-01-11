const { Schema, model } = require("mongoose");

const BookSchema = new Schema({
  id: {
    type: Object,
    required: true,
  },
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
  createdAt: {
    type: Date,
    default: () => new Date().getTime(),
  },
});

const BookModel = model("books-library", BookSchema);
module.exports = BookModel;

//MONGODB_URL= mongodb+srv://slavkorogy:y7P2T4tnwjkzUpTP@books.clxxz94.mongodb.net/?retryWrites=true&w=majority
//PORT=3001
