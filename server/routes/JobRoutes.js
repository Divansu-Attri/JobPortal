import express from 'express';
import { createJob, getJobs, applyJob } from '../controllers/jobController.js';
import { protect, adminOnly } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/getAllJobs', getJobs);
router.post('/createJob', protect, adminOnly, createJob);
router.post('/apply/:id', protect, applyJob);

export default router;