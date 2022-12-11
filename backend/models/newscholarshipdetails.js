const mongoose=require('mongoose')
const Schema=mongoose.Schema

const NewscholarshipSchema=new Schema({
    universityname:{
        type:String
    },
    scholarshipdiscount:{
        type:Number
    },
    scholarshipopenfor:{
      type:String
    },
    scholarshipvaliddate:{
        type:Date
    },
    scholarshipdescriptions:{
        type:String
    },
    scholarshipeligibility:{
        type:String
    },
    scholarshipbenefits:{
        type:String
    },
    address:{
        type:String
    }
},
{timestamps:true}
)
module.exports=mongoose.model('newScholarship',NewscholarshipSchema)