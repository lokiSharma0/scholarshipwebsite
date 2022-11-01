const mongoose=require("mongoose")
const Schema=mongoose.Schema


const regestrationSchama=new Schema({
    
    familiyname:{
        type:String,
        unique:false,
        min:2,
        max:20,
    },
    givenname:{
        type:String,
        min:2,
        max:20,
       
    },
    gender:{
        type:String,
    
    },
    email:{
        type:String,
       
        min:5,
        max:20
    },
    DOB:{
        type:String,
     
    },
    address:{
        type:String,
     
        min:5,
        max:20
    },
    phonenumber:{
        type:Number,
        unique:true

    },
    educationlevel:{
        type:String,
      
        min:5,
        max:20

    },
    username:{
        type:String,
        min:5,
        max:20,
        unique:true,
    

    },
    password:{
        type:String,
        min:5,
        max:20,
        unique:true,
    

    },
    conformpassword:{
        type:String,
        min:5,
        max:20,
        unique:true,
      
    }
},
{timestamps:true}
)
module.exports=mongoose.model('regestration',regestrationSchama)