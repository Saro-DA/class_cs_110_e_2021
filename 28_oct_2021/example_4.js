



let number = 6;
const originalNumber = number;

let result = [];

while (number > 0) {
    result.push(number % 2);
    number = Math.floor(number / 2);
}

let resultStr = "";
for (let i = result.length - 1; i >= 0; i--) {
    resultStr += result[i];
}

console.log(resultStr);

// console.log(`Binary value of ${originalNumber} is = ${result}`);