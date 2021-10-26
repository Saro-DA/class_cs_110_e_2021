

const min = 5;
const max = 15;

let i = min;

let result = "";

while (i <= max) {
    result += i;
    if (i != max) {
        result += ' ';
    }
    i++;
}

console.log(`Numbers between ${min} and ${max} are = ${result}.`);