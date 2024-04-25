import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signOut} from 'firebase/auth';
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

const auth = getAuth(app);

//Sign up new users 
createUserWithEmailAndPassword(auth, email, password)
.then(userCredential => {
    // Signed in
    const user = userCredential.user;
})
.catch(error => {
    console.log(error);
});

//Sign in existing users
signInWithEmailAndPassword(auth, email, password)
.then(userCredential => {
    // Signed in
    const user = userCredential.user;
})
.catch(error => {
    console.log(error);
});

//Set an authentication state observer and get user data
onAuthStateChanged(auth, user => {
if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
} else {
    // User is signed out
}
});

//Authenticate Using Google with Popup
signInWithPopup(auth, provider)
.then(result => {
    // The signed-in user info.
    const user = result.user;
})
.catch(error => {
    // Handle Errors here.
    console.log(error);
});

//Sign Out
signOut(auth)
.then(() => {
    // Sign-out successful.
})
.catch(error => {
    // An error happened.
});