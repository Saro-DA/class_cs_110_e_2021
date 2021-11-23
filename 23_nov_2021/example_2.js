// Print sides of a given matrix.

printSides([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])

function printSides(mat) {
    const result = [];
    for (let i = 0; i < mat[0].length; i++) {
        result.push(mat[0][i]);
    }

    for (let i = 1; i < mat.length - 1; i++) {
        result.push(mat[i][mat[i].length - 1]);
    }

    for (let i = mat[0].length - 1; i >= 0; i--) {
        result.push((mat[mat.length - 1][i]));
    }

    for (let i = mat.length - 2; i >= 1; i--) {
        result.push(mat[i][0]);
    }

    console.log(result);
}