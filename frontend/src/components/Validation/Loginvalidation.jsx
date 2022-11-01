export const Loginvalidation=(user)=>{
let error={}
if(!user.username){
error.username='Please give a valid username'
}
if(!user.password){
    error.password='Please provide a valid password'
}
return error
} 