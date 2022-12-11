import {React} from 'react'
import CloseIcon from '@mui/icons-material/Close';
import '../hamburgermenue/hamburger.css'
export const Hamburger = (props) => {
  

  return (
  <>
  {props.showMenu? <div className='hamburger' onClick={props.functions} >
   <div className=' burger burger1'></div>
   <div className=' burger burger1'></div>
   <div className=' burger burger1'></div>
  </div> :<div className='menuelist' onClick={props.functions}> <CloseIcon/></div>}
   
  
  </>
  )
}
