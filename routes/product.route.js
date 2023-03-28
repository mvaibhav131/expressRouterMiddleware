
const express=require('express')
const productRoute=express.Router();

productRoute.get("/",(req,res,next)=>{res.send("Welcome to Product")})


module.exports=productRoute;