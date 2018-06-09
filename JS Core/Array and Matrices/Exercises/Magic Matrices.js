function magicMatrices(matrix) {
    //calculating sum
    let magicSum = matrix[0].reduce((a, b) => a + b);
    //region checking rows
    for (let row of matrix) {
        let sum = 0;
        for (let i = 0; i < row.length; i++) {
            sum += row[i];
        }
        if (sum !== magicSum) return console.log(false);
    }
    //endregion

    //region checking columns
    for (let i = 0; i < matrix[0].length; i++) {
        let sum = 0;
        for (let j = 0; j < matrix.length; j++) {
            sum += matrix[j][i];
        }
        if (sum !== magicSum) return console.log(false);
    }
    //endregion
    console.log(true);
}


magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
);
magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
);
magicMatrices([[0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]]
);
magicMatrices([[1, 2, 3],
    [1, 5]]);