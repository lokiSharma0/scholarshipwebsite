import React from 'react'
import '../Style/login.css'
import { useState } from 'react'
import { Loginvalidation } from '../Validation/Loginvalidation'
import Axios from "axios"

export const Login = () => {
  const [user,setUser]=useState({username:'',password:''})
 const [show,setShow]=useState(false)
 const [error,setError]=useState('')

  const handleChange=(e)=>{
   setUser({...user,[e.target.name]:e.target.value})
   console.log(user);
  }
  const loginhandeler=async(e)=>{
    if(!user.username||!user.password){
      setError(Loginvalidation(user))
      alert("Empty filed found")
    }else{
  
       if( Axios("http://localhost:5000/api/find",{user:user.username,password:user.password})){

         alert("login success")
       }else{
        alert("data not found")
       }
    
   
    }
    setTimeout(()=>setError({}),3000)
  }
  return (
    <article className='app'>
      <h1>Welcome To ScholarSeek</h1>
      <section className='login'>
        <h2>Login To Your Account</h2>
        <div className='form'>
        <input className='flex'
        placeholder='Enter Username'
        type="text" 
        name='username'
        value={user.username}
        onChange={handleChange}
        />
        {error.username && <p className='errorlogin'>{error.username}</p>}
        <div className='btnshow'>

        <input className='flex'
        placeholder='Enter Password'
        type={show?"text":"password"}
        name='password'
        value={user.password}
        onChange={handleChange}
        />
        <button className='showbtn' onClick={()=>{setShow(!show)}} >{show?"Hide":"Show"}</button>
        </div>
        {error.password && <p className='errorlogin'>{error.password}</p>}
      <button className='loginbtn' onClick={loginhandeler}>Login</button>
        </div>
      </section>
      <p> Do not Have an account?<a href="/regestration">Create an Account Now </a> </p> 
    </article>
  )
}
