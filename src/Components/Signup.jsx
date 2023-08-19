import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/Authcontext'

const Signup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const {createUser} = UserAuth()

const handleSubmit = async (e) => {
  e.preventDefault();
  setError('')
  try{
   await createUser(email, password)
   navigate('/') 
   alert('account succesfuly created')  //Redirect to users profile
  } catch (e) {
    setError(e.message)
    alert('invalid Email or Password, Password should be at least 6 characters')
  }
}



  return (
    <>
    <div className='w-full h-screen'>
    <img className='block absolute w-full h-full object-cover' src="bg1.jpg" alt="bg" />
    
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-blue-900/75 text-white'>

          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold'>Sign Up</h1>
            <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
              <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 rounded text-black' type="email" placeholder='Email' autoComplete='current-email' />
              <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 rounded text-black' type="password" placeholder='Password' autoComplete='current-password' />
              <button className='bg-[#9932cc] py-3 my-6 rounded font-bold'>Sign Up</button>
              <div className='flex justify-between items-center text-sm'>
                <p><input className='mr-2' type="checkbox"/>Remember me</p>
                <p>Need Help?</p>
              </div>
              <p className='py-8'><span>Already a member?</span> <Link className='hover:underline hover:text-gray-300' to='/LogIn'> Log In </Link></p>
            </form>
          </div>

        </div>

      </div>
    </div>
    </>
  )
}

export default Signup
