import {React,useState} from 'react'
import { Footer } from '../Footer/Footer'
import { Topbar } from '../navbar/topbar'
import ReactSpeedometer from "react-d3-speedometer"
import '../Style/eligibilitymeter.css'
import { Eligibilityvalidarion } from '../Validation/eligibilityvalidation'


export const Eligibilitytest = () => {
const[gpainputs,setGpainputs]=useState({gpa:''})
const [error,setError]=useState()
const[see,setSee]=useState(false)
const handlecheckeligibilityofgpa=(e)=>{
  e.preventDefault();
  if(!gpainputs.gpa || gpainputs.gpa>=3 || gpainputs.gpa<=1 ){
    setError(Eligibilityvalidarion(gpainputs))
    setSee(false)
  }
  else {
    setSee(!see)
 
  }
 
  setTimeout(()=>setError({}),3000)
}
  return (
    <>
   <Topbar/>
   <div className='text'>
    <p>Welcome Students to Eligibilitytest Meter. You can now Test Your eligibility before applying to any University.Enter Your Gpa and see the result</p>
   </div>
   <section className='eli-meter'>
   <div className='speedo-meter'>
  {see && <ReactSpeedometer
    maxValue={3}
    
      value={gpainputs.gpa}
      currentValueText="GPA"
      width={500}
        needleHeightRatio={0.7}
        customSegmentLabels={[
          {
            text: 'Very Bad',
            position: 'INSIDE',
            color: '#555',
          },
          {
            text: 'Bad',
            position: 'INSIDE',
            color: '#555',
          },
          {
            text: 'Ok',
            position: 'INSIDE',
            color: '#555',
            fontSize: '19px',
          },
          {
            text: 'Good',
            position: 'INSIDE',
            color: '#555',
          },
          {
            text: 'Very Good',
            position: 'INSIDE',
            color: '#555',
          },
        ]}
        ringWidth={47}
        needleTransitionDuration={3333}
        needleTransition="easeElastic"
        needleColor={'#90f2ff'}
        textColor={'#d8dee9'}
   />} 
   </div>
   <div className='gpa-inputs'>
   <input
  min='1'
  max='3'
   type='number'
   placeholder='Enter Your Gpa here '
    value={gpainputs.gpa} 
    name='gpa'
    onChange={(e)=>{
      
      setGpainputs({...gpainputs,[e.target.name]:e.target.value})}
    }
     
    />
    {error && <p className='errorlogins'>{error.gpa}</p>}
   </div>
   <div className='gpacheckbtn'>
    <button onClick={handlecheckeligibilityofgpa}>Check GPA</button>
   </div>
   </section>
    <Footer/>
    </>
  )
}
