
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Use the environment variables for Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCrv-Iu49Swb78XmHlXuo_trqTdrfpuASA",
  authDomain: "soul-omegle.firebaseapp.com",
  projectId: "soul-omegle",
  storageBucket: "soul-omegle.firebasestorage.app",
  messagingSenderId: "869932859905",
  appId: "1:869932859905:web:fc36cd141206fae65c3600"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
