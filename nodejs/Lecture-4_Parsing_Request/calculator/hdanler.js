const { sumRequest } = require("./sum");

const requestHanler = (req, res) => {
    console.log(req.url, req.method);

    if (req.url === "/") {
        res.setHeader('Content-Type', 'text/html');
        res.write(
            `<html>
                <head>
                    <title>Calcultor</title>
                </head>
                <body>
                    <h1>Welcome to Calculators</h1>
                    <a href="/calculator">Go To Calculators</a>
                </body>
            </html>
            `
        );
        return res.end();
    }
    else if (req.url.toLowerCase() === "/calculator") {
        res.setHeader('Content-Type', 'text/html');
        res.write(
            `<html>
                <head>
                    <title>Calcultor</title>
                </head>
                <body>
                    <h1>Here is the Calculators</h1>
                    <form action="/calculate-result" method="POST">
                        <input type="text" placeholder="First num" name="first" />
                        <input type="text" placeholder="=secound num" name="second" />
                        <input type="submit" value="Sum" />
                    </form>
                </body>
            </html>
            `
        );
        return res.end();
    }

    else if (req.url.toLowerCase() === "/calculate-result" && req.method === "POST"){
        return sumRequest(req,res);
    }

    res.setHeader('Content-Type', 'text/html');
    res.write(
        `<html>
                <head>
                    <title>Calcultor</title>
                </head>
                <body>
                    <h1>404 Page Does Not Exist</h1>
                    <a href="/">Go To Home</a>
                </body>
            </html>
            `
    );
    return res.end();
}

exports.requestHanler = requestHanler