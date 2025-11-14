import { Router } from 'express';
const router = Router();
import { find } from '../models/Question';

// Get questions by topic
router.get('/:topic', async (req, res) => {
    try {
        const questions = await find({ topic: req.params.topic });
        res.json(questions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
