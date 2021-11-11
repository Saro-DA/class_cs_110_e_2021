function f1() {
    return "Hello World";
}

function f2() {
    return f1();
}

console.log(f2());