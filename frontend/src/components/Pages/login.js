
import '../Style/login.css'
import { useState } from 'react'
import { Loginvalidation } from '../Validation/Loginvalidation'
import axios from "axios"
import img from '../Footer/logo/login.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons'




export const Login = () => {
  const [user,setUser]=useState({username:'',password:''})
 const [error,setError]=useState('')


  const handleChange=(e)=>{
   setUser({...user,[e.target.name]:e.target.value})
  
  }

 
  const loginhandeler=async(e)=>{
    e.preventDefault()
    if(!user.username||!user.password){
      setError(Loginvalidation(user))
      alert("Empty filed found")
    }else{
      try{
        const url='http://localhost:5000/api/login';
        const data= await axios.post(url,{username:user.username,password:user.password});
        const finaldata=JSON.stringify(data.data.user)
       
      if(data.data.user){
        if(data.data.user.role.Student){

          window.location.href="/avscholarship"
        }
        if(data.data.user.role.isadmin){
          window.location.href="/adminpage"
        }
        if(data.data.user.role.isscholarshipofficer){
          window.location.href="/officerpage"
        }
        window.localStorage.setItem('isloggedIn',true)
        window.localStorage.setItem('userData',finaldata)
      }
      else{
        alert(data.data.message)
       
      }
      }catch(error){
        if(error){
          console.log(error)  
        }
      }
    
      }
    setTimeout(()=>setError({}),4000)
  }
  
  return (
    <>
    <section className='loginsection'>
      <div className='imgbox'>
       <img   src={img} alt="this is img"/>
      </div>
      <div className='contentbx'>
        <div className='formbx'>
          <h2 className='h2'>Login to your Account </h2>
          <form>
            <div className='inputbx'>
             <span className='span'>Username</span>
             <input className='flex1'
             placeholder='Enter Username'
             type="text" 
             name='username'
             value={user.username}
             onChange={handleChange}
           />
         {error.username && <p className='errorlogin'>{error.username}</p>}
            </div>
            <div className='inputbx'>
             <span className='span'>Password</span>
             <input className='flex1'
             placeholder='Enter Password'
             type="password"
             name='password'
             value={user.password}
             onChange={handleChange}
              />
               {error.password && <p className='errorlogin'>{error.password}</p>}
            </div>
            <div className='inputbx'>
              <button className='loginbtn'  onClick={loginhandeler}>Login </button>
            </div>
            <div className='create'>
            <p><a  href="/forget">  Reset Your password</a> </p> 
             <p><a href="/regestration">Create an Account Now </a></p>
            </div>
          </form>
          <h3 className='h3'>Login with Socila Media</h3>
          <ul className='sci'>
            <li><a  href="https://facebook.com" ><FontAwesomeIcon className='icons' size='3x' icon={faFacebook}/></a></li>
            <li><a href="https://instagram.com"><FontAwesomeIcon  className='icon' size='3x' icon={faInstagram}/></a></li>
            <li><a href="https://twitter.com" ><FontAwesomeIcon   className='ico'size='3x' icon={faTwitter}/></a></li>

          </ul>
        </div>
      </div>

    </section>
    
    </>
  )
}
