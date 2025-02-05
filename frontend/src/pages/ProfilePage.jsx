
import React from 'react';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const user = auth.currentUser;

  if (!user) {
    navigate('/login'); // Redirect to login if not logged in
    return null;
  }

  return (
    <div>
      <h2>Your Profile</h2>
      <p>Name: {user.displayName}</p>
      <p>Email: {user.email}</p>
      <img src={user.photoURL} alt="User Avatar" />
    </div>
  );
};

export default ProfilePage;
