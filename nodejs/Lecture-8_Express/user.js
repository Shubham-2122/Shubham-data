const fs = require('fs');

const userRequestHandler =(req,res)=>{
    console.log("hello")
    console.log(req.url , req.method)
}

module.exports = userRequestHandler;