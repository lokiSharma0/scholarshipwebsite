import { Link} from "react-router-dom";
import {React,useState} from 'react'
import { HiUserCircle } from "react-icons/hi";
import logo from '../Footer/logo/logo2.png'

import "./topbar.css"
import { Hamburger } from "../hamburgermenue/hamburger";



export const Topbar = () => {
  const loggedin=window.localStorage.getItem("isloggedIn")
  const logedindata=window.localStorage.getItem("userData")
  const [showMenu, setShowMenu] = useState(true)
  const mydata=JSON.parse(logedindata)
  const[open,setOpen]=useState(false)

  const handlelogouticonbtn=()=>{
    setOpen(!open)
  }
  const handleuserlogoutfunction =()=>{
    window.localStorage.removeItem('isloggedIn')
    window.localStorage.removeItem('userData')
    window.location.href="/login"

alert("You successfully logout")
  }
const myfunction=()=>{
  setShowMenu(val=>  val =!showMenu)
}




  return (
    <>
    
    <div className= {showMenu? 'topbarcontainer' : 'mobileView'} >     
       <div className='topleft'>
       <Link to ="/" className="link"><img className="img" src={logo} alt=""/> </Link>
       </div>
       <div className='topcenter'>
        <div className= {showMenu? 'topcenterlink':'viewmenue'}>
        {loggedin && mydata.role.Student && <Link to ="/avscholarship" className="link"><span className={showMenu? 'topcenterlink':'viewmenue'}>Available Scholarships</span></Link>  }   
          {loggedin && mydata.role.Student && <Link to ="/College" className="link"> <span className={showMenu? 'topcenterlink':'viewmenue'}>College Search</span></Link> }
          {loggedin && mydata.role.Student &&  <Link to ="/financial" className="link"><span className={showMenu? 'topcenterlink':'viewmenue'}>Student Finencial Aid</span></Link> }
          {!loggedin &&  <Link to ="/" className="link"><span className={showMenu? 'topcenterlink':'viewmenue'}>Home</span></Link> }
          {!loggedin &&  <Link to ="/financial" className="link"><span className={showMenu? 'topcenterlink':'viewmenue'}>Student Finencial Aid</span></Link> }
          {loggedin && mydata.role.Student && <Link to ="/news" className="link"><span className={showMenu? 'topcenterlink':'viewmenue'}>News</span></Link>  } 
          {loggedin && mydata.role.Student && <Link to ="/eligibility" className="link"><span className={showMenu? 'topcenterlink':'viewmenue'}>Eligibility Meter</span></Link>}
          {!loggedin &&   <Link to ="/howtoapply" className="link" ><span className={showMenu? 'topcenterlink':'viewmenue'}>How to Apply?</span></Link>}
          {logedindata && mydata.role.isadmin &&<Link to ="/adminpage" className="link"><span className={showMenu? 'topcenterlink':'viewmenue'}>Adminpage</span></Link> }
          {loggedin && mydata.role.isadmin&& <Link to ="/College" className="link"> <span className={showMenu? 'topcenterlink':'viewmenue'}>College Search</span></Link> }
          {loggedin && mydata.role.isadmin && <Link to ="/avscholarship" className="link"><span className={showMenu? 'topcenterlink':'viewmenue'}>Available Scholarships</span></Link>  } 
          {loggedin && mydata.role.isscholarshipofficer && <Link to ="/officerpage" className="link"><span className={showMenu? 'topcenterlink':'viewmenue'}>Scholarshipofficer</span></Link>}
        </div>
       </div>
       <div className='topright'>
       <Hamburger showMenu={showMenu} functions={myfunction}/>     
        <div className='toprightlink'>

          {mydata &&loggedin? <> <p className="username">{mydata.username}</p>
           <div className="icon">
          <HiUserCircle className="icon" size='35px' onClick={handlelogouticonbtn} />
          { open &&(
      
          <button className="logoutbtn" onClick={handleuserlogoutfunction}>Logout</button>
       
       )}

        </div></> : <Link to ="/login" className="link"><span className={showMenu? 'topcenterlink':'viewmenue'}>Login</span></Link>}
      
        {/* <Link to ="/regestration" className="link"> <span className='topcenterlink'>Regestration</span></Link> */}
        
        </div>
        
       </div>
    </div>
    </>
  )
}