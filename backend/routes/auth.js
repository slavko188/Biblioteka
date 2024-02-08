import { Router } from "express";
const router = new Router();
// controlers
import { signUp } from "../controlers/Auth/signUp.js";

router.post("/", signUp);

export default router;
