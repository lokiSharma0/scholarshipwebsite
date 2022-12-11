export const Scholarshipvalidation =(applicationdetails,degreecertificate)=>{
    let error={}
    if(!applicationdetails.selecteduni){
        error.selecteduni="Select University You want to Apply"
    }
    if(!applicationdetails.degree){
        error.degree="Select Degree you Completed"
    }
    if(!applicationdetails.scoredgpa){
        error.scoredgpa='Enter Gpa you Scored'}
   else if(applicationdetails.scoredgpa >=3){
        error.scoredgpa="Cannot be more than 3 Gpa"
    }
   
    if(!applicationdetails.applicanrname){
        error.applicanrname='Full Name needed'
    }
    if(!applicationdetails.applicentdescription){
        error.applicentdescription="Description needed"
    }
    return error

}