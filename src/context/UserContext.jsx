import { createContext, useContext, useState } from "react";
import { registerWithEmailAndPassword } from "../auth/firebase";



const UserContext = createContext();

export const useUserContext = ()=>{
    return useContext(UserContext);
}

const UserContextProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const register = (email, password) => {
        registerWithEmailAndPassword(email,password)
        .then(data=>{
            setUser(data.user)
            setError(null)
        })
        .catch(error=>{
            setError(error.message)
        })
    };
    

    const values = {
        user,
        error,
        register
    }
    
    return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}

export default UserContextProvider