// Shift an array to the right.

function shiftRight(arr) {
    const lastElement = arr[arr.length - 1];

    for (let i = arr.length - 1; i >= 1; i--) {
        arr[i] = arr[i - 1];
    }

    arr[0] = lastElement;
}

const myArray = [2, 3, 4, 1, 0, 5];
shiftRight(myArray);

console.log(myArray);

