import { Router } from 'express';
import Question from '../models/question.model.js';

const router = Router();

router.get('/:topic', async (req, res) => {
    try {
        const questions = await Question.find({ topic: req.params.topic });
        res.json(questions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;