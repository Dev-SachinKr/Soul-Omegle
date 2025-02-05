
import admin from 'firebase-admin';

// Firestore DB reference
const db = admin.firestore();

export const saveInterest = async (interest) => {
  try {
    const docRef = await db.collection('userInterests').add({
      interest: interest,
      timestamp: new Date(),
    });
    return docRef.id;
  } catch (error) {
    throw new Error('Error saving interest:', error);
  }
};

export const getAllInterests = async () => {
  try {
    const snapshot = await db.collection('userInterests').get();
    const interests = snapshot.docs.map((doc) => doc.data().interest);
    return interests;
  } catch (error) {
    throw new Error('Error fetching interests:', error);
  }
};
