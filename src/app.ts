import express, { Application } from 'express';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import tradeRoutes from './routes/trade';
import positionRoutes from './routes/position';
import context from './middlewares/context';

import tradeRepo from './firebase/tradeRepo';

const serviceAccount = require('../firebase.json');

initializeApp({
  credential: cert(serviceAccount),
});
const db = getFirestore();

const app: Application = express();
app.use(express.json());
app.use(context(db, tradeRepo));

app.use('/me/trades', tradeRoutes);
app.use('/me/positions', positionRoutes);

export default app;
