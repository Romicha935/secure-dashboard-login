import React from 'react'
import { useAuth } from '../Components/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

const Privateroutes = ({children}) => {
    const {user,loading} = useAuth()
    const location = useLocation()

         if(loading) {
            return <div className='text-center mb-10'>Loading...</div>
         }
         if(user) {
            return children;
         }
return <Navigate to='/login' state={{from:location}} replace ></Navigate>
}

export default Privateroutes