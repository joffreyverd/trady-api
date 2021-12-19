import { Request } from 'express';
import firebase from 'firebase-admin/firestore';
import { TradeRepo } from '../types/index';

export interface IRequest extends Request {
    ctx?: {
        db: firebase.Firestore,
        tradeRepo: TradeRepo
    }
}
