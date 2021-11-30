import firebase from 'firebase-admin/firestore';

export type Position = {
    pair: string,
    entryPrice: number,
    quantity: number,
    userId: string,
}

export type PositionRepo = {
    getByUserId: (db: firebase.Firestore, id: string) => {},
    create: (db: firebase.Firestore, position: Position) => {}
}
