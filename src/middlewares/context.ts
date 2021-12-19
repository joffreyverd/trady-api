import { Response, NextFunction } from 'express';
import firebase from 'firebase-admin/firestore';
import { TradeRepo } from '../types';
import { IRequest } from '../types/express';

const context = (db: firebase.Firestore, tradeRepo: TradeRepo) => (
  req: IRequest,
  res: Response,
  next: NextFunction,
) => {
  req.ctx = { db, tradeRepo };
  next();
};

export default context;
