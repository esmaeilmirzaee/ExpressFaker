import express from 'express';
const router = express.Router();

import { address } from '../controllers/address.js';

// @desc    Produces a full list address
// @route   GET /address/
// @access  Public
router.route('/').get(address);

export default router;
