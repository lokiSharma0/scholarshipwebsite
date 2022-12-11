const router =require('express').Router()
const Newscholarshipmodel=require('../models/newscholarshipdetails')
router.put('/api/scholarshipdataupdate/:id',async(req,res)=>{
   const updateddata=await Newscholarshipmodel.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        
    )
    updateddata.save()
    res.json(updateddata)

})
module.exports=router