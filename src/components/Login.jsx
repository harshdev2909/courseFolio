import React, { useState } from 'react'
import axios from 'axios' 
const Login = () => {
    const[form,setForm] = useState({
        email : "",
        password : "",
    }) 
    const handleForm = (e)=>{
        const { name, value } = e.target;
        setForm({
          ...form,
          [name]: value,
        });
    }
    const handleSubmit = async()=>{
        try {
            const submit = await axios.post('http://localhost:3000/user/login',{
                email : form.email,
                password : form.password
            })
            const response = submit.data
            console.log(response)
            window.alert('login successfull')
            window.localStorage.setItem('token',response.accessToken)
        } catch (error) {
            if (error.response) {
              window.alert(`Error: ${error.response.data.message || error.response.statusText}`);
            } else if (error.request) {
              
              window.alert('Error: No response from server');
            } else {
              window.alert(`Error: ${error.message}`);
            }
        }
        
    }
  return (
    <div className='flex justify-center items-center h-screen'>
            <div className='bg-black h-[350px] w-[400px] rounded-3xl justify-center'>
                <div className='p-3 justify-center text-center'>
                    <h1 className='text-3xl font-serif text-white font-bold '>Login</h1>
                </div>
                <form onSubmit={handleSubmit}>
                <div className='text-white text-center mt-2 p-3 w-[350px] rounded-lg ml-6 h-[200px] border border-y-white'>
                <label className='text-2xl'>Email : </label>
                <input name='email' onChange={handleForm} value={form.email} type='text' placeholder='enter your email' className='text-black rounded-lg border border-black p-1'></input><br/>
                <label className='text-2xl'>Password : </label>
                <input name='password' onChange={handleForm} value={form.password} type='text' placeholder='enter your password' className='text-black rounded-lg border border-black p-1'></input><br/>
                </div>
                <div className='text-white flex justify-center mt-3'>
                    <button className='bg-red-300 rounded-2xl w-[70px]'>Login</button>
                </div>
                </form>
            </div>
        </div>
  )
}

export default Login