const route=require("express").Router()
const admindata=require('../models/Admin')

route.get("/",async(req,res)=>{
    const admin=await admindata.findOne({username:req.body.username})
    if(!admin){
        res.send("no data found")
    }
    else{
        res.send(admin)
    }
})
module.exports=route