
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { interestRoutes } from './routes/interestRoutes.js';

// Load environment variables
dotenv.config();

// Initialize Firebase Admin SDK
import admin from 'firebase-admin';
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  }),
});

const db = admin.firestore();

// Initialize the Express app
const app = express();
app.use(cors());
app.use(bodyParser.json()); // Middleware to parse JSON data

// Use Routes
app.use('/api/interests', interestRoutes);

// Default route for testing
app.get('/', (req, res) => {
  res.send('Backend is running...');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
