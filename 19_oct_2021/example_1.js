const val1 = 10;

if (val1 % 10 === 0) {
    console.log("Is divisible by 10!");
} else {
    console.log("Is not divisible by 10!");
}

// 0, empty string and false are evaluated as false.
if (0) {
    console.log("Insdie if block 1.");
}

if ("") {
    console.log("Insdie if block 2.");
}

let val2 = "0";

if (val2) {
    console.log("Insdie if block 3.");
}

// == vs ===

console.log("10 == \"10\" ? " + (10 == "10"));
console.log("10 === \"10\" ? " + (10 === "10"));

console.log("5 != \"5\" ? " + (5 != "5"));
console.log("5 !== \"5\" ? " + (5 !== "5"));