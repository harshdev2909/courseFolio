import React from 'react'

const Login = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
            <div className='bg-black h-[350px] w-[400px] rounded-3xl justify-center'>
                <div className='p-3 justify-center text-center'>
                    <h1 className='text-3xl font-serif text-white font-bold '>Login</h1>
                </div>
                <div className='text-white text-center mt-2 p-3 w-[350px] rounded-lg ml-6 h-[200px] border border-y-white'>
                {/* <label className='text-2xl'>Name : </label>
                <input type='text' placeholder='enter your name' className='text-black rounded-lg border border-black p-1'></input><br/> */}
                <label className='text-2xl'>Email : </label>
                <input type='text' placeholder='enter your email' className='text-black rounded-lg border border-black p-1'></input><br/>
                <label className='text-2xl'>Password : </label>
                <input type='text' placeholder='enter your password' className='text-black rounded-lg border border-black p-1'></input><br/>
                </div>
                <div className='text-white flex justify-center mt-3'>
                    <button className='bg-red-300 rounded-2xl w-[70px]'>Login</button>
                </div>
            </div>
        </div>
  )
}

export default Login