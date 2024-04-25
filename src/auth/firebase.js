import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signOut} from 'firebase/auth';
const provider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "movies-app-8f26f.firebaseapp.com",
  projectId: "movies-app-8f26f",
  storageBucket: "movies-app-8f26f.appspot.com",
  messagingSenderId: "712806508830",
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const registerWithEmailAndPassword = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}

export const loginWithEmailAndPassword = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}

export const authWithGoogle = ()=>{
    return signInWithPopup(auth, provider);
}

// //Set an authentication state observer and get user data
// onAuthStateChanged(auth, user => {
// if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
// } else {
//     // User is signed out
// }
// });

// //Sign Out
// signOut(auth)
// .then(() => {
//     // Sign-out successful.
// })
// .catch(error => {
//     // An error happened.
// });