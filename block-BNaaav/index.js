var http = require('http');

var server = http.createServer(handleRequest);
var fs = require('fs');
function handleRequest(req, res) {
  if (req.url === '/' && req.method === 'GET') {
    fs.createReadStream('.' + req.url).pipe(res);
  } else if (req.url === '/about' && req.method === 'GET') {
    fs.createReadStream('.' + req.url).pipe(res);
  } else if (req.url.split('.').pop() === 'css') {
    res.setHeader('Content-Type', 'text/css');
    fs.createReadStream('./assetss/stylesheets' + req.url).pipe(res);
  } else if (['jpg', 'png'].includes(req.url.split('.').pop())) {
    console.log(__dirname);
    res.setHeader('Content-Type', 'images/' + req.url.split('.').pop());
    fs.createReadStream('./assetss/images' + req.url).pipe(res);
  } else {
    res.end('error');
  }
}

server.listen(5000, () => {
  console.log('listening is at port 5000');
});
