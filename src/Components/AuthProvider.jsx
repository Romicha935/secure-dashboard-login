import React, { createContext,  useContext,  useEffect,  useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from './../firebase.config/firebase.config';
 export const AuthContex = createContext()
const AuthProvider = ({children}) => {
   const auth = getAuth(app)
         const [user,setUser] = useState(null)
         const [loading,setLoading] = useState(true)

         const createUser = (email,password)=> {
            setLoading(true)
            return createUserWithEmailAndPassword(auth,email,password)
         }

         const signIn = (email,password) => {
            setLoading(true)
            return signInWithEmailAndPassword(auth , email, password)
         }

         const logOut = () => {
            setLoading(false)
            return signOut(auth)
         }
        
        useEffect(()=>{
          const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser)
            setLoading(false)
         })
         return ()=> unsubscribe()
        },[auth])

         const authInfo = {
            user,
           loading,
           createUser,
           signIn,
           logOut
         }
  return (
      <AuthContex.Provider value={authInfo}>
        {children}
      </AuthContex.Provider>
  )
}

export const  useAuth = ()=> useContext(AuthContex)
export default AuthProvider