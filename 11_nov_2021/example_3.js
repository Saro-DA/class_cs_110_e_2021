

function f1() {
    console.log('f1');
}

const f2 = function () {
    console.log('f2');
}

f1();
f2();

function createHelloWorldFunction() {
    return function () {
        console.log('hello world!');
    }
}

const helloWorld = createHelloWorldFunction();

helloWorld();