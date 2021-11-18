const matUtil = require('./matrix_util.js');

const matrix = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i']
];

matUtil.printMatrixElements(matrix);

console.log(matUtil.getMainDiagonal(matrix));
console.log(matUtil.getMainDiagonalAlt(matrix));

console.log(matUtil.getPrincipalDiagonal(matrix));
console.log(matUtil.getPrincipalDiagonalAlt(matrix));