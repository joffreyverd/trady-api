import { Request } from 'express';
import firebase from 'firebase-admin/firestore';
import { PositionRepo } from '../types/index';

export interface IRequest extends Request {
    ctx?: {
        db: firebase.Firestore,
        positionRepo: PositionRepo
    }
}
