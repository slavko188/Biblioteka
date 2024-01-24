import express from "express";
import { BookLibrary } from "../models/bookModel.js";

//router
const router = express.Router();

//Route for save new book
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "Send all required fields: title,author,publishYear",
      });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const saveBook = await BookLibrary.save(newBook);
    return res.status(201).send(saveBook);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//Route for get all books frm database
router.get("/", async (req, res) => {
  try {
    const books = await BookLibrary.find({});
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//Route for get One book frm database by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookLibrary.findById(id);
    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route for update a book

router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || req.body.author || req.body.publishYear) {
      return res
        .status(400)
        .send({ message: "send all fields:title,author,publishYear" });
    }
    const { id } = req.params;
    const result = await BookLibrary.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(400).json({ message: "Book not faund" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//Route for Delete a book
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await BookLibrary.findByIdAndDelete(id);

    if (!deleteBook) {
      return res.status(404).json({ message: "Book not faund" });
    }
    return res.status(200).send({ message: "Book deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
