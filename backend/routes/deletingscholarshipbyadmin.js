const router=require('express').Router()
 const Newscholarshipmodel=require('../models/newscholarshipdetails')
 router.delete('/api/deletescholarship/:id',async(req,res)=>{
  console.log(req.params.id);
    await Newscholarshipmodel.findByIdAndDelete(req.params.id)
   res.json({message:"Data deleted Successfully"})
   
 })

module.exports=router
