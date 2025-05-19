import React, { useState } from 'react'
import { useAuth } from '../Components/AuthProvider'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const {createUser} = useAuth()
  const navigate = useNavigate()
  const [name,setName] = useState('')
  const[email,setEmail] = useState('')
  const [password,setPassword] = useState()

  const handelRegister = (e) => {
    e.preventDefault()

     createUser(email,password)
    .then(result=> {
      const user = result.user
      console.log('created user', user);
      alert('Registration succesfull')
      navigate('/')
      
    })
    .catch(error => {
      console.log('Registration error',error);
      alert('Registration Faild')
    })
  }

  return (
    <div>
      <form onSubmit={handelRegister} className='max-w-md mx-auto bg-white mt-10'>
        <input type="text" placeholder='Name' value={name} onChange={(e)=> setName(e.target.value)} className='border w-full p-2 mb-2' />
        <input type="email" placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} className='border w-full p-2 mb-2' />
        <input type="password" placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)} className='border w-full p-2 mb-2' />
        <button type='submit' className='bg-blue-500 text-white py-2 w-full '>Register</button>
      </form>
    </div>
  )
}

export default Register