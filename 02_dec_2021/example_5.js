

const multResult = multiplyMatrix(
    [
        [1, 1, 1],
        [2, 2, 2]
    ],
    [
        [1, 1],
        [2, 2],
        [3, 3]
    ]);

console.log(multResult);

function multiplyMatrix(mat1, mat2) {
    const result = [];

    if (mat1[0].length !== mat2.length) return result;

    for (let row = 0; row < mat1.length; row++) {
        result.push([]);
        for (let col = 0; col < mat2[row].length; col++) {
            let sum = 0;
            for (let k = 0; k < mat2.length; k++) {
                sum += mat1[row][k] * mat2[k][col];
            }
            result[row].push(sum);
        }
    }

    return result;
}