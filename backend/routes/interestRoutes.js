
import express from 'express';
import { addInterest, getInterests } from '../controllers/interestController.js';

const router = express.Router();

// Route to add a new interest
router.post('/', addInterest);

// Route to get all interests
router.get('/', getInterests);

export { router as interestRoutes };
