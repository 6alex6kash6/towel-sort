// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined) return [];

    let reverseMatrix = matrix.slice();

    for (let i = 0; i < reverseMatrix.length; i++) {
        if (i % 2 !== 0) matrix[i] = reverseMatrix[i].reverse();
    }

    return matrix.flat();
};
