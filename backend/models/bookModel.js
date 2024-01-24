import mongoose from "mongoose";

const BookSchema = mongoose.Schema({
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

export const BookLibrary = mongoose.model("BookLibrary", BookSchema);

//MONGODB_URL= mongodb+srv://slavkorogy:y7P2T4tnwjkzUpTP@books.clxxz94.mongodb.net/?retryWrites=true&w=majority
//PORT=3001
