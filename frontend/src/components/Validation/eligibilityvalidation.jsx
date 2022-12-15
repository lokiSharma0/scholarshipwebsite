export const Eligibilityvalidarion =(gpainputs)=>{
let error={}
if(!gpainputs.gpa){
    error.gpa='Gpa filed is Empty'
}else
if(gpainputs.gpa>=3){
    error.gpa='Invalid Gpa '
}else
if(gpainputs.gpa<=1){
    error.gpa="Inacceptable GPA"
}
return error
}