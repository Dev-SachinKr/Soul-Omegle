
import React, { useState, useEffect } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { db } from "../firebase"; 
import { collection, getDocs } from 'firebase/firestore';

const DashboardPage = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [interests, setInterests] = useState([]);
  const [userInterest, setUserInterest] = useState('');

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/login'); 
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Fetching users' interests from the database
  useEffect(() => {
    const fetchInterests = async () => {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const userInterests = querySnapshot.docs.map(doc => doc.data());
      setInterests(userInterests);
    };
    fetchInterests();
  }, []);

  const handleInterestSubmit = async () => {
    // Save user interest to Firestore
    try {
      const user = auth.currentUser;
      const userRef = db.collection('users').doc(user.uid);
      await userRef.set({ interest: userInterest });
      setUserInterest('');
      // You can redirect or match users based on interests here
    } catch (error) {
      console.error('Error adding interest:', error);
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleSignOut}>Sign Out</button>
      <div>
        <h3>Your Interests</h3>
        <input
          type="text"
          placeholder="Enter your interest"
          value={userInterest}
          onChange={(e) => setUserInterest(e.target.value)}
        />
        <button onClick={handleInterestSubmit}>Submit Interest</button>
      </div>

      <div>
        <h3>Matching Interests</h3>
        <ul>
          {interests.map((interest, index) => (
            <li key={index}>{interest.interest}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardPage;
