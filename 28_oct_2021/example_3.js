

let number = 6;
const originalNumber = number;

let result = "";

while (number > 0) {
    let rem = number % 2;
    result = rem + result;
    number = Math.floor(number / 2);
}

console.log(`Binary value of ${originalNumber} is = ${result}`);