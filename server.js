const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {

        if (req.url === '/') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
        
            res.end(`<h1>Hello World</h1>\n`);
        } else if (req.url === '/api') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/JSON');
            res.end(JSON.stringify({message: 'greetings'}));
        } else {
            res.statusCode = 404;
            res.end(`<h1>NoT FoUnD</h1>`);
        }
    } 



});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});