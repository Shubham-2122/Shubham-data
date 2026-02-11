const sumRequest = (req, res) => {
    console.log("In Sum request handles", req.url);
    const body = [];
    req.on('data', chunk => {
        body.push(chunk);
    })
    req.on('end', () => {
        const bodyStr = Buffer.concat(body).toString();
        console.log(bodyStr)
        const params = new URLSearchParams(bodyStr);
        const bodyobj = Object.fromEntries(params);
        console.log(bodyobj)
        const result = parseInt(bodyobj.first) + parseInt(bodyobj.second);
        console.log(result);

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
    });
}

exports.sumRequest = sumRequest;