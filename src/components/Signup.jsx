import React, { useState } from 'react'
import axios from 'axios';
const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };
    console.log(formData)
    const handleSubmit = async () => {
        try {
          // Send the POST request
          const submit = await axios.post('http://localhost:3000/user/register', {
            name: formData.name,
            email: formData.email,
            password: formData.password
          });
      
          const response = submit.data; 
          
          
          window.alert(response);
        } catch (error) {
          if (error.response) {
            window.alert(`Error: ${error.response.data.message || error.response.statusText}`);
          } else if (error.request) {
            
            window.alert('Error: No response from server');
          } else {
            window.alert(`Error: ${error.message}`);
          }
        }
      };
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='bg-black h-[350px] w-[400px] rounded-3xl justify-center'>
                <div className='p-3 justify-center text-center'>
                    <h1 className='text-3xl font-serif text-white font-bold '>Signup</h1>
                </div>
                <form onSubmit={handleSubmit}>
                <div className='text-white text-center mt-2 p-3 w-[350px] rounded-lg ml-6 h-[200px] border border-y-white'>
                <label className='text-2xl'>Name : </label>
                <input name='name' onChange={handleChange} value={formData.name} type='text'  placeholder='enter your name' className='text-black rounded-lg border border-black p-1'></input><br/>
                <label className='text-2xl'>Email : </label>
                <input name='email' onChange={handleChange} value={formData.email} type='text' placeholder='enter your email' className='text-black rounded-lg border border-black p-1'></input><br/>
                <label className='text-2xl'>Password : </label>
                <input name='password' onChange={handleChange} value={formData.password} type='text' placeholder='enter your password' className='text-black rounded-lg border border-black p-1'></input><br/>
                </div>
                <div className='text-white flex justify-center mt-3'>
                    <button className='bg-red-300 rounded-2xl w-[70px]'>Signup</button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Signup