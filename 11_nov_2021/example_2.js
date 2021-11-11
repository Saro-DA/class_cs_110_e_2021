
let myArray;

// This will create a new array but will keep its address in arr
// and myArray will stay undefined since addresses are copied.
// function createArray(arr) {
//     arr = [1, 2, 3];
// }

function createArray() {
    return [1, 2, 3]
}

myArray = createArray();

console.log(myArray);