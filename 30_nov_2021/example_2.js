

function fibonacciHelper(found, n) {
    if (n === 0) return 0;

    if (n === 1) return 1;

    const f = found.get(n);

    if (f) {
        return f;
    }

    const result = fibonacciHelper(found, n - 1) + fibonacciHelper(found, n - 2);

    console.log(result);

    found.set(n, result);

    return result;
}

function fibonacci(n) {
    const found = new Map();
    return fibonacciHelper(found, n)
}

console.time('fibonacci');
console.log(fibonacci(50));
console.timeEnd('fibonacci');