const route=require('express').Router();
const Regestration=require('../models/regestration')

route.get('/api/user',async(req,res)=>{
    const user=await Regestration.findOne()
    if(!user){
        return res.json({message:"no student found"})
        
    }
    
else{
    res.json(user)
    console.log(Object.values(user.role))
}



})
module.exports=route;