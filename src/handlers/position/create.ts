import { Response } from 'express';
import Ajv from 'ajv';
import httpError from '../../http/errors';
import { IRequest } from '../../types/express';
import { createPosition as schema } from '../../schema';

const ajv = new Ajv();

const createPosition = async (req: IRequest, res: Response) => {
  const { db, positionRepo } = req.ctx!;
  const { body } = req;

  if (!ajv.validate(schema, body)) {
    return httpError.badRequest(res);
  }

  try {
    body.userId = 'abc123';
    positionRepo.create(db, body);
    return res.status(200).json({ status: 'success!' });
  } catch (e) {
    return httpError.internalServerError(res);
  }
};

export default createPosition;
