function spiralMatrix(row, col) {
    //region filling matrix with zeros
    let matrix = [];
    for (let idx = 0; idx < row; idx++) {
        matrix[idx] = [];
        for (let j = 0; j < col; j++) {
            matrix[idx][j] = 0;
        }
    }
    //endregion
    let count = 0;
    let rotation = 0;
    while (count < row * col) {
        //region going right
        for (let idx = rotation; idx <col - rotation; idx++) {
            matrix[rotation][idx] = ++count
        }
        //endregion
        //region going down
        for (let idx = rotation+1; idx < row-rotation; idx++) {
            matrix[idx][matrix[idx].length - rotation-1] = ++count;
        }
        //endregion
        //region going left
        for (let idx = col-2 - rotation; idx >= rotation; idx--) {
            matrix[row-1- rotation][idx] = ++count;
        }

        //endregion
        //region going up
        for (let idx = row - 2 - rotation; idx > rotation; idx--) {
            matrix[idx][rotation] = ++count
        }
        //endregion
        rotation++;
    }
    for (let row of matrix) {
        console.log(row.join(' '));
    }
}
spiralMatrix(10, 10);