const http = require('http');
const testingSyntax = require('./synatx')

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method);
    testingSyntax();
})

const PORT = 3000;

server.listen(PORT,()=>{
    console.log(`Server runing on address http://localhost:${PORT}`);
});