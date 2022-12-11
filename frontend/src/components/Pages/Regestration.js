import React from 'react'
import '../Style/regestration.css'
import { useState } from 'react';
import { Validation } from '../Validation/Validation';
import Axios from "axios"
import {useNavigate} from 'react-router-dom'
import img from '../Footer/logo/simg.jpg'


export const Regestration = () => {
  const [student,setStudents]=useState({Fname:'',gname:'',email:'',dob:'',address:'',pnum:'',elevel:'', gender:'',username:'',password:'',cpassword:''})
  // const[show,setShow]=useState("false")
  const [error,setError]=useState('')

  
  const navigate=useNavigate();
  const handleregestration=(e)=>{
    setStudents({...student,[e.target.name]:e.target.value})
  }

  const Regestration= async(e)=>{
    e.preventDefault();
    setError(Validation(student))
    if(!student.Fname||!student.gname||!student.email||!student.dob||!student.address||!student.pnum||!student.elevel||!student.gender||!student.username||!student.password||!student.cpassword){
      alert("Somthing went wrong All filed required")
      setError(Validation(student))
    
    }
    else if(student.password!==student.cpassword){
     alert("Password not matched")
     setError(Validation(student))
    
    }else{
      try{
        const url="http://localhost:5000/api/regestration";
     const data =await Axios.post(url,{familiyname:student.Fname,givenname:student.gname,gender:student.gender,email:student.email,DOB:student.dob,address:student.address,phonenumber:student.pnum,educationlevel:student.elevel,username:student.username,password:student.password,conformpassword:student.cpassword});
     alert("Regestration Success Login To Your Account")
     setStudents({Fname:"",gname:"",gender:'',email:'',dob:'',address:'',pnum:'',elevel:'',username:'',password:'',cpassword:''})         
     console.log(data)   
     navigate("/login")
      }catch(error){
        if(error){
     alert(error.response.data.message)
        }
      

      }
}

setTimeout(()=>setError({}),3000)

  }
  
  
  return (
    <>

 
<section className='loginsections'>
      <div className='imgboxs'>
       <img   src={img} alt="this is img"/>
      </div>
      <div className='contentbxs'>
        <div className='formbxs'>
          <h2 className='h2s'>Register Today for Huge Scholarship Discounts </h2>
          <form>
            <div className='inputbxs'>
             <span className='spans'>Family Name</span>
             <input className='flex1s'
              placeholder='Family Name'
              name='Fname'
              value={student.Fname}
              onChange={handleregestration}
           />
        {error.fname &&<p className='errorlogins'>{error.fname}</p>}
            </div>
            <div className='inputbxs'>
             <span className='spans'>Given Name</span>
             <input className='flex1s'
              type="text"
               placeholder='Given Name'
               name='gname'
              value={student.gname}
              onChange={handleregestration}
               />
               </div>
               <div className='inputbxs'>
             <span className='spans'>Select a Gender</span>
             <div className='radiobt' onChange={handleregestration}>
              <input className='radios' type="radio"   name="gender"  value='male' /> Male
              <input className='radios' type="radio"  name="gender"  value='female'/> Female
              <input className='radios' type="radio"  name="gender" value='other'/> Other
            </div>
            </div>
            <div className='inputbxs'>
              <span className='spans'>Your Email Address</span>
              <input className='flex1s'
                    type="text"
                 placeholder='Email'
                 name='email'
               value={student.email}
                 onChange={handleregestration}
                  />
                   {error.email &&<p className='errorlogins'>{error.email}</p>}
            </div>
            <div className='inputbxs'>
            <span className='spans'>Date Of Birth</span>
            <input className='flex1s'
               type="date"
                 placeholder='Date of Birth'
                  name='dob'
                  value={student.dob}
                 onChange={handleregestration}
             />
            </div>
            <div className='inputbxs'>
            <span className='spans'>Address</span>
            <input className='flex1s'
               type="text"
               placeholder='Address'
                  name='address'
               value={student.address}
               onChange={handleregestration}
                />
                 {error.address &&<p className='errorlogins'>{error.address}</p>}
            </div>
            <div className='inputbxs'>
            <span className='spans'>Phone Number</span>
            <input className='flex1s'
                type='int'
                 placeholder='Contact Number'
                name='pnum'
                value={student.pnum}
                onChange={handleregestration}
                />
                 {error.pnum &&<p className='errorlogins'>{error.pnum}</p>}
            </div>
            <div className='inputbxs'>
            <span className='spans'>Education completed</span>
            <input className='flex1s'
             type="text"
             placeholder='Education Level completed'
              name='elevel'
             value={student.elevel}
             onChange={handleregestration}
       />
        {error.elevel &&<p className='errorlogins'>{error.elevel}</p>}
        </div>
        <div className='inputbxs'>
        <span className='spans'>Set Username</span>
        <input className='flex1s'
       type="text"
       placeholder='Set Your username'
       name='username'
       value={student.username}
       onChange={handleregestration}
       />
        {error.username &&<p className='errorlogins'>{error.username}</p>}
        </div>
  <div className='inputbxs'>
  <span className='spans'>Set Password</span>
  <input className='flex1s'
       type="text"
       placeholder='Set your Password'
       name='password'
       value={student.password}
       onChange={handleregestration}
       />
        {error.password &&<p className='errorlogins'>{error.password}</p>}
  </div>

  <div className='inputbxs'>
  <span className='spans'>Conform Password</span>
  <input className='flex1s'
       type='password'
       placeholder='Conform your Password'
       name='cpassword'
       value={student.cpassword}
       onChange={handleregestration}
       />
       {error.cpassword &&<p className='errorlogins'>{error.cpassword}</p>}
  </div>

            <div className='inputbxs'>
              <button className='regestration'  onClick={Regestration}>Regeister </button>
            </div>
            <div className='creates'>
            <p >Already have Account <a className='paragraphs' href="/login">Login</a> </p> 
            </div>
          </form>
        </div>
      </div>

    </section>
    </>
  
  )
}

