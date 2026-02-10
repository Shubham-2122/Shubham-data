// client and server mate  http moduule

const http = require('http');

// server created
const server = http.createServer((req, res) => {
    // console.log(req);
    console.log(req.url, req.method, req.headers)
    console.log("Server starting..")
    // process.exit();

    // defferent Url show data
    if (req.url === '/') {
        res.setHeader('Contetnt-Type', 'text/html');
        res.write('<html>');
        res.write('<hrad><title>shubham jadav</title></head>');
        res.write('<body><h1>Welcome to Home page</h1></body>')
        res.write('</html>');
        return res.end()
    }
    else if (req.url === '/products') {
        res.setHeader('Contetnt-Type', 'text/html');
        res.write('<html>');
        res.write('<hrad><title>shubham jadav</title></head>');
        res.write('<body><h1>Products To chckout data</h1></body>')
        res.write('</html>');
        return res.end()
        
    }

    res.setHeader('Contetnt-Type', 'text/html');
    res.write('<html>');
    res.write('<hrad><title>shubham jadav</title></head>');
    res.write('<body><h1>Hello shubham jadav here for node js</h1></body>')
    res.write('</html>');
    res.end()

});

const PORT = 3000;

// server respose
server.listen(PORT, () => {
    console.log(`server runing on address http://localhost:${PORT}`)
});
