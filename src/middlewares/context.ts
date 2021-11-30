import { Response, NextFunction } from 'express';
import firebase from 'firebase-admin/firestore';
import { PositionRepo } from '../types';
import { IRequest } from '../types/express';

const context = (db: firebase.Firestore, positionRepo: PositionRepo) => (
  req: IRequest,
  res: Response,
  next: NextFunction,
) => {
  req.ctx = { db, positionRepo };
  next();
};

export default context;
