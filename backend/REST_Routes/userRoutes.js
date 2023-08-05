//Implement routing practices REST
import express from "express";
import { signUp, getUsers } from "../Controller/userController.js";

const router = express.Router();

router.post('/signup', signUp);
router.get('/all', getUsers);

export default router;