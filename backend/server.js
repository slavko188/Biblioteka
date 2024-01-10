require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const BookModel = require("./models/bookModel");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/books", require("./routes"));
mongoose
  .connect(
    "mongodb+srv://slavkorogy:y7P2T4tnwjkzUpTP@books.clxxz94.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("MongoDB conected");
  })
  .catch((err) => {
    console.log(err.message);
  });

// ime base books-projekt, ime kolekcije books-library

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("server runing");
  }
});
