const express=require("express");
const cors=require('cors');
const morgan=require('morgan');
const dotenv=require('dotenv')
const colors=require('colors')

const app=express()

//DAATABASE
const connectDb=require("./config/connectDb");
//dotenv.config();
connectDb();
//middlewares
app.use(morgan('dev'));
app.use(express.json())
app.use(cors())
// app.use()


//user routes
 app.use(require("./routes/userRoute"));


//transaction routes
app.use(require("./routes/transactionRoutes"));

const port=8080
 app.listen(port,()=>{
    console.log(`server running on ${port}`);
 })

