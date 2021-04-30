import express from 'express';
const router = express.Router();

import { getTweets } from '../controllers/tweets.js';

router.route('/').get(getTweets);

export default router;
