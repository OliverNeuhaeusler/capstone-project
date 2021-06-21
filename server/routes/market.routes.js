import express from 'express';
import {
  postMarkets,
  getMarkets,
  updateMarkets,
} from '../controller/market.controller.js';

const router = express.Router();

router.post('/market', postMarkets);
router.get('/market', getMarkets);
router.put('/market/:marketId', updateMarkets);

export default router;
