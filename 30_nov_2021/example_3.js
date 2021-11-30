const fs = require('fs');

const data = "Hello World!";

fs.writeFileSync('./output.txt', data, {
    encoding: 'utf-8'
})

const result = fs.readFileSync('./output.txt', {
    encoding: 'utf-8'
})

console.log("File is written!");

console.log(result);