import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";


import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';



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
      <Box
        component="form"
        sx={{

          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <OutlinedInput
          id="standard-basic"
          placeholder="message..."
          variant="standard"
          sx={{
            border: 'none',
            borderRadius: '12px',
            backgroundColor: 'white',
            color: 'black',
            width: '500px',

          }}
          value={msg}
          onChange={(e) => setMsg(e.target.value)} />
      </Box>
      <Button
        type='submit'
        variant="contained"
        onClick={sendMsg}
        endIcon={<SendIcon
          sx={{
            display: 'flex',
            marginLeft: '-7px',
            padding: '0',
          }}
        />}
        sx={{
          border: 'none',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          padding: '0.25rem',
          marginRight: '1rem',
          height: '70%',
          width: '50px',
        }}>
      </Button>
    </div>
  )
}

export default SendMessage
