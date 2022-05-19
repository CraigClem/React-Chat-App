import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth, provider } from '../firebase.js';
import Button from '@mui/material/Button';



function SignIn() {

  const signInWithGoogle = async () => {
    provider.setCustomParameters({ prompt: 'select_account' });
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token)
        // The signed-in user info.
        const user = result.user;
        console.log(user)
        // redux action? --> dispatch({ type: SET_USER, user });
      })
      .catch((error) => {
        console.log(error, error.code, error.message)
      });
  };

  return (

    <div className='sign-in-container'>
      <Button
        variant='contained'
        size='medium'
        onClick={signInWithGoogle}>
        Sign In With Google
      </Button>
    </div >
  )
}

export default SignIn
