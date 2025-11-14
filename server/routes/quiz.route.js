import express from 'express';
import isAuthenticated  from '../middlewares/isAuthenticated.js';
import { createQuiz } from '../controller/quiz.controller.js';



const router = express.Router();

router.route("/").post(isAuthenticated, createQuiz);

export default router;