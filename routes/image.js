import express from 'express';
const router = express.Router();

import { getImage } from '../controllers/image.js';

router.get('/', getImage);

export default router;
