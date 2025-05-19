import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from './AuthProvider'

const Navbar = () => {
  const {user,logOut} = useAuth()
    const handleLogout = () => {
      logOut()
      .then(()=> {
        alert('Logout Successfull')
      })
      .catch(error => console.log(error));
    }
   
  return (
    <div className='flex justify-between py-5 shadow-2xl px-10'>
       <div className=''>
        <Link to='/'>Home</Link>
        <Link to='/dashboard' className='ml-4'>Dashboard</Link>
       </div>

     <div>
      {
        user? (
        <button onClick={handleLogout} className='bg-gray-200 py-2 px-4 '>Logout</button> 
        ):(
          <>
          <Link to='/login'>Login</Link>
       <Link to='/register' className='ml-4'>Register</Link>
       </>
        )
      }

        
     </div>
   
    </div>
  )
}

export default Navbar