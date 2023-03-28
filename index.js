const express=require('express');
const productRoute = require('./routes/product.route');
const cors=require('cors');


const app=express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/api/product/",productRoute);

app.get('/',(req,res)=>res.send('Hello'));



app.listen(8080,()=>{
console.log('server started port 8080');
});