import {React,useState} from 'react'
import logo from './logo/logo1.png'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faTwitter,faInstagram,faTiktok} from '@fortawesome/free-brands-svg-icons'



export const Footer = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <footer>
      <div className='row'>
      <div className='col'>
      <img className='logo' src={logo}alt="this is img"/>
      <p>ScholarSeek provides the huge range of Scholarship in details Login to find scholarship that matches your graduations</p>
      </div>
      <div className='col'>
        <h3>Our Office <div className='underline'><span></span></div> </h3>
        <p>57-58 Queen Street,Auburn</p>
        <p>Auburn,Australia NSW 2144</p>
        <p className='email'>Lorenzsharma@gmail.com</p>
      
        <h4> <a href='tel:+61 0426763400'>+61 426763400</a></h4>
      </div>
      <div className='col'>
        <h3>Links <div className='underline'><span></span></div>  </h3>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/login'>Login</a></li>
          <li><a href='/regestration'>Regestration</a></li>
          <li><a href='/howtoapply'>Apply help</a></li>
        </ul>
      </div>
      <div className='col'>
        <h3>Send your Feedbacks <div className='underline'><span></span></div> </h3>
        {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
      <p>Rate Our website</p>

      
      <div className='socila-icons'>
      <a  href="https://facebook.com"  className='icons' ><FontAwesomeIcon  size='2x' icon={faFacebook}/></a>
      <a href="https://instagram.com"    className='icons'><FontAwesomeIcon size='2x' icon={faInstagram}/></a>
      <a href="https://twitter.com"    className='icons'><FontAwesomeIcon size='2x' icon={faTwitter}/></a>
      <a href="https://tiktok.com"    className='icons'><FontAwesomeIcon size='2x' icon={faTiktok}/></a>
      </div>
      </div>
      </div>
      <hr/>
      <p className='coppyright'>ScholarSeek @ 2022 All Right Reserved</p>
    </footer>

    
  )
}
