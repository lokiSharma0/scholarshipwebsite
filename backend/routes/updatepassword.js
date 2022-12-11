const routes=require("express").Router();
const Regestration =require("../models/regestration")
const jwt = require('jsonwebtoken');
const JWT_SECRET="FJFHJGFNJFGNJNJGFNJNGFjgfjhjnfjnjgf{}9889nfdhhfnjgjgfn";


routes.post("/reset-password/:id/:token",async(req,res)=>{
    const {id,token}=req.params
    const {password}=req.body
    console.log(req.params)
  const user=await Regestration.findOne({_id:id})
    if(!user){
        return res.json({message:"Student not found"})
    }
    const secret=JWT_SECRET + user.password;
    try{
  const varify=jwt.verify(token,secret);
  await Regestration.updateOne(
    {
        _id:id
     
      },
    {
        $set:{
          password:password,
          conformpassword:password
        }
    }
    )
    
  res.json({message:'Password updated successfully'})
  // res.render('layout',{email:varify.email,status:'varified'})
    }catch(err){
        console.log(err)
res.send("Try again ")
    }

    
 })
 module.exports=routes;