import express from 'express';
const router = express.Router();

import { getLorem } from '../controllers/lorem.js';

router.route('/').get(getLorem);

export default router;
