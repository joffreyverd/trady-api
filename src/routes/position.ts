import { Router } from 'express';
import createPosition from '../handlers/position/create';
import getPositions from '../handlers/position/get';

const router = Router();

router.get('/', getPositions);
router.post('/', createPosition);

export default router;
