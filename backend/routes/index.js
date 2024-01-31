import express from "express";
import { BookControler } from "../controlers/book.controler.js";
import { NewBookControler } from "../controlers/newBook.controler.js";
import { GetOneBookControler } from "../controlers/getOneBook.controler.js";
import { UpdateBookControler } from "../controlers/updateBook.controler.js";
import { DeleteBookControler } from "../controlers/deleteBook.controler.js";

//router
const router = express.Router();

//Route for get all books
router.get("/", BookControler);
//Route for get One book frm database by id
router.get("/:id", GetOneBookControler);
//Route for save new book
router.post("/", NewBookControler);

// Route for update a book
router.put("/:id", UpdateBookControler);

//Route for Delete a book
router.delete("/:id", DeleteBookControler);

export default router;
