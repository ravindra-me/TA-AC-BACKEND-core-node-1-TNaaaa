var http = require('http');
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.headers, req.url);
  res.end('welcome');
}

server.listen(3000, 'localhost', () => {
  console.log('localhost and port is 3000 ');
});
