

const min = 5;
const max = 17;
const numPerLine = 3;

let i = min;
let count = 1;

let result = "";

while (i <= max) {
    result += i;
    if (i != max) {
        result += ' ';
    }
    if (count % numPerLine === 0 && i !== min) {
        result += '\n';
    }
    count++;
    i++;
}

console.log(`Numbers between ${min} and ${max} are:`);
console.log(result);