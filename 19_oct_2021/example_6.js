// To calculate factorial of n.

// n! = n * (n - 1) ... * 1

// 4! = 4 * 3 * 2 * 1 = 24

let number = 4;

let result = 1;

if (number < 0) {
    console.log("Can't calculate for negative numbers.");
    return;
}

while (number >= 1) {
    result *= number;
    number--;
}


console.log(result);