import express from 'express';
const router = express.Router();

import { getAnimals } from '../controllers/animal.js';

router.route('/').get(getAnimals);

export default getAnimals;
