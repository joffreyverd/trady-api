import { Router } from 'express';
import createTrade from '../handlers/trades/createTrade';
import getTradeList from '../handlers/trades/getTradeList';

const router = Router();

router.get('/', getTradeList);
router.post('/', createTrade);

export default router;
