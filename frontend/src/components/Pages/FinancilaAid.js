import React from 'react'
import { Footer } from '../Footer/Footer'
import { Topbar } from '../navbar/topbar'
import '../Style/finencialaid.css'
import pic from '../Footer/logo/sloan.png'
import pic1 from '../Footer/logo/sloan2.png'
export const FinancilaAid = () => {
  
  
      const questionList = [
        {description: 'Direct Subsidized Loans are loans made to eligible undergraduate students who demonstrate financial need to help cover the costs of higher education at a college or career school.', key: 0},
        {description: 'Direct Unsubsidized Loans are loans made to eligible undergraduate, graduate, and professional students, but eligibility is not based on financial need.', key: 1},
        {description: 'Direct Consolidation Loans allow you to combine all of your eligible federal student loans into a single loan with a single loan servicer.', key: 2}
      ];
  const list=[
       {description: 'complete entrance counseling, a tool to ensure you understand your obligation to repay the loan; and', key: 0},
        {description: 'sign a Master Promissory Note, agreeing to the terms of the loan.', key: 1},
  ]
  return (
    <>
     <Topbar/>
     <form className='form2'>
      <section className='finencialsection'>
        <div className='maindiv'>
        <h2>Student Loans</h2>
        <h4>Federal student loans for college or career school are an investment in your future.</h4>
        <h4>You must repay your loan, so be sure you understand your options and responsibilities.</h4>
        <div>
          <p>If you apply for financial aid, you may be offered loans as part of your school’s financial aid offer. A loan is money you borrow and must pay back with interest.<br></br>
       If you decide to take out a loan, make sure you understand who is making the loan and the terms and conditions of the loan. Student loans can come from the federal government, from private sources such as a bank or financial institution, or from other organizations. Loans made by the federal government, called federal student loans, usually have more benefits than loans from banks or other private sources. Learn more about the differences between federal and private student loans.</p>
        </div>  
        <div>
        <h1>What types of federal student loans are available?</h1>
        <p>
        The U.S. Department of Education’s federal student loan program is the William D. Ford Federal Direct Loan (Direct Loan) Program. Under this program, the U.S. Department of Education is your lender. There are four types of Direct Loans available:
        
        {questionList.map((questions)=>{
         return(
          <li key={questions.key}>{questions.description}</li>
         )
        })} 
        </p>
        </div>   
        <div>
         <h1>How much money can I borrow in federal student loans?</h1>
         <p>It depends on whether you’re an undergraduate student, a graduate or professional student, or a parent.<br></br><br></br>
            If you are an undergraduate student, the maximum amount you can borrow each year in Direct Subsidized Loans and Direct Unsubsidized Loans ranges from $5,500 to $12,500 per year, depending on what year you are in school and your dependency status.<br></br><br></br>
            If you are a graduate or professional student, you can borrow up to $20,500 each year in Direct Unsubsidized Loans. Direct PLUS Loans can also be used for the remainder of your college costs, as determined by your school, not covered by other financial aid.<br></br><br></br>
            If you are a parent of a dependent undergraduate student, you can receive a Direct PLUS Loan for the remainder of your child’s college costs, as determined by his or her school, not covered by other financial aid.</p>
        </div>
        <div>
          <h1>How do I get a federal student loan?</h1>
          <p>To apply for a federal student loan, you must first complete and submit a Free Application for Federal Student Aid (FAFSA®) form. Based on the results of your FAFSA form, your college or career school will send you a financial aid offer, which may include federal student loans. Your school will tell you how to accept all or a part of the loan.</p><br></br>
          <p>Before you receive your loan funds, you will be required to</p>
          {list.map((questions)=>{
         return(
          <li key={questions.key}>{questions.description}</li>
         )
        })} 
        </div>
        </div>
        <div className='finencialadd'>
         <img className='pic' src={pic} alt='this is loan'/>
         <img className='pic2' src={pic1} alt='this is loan'/>
        </div>
      </section>
     </form>
    <Footer/>
    </>
  )
}
