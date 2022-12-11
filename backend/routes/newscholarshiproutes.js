const routes=require('express').Router()
const Newscholarshipmodel=require('../models/newscholarshipdetails')


routes.post('/api/newscholarship',async(req,res)=>{
    const oldscholarship= await Newscholarshipmodel.findOne({universityname:req.body.universityname})
    if(oldscholarship){
        res.json({message:"This Scholarship already In use"})
    }else{
     const newscholarshipdetails=new Newscholarshipmodel(req.body)
     const savedscholarship= newscholarshipdetails.save()
    res.json({message:"New Scholarship has been Added Successfully"})

    }

})
module.exports=routes