// Print elements on the even indices.

printEvenIndices([1, 2, 3, 4, 5]);

function printEvenIndices(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            console.log(arr[i]);
        }
    }
}