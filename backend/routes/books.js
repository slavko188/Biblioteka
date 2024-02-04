import { Router } from "express";
import { BookControler } from "../controlers/book.controler.js";
import { GetOneBookControler } from "../controlers/getOneBook.controler.js";
import { NewBookControler } from "../controlers/newBook.controler.js";
import { UpdateBookControler } from "../controlers/updateBook.controler.js";
import { DeleteBookControler } from "../controlers/deleteBook.controler.js";

const router = Router();

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
