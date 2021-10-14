let a = 100;
let b = 17;
let c = 16;

// To find the maximum among a, b and c.

if (a > b) {
    if (a > c) {
        console.log("Maximum is = " + a);
    } else {
        console.log("Maximum is = " + c);
    }
} else {
    if (b > c) {
        console.log("Maximum is = " + b);
    } else {
        console.log("Maximum is = " + c);
    }
}