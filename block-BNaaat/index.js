let http = require('http');
let server = http.createServer(handleRequest);
let fs = require('fs');
function handleRequest(req, res) {
  if (req.method === 'GET' && req.url === '/file') {
    fs.readFile('./node.html', (err, content) => {
      if (err) {
        console.log(err);
      }
      res.setHeader('Content-Type', 'text/html');
      res.end(content);
    });
  } else if (req.method === 'GET' && req.url === '/stream') {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./node.html').pipe(res);
  } else {
    res.end('error');
  }
}

server.listen(5555, () => {
  console.log('server is listing at port 5555');
});
