
const a = 1;
const b = -5;
const c = 6;

// if (a === 0 && b === 0) {
//     console.log("No answer.");
//     return;
// }

if (a === 0) {
    if (b === 0) {
        console.log("No answer.");
    } else {
        console.log("X = " + (-c / b));
    }

} else {
    const delta = (b * b) - (4 * a * c);

    if (delta < 0) {
        console.log("No answer.");
    } else if (delta === 0) {
        console.log("X = " + (-b / (2 * a)));
    } else {
        console.log("X1 = " + ((-b - Math.sqrt(delta)) / (2 * a)));
        console.log("X2 = " + ((-b + Math.sqrt(delta)) / (2 * a)));
    }

}


