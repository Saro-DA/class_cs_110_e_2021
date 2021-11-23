


function factorial(num) {
    if (num <= 1) return 1;

    return num * factorial(num - 1);
}

console.log(`4! = ${factorial(4)}`);
console.log(`0! = ${factorial(0)}`);