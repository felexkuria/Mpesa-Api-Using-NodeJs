 const express = require('express');
 const app=express();
 const request= require('request');
 //routes
 app.get('/',(req,res)=>{
   res.send("Request Sucessfuly !!!")
 })
 app.get('/acess_token',(req ,res)=>{
   //acess_token
   let url="https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"
   let auth= new Buffer("LpbbUV3Mi1TAkB3ZADAEXEjygEtzYjTF:bA1Ek5P3YGaMut5K").toString('base64');
   request(
     {
       url:url,
       headers:{
        " Authorization":"Basic"+auth
       }
     },
     (error ,response,body )=>{if(error)
       {console.log(error)}
     else {
       res.json(Json.parse(body))
     }

   }

   )
 })
// function acess(res,req,next)
 //{

 //}
 //listen port
app.listen(80,(err,live)=> {
  if(err){
    console.log(err)
  }
console.log("Server Running Sucessfully")
});
