const a = 100;
const b = 17;
const c = 16;
const d = 160;

// To find the maximum among a, b and c.

let max = a;

if (b > max) {
    max = b;
}
if (c > max) {
    max = c;
}
if (d > max) {
    max = d;
}

console.log("Maximum is = " + max);