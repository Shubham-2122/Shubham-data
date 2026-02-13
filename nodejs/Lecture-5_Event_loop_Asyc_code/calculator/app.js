const http = require('http');
const{ requestHanler }= require("./hdanler");

const server = http.createServer(requestHanler);

const PORT = 3000;

server.listen(PORT,()=>{
    console.log(`Server Runing on address http://localhost:${PORT}`);
})