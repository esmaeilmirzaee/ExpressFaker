import express from 'express';
const router = express.Router();

import { getName } from '../controllers/name.js';

router.route('/name').get(getName);

export default router;
