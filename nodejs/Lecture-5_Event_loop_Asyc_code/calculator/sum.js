const sumRequest = (req, res) => {
    console.log("1. In Sum request handles", req.url);
    const body = [];
    let result;
    req.on('data', chunk => {
        body.push(chunk);
        console.log("2. chunk Came");
    })
    req.on('end', () => {
         console.log("3. End Event came");
        const bodyStr = Buffer.concat(body).toString();
        console.log(bodyStr)
        const params = new URLSearchParams(bodyStr);
        const bodyobj = Object.fromEntries(params);
        console.log(bodyobj)
        result = parseInt(bodyobj.first) + parseInt(bodyobj.second);
        console.log(result);
       
    });
 console.log("4. Sending response");
     res.setHeader('Content-Type', 'text/html');
        res.write(
            `<html>
                <head>
                    <title>Calcultor</title>
                </head>
                <body>
                    <h1>Your Sum Is ${result}</h1>
                </body>
            </html>
            `
        );
        return res.end();
}

exports.sumRequest = sumRequest;