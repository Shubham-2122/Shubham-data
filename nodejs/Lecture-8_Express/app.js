// core module
const http = require('http');

// global module
const express = require('express');

// local module user create
const requestHanler = require('./user');

const server = http.createServer(requestHanler)

const PORT = 3001;

server.listen(PORT,()=>{
    console.log(`Server Runing on Address http://localhost:${PORT}`);
});