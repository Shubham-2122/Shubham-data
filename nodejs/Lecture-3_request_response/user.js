// client and server mate  http moduule

const http = require('http');
const fs = require('fs');

// server created
const server = http.createServer((req, res) => {
    // console.log(req);
    console.log(req.url, req.method, req.headers)
    console.log("Server starting..")
    // process.exit();

    // defferent Url show data
    if (req.url === '/') {
        res.setHeader('Contetnt-Type', 'text/html');
        // res.write('<html>');
        // res.write('<head><title>shubham jadav</title></head>');
        // res.write('<body><h1>Enter Your Details : </h1>');
        // res.write('<form>');
        // res.write('<input type="text" name="userbane" placeholder="Enter your Name" ><br>');
        // res.write('<label for="male" >Male</label>');
        // res.write('<input type="radio" id="male" name="gender" value="male"><br>');
        // res.write('<label for="female" >Female</label>');
        // res.write('<input type="radio" id="female" name="gender" value="female">');
        // res.write('<br><input type="submit" value="Submit">');
        // res.write('</form>');
        // res.write('</body>');
        // res.write('</html>');

         res.write(`
            <html>
            <head>
                <title>Shubham Jadav</title>
            </head>
            <body>
                <h1>Enter Your Details</h1>

                <form action="/submit-details" method="POST">
                    <input type="text" name="username" placeholder="Enter your Name" required><br><br>

                    <label for="male">Male</label>
                    <input type="radio" id="male" name="gender" value="male"><br>

                    <label for="female">Female</label>
                    <input type="radio" id="female" name="gender" value="female"><br><br>

                    <input type="submit" value="Submit">
                </form>
            </body>
            </html>
        `);
        return res.end()
    }
    // redirecting route wrong
    else if (req.url.toLowerCase() === "/submit-details" && req.method == "POST"){
        fs.writeFileSync('user.txt','shubham jadav');
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
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
