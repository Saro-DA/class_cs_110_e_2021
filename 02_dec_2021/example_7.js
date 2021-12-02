

setTimeout(function () {
    console.log("Hello there!");
}, 3000);

console.log("end of code.");



function doSomethingAfter5Seconds(something) {
    setTimeout(something, 5000)
}

doSomethingAfter5Seconds(function () {
    console.log("Something!");
})