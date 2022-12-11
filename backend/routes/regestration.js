const routes =require("express").Router();
const regestration=require("../models/regestration")

routes.post("/",async(req,res)=>{
    try{
        const oldusername=await regestration.findOne({username:req.body.username})
        const oldpassword=await regestration.findOne({password:req.body.password})
        const oldemail=await regestration.findOne({email:req.body.email})
        if(oldusername){
            return res.send({message:"User with this username already exist"})
        }else
        if(oldpassword){
            return res.send({message:"Password already uesed"})
        }else
        if(oldemail){
            return res.send({message:"Email used already"})
        }
        else{
            const register=new regestration(req.body)
            const newregestration=await register.save();
            res.status(200).json(newregestration)
        }

    }catch(err){

        res.status(500).json(err)
    }
})
module.exports = routes;
