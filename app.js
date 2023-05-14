const express=require('express');

const app=express();

const userRoute=require('./routes/userRoutes');


app.use("/api/v1",userRoute);
module.exports=app;