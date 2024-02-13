import { Router } from "express";
import { signUp } from "../controlers/Auth/signUp.js";
const router = new Router();

router.post("/registration", signUp);

export default router;
