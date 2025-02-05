
import React, { useState } from 'react';
import axios from 'axios';  

function HomePage() {
  const [interest, setInterest] = useState('');

  const handleInterestSubmit = async (e) => {
    e.preventDefault();
    if (interest.trim()) {
      try {
        const response = await axios.post('http://localhost:5000/api/interests', { interest });
        alert('Interest saved!');
        setInterest('');
      } catch (error) {
        console.error('Error saving interest:', error);
      }
    }
  };

  return (
    <div>
      <h1>Welcome to Soul Omegle</h1>
      <p>Find your new friends based on interests!</p>
      <form onSubmit={handleInterestSubmit}>
        <input
          type="text"
          placeholder="Enter your interest"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
        />
        <button type="submit">Save Interest</button>
      </form>
    </div>
  );
}

export default HomePage;
