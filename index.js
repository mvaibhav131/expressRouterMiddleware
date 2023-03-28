const express=require('express');
const productRoute = require('./routes/product.route');
const cors=require('cors');


const app=express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//if we use the any console function here as a middlewere 
app.use((req,res,next)=>{
    console.log("Route",req.url, "Method",req.method, "At",new Date())
    //after the console use next function hence it's not showing error.
    next()
})

app.use("/api/product/",productRoute);

app.get('/',(req,res)=>res.send('Hello'));



app.listen(8080,()=>{
console.log('server started port 8080');
});