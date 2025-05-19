import React, { useContext } from 'react'
import { AuthContex } from '../Components/AuthProvider';
import { useLocation } from 'react-router-dom';

const Login = () => {
  const {signIn} = useContext(AuthContex) 
  const location = useLocation()


    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        
        signIn(email,password)
        .then(result => {
          const user = result.user;
          console.log(user);
          alert('Login successfull')
        })
    }
  return (
    <div>
        <form onSubmit={handleLogin} className='max-w-md mx-auto bg-white  mt-10'>
            <h2 className='text-xl mb-4'>Login</h2>
            <input name='email'  type="email" placeholder='email' className='border p-2 w-full mb-2' />
            <input name='password' type="password" placeholder='password' className='border p-2 w-full mb-2' />
            <button  type='submit' className='bg-blue-500 text-white py-2 px-4 justify-center items-center'>Login</button>
        </form>
    </div>
  )
}

export default Login