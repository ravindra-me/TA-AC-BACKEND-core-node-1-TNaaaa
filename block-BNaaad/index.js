console.log("Welcome to Node.js");
let os = require("os");
let { readFile, unlink } = require("fs");
let cpus = os.cpus().length;
console.log(cpus);
console.log(os.freemem());
let sum = 0;
for (let index = 1; index <= 10; index++) {
  sum += index;
}

console.log(sum);
