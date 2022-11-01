const express=require('express')
const app=express()
const cors=require('cors')
const mongoose=require("mongoose")
const morgan=require('morgan')
const regestration=require('./models/regestration')


//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//database connection 
const url="mongodb+srv://loki:Lokendrasharma%403211@cluster0.pvwjk1e.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(url)
.then((result)=>console.log("database connecteds"))
//regestration 
app.post('/api/regestration',async(req,res)=>{
    const register=new regestration(req.body)
    try{
        const oldstudent=regestration.findOne({email:req.body.email})
        if(oldstudent){
          return  res.json({error:"User in in used"})
        }else{

            const newregestration=await register.save();
            res.status(200).json(newregestration)
        }

    }
    catch(err){
       
        console.log(err);
    }
})
//getting data from database login
app.post('/api/find',async(req,res)=>{
const user= await regestration.findOne({username:req.body.username})
const password=await regestration.findOne({password:req.body.password})
if(!user||!password){
    res.json("No user with this email or wrong password")
}else{
    res.json(user)
}


})

//listening server
app.listen(5000,(req,res)=>{console.log("server up")})