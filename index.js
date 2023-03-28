const express=require('express');
const productRoute = require('./routes/product.route');
const cors=require('cors');
const compression = require('compression');


const app=express();

app.use(cors()); // is use to access the origin control
app.use(compression()) //it's maket big response data into gzip,deflate,br file.
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//if we use the any console function here as a middlewere 
// app.use((req,res,next)=>{
//     console.log("Route",req.url, "Method",req.method, "At",new Date())
//     //after the console use next function hence it's not showing error.
//     next()
// })

// Create the middleware for calculate the time required to request

app.use((req,res,next)=>{
    const t1=performance.now();  //current time
    console.log("current time", t1);
    next();
    const t2=performance.now();
    console.log("time taken",t2-t1); //time after next
})


app.use("/api/product/",productRoute);

app.get('/',(req,res)=>res.send('Hello'));



app.listen(8080,()=>{
console.log('server started port 8080');
});