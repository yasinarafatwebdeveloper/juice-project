import { createContext, useState } from "react";

import { getAuth ,createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import app from "../Firebase/Firebase.config";

 export const AuthContext=createContext(null)
 const auth = getAuth(app);
const AuthProvider = ({children}) => {
const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)
const createRegister=(email,password)=>{
return createUserWithEmailAndPassword(auth,email,password)
}
const signIn=(email,password)=>{
return signInWithEmailAndPassword(auth,email,password)
}
const createUser={
user,
loading,
createRegister,
signIn,
}

    return (
        <AuthContext.Provider value={createUser}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;