import { Response } from 'express';
import { IRequest } from '../../types/express';
import httpError from '../../http/errors';

const getPositionList = async (req: IRequest, res: Response) => {
  const { db, tradeRepo } = req.ctx!;

  try {
    const trades = await tradeRepo.getByUserId(db, 'abc123');
    // TODO
    return res.status(200).json(trades);
  } catch (e) {
    return httpError.internalServerError(res);
  }
};

export default getPositionList;
