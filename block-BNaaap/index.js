var http = require('http');
const server = http.createServer(handleServer);

function handleServer(req, res) {
  console.log(req.method);
  res.statusCode = 201;
  res.setHeader('content-type', 'text/html');
  res.end('<h1> Welcome </h1>');
}

server.listen(4444, 'localhost', () => {
  console.log('Localhost server with port is 4444');
});
