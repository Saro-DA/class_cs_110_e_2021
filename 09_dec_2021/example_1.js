
console.log(returnCascade([
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
]));
// console.log(returnCascade([
//     [1, 2, 3, 4, 5, 6],
//     [1, 2, 3, 4, 5, 6],
//     [1, 2, 3, 4, 5, 6],
//     [1, 2, 3, 4, 5, 6],
//     [1, 2, 3, 4, 5, 6],
//     [1, 2, 3, 4, 5, 6],
// ]));

function returnCascade(mat) {
    const result = [];

    let row = 0;
    let col = 0;
    let horizontal = true;
    const matrixWidth = mat[0].length;
    while (!(horizontal && row >= mat.length) && !(!horizontal && col >= matrixWidth)) {
        result.push(mat[row][col]);

        if (horizontal) {
            col++;
        } else {
            row++;
        }

        horizontal = !horizontal;
    }

    return result;
}