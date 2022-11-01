import React from 'react'
import '../Style/regestration.css'
import { useState } from 'react';
import { Validation } from '../Validation/Validation';
import Axios from "axios"


export const Regestration = () => {
  const [student,setStudents]=useState({Fname:'',gname:'',email:'',dob:'',address:'',pnum:'',elevel:'', gender:'',username:'',password:'',cpassword:''})
  const[show,setShow]=useState("false")
  const [error,setError]=useState('')
  
  const handleregestration=(e)=>{
    setStudents({...student,[e.target.name]:e.target.value})
  }

  const Regestration= async()=>{
    if(!student.Fname||!student.gname||!student.email||!student.dob||!student.address||!student.pnum||!student.elevel||!student.gender||!student.username||!student.password||!student.cpassword){
      alert("Somthing went wrong All filed required")
      setError(Validation(student))
    
    }
    else if(student.password!==student.cpassword){
     alert("Password not matched")
     setError(Validation(student))
    
    }else{
      try{
 const data=await Axios.post("http://localhost:5000/api/regestration",{familiyname:student.Fname,givenname:student.gname,gender:student.gender,email:student.email,DOB:student.dob,address:student.address,phonenumber:student.pnum,educationlevel:student.elevel,username:student.username,password:student.password,conformpassword:student.cpassword})
               console.log(data.data)   
      }catch(err){
      console.log(err)

      }
         alert("regestration success")
  setStudents({Fname:"",gname:"",gender:'',email:'',dob:'',address:'',pnum:'',elevel:'',username:'',password:'',cpassword:''})
}
setTimeout(()=>setError({}),3000)
  }
  
  
  return (
    
    <article  className='regestrationbody'>
    
       <h1 >Regsiter Today to Access Huge number of Schloarships </h1>
       <section className='regestrationfrom'>
        <h2>Regestration Form</h2>
        <div className='mainform'>

        <input className='flex'
       type="text"
       placeholder='Family Name'
       name='Fname'
       value={student.Fname}
       onChange={handleregestration}
       />
       {error.fname &&<p className='errors'>{error.fname}</p>}
       <input className='flex'
       type="text"
       placeholder='Given Name'
       name='gname'
       value={student.gname}
       onChange={handleregestration}
       />
       <label >Gender</label>
       <div className='radiobt' onChange={handleregestration}>
        <input type="radio"   name="gender"  value='male' /> Male
        <input type="radio"  name="gender"  value='female'/> Female
        <input type="radio"  name="gender" value='other'/> Other
      </div>
      {error.gender &&<p className='errors'>{error.gender}</p>}
       <input className='flex'
       type="text"
       placeholder='Email'
       name='email'
       value={student.email}
       onChange={handleregestration}
       />
        {error.email &&<p className='errors'>{error.email}</p>}
       <input className='flex'
       type="date"
       placeholder='Date of Birth'
       name='dob'
       value={student.dob}
       onChange={handleregestration}
       />
       <input className='flex'
       type="text"
       placeholder='Address'
       name='address'
       value={student.address}
       onChange={handleregestration}
       />
        {error.address &&<p className='errors'>{error.address}</p>}
       <input className='flex'
       type='int'
       placeholder='Contact Number'
       name='pnum'
       value={student.pnum}
       onChange={handleregestration}
       />
        {error.pnum &&<p className='errors'>{error.pnum}</p>}
       <input className='flex'
       type="text"
       placeholder='Education Level completed'
       name='elevel'
       value={student.elevel}
       onChange={handleregestration}
       />
        {error.elevel &&<p className='errors'>{error.elevel}</p>}
       <input className='flex'
       type="text"
       placeholder='Set Your username'
       name='username'
       value={student.username}
       onChange={handleregestration}
       />
        {error.username &&<p className='errors'>{error.username}</p>}
       <input className='flex'
       type="text"
       placeholder='Set your Password'
       name='password'
       value={student.password}
       onChange={handleregestration}
       />
        {error.password &&<p className='errors'>{error.password}</p>}
        <div className='showPass'>
    
       <input className='flex'
       type={show?"password":"text"}
       placeholder='Conform your Password'
       name='cpassword'
       value={student.cpassword}
       onChange={handleregestration}
       />
       <button className='rshowbtn' onClick={()=>{setShow(!show)}}>{show?'Show':'Hide'}</button>
        </div>
        {error.cpassword &&<p className='errors'>{error.cpassword}</p>}
        <div>

       <button className='rgbtn' onClick={Regestration}>Regsiter</button>
        </div>
        </div>
       <p className='paragraph'>Already have an account<a className='paragraph'href='/login'>  Login</a></p>
       
       </section>
       
        <div className='footer'>
        <p>Learn more about our website<a className='paragraph' href="/">  ScholarSeek</a> </p> 
        
        </div>
       </article>
  
  )
}
