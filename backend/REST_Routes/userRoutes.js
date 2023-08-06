//Implement routing practices REST
import express from "express";
import { signUp, getUsers, getUsersByID } from "../Controller/userController.js";

const router = express.Router();

router.post('/signup', signUp);
router.get('/all', getUsers);
router.get('/:id', getUsersByID )

export default router;