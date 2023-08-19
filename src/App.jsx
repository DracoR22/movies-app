import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Signup from './Components/Signup'
import LogIn from './Components/LogIn'
import Account from './Components/Account'
import ProtectedRoute from './Components/Protectedroute'
import { AuthContextProvider } from './Context/Authcontext'


const App = () => {
  return (
    <div>
      <AuthContextProvider>
      <Navbar/>
      <Routes>
      <Route path='/' element= { <Home/> }/>
      <Route path='/Signup' element= {<Signup/>}/>
      <Route path='/LogIn' element= {<LogIn/>}/>

      <Route path='/Account' element= { <ProtectedRoute> <Account/> </ProtectedRoute> }/>

      </Routes>
      </AuthContextProvider>
    </div>
  )
}

export default App
