import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import index from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded());
//Allow all origins with default of cors(*)
app.use(cors());
app.use("/books", index);
dotenv.config();

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
