import React, { useState,useEffect } from 'react'
import  Axios  from 'axios';

import { VscClose } from "react-icons/vsc";
export const Editform = ({edit,editabledata}) => {
    
    const[uniname,setUniname]=useState(editabledata.universityname)
    const[discount ,setDiscount]=useState(editabledata.scholarshipdiscount)
    const[validdate ,setValiddate]=useState(editabledata.scholarshipvaliddate)
    const[description ,setDescription]=useState(editabledata.scholarshipdescriptions)
    const[eligibility ,setEligibility]=useState(editabledata.scholarshipeligibility)
    const[benefits,setBenefits]=useState(editabledata.scholarshipbenefits)
    const[openfor ,setOpenfor]=useState(editabledata.scholarshipopenfor)
    const[address,setAddress]=useState(editabledata.address)

    const handlecross=()=>{
      edit(false)
    }
   
   const handlemaineditbtn=async()=>{
    
     const url=`http://localhost:5000/api/scholarshipdataupdate/${editabledata._id}`
     const elements={
        universityname:uniname,
      scholarshipdiscount:discount,
      scholarshipvaliddate:validdate,
      scholarshipdescriptions:description,
      scholarshipeligibility:eligibility,
      scholarshipbenefits:benefits,
      scholarshipopenfor:openfor,
      address:address
     }
       await Axios.put(url,elements)
       edit(false)
      
   }
   
  return (
    <section className='adminpage'>
    <div className='adminpagecontents'>
    <VscClose size={23} color='red' className='closeaddscholarshipform' onClick={handlecross}/>
    
      <div className='maincontents'>
        <span>University Name:</span>
        <input
          type="text"
         value={uniname}
         name='universityname'
         onChange={(e)=>setUniname(e.target.value)}
          placeholder='Educational  Instutition name'
          /> 
       
      </div>
      <div className='maincontents'>
        <span>Scholarship Open for:</span>
        <input
          type="text"
          name='scholarshipopenfor'
          value={openfor}
          onChange={(e)=>setOpenfor(e.target.value)}
          placeholder='Enter level of Scholarship'
           /> 
         
      </div>
      
      <div className='maincontents'>
        <span>Discount Given to Students:</span>
        <input 
        type='number'
        value={discount}
        name='scholarshipdiscount'
        onChange={(e)=>setDiscount(e.target.value)}
        placeholder='Amount of scholarship discount'
        />
      
      </div>
      <div className='maincontents'>
        <span>Valid Date of Scholarship:</span>
        <input 
        type='Date'
        name='scholarshipvaliddate'
        value={validdate}
        onChange={(e)=>setValiddate(e.target.value)}
        placeholder='scholarship valid date'
        
        />
   
      </div>
      <div className='maincontents'>
        <span>Description of scholarship:</span>
        <textarea rows="5" cols="60"
         name='scholarshipdescriptions'
         value={description}
         onChange={(e)=>setDescription(e.target.value)}
         placeholder='description about the scholarship'
          />
       
      </div>
      <div className='maincontents'>
        <span>Eligibility:</span>
        <textarea  rows="5" cols="60"
        value={eligibility}
        name="scholarshipeligibility"
        onChange={(e)=>setEligibility(e.target.value)}
         type="text" placeholder='Elibibility for scholarship'
        />
        
      </div>
      <div className='maincontents'>
        <span>Benefits of Scholarship:</span>
        <textarea  rows="5" cols="60"
        value={benefits}
         type='text'
         name='scholarshipbenefits'
         onChange={(e)=>setBenefits(e.target.value)}
         placeholder='Benefits of scholarship'
         />
       
      </div >
      <div className='maincontents'>
        <span>Location of Uni:</span>
        <input
          type="text"
          name='address'
          value={address}
          onChange={(e)=>setAddress(e.target.value)}
          placeholder='Location ' 
      /> 
         
      </div >
      <div className='maincontents'>
         <button  className='addscholarshipbtn' onClick={handlemaineditbtn}>Save Edits </button>
      </div>
    </div>
   </section>
  )
}
