// To create APIs we need router but callback functions are in user-controler file
import express from "express";
import {signupUser} from "../controller/user-controller.js";


const router = express.Router();

router.post('/signup', signupUser);

export default router;