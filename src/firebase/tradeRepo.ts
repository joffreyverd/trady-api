import firebase from 'firebase-admin/firestore';
import { uid } from 'uid';
import { Trade } from '../types';

const getByUserId = async (db: firebase.Firestore, id: string) => {
  const snapshot = await db.collection('trades').where('userId', '==', id).get();
  const trades: any[] = [];
  snapshot.forEach((doc) => {
    trades.push(doc.data());
  });
  return trades;
};

const getByUserIdAndPosition = async (db: firebase.Firestore, id: string, positionId: string) => {
  const snapshot = await db.collection('trades').where('userId', '==', id)
    .where('positionId', '==', positionId).get();
  const trades: any[] = [];
  snapshot.forEach((doc) => {
    trades.push(doc.data());
  });
  return trades;
};

const create = (db: firebase.Firestore, trade: Trade) => {
  const id = uid(8);
  return db.collection('trades').doc(id).set(trade);
};

export default { getByUserId, getByUserIdAndPosition, create };
