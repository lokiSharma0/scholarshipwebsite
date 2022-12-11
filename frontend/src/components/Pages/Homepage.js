
import { Footer } from '../Footer/Footer'
import { Topbar } from '../navbar/topbar'

import '../Style/homepage.css'
import img from '../Footer/logo/homeimg.png'
import img1 from '../Footer/logo/hom2.png'



export const Homepage = () => {
 
 
  return (
<>
<Topbar />
<article className='homepage'>
  <section className='homesection'>
    <div className='homesection1'>
    <h2>Welcome to Scholarseek</h2>
    <p>Scholarseek provides you the best and matching <br></br>Scholarships from different University and Educational Instutions </p>
    <p>Regesiter Today for available Scholarships </p>
    <img className='img3' src={img1} alt='this is imgh'/>
    <h3 className='heading3'>You will find the latest scholarship news and colledge update. Keep in touch for more opportunities..</h3>
    </div>
    <div className='homesection2'>
      <img className='img2' src={img} alt='this is imgh'/>
    </div>
  </section>
</article>
<Footer/>
</>
  )
}
