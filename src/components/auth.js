import { useState } from "react"
import {auth,googleProvider} from "../config/firebase"
import {createUserWithEmailAndPassword,signInWithPopup,signOut} from "firebase/auth"


export const Auth = ()=>{
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")




const signIn = async () => {
    try {
        await createUserWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.error(error)
        
    }
 
}


const signInWithGoogle = async () => {
    try {
        await signInWithPopup(auth,googleProvider)
    } catch (error) {
        console.error(error)
        
    }
 
}



const logOut = async () => {
    try {
        await signOut(auth)
    } catch (error) {
        console.error(error)
        
    }
 
}

    return (
<>
<div style={{width:"13%",margin: '0 auto'}}>
<input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />

<input type="password" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)} />
<button onClick={signIn}>Sign In</button>
<button onClick={signInWithGoogle}>Sign In with Google</button>
<button onClick={logOut}>Log Out</button>

</div>
</>

    )
}