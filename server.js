const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World mother f*ck')
});

server.listen(port, () => {
console.log(`Server runing on port: ${port}`);
});
