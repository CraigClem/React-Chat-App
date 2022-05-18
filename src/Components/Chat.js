import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { onSnapshot, collection, orderBy } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import SignOut from './SignOut';
import SendMessage from './SendMessage';
import Avatar from '@mui/material/Avatar';

function Chat() {

  const [messages, setMessages] = useState([])
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user)

  useEffect(() => {
    onSnapshot(collection(db, 'messages'), (snapShot) => {
      setMessages(snapShot.docs.map(doc => doc.data()))
    });
  }, [])


  return (
    <div className='chat--container'>
      <SignOut />
      <br />
      {messages.map(({ id, text }) =>
        <div
          key={id}
          className='chat-items'>
          <div class='chat-img'>
            <Avatar src={`${user.photoURL}`} alt='user profile' />
            <p>{user.displayName}</p>
          </div>
          <div className='chat-text'>
            <p>{text}</p>
          </div>
        </div>
      )}
      <SendMessage />
    </div>

  )
}

export default Chat
