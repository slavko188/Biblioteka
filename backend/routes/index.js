import express from "express";
import Books from "./books.js";

//router
const router = express.Router();

router.use("/", Books);

export default router;
