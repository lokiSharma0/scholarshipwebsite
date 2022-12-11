const routes=require('express').Router()
const Newscholarshipmodel=require('../models/newscholarshipdetails')

routes.get('/api/adminpagescholarshipdata',async(req,res)=>{
    const addedscholarship=await Newscholarshipmodel.find()
    res.json(addedscholarship)
})
module.exports=routes