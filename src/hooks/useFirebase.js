import { useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import App from "../App";
import app from "../firebase.init";
import { useEffect } from "react";

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();


const useFirebase = () =>{

const [user,setUser] = useState({})

const signInwithGoogle = () =>{
    signInWithPopup(auth,googleProvider)
    .then((result) => {
       const user = result.user
       setUser(user)
       console.log(user)
        
      })

    console.log('hellow ')
  
}

const handleSignOut = ()=>{
  signOut(auth)
  .then(()=>{})
}

useEffect(()=>{
onAuthStateChanged(auth,user =>{

  setUser(user)
}  )


},[])
return {user, handleSignOut,signInwithGoogle}

}

export default useFirebase;