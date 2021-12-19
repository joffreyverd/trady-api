import { Router } from 'express';
import getPositionList from '../handlers/positions/getPositionList';
import getPosition from '../handlers/positions/getPosition';

const router = Router();

router.get('/', getPositionList);
router.get('/:uid', getPosition);

export default router;
