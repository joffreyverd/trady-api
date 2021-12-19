import firebase from 'firebase-admin/firestore';

export type Trade = {
    asset: string,
    direction: string,
    price: number,
    quantity: number,
    userId: string,
    positionId: string,
    fees: number
}

export type TradeRepo = {
    getByUserId: (db: firebase.Firestore, id: string) => {},
    getByUserIdAndPosition: (db: firebase.Firestore, id: string, positionId: string) => {},
    create: (db: firebase.Firestore, trade: Trade) => {}
}
