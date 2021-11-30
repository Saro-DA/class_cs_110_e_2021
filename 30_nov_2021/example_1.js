

// To calculate the given power of a given base.

function power(base, pow) {
    if (pow === 0) return 1;

    return base * power(base, pow - 1);
}

function multiply(n1, n2) {
    if (n1 === 0) return 0;

    return n2 + multiply(n1 - 1, n2);
}

console.log(power(2, 3));
console.log(power(2, 1));
console.log(power(2, 0));

console.log(multiply(5, 6));