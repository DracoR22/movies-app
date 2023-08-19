import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/Authcontext'

const LogIn = () => {

    const {signIn} = UserAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
  
    const handleSubmit = async (e) =>{
      e.preventDefault()
      setError('')
      try{
       await signIn (email, password)
       navigate('/')
       alert('You are logged in')
      } catch (e) {
        setError(e.message)
        alert('invalid Password or Email')
      }
    }
    

  return (
    <>
    <div className='w-full h-screen'>
    <img className='block absolute w-full h-full object-cover' src="bg1.jpg" alt="bg" />
    
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-blue-900/75 text-white'>

          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold'>Log In</h1>
            <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
              <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 rounded text-black' type="email" placeholder='Email' autoComplete='current-email' />
              <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 rounded text-black' type="password" placeholder='Password' autoComplete='current-password' />
              <button className='bg-[#9932cc] py-3 my-6 rounded font-bold'>Log In</button>
              <div className='flex justify-between items-center text-sm'>
                <p><input className='mr-2' type="checkbox"/>Remember me</p>
                <p>Need Help?</p>
              </div>
              <p className='py-8'><span>Don't have an account yet?</span> <Link className='hover:underline hover:text-gray-300' to='/Signup'> Sign Up </Link></p>
            </form>
          </div>

        </div>

      </div>
    </div>
    </>
  )
}

export default LogIn