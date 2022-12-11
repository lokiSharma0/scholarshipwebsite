import React, { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom';
import { Topbar } from '../navbar/topbar'
import { Footer } from '../Footer/Footer'
import '../Style/availablescholarship.css'
import {AiFillSave} from "react-icons/ai";
import {RiMoneyDollarBoxFill} from "react-icons/ri";
import {AiTwotoneCalendar} from "react-icons/ai";
import {AiFillEnvironment} from "react-icons/ai";
import scholar from '../Footer/logo/scholar2.png'
import Axios from 'axios'
export const Avscholarship = () => {
  const[abailablescholarshipdata,setAvailablescholarshipdata]=useState([])
  const navigate = useNavigate();
  const handlescholarshipdetailpage=(universityname,scholarshipdiscount,scholarshipopenfor,scholarshipvaliddate,address,scholarshipdescriptions,scholarshipeligibility,scholarshipbenefits)=>{
    navigate('/scholarshipdetails',{state:{disc:scholarshipdiscount, uni:universityname,dis:scholarshipdiscount,openfor:scholarshipopenfor,date:scholarshipvaliddate,add:address,discription:scholarshipdescriptions,elig:scholarshipeligibility,benifits:scholarshipbenefits}})
   
  }
  useEffect(()=>{
    const datafromdatbase=async()=>{
      const url='http://localhost:5000/api/adminpagescholarshipdata'
      const availablescholarship=await Axios.get(url) 
      setAvailablescholarshipdata(availablescholarship.data)
    }
    datafromdatbase()
  },[])

  return (

    <>
    <div>
        <Topbar/>
       
        <article className='body'>
          <img className='scholarimg' src={scholar} alt='this is scholar img'/>
            <p className='heading'>The Latest Scholarships </p>
          <section className='app'>
            {abailablescholarshipdata.map(({_id,universityname,scholarshipdiscount,scholarshipopenfor,scholarshipvaliddate,address,scholarshipdescriptions,scholarshipeligibility,scholarshipbenefits})=>{
              return(
                <>
            <div className='flex' key={_id} >
              <h2 className='paragraph' > <a href='/scholarshipdetails'>{universityname}</a></h2>
              <div className='scholarship-details'>
                <div className='info'>
                 <AiFillSave size={20} className='icons'/>
                  <span>{scholarshipopenfor}</span>
                </div> 
                <div className='info'>
                  <RiMoneyDollarBoxFill  size={20} className='icons'/>
                  <span>Discount Up to $ {scholarshipdiscount}</span>
                </div> 
              <div className='info'>
                <AiTwotoneCalendar  size={20} className='icons'/>
                  <span>{scholarshipvaliddate}</span>
              </div> 
              <div className='info'>
                <AiFillEnvironment  size={20} className='icons'/>
                  <span>{address}</span>
              </div> 
              <div>
                <button onClick={()=>handlescholarshipdetailpage(universityname,scholarshipdiscount,scholarshipopenfor,scholarshipvaliddate,address,scholarshipdescriptions,scholarshipeligibility,scholarshipbenefits)} className='button'>More Details</button>
              </div>
            </div>
              </div>
                </>
              )
            })}
           
          </section>
        </article>
     
    </div>
    <Footer/>
    </>
  )
}
