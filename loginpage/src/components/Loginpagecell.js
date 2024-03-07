import React from 'react'
import { IoPersonCircleSharp } from "react-icons/io5";
import Mainpage from './Mainpage';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
const Loginpagecell = () => {
  const navigate=useNavigate();
  const[mail,Setmail]=useState("");
  const[password,Setpassword]=useState("")

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/login',{mail,password}).then(result=>{console.log(result)
    if(result.data=="Success"){
      navigate("/mainpage")
    }
  
  }).catch(err=>console.log(err))
}
  return (
    <div className="bg-teal-500 h-[680px] w-[100%] p-[90px] flex flex-col items-center">
      
        <div className='h-[500px] w-[600px] bg-slate-600 m-auto '>

        <button onClick={()=>navigate("/sign")}
        className='h-[60px] w-[250px] bg-teal-500 m-auto  border-2 font-semibold text-xl'>
               SIGN UP
            </button>
         <div className='flex flex-col  items-center '>
           <IoPersonCircleSharp className='h-[180px] w-[150px] bg-slate-600'/>
          
            <input  onChange={(e)=>Setmail(e.target.value)}
            type='text' placeholder='Enter  Email Id' className='placeholder-gray-500 h-[50px] w-[400px] m-1 bg-slate-400 font-semibold text-xl text-center'>
            
            </input>
            <input  onChange={(e)=>Setpassword(e.target.value)}
             type='password' placeholder='Enter  Password' className='placeholder-gray-500 h-[50px] w-[400px] m-2  bg-slate-400 font-semibold text-xl text-center'>
         
            </input>
            
           </div>
           <button onClick={handleSubmit}
           className='h-[50px] w-[400px] mt-[38px] bg-teal-500 font-semibold text-xl'>LOGIN</button>
           
        </div>
        <div className='h-[25px] w-[600px] shadow-lg'></div>
    </div>
  )
}

export default Loginpagecell