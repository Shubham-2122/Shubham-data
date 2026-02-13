const http = require('http');
const requestHandler = require('./user');

const server = http.createServer(requestHandler)

const PORT = 3000;

// server respose
server.listen(PORT, () => {
    console.log(`server runing on address http://localhost:${PORT}`)
});

