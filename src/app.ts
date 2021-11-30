import express, { Application } from 'express';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import positionRoutes from './routes/position';
import context from './middlewares/context';

import positionRepo from './firebase/positionRepo';

const serviceAccount = require('../firebase.json');

initializeApp({
  credential: cert(serviceAccount),
});
const db = getFirestore();

const app: Application = express();
app.use(express.json());
app.use(context(db, positionRepo));

app.use('/me/positions', positionRoutes);

app.listen(3000, () => console.log('Listening on port 3000'));
