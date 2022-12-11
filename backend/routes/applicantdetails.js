const router = require('express').Router()
const Applicantmodel=require("../models/applicantdetails")
const multer=require('multer')
const fs=require('fs')

//storing images from applicant

const Storage=multer.diskStorage({
    destination:(req,file,cb)=>{
    cb(null,'Uploads')
    },
    filename:(req,file,cb)=>{
        cb(null, `${Date.now()}-${file.originalname}`)
        console.log(file)
    },
});
const upload=multer({
   storage:Storage
})
router.post('/api/applicantData',upload.single("degreecertificate") ,async(req,res)=>{
    const {applicantname,selecteduni,degreecompleted,scoredgpapercantages,applicentdescription}=req.body
    const {filename}=req.file
   
   const oldapplicantName=await Applicantmodel.findOne({applicantname:req.body.applicantname})
   if(oldapplicantName){
    res.json({message:"You have Already Applied for this Scholarship"})
   }else{
    if(applicantname && selecteduni && degreecompleted &&scoredgpapercantages && filename){

        const applicant = new Applicantmodel(
         {
             applicantname,
             selecteduni,
             degreecompleted,
             scoredgpapercantages,
             applicentdescription,
             degreecertificate:filename,
        }
     
    
        )
        const newApplicant=await applicant.save()
        res.json({message:"Application submited"})
    }

   }
})

module.exports=router