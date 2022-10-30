const http = require('http');

const port = 3000;

const server = http.createServer( (req, res) =>{
    res.writeHead( 200, { 'Content-type': 'text/html;charset=uft-8' } );
    res.write('<h3> Mi primer server Online de AWS </h3>');
    res.end('Hello World mother f*ck');
} );

server.listen(port);
console.log(`Server runing on port: ${port}`);
