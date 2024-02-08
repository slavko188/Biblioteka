import { Router } from "express";
//Controlers
import { BookControler } from "../controlers/Book/book.controler.js";
import { GetOneBookControler } from "../controlers/Book/getOneBook.controler.js";
import { NewBookControler } from "../controlers/Book/newBook.controler.js";
import { UpdateBookControler } from "../controlers/Book/updateBook.controler.js";
import { DeleteBookControler } from "../controlers/Book/deleteBook.controler.js";

const router = new Router();

//GET-get all books
router.get("/", BookControler);
//get one books
router.get("/:id", GetOneBookControler);
//POST -add new books
router.post("/", NewBookControler);
//PUT - update book
router.put("/:id", UpdateBookControler);
//DELETE -book
router.delete("/:id", DeleteBookControler);

export default router;
