import { Response } from 'express';
import { IRequest } from '../../types/express';
import httpError from '../../http/errors';
import calculatePosition from '../../utils/calculatePosition';
import { Trade } from '../../types';

const getPosition = async (req: IRequest, res: Response) => {
  const { db, tradeRepo } = req.ctx!;
  const { uid } = req.params!;

  try {
    const trades = await tradeRepo.getByUserIdAndPosition(db, 'abc123', uid);
    const objects: Trade[] = Object.values(trades);
    const position = calculatePosition(objects);
    return res.status(200).json(position);
  } catch (e) {
    return httpError.internalServerError(res);
  }
};

export default getPosition;
