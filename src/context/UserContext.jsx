import { createContext, useContext, useState, useEffect } from "react";
import { signOut,GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword,updateProfile, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {auth} from '../auth/firebase'
import {toast} from 'react-toastify'

const UserContext = createContext();

export const useUserContext = ()=>{
    return useContext(UserContext);
}

const UserContextProvider = ({children})=>{
    const [currentUser, setCurrentUser] = useState(null)
    let navigate = useNavigate();

    useEffect(() => {
        userObserver()
    }, [])

    const userObserver = () => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const { email, displayName, photoURL } = user
            setCurrentUser({ email, displayName, photoURL })
          } else {
            setCurrentUser(null)
          }
        })
    }

    const createUser = async(email, password, displayName)=>{
      try {
        await createUserWithEmailAndPassword(auth, email, password)
        await updateProfile(auth.currentUser, {
          displayName,
        })
        userObserver()
        navigate('/')
        toast.success('User created successfully!')
      } catch (error) {
        toast.error(error.message)
      } 
    }

    const signIn = async (email, password) => {
        try {
          const data = await signInWithEmailAndPassword(
            auth,
            email,
            password
          )
          navigate('/')
          userObserver()
          toast.success('You are now logged in!')
        } catch (error) {
          toast.error(error.message)
        }
    }
    
    const logOut = () => {
        signOut(auth)
        userObserver()
        toast.success('You were successfully logged out. See ya!')
    }

    const signUpProvider = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
          .then((result) => {
            navigate('/')
            userObserver()
          })
          .catch((error) => {
            console.log(error)
          })
      }

    const values = {
        createUser,
        signIn,
        logOut,
        currentUser,
        signUpProvider,
    }
    
    return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}

export default UserContextProvider