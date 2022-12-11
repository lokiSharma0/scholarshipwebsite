import React from 'react'
import { Footer } from '../Footer/Footer'
import { Topbar } from '../navbar/topbar'
import '../Style/howtoapply.css'

export const Howtoapply = () => {
 
  return (
    
    <>
    <Topbar/>
    <article className='article'>
      <section className='howtoapply'>
        <div className='instructions'>
          <h1>We will provide you the full Guide line for applying any Scholarship that is available.</h1>
          <p>You have to be the member of the website first.You have to register with vaild emial address and need to Login.</p>
          <p>Follow the steps given below:-</p>
          <div className='step1'>
            <p className='step'>1</p>
            <p className='p'> First you have to to be a member of the website <a href='/regestration'>Register today...</a>You have to supply your credentials like address,valid email,contact number education background and need to set username and password.</p>
          </div>
          <div className='step1'>
            <p className='step'>2</p>
            <p className='p'>Login to your Account Using valid username and Password <a href='/login'>Login</a>If you forget your password password can be recovered. You can recover your password from <a href='/forget'>Password Recovery</a></p>
          </div>
          <div className='step1'>
            <p className='step'>3</p>
           <p className='p'>When You have successfully Logged In you will be redirected to scholarship page where you can select any available scholarship.You can select the scholarship and provide your credentials. Press Apply button</p>
          </div>
          <div className='step1'>
            <p className='step'>4</p>
           <p className='p'>Your scholarship application will be successfully submited.You will be shortly informed via email about status of your scholarship form.</p>
          </div>
        </div>
      </section>
    </article>
    <Footer/>
    </>
  )
}
