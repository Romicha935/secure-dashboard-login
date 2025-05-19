import React from 'react'
import { useAuth } from '../Components/AuthProvider'

const Dashboard = () => {
  const {user} = useAuth();

  return (
    <div>
      <h2 className='text-5xl text-center'>WelCome to our Dashboar</h2>
      <p className='text-center text-xl'>Logged in as : <span>{user?.email}</span></p>
      </div>
  )
}

export default Dashboard