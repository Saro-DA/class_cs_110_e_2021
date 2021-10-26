

const min = 5;
const max = 17;
const numPerLine = 3;

let result = "";

for (let i = min, count = 1; i <= max; i++, count++) {
    result += i;
    if (i != max) {
        result += ' ';
    }
    if (count % numPerLine === 0 && i !== min) {
        result += '\n';
    }
}

console.log(`Numbers between ${min} and ${max} are:`);
console.log(result);