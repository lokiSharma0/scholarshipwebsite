import {useState,useRef} from 'react'
import { VscClose } from "react-icons/vsc";
import Axios from 'axios'
 
import '../Modal/model.css'
import {Scholarshipvalidation} from '../Validation/scholarshipapplication'

export const Modal= ({openModal,closefunction,uniname})=>{
    const imageInputRef = useRef()
  
    const[applicationdetails,setApplicationdetails]=useState({applicanrname:'',selecteduni:'',degree:'',scoredgpa:'',applicentdescription:''})
    const [degreecertificate,setDegreecertificate]=useState(null)
    const[error,setError]=useState('')


    const handleinputapplicationform =(e)=>{
        setApplicationdetails({...applicationdetails,[e.target.name]:e.target.value})
     }
 
     const formdata=new FormData();
     formdata.append("applicantname",applicationdetails.applicanrname)
     formdata.append("selecteduni",applicationdetails.selecteduni)
     formdata.append("degreecompleted",applicationdetails.degree)
     formdata.append("scoredgpapercantages",applicationdetails.scoredgpa)
     formdata.append("applicentdescription",applicationdetails.applicentdescription)
     formdata.append("degreecertificate",degreecertificate)

     const handleapplications=async(e)=>{
        e.preventDefault()
        if(!applicationdetails.applicanrname || !applicationdetails.selecteduni||!applicationdetails.degree||!applicationdetails.scoredgpa ){
            setError(Scholarshipvalidation(applicationdetails))
            
            alert("Please Complete the Application")
        }else {
            const url='http://localhost:5000/api/applicantData'        
      const data=  await Axios.post(url,formdata)
        .catch((err)=>console.log(err))
            alert(data.data.message)
        setApplicationdetails({applicanrname:'',selecteduni:'',degree:'',scoredgpa:'',applicentdescription:''})
        imageInputRef.current.value = "";
         setDegreecertificate(null)
       
        console.log("this is degreecertificate",degreecertificate.name);
        }
        setTimeout(()=>setError({}),3000)
     }

     
    return(
<>
{openModal && (
<div className='model'>
   <div className='background'></div>
    <div className="scholarshipapplicant-form">
    <VscClose className='cross' size={20} onClick={()=>
       closefunction()
    }/>
        {/* <h2>Scholarship Application Form</h2> */}
        <div className='model-content'>
            <form  encType='multipart/form-data'>       
            <div className='content'>
                <span>Applicant Name</span>
                <input type='text' 
                className='inputbox'
                value={applicationdetails.applicanrname} 
                name='applicanrname'
                placeholder="Enter Your Full Name" 
                onChange={handleinputapplicationform}/>
                {error.applicanrname &&<p className='formerror'>{error.applicanrname}</p>}
            </div>
              
            <div  className='content'>
                <span>Select University</span>
                <select className='inputbox' onChange={handleinputapplicationform} value={applicationdetails.selecteduni} name="selecteduni">
                <option value="N/A">N/A</option>
                    <option value={uniname}>{uniname}</option>
                    <option value='Western Sydney University'>Western Sydney University</option>
                    <option value='Queensland University of Sydney'>Queensland University of Sydney</option>
                </select>
                {error.selecteduni &&<p className='formerror'>{error.selecteduni}</p>}
            </div> 
            <div className='content'>
                <span>Degree completed</span>
                <select className='inputbox' onChange={handleinputapplicationform} value={applicationdetails.degree} name='degree'>
                <option value="N/A">N/A</option>
                    <option value='Bachelors'>Bachelors</option>
                    <option value='Masters'>Masters</option>
                    <option value='PHD'>PHD</option>
                </select>
                {error.degree &&<p className='formerror'>{error.degree}</p>}
            </div>
            <div className='content'>
                <span>Scored GPA or Percantages</span>
                <input type='number'
                  className='inputbox'
                  value={applicationdetails.scoredgpa} 
                  name='scoredgpa' 
                  placeholder="Applicant GPA or percentages"
                onChange={handleinputapplicationform}/>
                  {error.scoredgpa &&<p className='formerror'>{error.scoredgpa}</p>}
            </div>
            <div className='content'>
                <span>Tell About Yourself</span>
                <input type='textbox'
                  className='inputbox'
                  value={applicationdetails.applicentdescription} 
                  name='applicentdescription' 
                  placeholder="Write about Your education History"
                onChange={handleinputapplicationform}/>
                  {error.applicentdescription &&<p className='formerror'>{error.applicentdescription}</p>}
            </div>
        
            <div className='content' >
                    
            <span>Upload Your Degree certificate: </span>
           <input type="file" 
                 onChange={(e)=>setDegreecertificate(e.target.files[0])}
                 ref={imageInputRef}
                  />
                 {error.degreecertificate &&<p className='formerror'>{error.degreecertificate}</p>}
            </div>
            
            
            <div>
                <button className='applicationbtn' onClick={handleapplications}>Submite Application</button>
            </div>
            </form>
        </div>
    </div>
</div>
)
}
</>
    );
}