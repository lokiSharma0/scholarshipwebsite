const router = require('express').Router()
const Applicantmodel=require("../models/applicantdetails")

router.get('/api/getapplicent',async(req,res)=>{
    const allapplicent=await Applicantmodel.find()
      return  res.json(allapplicent)

})
module.exports=router