import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'

const App = () => {
  return (
    <div className='bg-gradient-to-r from-cyan-400 to-blue-500 h-screen p-2 '>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App