import firebase from 'firebase-admin/firestore';
import { uid } from 'uid';
import { Position } from '../types';

const getByUserId = async (db: firebase.Firestore, id: string) => {
  const snapshot = await db.collection('positions').where('userId', '==', id).get();
  const positions: any[] = [];
  snapshot.forEach((doc) => {
    positions.push(doc.data());
  });
  return positions;
};

const create = (db: firebase.Firestore, position: Position) => {
  const id = uid(8);
  return db.collection('positions').doc(id).set(position);
};

export default { getByUserId, create };
