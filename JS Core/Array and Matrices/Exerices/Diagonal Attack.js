function dAttack(input) {

    let matrix =[];
    for (let i = 0; i < input.length; i++) {
        let curString = input[i];
        let arr = curString.split(' ').map(a=>Number(a));
        matrix.push(arr);
    }
    let col = matrix[0].length;
    let row =col;
    let leftToRightUp=0;
    let rightToLeftDown=0;
    for (let i = 0; i < col; i++) {
        let currentNumber =matrix[i][i];
        leftToRightUp+=currentNumber;
    }
    for (let i = row-1; i >=0; i--) {
        let currentNumber = matrix[row-i-1][i];
        rightToLeftDown+=currentNumber;
    }
    if(rightToLeftDown===leftToRightUp){
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < row; j++) {
                if(i!==j&&row-i-1!==j){
                    matrix[i][j]=leftToRightUp;
                }
            }
        }
    }
   matrix.forEach(line=>console.log(line.join(' ')));

}




dAttack(['5 3 12 3 1',
        '11 4 23 2 5',
        '101 12 3 21 10',
        '1 4 5 2 2',
        '5 22 33 11 1']
);
dAttack(['1 1 1',
    '1 1 1',
    '1 1 0']
)