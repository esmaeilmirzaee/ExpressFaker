import express from 'express';
const router = express.Router();

import { getCommerce } from '../controllers/commerce.js';

router.route('/').get(getCommerce);

export default router;
