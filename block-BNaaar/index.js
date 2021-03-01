var http = require('http');
var server = http.createServer(handleServer);

function handleServer(req, res) {
  if (req.method === 'GET' && req.url === '/') {
    res.end('WElcome to homepage');
  } else if (req.method === 'GET' && req.url === '/about') {
    res.setHeader('content-type', 'text/html');
    res.end('<h2> this is all about Node.js');
  } else if (req.method === 'POST' && req.url === '/about') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'this is a post request' }));
  }
}

server.listen(5000, () => {
  console.log('server listing on port 5000');
});
