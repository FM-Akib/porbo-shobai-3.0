import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";


const provider = new GoogleAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

const [user,setUser] = useState(null);
const [loading,setLoading] = useState(true);


if(loading) {
    <div className="rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute"></div>
}


const createUserWithEmail =(email,password) => {
    setLoading(true);
 return createUserWithEmailAndPassword(auth, email, password)
}

const signInWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
}
const signInWithGoogle = () =>{
    setLoading(true);
    return signInWithPopup(auth, provider)
}

const logOut = () =>{
    setLoading(true);
    return signOut(auth);
}

useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (Currentuser) =>{
        setUser(Currentuser);
        setLoading(false);

    })
    return ()=>{
        return unSubscribe();
    }
},[])

const authInfo = {
    createUserWithEmail,
    signInWithGoogle,
    logOut,
    user,
    signInWithEmail
   
}
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;