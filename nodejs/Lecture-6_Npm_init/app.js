const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req);
})

const PORT = 3000;

// server respose
server.listen(PORT, () => {
    console.log(`server runing on address http://localhost:${PORT}`)
});

