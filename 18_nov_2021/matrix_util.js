

module.exports = {
    printMatrixElements: function (mat) {
        let result = "";

        for (let row = 0; row < mat.length; row++) {
            for (let col = 0; col < mat[row].length; col++) {
                result += mat[row][col] + (col === mat[row].length - 1 ? '' : ' ');
            }
            result += (row === mat.length - 1 ? '' : '\n');
        }

        console.log(result);
    },

    getMainDiagonal: function (mat) {
        const result = [];

        for (let row = 0; row < mat.length; row++) {
            for (let col = 0; col < mat[row].length; col++) {
                if (row === col) {
                    result.push(mat[row][col]);
                }
            }
        }

        return result;
    },

    getMainDiagonalAlt: function (mat) {
        const result = [];

        for (let row = 0; row < mat.length; row++) {
            result.push(mat[row][row]);
        }

        return result;
    },

    getPrincipalDiagonal: function (mat) {
        const result = [];

        for (let row = 0; row < mat.length; row++) {
            for (let col = 0; col < mat[row].length; col++) {
                if (col + row === mat[row].length - 1) {
                    result.push(mat[row][col]);
                }
            }
        }

        return result;
    },

    getPrincipalDiagonalAlt: function (mat) {
        const result = [];

        for (let row = 0; row < mat.length; row++) {
            result.push(mat[row][mat[row].length - 1 - row]);
        }

        return result;
    },
}