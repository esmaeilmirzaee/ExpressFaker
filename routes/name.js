import express from 'express';
const router = express.Router();

import { getName } from '../controllers/name.js';

router.route('/').get(getName);

export default router;
