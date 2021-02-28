var { cpus, freemem, uptime, version } = require('os');
console.log(cpus().length, freemem(), uptime(), version());
var { readFile, readFileSync, unlink } = require('fs');

var syncResult = readFileSync('./app.js');
console.log(syncResult);
readFile('./area.js', (err, content) => {
  console.log(content.toString());
});

var buffer1 = Buffer.alloc(15);
var buffer2 = Buffer.allocUnsafe(15);
buffer2.write('it is second method to create buffer class');
buffer1.write('It is First Method to create buffer class');
console.log(buffer2.toString());
console.log(buffer1.toString());

const url = require('url');
const urlParse = url.parse(
  'https://airindia.com/fares/calculate?from=delhi&to=detroit',
  true
);
console.log(urlParse.query, urlParse.pathname, urlParse.protocol);
