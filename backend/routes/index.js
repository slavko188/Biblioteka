import express from "express";
import Books from "./books.js";
import Auth from "./auth.js";

//router
const router = express.Router();

router.use("/", Books);
router.use("/", Auth);

export default router;
