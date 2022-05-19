import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { onSnapshot, collection } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

import SignOut from './SignOut';
import SendMessage from './SendMessage';
import Avatar from '@mui/material/Avatar';

function Chat() {

  const [messages, setMessages] = useState([])
  const time = messages.map(msg => new Date(msg.createdAt.toDate().toString()))
  console.log(time)

  useEffect(() => {
    onSnapshot(collection(db, 'messages'), (snapShot) => {
      setMessages(snapShot.docs.map(doc => doc.data()))
    });
  }, [])

  return (
    <div className='chat--body'>
      <div className="sign--out--container">
        <SignOut />
      </div>
      <div className='chat--container'>
        <br />
        {messages.map(({ id, text, createdAt, author, photoURL, time }) =>
          <div
            key={id}
            className='chat-items'>
            <div className='chat-img'>
              <Avatar src={photoURL} alt='user profile' />
              <p>
                {createdAt ? createdAt.seconds : ''}</p>
            </div>
            <div className='chat-text'>
              <p>{text}</p>
              <p>{author}</p>
            </div>
          </div>
        )}
        <SendMessage />
      </div>
    </div>

  )
}

export default Chat
