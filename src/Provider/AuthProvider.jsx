import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState,CSSProperties } from "react";
import auth from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { ClipLoader } from "react-spinners";
const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

const provider = new GoogleAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

const [user,setUser] = useState(null);
const [loading,setLoading] = useState(true);
let [color, setColor] = useState("#5CF64A");


if(loading) {
    <div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />

      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
}


const createUserWithEmail =(email,password) => {
    setLoading(true);
 return createUserWithEmailAndPassword(auth, email, password)
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
   
}
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;