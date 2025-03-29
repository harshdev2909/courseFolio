import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Signup from './components/Signup'
import Course from './components/Course'
import Login from './components/Login'

const Menu = () => {
  return (
    <div className='h-screen p-2 '>
        {/* <Navbar/>
        <Home/> */}
        {/* <Signup/> */}
        {/* <Login/> */}
        <Course/>
    </div>
  )
}

export default Menu