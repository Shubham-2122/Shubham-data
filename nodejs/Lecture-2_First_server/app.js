// client and server mate  http moduule

const http = require('http');

// asnonmuy function
// http.createServer(function(req, res) {
//     console.log(req);
//     console.log("Server starting..")
// });

const server = http.createServer((req, res) => {
    console.log(req);
    console.log("Server starting..")
    process.exit();
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`server runing on address http://localhost:${PORT}`)
});
