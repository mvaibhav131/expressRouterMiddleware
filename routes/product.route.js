
const express=require('express')
const productRoute=express.Router();

productRoute.get("/",(req,res,next)=>{res.send("Welcome to Product !")});
productRoute.delete("/productid",(req,res,next)=>{res.send("Product Deleted !")})


module.exports=productRoute;