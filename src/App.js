import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import Course from './components/Course'
const App = () => {
  return (
    <div className='bg-gradient-to-r from-violet-500 to-purple-500 h-screen p-2 '>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/course' element={<Course/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App