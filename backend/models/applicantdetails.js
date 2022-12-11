const mongoose=require('mongoose')
const Schema=mongoose.Schema

const applicantdetailsSchema=new Schema({
    applicantname:{
        type:String,
        min:2,
        max:20,
    },
    selecteduni:{
        type:String,
    },
    degreecompleted:{
        type:String,

    },
    scoredgpapercantages:{
        type:Number,
       min:1,
       max:99,
    },
    applicentdescription:{
 type:String
 
    },
    degreecertificate:{
        type:String
    },  
},
{timestamps:true}
)
module.exports=mongoose.model('applicanrdetails',applicantdetailsSchema)