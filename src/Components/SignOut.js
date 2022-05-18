import React from 'react'

import { auth } from '../firebase.js';
import Button from '@mui/material/Button';

function SignOut() {
  return (
    <div>
      <Button variant='contained' onClick={() => auth.signOut()}>Sign Out</Button>
    </div>
  )
}

export default SignOut
