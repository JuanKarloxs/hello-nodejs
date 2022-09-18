const http = require('http');

const port = 3000;

const server = http.CreateServer((req, res) => {
res.statusCode = 200;
res.setHeader('Contnet-Type', 'text/plain');
res.end('Hello World mother f*ck')
});

server.listen(port, () {
coonsole.log(`Server runing on port: ${port}`);
});
