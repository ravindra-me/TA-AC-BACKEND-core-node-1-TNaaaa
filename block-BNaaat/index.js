let http = require('http');
let server = http.createServer(handleRequest);
let fs = require('fs');
const { Z_FIXED } = require('zlib');
function handleRequest(req, res) {
  if (req.method === 'GET' && req.url === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome to Index page');
  } else if (req.method === 'GET' && req.url === '/node') {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./node.html').pipe(res);
  } else {
    res.end('error');
  }
}

server.listen(5555, () => {
  console.log('server is listing at port 5555');
});
