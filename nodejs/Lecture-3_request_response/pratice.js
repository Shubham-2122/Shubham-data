const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    if(req.url === "/home"){
        res.write('<h1>Welcome to Home</h1>');
        return res.end();
    }
    else if(req.url === "/men"){
         res.write('<h1>Welcome to Men Page</h1>');
        return res.end();
    }
    else if(req.url === "/women"){
         res.write('<h1>Welcome to women Page</h1>');
        return res.end();
    }
    else if(req.url === "/kids"){
         res.write('<h1>Welcome to Kids Page</h1>');
        return res.end();
    }
     else if(req.url === "/cart"){
         res.write('<h1>Welcome to cart Page</h1>');
        return res.end();
    }

    res.write(`
       <!DOCTYPE html>
<html lang="en">
<head>
    <title>Flipkart</title>
</head>
<body>
    <nav>
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/men">Men</a></li>
            <li><a href="/women">Woman</a></li>
            <li><a href="/kids">Kids</a></li>
            <li><a href="/cart">Cart</a></li>
        </ul>
    </nav>
</body>
</html> 

        `);
    res.end();
});

const PORT = 3000;

// server respose
server.listen(PORT, () => {
    console.log(`server runing on address http://localhost:${PORT}`)
});