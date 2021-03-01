var http = require('http');
var server = http.createServer(handleRequest);
// function handleRequest(req, res) {
//   console.log(req, res);
// }
// server.listen(5000, () => {
//   console.log('server is listening at port 5000');
// });

// port is 5100

// function handleRequest(req, res) {
//   res.end('My first server in Node.js');
// }
// server.listen(5100, () => {
//   console.log('server is listening at port 5100');
// });

// port is 5555

// function handleRequest(req, res) {
//   console.log(req.headers);
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h2>This is node header');
// }
// server.listen(5555, () => {
//   console.log('server is listening at port 5555');
// });

// port is 5566

// function handleRequest(req, res) {
//   console.log(req.url, req.method);
//   res.end(`${req.url} ${req.method} `);
// }
// server.listen(5566, () => {
//   console.log('server is listening at port 5566');
// });

// 7000 port

// function handleRequest(req, res) {
//   //   res.end(req.headers);
//   console.log(req.headers);
// }
// server.listen(7000, () => {
//   console.log('server is listening at port 7000');
// });

// port 3333

// function handleRequest(req, res) {
//   res.statusCode = 202;
//   res.end('set status');
// }
// server.listen(3333, () => {
//   console.log('server listening on port 3333');
// });

// port 8000

// function handleRequest(req, res) {
//   res.setHeader('Content-Type', 'text/html');
//   res.end(`<h1> welcome to altcampus</h1>`);
// }
// server.listen(8000, () => {
//   console.log('server listening on port 3333');
// });

// function handleRequest(req, res) {
//   res.writeHead(202, { 'Content-Type': 'text/html' });
//   res.end(`<h3> Welcome to altcampus </h3>`);
// }
// server.listen(8000, () => {
//   console.log('server listening on port 3333');
// });

// function handleRequest(req, res) {
//   res.setHeader('Content-Type', 'application/json');
//   res.end(JSON.stringify({ success: true, message: 'Welcome to Nodejs' }));
// }
// server.listen(8888, () => {
//   console.log('server listening on port 8888');
// });

// function handleRequest(req, res) {
//   console.log(req.method);
//   res.setHeader('Content-Type', 'text/html');
//   res.end(`<h2>posted for first time</h2>`);
// }
// server.listen(5050, () => {
//   console.log('server listening on port 5050');
// });

// function handleRequest(req, res) {
//   if (req.method === 'GET' && req.url === '/') {
//     res.end('My name is Ravindra singh');
//   } else if (req.method === 'GET' && req.url === '/about') {
//     res.setHeader('Content-Type', 'text/html');
//     res.end(`<h2> Ravindra singh</h2>`);
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('404 page not found');
//   }
// }
// server.listen(2345, () => {
//   console.log('server listening on port 2345');
// });

// function handleRequest(req, res) {
//   if (req.method === 'GET' && req.url === '/users') {
//     res.setHeader('Content-Type', 'text/html');

//     res.end(`<form>
//           <input type="text"/>
//           <input type="email"/>
//         </form>`);
//   } else if (req.method === 'POST' && req.url === '/users') {
//     res.setHeader('Content-Type', 'text/plain');

//     console.log(req.method);
//     res.end('Posted for the second time');
//   } else {
//     res.end('error');
//   }
// }
// server.listen(8000, () => {
//   console.log('server listening on port 8000');
// });

var url = require('url');

function handleRequest(req, res) {
  let parseUrl = url.parse(req.url, true);
  console.log(parseUrl.pathname, req.url, parseUrl.query.email);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(parseUrl.query));
}
server.listen(5100, () => {
  console.log('server is listening at port 5100');
});
