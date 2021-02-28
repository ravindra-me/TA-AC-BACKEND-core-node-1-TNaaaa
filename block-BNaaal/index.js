var http = require('http');

function handleServer(request, response) {
  response.end('welcome ');
}

var handleServ = http.createServer(handleServer);
handleServ.listen(4000, 'localhost', () => {
  console.log('server listening on port 3000');
});
