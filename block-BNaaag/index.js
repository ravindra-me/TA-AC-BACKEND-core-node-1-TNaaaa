var { readFile, readFileSync } = require('fs');
readFile('./content.md', 'utf8', (err, content) => {
  console.log(err, content);
});

var result = readFileSync('./content.md', 'utf8');
console.log(result);

let buff1 = Buffer.alloc(10);
buff1.write('Welcome to buffer');
console.log(buff1.toString());
