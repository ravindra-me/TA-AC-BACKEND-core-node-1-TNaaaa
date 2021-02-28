var fs = require('fs');
fs.readFile('./content.md', (err, content) => {
  console.log(err, content);
});

let buff1 = Buffer.alloc(10);
buff1.write('Welcome to buffer');
console.log(buff1.toString());
