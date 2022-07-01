var { readFile, readFileSync } = require("fs");
readFile("./content.md", (err, content) => {
  console.log(err, content.toString());
});

//use toString and utf8 as middleware
var result = readFileSync("./content.md", "utf8");
let buff1 = Buffer.alloc(10);
buff1.write("Welcome to buffer");
console.log(result);
console.log(buff1.toString());
