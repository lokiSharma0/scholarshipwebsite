import {React,useState,useEffect} from 'react'
import { Footer } from '../Footer/Footer'
import { Topbar } from '../navbar/topbar'
import { VscClose } from "react-icons/vsc";
import '../Style/adminpage.css'
import { AiTwotoneEdit } from "react-icons/ai";
import { RiDeleteBin7Fill } from "react-icons/ri";
import {Editform} from '../Modal/editform'
import {Newscholarshipvalidation} from '../Validation/newscholarshipvalidation'
import Axios from 'axios'

export const Adminpage = () => {
  const[showaddscholarship,setShowaddscholarship]=useState(false)
  const[popup,setPopup]=useState({show:false,_id:null})
  const[databasescholarship,setDatabasescholarship]=useState([])
 const[edit,setEdit]=useState(false)
 const[dataforedit,setDataforedit]=useState({})
  const[scholarshiperrors,setScholarshiperrors]=useState('')
  const[newscholarship,setNewscholarship]=useState({uniname:'',discountofscholarship:'',vdateofscholarship:'',descriptionofscholarship:'',eligibilityofscholarship:'',benefitsofscholarship:''})

  useEffect(()=>{
    const getallapplicents= async()=>{
     const url='http://localhost:5000/api/adminpagescholarshipdata'
      const getapplicent= await Axios.get(url);
      setDatabasescholarship(getapplicent.data)
     
     
      
    }
    getallapplicents()
  },[newscholarship])
 
 const showaddscholarshiphandelor =()=>{
  setShowaddscholarship(!showaddscholarship)
 }
 
 const handlechangeofscholarship=(e)=>{
       setNewscholarship({...newscholarship,[e.target.name]:e.target.value})
 }




 const handlenewscholarshipaddingbutton= async(e)=>{
  e.preventDefault();
  if(!newscholarship.schoarshipname && !newscholarship.discountofscholarship && !newscholarship.vdateofscholarship && !newscholarship.descriptionofscholarship &&!newscholarship.benefitsofscholarship){
    setScholarshiperrors(Newscholarshipvalidation(newscholarship)) 
  }else{
    const url='http://localhost:5000/api/newscholarship'
    const elements={
      universityname:newscholarship.uniname,
      scholarshipdiscount:newscholarship.discountofscholarship,
      scholarshipvaliddate:newscholarship.vdateofscholarship,
      scholarshipdescriptions:newscholarship.descriptionofscholarship,
      scholarshipeligibility:newscholarship.eligibilityofscholarship,
      scholarshipbenefits:newscholarship.benefitsofscholarship,
      scholarshipopenfor:newscholarship.Scholarshipopenfor,
      address:newscholarship.address
    }
  const scholarshipdata= await Axios.post(url,elements)
    alert(scholarshipdata.data.message)
  setNewscholarship({uniname:'',Scholarshipopenfor:'',discountofscholarship:'',vdateofscholarship:'',descriptionofscholarship:'',eligibilityofscholarship:'',benefitsofscholarship:'',address:''})
  setShowaddscholarship(!showaddscholarship)
  }
  setTimeout(()=>setScholarshiperrors({}),3000)
 }

 

const  OnDelete=(_id)=>{
  setPopup({show:true,_id})
  

}
const handleyesdeletescholarshipbtn=()=>{
  if(popup.show && popup._id){
      const url=`http://localhost:5000/api/deletescholarship/${popup._id}`
    Axios.delete(url)
   setDatabasescholarship(databasescholarship.filter((databasescholarship)=>databasescholarship._id !==popup._id))
   setPopup({show:false,_id:null})
  }
}
const handlenodeletingscholarshipbtn=()=>{
  setPopup({show:false,_id:null})
}
const crossbtn=()=>{
  setShowaddscholarship(false)
  setEdit(false)
}
const OnEdit =(_id,universityname,scholarshipdiscount,scholarshipvaliddate,scholarshipdescriptions,scholarshipeligibility,scholarshipbenefits,scholarshipopenfor,address)=>{
  setShowaddscholarship(false)
  setEdit(true)
  setDataforedit({_id,universityname,scholarshipdiscount,scholarshipvaliddate,scholarshipdescriptions,scholarshipeligibility,scholarshipbenefits,scholarshipopenfor,address})
  
}

  return (
    <>
        <Topbar/>
        <article className='mainadminpagecontents'>
        <div className='into'>
          <p>Welcome Admin.You have full access to the website you can Add new Scholarship or modify the previous Scholarship. You can even delete the scholarship.<br></br>Press Add Scholarship to Add new Scholarship and List All scholarship to view all the scholarships.</p>
        </div>
        {edit?"": <button  className='showaddscholarshipbtn' onClick={showaddscholarshiphandelor}>Add New Scholarship</button>}
         {edit && <Editform edit={setEdit} editabledata={dataforedit}/>}
          {showaddscholarship &&   <section className='adminpage'>
        <div className='adminpagecontents'>
        <VscClose size={23} color='red' className='closeaddscholarshipform' onClick={crossbtn}/>
        <h2>{edit?'Edit the Scholarship':'Add new Scholarship'}</h2>
          <div className='maincontents'>
            <span>University Name:</span>
            <input
              type="text"
              value={newscholarship.uniname}
              name="uniname"
              onChange={handlechangeofscholarship}
              placeholder='Educational  Instutition name'
              /> 
              {scholarshiperrors && <p className='scholarshipaddingerr'>{scholarshiperrors.uniname}</p> }
          </div>
          <div className='maincontents'>
            <span>Scholarship Open for:</span>
            <input
              type="text"
              value={newscholarship.Scholarshipopenfor}
              name="Scholarshipopenfor"
              onChange={handlechangeofscholarship}
              placeholder='Enter level of Scholarship'
               /> 
              {scholarshiperrors && <p className='scholarshipaddingerr'>{scholarshiperrors.Scholarshipopenfor}</p> }
          </div>
          
          <div className='maincontents'>
            <span>Discount Given to Students:</span>
            <input 
            type='number'
            value={newscholarship.discountofscholarship}
            name='discountofscholarship'
            onChange={handlechangeofscholarship}
            placeholder='Amount of scholarship discount'
            />
            {scholarshiperrors && <p className='scholarshipaddingerr'>{scholarshiperrors.discountofscholarship}</p>}
          </div>
          <div className='maincontents'>
            <span>Valid Date of Scholarship:</span>
            <input 
            type='date'
            value={newscholarship.vdateofscholarship}
            name='vdateofscholarship'
            onChange={handlechangeofscholarship}
            placeholder='scholarship valid date'
            
            />
            {scholarshiperrors && <p className='scholarshipaddingerr'>{scholarshiperrors.vdateofscholarship}</p>}
          </div>
          <div className='maincontents'>
            <span>Description of scholarship:</span>
            <textarea rows="5" cols="60"
             value={newscholarship.descriptionofscholarship}
             name='descriptionofscholarship'
             onChange={handlechangeofscholarship}
             placeholder='description about the scholarship'
              />
             {scholarshiperrors && <p className='scholarshipaddingerr'>{scholarshiperrors.descriptionofscholarship}</p>}
          </div>
          <div className='maincontents'>
            <span>Eligibility:</span>
            <textarea  rows="5" cols="60"
             value={newscholarship.eligibilityofscholarship}
             name='eligibilityofscholarship'
             onChange={handlechangeofscholarship}
             type="text" placeholder='Elibibility for scholarship'
            />
             {scholarshiperrors && <p className='scholarshipaddingerr'>{scholarshiperrors.eligibilityofscholarship}</p>}
          </div>
          <div className='maincontents'>
            <span>Benefits of Scholarship:</span>
            <textarea  rows="5" cols="60"
            value={newscholarship.benefitsofscholarship}
            name='benefitsofscholarship'
            onChange={handlechangeofscholarship}
             type='text' placeholder='Benefits of scholarship'
             />
             {scholarshiperrors && <p className='scholarshipaddingerr'>{scholarshiperrors.benefitsofscholarship}</p>}
          </div >
          <div className='maincontents'>
            <span>Location of Uni:</span>
            <input
              type="text"
              value={newscholarship.address}
              name="address"
              onChange={handlechangeofscholarship}
              placeholder='Location ' 
          /> 
              {scholarshiperrors && <p className='scholarshipaddingerr'>{scholarshiperrors.address}</p> }
          </div >
          <div className='maincontents'>
             {edit ? <button className='addscholarshipbtn'>Save edit</button>: <button  onClick={handlenewscholarshipaddingbutton} className='addscholarshipbtn'>Add New Scholarship</button>}
          </div>
        </div>
       </section>}
          <h3 className='title'>Recently Added Scholarships</h3>
         {databasescholarship.map(({_id,universityname,scholarshipdiscount,scholarshipvaliddate,scholarshipdescriptions,scholarshipeligibility,scholarshipbenefits,scholarshipopenfor,address})=>{
          return(
            <div key={_id}>

         <div className='scholarshiplists'>
          <div className='scholarshipcontents'>
            <div className='scholarshiplabels'>
              <span>University Name:</span>
              <label> {universityname}</label>
            </div >
            <div className='scholarshiplabels'>
              <span>Scholarship Open for:</span>
              <label> {scholarshipopenfor}</label>
            </div >
            <div className='scholarshiplabels'>
              <span>Discount of Scholarhsip</span>
            
              <label> $ {scholarshipdiscount}</label>
            </div>
            <div className='scholarshiplabels'>
              <span>Scholarship vaid date:</span>
              <label> {scholarshipvaliddate}</label>
            </div>
            <div className='scholarshiplabels'>
              <span>Description of scholarship</span>
              {/* <textarea  rows="5" cols="60" type='text' placeholder='description of scholarship' value={scholarshipdescriptions}/> */}
              <label>{scholarshipdescriptions}</label>
            </div>
            <div className='scholarshiplabels'>
            <span>Eligibility of Scholarship</span>
              <textarea  rows="5" cols="60" type='text' placeholder='eligibility needed' value={scholarshipeligibility} readOnly/>
             
            </div>
            <div className='scholarshiplabels'>
            <span>Benefits of scholarship</span>
              <textarea  rows="5" cols="60" type='text' placeholder='Benefits' value={scholarshipbenefits} readOnly/>
            </div>
            <div className='scholarshiplabels'>
              <span>University Location:</span>
              <label> {address}</label>
            </div >
          </div>
        <div className='scholarshipbuttons'>
        <div className='buttons'>
         <AiTwotoneEdit size={30} color='green' onClick={()=>OnEdit(_id,universityname,scholarshipdiscount,scholarshipvaliddate,scholarshipdescriptions,scholarshipeligibility,scholarshipbenefits,scholarshipopenfor,address)}/>
        </div>
        <div className='buttons'>
        <RiDeleteBin7Fill size={30} color='red' onClick={()=>OnDelete(_id)}/>
        </div>
        </div>
         </div>
         
            </div>
          )
         })}
         <div>
          {popup.show && 
          <>
         <div className='backgrounds'></div>
          <div className='popupbox'>
           <div className='popupelements'>
            <p>Are You Sure You Want to delete Scholarship?</p>
           </div>
           <div className='popupelements'>
           <button className='nobtn' onClick={handlenodeletingscholarshipbtn}>No</button>
           <button className='yesbtn' onClick={handleyesdeletescholarshipbtn}>Yes</button>
           </div>
          </div>
          </>
          }
         </div>
        </article>
      
    <Footer/>
    </>
  )
}
