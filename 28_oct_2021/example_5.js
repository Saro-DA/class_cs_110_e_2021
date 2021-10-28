



let number = 6;
const originalNumber = number;

let result = [];

while (number > 0) {
    result.unshift(number % 2);
    number = Math.floor(number / 2);
}

// let resultStr = "";
// for (let i = 0; i < result.length; i++) {
//     resultStr += result[i];
// }

console.log(result.join(''));

// console.log(`Binary value of ${originalNumber} is = ${result}`);