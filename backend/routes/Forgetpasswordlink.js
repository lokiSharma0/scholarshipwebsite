const routes=require("express").Router();
const regestration=require('../models/regestration');
const jwt = require('jsonwebtoken');
const JWT_SECRET="FJFHJGFNJFGNJNJGFNJNGFjgfjhjnfjnjgf{}9889nfdhhfnjgjgfn"
var nodemailer=require('nodemailer')

routes.post("/",async(req,res)=>{
    try{
        const user=await regestration.findOne({email:req.body.email})
        if(!user){
         return   res.status(410).json({message:"Plaese check your email"})
        }
        else{
            
            const secret=JWT_SECRET + user.password
            const token=jwt.sign({email:user.email,id:user._id},secret,{expiresIn:"10m",});
            const link=`http://localhost:5000/reset-password/${user._id}/${token}`;
            console.log(link)
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'lorenzsharma@gmail.com',
                  pass: 'mfwsqvpzxcegxmly'
                }
              });
              
              var mailOptions = {
                from: 'youremail@gmail.com',
                to: user.email,
                subject: 'Password reset for Scholerseek website',
                text:link
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });

       return  res.status(420).send({message:"Password reset email has been send to your email.Please check your email "})
        }

   
    }catch(err){
console.log(err)
    }

   
})
module.exports=routes;