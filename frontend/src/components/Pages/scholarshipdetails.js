import React, { useCallback, useState } from 'react'
import '../Style/scholarshipdetails.css'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Footer } from '../Footer/Footer'
import { Topbar } from '../navbar/topbar'
import {useLocation, useNavigate} from 'react-router-dom';
import {AiFillSave} from "react-icons/ai";
import {RiMoneyDollarBoxFill} from "react-icons/ri";
import {AiTwotoneCalendar} from "react-icons/ai";
import {AiFillEnvironment} from "react-icons/ai";
import { Modal } from '../Modal/Modal';

export const Scholarshipdetails = () => {
  const location=useLocation()
  const [openModal, setOpenModal] = useState(false)
  const navigate = useNavigate();
  const toggleModalOpen = useCallback(()=>{
    setOpenModal(!openModal)

  },[openModal])
  
  return (
    <>
    <Topbar/>
    <article className='scholarshipdetails'>
<AiOutlineArrowLeft className='backicon' size={20} onClick={()=>navigate('/avscholarship')}/>
        <section className='mianformofscholarshipdetails'>
        <div className='scholarshipsumarrizeddetails'>
        <h2>{location.state.uni}</h2>
        <div className='info'>
                 <AiFillSave size={20} className='icons'/>
                  <span>{location.state.openfor}</span>
                </div> 
                <div className='info'>
                  <RiMoneyDollarBoxFill  size={20} className='icons'/>
                  <span>Discount Up to $ {location.state.disc}</span>
                </div> 
                <div className='info' >
                <AiTwotoneCalendar  size={20} className='icons'/>
                  <span>{location.state.date}</span>
              </div> 
              <div className='info' >
                <AiFillEnvironment  size={20} className='icons'/>
                  <span>{location.state.add}</span>
              </div> 
              <hr></hr> 
              <div className='description'>
                <div>
                <p>​{location.state.discription}</p>
                </div>
                <div>
                  <h3>Eligibility</h3>
                  <p>{location.state.elig}</p>
                </div>
                <div>
                  <h3>Benefits</h3>
                  <p>{location.state.benifits}</p>
                </div>
                <div>
                  <button className='applyscholarshipbutton' onClick={toggleModalOpen}>Apply Now</button>
                </div>
              </div>
        </div>
         
        <div className='adddetails'>
          <p>The Scholarships are provided by the educational instutions it is valid till 2034</p>
        </div>
        </section>
    </article> 
    <Modal openModal={openModal} closefunction={toggleModalOpen} uniname={location.state.uni}/>

    <Footer/>
    </>
  )
}
