import {React,useState} from 'react'
import { ResetValidation } from '../Validation/ResetAccountvalidation'
import img from '../Footer/logo/login.jpg'
 
import '../Style/login.css'
import Axios from "axios"

export const Forgetpassword = () => {
    const[student,setStudents]=useState({email:''})
    const [error,setError]=useState('')

    const handleChange=(e)=>{
        setStudents({...student,[e.target.name]:e.target.value})
       }
 const handleforgrtpassword= async(e)=>{
  e.preventDefault();
        if(!student.email){
            setError(ResetValidation(student))
            alert("Empty filed found")
        }
        else {
          try{

            const url="http://localhost:5000/api/forgetpassword"
            const data=await Axios.post(url,{email:student.email})
            console.log(data)
           
            // setStudents({email:''})
          }catch(err){
            if(err){
              alert(err.response.data.message)
              setStudents({email:""})
            }
          }
        }
        setTimeout(()=>setError({}),3000)
       }
  return (
    <>
     <section className='loginsection'>
      <div className='imgbox'>
       <img   src={img} alt="this is img"/>
      </div>
      <div className='contentbx'>
        <div className='formbx'>
          <h2 className='h2'>Reset Password</h2>
          <form>
            <div className='inputbx'>
             <span className='span'>Email Address</span>
             <input className='flex1'
              placeholder='Enter Your Email address'
              type="text" 
               name='email'
              value={student.email}
               onChange={handleChange}
        />
         {error.email && <p className='errorlogin'>{error.email}</p>}
            </div>
            <div className='inputbx'>
              <button className='loginbtn'  onClick={handleforgrtpassword}>Submit</button>
            </div>
            <div className='create'>
            <p><a href="/login"> Login Now </a> </p> 
             <p><a href="/regestration">Create an Account Now </a></p>
            </div>
          </form>
        </div>
      </div>

    </section>
   
    {/* <article className='app'>
      <section className='login'>
        <h2>Reset Your Account</h2>
        <div className='form'>
        <input className='flex'
        placeholder='Enter Your Email address'
        type="text" 
        name='email'
        value={student.email}
        onChange={handleChange}
        />
        {error.email && <p className='errorlogin'>{error.email}</p>}
      <button className='loginbtn' onClick={handleforgrtpassword}>Submit</button>
      <p>Found the password<a href="/login"> Login Now </a> </p> 
        </div>
      </section>
      <p> Do not Have an account?<a href="/regestration">  Create an Account Now </a> </p> 

    
    </article> */}
    </>
  )
}
