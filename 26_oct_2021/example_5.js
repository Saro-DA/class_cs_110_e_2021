
let total = 10;
const character = '*';
let result = "";

for (let i = 1; i <= total; i++) {
    result += character;
}

// Since 'i' is not in this scope, there will be run time error.
// console.log(i);

console.log(result);