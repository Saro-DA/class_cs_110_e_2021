

const min = 5;
const max = 15;

let i = min;

let result = "";

while (i <= max) {
    // If i++, the i will be incremented after reading.
    // If ++i, the i will be incremented before reading.
    result += i++ + ' ';
}

console.log(`Numbers between ${min} and ${max} are = ${result}.`);