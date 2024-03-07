import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'
const Sign = () => {
     const[name,Setname]=useState("");
     const[date,Setdate]=useState("");
     const[mail,Setmail]=useState("");
     const[password,Setpassword]=useState("")
     
      const handleSubmit=(e)=>{
          e.preventDefault()
          axios.post('http://localhost:3001/register',{name,date,mail,password}).then(result=>{console.log(result)
        navigate("/")
        }).catch(err=>console.log(err))
      }

    const navigate=useNavigate();
  return (
    <div className="bg-teal-500 h-[680px] w-[100%] p-[90px] flex flex-col items-center">
      
        <div className='h-[500px] w-[600px] bg-slate-600 m-auto p-20'>

         <div className='flex flex-col  items-center '>
              
         <input onChange={(e)=>Setname(e.target.value)}
         type='text' placeholder='Enter Name' className='placeholder-gray-500 h-[50px] w-[400px] m-1 bg-slate-400 font-semibold text-xl text-center'>
         </input>
          
            <input onChange={(e)=>Setdate(e.target.value)}
            type='date'  className='placeholder-gray-500 h-[50px] w-[400px] m-1 bg-slate-400 font-semibold text-xl text-center'>

             </input>

            <input  onChange={(e)=>Setmail(e.target.value)}
            type='text' placeholder='Enter  Email Id' className='placeholder-gray-500 h-[50px] w-[400px] m-1 bg-slate-400 font-semibold text-xl text-center'>
            
            </input>
            <input  onChange={(e)=>Setpassword(e.target.value)}
            type='password' placeholder='Enter  Password' className='placeholder-gray-500 h-[50px] w-[400px] m-2  bg-slate-400 font-semibold text-xl text-center'>
         
            </input>
            
           </div>
           <button onClick={handleSubmit}
           className='h-[50px] w-[400px] mt-[38px] bg-teal-500 font-semibold text-xl'>SIGN UP</button>
           
        </div>
        <div className='h-[25px] w-[600px] shadow-lg'></div>
    </div>
  )
}

export default Sign