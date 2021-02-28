function square(n) {
  return n * n;
}
square(2);

console.log('Welcome to node.js');

let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log(sum);
var path = require('path');
var os = require('os');
var math = './math.js';
var fs = require('fs');
fs.readFile('./index.md', (err, content) => {
  console.log(err, content.toString());
});

var filePath = path.join(__dirname, 'file.md');
var freeM = os.freemem();
var cpus = os.cpus().length;
// console.log(filePath, freeM, cpus);
