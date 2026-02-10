// client and server mate  http moduule

const http = require('http');
const fs = require('fs');

// server created
const server = http.createServer((req, res) => {
    // console.log(req);
    console.log(req.url, req.method)
    console.log("Server starting..")
    // process.exit();

    // defferent Url show data
    if (req.url === '/') {
        res.setHeader('Contetnt-Type', 'text/html');

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

        // created buffer data store
        const body = [];
        // chunk created single chunk use

        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });

        // buffer to end data that will show
        req.on("end",()=>{
            const parsedBody = Buffer.concat(body).toString();
            
            console.log(parsedBody)
        
            // URLSearchParams : parsing request code decoding to encoding
            const params = new URLSearchParams(parsedBody);
            // const bodyObject = {};
            // for (const [key, val] of params.entries()){
            //     bodyObject[key] = val;
            // }

            // code replce upper data
            const bodyObject = Object.fromEntries(params);
            console.log(bodyObject);
            fs.writeFileSync('user.txt',JSON.stringify(bodyObject));
        })

        
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
