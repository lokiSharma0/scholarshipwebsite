const express=require('express');
const app=express();
const cors=require('cors')
const mongoose=require("mongoose");
const morgan=require('morgan');


const expresslayout=require("express-ejs-layouts")
const useregestrationroute=require("./routes/regestration");
const useloginroute=require("./routes/Login")
const usefindinguserroute=require('./routes/Findingroles')
const useforgetpasswordroute=require('./routes/Forgetpasswordlink');
const usevarifyforgotonpassword=require("./routes/Varifyforgrtonpassword")
const useupdatepasswordroute=require('./routes/updatepassword')
const useapplicanrdataroute=require('./routes/applicantdetails')
const usegettapplecentroutes=require('./routes/gettingapplicentdetails')
const usenewscholarshiproutes=require('./routes/newscholarshiproutes')
const usegettscholarshipaddedbyadminroutes=require('./routes/gettingscholarshipaddedbyadmin')
const usedeletescholarshipbyadminroute=require('./routes/deletingscholarshipbyadmin')
const useupdatescholarshipdataroute=require('./routes/updatescholarshipdataadminpage')



//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(expresslayout)
app.use(express.urlencoded({extended:false}))
app.set('view engine', 'ejs');
app.use(express.static("Uploads"))



//database connection 
const url="mongodb+srv://loki:Lokendrasharma%403211@cluster0.pvwjk1e.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(url)
.then((result)=>console.log("database connecteds"));


//routes 
app.use("/api/regestration",useregestrationroute);
app.use("/api/login",useloginroute);
app.use('/',usefindinguserroute)
app.use('/api/forgetpassword',useforgetpasswordroute)
app.use('/',usevarifyforgotonpassword)
app.use('/',useupdatepasswordroute)
app.use('/',useapplicanrdataroute)
app.use('/',usegettapplecentroutes)
app.use('/',usenewscholarshiproutes)
app.use('/',usegettscholarshipaddedbyadminroutes)
app.use('/',usedeletescholarshipbyadminroute)
app.use('/',useupdatescholarshipdataroute)





//listening server
app.listen(5000,(req,res)=>{console.log("server up")})