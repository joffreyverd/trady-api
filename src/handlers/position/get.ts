import { Response } from 'express';
import { IRequest } from '../../types/express';
import httpError from '../../http/errors';

const getPositions = async (req: IRequest, res: Response) => {
  const { db, positionRepo } = req.ctx!;

  try {
    const positions = await positionRepo.getByUserId(db, 'abc123');
    return res.status(200).json(positions);
  } catch (e) {
    return httpError.internalServerError(res);
  }
};

export default getPositions;
