import { createContext, useContext, useState } from "react";
import { loginWithEmailAndPassword, registerWithEmailAndPassword } from "../auth/firebase";



const UserContext = createContext();

export const useUserContext = ()=>{
    return useContext(UserContext);
}

const UserContextProvider = ({children})=>{
    const [user, setUser] = useState(null);

    const values = {
        user,
        setUser
    }
    
    return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}

export default UserContextProvider