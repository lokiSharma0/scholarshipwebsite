import {React,useState,useEffect,useCallback} from 'react'
import { Footer } from '../Footer/Footer'
import { Topbar } from '../navbar/topbar'
import { AiFillCaretUp } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import Axios from 'axios'
import {Reorder} from "framer-motion";
// import { Officerviewapplicantsdetails } from '../Modal/officerviewapplicantsdetails';

import '../Style/scholarshipofficerpage.css'


export const Scholarshipofficerpage = () => {
  const[applicentdata,setApplicentdata]=useState([])
  // const[modelopen,setModelopen]=useState(false)
useEffect(()=>{
  const getallapplicents= async()=>{
   const url='http://localhost:5000/api/getapplicent'
    const getapplicent= await Axios.get(url);
    setApplicentdata(getapplicent.data)
    
  }
  getallapplicents()
},[])

const reorderArray = (event, originalArray) => {
  const movedItem = originalArray.find((item, index) => index === event.oldIndex);
  const remainingItems = originalArray.filter((item, index) => index !== event.oldIndex);

  const reorderedItems = [
      ...remainingItems.slice(0, event.newIndex),
      movedItem,
      ...remainingItems.slice(event.newIndex)
  ];

  return reorderedItems;
}

function changeOrder(index, direction) {
  setApplicentdata(reorderArray({oldIndex: index, newIndex: index + (direction === "UP" ? (-1) : 1)}, applicentdata));
}
// const toggleModalOpen=(_id)=>{
// console.log(_id)
// }
  return (
    <>
    <Topbar/>
     <Reorder.Group axis="y" values={applicentdata} 
        onReorder={setApplicentdata}>
    <div className='scholarshipofficerpage'>
       <div className='contents'>
        <h2>Officer can ReArrange the Student Details in Ascending Order </h2>
      {applicentdata.map((data,index)=>{
        const {_id,applicantname,scoredgpapercantages,selecteduni,degreecertificate,degreecompleted,applicentdescription}=data
      
      return(
          <>
         <Reorder.Item key={data} value={data} >
        <div className='applicentdata' key={_id}>
          <div className='contentapplicents'   >
            <div className='applicationinputbox'>
          <span>Applicent:</span>
         <input type='text' value={applicantname} readOnly></input>
            </div>
            <div className='applicationinputbox'>
          <span>Applicent Gpa /Percentage:</span>
          <input type='number' value={scoredgpapercantages} readOnly></input>
            </div>
            <div className='applicationinputbox'>
          <span>Applied University:</span>
          <input type='text' value={selecteduni} readOnly></input>
            </div>
            <div className='applicationinputbox'>
          <span>Completed Education:</span>
          <input type='text' value={degreecompleted} readOnly></input>
            </div>
            <div className='applicationinputbox'>
          <span>Description:</span>
          <textarea className='textareofficerpage' type='textarea'  rows="4" cols="40" value={applicentdescription} readOnly></textarea>
            </div>
          </div>
          <div className='applicentimage'>
            <img className='applicentimageslist' src={`http://localhost:5000/${degreecertificate}`} alt="degreecertificate"/>
          </div>
          <div className='arrows' >
            <AiFillCaretUp size={50} color='Green' onClick={()=>{
            changeOrder(index, "UP")
            }}/>
            <AiFillCaretDown size={50} color='Red'  onClick={()=>{
              changeOrder(index, "DOWN")
            }}/>
          </div>
          
        </div>
        </Reorder.Item>
          </>
        )
      })}
      {/* <Officerviewapplicantsdetails  open={modelopen} applicentdata={applicentdata}/> */}
       </div>
       </div>
       </Reorder.Group>
       <Footer/>
    </>
  )
}
