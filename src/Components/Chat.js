import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { onSnapshot, collection } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase.js';

import SignOut from './SignOut';
import Header from './Header'
import SendMessage from './SendMessage';
import Avatar from '@mui/material/Avatar';

function Chat() {

  const [messages, setMessages] = useState([])
  // const time = messages.map(msg => new Date(msg.createdAt.toDate().toString()))
  // console.log(time)

  const user = useAuthState(auth)
  const currentUser = (user[0])
  console.log(currentUser.displayName)

  useEffect(() => {
    onSnapshot(collection(db, 'messages'), (snapShot) => {
      setMessages(snapShot.docs.map(doc => doc.data()))
    });
  }, [])




  return (
    <>  <Header />
      <div className='chat--body'>
        <div className="sign--out--container">
          <SignOut />
        </div>
        <div className='chat--container'>
          <br />
          {messages.map(({ id, text, createdAt, author, photoURL }) =>

            <div
              key={id}
              className={`chat-items ${currentUser.displayName === author ? 'sent' : 'recieved'}`}>
              <div class='test'>
                <div className='chat-img'>
                  <Avatar src={photoURL} alt='user profile' />
                  <p>{author}</p>
                  <p>
                    {createdAt ? createdAt.seconds : ''}</p>
                </div>
              </div>
              <div className='chat-text'>
                <p>{text}</p>
              </div>
            </div>
          )}
          <SendMessage />
        </div>
      </div>
    </>

  )
}

export default Chat
