// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCYlsOThFm1hQv4-4TeUIRwtjOp8S3nqwA',
  authDomain: 'netflix-clone-react-7381a.firebaseapp.com',
  projectId: 'netflix-clone-react-7381a',
  storageBucket: 'netflix-clone-react-7381a.appspot.com',
  messagingSenderId: '103990709795',
  appId: '1:103990709795:web:793e56705f302935dc3b0b',
  measurementId: 'G-FB7PPTNNFE',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
