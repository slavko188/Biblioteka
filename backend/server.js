require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/books", require("./routes"));
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB conected");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("server runing");
  }
});
