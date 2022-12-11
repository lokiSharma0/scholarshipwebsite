

export const Validation =(student)=>{
    let error={}
   if(!student.Fname){
    error.fname='Family name required'
   }else
   if(student.Fname.length>10){
    error.fname='Too long '
   }
   
   if(!student.email){
    error.email='Email Required'
   }
   if(!student.dob){
    error.dob='Date of Birth Required'
   }
   
   if(!student.pnum){
   error.pnum='Contact number required'
   }
   
   if(!student.address){
   error.address='Address required'
   }
   
   if(!student.username){
   error.username='Username required'
   }
   
   if(student.username.length>8 || student.username.length<3){
    error.username='Long username found or too short username '
   }
   
   

   if(!/\S+@\S+\.\S+/.test(student.email)){
    error.email='incorrect format!'
   }
    if(!student.elevel){
    error.elevel='Enter You graduation level'
   }
   
   if(!student.password){
    error.password='Password required'
   }
    if(student.password.length<5){
    error.password='Use a strong Password'
   }
   else 
   if(!student.gender){
    error.gender='Select a gender'
   }
   return error
}