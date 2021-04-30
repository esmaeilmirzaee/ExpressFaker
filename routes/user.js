import express from 'express';
const router = express.Router();

import { getUser } from '../controllers/user.js';

router.route('/').get(getUser);

export default router;
