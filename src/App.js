import './index.css';
import SignIn from './Components/SignIn';
import Chat from './Components/Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase.js';



function App() {

  const [user] = useAuthState(auth)
  return (
    <div className='main--container'>
      {user ? <Chat /> : <SignIn />}

    </div>

  )
}

export default App;
