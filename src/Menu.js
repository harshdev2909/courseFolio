import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Signup from './components/Signup'
import Course from './components/Course'

const Menu = () => {
  return (
    <div className='h-screen p-2 '>
        {/* <Navbar/>
        <Home/> */}
        {/* <Signup/> */}
        <Course/>
    </div>
  )
}

export default Menu