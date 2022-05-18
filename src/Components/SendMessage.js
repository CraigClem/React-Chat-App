import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";


import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



function SendMessage() {

  const [msg, setMsg] = useState('')

  const sendMsg = async (e) => {
    e.preventDefault()
    addDoc(collection(db, 'messages'), {
      text: msg,
      createdAt: serverTimestamp()
    })
    setMsg('')
  }

  return (
    <div className="message--container">
      <Button type='submit'
        variant="contained"
        onClick={sendMsg}
        endIcon={<SendIcon />}>
        SEND
      </Button>
      <Box
        component="form"
        sx={{

          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          placeholder="message..."
          variant="standard"
          sx={{
            border: '1px solid white',
            color: '#FFFFFF'
          }}
          value={msg}
          onChange={(e) => setMsg(e.target.value)} />
      </Box>
    </div>
  )
}

export default SendMessage
