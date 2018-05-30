function fAndLastNumbers(input) {
    let k = input[0];
    let array =input.splice(1);
    let result="";
    for (let  i = 0; i < k; i++) {
        result+=`${array[i]} `;
    }
    result+='\n';
    for (let i = array.length-k; i < array.length; i++) {
        result+=`${array[i]} `;
    }
    console.log(result);
}


fAndLastNumbers([2, 7, 8, 9]);
fAndLastNumbers([3, 6, 7, 8, 9]
)