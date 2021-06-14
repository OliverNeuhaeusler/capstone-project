import express from 'express';
import { postMarkets, getMarkets } from '../controller/market.controller.js';

const router = express.Router();

router.post('/market', postMarkets);
router.get('/market', getMarkets);

export default router;
