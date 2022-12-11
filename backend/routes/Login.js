const routes=require("express").Router();
const regestration=require('../models/regestration');

const useloginroute= routes.post("/",async(req,res)=>{
    try{
        const user=await regestration.findOne({username:req.body.username})
        const password=await regestration.findOne({password:req.body.password})
    
        if(!user){
         return   res.send({message:"Plaese check your Username"})
        }
        if(!password){
            return   res.send({message:"Plaese check your Password"})
        }
        if(user){
         res.send({message:`Welcome ${user.username}`, user: user})
        }
  
       console.log(user.role.Student)
    }catch(err){
console.log(err)
    }

})
module.exports=useloginroute;