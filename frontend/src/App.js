import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./components/Pages/Homepage";
import {Avscholarship} from "./components/Pages/Avscholarship"
import {College} from './components/Pages/College'
import {FinancilaAid} from './components/Pages/FinancilaAid'
import {Newspage} from './components/Pages/Newspage'
import {Login} from './components/Pages/login'
import {Regestration} from './components/Pages/Regestration'
import {Eligibilitytest} from './components/Pages/Eligibilitytest'
import {Howtoapply} from './components/Pages/Howtoapply'
import {Forgetpassword} from './components/Pages/forgetpassword'
import {Adminpage} from './components/Pages/Adminpage'
import {Scholarshipofficerpage} from './components/Pages/Scholarshipofficerpage'
import {Scholarshipdetails} from './components/Pages/scholarshipdetails'

function App() {

  return (
    <div className="App">
    <BrowserRouter>
    <Routes>

    <Route path='/' element={<Homepage/>}></Route>
    <Route path='/avscholarship' element={<Avscholarship/>}></Route>
    <Route path='/College' element={<College/>}></Route>
    <Route path='/financial' element={<FinancilaAid/>}></Route>
    <Route path='/news' element={<Newspage/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/regestration' element={<Regestration/>}></Route>
    <Route path='/eligibility' element={<Eligibilitytest/>}></Route>
    <Route path='/howtoapply' element={<Howtoapply/>}></Route>
    <Route path='/adminpage' element={<Adminpage/>}></Route>
    <Route path='/officerpage' element={<Scholarshipofficerpage/>}></Route>
    <Route path='/forget' element={<Forgetpassword/>}></Route>
    <Route path='/scholarshipdetails' element={<Scholarshipdetails/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
