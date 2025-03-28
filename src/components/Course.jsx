import React from 'react'

const Course = () => {
  return (
    <div className=''>
        <div className='flex justify-center'>
            <h1 className='text-3xl font-bold font-serif'>Courses</h1>
        </div>
        <div className='flex gap-4 mt-5 justify-center text-white '>
           <div className='bg-black h-[300px] w-[300px] rounded-3xl '>
            <h1 className='text-center mt-2 p-3'>ENGLISH</h1>
            <div className='w-[250px] flex m-5 rounded-lg'>
                <img className='rounded-lg' src='https://foundr.com/wp-content/uploads/2021/09/Best-online-course-platforms.png' />
            </div>
            <div className='text-white flex justify-center mt-3'>
                    <button className='bg-red-300 rounded-xl h-[40px] w-[110px]'>Buy Course</button>
            </div>
           </div>
           <div className='bg-black h-[300px] w-[300px] rounded-3xl flex'>
           </div>
           <div className='bg-black h-[300px] w-[300px] rounded-3xl flex'>
           </div>
        </div>
    </div>
  )
}

export default Course