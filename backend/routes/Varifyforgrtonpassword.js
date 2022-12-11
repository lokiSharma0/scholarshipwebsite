const routes=require("express").Router();
const Regestration =require("../models/regestration")
const jwt = require('jsonwebtoken');
const JWT_SECRET="FJFHJGFNJFGNJNJGFNJNGFjgfjhjnfjnjgf{}9889nfdhhfnjgjgfn"


routes.get("/reset-password/:id/:token",async(req,res)=>{
    const {id,token}=req.params
    console.log(req.params)
  const user=await Regestration.findOne({_id:id})
    if(!user){
        return res.json({message:"Student not found"})
    }
    const secret=JWT_SECRET + user.password;
    try{
  const varify=jwt.verify(token,secret);
  res.render('layout',{email:varify.email,status:'not varified'})
    }catch(err){
        console.log(err)
        
 res.send("Sorry try again with new link")
    }

    
 })
 module.exports=routes;