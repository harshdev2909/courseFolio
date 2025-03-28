import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl  '>
        <div className='p-5'>
        <h1 className='text-ellipsis font-serif text-3xl'>Coursofolio</h1>
        </div>
        <div className='flex justify-center p-5 gap-8'>
        <button className=''>
            about
        </button>
        <button className=''>
           courses
        </button>
        <button className=''>
            my courses
        </button>
        </div>
        <div className='flex justify-center p-5 gap-8 '>
            <button>
                Login
            </button>
        </div>
    </div>
  )
}

export default Navbar