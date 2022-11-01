import { Link } from "react-router-dom";
import React from 'react'
import "./topbar.css"
export const Topbar = () => {
  return (
    <div className='topbarcontainer'>
        {/* this is left side topbar */}
       <div className='topleft'>
       <Link to ="/" className="link"><span className='logo'>ScholarSeek</span></Link>
       </div>
       <div className='topcenter'>
        <div className='topcenterlink'>
          <Link to ="/avscholarship" className="link"><span className='topcenterlink'>Available Scholarships</span></Link>
          <Link to ="/College" className="link"> <span className='topcenterlink'>College Search</span></Link>
          <Link to ="/financial" className="link"><span className='topcenterlink'>Student Finencial Aid</span></Link>
          <Link to ="/news" className="link"><span className='topcenterlink'>News</span></Link>
          <Link to ="/eligibility" className="link"><span className='topcenterlink'>Eligibility Meter</span></Link>
          <Link to ="/howtoapply" className="link"><span className='topcenterlink'>How to Apply?</span></Link>
        </div>
       </div>
       <div className='topright'>
        <div className='toprightlink'>
        <Link to ="/login" className="link"><span className='topcenterlink'>Login</span></Link>
        <Link to ="/regestration" className="link"> <span className='topcenterlink'>Regestration</span></Link>
        </div>
       </div>
    </div>
  )
}
