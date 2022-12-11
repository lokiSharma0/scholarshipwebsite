import React from 'react'

export const Officerviewapplicantsdetails = ({open,applicentdata}) => {
  return (
    <>
    {open &&(

        <div>
           {applicentdata.map(({_id,applicantname})=>{
            return(
                <>
                <div key={_id}>
    <p>{applicantname}</p>
                </div>
                </>
            )
           })}
        </div>
     )}
    </>
    
  )
}
