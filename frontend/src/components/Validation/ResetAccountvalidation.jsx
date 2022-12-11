
export const ResetValidation =(student)=>{
    let error={}
    if(!student.email){
        error.email='Please enter your Email'
    }
    else if(!/\S+@\S+\.\S+/.test(student.email)){
        error.email='incorrect format!'
       }
       return error

}