// // core module
// const http = require('http');

// global module
const express = require('express');

// local module user create
// const requestHanler = require('./user');

 const app = express();

app.get("/",(req,res,next)=>{
    console.log("Came in first middleware",req.url , req.method)
    //  res.send("<h1>hello welcome first middleware </h2>")
    next();
 })

 app.post("/submit-details",(req,res,next)=>{
    console.log("Came in second middleware",req.url , req.method)
    res.send("<h1>hello this Express js</h2>")
 })

 app.use("/",(req,res,next)=>{
    console.log("Came in another middleware",req.url , req.method)
     res.send("<h1>hello another first middleware </h2>")
    // next();
 })



// const server = http.createServer(app)

const PORT = 3001;

app.listen(PORT,()=>{
    console.log(`Server Runing on Address http://localhost:${PORT}`);
});