const http = require('http');
const testingSyntax = require('./synatx')
const runtime = require('./runtime')
const logical = require("./logical");
const userRequestHandler = require("./user")

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method);
    // testingSyntax();
    // runtime();
    // logical();
    userRequestHandler(req,res)
})

const PORT = 3001;

server.listen(PORT,()=>{
    console.log(`Server runing on address http://localhost:${PORT}`);
});