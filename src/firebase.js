import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyDPwWgDqeOMzREsOWNpus_Ft0_ZFbqLmso",
  authDomain: "react-chat-a3868.firebaseapp.com",
  projectId: "react-chat-a3868",
  storageBucket: "react-chat-a3868.appspot.com",
  messagingSenderId: "396135112305",
  appId: "1:396135112305:web:35db3a8b5767ed496845d0",
  measurementId: "G-XT7Y08JTEY"
};

const app = initializeApp(firebaseConfig)



export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();



