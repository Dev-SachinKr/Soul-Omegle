
import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { db } from '../firebase'; 
import { collection, addDoc, query, where, onSnapshot } from 'firebase/firestore';

const ChatPage = () => {
  const auth = getAuth();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [recipientId, setRecipientId] = useState(''); // Example recipient ID
  
  const user = auth.currentUser;

  // Listen to new messages in chat collection
  useEffect(() => {
    const fetchMessages = async () => {
      const messagesQuery = query(collection(db, 'chats'), where('users', 'array-contains', user.uid));
      const unsubscribe = onSnapshot(messagesQuery, (querySnapshot) => {
        const chatMessages = [];
        querySnapshot.forEach((doc) => chatMessages.push(doc.data()));
        setMessages(chatMessages);
      });
      return unsubscribe;
    };
    const unsubscribe = fetchMessages();
    return () => unsubscribe();
  }, [user]);

  const handleSendMessage = async () => {
    try {
      await addDoc(collection(db, 'chats'), {
        text: message,
        senderId: user.uid,
        recipientId,
        timestamp: new Date(),
        users: [user.uid, recipientId],
      });
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <h2>Chat</h2>
      <div>
        <input
          type="text"
          placeholder="Enter message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>

      <div>
        <h3>Chat History</h3>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>
              {msg.senderId === user.uid ? 'You' : 'Recipient'}: {msg.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChatPage;
