import React from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../Context/Authcontext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

const navigate = useNavigate()

const {user, logout} = UserAuth()
const handleLogout = async () =>{
  try{
   await logout()
   navigate('/LogIn')
   alert('you are logged out')                       //logout button
  } catch (e) {
    console.log(e.message)
  }
}



  return (
    <div className='text-white flex items-center justify-between p-4 z-[100] absolute w-full'>
    <Link to='/'><h1 className='text-4xl font-bold cursor-pointer'>MVP</h1></Link>
      {user?.email ? <div className='font-medium'>
      <Link to='/Account'><button className='pr-4'>Account</button> </Link> 
       <Link to='/LogIn'><button onClick={handleLogout} className='bg-[#9932cc] px-6 py-2 rounded cursor-pointer hover:bg-white hover:text-black'>LogOut</button></Link> 
      </div> : 
      <div className='font-medium'>
      <Link to='/Signup'><button className='pr-4'>Sign Up</button> </Link> 
       <Link to='/LogIn'><button className='bg-[#9932cc] px-6 py-2 rounded cursor-pointer hover:bg-white hover:text-black'>Log In</button></Link> 
      </div>}
    </div>
  )
}

export default Navbar
